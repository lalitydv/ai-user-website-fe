"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Bot, Settings, Monitor } from "lucide-react"

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export function Process() {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Describe Your Idea",
      description: "Input your concept in plain English.",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "AI Builds It",
      description: "Our AI transforms your idea into a functional app.",
      icon: Bot
    },
    {
      id: 3,
      title: "Customize & Integrate",
      description: "Easily tweak designs and connect with tools like Stripe, APIs, and CRMs.",
      icon: Settings
    },
    {
      id: 4,
      title: "Launch & Own Your Code",
      description: "Deploy instantly and retain full ownership of your code.",
      icon: Monitor
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Launch your product in 4 simple steps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From idea to deployment in minutes, not months. Our streamlined process makes building and launching your product effortless.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card key={step.id} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connection Dots for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to build your next big idea?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of creators who are building amazing products with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Start Building Free
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 