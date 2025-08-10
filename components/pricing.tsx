"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Calendar } from "lucide-react"
import { useState } from "react"

interface PricingTier {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  features: {
    included: string[]
    excluded: string[]
  }
  popular?: boolean
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingTiers: PricingTier[] = [
    {
      name: "Freebie",
      price: {
        monthly: "$0",
        yearly: "$0"
      },
      description: "Ideal for individuals who need quick access to basic features.",
      features: {
        included: [
          "20,000+ of PNG & SVG graphics",
          "Access to 100 million stock images"
        ],
        excluded: [
          "Upload custom icons and fonts",
          "Unlimited Sharing",
          "Upload graphics & video in up to 4k",
          "Unlimited Projects",
          "Instant Access to our design system",
          "Create teams to collaborate on designs"
        ]
      }
    },
    {
      name: "Professional",
      price: {
        monthly: "$25",
        yearly: "$250"
      },
      description: "Ideal for individuals who need advanced features and tools for client work.",
      features: {
        included: [
          "20,000+ of PNG & SVG graphics",
          "Access to 100 million stock images",
          "Upload custom icons and fonts",
          "Unlimited Sharing",
          "Upload graphics & video in up to 4k",
          "Unlimited Projects"
        ],
        excluded: [
          "Instant Access to our design system",
          "Create teams to collaborate on designs"
        ]
      },
      popular: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: "$100",
        yearly: "$1000"
      },
      description: "Ideal for businesses who need personalized services and security for large teams.",
      features: {
        included: [
          "20,000+ of PNG & SVG graphics",
          "Access to 100 million stock images",
          "Upload custom icons and fonts",
          "Unlimited Sharing",
          "Upload graphics & video in up to 4k",
          "Unlimited Projects",
          "Instant Access to our design system",
          "Create teams to collaborate on designs"
        ],
        excluded: []
      }
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plans & Billing
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
              <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
            </div>
          </div>

          {/* Pricing Toggle */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-brand-pink/10 to-brand-blue/10 rounded-full p-1 mt-6 lg:mt-0 border border-brand-pink/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${!isYearly
                ? 'bg-gradient-to-r from-brand-pink to-brand-blue text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isYearly
                ? 'bg-gradient-to-r from-brand-pink to-brand-blue text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={tier.name} className="relative">
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-brand-blue text-white px-4 py-1 rounded-full">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Gradient border wrapper for Professional card */}
              {tier.popular ? (
                <div className="relative rounded-2xl bg-gradient-to-r from-brand-pink to-brand-blue p-0.5">
                  <Card className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardHeader className="text-center pb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{tier.description}</p>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          {isYearly ? tier.price.yearly : tier.price.monthly}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-2">
                          / {isYearly ? 'Year' : 'Month'}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4 mb-8">
                        {/* Included Features */}
                        {tier.features.included.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-brand-blue/10 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-brand-blue" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-200 text-sm">{feature}</span>
                          </div>
                        ))}

                        {/* Excluded Features */}
                        {tier.features.excluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-brand-pink/10 rounded-full flex items-center justify-center">
                              <X className="w-3 h-3 text-brand-pink" />
                            </div>
                            <span className="text-gray-400 dark:text-gray-500 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${tier.popular
                          ? 'bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white'
                          : 'bg-white border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5'
                          } transition-all duration-300`}
                      >
                        Get Started Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{tier.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {isYearly ? tier.price.yearly : tier.price.monthly}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        / {isYearly ? 'Year' : 'Month'}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4 mb-8">
                      {/* Included Features */}
                      {tier.features.included.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-brand-blue/10 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-brand-blue" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-200 text-sm">{feature}</span>
                        </div>
                      ))}

                      {/* Excluded Features */}
                      {tier.features.excluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-brand-pink/10 rounded-full flex items-center justify-center">
                            <X className="w-3 h-3 text-brand-pink" />
                          </div>
                          <span className="text-gray-400 dark:text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${tier.popular
                        ? 'bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white'
                        : 'bg-white border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5'
                        } transition-all duration-300`}
                    >
                      Get Started Now
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 