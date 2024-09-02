"use client";
import type { PaymentMethod } from "@prisma/client";

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
import { useUpdatePaymentMethod } from "@/core/queries/payment-methods";
import { useActionModal } from "@/hooks/use-action-modal";

export function DeletePaymentMethodModal({
	id,
	type,
	status,
}: Pick<PaymentMethod, "id" | "type" | "status">) {
	const { onOpenChange, open } = useActionModal();

	const { mutateAsync, isPending: disabled } = useUpdatePaymentMethod({
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
						Esta seguro que desea {status ? "desactivar" : "activar"} el metodo
						de pago: {type}
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button
						disabled={disabled}
						onClick={() =>
							mutateAsync({
								id,
								status: !status,
							})
						}
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
