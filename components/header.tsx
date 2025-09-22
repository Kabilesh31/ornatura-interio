"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false) // desktop submenu
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false) // mobile submenu

  const submenuRef = useRef<HTMLDivElement | null>(null)

  const pathname = usePathname()
  const isServicesPage = pathname === "/services"
  const isGalleryPage = pathname === "/gallery"
  const isHomePage = pathname === "/"

  // Scroll effect + hash detection
  useEffect(() => {
    const handleScroll = () => {
      // Normal scroll behavior
      if (
        window.location.hash === "#about" ||
        window.location.hash === "#contact"
      ) {
        setIsScrolled(true)
      } else {
        setIsScrolled(window.scrollY > 50)
      }
    }

    const handleHashChange = () => {
      if (
        window.location.hash === "#about" ||
        window.location.hash === "#contact"
      ) {
        setIsScrolled(true)
      } else {
        setIsScrolled(window.scrollY > 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", handleHashChange)

    // Run once on mount
    handleHashChange()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Close desktop submenu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setIsSubMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Nav link style
  const getNavStyle = () => {
    if (isHomePage || isServicesPage) return "text-white hover:text-white/80"
    if (isGalleryPage)
      return isScrolled
        ? "text-white hover:text-white/80"
        : "text-white/90 hover:text-white-400"
    return isScrolled
      ? "text-gray-800 hover:text-white-80"
      : "text-white hover:text-white/80"
  }
  return (
   <header
  className={cn(
    "fixed top-0 w-full z-50 transition-all duration-500",
    isGalleryPage
      ? "bg-[#727a66] shadow-xl border-b border-primary/10" // always scrolled style for Gallery
      : isHomePage || isServicesPage
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
          <NavigationMenu className="hidden lg:flex flex-1  justify-center ">
            <NavigationMenuList className="space-x-2">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-colors duration-300",
                    getNavStyle()
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#about"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-colors duration-300",
                    getNavStyle()
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* What We Do (Desktop Submenu) */}
              <NavigationMenuItem className="relative" ref={submenuRef as any}>
                <button
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  className={cn(
                    "inline-flex items-center gap-1 h-11 px-5 py-2 text-sm font-medium rounded-lg bg-transparent transition-colors duration-300",
                    getNavStyle()
                  )}
                >
                  What We Do
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isSubMenuOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {isSubMenuOpen && (
                  <div className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2 w-40 z-50">
                    <ul className="flex flex-col py-2">
                      <li>
                        <Link
                          href="/#journey"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setIsSubMenuOpen(false)}
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setIsSubMenuOpen(false)}
                        >
                          Process
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </NavigationMenuItem>

              {/* Gallery */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/gallery"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-colors duration-300",
                    getNavStyle()
                  )}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Enquiry */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#contact"
                  className={cn(
                    "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-colors duration-300",
                    getNavStyle()
                  )}
                >
                  Enquiry
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-10 w-10 rounded-lg bg-grey text-chart-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-1 top-full  w-60 max-w-[90%] mx-4 rounded-xl shadow-2xl slide-down overflow-hidden bg-white z-40">
            <nav className="flex flex-col p-4 space-y-1">
              {["Home", "About Us", "What We Do", "Gallery", "Enquiry"].map((item, idx) => {
                if (item === "What We Do") {
                  return (
                    <div key={idx} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                        className="px-2 py-3 text-sm font-medium rounded-lg w-full text-left text-gray-800 hover:text-gray-600 flex justify-between items-center transition-colors duration-300"
                      >
                        {item}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isMobileSubMenuOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {isMobileSubMenuOpen && (
                        <div className="ml-4 flex flex-col space-y-1 mt-1">
                          <Link
                            href="/#journey"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-2 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-primary"
                          >
                            Services
                          </Link>
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-2 py-2 text-sm font-medium rounded-lg text-gray-700 hover:text-primary"
                          >
                            Process
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }

                const href =
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/#about"
                    : item === "Gallery"
                    ? "/gallery"
                    : "/#contact"

                return (
                  <Link
                    key={idx}
                    href={href}
                    className="px-2 py-3 text-sm font-medium rounded-lg text-gray-800 hover:text-gray-600 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
