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

  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const ua = navigator.userAgent;
      const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
      setIsDesktopView(!isMobile || window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
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
      <div className="container mx-auto px-4">
        <div className="text-center -mt-12 mb-20">
          <h2 className={`${playwrite.className} text-3xl md:text-4xl font-extrabold text-gray-700`}>
            Start Your Dream Project
          </h2>
        </div>

        {/* Left Decorative Image */}
        <img src="/decor25.png" alt="Decorative Left" className=" h-20 md:h-142 md:w-152 w-100 h-150 -mt-125 md:-mt-117 -mb-20 md:-mb-150 md:ml-110 object-contain -scale-x-100 opacity-25" />

        {/* Background floating decor */}
        {isDesktopView && (
          <img
            src="/decor63.png"
            alt="Background Interior Design"
            style={{
              width: '350px',
              height: '700px',
              marginTop: '490px',
              marginLeft: '242px',
              marginBottom: '-631px',
              opacity: 0.5,
            }}
          />
        )}

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

          {/* Decorative Foreground */}
          {isDesktopView && (
            <div className="relative">
              <img
                src="/decor63.png"
                alt="Background Interior Design"
                style={{
                  width: '350px',
                  height: '700px',
                  marginTop: '-72px',
                  marginLeft: '1px',
                  opacity: 0.5,
                  transform: 'scaleX(-1)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '80px',
                  bottom: '80px',
                  left: '80px',
                  right: '80px',
                  background:
                    'linear-gradient(to top, rgba(229,229,229,0.8), rgba(229,229,229,0) 50%, rgba(229,229,229,0.8))',
                }}
              ></div>
              <img
                src="/decor70.png"
                alt="Foreground Image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '310px',
                  height: '450px',
                  marginTop: '1px',
                  opacity: 0.9,
                  objectFit: 'contain',
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
