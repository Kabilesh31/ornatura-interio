"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Penthouse",
    category: "Interior Design Studio",
    image: "/luxury-penthouse-city-view.png",
    description: "A sophisticated penthouse design featuring clean lines, premium materials, and stunning city views.",
    tags: ["Luxury", "Modern", "Penthouse"],
  },
  {
    id: 2,
    title: "Cozy Family Home",
    category: "Interior Styling",
    image: "/cozy-family-living-room.png",
    description: "Warm and inviting family spaces designed for comfort and functionality.",
    tags: ["Family", "Cozy", "Residential"],
  },
  {
    id: 3,
    title: "Historic Renovation",
    category: "Renovation",
    image: "/historic-modern-renovation.png",
    description: "Careful restoration of a historic property while adding modern conveniences.",
    tags: ["Historic", "Renovation", "Classic"],
  },
  {
    id: 4,
    title: "Contemporary Office",
    category: "Architecture",
    image: "/modern-glass-office.png",
    description: "Innovative office design promoting collaboration and productivity.",
    tags: ["Commercial", "Office", "Contemporary"],
  },
  {
    id: 5,
    title: "Minimalist Apartment",
    category: "Interior Styling",
    image: "/minimalist-apartment.png",
    description: "Clean, uncluttered spaces that maximize light and functionality.",
    tags: ["Minimalist", "Apartment", "Clean"],
  },
  {
    id: 6,
    title: "Luxury Villa",
    category: "Interior Design Studio",
    image: "/luxury-villa-interior.png",
    description: "Opulent villa design featuring custom furnishings and artistic details.",
    tags: ["Luxury", "Villa", "Custom"],
  },
]

const categories = ["All", "Interior Styling", "Interior Design Studio", "Renovation", "Architecture"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of stunning interior design projects across various styles and spaces
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="sm" className="bg-white text-black hover:bg-white/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
