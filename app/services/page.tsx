import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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
const stepGradientHex = [
  ["#3B82F6", "#0EA5E9"], // blue → sky
  ["#8B5CF6", "#D946EF"], // violet → fuchsia
  ["#EC4899", "#F43F5E"], // pink → rose
  ["#F97316", "#F59E0B"], // orange → amber
  ["#14B8A6", "#10B981"], // teal → emerald
  ["#6366F1", "#A855F7"], // indigo → purple
];
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
        <section className="pt-24 pb-10 md:pb-12 px-4">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center -ml-2 gap-2 bg-[color:var(--primary)]/10 text-[color:var(--primary)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Services we do
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
<section className="relative py-5 -mt-18 md:py-10 px-4">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-1 items-center justify-center">
      {[1, 2, 3, 4, 5, 6].map((i) => {
        const hoverClasses = [
          "hover-glow-pink",
          "hover-glow-blue",
          "hover-glow-green",
          "hover-glow-violet",
          "hover-glow-yellow",
          "hover-glow-pink", // repeat pink
        ];

        return (
          <div key={i} className="flex justify-center">
            <img
              src={`/service/step${i}.png`}
              alt={`Image ${i}`}
              className={`w-80 h-80 object-contain transition-all duration-700 delay-100 ease-in-out hover:scale-105 ${hoverClasses[i - 1]}`}
            />
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* Service detail blocks */}
        <section className="py-10 px-4 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-16 md:space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Text */}
                  <div className={`space-y-4 md:space-y-6 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
                <div
  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-[color:var(--primary)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
  style={{
    background: `linear-gradient(to right, ${stepGradientHex[index][0]}, ${stepGradientHex[index][1]})`,
    padding: "1px", // border thickness
    borderRadius: "9999px", // fully rounded
  }}
>
  <div
  className="w-full h-full flex items-center justify-center rounded-full"
  style={{
    background: "var(--background)", // inner background
    borderRadius: "9999px",
    padding: "8px 12px", // small padding: vertical 8px, horizontal 12px
  }}
>
  Step {index + 1}
</div>
</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--foreground)]">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[color:var(--primary)] flex-shrink-0" />
                          <span className="text-sm sm:text-base text-[color:var(--muted-foreground)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 0 ? "" : "lg:col-start-1"} flex justify-center`}>
                    <div className="relative group mt-4 md:mt-6 w-full sm:max-w-[450px] mx-auto ">
                      <div className="relative w-full h-[250px] sm:h-[320px] flex items-center justify-center overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-[color:var(--primary)]/20">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain transition-transform duration-500"
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
        <section className="py-12 md:py-16 bg-gradient-to-br from-[color:var(--primary)]/5 via-[color:var(--background)] to-[color:var(--primary)]/5 px-4">
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
