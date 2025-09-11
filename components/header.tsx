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
import { usePathname } from "next/navigation"

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

  const pathname = usePathname()
  const isServicesPage = pathname === "/services"
  const isGalleryPage = pathname === "/gallery"
  const isHomePage = pathname === "/"

  // ✅ Nav link style
  const getNavStyle = () => {
  // Home + Services → always white (with softer hover)
  if (isHomePage || isServicesPage) {
    return "text-white hover:text-white/80"
  }

  // Gallery → lighter hover when not scrolled
  if (isGalleryPage) {
    return isScrolled
      ? "text-white hover:text-white/80" // scrolled → same as others
      : "text-gray-800 hover:text-white-400" // not scrolled → lighter hover
  }

  // Other pages
  return isScrolled
    ? "text-gray-800 hover:text-gray-600"
    : "text-white hover:text-white/80"
}
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        // ✅ Home + Services + Gallery → same scroll background
        isHomePage || isServicesPage || isGalleryPage
          ? isScrolled
            ? "bg-[#727a66] shadow-xl border-b border-primary/10"
            : "bg-transparent"
          : isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-xl border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <div className="container-responsive py-3 sm:py-4">
        <div className="flex items-center justify-start gap-62">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Ornatura Interio Logo"
              className={cn(
                "w-30 mt-2 sm:w-38 md:w-60 transition-all duration-300 ml-1 sm:ml-6",
                isScrolled ? "opacity-80" : "opacity-100"
              )}
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList className="space-x-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Enquiry", href: "/#contact" },
              ].map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={item.href}
                    // ✅ Removed click/active/focus styles → only hover
                    className={cn(
                      "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-colors duration-300",
                      getNavStyle()
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-2 left-82 h-10 w-10 rounded-lg bg-grey text-chart-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 z-50"
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
                  isHomePage || isServicesPage || isGalleryPage
                    ? "text-gray-800 hover:text-gray-600"
                    : "text-gray-800 hover:text-gray-600"

                return (
                  <a
                    key={idx}
                    href={href}
                    // ✅ No active state → only hover dim
                    className={cn(
                      "px-2 py-3 text-sm font-medium rounded-lg transition-colors duration-300",
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
