import { Urbanist } from "next/font/google";
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/tailwind.css";
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

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" dir="LTR" className="dark">
      <body
        className={`${urbanist.variable} font-urbanist text-base text-black dark:bg-slate-900 dark:text-white dark`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
