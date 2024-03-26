import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/server/db";
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
											src={"/images/avatar/1.jpg"}
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
								<p className='mt-1 text-[16px] text-slate-400'>
									{user.description}
								</p>

								<div className='mt-4'></div>
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
