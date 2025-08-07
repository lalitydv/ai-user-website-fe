"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface TemplateCard {
  id: number
  title: string
  image: string
  remixes: string
  isLiked: boolean
  type: string
  author: {
    name: string
    avatar: string
  }
  progress: number
}

export function Community() {
  const [templates, setTemplates] = useState<TemplateCard[]>([
    {
      id: 1,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2.png",
      remixes: "23.4K",
      isLiked: false,
      type: "Website",

      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 85
    },
    {
      id: 2,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2-1.png",
      remixes: "18.2K",
      isLiked: true,
      type: "Dashboard",

      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 72
    },
    {
      id: 3,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2-2.png",
      remixes: "15.7K",
      isLiked: false,
      type: "Website",

      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 58
    },
    {
      id: 4,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2-3.png",
      remixes: "12.9K",
      isLiked: false,
      type: "Admin",

      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 45
    },
    {
      id: 5,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2-4.png",
      remixes: "9.3K",
      isLiked: false,
      type: "Website",
      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 33
    },
    {
      id: 6,
      title: "Pulse-Robot-Template",
      image: "/images/Home/Rectangle 2-5.png",
      remixes: "7.1K",
      isLiked: false,
      type: "Admin",

      author: {
        name: "Sapna Prajapat",
        avatar: "/images/Home/Ellipse 543.png"
      },
      progress: 28
    }
  ])

  const toggleLike = (id: number) => {
    setTemplates(templates.map(template =>
      template.id === id ? { ...template, isLiked: !template.isLiked } : template
    ))
  }

  return (
    <section className="py-20 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Community
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"></div>
          </div>
        </div>

        {/* Template Grid */}
        <div className=" mx-auto md:max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.title}
                      width={400}
                      height={224}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-8 h-8 p-0 rounded-full bg-white/20 backdrop-blur-sm ${template.isLiked ? 'text-purple-500' : 'text-white'} hover:text-purple-500`}
                        onClick={() => toggleLike(template.id)}
                      >
                        <Heart className={`w-4 h-4 ${template.isLiked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {template.title}
                    </h3>

                    {/* Author Information */}
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-300 mr-2 overflow-hidden">
                        <Image
                          src={template.author.avatar}
                          alt={template.author.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-600">{template.author.name}</span>
                    </div>

                    {/* Remixes Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Remixes</span>
                        <span className="text-sm font-medium text-gray-900">{template.remixes}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${template.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700"
                      >
                        {template.type}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Remix
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 text-lg font-semibold rounded-full hover:border-gray-400 hover:text-gray-800 transition-all duration-300"
          >
            View More
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
} 