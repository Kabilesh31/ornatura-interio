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

  return (
    <div 
      className="min-h-screen relative bg-fixed bg-center bg-cover" 
      style={{ backgroundImage: "url('/service/BG5.png')" }} // 🔥 Your background image
    >
      {/* 🔥 Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Page Content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Services
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Comprehensive Interior Design Services
              </h2>

              <p className="text-lg md:text-xl text-foreground mb-8">
                From initial consultation to post-completion support, we guide you
                through every step of your interior design journey with expertise
                and care.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container-responsive max-w-6xl mx-auto">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 0 ? "" : "lg:grid-flow-col-dense"}`}
                >
                  {/* Text Content */}
                  <div className={`space-y-6 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Step {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* <Button className="group bg-primary hover:bg-primary/90 shadow-lg glow-effect transition-all duration-300 hover:scale-105">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button> */}
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 0 ? "" : "lg:col-start-1"}`}>
                    <div className="relative group max-w-2xl mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover-lift">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-[300px] object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container-responsive text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dream
              interior to life.
            </p>
            <Link href="/#contact">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 shadow-lg glow-effect transition-all duration-300 hover:scale-105"
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
