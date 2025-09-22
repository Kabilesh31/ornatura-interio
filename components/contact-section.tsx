'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Diphylleia, Playwrite_AU_VIC } from 'next/font/google';

const diphylleia = Diphylleia({ subsets: ['latin'], weight: ['400'] });
const playwrite = Playwrite_AU_VIC({ weight: ['400'], style: 'normal', display: 'swap' });

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    projectType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting contact form: ', formData);
  };

  return (
    <section className={`relative py-16 md:py-20 bg-white ${diphylleia.className}`}>
  <div className="container mx-auto px-4">
    {/* Decorative Crown */}
    {/* <img
      src="/decor25.png"
      alt="Decorative Crown"
      className="absolute -top-18 sm:-top-16 md:-top-19 left-1/2 -translate-x-1/2 w-85 sm:w-96 md:w-24 lg:w-122 object-contain opacity-30"
    /> */}

    {/* Main Heading */}
    <h2
      id="contact"
      className={`${playwrite.className} text-3xl md:text-4xl text-center mt-2 md:mt-0 mb-10 md:mb-24 font-extrabold text-gray-700`}
    >
      Start Your Dream Project
    </h2>

    {/* Subtext */}
    <div
  className="
    text-center
    max-w-lg mx-auto mb-10
    
    /* Mobile (default) */
    justify-center

    /* Tablet (sm: ≥640px) */
    sm:text-left sm:ml-10

    /* Medium (md: ≥768px) */
    md:text-left md:ml-100

    /* Nest Hub (lg: ≥1024px) */
    lg:text-center lg:ml-120

    /* Nest Hub Max (xl: ≥1280px) */
    xl:text-center xl:ml-150

    /* Larger desktops (2xl: ≥1536px) */
    2xl:text-center 2xl:ml-188
  "
>
  <p className="mt-2 text-base md:text-xl text-gray-700">
    Fill out the below form and one of us will get in touch with you shortly.
  </p>
</div>



    {/* Grid layout */}
 <div className="w-full px-4 sm:px-4 md:px-4 lg:px-4 xl:px-35 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-[100%] mx-auto">
  {/* Left: Image with decorative PNG */}
  <div className="relative flex justify-center lg:justify-end w-full">
    {/* Decorative PNG */}
   <img
  src="/last03.png"
  alt="Decorative Background"
  className="
    hidden sm:block
    absolute
    -top-40

    /* Mobile (base) */
    left-1/2 -translate-x-1/2 w-[100%] h-[400px]

    /* Small tablets (≥640px) */
    sm:left-[40%] sm:-translate-x-[40%] sm:w-[70%] sm:h-[500px]

    /* Tablets / Desktop (≥1024px) */
    lg:left-[5%] lg:translate-x-0 lg:w-[95%] lg:h-[800px]

    /* Nest Hub Max (≥1280px) */
    xl:-left-[7%] xl:translate-x-0 xl:w-[90%] xl:h-[800px]

    /* Large desktops (≥1536px) */
    2xl:left-[10%] 2xl:translate-x-0 2xl:w-[85%] 2xl:h-[790px]

    max-w-none
    opacity-65
    z-0
  "
/>


    {/* Main photo */}
    <img
      src="/decor08.png"
      alt="Interior Design"
      className="relative rounded-lg md:-left-10 -top-10 shadow-lg lg:mt-5 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[350px] h-64 sm:h-80 md:h-[400px] lg:h-[580px] object-cover z-10"
    />
  </div>

  {/* Right: Contact Form */}
 <Card className="bg-white border border-gray-200 p-6 md:p-8 lg:p-12 w-full max-w-full mx-auto rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    <h2
      className={`${playwrite.className} text-2xl md:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-8`}
    >
      Contact Us
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-full">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your Name"
        required
        className="border-b border-gray-400 rounded-none focus:ring-0 focus:border-black py-2 w-full"
      />
      <Input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        required
        className="border-b border-gray-400 rounded-none focus:ring-0 focus:border-black py-2 w-full"
      />
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter a valid email address"
        required
        className="border-b border-gray-400 rounded-none focus:ring-0 focus:border-black py-2 w-full"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full border-b border-gray-400 rounded-none bg-transparent py-2 focus:ring-0 focus:border-black"
      >
        <option value="">Select a Service *</option>
        <option value="interior-design">Interior Design</option>
        <option value="renovation">Renovation</option>
        <option value="architecture">Architecture</option>
        <option value="landscape">Landscape</option>
      </select>

      <select
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
        required
        className="w-full border-b border-gray-400 rounded-none bg-transparent py-2 focus:ring-0 focus:border-black"
      >
        <option value="">Select Project Type *</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="others">Others</option>
      </select>

      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message"
        rows={3}
        required
        className="border-b border-gray-400 rounded-none focus:ring-0 focus:border-black py-2 w-full"
      />

      <div className="text-center mt-4">
        <Button
          type="submit"
          className="px-5 py-2 border border-black bg-white text-black font-semibold hover:bg-gray-500 hover:text-white transition"
        >
          SUBMIT
        </Button>
      </div>
    </form>
  </Card>
</div>

  </div>
</section>

  );
}
