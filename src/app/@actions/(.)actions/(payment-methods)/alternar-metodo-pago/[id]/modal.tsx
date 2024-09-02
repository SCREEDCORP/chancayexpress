"use client";
import type { PaymentMethod } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

import { updatePaymentMethodAction } from "@/actions/payment-methods";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { mockActionResponseFromAPI } from "@/core/api";
import { useActionModal } from "@/hooks/use-action-modal";

export function DeletePaymentMethodModal({
	id,
	type,
	status,
}: Pick<PaymentMethod, "id" | "type" | "status">) {
	const { onOpenChange, open } = useActionModal();

	const { mutateAsync, isPending: disabled } = useMutation({
		mutationFn: () => {
			return mockActionResponseFromAPI(updatePaymentMethodAction)({
				id,
				status: !status,
			});
		},
		onSuccess: () => {
			onOpenChange(false);
		},
	});

	return (
		<Dialog
			open={open}
			onOpenChange={open => {
				if (disabled) return;
				onOpenChange(open);
			}}
		>
			<DialogContent size='sm'>
				<DialogHeader>
					<DialogTitle>
						{status ? "Desactivar" : "Activar"} metodo de pago
					</DialogTitle>
					<DialogDescription>
						Estas seguro que quiere {status ? "desactivar" : "Activar"} el
						metodo de pago: {type}
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button
						disabled={disabled}
						onClick={() => mutateAsync()}
						variant='destructive'
					>
						{disabled ? "Confirmando..." : "Confirmar"}
					</Button>
					<DialogClose asChild>
						<Button type='button' disabled={disabled}>
							Cancelar
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
