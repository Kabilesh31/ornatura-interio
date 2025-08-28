"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
        <div className="flex items-center justify-start gap-80">
          {/* Logo */}
         <div className="flex items-center space-x-3 group">
  {/* <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg glow-effect transition-all duration-300 group-hover:scale-110">
    <Sparkles className="text-primary-foreground w-4 h-4 sm:w-5 sm:h-5" />
  </div> */}
  <span
    className={cn(
      "text-xl sm:text-2xl ml-3 font-bold transition-colors duration-300",
      isScrolled ? "text-gray-500" : "text-white"
    )}
  >
    Ornatura Interio
  </span>
</div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList className="space-x-2">
              {["Home",  "Services", "Gallery"].map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={
                      item === "Home"
                        ? "/"
                        
                        : item === "Services"
                        ? "/services"
                        : "/gallery"
                    }
                    className={cn(
                      "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none hover:scale-105",
                      isScrolled ? "text-gray-800" : "text-white"
                    )}
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
<NavigationMenuItem>
  <Link
    href="/#about"
    className={cn(
      "group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none hover:scale-105",
      isScrolled ? "text-gray-800" : "text-white"
    )}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    About Us
  </Link>
</NavigationMenuItem>
              <NavigationMenuItem>
  <Link
    href="/#contact"
    className={cn(
      "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover-lift hover:bg-primary/10 hover:text-primary",
      isScrolled ? "text-gray-800" : "text-white"
    )}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Enquiry
  </Link>
</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Get Quote Button */}
          

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-2 left-82 h-10 w-10  rounded-lg bg-grey text-chart-2 hover:bg-primary/10 hover:bg-primary/10 transition-all duration-300 hover:scale-110 z-50"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <div className="lg:hidden absolute left-1 top-full mt-2 w-80 max-w-[90%]right-0 top-full mt-2 mx-4 mobile-nav-backdrop rounded-xl shadow-2xl slide-down overflow-hidden">
    <nav className="flex flex-col p-4">
      {["Home", "About Us", "Services", "Gallery", "Enquiry"].map((item, idx) => (
        <a
          key={idx}
          href={
            item === "Home"
              ? "/"
              : item === "About Us"
              ? "/#about"
              : item === "Services"
              ? "/services"
              : item === "Gallery"
              ? "/gallery"
              : "/#contact"
          }
          className="px-2 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 hover-lift"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item}
        </a>
      ))}
    </nav>
  </div>
)}

      </div>
    </header>
  )
}
