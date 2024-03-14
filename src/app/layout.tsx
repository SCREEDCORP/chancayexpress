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
  title: "Giglink - Next Js NFT Marketplace Template",
  description: "Next Js NFT Marketplace Template",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" dir="LTR">
      <body className={`${urbanist.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
