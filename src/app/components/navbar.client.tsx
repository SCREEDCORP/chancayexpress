/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React from "react";

type NavbarClientContext = {
	isOpen: boolean;
	setMenu: (isOpen: boolean) => void;
	toggleMenu: () => void;
};

const NavbarClientContext = React.createContext<NavbarClientContext | null>(
	null,
);

export function NavbarClientProvider({ children }: React.PropsWithChildren) {
	const [isOpen, setMenu] = React.useState(true);

	React.useEffect(() => {
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
				(document
					.getElementById("navigation")
					?.getElementsByTagName("a") as HTMLCollectionOf<HTMLAnchorElement>) ??
					[],
			);
			anchorArray.forEach(element => {
				element.addEventListener("click", e => {
					const elem = e.target as HTMLAnchorElement;
					const target = elem?.getAttribute("href");
					if (target !== "") {
						if (elem.nextElementSibling) {
							const submenu = elem.nextElementSibling.nextElementSibling;
							submenu?.classList.toggle("open");
						}
					}
				});
			});
		}
	};

	const getClosest = (elem: any, selector: any) => {
		// Element.matches() polyfill
		if (!Element.prototype.matches) {
			Element.prototype.matches =
				(Element.prototype as any).matchesSelector ||
				(Element.prototype as any).mozMatchesSelector ||
				(Element.prototype as any).msMatchesSelector ||
				(Element.prototype as any).oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function (s) {
					const matches = // @ts-expect-error asd
						(this.document || this.ownerDocument).querySelectorAll(s);

					let i = matches.length;

					// @ts-expect-error asd
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
		const menuItems = document.getElementsByClassName(
			"sub-menu-item",
		) as HTMLCollectionOf<HTMLAnchorElement>;

		if (menuItems) {
			let matchingMenuItem = null;
			for (let idx = 0; idx < menuItems.length; idx++) {
				if (menuItems[idx]?.href === window.location.href) {
					matchingMenuItem = menuItems[idx];
				}
			}

			if (matchingMenuItem) {
				matchingMenuItem.classList.add("active");

				const immediateParent = getClosest(matchingMenuItem, "li");

				if (immediateParent) {
					immediateParent.classList.add("active");
				}

				let parent = getClosest(immediateParent, ".child-menu-item");
				if (parent) {
					parent.classList.add("active");
				}

				parent = getClosest(parent || immediateParent, ".parent-menu-item");

				if (parent) {
					parent.classList.add("active");

					const parentMenuitem = parent.querySelector(".menu-item");
					if (parentMenuitem) {
						parentMenuitem.classList.add("active");
					}

					const parentOfParent = getClosest(parent, ".parent-parent-menu-item");
					if (parentOfParent) {
						parentOfParent.classList.add("active");
					}
				} else {
					const parentOfParent = getClosest(
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

	return (
		<NavbarClientContext.Provider value={{ isOpen, setMenu, toggleMenu }}>
			{children}
		</NavbarClientContext.Provider>
	);
}

function useNavbarClient() {
	const context = React.useContext(NavbarClientContext);

	if (!context) {
		throw new Error(
			"useNavbarClient must be used within a NavbarClientProvider",
		);
	}

	return context;
}

export function NavbarMenuExtras() {
	const { toggleMenu } = useNavbarClient();

	return (
		<div className='menu-extras !float-none'>
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
	);
}

export function NavbarNavigation({ children }: React.PropsWithChildren) {
	const { isOpen } = useNavbarClient();

	return (
		<div
			id='navigation'
			className={`${isOpen ? "hidden" : "block"} !float-none`}
		>
			{children}
		</div>
	);
}
