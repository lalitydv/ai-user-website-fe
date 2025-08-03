"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { useState } from "react"

interface PricingTier {
  name: string
  price: {
    monthly: string
    quarterly: string
  }
  description: string
  features: {
    included: string[]
    excluded: string[]
  }
  popular?: boolean
}

export function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false)

  const pricingTiers: PricingTier[] = [
    {
      name: "Freebie",
      price: {
        monthly: "$0",
        quarterly: "$0"
      },
      description: "Perfect for getting started",
      features: {
        included: [
          "20,000+ of PNG & SVG graphics",
          "Access to 100 million stock images",
          "Basic templates",
          "Community support"
        ],
        excluded: [
          "Upload custom icons and fonts",
          "Unlimited Sharing",
          "Advanced analytics",
          "Priority support"
        ]
      }
    },
    {
      name: "Professional",
      price: {
        monthly: "$25",
        quarterly: "$67"
      },
      description: "For growing businesses",
      features: {
        included: [
          "Everything in Freebie",
          "Upload custom icons and fonts",
          "Unlimited Sharing",
          "Advanced analytics",
          "Priority support",
          "Custom branding"
        ],
        excluded: [
          "White-label solutions",
          "API access",
          "Dedicated account manager"
        ]
      },
      popular: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: "$100",
        quarterly: "$270"
      },
      description: "For large organizations",
      features: {
        included: [
          "Everything in Professional",
          "White-label solutions",
          "API access",
          "Dedicated account manager",
          "Custom integrations",
          "Advanced security",
          "SLA guarantee"
        ],
        excluded: []
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing, Full Power
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsQuarterly(!isQuarterly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isQuarterly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isQuarterly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
              Quarterly
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                Save 10%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`relative ${tier.popular ? 'ring-2 ring-blue-500 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-pink-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {isQuarterly ? tier.price.quarterly : tier.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-2">
                    / {isQuarterly ? 'Quarter' : 'Month'}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{tier.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {/* Included Features */}
                  {tier.features.included.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}

                  {/* Excluded Features */}
                  {tier.features.excluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-400 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white' 
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  } transition-all duration-300`}
                >
                  Get Started Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
} 