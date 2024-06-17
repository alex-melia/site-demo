import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          {/* <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div> */}
        </div>
      </body>
    </html>
  )
}
