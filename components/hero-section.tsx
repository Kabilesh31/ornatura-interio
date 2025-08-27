"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ChevronUp, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const heroContent = [
    {
      image: "/luxury-beige-olive-living-room.png",
      title: "Transform Your Living Space",
      subtitle: "INTERIOR DESIGN AGENCY",
      description:
        "Right design and right ideas matter a lot of in interior design business. a style that makes a statement.",
    },
    {
      image: "/luxury-modern-living-room.png",
      title: "Modern Luxury Interiors",
      subtitle: "CONTEMPORARY DESIGN",
      description:
        "Creating sophisticated spaces that blend functionality with aesthetic excellence for modern living.",
    },
    {
      image: "/luxury-penthouse-city-view.png",
      title: "Urban Sophistication",
      subtitle: "PENTHOUSE DESIGN",
      description: "Elevating city living with premium materials and breathtaking views that inspire daily life.",
    },
    {
      image: "/cozy-family-living-room.png",
      title: "Cozy Family Spaces",
      subtitle: "RESIDENTIAL COMFORT",
      description: "Designing warm, inviting homes where families create lasting memories together.",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const goToNextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const nextIndex = (currentSlide + 1) % heroContent.length

    setTimeout(() => {
      setCurrentSlide(nextIndex)
      setIsTransitioning(false)
    }, 1000)
  }

  const goToPrevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const prevIndex = (currentSlide - 1 + heroContent.length) % heroContent.length

    setTimeout(() => {
      setCurrentSlide(prevIndex)
      setIsTransitioning(false)
    }, 1000)
  }

  const currentContent = heroContent[currentSlide]
  const nextContent = heroContent[(currentSlide + 1) % heroContent.length]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* All background images stacked */}
        {heroContent.map((content, index) => {
          const isActive = index === currentSlide
          const isNext = index === (currentSlide + 1) % heroContent.length

          let translateY = "100%" // Default: below viewport

          if (isActive && !isTransitioning) {
            translateY = "0%" // Current image in view
          } else if (isActive && isTransitioning) {
            translateY = "-100%" // Current image sliding up and out
          } else if (isNext && isTransitioning) {
            translateY = "0%" // Next image sliding up into view
          }

          return (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${content.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
                transform: `translateY(${translateY})`,
                zIndex: isActive || isNext ? 2 : 1,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
            </div>
          )
        })}
      </div>

      {/* Vertical Scroll Indicator - Right Side */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        <button
          onClick={goToPrevSlide}
          className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium">{String(currentSlide + 1).padStart(2, "0")}</span>
          <div className="w-px h-12 bg-white/30"></div>
          <span className="text-white/60 text-sm">{String(heroContent.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={goToNextSlide}
          className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-white text-center">
        {/* Content */}
        <div
          className={`transition-all duration-700 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
          key={currentSlide}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20 float-animation">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Award Winning Design Studio</span>
          </div>

          <div className="mb-4">
            <p className="text-sm tracking-widest text-white/80 mb-2">{currentContent.subtitle}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {currentContent.title.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={
                    index === currentContent.title.split(" ").length - 1 ? "block text-primary glow-effect" : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">{currentContent.description}</p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 shadow-xl glow-effect transition-all duration-300 hover:scale-105"
            >
              DISCOVER WORK
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 stagger-animation ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift glow-effect">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-white/80">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift glow-effect">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift glow-effect">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-white/80">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center glow-effect">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
