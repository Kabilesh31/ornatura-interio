"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram,MessageCircle , Mail, Phone, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Diphylleia } from 'next/font/google'

// ✅ Load font at module scope
const diphylleia = Diphylleia({
  subsets: ['latin'],
  weight: ['400']
})


export function Footer() {
  const currentYear = new Date().getFullYear()
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <footer className="relative bg-primary text-background pt-40 pb-18 ">
      {/* Floating Inner Box */}
   <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[500px] md:h-[250px] bg-primary shadow-xl rounded-2xl p-8 flex flex-col items-center gap-6 
  transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-primary/90">
  
  {/* Logo */}
  <div className="flex items-center gap-10">
    <img
      src="/Ornatura.jpg"
      alt="Company Logo"
      className="h-20 w-20 object-contain"
    />
    <h2 className="text-xl text-gray font-bold">Ornatura</h2>
  </div>
<div className="text-sm text-gray-800 font-semibold">
  Keep your trust on our Master minds.

</div>
  {/* Social Icons */}
  <div className="flex items-center gap-4">
  {/* Heading */}
  <h2 className="text-xl font-bold text-gray-450">Follow Us</h2>

  {/* Social icons */}
  <div className="flex gap-3">
    {/* Facebook */}
    <Link
      href="https://www.facebook.com/ornatura?mibextid=wwXIfr&rdid=GZixnPc6Ko4yOin9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YMxqY7rzT%2F%3Fmibextid%3DwwXIfr#"
      target="_blank"
      className="p-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-800 transition-all duration-300"
    >
      <Facebook className="h-5 w-5" />
    </Link>

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/ORNATURA_INTERIO"
      target="_blank"
      className="p-2 rounded-full bg-red-500 text-white shadow-md hover:bg-red-800 transition-all duration-300"
    >
      <Instagram className="h-5 w-5" />
    </Link>

    {/* WhatsApp */}
    <Link
      href="https://wa.me/919487435050"
      target="_blank"
      className="p-2 rounded-full bg-green-500 text-white shadow-md hover:bg-green-800 transition-all duration-300"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  </div>
</div>
</div>


      {/* Footer Content */}
      <div className="container mx-auto px-6 mt-28">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 md:-mt-50 text-xl" >Services</h3>
            <ul className={`space-y-3 text-sm ${diphylleia.className}`}>
  <li>
    <a href="#interior" className="text-background/80 hover:text-background transition-colors">
      Interior Design
    </a>
  </li>
  <li>
    <a href="#renovation" className="text-background/80 hover:text-background transition-colors">
      Renovation
    </a>
  </li>
  <li>
    <a href="#architecture" className="text-background/80 hover:text-background transition-colors">
      Architecture
    </a>
  </li>
  <li>
    <a href="#landscape" className="text-background/80 hover:text-background transition-colors">
      Landscape
    </a>
  </li>
</ul>

          </div>

          {/* Quick Links */}
          <div className="md:-mt-50 md:-ml-54">
  <h3 className="font-semibold mb-4 text-xl">Quick Links</h3>
  <ul className={`space-y-2 text-sm ${diphylleia.className}`}>
    <li>
      <Link href="/" className="text-background/80 hover:text-background">
        Home
      </Link>
    </li>
    <li>
      <Link href="/#about" className="text-background/80 hover:text-background">
        About Us
      </Link>
    </li>
    <li className="relative">
      <button
        className="text-background/80 hover:text-background flex items-center gap-1"
        onClick={() => setSubmenuOpen(!submenuOpen)}
      >
        What We Do
      </button>
      <ul
        className={`absolute left-0 mt-1 w-36 bg-white rounded-md shadow-md z-20 ${
          submenuOpen ? "" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/#journey"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Process
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <Link href="/gallery" className="text-background/80 hover:text-background">
        Gallery
      </Link>
    </li>
    <li>
      <Link href="/#contact" className="text-background/80 hover:text-background">
        Enquiry
      </Link>
    </li>
  </ul>
</div>


          {/* Contact Info */}
   <div className="md:-mt-55 md:ml-20">
  <h3 className="font-semibold mb-4 text-xl">Contact Us</h3>

  <ul className={`space-y-4 text-sm ${diphylleia.className}`}>
    {/* Phone */}
    <li className="flex items-center gap-4.5">
      <Phone className="2xl:h-5 2xl:w-5 mt-3 xl:h-6 xl:w-6 lg:h-5 lg:w-5 text-background/80 hover:text-background" />
      <span className="mt-2">+91 94874 35050</span>
    </li>

    {/* Email */}
    <li className="flex mt-5 items-center gap-5">
      <Mail className="2xl:h-5 2xl:w-5  xl:h-6 xl:w-6 lg:h-5 lg:w-5 mt-2 text-background/80 text-sm hover:text-background" />
      <span className="mt-1">ar.ornatura@gmail.com</span>
    </li>

    {/* Working Hours */}
    <li className="flex items-center gap-5">
  <Clock className="2xl:h-5 2xl:w-5 xl:h-6 xl:w-6 lg:h-6 lg:w-6 text-background/80 hover:text-background" />
  <div className="flex flex-col gap-1 text-sm">
    <span>Tue - Sat: 10:00 AM - 7:00 PM</span>
    <span>Sun: 11:00 AM - 4:00 PM</span>
    <span>Monday: Holiday</span>
  </div>
</li>

    {/* Address */}
    <li className="flex flex-col gap-1">
      <div className="flex items-start gap-4.5">
        <MapPin className="2xl:h-6 2xl:w-6 mt-3 xl:h-8 xl:w-8 lg:h-9 lg:w-9 text-background/80 hover:text-background" />
        <span>
          347, DS Complex, Nehru Street, Ramnagar Street
          <br />
          Coimbatore - 641009
          <br />
          Tamil Nadu, India
        </span>
      </div>
      <p className="ml-2 text-lg text-background/70">
        Note: Visit us on appointment basis
      </p>
    </li>
  </ul>
</div>

        </div>

        {/* Newsletter Row */}
        <div className="mt-12 text-center md:-mt-30 md:mb-10 ">
          <h3 className="font-semibold text-xl mb-4">Stay Updated</h3>
          <p className="text-background/80 text-sm mb-4 ${diphylleia.className}">
  Subscribe to our newsletter for tips and updates.
</p>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
            />
            <Button size="icon" className="bg-white text-primary hover:bg-gray-200">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 md:-mb-9 pt-6 text-center">
          <p className="text-background/80 text-xs md:text-sm">
            © {currentYear} Ornatura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
