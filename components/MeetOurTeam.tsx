"use client"

import React, { useState, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MeetOurTeam = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const teamMembers = [
        {
            name: "Olivia Smith",
            role: "Senior Executive",
            image: "/team/olivia-smith.jpg" // You'll need to add these images
        },
        {
            name: "Lily Smith",
            role: "Senior Executive",
            image: "/team/lily-smith.jpg"
        },
        {
            name: "Isabella Smith",
            role: "Senior Executive",
            image: "/team/isabella-smith.jpg"
        },
        {
            name: "Daisy Smith",
            role: "Senior Executive",
            image: "/team/daisy-smith.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 team-section-bg">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Insights, Ideas & Industry Trends In Signage And Print
                    </p>
                </div>

                {/* Mobile Carousel - Hidden on larger screens */}
                <div className="block lg:hidden mb-8">
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 dark:bg-card/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-card transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 dark:bg-card/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-card transition-all duration-200"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>

                        {/* Carousel Container */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <Card className="overflow-hidden border-0 shadow-lg bg-white dark:bg-card">
                                            {/* Image Section */}
                                            <div className="relative h-64 sm:h-72 bg-gradient-to-br from-muted to-muted/50">
                                                {/* Placeholder for team member image */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] flex items-center justify-center text-white text-2xl font-bold">
                                                        {member.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                </div>

                                                {/* You can uncomment this when you have actual images */}
                                                {/* <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                /> */}
                                            </div>

                                            {/* Text Section */}
                                            <div className="bg-white dark:bg-card p-4 sm:p-6">
                                                <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2">
                                                    {member.name}
                                                </h3>
                                                <p className="text-muted-foreground text-sm sm:text-base">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Pagination Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide
                                    ? 'bg-[hsl(var(--brand-pink))] w-6'
                                    : 'bg-muted'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid - Hidden on mobile */}
                <div className="hidden lg:grid grid-cols-4 gap-6 sm:gap-8 mb-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-card">
                                {/* Image Section - 70-75% of card height */}
                                <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-muted to-muted/50">
                                    {/* Placeholder for team member image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] flex items-center justify-center text-white text-2xl font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>

                                    {/* You can uncomment this when you have actual images */}
                                    {/* <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    /> */}
                                </div>

                                {/* Text Section - 25-30% of card height */}
                                <div className="bg-white dark:bg-card p-4 sm:p-6">
                                    <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        {member.role}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Desktop Pagination Dots - Only show on desktop */}
                <div className="hidden lg:flex justify-center space-x-3">
                    <div className="w-3 h-3 bg-[hsl(var(--brand-pink))] rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam 