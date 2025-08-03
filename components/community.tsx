"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ExternalLink } from "lucide-react"
import { useState } from "react"

interface TemplateCard {
  id: number
  title: string
  description: string
  image: string
  remixes: string
  isLiked: boolean
}

export function Community() {
  const [templates, setTemplates] = useState<TemplateCard[]>([
    {
      id: 1,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "23.4k",
      isLiked: false
    },
    {
      id: 2,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "18.2k",
      isLiked: true
    },
    {
      id: 3,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "15.7k",
      isLiked: false
    },
    {
      id: 4,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "12.9k",
      isLiked: false
    },
    {
      id: 5,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "9.3k",
      isLiked: false
    },
    {
      id: 6,
      title: "Pulse-Robot-Template",
      description: "The Humanoid Companion That Learns And Adapts Alongside You.",
      image: "/images/placeholder.jpg",
      remixes: "7.1k",
      isLiked: false
    }
  ])

  const toggleLike = (id: number) => {
    setTemplates(templates.map(template => 
      template.id === id ? { ...template, isLiked: !template.isLiked } : template
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Community
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing templates created by our community. Remix, customize, and build something incredible.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      Website
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-8 h-8 p-0 rounded-full ${template.isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                      onClick={() => toggleLike(template.id)}
                    >
                      <Heart className={`w-4 h-4 ${template.isLiked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {template.remixes} remixes
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white text-xs">
                        Remix
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 text-lg font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            View More Templates
          </Button>
        </div>
      </div>
    </section>
  )
} 