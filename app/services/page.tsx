"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ServicesPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // set playback speed
    }
  }, []);

  const services = [
    {
      id: "consultation",
      title: "Consultation & Concept Development",
      description:
        "We begin by listening to your vision, lifestyle, and requirements. This forms the foundation for personalized design concepts tailored exclusively for you.",
      image: "/service/401.png",
      features: ["Personal consultation", "Vision mapping", "Lifestyle analysis", "Custom concepts"],
    },
    {
      id: "moodboard",
      title: "Moodboard Curation",
      description:
        "Through curated moodboards, we translate ideas into visuals—helping you experience the harmony of colors, textures, and styles before execution.",
      image: "/service/405.png",
      features: ["Visual concepts", "Color harmony", "Texture selection", "Style coordination"],
    },
    {
      id: "immersion",
      title: "Design Immersion",
      description:
        "We take you deeper into the design experience, exploring spatial flow, materials, and aesthetics that align with your preferences.",
      image: "/service/402.png",
      features: ["Spatial planning", "Material exploration", "Aesthetic alignment", "Flow optimization"],
    },
    {
      id: "development",
      title: "Design Development",
      description:
        "Concepts are transformed into detailed plans and 3D visualizations, ensuring clarity, precision, and flawless integration of every design element.",
      image: "/service/406.png",
      features: ["Detailed plans", "3D visualizations", "Technical drawings", "Element integration"],
    },
    {
      id: "execution",
      title: "Design Execution",
      description:
        "From sourcing materials to on-site implementation, we manage every detail with meticulous craftsmanship and quality assurance.",
      image: "/service/403.png",
      features: ["Material sourcing", "On-site management", "Quality assurance", "Craftsmanship"],
    },
    {
      id: "support",
      title: "Post-Completion Support",
      description:
        "Our relationship doesn't end with project handover—we provide ongoing support to ensure your space continues to inspire and evolve with you.",
      image: "/service/404.png",
      features: ["Ongoing support", "Maintenance guidance", "Evolution planning", "Long-term care"],
    },
  ];

  return (
    <div className="relative bg-[color:var(--background)]">
      <Header />

      {/* Fixed Hero Background */}
     <div className="fixed inset-0 z-0 w-full overflow-hidden">
  <video
    ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-screen md:h-[100vh] object-cover object-center"
  >
    <source src="/serv4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>


{/* Fixed Workflow Image */}
{/* <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
  <img
    src="/service/work11.png"
    alt="Workflow"
    className="w-full max-w-[90%] md:max-w-[1450px] h-[800px]
               max-h-[60vh] sm:max-h-none
               translate-y-6 sm:translate-y-0
               opacity-45"   // 👈 makes it dimmer
  />
</div> */}

      {/* Page Content */}
      <div className="relative z-20">
        {/* Hero Spacer */}
        <section className="h-screen"></section>

        {/* Services Intro */}
        <section className="py-16 px-4 md:py-20 bg-[color:var(--background)]">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl -mt-120 sm:-mt-40 md:-mt-124 mb-110 sm:mb-40 md:mb-110 font-extrabold text-[#edf0ee]">
  Journey With Us
</h1>

            {/* <div className="inline-flex items-center gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-3 py-1 rounded-full text-xs md:text-sm mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Our Services we do
            </div> */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  {/* Left side - Heading */}
  <h3
    className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-6 
               bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] 
               bg-clip-text text-transparent 
               text-center md:text-left md:-ml-15"
  >
    Best Interior Journey with
    <br />
    Ornatura Interio - Route Map
  </h3>

  {/* Right side - Paragraph */}
  <p
    className="text-sm sm:text-base md:text-sm text-[color:var(--foreground)] 
               text-center md:text-left md:-ml-25 -mt-3 md:-mt-6"
  >
    Don’t settle for ordinary interiors. Let Ornatura Interio elevate your home into a masterpiece of design.
    
    Visit our showroom and embark on a journey of transformation. Your Ornatura Interio Routemap awaits!
  </p>
</div>

          </div>
        </section>

        {/* Service Details */}
    <section className="py-16 md:py-20 px-4 bg-[color:var(--background)]">
  <div className="container mx-auto max-w-6xl relative">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-40"> 
      {/* 👆 gap-x for left/right, gap-y for top/bottom row spacing */}
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="group relative rounded-2xl p-6 pt-30 pb-24 text-center bg-[#e9f1e9] shadow-md transition-transform duration-300 min-h-[360px] md:min-h-[440px] overflow-visible"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, y: -6 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Floating image box */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-42 h-42 sm:w-46 sm:h-46 bg-[#c3cbb6] rounded-2xl shadow-lg flex items-center justify-center p-3 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src={service.image}
              alt={service.title}
              className="object-contain w-44 h-44 sm:w-44 sm:h-44"
            />
          </div>

          <h3 className="mt-8 text-lg sm:text-xl md:text-2xl font-bold text-[color:var(--foreground)] mb-2">
            {service.title}
          </h3>

        <p className="text-[color:var(--muted-foreground)] mb-3 text-sm sm:text-base text-justify">
  {service.description}
</p>

          {/* Step Box with margin */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-[#68705c] text-white font-semibold text-lg py-3 rounded-xl shadow-md">
              Step {index + 1}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 bg-[color:var(--background)]">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] bg-clip-text text-transparent">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-[color:var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dream
              interior to life.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-[color:var(--primary)] hover:bg-primary shadow-lg glow-effect transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
