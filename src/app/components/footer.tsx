import { Mail, MapPinIcon, Phone } from "lucide-react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

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
							<div className='space-y-2 md:col-span-4 lg:col-span-3'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									<Link href={ROUTES.home} className='hover:text-violet-600'>
										Chancay Express
									</Link>
								</h5>
								<p className='mt-4 text-gray-300'>
									Compra, vende y descubre productos de negocios locales en
									Chancay Express, la plataforma donde los comercios muestran
									sus mejores ofertas para que encuentres justo lo que
									necesitas.
								</p>
							</div>

							<div className='space-y-6 md:col-span-4 lg:col-span-3'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									Links
								</h5>
								<ul className='footer-list list-none space-y-2'>
									<li>
										<Link
											href={ROUTES.politicas.path}
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />
											<span>Politicas</span>
										</Link>
									</li>
									<li>
										<Link
											href={ROUTES.terminosYCondiciones.path}
											className='inline-flex items-center text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
										>
											<MdKeyboardArrowRight className='me-1 text-lg' />
											<span>Terminos y condiciones</span>
										</Link>
									</li>
								</ul>
							</div>

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

							<div className='space-y-6 md:col-span-4 lg:col-span-3'>
								<h5 className='text-lg font-semibold tracking-[1px] text-gray-100'>
									Contacto
								</h5>

								<div className='space-y-2'>
									<div className='flex'>
										<div>
											<MapPinIcon className='me-3 mt-1 h-5 w-5 text-violet-600' />
										</div>
										<div>
											JAVIER PRADO ESTE NRO. 2965 INT. 504 URB. LAS DALIAS San
											Borja.
										</div>
									</div>

									<div className='flex'>
										<div>
											<Mail className='me-3 mt-1 h-5 w-5 text-violet-600' />
										</div>
										<div>
											<Link
												href='mailto:team@chancayexpress.com'
												className='text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
											>
												team@chancayexpress.com
											</Link>
										</div>
									</div>

									<div className='flex'>
										<div>
											<Phone className='me-3 mt-1 h-5 w-5 text-violet-600' />
										</div>
										<div>
											<Link
												href='tel:+51907548650'
												className='text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400'
											>
												+51 907 548 650
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='border-t border-gray-800 px-0 py-4 dark:border-gray-700'>
				<div className='container text-center'>
					<div className='grid items-center gap-6 md:grid-cols-2'>
						<div className='text-center md:text-start'>
							<p className='mb-0 text-gray-300'>
								© {new Date().getFullYear()} Chancay Express by{" "}
								<Link href='https://www.lainds.com/'>LainDS</Link>.
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
