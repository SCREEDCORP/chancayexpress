"use client";
import Link from "next/link";
import React from "react";
import { Hexagon } from "react-feather";
import { LuLayers } from "react-icons/lu";
import { TbCameraPlus, TbSitemap } from "react-icons/tb";

export default function Feature() {
	return (
		<div className='container'>
			<div className='grid grid-cols-1 text-center'>
				<h3 className='mb-4 text-2xl font-semibold leading-snug md:text-3xl md:leading-snug'>
					Giglink is a web3 destination.
				</h3>

				<p className='mx-auto max-w-xl text-slate-400'>
					We are a huge marketplace dedicated to connecting great artists of all
					Giglink with their fans and unique token collectors!
				</p>
			</div>

			<div className='mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3'>
				<div className='group relative mt-4 overflow-hidden rounded-xl text-center transition duration-500 ease-in-out lg:px-6'>
					<div className='relative -m-3 overflow-hidden text-transparent'>
						<Hexagon className='mx-auto h-28 w-28 rotate-[30deg] fill-violet-600/5'></Hexagon>
						{/* <Hexagon className="h-28 w-28 fill-violet-600/5 mx-auto rotate-[30deg]"></Hexagon> */}
						<div className='absolute end-0 start-0 top-2/4 mx-auto flex -translate-y-2/4 items-center justify-center rounded-xl align-middle text-3xl text-violet-600 transition duration-500 ease-in-out'>
							<TbSitemap />
						</div>
					</div>

					<div className='mt-6'>
						<Link
							href='#'
							className='h5 text-lg font-semibold transition duration-500 ease-in-out hover:text-violet-600'
						>
							Create Item
						</Link>
						<p className='mt-3 text-slate-400 transition duration-500 ease-in-out'>
							If the distribution of letters and words is random, the reader
							will not be distracted from making.
						</p>
					</div>
				</div>
				<div className='group relative mt-4 overflow-hidden rounded-xl text-center transition duration-500 ease-in-out lg:px-6'>
					<div className='relative -m-3 overflow-hidden text-transparent'>
						<Hexagon className='mx-auto h-28 w-28 rotate-[30deg] fill-violet-600/5'></Hexagon>
						<div className='absolute end-0 start-0 top-2/4 mx-auto flex -translate-y-2/4 items-center justify-center rounded-xl align-middle text-3xl text-violet-600 transition duration-500 ease-in-out'>
							<LuLayers />
						</div>
					</div>

					<div className='mt-6'>
						<Link
							href='#'
							className='h5 text-lg font-semibold transition duration-500 ease-in-out hover:text-violet-600'
						>
							Collect
						</Link>
						<p className='mt-3 text-slate-400 transition duration-500 ease-in-out'>
							If the distribution of letters and words is random, the reader
							will not be distracted from making.
						</p>
					</div>
				</div>
				<div className='group relative mt-4 overflow-hidden rounded-xl text-center transition duration-500 ease-in-out lg:px-6'>
					<div className='relative -m-3 overflow-hidden text-transparent'>
						<Hexagon className='mx-auto h-28 w-28 rotate-[30deg] fill-violet-600/5'></Hexagon>
						<div className='absolute end-0 start-0 top-2/4 mx-auto flex -translate-y-2/4 items-center justify-center rounded-xl align-middle text-3xl text-violet-600 transition duration-500 ease-in-out'>
							<TbCameraPlus />
						</div>
					</div>

					<div className='mt-6'>
						<Link
							href='#'
							className='h5 text-lg font-semibold transition duration-500 ease-in-out hover:text-violet-600'
						>
							Sell Item
						</Link>
						<p className='mt-3 text-slate-400 transition duration-500 ease-in-out'>
							If the distribution of letters and words is random, the reader
							will not be distracted from making.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
