import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

// 👇 import your cursor
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Ornatura Interio - Premium Interior Design Studio",
  description:
    "Transform your space with our expert interior design services. Specializing in luxury residential and commercial interiors.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        {/* 👇 Add this once → works for all pages */}
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
