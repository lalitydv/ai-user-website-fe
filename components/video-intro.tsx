"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"

interface Feature {
    id: number
    title: string
    description: string
}

export function VideoIntro() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const features: Feature[] = [
        {
            id: 1,
            title: "First Working Process",
            description: "Blessing it ladyship on sensible judgment settling outweigh."
        },
        {
            id: 2,
            title: "Dedicated Team",
            description: "Warmly little before cousin sussex entire men set."
        },
        {
            id: 3,
            title: "24/7 Hours Support",
            description: "And excellence partiality estimating terminated day everything."
        }
    ]

    const handlePlayVideo = () => {
        setIsVideoPlaying(true)
        // Here you can add actual video play functionality
        console.log("Video started playing")
    }

    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Left Content - Features */}
                <div className="space-y-12 my-10">
                    {/* Header */}
                    <div className="flex md:flex-row flex-col items-center justify-between ">
                        <h2 className="text-2xl sm:text-5xl lg:text-4xl font-bold leading-tight max-w-2xl">
                            Yet preference connection unpleasant yet melancholy but end appearance
                        </h2>
                        <div className="pl-4">
                            <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
                                onClick={() => console.log("Get Started clicked")}
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </div>


                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">


                    {/* Features List */}
                    {/* <div className="flex md:flex-row flex-col gap-10"> */}


                    <div className="space-y-10">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex items-start gap-6">
                                {/* Number Circle */}
                                <div className="flex-shrink-0 w-14 h-14 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{feature.id}</span>
                                </div>

                                {/* Feature Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right Content - Video Player */}
                    <div className="relative">
                        {/* Background Grid Pattern */}
                        <div className="absolute -left-20 top-0 w-40 h-full opacity-20">
                            <div className="grid grid-cols-8 gap-2 h-full">
                                {Array.from({ length: 64 }).map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        {/* Top Right Decorative Shapes */}
                        <div className="absolute -top-4 -right-4 w-16 h-16">
                            <div className="w-8 h-8 border-l-2 border-t-2 border-white rounded-tl-full"></div>
                            <div className="w-6 h-6 border-r-2 border-b-2 border-white rounded-br-full ml-2 mt-2"></div>
                        </div>

                        {/* Video Container */}
                        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Video Placeholder with Realistic Content */}
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                                {!isVideoPlaying ? (
                                    <>
                                        {/* Video Background with Hands Working */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800">
                                            {/* Simulated hands and documents */}
                                            <div className="absolute bottom-4 left-4 w-32 h-20 bg-white/10 rounded-lg"></div>
                                            <div className="absolute bottom-8 right-8 w-24 h-16 bg-blue-500/20 rounded-lg"></div>
                                            <div className="absolute top-6 left-8 w-20 h-12 bg-yellow-500/20 rounded-lg"></div>
                                            <div className="absolute top-12 right-4 w-16 h-10 bg-green-500/20 rounded-lg"></div>

                                            {/* Light source effect */}
                                            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"></div>
                                        </div>

                                        {/* Play Button Overlay */}
                                        <button
                                            onClick={handlePlayVideo}
                                            className="absolute inset-0 flex items-center justify-center group"
                                        >
                                            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-12 h-12 text-orange-500 ml-1" />
                                            </div>
                                        </button>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                                <Play className="w-10 h-10 text-white ml-1" />
                                            </div>
                                            <p className="text-white font-medium text-lg">Video Playing...</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom Right Decorative Element */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40">
                            <div className="w-full h-full bg-yellow-400/30 transform rotate-45 rounded-lg"></div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
} 