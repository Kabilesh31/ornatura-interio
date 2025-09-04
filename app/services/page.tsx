import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "consultation",
      title: "Consultation & Concept Development",
      description:
        "We begin by listening to your vision, lifestyle, and requirements. This forms the foundation for personalized design concepts tailored exclusively for you.",
      image: "/service/123.png",
      features: ["Personal consultation", "Vision mapping", "Lifestyle analysis", "Custom concepts"],
    },
    {
      id: "moodboard",
      title: "Moodboard Curation",
      description:
        "Through curated moodboards, we translate ideas into visuals—helping you experience the harmony of colors, textures, and styles before execution.",
      image: "/service/10.png",
      features: ["Visual concepts", "Color harmony", "Texture selection", "Style coordination"],
    },
    {
      id: "immersion",
      title: "Design Immersion",
      description:
        "We take you deeper into the design experience, exploring spatial flow, materials, and aesthetics that align with your preferences.",
      image: "/service/124.png",
      features: ["Spatial planning", "Material exploration", "Aesthetic alignment", "Flow optimization"],
    },
    {
      id: "development",
      title: "Design Development",
      description:
        "Concepts are transformed into detailed plans and 3D visualizations, ensuring clarity, precision, and flawless integration of every design element.",
      image: "/service/128.png",
      features: ["Detailed plans", "3D visualizations", "Technical drawings", "Element integration"],
    },
    {
      id: "execution",
      title: "Design Execution",
      description:
        "From sourcing materials to on-site implementation, we manage every detail with meticulous craftsmanship and quality assurance.",
      image: "/service/126.png",
      features: ["Material sourcing", "On-site management", "Quality assurance", "Craftsmanship"],
    },
    {
      id: "support",
      title: "Post-Completion Support",
      description:
        "Our relationship doesn't end with project handover—we provide ongoing support to ensure your space continues to inspire and evolve with you.",
      image: "/service/127.png",
      features: ["Ongoing support", "Maintenance guidance", "Evolution planning", "Long-term care"],
    },
  ]

  // Workflow circle gradients using CSS variables
  const gradients = [
    "from-blue-500 to-sky-400",
    "from-violet-500 to-fuchsia-400",
    "from-pink-500 to-rose-400",
    "from-orange-500 to-amber-400",
    "from-teal-500 to-emerald-400",
    "from-indigo-500 to-purple-400",
  ]

  return (
    <div className="min-h-screen relative bg-[color:var(--background)]">
      {/* Dimmed background image */}
      <div
        className="absolute inset-0 opacity-10 bg-fixed bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: "url('/service/bg5.png')" }}
      />
      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="pt-24 pb-10 md:pb-12  px-4">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Services
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] bg-clip-text text-transparent">
                Comprehensive Interior Design Services
              </h2>

              <p className="text-lg md:text-xl text-[color:var(--foreground)]">
                From initial consultation to post-completion support, we guide you
                through every step of your interior design journey with expertise
                and care.
              </p>
            </div>
          </div>
        </section>

      {/* Workflow strip */}
<section className="relative py-10 md:py-14 px-4">
  <div className="container mx-auto px-4">
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      
      {/* connecting line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[color:var(--muted)] via-[color:var(--secondary)] to-[color:var(--muted)] -z-10" />

      {/* Circle 1 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-5 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #FF7F50",
            textShadow: `
              0 0 2px #FF7F50,
              0 0 4px rgba(255,127,80,0.5),
              0 0 6px rgba(255,127,80,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          1
        </span>
        <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#FF7F50,0_0_15px_#FF7F50,0_0_20px_#FF7F50]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/10.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 1</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Consultation & Concept Development</h4>
          </div>
        </div>
      </div>

      {/* Circle 2 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-5 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #3B82F6",
            textShadow: `
              0 0 2px #3B82F6,
              0 0 4px rgba(59,130,246,0.5),
              0 0 6px rgba(59,130,246,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          2
        </span>
        <div className="relative bg-gradient-to-r from-blue-400 to-cyan-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#3B82F6,0_0_15px_#3B82F6,0_0_20px_#3B82F6]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/124.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 2</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Moodboard Curation</h4>
          </div>
        </div>
      </div>

      {/* Circle 3 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-5 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #10B981",
            textShadow: `
              0 0 2px #10B981,
              0 0 4px rgba(16,185,129,0.5),
              0 0 6px rgba(16,185,129,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          3
        </span>
        <div className="relative bg-gradient-to-r from-green-400 to-emerald-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#10B981,0_0_15px_#10B981,0_0_20px_#10B981]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/123.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 3</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Design Immersion</h4>
          </div>
        </div>
      </div>

      {/* Circle 4 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-5 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #8B5CF6",
            textShadow: `
              0 0 2px #8B5CF6,
              0 0 4px rgba(139,92,246,0.5),
              0 0 6px rgba(139,92,246,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          4
        </span>
        <div className="relative bg-gradient-to-r from-purple-400 to-indigo-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#8B5CF6,0_0_15px_#8B5CF6,0_0_20px_#8B5CF6]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/126.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 4</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Design Development</h4>
          </div>
        </div>
      </div>

      {/* Circle 5 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-5 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #F59E0B",
            textShadow: `
              0 0 2px #F59E0B,
              0 0 4px rgba(245,158,11,0.5),
              0 0 6px rgba(245,158,11,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          5
        </span>
        <div className="relative bg-gradient-to-r from-amber-400 to-yellow-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#F59E0B,0_0_15px_#F59E0B,0_0_20px_#F59E0B]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/127.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 5</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Design Execution</h4>
          </div>
        </div>
      </div>

      {/* Circle 6 */}
      <div className="md:w-1/6 w-full flex flex-col items-center text-center relative group">
        <span
          className="absolute text-[120px] font-extrabold -top-3 -left-0 z-10 md:-left-7 translate-x-4 md:translate-x-0 transition-all duration-300 group-hover:scale-105"
          style={{
            color: "var(--background)",
            WebkitTextStroke: "3px #EC4899",
            textShadow: `
              0 0 2px #EC4899,
              0 0 4px rgba(236,72,153,0.5),
              0 0 6px rgba(236,72,153,0.2)
            `,
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          6
        </span>
        <div className="relative bg-gradient-to-r from-pink-400 to-rose-500 p-[3px] rounded-full shadow-md
                        transition-shadow duration-300 group-hover:shadow-[0_0_10px_#EC4899,0_0_15px_#EC4899,0_0_20px_#EC4899]">
          <div className="w-48 h-48 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:scale-102">
            <img src="/service/128.png" className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" />
            <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">Step 6</span>
            <h4 className="text-sm font-bold text-[color:var(--foreground)] text-center">Post-Completion Support</h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




        {/* Service detail blocks */}
       <section className="py-10  px-4">
  <div className="container-responsive max-w-6xl mx-auto">
    <div className="space-y-22">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`grid lg:grid-cols-2 gap-10 items-center ${
            index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          {/* Text */}
          <div className={`space-y-6 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
            <div className="inline-flex items-center gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-10 py-1 -mt-15 rounded-full text-sm font-medium">
              Step {index + 1}
            </div>
            <h2 className="text-3x2 md:text-3xl font-bold text-[color:var(--foreground)]">
              {service.title}
            </h2>
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
              {service.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[color:var(--primary)] flex-shrink-0" />
                  <span className="text-sm text-[color:var(--muted-foreground)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${index % 2 === 0 ? "" : "lg:col-start-1"}`}>
            <div className="relative group mt-12 max-w-2xl mx-auto">
              <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-[color:var(--primary)]/20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[300px] object-contain transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[color:var(--primary)]/5 via-[color:var(--background)] to-[color:var(--primary)]/5  px-4">
          <div className="container-responsive text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] bg-clip-text text-transparent">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-[color:var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
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
  )
}
