import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/core/routes";

export default function Footer() {
	return (
		<footer
			className='footer relative bg-dark-footer text-gray-200 dark:text-gray-200'
			style={{ marginTop: "auto" }}
		>
			<div className='container'>
				<div className='grid grid-cols-1'>
					<div className='relative py-8'>
						{/* <div className='relative -top-40 overflow-hidden rounded-xl bg-white px-6 py-10 shadow dark:bg-slate-900 dark:shadow-gray-800 lg:px-8'>
								<div className='grid grid-cols-1 items-center gap-[30px] md:grid-cols-2'>
									<div className='z-1 text-center md:text-start'>
										<h3 className='text-[26px] font-semibold text-slate-900 dark:text-white'>
											Subscribe to Newsletter!
										</h3>
										<p className='mx-auto max-w-xl text-slate-400'>
											Subscribe to get latest updates and information.
										</p>
									</div>

									<div className='subcribe-form z-1'>
										<form className='relative max-w-lg md:ms-auto'>
											<input
												type='email'
												id='subcribe'
												name='email'
												className='h-[50px] w-full rounded-full bg-white pb-4 pe-40 ps-6 pt-4 text-slate-900 shadow outline-none dark:bg-slate-900 dark:text-white dark:shadow-gray-800'
												placeholder='Enter your email :'
											/>
											<button
												type='submit'
												className='btn absolute end-[3px] top-[2px] h-[46px] rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
											>
												Subscribe
											</button>
										</form>
									</div>
								</div>

								<div className='absolute -start-5 -top-5'>
									<FaRegEnvelope className='-rotate-45 text-7xl text-slate-900/5 dark:text-white/5 lg:text-[150px]' />
								</div>

								<div className='absolute -bottom-5 -end-5'>
									<BsPencil className='text-7xl text-slate-900/5 dark:text-white/5 lg:text-[150px]' />
								</div>
							</div> */}

						<div className='grid grid-cols-1 gap-[30px] md:grid-cols-12'>
							<div className='md:col-span-12 lg:col-span-6'>
								<Link
									href={ROUTES.home}
									className='block w-fit text-[22px] focus:outline-none'
								>
									<Image
										src='/images/logo-white.png'
										placeholder='blur'
										blurDataURL='/images/logo-white.png'
										alt='Chancay Express logo'
										width={116}
										height={116}
									/>
								</Link>
								<p className='mt-4 text-gray-300'>
									Compra y descubre productos de los negocios locales de Chancay
									en Chancay Express.
								</p>
							</div>

							{/* <div className='md:col-span-4 lg:col-span-2'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									Giglink
								</h5>
								<ul className='footer-list mt-6 list-none'>
									<li>
										<Link
											href='/explore-one'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />
											<span>Explore Item</span>
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/auction'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Live Auction</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/activity'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Activities</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/wallet'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Wallets</span>
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/creators'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Creators</span>
										</Link>
									</li>
								</ul>
							</div> */}

							{/* <div className='md:col-span-4 lg:col-span-3'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									Usefull Links
								</h5>
								<ul className='footer-list mt-6 list-none'>
									<li>
										<Link
											href='/aboutus'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>About Us</span>
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/blogs'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Blog & News</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/terms'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Terms & Condition</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/privacy'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Privacy policy</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/login'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Login</span>{" "}
										</Link>
									</li>
									<li className='mt-[10px]'>
										<Link
											href='/contact'
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />{" "}
											<span>Contact Us</span>{" "}
										</Link>
									</li>
								</ul>
							</div> */}

							{/* <div className='md:col-span-4 lg:col-span-3'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									Download the Giglink app
								</h5>

								<ul className='mt-6 list-none'>
									<li className='inline'>
										<Image
											src='/images/app.png'
											className='inline-block h-9'
											alt=''
											width={120}
											height={36}
										/>
									</li>
									<li className='inline'>
										<Image
											src='/images/playstore.png'
											className='inline-block h-9'
											alt=''
											width={120}
											height={36}
										/>
									</li>
								</ul>

								<div className='mt-6'>
									<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
										Contact Details
									</h5>

									<div className='mt-6 flex'>
										<Mail className='me-3 mt-1 h-5 w-5 text-violet-600'></Mail>
										<div className=''>
											<Link
												href='mailto:contact@example.com'
												className='text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
											>
												contact@example.com
											</Link>
										</div>
									</div>

									<div className='mt-6 flex'>
										<Phone className='me-3 mt-1 h-5 w-5 text-violet-600'></Phone>
										<div className=''>
											<Link
												href='tel:+152534-468-854'
												className='text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
											>
												+152 534-468-854
											</Link>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>

			<div className='border-t border-gray-800 px-0 py-[30px] dark:border-gray-700'>
				<div className='container text-center'>
					<div className='grid items-center gap-6 md:grid-cols-2'>
						<div className='text-center md:text-start'>
							<p className='mb-0 text-gray-300'>
								© {new Date().getFullYear()} Chancay Express.
							</p>
						</div>

						{/* <ul className='list-none space-x-1 text-center md:text-end'>
							<li className='inline'>
								<Link
									href='https://1.envato.market/giglink-next'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<AiOutlineShoppingCart />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='https://dribbble.com/shreethemes'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<FiDribbble className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='https://www.behance.net/shreethemes'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<BiLogoBehance className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='http://linkedin.com/company/shreethemes'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<FaLinkedin className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='https://www.facebook.com/shreethemes'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<LiaFacebookF className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='https://www.instagram.com/shreethemes/'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<AiOutlineInstagram className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='https://twitter.com/shreethemes'
									target='_blank'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<AiOutlineTwitter className='text-base' />
								</Link>
							</li>
							<li className='inline'>
								<Link
									href='mailto:support@shreethemes.in'
									className='btn btn-icon btn-sm rounded-md border border-gray-800 hover:border-violet-600 hover:bg-violet-600 dark:hover:border-violet-600 dark:hover:bg-violet-600'
								>
									<FaRegEnvelope className='align-middle' />
								</Link>
							</li>
						</ul> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
