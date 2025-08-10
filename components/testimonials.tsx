"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import React from "react"

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
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  // Update cards per slide based on screen size
  React.useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2)
      } else {
        setCardsPerSlide(3)
      }
    }

    // Set initial value
    updateCardsPerSlide()

    // Add resize listener
    window.addEventListener('resize', updateCardsPerSlide)

    // Cleanup
    return () => window.removeEventListener('resize', updateCardsPerSlide)
  }, [])

  // Reset to first slide when cards per slide changes
  React.useEffect(() => {
    setCurrentSlide(0)
  }, [cardsPerSlide])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Best services",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    },
    {
      id: 2,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Easy to Access",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    },
    {
      id: 3,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Great",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    },
    {
      id: 4,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Best services",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    },
    {
      id: 5,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Easy to Access",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    },
    {
      id: 6,
      name: "Mikhail Anfimau",
      role: "Happy Client",
      avatar: "/images/Home/Ellipse 543.png",
      rating: 5,
      title: "Great",
      content: "This job portal made my job search so much easier! The interface is simple, and I found relevant job listings quickly. Within weeks, I landed a great opportunity with a top company. Highly..."
    }
  ]

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * cardsPerSlide
    return testimonials.slice(startIndex, startIndex + cardsPerSlide)
  }

  const getTotalSlides = () => {
    return Math.ceil(testimonials.length / cardsPerSlide)
  }

  const totalSlides = getTotalSlides()

  const handleDotClick = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => {
      const totalSlides = getTotalSlides()
      return prev === 0 ? totalSlides - 1 : prev - 1
    })
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      const totalSlides = getTotalSlides()
      return prev === totalSlides - 1 ? 0 : prev + 1
    })
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonial
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-pink rounded-full"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-blue rounded-full"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-pink rounded-full"></div>
            <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getCurrentTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-0 rounded-xl sm:rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {testimonial.title}
                  </h3>

                  {/* Content */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevSlide}
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 dark:text-gray-400" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-brand-pink'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNextSlide}
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
