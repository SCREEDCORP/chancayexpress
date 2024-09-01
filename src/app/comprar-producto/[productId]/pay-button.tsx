"use client";
import { useMutation } from "@tanstack/react-query";

import { buyProductAction } from "@/actions/products";
import { Button } from "@/components/ui/button";
import { useProductContext } from "./context";

export function PayButton({ productId }: { productId: string }) {
	const { address, phone, paymentMethodId } = useProductContext();
	const { mutateAsync, isPending } = useMutation({
		mutationFn: () => {
			if (!paymentMethodId) {
				throw new Error("No se ha seleccionado un metodo de pago");
			}

			if (!phone) {
				throw new Error("No se ha ingresado un numero de teléfono");
			}

			if (phone.length !== 9) {
				throw new Error("El numero de teléfono ingresado no es válido");
			}

			if (!address) {
				throw new Error("No se ha ingresado una dirección de entrega");
			}

			return buyProductAction({
				clientPhone: phone,
				deliveryAddress: address,
				deliveryPriceInCents: 0,
				description: null,
				methodId: paymentMethodId,
				productId,
				quantity: 1,
			});
		},
	});

	return (
		<Button
			className='w-full'
			onClick={() => mutateAsync()}
			disabled={isPending}
		>
			{isPending ? "Haciendo pedido..." : "Hacer pedido"}
		</Button>
	);
}
