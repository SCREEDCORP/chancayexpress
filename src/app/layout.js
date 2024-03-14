
import './globals.css';
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/tailwind.css";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-urbanist",
 })

export const metadata = {
  title: 'Giglink - Next Js NFT Marketplace Template',
  description: 'Next Js NFT Marketplace Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body className={`${urbanist.variable}`}>{children}</body>
    </html>
  )
}
