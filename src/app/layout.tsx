import { Urbanist } from "next/font/google";
import "./assets/css/tailwind.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { Providers } from "./providers";

const urbanist = Urbanist({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-urbanist",
});

export const metadata = {
	title: "Chancay Express",
	description: "Delivery YA!",
};

export default function RootLayout({
	children,
	actions,
}: React.PropsWithChildren<{ actions: React.ReactNode }>) {
	return (
		<html lang='en' dir='LTR' className=''>
			<body
				className={`${urbanist.variable} font-urbanist text-base text-black dark:bg-slate-900 dark:text-white`}
			>
				<Providers>
					<main className='flex min-h-screen flex-col'>
						<Navbar />
						<div className='relative min-h-screen overflow-hidden pb-16 pt-36 md:pt-48'>
							{children}
						</div>
						{actions}
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
}
