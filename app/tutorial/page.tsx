"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Testimonials } from "@/components/testimonials";

export default function TutorialPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Course data with categories
    const allCourses = [
        {
            id: 1,
            title: "The Arts and Science of Relationships: Understanding Human Needs",
            category: "Courses",
            duration: "80 hours",
            step: "Step 14/66",
            subtitle: "Relationships & Self",
            image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            title: "Positive Psychiatry and Mental Health",
            category: "Courses",
            duration: "12 hours",
            step: "Step 2/12",
            subtitle: "Importance of healthy food",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Conversations That Inspire: Coaching Learning, Leadership and Change",
            category: "Courses",
            duration: "35 hours",
            step: "Step 10/30",
            subtitle: "How do people really help...",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            title: "Advanced Photography Techniques",
            category: "Videos",
            duration: "8 hours",
            step: "Step 5/20",
            subtitle: "Professional Skills",
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 5,
            title: "Digital Art Fundamentals",
            category: "Videos",
            duration: "15 hours",
            step: "Step 8/25",
            subtitle: "Creative Design",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 6,
            title: "JavaScript Mastery Quiz",
            category: "Quizzes",
            duration: "2 hours",
            step: "Quiz 3/10",
            subtitle: "Programming Skills",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    // Filter courses based on selected category
    const filteredCourses = selectedCategory === "All"
        ? allCourses
        : allCourses.filter(course => course.category === selectedCategory);

    return (
        <>


            <div className="min-h-screen bg-background">
                {/* Header Section */}
                <section className="relative px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center mt-32">
                        <div className="mb-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Fast Learning
                            </h1>
                            {/* Decorative line with circles */}
                            <div className="flex justify-center items-center mb-8">
                                <div className="w-32 h-px bg-border"></div>
                                <div className="flex gap-2 mx-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="w-32 h-px bg-border"></div>
                            </div>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                                Start for free. Upgrade to get the capacity that exactly matches your team's needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Courses Section */}
                <section className="px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Portrait Photography Card */}
                            <Card className="relative overflow-hidden h-80 lg:h-96 bg-card">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                <div className="absolute inset-0 bg-cover bg-center" style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                                }} />
                                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                                    <p className="text-sm mb-2 opacity-90">Continue Course</p>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                        Portrait Photography Fundamentals
                                    </h3>
                                </div>
                                <div className="absolute bottom-6 right-6 z-20">
                                    <Button size="icon" className="w-12 h-12 rounded-full bg-card-foreground hover:bg-muted-foreground">
                                        <Play className="h-5 w-5 text-background" />
                                    </Button>
                                </div>
                            </Card>

                            {/* Modern Art History Card */}
                            <Card className="relative overflow-hidden h-80 lg:h-96 bg-card">
                                <div className="absolute inset-0 bg-gradient-to-b from-teal-600 via-red-500 to-yellow-500 z-10" />
                                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                                    <h3 className="text-2xl lg:text-3xl font-bold">
                                        History of Modern Art Movements
                                    </h3>
                                    <div className="text-sm opacity-90">
                                        <p>Final Quiz</p>
                                        <p>Completed 12/16</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 z-30">
                                    <Button size="icon" className="w-12 h-12 rounded-full bg-card-foreground hover:bg-muted-foreground">
                                        <Play className="h-5 w-5 text-background" />
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Course Categories and Filter */}
                <section className="px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-6">
                                {["All", "Courses", "Videos", "Quizzes"].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`text-lg font-medium transition-colors ${selectedCategory === category
                                            ? "text-foreground font-bold"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card">
                                <span className="text-sm text-card-foreground">Current</span>
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Grid Section */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                                    <div className="relative h-48">
                                        <div className="absolute inset-0 bg-cover bg-center" style={{
                                            backgroundImage: `url('${course.image}')`
                                        }} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4 text-white">
                                            <p className="text-sm mb-1">{course.step}</p>
                                            <p className="text-sm font-medium">{course.subtitle}</p>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <Button size="icon" className="w-10 h-10 rounded-full bg-card-foreground hover:bg-muted-foreground">
                                                <Play className="h-4 w-4 text-background" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-card-foreground text-lg mb-2 leading-tight">
                                            {course.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">Course, {course.duration}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Testimonials />
        </>
    );
} 