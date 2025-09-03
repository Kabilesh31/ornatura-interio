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
        <section className="relative py-10 md:py-14  px-4">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              {/* connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[color:var(--muted)] via-[color:var(--secondary)] to-[color:var(--muted)] -z-10" />

              {services.map((s, i) => (
                <div key={s.id} className="md:w-1/6 w-full flex flex-col items-center text-center">
                  <div
                    className={`relative bg-gradient-to-r ${gradients[i % gradients.length]} p-[3px] rounded-full shadow-md transition-transform hover:scale-105`}
                  >
                    {/* inner circle */}
                    <div className="relative w-36 h-36 md:w-50 md:h-50 rounded-full bg-[color:var(--background)] flex flex-col items-center justify-center px-4">
                      {/* number */}
                      <span
                        className={`hidden md:block absolute -left-6 -top-5 text-[92px] font-extrabold opacity-100 text-transparent bg-clip-text bg-gradient-to-r ${gradients[i % gradients.length]} drop-shadow-md`}
                      >
                        {i + 1}
                      </span>

                      {/* icon */}
                      <img src={s.image} alt={`Step ${i + 1} icon`} className="w-12 h-12 object-contain mb-2" />

                      {/* step label */}
                      <span className="text-[16px] font-extrabold uppercase text-[color:var(--foreground)]">
                        Step {i + 1}
                      </span>

                      {/* title */}
                      <h4 className="mt-0 text-[12px] sm:text-[14px] md:text-sm font-bold leading-snug text-[color:var(--foreground)] text-center">
  {s.title}
</h4>
                    </div>

                    {/* connector dot */}
                    <span
                      className={`hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${gradients[i % gradients.length]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service detail blocks */}
       <section className="py-16  px-4">
  <div className="container-responsive max-w-6xl mx-auto">
    <div className="space-y-24">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`grid lg:grid-cols-2 gap-10 items-center ${
            index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          {/* Text */}
          <div className={`space-y-6 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
            <div className="inline-flex items-center gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium">
              Step {index + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)]">
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
            <div className="relative group max-w-2xl mx-auto">
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
