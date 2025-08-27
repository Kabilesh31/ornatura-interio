import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

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

// 👇 Add icons here
export const metadata: Metadata = {
  title: "Ornatura Interio - Premium Interior Design Studio",
  description:
    "Transform your space with our expert interior design services. Specializing in luxury residential and commercial interiors.",
  icons: {
    icon: "/favicon.ico", // default favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional for iOS
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
