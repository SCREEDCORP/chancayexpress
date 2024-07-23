import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/server/db";
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
		},
	});

	if (!user) return notFound();

	return (
		<>
			<section className='relative pb-16 md:pb-24 lg:mt-24 '>
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
						<div className='relative -mt-[60px] text-center'>
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
			</section>
		</>
	);
}
