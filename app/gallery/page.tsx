"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import { Playwrite_AU_VIC } from "next/font/google"
import { Diphylleia } from "next/font/google"

// ✅ Fonts
const diphylleia = Diphylleia({
  subsets: ["latin"],
  weight: ["400"],
})

const playwrite = Playwrite_AU_VIC({
  weight: ["100", "200", "400"],
  style: "normal",
  display: "swap",
})

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "living-room", name: "Living Room" },
    { id: "bedroom", name: "Bedroom" },
    { id: "dining", name: "Dining" },
    { id: "kitchen", name: "Kitchen" },
    { id: "wooden", name: "Wooden" },
    { id: "reception", name: "Reception" },
    { id: "bathroom", name: "Bathroom" },
  ]
  const projects = [
    // example projects
   
      { id: 5, title: "Classic Wooden Bedroom", category: "wooden", image: "/gallery/1.jpg", description: " bedroom with timeless wooden textures", likes: 142, views: 2780, }, { id: 6, title: "Rustic Wooden Kitchen", category: "wooden", image: "/gallery/2.jpg", description: "Cozy and warm rustic-style kitchen", likes: 175, views: 3050, },
     { id: 7, title: " Wooden Dining", category: "wooden", image: "/gallery/3.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 8, title: " Wooden Dining", category: "wooden", image: "/gallery/4.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 9, title: " Wooden Dining", category: "wooden", image: "/gallery/5.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 10, title: " Wooden Dining", category: "wooden", image: "/gallery/6.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 11, title: " Wooden Dining", category: "wooden", image: "/gallery/7.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 12, title: " Wooden Dining", category: "wooden", image: "/gallery/8.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 13, title: " Wooden Dining", category: "wooden", image: "/gallery/9.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 14, title: " Wooden Dining", category: "wooden", image: "/gallery/10.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 15, title: " Wooden Dining", category: "wooden", image: "/gallery/11.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 16, title: " Wooden Dining", category: "wooden", image: "/gallery/12.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 17, title: " Wooden Dining", category: "wooden", image: "/gallery/13.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 18, title: " Wooden Dining", category: "wooden", image: "/gallery/14.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 19, title: " Wooden Dining", category: "wooden", image: "/gallery/15.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 20, title: " Wooden Dining", category: "wooden", image: "/gallery/16.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 21, title: " Wooden Dining", category: "wooden", image: "/gallery/17.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 22, title: " Wooden Dining", category: "wooden", image: "/gallery/18.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 23, title: " Wooden Dining", category: "wooden", image: "/gallery/19.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 25, title: " Wooden Dining", category: "wooden", image: "/gallery/21.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 26, title: " Wooden Dining", category: "wooden", image: "/gallery/22.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 27, title: " Wooden Dining", category: "wooden", image: "/gallery/23.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 28, title: " Wooden Dining", category: "wooden", image: "/gallery/24.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 29, title: " Wooden Dining", category: "wooden", image: "/gallery/25.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 30, title: " Wooden Dining", category: "wooden", image: "/gallery/26.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },{ id: 31, title: " Wooden Dining", category: "wooden", image: "/gallery/27.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
     { id: 32, title: " Wooden Dining", category: "wooden", image: "/gallery/28.jpg", description: "Minimalist dining space with wooden accents", likes: 198, views: 3320, },
       {
    id: 36,
    title: " Living Room",
    category: "living-room",
    image: "/gallery/living/liv2.jpg",
    description: "A stylish and comfortable living area perfect for relaxation",
    likes: 156,
    views: 2100,
  },
  {
    id: 37,
    title: "Cozy Family Lounge",
    category: "living-room",
    image: "/gallery/living/liv4.jpg",
    description: "Warm and inviting space for family gatherings",
    likes: 142,
    views: 1980,
  },
  {
    id: 38,
    title: "Minimalist LivingSpace",
    category: "living-room",
    image: "/gallery/living/liv3.jpg",
    description: "Clean design with neutral tones for a calm ambiance",
    likes: 178,
    views: 2300,
  },
  {
    id: 39,
    title: "Luxury Living Room",
    category: "living-room",
    image: "/gallery/living/liv15.jpg",
    description: " décor with high-end finishes and lighting",
    likes: 200,
    views: 2750,
  },
  {
    id: 40,
    title: "Contemporary Open Living",
    category: "living-room",
    image: "/gallery/living/liv13.jpg",
    description: "Open layout with  furniture and natural light",
    likes: 165,
    views: 2200,
  },
  {
    id: 41,
    title: "Rustic Charm Living Room",
    category: "living-room",
    image: "/gallery/living/liv6.jpg",
    description: "Cozy wooden accents and warm colors for rustic vibes",
    likes: 150,
    views: 2105,
  },
  {
    id: 42,
    title: "Scandinavian Living Room",
    category: "living-room",
    image: "/gallery/living/liv7.jpg",
    description: "Functional furniture with light tones and clean lines",
    likes: 172,
    views: 2250,
  },
  {
    id: 43,
    title: "Classic Living Room",
    category: "living-room",
    image: "/gallery/living/liv8.jpg",
    description: "Timeless décor with plush seating and refined details",
    likes: 160,
    views: 2180,
  },
  {
    id: 44,
    title: "Urban Living Room",
    category: "living-room",
    image: "/gallery/living/liv9.JPG",
    description: " city style with bold colors and patterns",
    likes: 185,
    views: 2400,
  },
  {
    id: 45,
    title: "Bohemian Living Room",
    category: "living-room",
    image: "/gallery/living/liv31.jpg",
    description: "Eclectic décor with vibrant colors and textures",
    likes: 155,
    views: 2120,
  },
  {
    id: 46,
    title: "Bright and Airy",
    category: "living-room",
    image: "/gallery/living/liv11.jpg",
    description: "Sunlit space with light-colored furniture and décor",
    likes: 168,
    views: 2255,
  },
  {
    id: 47,
    title: " Living Room",
    category: "living-room",
    image: "/gallery/living/liv12.jpg",
    description: "Chic black-and-white theme with minimalist accents",
    likes: 175,
    views: 2300,
  }, {
    id: 48,
    title: " Master Bedroom",
    category: "bedroom",
    image: "/bed2.jpg",
    description: "Sleek and spacious master bedroom with neutral tones",
    likes: 160,
    views: 2200,
  },
  {
    id: 49,
    title: "Cozy Family Bedroom",
    category: "bedroom",
    image: "/bed3.jpg",
    description: "Warm and inviting bedroom for family comfort",
    likes: 145,
    views: 2050,
  },
  {
    id: 50,
    title: "Minimalist Bedroom",
    category: "bedroom",
    image: "/bed4.jpg",
    description: "Clean and clutter-free space with light colors",
    likes: 172,
    views: 2300,
  },
  {
    id: 51,
    title: "Luxury Bedroom Suite",
    category: "bedroom",
    image: "/bed5.jpg",
    description: " bedroom with premium furniture and lighting",
    likes: 200,
    views: 2750,
  },
  {
    id: 52,
    title: "Contemporary Bedroom",
    category: "bedroom",
    image: "/bed6.jpg",
    description: " bedroom design with functional furniture",
    likes: 165,
    views: 2200,
  },
  {
    id: 53,
    title: "Rustic Charm Bedroom",
    category: "bedroom",
    image: "/bed7.jpg",
    description: "Cozy wooden accents and warm tones for rustic vibes",
    likes: 150,
    views: 2105,
  },
  {
    id: 54,
    title: "Scandinavian Style Bedroom",
    category: "bedroom",
    image: "/bed8.jpg",
    description: "Bright and functional bedroom with clean lines",
    likes: 172,
    views: 2250,
  },
  {
    id: 55,
    title: "Classic Bedroom",
    category: "bedroom",
    image: "/bed9.jpg",
    description: "Timeless design with plush seating and  details",
    likes: 160,
    views: 2180,
  },
  {
    id: 56,
    title: "Urban Chic Bedroom",
    category: "bedroom",
    image: "/bed10.jpg",
    description: "Bold city-inspired bedroom with  patterns",
    likes: 185,
    views: 2400,
  },
  {
    id: 57,
    title: "Bohemian Bedroom",
    category: "bedroom",
    image: "/bed11.jpg",
    description: "Vibrant décor with eclectic colors and textures",
    likes: 155,
    views: 2120,
  },
  {
    id: 58,
    title: "Bright and Airy ",
    category: "bedroom",
    image: "/bed12.jpg",
    description: "Sunlit bedroom with light-colored furniture and décor",
    likes: 168,
    views: 2255,
  },
  {
    id: 59,
    title: " Bedroom",
    category: "bedroom",
    image: "/bed13.jpg",
    description: "Chic black-and-white theme with minimalist accents",
    likes: 175,
    views: 2300,
  },
   {
    id: 60,
    title: " Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat1.jpg",
    description: "Clean lines and sleek fixtures for a minimalist look",
    likes: 120,
    views: 1800,
  },
  {
    id: 61,
    title: "Luxury Spa Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat6.jpg",
    description: " bathroom with marble finishes and spa-style bath",
    likes: 155,
    views: 2200,
  },
  {
    id: 62,
    title: "Compact Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat4.jpg",
    description: "Small yet stylish bathroom with  amenities",
    likes: 130,
    views: 1900,
  },
  {
    id: 63,
    title: "Rustic Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat5.jpg",
    description: "Warm wooden accents and cozy design for relaxation",
    likes: 140,
    views: 2000,
  },
  {
    id: 64,
    title: "Bright and Airy ",
    category: "bathroom",
    image: "/gallery/bathroom/bat10.jpg",
    description: "Sunlit space with light tiles and  fixtures",
    likes: 135,
    views: 1950,
  },
  {
    id: 65,
    title: "Classic  Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat9.jpg",
    description: "Timeless design with marble counters and traditional fixtures",
    likes: 150,
    views: 2100,
  },
  {
    id: 66,
    title: "Urban Chic Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat8.jpg",
    description: "Bold patterns and  fixtures in a city-style bathroom",
    likes: 145,
    views: 2050,
  },
  {
    id: 67,
    title: "Bohemian Bathroom",
    category: "bathroom",
    image: "/gallery/bathroom/bat7.jpg",
    description: "Eclectic design with vibrant colors and textures",
    likes: 138,
    views: 1980,
  },{
    id: 68,
    title: " Dining Room",
    category: "dining",
    image: "/din10.jpeg",
    description: "Sleek design with contemporary furniture and lighting",
    likes: 160,
    views: 2200,
  },
  {
    id: 69,
    title: "Cozy Family Dining",
    category: "dining",
    image: "/din3.JPG",
    description: "Warm and inviting space for family meals",
    likes: 145,
    views: 2050,
  },
  {
    id: 70,
    title: "Minimalist Dining Room",
    category: "dining",
    image: "/din5.JPG",
    description: "Clean lines and neutral tones for a calm dining experience",
    likes: 172,
    views: 2300,
  },
  {
    id: 71,
    title: "Luxury Dining Room",
    category: "dining",
    image: "/din6.jpg",
    description: " décor with premium finishes and statement chandelier",
    likes: 200,
    views: 2750,
  },
  {
    id: 72,
    title: "Rustic Dining Room",
    category: "dining",
    image: "/din10.jpg",
    description: "Wooden accents and warm colors for rustic charm",
    likes: 150,
    views: 2105,
  },
  {
    id: 73,
    title: "Scandinavian Dining",
    category: "dining",
    image: "/din11.jpeg",
    description: "Functional and light-filled space with clean lines",
    likes: 172,
    views: 2250,
  },
  {
    id: 74,
    title: "Classic Dining Room",
    category: "dining",
    image: "/din14.jpeg",
    description: "Timeless design with refined furniture and lighting",
    likes: 160,
    views: 2180,
  },
  {
    id: 75,
    title: "Bohemian Dining Room",
    category: "dining",
    image: "/din13.jpeg",
    description: "Eclectic décor with vibrant colors and textures",
    likes: 155,
    views: 2120,
  },{
    id: 76,
    title: " Open Kitchen",
    category: "kitchen",
    image: "/kit1.jpeg",
    description: "Sleek and functional open-plan kitchen with island",
    likes: 180,
    views: 2500,
  },
  {
    id: 77,
    title: "Cozy Family Kitchen",
    category: "kitchen",
    image: "/kit2.jpg",
    description: "Warm and inviting kitchen for family cooking",
    likes: 160,
    views: 2300,
  },
  {
    id: 78,
    title: "Minimalist Kitchen",
    category: "kitchen",
    image: "/kit3.jpg",
    description: "Clean and clutter-free kitchen with  appliances",
    likes: 175,
    views: 2400,
  },
  {
    id: 79,
    title: "Luxury Kitchen",
    category: "kitchen",
    image: "/kit4.jpg",
    description: "High-end finishes, marble counters, and designer cabinetry",
    likes: 200,
    views: 2750,
  },
  {
    id: 80,
    title: "Rustic Kitchen",
    category: "kitchen",
    image: "/kit10.JPG",
    description: "Wooden textures and earthy tones for rustic charm",
    likes: 155,
    views: 2100,
  },
  {
    id: 81,
    title: "Scandinavian Kitchen",
    category: "kitchen",
    image: "/kit11.jpg",
    description: "Functional layout with light tones and clean lines",
    likes: 172,
    views: 2250,
  },
  {
    id: 82,
    title: "Classic Kitchen",
    category: "kitchen",
    image: "/kit13.jpg",
    description: "Timeless design with  cabinets and fixtures",
    likes: 165,
    views: 2180,
  },
  {
    id: 83,
    title: "Urban Chic Kitchen",
    category: "kitchen",
    image: "/kit14.jpg",
    description: "Bold colors and contemporary urban style",
    likes: 185,
    views: 2400,
  },
  {
    id: 84,
    title: "Bright and Airy",
    category: "kitchen",
    image: "/kit15.jpg",
    description: "Sunlit kitchen with light-colored cabinets and open space",
    likes: 168,
    views: 2255,
  },
  {
    id: 85,
    title: " Kitchen",
    category: "kitchen",
    image: "/kit23.jpg",
    description: "Chic black-and-white design with  finishes",
    likes: 175,
    views: 2300,
  },
  {
    id: 86,
    title: "Compact Kitchen",
    category: "kitchen",
    image: "/kit22.jpg",
    description: "Small kitchen optimized for  living",
    likes: 150,
    views: 2105,
  },
  {
    id: 87,
    title: "Bohemian Kitchen",
    category: "kitchen",
    image: "/kit19.jpg",
    description: "Eclectic design with vibrant colors and textures",
    likes: 155,
    views: 2120,
  },
    {
    id: 88,
    title: " Reception Area",
    category: "reception",
    image: "/gallery/reception/recep9.jpg",
    description: "Sleek reception with minimalist design and comfortable seating",
    likes: 180,
    views: 2500,
  },
  {
    id: 89,
    title: "Cozy Reception",
    category: "reception",
    image: "/gallery/reception/recep10.jpg",
    description: "Warm and welcoming space for guests",
    likes: 160,
    views: 2300,
  },
  {
    id: 90,
    title: "Luxury Reception",
    category: "reception",
    image: "/gallery/reception/recep8.JPG",
    description: " décor with premium finishes and lighting",
    likes: 200,
    views: 2750,
  },
  {
    id: 91,
    title: "Contemporary Reception",
    category: "reception",
    image: "/gallery/reception/recep6.jpg",
    description: " design with functional furniture and open layout",
    likes: 165,
    views: 2200,
  },
  {
    id: 92,
    title: "Rustic Charm Reception",
    category: "reception",
    image: "/gallery/reception/recep5.jpeg",
    description: "Cozy wooden accents and warm colors for rustic vibes",
    likes: 150,
    views: 2105,
  },
  {
    id: 93,
    title: "Scandinavian Reception",
    category: "reception",
    image: "/gallery/reception/recep1.jpeg",
    description: "Bright and functional reception with clean lines",
    likes: 172,
    views: 2250,
  },
  {
    id: 94,
    title: "Classic Reception",
    category: "reception",
    image: "/gallery/reception/recep11.jpg",
    description: "Timeless design with refined seating and  décor",
    likes: 160,
    views: 2180,
  },
  {
    id: 95,
    title: "Urban Chic Reception",
    category: "reception",
    image: "/gallery/reception/recep12.jpg",
    description: "Bold colors and  patterns in city-style reception",
    likes: 185,
    views: 2400,
  },
  
    // Add the rest of your projects here...
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)
const showPrev = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex - 1 + filteredProjects.length) % filteredProjects.length)
    }
  }

  const showNext = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex + 1) % filteredProjects.length)
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative bg-[color:var(--background)]">
      {/* Dimmed Background Image */}
      

      {/* Page Content */}
      <Header />  {/* <-- always on top layer */}
<div className="relative flex flex-col min-h-screen z-10">

        {/* Hero Section */}
  <section className="relative py-20 text-center">
    
      
  <div className="container mx-auto px-4">
    <h1
      className={`${playwrite.className} text-4xl md:text-5xl font-bold mt-15 mb- md:mb-6 md:mt-24 text-[color:var(--foreground)]`}
    >
      Gallery
    </h1>

    {/* Three images at left, center, right */}
    <div className="relative flex items-center justify-between max-w-5xl mx-auto mt-6">
      {/* Left */}
      
      {/* Center */}
      <img
  src="/decor5.png"
  alt="Decorative Center"
  className=" absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             w-44 h-24 lg:w-68 lg:h-38 object-contain -mt-27"
/>

      {/* Right */}
      
    </div>
  </div>
</section>


        {/* Category Filter */}
<section className="py-12 flex-1">
  <div className="container mx-auto px-4">
    {/* Category Buttons */}
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 -mt-30 sm:-mt-20 mb-8 sm:mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => setSelectedCategory(category.id)}
          className={cn(
            `${diphylleia.className} font-extrabold text-xs sm:text-sm md:text-base px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 transition-all duration-300 hover:scale-105 border-[color:var(--muted)]`,
            selectedCategory === category.id
              ? "bg-[color:var(--primary)] text-white hover:bg-[color:var(--secondary)]"
              : "text-[color:var(--foreground)]"
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>

    {/* Projects Grid - Masonry Layout */}
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-1 space-y-5 sm:space-y-7 md:-mt-5">
      {filteredProjects.map((project, index) => (
        <div
          key={project.id}
          className="break-inside-avoid relative group cursor-pointer overflow-hidden"
          onClick={() => setPreviewIndex(index)}
        >
          {/* Image */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full sm:w-[95%] mx-auto object-cover transition-transform duration-500 group-hover:scale-95"
          />

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-3 sm:px-6 py-2 sm:py-4">
            <h3 className="text-base sm:text-xl md:text-2xl text-white text-center leading-tight transition-all duration-500 group-hover:-translate-y-6">
              <span className="font-thin tracking-widest block">
                {project.title.split(" ").slice(0, 1).join(" ").toUpperCase()}
              </span>
              <span className="font-extrabold block">
                {project.title.split(" ").slice(1).join(" ").toUpperCase()}
              </span>
            </h3>
          </div>

          {/* Hover Outline */}
          <div className="absolute inset-6 sm:inset-12 border-2 border-gray-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
</section>



        <Footer />
      </div>

      {/* Image Preview Modal */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPreviewIndex(null)} // close on outside click
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <img
              src={filteredProjects[previewIndex].image}
              alt="Preview"
              className="max-w-[80%] max-h-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}