"use client";
import type { PaymentMethod } from "@prisma/client";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useUpdatePaymentMethod } from "@/core/queries/payment-methods";
import { useActionModal } from "@/hooks/use-action-modal";
import { useInputFile } from "@/hooks/use-input-file";

export function UpdatePaymentMethodModal({
	type,
	id,
	image: originalImage,
}: Pick<PaymentMethod, "type" | "id" | "image">) {
	const INPUT_ID = React.useId();

	const { onOpenChange, open } = useActionModal();
	const { clearInput, image, inputValue, onChangeValue } = useInputFile({
		type: "image",
		resizerOptions: {
			maxWidth: 600,
			maxHeight: 600,
			minWidth: 120,
			minHeight: 120,
			outputType: "file",
			quality: 500,
			rotation: 0,
			compressFormat: "JPEG",
		},
		inputId: INPUT_ID,
	});

	const { mutateAsync, isPending: disabled } = useUpdatePaymentMethod({
		onMutate: variables => {
			if (!variables.image) {
				throw new Error("No se ha seleccionado una imagen del metodo de pago");
			}
		},
		onSuccess: () => {
			clearInput();
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
			<DialogContent size='lg'>
				<DialogHeader>
					<DialogTitle>Editar metodo de pago: {type}</DialogTitle>
				</DialogHeader>

				<div>
					<div>
						<span className='mb-1'>Imagen del metodo de pago</span>

						<div>
							<div className='relative mx-auto w-fit'>
								<Image
									src={
										image === "/images/avatar/1.jpg" && originalImage
											? originalImage
											: image
									}
									placeholder='blur'
									blurDataURL='/images/avatar/1.jpg'
									alt='profile preview image'
									width={300}
									height={300}
								/>
								<div className='absolute inset-0 transition duration-500 group-hover:bg-slate-900/40'></div>
								<label
									className='absolute inset-0 cursor-pointer'
									htmlFor={INPUT_ID}
								></label>
							</div>
						</div>

						<input
							id={INPUT_ID}
							name={INPUT_ID}
							type='file'
							className='hidden'
							accept='image/*'
							onChange={onChangeValue}
							disabled={disabled}
						/>
					</div>
				</div>

				<DialogFooter>
					<Button
						type='submit'
						disabled={disabled}
						onClick={() =>
							mutateAsync({
								id,
								image: inputValue,
							})
						}
					>
						{disabled ? "Guardando..." : "Guardar"}
					</Button>
					<DialogClose asChild>
						<Button variant='destructive' type='button' disabled={disabled}>
							Cancelar
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
