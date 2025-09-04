"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const pathname = usePathname();
  const isServicesPage = pathname === "/services";
  const isGallery = pathname === "/gallery"

  // function to decide nav link style
  const getNavStyle = () => {
  // If we are on Services or Gallery page
  if (isServicesPage || isGallery) {
    return "text-gray-500 hover:text-primary hover:bg-primary-s/20";
  }

  // For other pages, change color on scroll
  return isScrolled
    ? "text-gray-800 hover:text-primary hover:bg-gray-100"
    : "text-white hover:text-yellow-300 hover:bg-primary/20";
};

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-xl border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <div className="container-responsive py-3 sm:py-4">
        <div className="flex items-center justify-start gap-60">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Ornatura Interio Logo"
              className={cn(
                "w-20 mt-2 sm:w-38 md:w-60 transition-all duration-300 ml-4 sm:ml-6",
                isScrolled ? "opacity-80" : "opacity-100"
              )}
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList className="space-x-2">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105",
                    getNavStyle()
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <Link
                  href="/#about"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105",
                    getNavStyle()
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105",
                    getNavStyle()
                  )}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Gallery */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/gallery"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105",
                    getNavStyle()
                  )}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Enquiry */}
              <NavigationMenuItem>
                <Link
                  href="/#contact"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105",
                    getNavStyle()
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enquiry
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-2 left-82 h-10 w-10 rounded-lg bg-grey text-chart-2 hover:bg-primary/10 transition-all duration-300 hover:scale-110 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <div className="lg:hidden absolute left-1 top-full mt-2 w-80 max-w-[90%] mx-4 rounded-xl shadow-2xl slide-down overflow-hidden bg-white">
    <nav className="flex flex-col p-4">
      {["Home", "About Us", "Services", "Gallery", "Enquiry"].map((item, idx) => {
        const href =
          item === "Home"
            ? "/"
            : item === "About Us"
            ? "/#about"
            : item === "Services"
            ? "/services"
            : item === "Gallery"
            ? "/gallery"
            : "/#contact"

        const mobileTextClass =
          isServicesPage || isGallery
            ? "text-gray-800 hover:text-primary hover:bg-primary/10"
            : "text-gray-800 hover:text-primary hover:bg-gray-100/10"

        return (
          <a
            key={idx}
            href={href}
            className={cn(
              "px-2 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover-lift",
              mobileTextClass
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </a>
        )
      })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
