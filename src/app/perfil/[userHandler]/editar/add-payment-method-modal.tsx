"use client";
import type { PaymentMethodType } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { createPaymentMethodAction } from "@/actions/payment-methods";
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
import { API, mockActionResponseFromAPI } from "@/core/api";
import { env } from "@/env.mjs";
import { useInputFile } from "@/hooks/use-input-file";
import { getBucketObjectInfo } from "@/lib/utils";

export function AddPaymentMethodModal({
	children,
	userId,
	type,
}: React.PropsWithChildren<{ userId: string; type: PaymentMethodType }>) {
	const [open, setOpen] = React.useState(false);

	const router = useRouter();
	const INPUT_ID = React.useId();

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

	const { mutateAsync, isPending: disabled } = useMutation({
		mutationFn: async () => {
			if (!inputValue) {
				throw new Error("No se ha seleccionado una imagen del metodo de pago");
			}

			const url = await API.upload.getPresignedUrl({
				key: inputValue.name,
			});

			await API.upload.uploadFile({
				file: inputValue,
				url: url.data,
			});

			const { objectUrl } = getBucketObjectInfo({
				key: inputValue.name,
				buckerName: env.NEXT_PUBLIC_S3_BUCKET_NAME,
			});

			return mockActionResponseFromAPI(createPaymentMethodAction)({
				type,
				image: objectUrl,
				userId,
			});
		},
		onSuccess: () => {
			clearInput();
			router.refresh();
			setOpen(false);
		},
	});

	return (
		<Dialog
			open={open}
			onOpenChange={open => {
				if (disabled) return;
				setOpen(open);
			}}
		>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className='max-h-[80%] max-w-max overflow-y-auto sm:max-w-[425px] md:max-w-5xl'>
				<DialogHeader>
					<DialogTitle>Crear nuevo metodo de pago: {type}</DialogTitle>
				</DialogHeader>

				<div>
					<div>
						<span className='mb-1'>Imagen del metodo de pago</span>

						<div>
							<div className='relative mx-auto w-fit'>
								<Image
									src={image}
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
						onClick={() => mutateAsync()}
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
