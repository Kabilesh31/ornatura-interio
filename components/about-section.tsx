"use client"

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-30 mt-3 overflow-hidden bg-[#e9e8e6] text-primary"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 mix-blend-multiply"
      >
        <source src="/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative container mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="mb-16 text-gray-900 font-diphylleia-italic text-[3.8rem] leading-tight">
            About Ornatura Interio
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-900 leading-relaxed text-justify font-diphylleia-italic text-[1.25rem]">
            <p>
              At <span className="font-diphylleia-bold font-normal">Ornatura Interior</span>, we are passionate about transforming
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
              At <span className="font-diphylleia-bold font-normal">Ornatura Interior</span>, we don’t just design spaces—
              we craft <span className="font-diphylleia-italic">experiences</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
