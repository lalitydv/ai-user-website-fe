"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  title: string
  content: string
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Amazing Experience",
      content: "Buildro AI has completely transformed how we approach web development. What used to take weeks now takes minutes. The quality and attention to detail is incredible."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Game Changer",
      content: "As a non-technical founder, this tool has been a lifesaver. I can now create professional websites and dashboards without any coding knowledge."
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Freelancer",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 4,
      title: "Incredible Tool",
      content: "The speed and quality of the generated code is outstanding. It's like having a senior developer on your team. Highly recommended!"
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Marketing Director",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Perfect for Marketing",
      content: "We use this for creating landing pages and marketing dashboards. The results are always professional and conversion-focused."
    },
    {
      id: 5,
      name: "Alex Martinez",
      role: "Agency Owner",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 4,
      title: "Saves Time & Money",
      content: "This is exactly what we needed. No coding required, just describe what you want and watch the magic happen. The quality of the generated code is outstanding."
    },
    {
      id: 6,
      name: "Emily Rodriguez",
      role: "Designer",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 4,
      title: "Perfect Solution",
      content: "Clean, responsive, and follows best practices. This tool is a game-changer for designers and developers alike. The templates are beautiful and the AI is incredibly smart."
    }
  ]

  const totalSlides = Math.ceil(testimonials.length / 3)

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  const handleDotClick = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testimonial
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-blue-500"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-blue-500"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 rounded-2xl">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {testimonial.title}
                  </h3>

                  {/* Content */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-red-500'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
