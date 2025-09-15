'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
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

  const [showDesktopDecor, setShowDesktopDecor] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setShowDesktopDecor(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      
      className={`relative  py-50 ${diphylleia.className}`}
    >
      {/* Background Image */}
      <div   className="absolute inset-0 -z-10">

        
        <img
          src="/copy1.png"
          alt="Background Interior Design"
          className="w-[900] h-[75%] mt-118 mx-auto object-cover opacity-40"
          
        />
        
      </div>
      <span id='contact'></span>
      

      <div  className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20 md:mb-10">
           <img
      src="/decor25.png"
      alt="Decorative Crown"
      className="absolute top-8 sm:-top-16 md:top-10 left-1/2 -translate-x-1/2 w-12 sm:w-16 w-180  md:w-24 md:h-130 lg:w-520 object-contain opacity-30"
    />
          <h2  className={`${playwrite.className} text-3xl md:text-4xl md:mt-38 mt-16 mb-20 md:mb-40 font-extrabold text-gray-700`}>
            Start Your Dream Project
          </h2>
        </div>

        {/* Card + Foreground Image Container */}
<div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-5 -mb-30 max-w-3xl mx-auto">
  {/* Card - 75% width on large screens, 100% on small screens */}
  <Card className="w-full lg:w-[75%] bg-white/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500">
    <CardHeader className="text-center pb-4">
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        <CardTitle
          className={`text-2xl md:text-3xl font-bold text-gray-800 ${diphylleia.className}`}
        >
          Send Us a Message
        </CardTitle>
      </div>
    </CardHeader>

    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required />
          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
          <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Select a service *</option>
            <option value="interior-design">Interior Design</option>
            <option value="renovation">Renovation</option>
            <option value="architecture">Architecture</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>

        <select name="projectType" value={formData.projectType} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option value="">Select project type *</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="others">Others</option>
        </select>

        <Textarea name="message" value={formData.message} onChange={handleChange} rows={6} required placeholder="Project Details *" />

        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary mt-9 to-primary/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
          Send Message
          <MessageSquare className="h-4 w-4" />
        </Button>
      </form>
    </CardContent>
  </Card>

  {/* Decor Image - 50% width on large screens, 100% on small screens */}
 {showDesktopDecor && (
    <div className="w-full lg:w-[45%] flex items-center justify-center">
      <img
        src="/decor70.png"
        alt="Foreground Decor"
        className="w-full h-full object-contain"
      />
    </div>
          )}
        </div>
      </div>
    </section>
  );
}
