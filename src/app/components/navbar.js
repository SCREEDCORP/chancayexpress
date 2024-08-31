"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isDropdown, openDropdown] = useState(true);
	const [isOpen, setMenu] = useState(true);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", windowScroll);
		}
		window.scrollTo(0, 0);
		activateMenu();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function windowScroll() {
		const navbar = document.getElementById("topnav");
		if (
			document.body.scrollTop >= 50 ||
			document.documentElement.scrollTop >= 50
		) {
			if (navbar !== null) {
				navbar?.classList.add("nav-sticky");
			}
		} else {
			if (navbar !== null) {
				navbar?.classList.remove("nav-sticky");
			}
		}

		// const mybutton = document.getElementById("back-to-top");
		// if (mybutton != null) {
		//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		//         mybutton.classList.add("flex");
		//         mybutton.classList.remove("hidden");
		//     } else {
		//         mybutton.classList.add("hidden");
		//         mybutton.classList.remove("flex");
		//     }
		// }
	}

	const toggleMenu = () => {
		setMenu(!isOpen);
		if (document.getElementById("navigation")) {
			const anchorArray = Array.from(
				document.getElementById("navigation").getElementsByTagName("a"),
			);
			anchorArray.forEach(element => {
				element.addEventListener("click", elem => {
					const target = elem.target.getAttribute("href");
					if (target !== "") {
						if (elem.target.nextElementSibling) {
							var submenu = elem.target.nextElementSibling.nextElementSibling;
							submenu.classList.toggle("open");
						}
					}
				});
			});
		}
	};

	const getClosest = (elem, selector) => {
		// Element.matches() polyfill
		if (!Element.prototype.matches) {
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function (s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(
							s,
						),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}

		// Get the closest matching element
		for (; elem && elem !== document; elem = elem.parentNode) {
			if (elem.matches(selector)) return elem;
		}
		return null;
	};
	const activateMenu = () => {
		var menuItems = document.getElementsByClassName("sub-menu-item");
		if (menuItems) {
			var matchingMenuItem = null;
			for (var idx = 0; idx < menuItems.length; idx++) {
				if (menuItems[idx].href === window.location.href) {
					matchingMenuItem = menuItems[idx];
				}
			}

			if (matchingMenuItem) {
				matchingMenuItem.classList.add("active");

				var immediateParent = getClosest(matchingMenuItem, "li");

				if (immediateParent) {
					immediateParent.classList.add("active");
				}

				var parent = getClosest(immediateParent, ".child-menu-item");
				if (parent) {
					parent.classList.add("active");
				}

				var parent = getClosest(parent || immediateParent, ".parent-menu-item");

				if (parent) {
					parent.classList.add("active");

					var parentMenuitem = parent.querySelector(".menu-item");
					if (parentMenuitem) {
						parentMenuitem.classList.add("active");
					}

					var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
					if (parentOfParent) {
						parentOfParent.classList.add("active");
					}
				} else {
					var parentOfParent = getClosest(
						matchingMenuItem,
						".parent-parent-menu-item",
					);
					if (parentOfParent) {
						parentOfParent.classList.add("active");
					}
				}
			}
		}
	};

	const metamask = async () => {
		try {
			//Basic Actions Section
			const onboardButton = document.getElementById("connectWallet");

			//   metamask modal
			const modal = document.getElementById("modal-metamask");
			const closeModalBtn = document.getElementById("close-modal");

			//   wallet address
			const myPublicAddress = document.getElementById("myPublicAddress");

			//Created check function to see if the MetaMask extension is installed
			const isMetaMaskInstalled = () => {
				//Have to check the ethereum binding on the window object to see if it's installed
				const { ethereum } = window;
				return Boolean(ethereum && ethereum.isMetaMask);
			};

			const onClickConnect = async () => {
				if (!isMetaMaskInstalled()) {
					//meta mask not installed
					modal.classList.add("show");
					modal.style.display = "block";
					return;
				}
				try {
					// eslint-disable-next-line no-undef
					await ethereum.request({ method: "eth_requestAccounts" });
					// eslint-disable-next-line no-undef
					const accounts = await ethereum.request({ method: "eth_accounts" });
					myPublicAddress.innerHTML =
						accounts[0].split("").slice(0, 6).join("") +
						"..." +
						accounts[0]
							.split("")
							.slice(accounts[0].length - 7, accounts[0].length)
							.join("");
				} catch (error) {
					console.error(error);
				}
			};

			const closeModal = () => {
				modal.classList.remove("show");
				modal.style.display = "none";
			};

			if (isMetaMaskInstalled()) {
				// eslint-disable-next-line no-undef
				const accounts = await ethereum.request({ method: "eth_accounts" });
				if (!!accounts[0]) {
					myPublicAddress.innerHTML =
						accounts[0].split("").slice(0, 6).join("") +
						"..." +
						accounts[0]
							.split("")
							.slice(accounts[0].length - 7, accounts[0].length)
							.join("");
				}
			}

			onboardButton.addEventListener("click", onClickConnect);
			closeModalBtn.addEventListener("click", closeModal);
		} catch (error) {}
	};

	return (
		<>
			<nav id='topnav' className='defaultscroll is-sticky'>
				<div className='container'>
					{/* <!-- Logo container--> */}
					<Link className='logo ps-0' href='/'>
						<Image
							src='/images/logo-icon-28.png'
							width={28}
							height={28}
							className='inline-block sm:hidden'
							alt=''
						/>
						<div className='hidden sm:block'>
							<Image
								src='/images/logo-dark.png'
								width={116}
								height={28}
								className='inline-block h-7 dark:hidden'
								alt=''
							/>
							<Image
								src='/images/logo-white.png'
								width={116}
								height={28}
								className='hidden h-7 dark:inline-block'
								alt=''
							/>
						</div>
					</Link>

					<div className='menu-extras'>
						<div className='menu-item'>
							{/* <!-- Mobile menu toggle--> */}
							<Link
								href='#'
								className='navbar-toggle'
								id='isToggle'
								onClick={toggleMenu}
							>
								<div className='lines'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</Link>
						</div>
					</div>

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

					<div
						id='navigation'
						className={`${isOpen === true ? "hidden" : "block"}`}
					>
						<ul className='navigation-menu justify-end'>
							<li className='has-submenu parent-menu-item'>
								<Link href='/'>Home</Link>
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
								<Link href='/crear-negocio' className='sub-menu-item'>
									Crear negocio
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
