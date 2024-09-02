import { EditIcon, LockIcon, LockOpenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Card, CardHeader } from "@/app/components/card";
import { ModalActionButton } from "@/app/components/modal-action-link";
import { ACTION_ROUTES } from "@/core/actions-routes";
import { paymentMethodIconMap } from "@/core/configs";
import { paymentMethodNameMap } from "@/core/constants";
import { getPaymentMethodsShift } from "@/lib/utils";
import { db } from "@/server/db";
import { AddPaymentMethodModal } from "./add-payment-method-modal";
import { EditDescription } from "./edit-description";
import { StoreProducts } from "./store-products";

type Context = {
	params: {
		userHandler: string;
	};
};

export const dynamic = "force-dynamic";

export default async function CreatorProfile({ params }: Context) {
	const user = await db.user.findUnique({
		where: {
			nameHandler: params.userHandler,
		},
		include: {
			products: {
				where: {
					status: true,
				},
			},
			paymentMethods: true,
		},
	});

	if (!user) return redirect("/");

	const leftPaymentMethods = getPaymentMethodsShift(
		user.paymentMethods.map(pm => pm.type),
	);

	return (
		<>
			<span className='fixed start-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-red-600/20 to-violet-600/20 blur-[200px] ltr:-translate-x-1/2 rtl:translate-x-1/2 dark:from-red-600/40 dark:to-violet-600/40'></span>
			<section>
				<div className='container-fluid lg:container '>
					<div className='profile-banner group relative overflow-hidden text-transparent shadow dark:shadow-gray-700 lg:rounded-xl'>
						<input
							id='pro-banner'
							name='profile-banner'
							type='file'
							className='hidden'
							// onChange={handleChange}
						/>
						<label
							className='absolute inset-0 cursor-pointer'
							htmlFor='pro-banner'
						></label>
					</div>
				</div>

				<div className='mt-10 justify-center md:flex'>
					<div className='md:w-full'>
						<div className='relative text-center'>
							<div className='profile-pic group mx-auto w-[112px]'>
								<input
									id='pro-img'
									name='profile-image'
									type='file'
									className='hidden'
									// onChange={ProfileChange}
								/>
								<div>
									<div className='relative mx-auto h-28 w-28 overflow-hidden rounded-full shadow ring-4 ring-slate-50 dark:shadow-gray-800 dark:ring-slate-800'>
										<Image
											src={user.image ?? "/images/avatar/1.jpg"}
											placeholder='blur'
											blurDataURL='/images/avatar/1.jpg'
											className='rounded-full'
											id='profile-image'
											alt=''
											width={112}
											height={112}
										/>
										<div className='absolute inset-0 transition duration-500 group-hover:bg-slate-900/40'></div>
										<label
											className='absolute inset-0 cursor-pointer'
											htmlFor='pro-img'
										></label>
									</div>
								</div>
							</div>

							<div className='mt-6'>
								<h5 className='text-xl font-semibold'>
									{user.name}{" "}
									<i className='mdi mdi-check-decagram align-middle text-lg text-emerald-600'></i>
								</h5>
								<EditDescription
									description={user.description}
									userId={user.id}
								/>

								<div className='mt-4'>
									<Link
										href={`/perfil/${params.userHandler}/crear-producto`}
										className='btn btn-sm mx-1 rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
									>
										<i className='mdi mdi-plus'></i> Plato Nuevo
									</Link>
									{/* <Link
                    href="/creator-profile-edit"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white mx-1"
                  >
                    <i className="mdi mdi-cog"></i>
                  </Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='container'>
						<h5 className='mb-2 text-xl font-bold'>Productos</h5>
					</div>
					<StoreProducts
						products={user.products.map(p => ({
							id: p.id,
							title: p.name,
							subtext: p.description ?? "",
							priceInCents: p.costInCents,
							image: p.image ?? "/images/items/beef.jpg",
							avatar: "/images/avatar/1.jpg",
						}))}
					/>
				</div>
				<div className='container'>
					<h5 className='mb-2 text-xl font-bold'>Metodos de pago</h5>
					<div className='mb-4'>
						<h6 className='mb-2 text-lg'>Metodos de pago configurados</h6>
						<div className='flex gap-2'>
							{user.paymentMethods.length ? (
								user.paymentMethods.map(method => (
									<Card key={method.id}>
										<CardHeader>
											<div className='flex items-center gap-2'>
												{paymentMethodIconMap[method.type]}
												<span>{paymentMethodNameMap[method.type]}</span>
												<div className='ml-2 flex items-center gap-1'>
													{method.type !== "EFECTIVO" && (
														<ModalActionButton
															size='sm-icon'
															action={ACTION_ROUTES.paymentMethods.update(
																method.id,
															)}
															title='Editar'
														>
															<EditIcon className='h-4 w-4' />
														</ModalActionButton>
													)}
													<ModalActionButton
														size='sm-icon'
														variant='destructive'
														action={ACTION_ROUTES.paymentMethods.toggleStatus(
															method.id,
														)}
														title={method.status ? "Desactivar" : "Activar"}
													>
														{method.status ? (
															<LockIcon className='h-4 w-4' />
														) : (
															<LockOpenIcon className='h-4 w-4' />
														)}
													</ModalActionButton>
												</div>
											</div>
										</CardHeader>
									</Card>
								))
							) : (
								<div>No hay metodos de pago configurados</div>
							)}
						</div>
					</div>
					<div>
						<h6 className='mb-2 text-lg'>Metodos de pago sin configurar</h6>
						<div className='flex gap-2'>
							{leftPaymentMethods.length ? (
								leftPaymentMethods.map(method => (
									<AddPaymentMethodModal
										key={method}
										type={method}
										userId={user.id}
									>
										<Card role='button'>
											<CardHeader>
												<div className='flex items-center gap-2'>
													{paymentMethodIconMap[method]}
													<span>{paymentMethodNameMap[method]}</span>
												</div>
											</CardHeader>
										</Card>
									</AddPaymentMethodModal>
								))
							) : (
								<div>Todos los metodos de pago están configurados</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
