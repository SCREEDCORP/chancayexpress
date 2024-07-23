import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export type ProductProps = {
	id: string;
	title: string;
	subtext: string;
	image: string;
	avatar: string;
	price: string;
	onAction: () => void;
	action: string;
};

export function ProductList({
	children,
	title,
}: React.PropsWithChildren<{ title?: string }>) {
	return (
		<div className='container'>
			{title && (
				<div className='grid grid-cols-1 text-center'>
					<h3 className='text-[26px] font-semibold md:text-[30px]'>{title}</h3>
				</div>
			)}
			<div className='mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{children}
			</div>
		</div>
	);
}

export function ProductItem(item: ProductProps) {
	return (
		<div className='group relative h-fit overflow-hidden rounded-lg border border-gray-100 bg-white p-2 transition-all duration-500 hover:-mt-2 hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:shadow-md hover:dark:shadow-gray-700'>
			<div className='relative overflow-hidden'>
				<div className='relative overflow-hidden rounded-lg'>
					<Image
						src={item.image}
						className='h-auto max-h-[130px] w-full rounded-lg object-cover shadow-md transition-all duration-500 group-hover:scale-110 dark:shadow-gray-700'
						alt={`${item.title} image`}
						width={0}
						height={0}
						sizes='100vw'
						placeholder='blur'
						blurDataURL={item.image}
					/>
				</div>

				<div className='absolute -bottom-20 end-0 start-0 mx-auto text-center transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2'>
					<Button onClick={item.onAction}>
						<i className='mdi mdi-lightning-bolt'></i> {item.action}{" "}
					</Button>
				</div>

				<div className='absolute end-2 top-2 opacity-0 transition-all duration-500 group-hover:opacity-100'>
					<Link
						href='#'
						className='btn btn-icon btn-sm rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
					>
						<i className='mdi mdi-plus'></i>
					</Link>
				</div>
			</div>

			<div className='mt-3'>
				<div className='flex items-center'>
					<Image
						src={item.avatar}
						className='h-8 w-8 rounded-full'
						alt=''
						width={32}
						height={32}
						placeholder='blur'
						blurDataURL={item.avatar}
					/>
					<Link
						// href={`/item-detail/${item.id}`}
						href='#'
						className='ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600'
					>
						{item.subtext}
					</Link>
				</div>

				<div className='my-3'>
					<Link
						// href={`/item-detail/${item.id}`}
						href='#'
						className='font-semibold hover:text-violet-600'
					>
						{item.title}
					</Link>
				</div>

				<div className='flex justify-between rounded-lg bg-gray-50 p-2 shadow dark:bg-slate-800 dark:shadow-gray-700'>
					<div>
						<span className='block text-[16px] font-medium text-slate-400'>
							Costo
						</span>
						<span className='block text-[16px] font-semibold'>
							<i className='mdi mdi-ethereum'></i> {item.price}
						</span>
					</div>

					{/* <div>
            <span className="text-[16px] font-medium text-slate-400 block">
              Highest Bid
            </span>
            <span className="text-[16px] font-semibold block">
              <i className="mdi mdi-ethereum"></i> 3.5 ETH
            </span>
          </div> */}
				</div>
			</div>
		</div>
	);
}
