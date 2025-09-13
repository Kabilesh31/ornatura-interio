"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette,Trees, Paintbrush,Activity,Crop,LayoutDashboard,Home, Wrench, Building,Hammer,Landmark,Feather,LayoutGrid,Layers, } from "lucide-react"
import { Playwrite_AU_VIC } from "next/font/google";
import { Diphylleia } from 'next/font/google'

// ✅ Load font at module scope
const diphylleia = Diphylleia({
  subsets: ['latin'],
  weight: ['400']
})

const playwrite = Playwrite_AU_VIC({
  weight: ["400","100","200"], // choose weights
  style: "normal",
  display: "swap",
});
const services = [
  {
  icon: Paintbrush, // ✅ Lucide-react icon (creative & balanced)
  title: "Interior Design + Styling",
  description:
    "We craft interiors that balance functionality and beauty, layering colors, textures, and décor to create spaces that feel both personal and timeless. From concept to completion, we bring your vision to life with thoughtful design and curated styling.",
  features: [
    ,
    "Color Consultation",
    "Furniture Selection",
    ,
    "Lighting Design",
    ,
    "Space Planning",
    ,
  ],
}
,
  {
    icon: Crop,
    title: "Renovation",
    description:
      "We breathe new life into existing spaces with thoughtful renovations. By blending modern sophistication with practical solutions, we turn design hurdles into opportunities, making old spaces feel brand new.",
    features: ["Space Reconfiguration", "Kitchen & Bath Remodel", "Flooring Solutions", "Built-in Storage"],
  },
  {
    icon: Landmark,
    title: "Architecture",
    description:
      "Every great design starts with a strong foundation. Our architectural expertise ensures innovation, precision, and structural elegance, shaping spaces that are built to inspire and endure",
    features: ["Space Planning", "Structural Design", "Building Permits", "Construction Oversight"],
  },
  {
  icon: Trees, // 🌳 Lucide-react icon (best fit for landscape)
  title: "Landscape",
  description:
    "We design and shape outdoor environments that harmonize with nature, creating green spaces that are functional, beautiful, and sustainable. From courtyards to large-scale gardens, our landscapes bring life and balance to every space.",
  features: [
    "Garden & Courtyard Design",
    ,
    ,
    "Outdoor Lighting",
    "Hardscape & Pathways",
    "Terrace & Balcony Gardens",
    ,
  ],
}

]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-27 bg-muted/30" id="journey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
         <h2
  className={`text-3xl md:text-4xl font-bold mb-4 fade-in-up ${playwrite.className}`}
>
  Our Services
</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            We offer comprehensive interior design services tailored to transform your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={service.title}
                data-index={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-justify">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
