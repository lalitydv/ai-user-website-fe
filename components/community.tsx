"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown, Filter, X } from "lucide-react"
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

  const [selectedFilters, setSelectedFilters] = useState<string[]>(["saas"])
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filterOptions = [
    { id: "saas", label: "SaaS" },
    { id: "portfolio", label: "Portfolio" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "admin", label: "Admin Panel" },
    { id: "website", label: "Website" }
  ]

  const toggleFilter = (filterId: string) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filterId))
    } else {
      setSelectedFilters([...selectedFilters, filterId])
    }
  }

  const removeFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filterId))
  }

  const toggleLike = (id: number) => {
    setTemplates(templates.map(template =>
      template.id === id ? { ...template, isLiked: !template.isLiked } : template
    ))
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex md:flex-row flex-col md:items-baseline md:justify-between justify-center items-center mb-16">
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="flex flex-col  md:justify-start justify-center items-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Community
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
                <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full"></div>
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-brand-pink to-brand-blue"></div>
              </div>
            </div>
          </div>

          {/* Filter Section - Hidden on mobile, centered on desktop */}
          <div className="hidden md:flex justify-end items-center w-full">
            <div className="flex flex-wrap items-center gap-3 justify-center">
              {/* Filter Buttons */}
              {filterOptions.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFilter(filter.id)}
                  className={`rounded-full ${selectedFilters.includes(filter.id)
                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 shadow-sm relative overflow-hidden"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  {selectedFilters.includes(filter.id) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-pink to-brand-blue"></div>
                  )}
                  <span className={selectedFilters.includes(filter.id) ? "ml-2" : ""}>
                    {filter.label}
                  </span>
                  {selectedFilters.includes(filter.id) && (
                    <X className="ml-2 h-3 w-3" onClick={(e) => {
                      e.stopPropagation()
                      removeFilter(filter.id)
                    }} />
                  )}
                </Button>
              ))}

              {/* Filter Dropdown */}
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-gradient-to-r from-brand-pink to-brand-blue text-white border-0 shadow-sm hover:from-brand-pink/90 hover:to-brand-blue/90"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className=" mx-auto md:max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
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
                      <span className="text-sm text-gray-600 dark:text-gray-400">{template.author.name}</span>
                    </div>

                    {/* Remixes Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Remixes</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{template.remixes}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-brand-pink to-brand-blue h-2 rounded-full transition-all duration-300"
                          style={{ width: `${template.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
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
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 text-lg font-semibold rounded-full hover:border-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300"
          >
            View More
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
} 