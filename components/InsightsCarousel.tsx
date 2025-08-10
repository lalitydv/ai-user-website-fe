"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const insights = [
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "AI Robot Head",
            date: "Jun 22, 2025",
            category: "NEWS"
        },
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "Business with AI",
            date: "Jun 22, 2025",
            category: "NEWS"
        },
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "Holographic Interface",
            date: "Jun 22, 2025",
            category: "NEWS"
        },
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "Digital Innovation",
            date: "Jun 22, 2025",
            category: "NEWS"
        },
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "Future Technology",
            date: "Jun 22, 2025",
            category: "NEWS"
        },
        {
            title: "The Biggest Selection Of Prints For T-Shirts",
            image: "Smart Solutions",
            date: "Jun 22, 2025",
            category: "NEWS"
        }
    ];

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % insights.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + insights.length) % insights.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 5 seconds
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    // Calculate transform based on device type
    const getTransformValue = () => {
        if (isMobile) {
            return `translateX(-${currentSlide * 100}%)`;
        }
        return `translateX(-${currentSlide * (100 / 3)}%)`;
    };

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Insights & Inspiration
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Insights, Ideas & Industry Trends In Signage And Print
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 dark:bg-card/80 rounded-full flex items-center justify-center shadow-lg hover:bg-background dark:hover:bg-card transition-all duration-200 border border-border"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 dark:bg-card/80 rounded-full flex items-center justify-center shadow-lg hover:bg-background dark:hover:bg-card transition-all duration-200 border border-border"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground" />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: getTransformValue() }}
                        >
                            {insights.map((insight, index) => (
                                <div key={index} className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2`}>
                                    <Card className="bg-background dark:bg-card text-foreground border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                        <CardContent className="p-0">
                                            {/* Image Section - 70-75% of card height */}
                                            <div className="h-48 sm:h-56 bg-gradient-to-br from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-pink))] relative overflow-hidden">
                                                {/* AI-themed placeholder content */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center text-white p-4">
                                                        <div className="text-4xl mb-2">🤖</div>
                                                        <div className="text-sm opacity-90">{insight.image}</div>
                                                    </div>
                                                </div>

                                                {/* Animated background elements */}
                                                <div className="absolute inset-0 opacity-20">
                                                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                    <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
                                                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
                                                    <div className="absolute bottom-8 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                                                </div>
                                            </div>

                                            {/* Text Section - 25-30% of card height */}
                                            <div className="p-4 sm:p-6 bg-background dark:bg-card">
                                                <div className="flex items-center justify-between mb-3">
                                                    <Badge variant="secondary" className="text-xs bg-[hsl(var(--brand-pink))] text-white border-0">
                                                        {insight.category}
                                                    </Badge>
                                                    <span className="text-xs text-muted-foreground">{insight.date}</span>
                                                </div>
                                                <h3 className="font-bold text-sm sm:text-base leading-tight text-foreground">
                                                    {insight.title}
                                                </h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {insights.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-[hsl(var(--brand-pink))] w-8'
                                    : 'bg-muted hover:bg-muted-foreground'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InsightsCarousel 