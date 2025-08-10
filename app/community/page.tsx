"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useState } from "react"
import Image from "next/image"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Filter, X, Play, Heart } from "lucide-react";
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
export default function CommunityPage() {

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
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="border-b border-gray-200 px-6 py-4 mt-24  ">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Left Side - Title with Play Icon and Dots */}
                        <div className="flex flex-col items-center gap-3">
                            <h1 className="text-2xl font-semibold text-gray-800">Community</h1>
                            <div className="flex  items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Right Side - Navigation Tags and Filter Button */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {["SaaS", "Portfolio", "E-commerce", "Admin Panel", "Website"].map((tag, index) => (
                                    <div key={tag} className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700">
                                        {tag}
                                        {index < 3 && (
                                            <button className="ml-1 text-gray-400 hover:text-gray-600">
                                                <X className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                Filter
                                <Filter className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            placeholder="Search"
                            className="pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-lg"
                        />
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


            {/* Content Grid */}
            <div className="px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    {/* All Websites Section */}
                    <div className="mb-12">
                        <div className="text-center mb-8 my-10 ">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">All Websites</h2>
                            <div className="flex justify-center gap-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

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
                    </div>

                    {/* Admin Panel Section */}
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Admin Panel</h2>
                            <div className="flex justify-center gap-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

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
                    </div>
                </div>
            </div>
        </div>
    );
} 