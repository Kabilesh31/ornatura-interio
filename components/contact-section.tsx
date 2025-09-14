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
      // Always hide if actual device width is below 768px
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
      id="contact"
      className={`relative py-62 top-25 -mt-10 md:mt-10 mx-auto md:-mb-15 ${diphylleia.className}`}
    >
      <div className="absolute inset-10 bg-black/0"></div>
      <div className="container mx-auto px-4">
        <div className="text-center -mt-12 mb-20">
          <h2
            className={`${playwrite.className} text-3xl md:text-4xl font-extrabold text-gray-700`}
          >
            Start Your Dream Project
          </h2>
        </div>

        <div className="relative flex items-center justify-center max-w-5xl mx-auto md:-mt-118 -mb-20 md:-mb-32 gap-6">
          {/* Left Image */}
          <img
            src="/decor25.png"
            alt="Decorative Left"
            className="h-20 md:h-142 md:w-152 w-100 h-150 -mt-125 md:-mt-0 object-contain -scale-x-100 opacity-25"
          />
        </div>

        {/* Background floating decor (safe to keep hidden on mobile) */}
        <img
          src="/decor63.png"
          alt="Background Interior Design"
          className="hidden md:block w-[350px] h-[700px] mt-50 -mb-150 -ml-30 md:mt-5 md:ml-62 md:-mb-151 opacity-50"
        />

        {/* Main Contact Section */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-6 max-w-6xl h-[500px] mx-auto">
          {/* Contact Form */}
          <Card className="max-w-3xl -mt-12 md:mt-0 md:mb-11 md:ml-30 bg-white/90 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a service *</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="architecture">Architecture</option>
                    <option value="landscape">Landscape</option>
                  </select>
                </div>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select project type *</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="others">Others</option>
                </select>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Project Details *"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary mt-9 to-primary/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Decorative Images (desktop only, blocked on mobile even with "desktop site") */}
          {showDesktopDecor && (
            <div className="relative">
              <img
                src="/decor63.png"
                alt="Background Interior Design"
                className="w-[350px] h-[700px] -mt-180 md:-mt-25 md:-ml-1 opacity-50 -scale-x-100"
              />

              <div className="absolute inset-80 bg-gradient-to-t from-gray-200/80 via-transparent to-gray-200/80"></div>

              <img
                src="/decor70.png"
                alt="Foreground Image"
                className="absolute inset-0 max-w-[310px] h-[450px] md:ml-0 md:mt-1 opacity-90 object-contain pointer-events-none"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
