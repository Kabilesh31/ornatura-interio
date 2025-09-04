"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Star } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Interior Designer",
    image: "/professional-female-interior-designer.png",
    bio: "With over 12 years of experience, Sarah specializes in luxury residential design and has won multiple design awards.",
    specialties: ["Luxury Design", "Color Theory", "Space Planning"],
  },
  {
    name: "Michael Chen",
    role: "Senior Architect",
    image: "/images/team-2.png",
    bio: "Michael brings architectural expertise to our team, ensuring every design is both beautiful and structurally sound.",
    specialties: ["Architecture", "Renovation", "Building Codes"],
  },
  {
    name: "Emma Rodriguez",
    role: "Project Manager",
    image: "/professional-female-project-manager.png",
    bio: "Emma ensures every project runs smoothly from concept to completion, maintaining our high standards of quality.",
    specialties: ["Project Management", "Client Relations", "Quality Control"],
  },
]

const achievements = [
  { icon: Award, label: "Design Awards", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Star, label: "Client Rating", value: "4.9/5" },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-25 overflow-hidden bg-[#e9e8e6]" // Background color
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 mix-blend-multiply"
      >
        <source src="/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative container mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-4xl font-bold mb-16 text-gray-900">
            About Ornatura Interio
          </h2>

          <div className="max-w-3xl mx-auto space-y-5.5 text-lg text-gray-900 leading-relaxed text-justify">
            <p>
              At <span className="font-semibold">Ornatura Interior</span>, we are passionate about transforming
              spaces into timeless works of art. As one of Coimbatore’s leading architectural and interior design firms,
              we specialize in crafting bespoke solutions that balance creativity, precision, and functionality.
            </p>

            <p>
              Our portfolio spans luxury residences, commercial spaces, institutional projects, and hospitality ventures,
              each tailored to meet the unique needs and aspirations of our clients. With expertise in space planning,
              problem-solving, and thoughtful renovations, we simplify complex design challenges and present curated options
              that truly bring your vision to life.
            </p>

            <p>
              By blending modern sophistication with traditional elegance, we create interiors that are not only visually stunning
              but also deeply personal and practical. Every project we undertake is a reflection of our client’s individuality—designed
              to inspire, endure, and tell a distinct story.
            </p>

            <p>
              At <span className="font-semibold">Ornatura Interior</span>, we don’t just design spaces—
              we craft <span className="italic">experiences</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
