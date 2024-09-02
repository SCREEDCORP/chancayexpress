"use client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { buyProductAction } from "@/actions/products";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
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

	const { address, phone, paymentMethodId, selectedPaymentMethod } =
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
			// const newRequestId = response.data;

			router.push(ROUTES.home);
		},
	});

	if (!selectedPaymentMethod || !phone || !address) {
		return (
			<Button className='w-full' disabled={true}>
				Hacer pedido
			</Button>
		);
	}

	if (selectedPaymentMethod?.type === "EFECTIVO") {
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
				<Button
					className='w-full'
					disabled={!paymentMethodId || isPending || !selectedPaymentMethod}
				>
					{isPending ? "Haciendo pedido..." : "Hacer pedido"}
				</Button>
			</DialogTrigger>

			<DialogContent size='lg'>
				<DialogHeader className='text-left'>
					<DialogTitle>Hacer pedido</DialogTitle>
					<DialogDescription>
						Para realizar el pedido mediante el metodo de pago:{" "}
						{selectedPaymentMethod?.type}, debe realizar el pago para poder
						proceder.
					</DialogDescription>
				</DialogHeader>
				<div>
					{selectedPaymentMethod.image ? (
						<Image
							src={selectedPaymentMethod.image}
							alt=''
							className='mx-auto'
							width={300}
							height={300}
						/>
					) : null}
				</div>
				<DialogFooter>
					<Button
						type='submit'
						disabled={isPending}
						onClick={() => mutateAsync()}
					>
						{isPending ? "Confirmando..." : "Confirmar pago"}
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
