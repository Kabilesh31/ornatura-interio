"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "luxury", name: "Luxury" },
    { id: "modern", name: "Modern" },
    { id: "wooden", name: "Wooden" },
  ]

  const projects = [
    // example projects
    {
      id: 1,
      title: "Modern Luxury Living Room",
      category: "luxury",
      image: "/luxury-modern-living-room.png",
      description: "Contemporary design with premium finishes",
      likes: 124,
      views: 2340,
    },
    {
      id: 2,
      title: "Cozy Family Living Room",
      category: "residential",
      image: "/cozy-family-living-room.png",
      description: "Warm and inviting family space",
      likes: 156,
      views: 2100,
    },
    {
      id: 3,
      title: "Classic Wooden Bedroom",
      category: "wooden",
      image: "/gallery/1.jpg",
      description: "Elegant bedroom with timeless wooden textures",
      likes: 142,
      views: 2780,
    },
    {
      id: 4,
      title: "Rustic Wooden Kitchen",
      category: "wooden",
      image: "/gallery/2.jpg",
      description: "Cozy and warm rustic-style kitchen",
      likes: 175,
      views: 3050,
    },
    // Add the rest of your projects here...
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col relative bg-[color:var(--background)]">
      {/* Dimmed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/service/BG5.png')" }}
      />
      <div className="absolute inset-0 bg-[color:var(--background)]/70 pointer-events-none" />

      {/* Page Content */}
      <div className="relative flex flex-col min-h-screen z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[color:var(--foreground)]">
              Our Gallery
            </h1>
            <p className="text-lg text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
              Explore our portfolio of stunning interior design projects that showcase our expertise and creativity.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300 hover:scale-105 text-[color:var(--foreground)] border-[color:var(--muted)]"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-[color:var(--card)] text-[color:var(--card-foreground)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-md">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-md">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-md">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-[color:var(--primary)]/90 text-[color:var(--primary-foreground)] backdrop-blur-md">
                      {categories.find((cat) => cat.id === project.category)?.name}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[color:var(--foreground)]">{project.title}</h3>
                    <p className="text-[color:var(--muted-foreground)] mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-[color:var(--muted-foreground)]">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {project.likes}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
