import type { Prisma } from "@prisma/client";

import { db } from "@/server/db";
import { ProductItem, ProductList } from "../components/product";

export const dynamic = "force-dynamic";

export default async function Page({
	searchParams,
}: {
	searchParams: Record<string, string>;
}) {
	const fullTextSearch = searchParams.s;

	const usuarios = await db.user.findMany({
		where: {
			type: "STORE",
			OR: fullTextSearch
				?.trim()
				.toLowerCase()
				.split(" ")
				.flatMap(
					s =>
						[
							{
								name: {
									contains: s,
								},
							},
							{
								nameHandler: {
									contains: s,
								},
							},
						] satisfies Prisma.UserWhereInput["OR"],
				),
		},
	});

	return (
		<>
			<span className='fixed start-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-red-600/20 to-violet-600/20 blur-[200px] ltr:-translate-x-1/2 rtl:translate-x-1/2 dark:from-red-600/40 dark:to-violet-600/40'></span>
			{/* <section className='relative overflow-hidden pt-36 md:pt-48'>
				<div className='container'>
					<div className='mt-10 grid grid-cols-1 justify-center text-center'>
						<div className='relative'>
							<div className='relative '>
								<h1 className='text-4xl font-bold leading-snug lg:text-6xl lg:leading-snug'>
									Software basado en los datos de{" "}
									<span className='bg-gradient-to-l from-red-600 to-violet-600 bg-clip-text text-transparent'>
										nuestros usuarios
									</span>
								</h1>

								<div className="overflow-hidden after:absolute after:-top-[50px] after:start-[30%] after:-z-1 after:h-10 after:w-10 after:animate-[spin_10s_linear_infinite] after:rounded-lg after:bg-violet-600/10 after:content-[''] dark:after:bg-violet-600/30"></div>

								<div className="overflow-hidden after:absolute after:bottom-[0] after:end-[15%] after:-z-1 after:h-10 after:w-10 after:animate-ping after:rounded-full after:bg-violet-600/20 after:content-[''] dark:after:bg-violet-600/40"></div>
							</div>
							<p className='mx-auto max-w-xl text-lg text-slate-400 dark:text-white/70'>
								para iterar de una forma rapida y segura.
							</p>
						</div>
					</div>

					<div className='relative -z-1 animate-[spin_30s_linear_infinite]'>
						<span className='relative after:absolute after:bottom-1/2 after:start-0 after:z-10 after:h-2 after:w-8 after:translate-y-1/2 after:rounded-md after:bg-violet-600/20'></span>
						<span className='relative after:absolute after:bottom-1/2 after:start-0 after:z-10 after:h-2 after:w-8 after:translate-y-1/2 after:rotate-90 after:rounded-md after:bg-violet-600/20'></span>
					</div>
				</div>
			</section> */}

			<section>
				<div className='container grid grid-cols-1'>
					<h3 className='mb-4 text-2xl font-semibold leading-snug md:text-3xl md:leading-snug'>
						Resultados de la busqueda
					</h3>
					{/* <p className='mx-auto max-w-xl text-slate-400'>{description}</p> */}
				</div>
				<br />
				<br />
				<br />
				<ProductList>
					{usuarios.map((item, index) => (
						<ProductItem
							key={index}
							id={item.id}
							title={item.name ?? ""}
							subtext={item.description ?? ""}
							image={item.image}
							avatar={item.image ?? "/images/avatar/4.jpg"}
							titleLink={`/perfil/${item.nameHandler}`}
							subtextLink={`/perfil/${item.nameHandler}`}
						/>
					))}
				</ProductList>
			</section>
			{/* <Switcher /> */}
		</>
	);
}
