"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  content: string
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mikhail Antimsu",
      role: "Happy Client",
      avatar: "/images/Home/banerbg.png",
      rating: 5,
      content: "buildro.ai transformed our business. We went from idea to live product in just 2 days. The AI understood exactly what we needed and delivered beyond our expectations."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "/images/Home/banerbg.png",
      rating: 5,
      content: "Incredible platform! The templates are beautiful and the AI is incredibly smart. We saved months of development time and got a professional result."
    },
    {
      id: 3,
      name: "David Chen",
      role: "Startup Founder",
      avatar: "/images/Home/banerbg.png",
      rating: 5,
      content: "This is exactly what we needed. No coding required, just describe what you want and watch the magic happen. Highly recommended!"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Designer",
      avatar: "/images/Home/banerbg.png",
      rating: 5,
      content: "The quality of the generated code is outstanding. Clean, responsive, and follows best practices. This tool is a game-changer."
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with buildro.ai.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
