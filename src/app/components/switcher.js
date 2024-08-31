"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { animateScroll as scroll } from "react-scroll";

export default function Switcher() {
	const [scrollTop, setScroll] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 500,
			smooth: true,
		});
	};

	function changeMode(mode, event) {
		switch (mode) {
			case "mode":
				if (document.documentElement.className.includes("dark")) {
					document.documentElement.className = "light";
				} else {
					document.documentElement.className = "dark";
				}
				break;
			case "layout":
				if (event.target?.innerText === "LTR") {
					document.documentElement.dir = "ltr";
				} else {
					document.documentElement.dir = "rtl";
				}
				break;

			default:
				break;
		}
	}

	return (
		<>
			<Link
				href='#'
				onClick={scrollToTop}
				id='back-to-top'
				className={`back-to-top  bottom-5 end-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-center  text-lg leading-9 text-white ${scrollTop ? "fixed" : "hidden"}`}
			>
				<FiArrowUp className='text-base' />
			</Link>

			<div className='fixed -left-2 top-[25%] z-50'>
				<span className='relative inline-block rotate-90'>
					<input
						type='checkbox'
						className='checkbox absolute opacity-0'
						id='chk'
						onClick={event => changeMode("mode", event)}
					/>
					<label
						className='label flex h-8 w-14 cursor-pointer items-center justify-between rounded-full bg-slate-900 p-1 shadow dark:bg-white dark:shadow-gray-800'
						htmlFor='chk'
					>
						<HiOutlineMoon className='text-[20px] text-yellow-500' />
						<HiOutlineSun className='text-[20px] text-yellow-500' />
						<span className='ball absolute left-[2px] top-[2px] h-7 w-7 rounded-full bg-white dark:bg-slate-900'></span>
					</label>
				</span>
			</div>

			<div className='fixed -left-3 top-[40%] z-50'>
				<Link href='#' id='switchRtl'>
					<span
						className='relative inline-block -rotate-90 rounded-b-md bg-white px-3 py-1 font-semibold shadow-md ltr:hidden rtl:block dark:bg-slate-900 dark:shadow dark:shadow-gray-800'
						onClick={event => changeMode("layout", event)}
					>
						LTR
					</span>
					<span
						className='relative inline-block -rotate-90 rounded-b-md bg-white px-3 py-1 font-semibold shadow-md ltr:block rtl:hidden dark:bg-slate-900 dark:shadow dark:shadow-gray-800'
						onClick={event => changeMode("layout", event)}
					>
						RTL
					</span>
				</Link>
			</div>

			<div className='fixed -left-12 top-[60%] z-50 hidden sm:block'>
				<Link
					href='https://1.envato.market/giglink-next'
					target='_blank'
					className='relative inline-block -rotate-90 rounded-b-md bg-white px-3 py-1 font-semibold shadow-md dark:bg-slate-900 dark:shadow dark:shadow-gray-700'
				>
					<i className='mdi mdi-cart-outline me-1'></i> Download
				</Link>
			</div>
		</>
	);
}
