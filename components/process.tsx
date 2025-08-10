"use client"

import { Card, CardContent } from "@/components/ui/card"

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: string
  iconColor: string
}

export function Process() {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Describe Your Idea",
      description: "Input your concept in plain English",
      icon: "💡",
      iconColor: "text-yellow-500 dark:text-yellow-400"
    },
    {
      id: 2,
      title: "AI Builds It",
      description: "Our AI transforms your idea into a functional app",
      icon: "🤖",
      iconColor: "text-muted-foreground"
    },
    {
      id: 3,
      title: "Customize & Integrate",
      description: "Easily tweak designs and connect with tools like Stripe, APIs, and CRMs",
      icon: "⚙️",
      iconColor: "text-ring"
    },
    {
      id: 4,
      title: "Launch & Own Your Code",
      description: "Deploy instantly and retain full ownership of your code",
      icon: "🚀",
      iconColor: "text-destructive"
    }
  ]

  return (
    <section className="py-20 w-full bg-[url('/images/Home/launch-your-product.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 relative inline-block">
            Launch your product in 4 simple steps
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
              <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
            </div>
          </h2>
        </div>

        {/* Process Steps with Zigzag Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Timeline */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue z-0">
            {/* Timeline Dots */}
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-brand-pink rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-brand-blue rounded-full transform -translate-y-1/2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:mt-16' : ''}`}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border-0 relative">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <span className={`text-3xl ${step.iconColor}`}>
                          {step.icon}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">
                        {step.title}
                      </h3>
                    </div>

                    {/* Card Bottom Line with Dots */}
                    <div className="relative">
                      <div className="h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full"></div>
                      <div className="absolute -right-1 top-1/2 w-2 h-2 bg-brand-blue rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute -right-3 top-1/2 w-2 h-2 bg-brand-blue rounded-full transform -translate-y-1/2"></div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
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
        </div> */}
      </div>
    </section>
  )
} 