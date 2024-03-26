"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserType, type User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API } from "@/core/api";
import { env } from "@/env.mjs";
import { useInputFile } from "@/hooks/use-input-file";
import { getBucketObjectInfo } from "@/lib/utils";
import type { NonNullableObject, ZodInferSchema } from "@/types";

const NavbarLight = dynamic(() => import("./components/navbar-light"));

type CreateUser = Omit<
	User,
	"id" | "createdAt" | "updatedAt" | "emailVerified" | "image" | "type"
>;

const schema = z.object<ZodInferSchema<NonNullableObject<CreateUser>>>({
	email: z.string(),
	name: z.string(),
	nameHandler: z
		.string()
		.regex(
			/^[a-zA-Z0-9_]*$/,
			"Nombre unico del negocio invalido. Solo puede contener letras, numeros y guiones bajos",
		),
	description: z.string(),
	direction: z.string(),
	phone: z.string(),
});

const PROFILE_IMAGE_INPUT_ID = "profile-image-input-id";

export default function CreatorProfile() {
	const { inputValue, clearInput, image, onChangeValue } = useInputFile({
		resizerOptions: {
			compressFormat: "JPEG",
			maxHeight: 600,
			maxWidth: 600,
			outputType: "file",
			quality: 500,
			rotation: 0,
			minHeight: 120,
			minWidth: 120,
		},
		type: "image",
		inputId: PROFILE_IMAGE_INPUT_ID,
		withPasteAnywhere: false,
	});

	const { isPending, mutate } = useMutation({
		mutationFn: async (data: z.infer<typeof schema>) => {
			const formData = new FormData();

			Object.entries(data).forEach(([key, value]) => {
				formData.append(key, value);
				// if (value) {
				// }
			});

			formData.append("type", UserType.STORE);

			if (inputValue) {
				const urlRes = await API.upload.getPresignedUrl({
					key: inputValue.name,
				});

				await API.upload.uploadFile({
					file: inputValue,
					url: urlRes.data,
				});

				const { objectUrl } = getBucketObjectInfo({
					key: inputValue.name,
					buckerName: env.NEXT_PUBLIC_S3_BUCKET_NAME,
				});

				formData.append("image", objectUrl);
			}

			const res = await fetch("/api/users", {
				method: "POST",
				body: formData,
			});

			if (!res.ok) {
				const msg = await res.json();
				throw new Error(msg.message);
			}

			return res.json();
		},
		onSuccess: () => {
			clearInput();
		},
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		disabled: isPending,
	});

	return (
		<>
			{/* <NavbarLight /> */}

			<div className='relative mt-7'>
				<div className='shape absolute -bottom-[2px] end-0 start-0 z-1 overflow-hidden text-white dark:text-slate-900 sm:-bottom-px'>
					<svg
						className='h-auto w-full'
						viewBox='0 0 2880 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'
							fill='currentColor'
						></path>
					</svg>
				</div>
			</div>
			<section className='relative py-16 md:py-24'>
				<div className='container'>
					<div className='grid gap-[30px] md:grid-cols-12'>
						<div className='md:col-span-4 lg:col-span-3'>
							<div className='profile-pic group w-[112px]'>
								<input
									id={PROFILE_IMAGE_INPUT_ID}
									name='profile-image'
									type='file'
									className='hidden'
									accept='image/*'
									onChange={onChangeValue}
								/>
								<div>
									<div className='relative ml-7 h-28 w-28 overflow-hidden rounded-full shadow-md ring-4 ring-slate-50 dark:shadow-gray-800 dark:ring-slate-800'>
										<Image
											src={image}
											placeholder='blur'
											blurDataURL='/images/avatar/1.jpg'
											className='rounded-full'
											alt='profile preview image'
											width={112}
											height={112}
										/>
										<div className='absolute inset-0 transition duration-500 group-hover:bg-slate-900/40'></div>
										<label
											className='absolute inset-0 cursor-pointer'
											htmlFor={PROFILE_IMAGE_INPUT_ID}
										></label>
									</div>
								</div>
							</div>

							<p className='mt-4 text-slate-400 '>
								Sube tu foto de perfil, recomendamos que tu imagen sea de
								400X400px.
							</p>
						</div>

						<div className='md:col-span-8 lg:col-span-9'>
							<h5 className='mb-4 text-center text-lg font-semibold'>
								Crea el Perfil de un Negocio:
							</h5>
							<div className='rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800'>
								<Form {...form}>
									<form onSubmit={form.handleSubmit(data => mutate(data))}>
										<div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
											<FormField
												control={form.control}
												name='name'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Nombre del Negocio</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder='Chancay Express'
																value={field.value ?? undefined}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='email'
												render={({ field }) => (
													<FormItem>
														<FormLabel>
															Email: <span className='text-red-600'>*</span>
														</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder='name@domain.com'
																value={field.value ?? undefined}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className='mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2'>
											<FormField
												control={form.control}
												name='nameHandler'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Nombre unico del negocio</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder='ChancayExpress'
																value={field.value ?? undefined}
															/>
														</FormControl>
														<FormDescription>
															Este es el identificador de tu negocio
														</FormDescription>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='phone'
												render={({ field }) => (
													<FormItem>
														<FormLabel>
															Numero de Contacto:
															<span className='text-red-600'>*</span>
														</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder='957842135'
																value={field.value ?? undefined}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className='mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2'>
											<FormField
												control={form.control}
												name='direction'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Direccion:</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder='Av. Los Incas 123, Chancay'
																value={field.value ?? undefined}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className='grid grid-cols-1'>
											<FormField
												control={form.control}
												name='description'
												render={({ field }) => (
													<FormItem className='mt-5'>
														<FormLabel>Descripcion:</FormLabel>
														<FormControl>
															<Textarea
																placeholder='Realiza una breve descripcion de tu negocio'
																className='resize-none'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<Button className='mt-5' disabled={isPending}>
												Crear Perfil de Negocio
											</Button>
										</div>
									</form>
								</Form>
							</div>

							<div className='mt-[30px] rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800'>
								<h5 className='mb-5 text-lg font-semibold text-red-600'>
									Eliminar Cuenta :
								</h5>

								<p className='mb-4 text-slate-400'>
									Estas seguro que deseas eliminar el perfil de tu negocio? ,
									recuerda que se borraran todos los datos de tu perfil.
								</p>

								<Link
									href='/'
									className='btn rounded-full border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700'
								>
									Delete
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
