import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/core/routes";
import { SearchIcon } from "lucide-react";
import {
	NavbarClientProvider,
	NavbarMenuExtras,
	NavbarNavigation,
} from "./navbar.client";

export default function Navbar({
	fullTextSearch,
}: {
	fullTextSearch?: string;
}) {
	return (
		<NavbarClientProvider>
			<nav id='topnav' className='defaultscroll is-sticky'>
				<div className='container flex items-center gap-2'>
					{/* <!-- Logo container--> */}
					<Link
						className='logo !float-none ps-0'
						href={ROUTES.home}
						title='Inicio'
					>
						<Image
							src='/images/logo-white.png'
							width={70}
							height={70}
							className='inline-block sm:hidden'
							alt='Chancay Express logo'
						/>
						<div className='hidden sm:block'>
							<Image
								src='/images/logo-dark.png'
								width={70}
								height={70}
								className='inline-block dark:hidden'
								alt='Chancay Express logo'
							/>
							<Image
								src='/images/logo-white.png'
								width={70}
								height={70}
								className='hidden dark:inline-block'
								alt='Chancay Express logo'
							/>
						</div>
					</Link>

					{/* <!--Login button Start--> */}
					{/* <ul className='buy-button mb-0 list-none'>
						<li className='mb-0 inline-block'>
							<div className='form-icon relative'>
								<LuSearch className=' absolute start-3 top-1/2 -translate-y-1/2 text-lg' />
								<input
									type='text'
									className='form-input h-10 w-28 rounded-3xl border border-gray-200 bg-transparent bg-white px-3 py-2 ps-10 outline-none focus:border-violet-600 focus:ring-0 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-violet-600 sm:w-44'
									name='s'
									id='searchItem'
									placeholder='Search...'
								/>
							</div>
						</li>

						<li className='mb-0 inline-block ps-1'>
							<Link
								href='#'
								onClick={metamask}
								id='connectWallet'
								className='btn btn-icon rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
							>
								<PiWalletBold />
							</Link>
						</li>

						<li className='dropdown relative inline-block ps-1'>
							<button
								onClick={() => openDropdown(!isDropdown)}
								data-dropdown-toggle='dropdown'
								className='dropdown-toggle btn btn-icon inline-flex rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700'
								type='button'
							>
								<Image
									src='/images/client/05.jpg'
									width={38}
									height={38}
									className='rounded-full'
									alt=''
								/>
							</button>

							<div
								className={`dropdown-menu absolute end-0 z-10 m-0 mt-4 w-48 overflow-hidden rounded-md bg-white shadow dark:bg-slate-900 dark:shadow-gray-800 ${isDropdown ? "hidden" : "block"}`}
							>
								<div className='relative'>
									<div className='bg-gradient-to-tr from-violet-600 to-red-600 py-8'></div>
									<div className='absolute -bottom-7 start-0 px-4'>
										<div className='flex items-end'>
											<Image
												src='/images/client/05.jpg'
												width={38}
												height={38}
												className='h-w-10 w-10 rounded-full shadow dark:shadow-gray-700'
												alt=''
											/>

											<span className='ms-1 text-[15px] font-semibold'>
												Jenny Jimenez
											</span>
										</div>
									</div>
								</div>

								<div className='mt-10 px-4'>
									<h5 className='text-[15px] font-semibold'>Wallet:</h5>
									<div className='flex items-center justify-between'>
										<span className='text-[13px] text-slate-400'>
											qhut0...hfteh45
										</span>
										<Link href='#' className='text-violet-600'>
											<AiOutlineCopy />
										</Link>
									</div>
								</div>

								<div className='mt-4 px-4'>
									<h5 className='text-[15px]'>
										Balance:{" "}
										<span className='font-semibold text-violet-600'>
											0.00045ETH
										</span>
									</h5>
								</div>

								<ul className='py-2 text-start'>
									<li>
										<Link
											href='/creator-profile'
											className='inline-flex items-center px-4 py-1.5 text-[14px] font-semibold hover:text-violet-600'
										>
											<AiOutlineUser className='me-1 align-middle text-[16px]' />{" "}
											Profile
										</Link>
									</li>
									<li>
										<Link
											href='/creator-profile-edit'
											className='inline-flex items-center px-4 py-1.5 text-[14px] font-semibold hover:text-violet-600'
										>
											<LuSettings className='me-1 align-middle text-[16px]' />{" "}
											Settings
										</Link>
									</li>
									<li className='my-2 border-t border-gray-100 dark:border-gray-800'></li>
									<li>
										<Link
											href='/login'
											className='inline-flex items-center px-4 py-1.5 text-[14px] font-semibold hover:text-violet-600'
										>
											<LiaSignOutAltSolid className='me-1 align-middle text-[16px]' />{" "}
											Logout
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul> */}
					<div className='flex-1'>
						<form action='/buscar' className='max-w-sm'>
							<div className='flex items-center gap-2'>
								<Input
									placeholder='Buscar negocio...'
									id='s'
									name='s'
									defaultValue={fullTextSearch}
								/>
								<div>
									<Button size='icon'>
										<SearchIcon />
									</Button>
								</div>
							</div>
						</form>
					</div>

					<NavbarMenuExtras />

					<NavbarNavigation>
						<ul className='navigation-menu justify-end'>
							<li>
								<Link href={ROUTES.home}>Inicio</Link>
								{/* <span className='menu-arrow'></span> */}
								{/* <ul className='submenu'>
									<li>
										<Link href='/' className='sub-menu-item'>
											Home One
										</Link>
									</li>
									<li>
										<Link href='/index-two' className='sub-menu-item'>
											Home Two
										</Link>
									</li>
									<li>
										<Link href='/index-three' className='sub-menu-item'>
											Home Three
										</Link>
									</li>
									<li>
										<Link href='/index-four' className='sub-menu-item'>
											Home Four{" "}
											<span className='ms-1 h-5 rounded bg-gray-50 px-2.5 py-0.5 text-[10px] font-bold shadow shadow-gray-300 dark:bg-slate-800 dark:shadow-gray-700'>
												Light
											</span>
										</Link>
									</li>
									<li>
										<Link href='/index-five' className='sub-menu-item'>
											Home Five{" "}
											<span className='ms-1 h-5 rounded bg-gray-50 px-2.5 py-0.5 text-[10px] font-bold shadow shadow-gray-300 dark:bg-slate-800 dark:shadow-gray-700'>
												Light
											</span>
										</Link>
									</li>
									<li>
										<Link href='/index-six' className='sub-menu-item'>
											Home Six{" "}
											<span className='ms-1 h-5 rounded bg-gray-50 px-2.5 py-0.5 text-[10px] font-bold shadow shadow-gray-300 dark:bg-slate-800 dark:shadow-gray-700'>
												Light
											</span>
										</Link>
									</li>
									<li>
										<Link href='/index-seven' className='sub-menu-item'>
											Home Seven{" "}
										</Link>
									</li>
									<li>
										<Link href='/index-eight' className='sub-menu-item'>
											Home Eight{" "}
											<span className='ms-1 h-5 rounded bg-gray-50 px-2.5 py-0.5 text-[10px] font-bold shadow shadow-gray-300 dark:bg-slate-800 dark:shadow-gray-700'>
												Light
											</span>
										</Link>
									</li>
									<li>
										<Link href='/index-nine' className='sub-menu-item'>
											Home Nine{" "}
										</Link>
									</li>
									<li>
										<Link href='/index-ten' className='sub-menu-item'>
											Home Ten{" "}
											<span className='ms-1 h-5 rounded bg-gray-50 px-2.5 py-0.5 text-[10px] font-bold shadow shadow-gray-300 dark:bg-slate-800 dark:shadow-gray-700'>
												Light
											</span>
										</Link>
									</li>
								</ul> */}
							</li>

							{/* <li className='has-submenu parent-parent-menu-item'>
								<Link href='#'>Explore</Link>
								<span className='menu-arrow'></span>
								<ul className='submenu'>
									<li>
										<Link href='/explore-one' className='sub-menu-item'>
											{" "}
											Explore One
										</Link>
									</li>
									<li>
										<Link href='/explore-two' className='sub-menu-item'>
											{" "}
											Explore Two
										</Link>
									</li>
									<li>
										<Link href='/explore-three' className='sub-menu-item'>
											{" "}
											Explore Three
										</Link>
									</li>
									<li>
										<Link href='/auction' className='sub-menu-item'>
											Live Auction
										</Link>
									</li>
									<li>
										<Link href='/item-detail' className='sub-menu-item'>
											{" "}
											Item Detail
										</Link>
									</li>
									<li>
										<Link href='/activity' className='sub-menu-item'>
											{" "}
											Activities
										</Link>
									</li>
									<li>
										<Link href='/collections' className='sub-menu-item'>
											Collections
										</Link>
									</li>
									<li>
										<Link href='/upload-work' className='sub-menu-item'>
											Upload Works
										</Link>
									</li>
								</ul>
							</li>

							<li>
								<Link href='/wallet' className='sub-menu-item'>
									Wallet
								</Link>
							</li>

							<li className='has-submenu parent-parent-menu-item'>
								<Link href='#'>Pages</Link>
								<span className='menu-arrow'></span>
								<ul className='submenu'>
									<li>
										<Link href='/aboutus' className='sub-menu-item'>
											About Us
										</Link>
									</li>
									<li className='has-submenu parent-menu-item'>
										<Link href='#'> Creator </Link>
										<span className='submenu-arrow'></span>
										<ul className='submenu'>
											<li>
												<Link href='/creators' className='sub-menu-item'>
													{" "}
													Creators
												</Link>
											</li>
											<li>
												<Link href='/creator-profile' className='sub-menu-item'>
													{" "}
													Creator Profile
												</Link>
											</li>
											<li>
												<Link
													href='/creator-profile-edit'
													className='sub-menu-item'
												>
													{" "}
													Profile Edit
												</Link>
											</li>
											<li>
												<Link href='/become-creator' className='sub-menu-item'>
													{" "}
													Become Creator
												</Link>
											</li>
										</ul>
									</li>
									<li className='has-submenu parent-menu-item'>
										<Link href='#'> Blog </Link>
										<span className='submenu-arrow'></span>
										<ul className='submenu'>
											<li>
												<Link href='/blogs' className='sub-menu-item'>
													{" "}
													Blogs
												</Link>
											</li>
											<li>
												<Link href='/blog-detail' className='sub-menu-item'>
													{" "}
													Blog Detail
												</Link>
											</li>
										</ul>
									</li>
									<li className='has-submenu parent-menu-item'>
										<Link href='#'> Auth Pages </Link>
										<span className='submenu-arrow'></span>
										<ul className='submenu'>
											<li>
												<Link href='/login' className='sub-menu-item'>
													{" "}
													Login
												</Link>
											</li>
											<li>
												<Link href='/signup' className='sub-menu-item'>
													{" "}
													Signup
												</Link>
											</li>
											<li>
												<Link href='/reset-password' className='sub-menu-item'>
													{" "}
													Forgot Password
												</Link>
											</li>
											<li>
												<Link href='/lock-screen' className='sub-menu-item'>
													{" "}
													Lock Screen
												</Link>
											</li>
										</ul>
									</li>
									<li className='has-submenu parent-menu-item'>
										<Link href='#'> Special </Link>
										<span className='submenu-arrow'></span>
										<ul className='submenu'>
											<li>
												<Link href='/comingsoon' className='sub-menu-item'>
													{" "}
													Coming Soon
												</Link>
											</li>
											<li>
												<Link href='/maintenance' className='sub-menu-item'>
													{" "}
													Maintenance
												</Link>
											</li>
											<li>
												<Link href='/error' className='sub-menu-item'>
													{" "}
													404!
												</Link>
											</li>
											<li>
												<Link href='/thankyou' className='sub-menu-item'>
													{" "}
													Thank you
												</Link>
											</li>
										</ul>
									</li>
									<li className='has-submenu parent-menu-item'>
										<Link href='#'> Help Center </Link>
										<span className='submenu-arrow'></span>
										<ul className='submenu'>
											<li>
												<Link
													href='/helpcenter-overview'
													className='sub-menu-item'
												>
													{" "}
													Overview
												</Link>
											</li>
											<li>
												<Link href='/helpcenter-faqs' className='sub-menu-item'>
													{" "}
													FAQs
												</Link>
											</li>
											<li>
												<Link
													href='/helpcenter-guides'
													className='sub-menu-item'
												>
													{" "}
													Guides
												</Link>
											</li>
											<li>
												<Link
													href='/helpcenter-support'
													className='sub-menu-item'
												>
													{" "}
													Support
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href='/terms' className='sub-menu-item'>
											Terms Policy
										</Link>
									</li>
									<li>
										<Link href='/privacy' className='sub-menu-item'>
											Privacy Policy
										</Link>
									</li>
								</ul>
							</li> */}

							<li>
								<Link href='/crear-negocio'>Crear negocio</Link>
							</li>
						</ul>
					</NavbarNavigation>
				</div>
			</nav>
		</NavbarClientProvider>
	);
}
