"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavbarLigh = dynamic(() => import("../components/navbar-light"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));
import { MdOutlineArrowForward } from "react-icons/md";

import { accordionData } from "../data/data";

export default function Terms() {
	useEffect(() => {
		document.documentElement.classList.add("dark");
		document.body.classList.add(
			"font-urbanist",
			"text-base",
			"text-black",
			"dark:text-white",
			"dark:bg-slate-900",
		);
	}, []);
	const [activeIndex, setActiveIndex] = useState(0);

	const toggleAccordion = index => {
		if (activeIndex === index) {
			setActiveIndex(0);
		} else {
			setActiveIndex(index);
		}
	};
	return (
		<>
			<NavbarLigh />
			<section
				className='relative table w-full bg-bottom  bg-no-repeat py-36'
				style={{ backgroundImage: "url('/images/bg/bg1.jpg')" }}
			>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent to-slate-900'></div>
				<div className='container'>
					<div className='mt-10 grid grid-cols-1 pb-8 text-center'>
						<h3 className='text-2xl font-medium leading-snug tracking-wide text-white md:text-3xl md:leading-snug'>
							Terms & Conditions
						</h3>
					</div>
				</div>

				<div className='absolute bottom-5 end-0 start-0 z-10 mx-3 text-center'>
					<ul className='breadcrumb breadcrumb-light mb-0 inline-block tracking-[0.5px]'>
						<li className='breadcrumb-item inline text-[15px] font-semibold text-white/50 duration-500 ease-in-out hover:text-white'>
							<Link href='/'>Giglink</Link>
						</li>
						<li
							className='breadcrumb-item inline text-[15px] font-semibold text-white duration-500 ease-in-out'
							aria-current='page'
						>
							Terms
						</li>
					</ul>
				</div>
			</section>
			<div className='relative'>
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
					<div className='justify-center md:flex'>
						<div className='md:w-3/4'>
							<div className='rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800'>
								<h5 className='mb-4 text-xl font-semibold'>Introduction :</h5>
								<p className='text-slate-400'>
									It seems that only fragments of the original text remain in
									the Lorem Ipsum texts used today. One may speculate that over
									the course of time certain letters were added or deleted at
									various positions within the text.
								</p>

								<h5 className='mb-4 mt-8 text-xl font-semibold'>
									User Agreements :
								</h5>
								<p className='text-slate-400'>
									The most well-known dummy text is the Lorem Ipsum, which is
									said to have <b className='text-red-600'>originated</b> in the
									16th century. Lorem Ipsum is{" "}
									<b className='text-red-600'>composed</b> in a pseudo-Latin
									language which more or less{" "}
									<b className='text-red-600'>corresponds</b> to proper Latin.
									It contains a series of real Latin words. This ancient dummy
									text is also <b className='text-red-600'>incomprehensible</b>,
									but it imitates the rhythm of most European languages in Latin
									script. The <b className='text-red-600'>advantage</b> of its
									Latin origin and the relative{" "}
									<b className='text-red-600'>meaninglessness</b> of Lorum Ipsum
									is that the text does not attract attention to itself or
									distract the viewers <b className='text-red-600'>attention</b>{" "}
									from the layout.
								</p>
								<p className='mt-3 text-slate-400'>
									There is now an <b className='text-red-600'>abundance</b> of
									readable dummy texts. These are usually used when a text is{" "}
									<b className='text-red-600'>required purely</b> to fill a
									space. These alternatives to the classic Lorem Ipsum texts are
									often amusing and tell short, funny or{" "}
									<b className='text-red-600'>nonsensical</b> stories.
								</p>
								<p className='mt-3 text-slate-400'>
									It seems that only <b className='text-red-600'>fragments</b>{" "}
									of the original text remain in the Lorem Ipsum texts used
									today. One may speculate that over the course of time certain
									letters were added or deleted at various positions within the
									text.
								</p>

								<h5 className='mb-4 mt-8 text-xl font-semibold'>
									Restrictions :
								</h5>
								<p className='text-slate-400'>
									You are specifically restricted from all of the following :
								</p>
								<ul className='mt-3 list-none text-slate-400'>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Digital Marketing Solutions for Tomorrow
									</li>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Our Talented & Experienced Marketing Agency
									</li>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Create your own skin to match your brand
									</li>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Digital Marketing Solutions for Tomorrow
									</li>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Our Talented & Experienced Marketing Agency
									</li>
									<li className='mt-2 flex items-center'>
										<MdOutlineArrowForward className='me-2 align-middle text-base text-violet-600' />
										Create your own skin to match your brand
									</li>
								</ul>

								<h5 className='mt-8 text-xl font-semibold'>
									Users Question & Answer :
								</h5>

								<div
									id='accordion-collapse'
									data-accordion='collapse'
									className='mt-6'
								>
									{accordionData.map((item, index) => (
										<div
											key={index}
											className='relative mt-4 overflow-hidden rounded-md shadow dark:shadow-gray-800'
										>
											<h2
												className='text-base font-semibold'
												id='accordion-collapse-heading-1'
											>
												<button
													onClick={() => toggleAccordion(index)}
													type='button'
													className={`flex w-full items-center justify-between p-5 text-start font-semibold ${activeIndex === index ? "bg-gray-50 text-violet-600 dark:bg-slate-800" : ""}`}
													data-accordion-target='#accordion-collapse-body-1'
													aria-expanded='true'
													aria-controls='accordion-collapse-body-1'
												>
													<span>{item.title}</span>
													<svg
														data-accordion-icon
														className='h-4 w-4 shrink-0 rotate-180'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
															clipRule='evenodd'
														></path>
													</svg>
												</button>
											</h2>
											{activeIndex === index && (
												<div
													id='accordion-collapse-body-1'
													aria-labelledby='accordion-collapse-heading-1'
												>
													<div className='p-5'>
														<p className='text-slate-400 dark:text-gray-400'>
															{item.content}
														</p>
													</div>
												</div>
											)}
										</div>
									))}
								</div>

								<div className='mt-6'>
									<Link
										href='/'
										className='btn rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
									>
										Accept
									</Link>
									<Link
										href='/'
										className='btn ms-2 rounded-full border-violet-600 bg-transparent text-violet-600 hover:bg-violet-600 hover:text-white'
									>
										Decline
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
			<Switcher />
		</>
	);
}
