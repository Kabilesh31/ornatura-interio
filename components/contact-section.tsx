"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
    icon: MapPin,
    title: "Visit Our Studio",
    details: [
      "347, DS Complex, Nehru Street,Ramnagar Street",
      "Coimbatore - 641009",
      "Tamil Nadu, India",
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@ornaturointeriors.com"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/video2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* White overlay with opacity */}
  <div className="absolute inset-0 bg-[#e7e6e4]/90"></div>

  {/* Content above overlay */}
  <div className="relative container mx-auto px-4 z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
        Start Your Dream Project
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Ready to transform your space into something extraordinary? Let's
        discuss your vision and bring it to life with our expert design team.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column - Contact Form */}
      <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/10 bg-background/80 backdrop-blur-md relative z-10">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg glow-effect animate-bounce">
              <Send className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-gradient">
              Send Us a Message
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-primary/20 hover:border-primary/40"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-primary/20 hover:border-primary/40"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone + Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-primary/20 hover:border-primary/40"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-primary/20 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40"
                >
                  <option value="">Select a service</option>
                  <option value="interior-styling">Interior Styling</option>
                  <option value="interior-design">Interior Design Studio</option>
                  <option value="renovation">Renovation</option>
                  <option value="architecture">Architecture</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                Project Details *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell us about your project vision, timeline, budget range, and any specific requirements..."
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-primary/20 hover:border-primary/40 resize-none"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl glow-effect transition-all duration-300 hover:scale-105"
            >
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </CardContent>

        {/* Location Card */}
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/10 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 mx-auto">
          <div className="flex flex-col h-50 items-center bg-primary/50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-8 mb-2">
              <MapPin className="w-5 h-8 text-white" />
            </div>
            <p className="font-semibold text-base text-white mb-1">
              Ornatura Interio Studio
            </p>
            <p className="text-xs text-white/80 text-center">
              Visit us for a consultation
            </p>
          </div>
        </Card>
      </Card>

      {/* Right Column - Contact Info */}
      <div className="space-y-6 relative z-10">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <Card
              key={info.title}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-primary/10 bg-background/80 backdrop-blur-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-gradient">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-muted-foreground mb-1 hover:text-primary transition-colors duration-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  </div>
</section>


  )
}
