"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

import { buyProductAction } from "@/actions/products";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { mockActionResponseFromAPI } from "@/core/api";
import { ROUTES } from "@/core/routes";
import { useProductContext } from "./context";

export function PayButton({ productId }: { productId: string }) {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);

	const { address, phone, paymentMethodId, selectedPaymentMethodType } =
		useProductContext();
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

			return mockActionResponseFromAPI(buyProductAction)({
				clientPhone: phone,
				deliveryAddress: address,
				deliveryPriceInCents: 0,
				description: null,
				methodId: paymentMethodId,
				productId,
				quantity: 1,
			});
		},
		onSuccess: response => {
			const newRequestId = response.data;

			router.push(ROUTES.validarPedido.detalle(newRequestId));
		},
	});

	if (selectedPaymentMethodType === "EFECTIVO") {
		return (
			<Button
				className='w-full'
				disabled={!paymentMethodId || isPending}
				onClick={() => mutateAsync()}
			>
				{isPending ? "Haciendo pedido..." : "Hacer pedido"}
			</Button>
		);
	}

	return (
		<Dialog
			open={open}
			onOpenChange={open => {
				if (isPending) return;
				setOpen(open);
			}}
		>
			<DialogTrigger asChild>
				<Button className='w-full' disabled={!paymentMethodId}>
					{isPending ? "Haciendo pedido..." : "Hacer pedido"}
				</Button>
			</DialogTrigger>

			<DialogContent className='max-h-[80%] max-w-max overflow-y-auto sm:max-w-[425px] md:max-w-5xl'>
				<DialogHeader>
					<DialogTitle>Crear nuevo metodo de pago</DialogTitle>
				</DialogHeader>

				<DialogFooter>
					<Button
						type='submit'
						disabled={isPending}
						onClick={() => mutateAsync()}
					>
						{isPending ? "Confirmando..." : "Confirmar pedido"}
					</Button>
					<DialogClose asChild>
						<Button variant='destructive' type='button' disabled={isPending}>
							Cancelar
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
