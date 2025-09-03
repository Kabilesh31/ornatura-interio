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
    <section id="about" className="py-20 bg-muted/30 bg-cover "
    
  style={{ backgroundImage: "url('/your-image.jpg') "  }}>
      <div className="container mx-auto px-4">
        {/* Header */}
     <div
  className="relative py-20 bg-cover bg-center bg-fixed  bg-center bg-fixed opacity-30"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/service/bg5.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 "></div>

  <div className="relative container mx-auto px-4 ">
    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-4xl font-bold mb-16 text-white">
        About Ornatura Interio
      </h2>

      <div className="max-w-3xl mx-auto space-y-5.5 text-lg text-white leading-relaxed text-justify">
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

    {/* Achievements */}
    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-25 mb-20">
      {achievements.map((achievement) => {
        const Icon = achievement.icon
        return (
          <Card
            key={achievement.label}
            className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/50 backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-muted" />
              </div>
              <div className="text-2xl font-bold text-muted mb-2">{achievement.value}</div>
              <div className="text-sm text-muted-primary">{achievement.label}</div>
            </CardContent>
          </Card>
        )
      })}
    </div> */}
  </div>
            
          
        </div>

        {/* Team Section */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mt-5 mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Company Story */}
        {/* <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, Ornatura Interio began as a small studio with a big vision: to create beautiful,
                  functional spaces that truly reflect our clients' personalities and lifestyles.
                </p>
                <p>
                  Over the years, we've grown into a full-service design firm, but our core values remain the same. We
                  believe that great design should be accessible, sustainable, and deeply personal.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects, from intimate residential spaces to large
                  commercial developments, each one crafted with the same attention to detail and commitment to
                  excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="/interior-design-team.png" alt="Our team at work" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
