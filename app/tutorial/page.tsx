import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, Users, Star } from "lucide-react";

export default function TutorialPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <Badge variant="secondary" className="mb-4">
                            Learn & Build
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Master AI-Powered
                            <span className="text-blue-600"> Development</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Learn how to build amazing applications using our AI platform. From beginner to advanced, we've got you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Start Learning
                            </Button>
                            <Button size="lg" variant="outline">
                                Browse Courses
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Learning Path
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Follow structured learning paths designed for your skill level
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Beginner",
                                description: "Start your journey with AI development",
                                duration: "4-6 weeks",
                                courses: 8,
                                color: "bg-green-100 text-green-800",
                                progress: 0
                            },
                            {
                                title: "Intermediate",
                                description: "Build complex applications with AI",
                                duration: "6-8 weeks",
                                courses: 12,
                                color: "bg-blue-100 text-blue-800",
                                progress: 25
                            },
                            {
                                title: "Advanced",
                                description: "Master advanced AI techniques",
                                duration: "8-10 weeks",
                                courses: 15,
                                color: "bg-purple-100 text-purple-800",
                                progress: 50
                            }
                        ].map((path, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge className={path.color}>
                                            {path.title}
                                        </Badge>
                                        <div className="text-sm text-gray-500">
                                            {path.duration}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{path.title} Path</CardTitle>
                                    <CardDescription className="text-base">
                                        {path.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Progress</span>
                                            <span className="font-medium">{path.progress}%</span>
                                        </div>
                                        <Progress value={path.progress} className="h-2" />
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Play className="h-4 w-4" />
                                            {path.courses} courses
                                        </div>
                                        <Button className="w-full">
                                            {path.progress === 0 ? "Start Path" : "Continue Learning"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Featured Courses
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Most popular courses handpicked for you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Building Your First AI App",
                                instructor: "Sarah Chen",
                                duration: "2 hours",
                                students: "1.2K",
                                rating: 4.8,
                                level: "Beginner",
                                thumbnail: "/courses/ai-app.jpg",
                                description: "Learn the basics of AI development and build your first application"
                            },
                            {
                                title: "Advanced AI Integration",
                                instructor: "Mike Johnson",
                                duration: "4 hours",
                                students: "856",
                                rating: 4.9,
                                level: "Intermediate",
                                thumbnail: "/courses/ai-integration.jpg",
                                description: "Master advanced AI integration techniques for production apps"
                            },
                            {
                                title: "AI-Powered E-commerce",
                                instructor: "Emma Davis",
                                duration: "6 hours",
                                students: "634",
                                rating: 4.7,
                                level: "Advanced",
                                thumbnail: "/courses/ecommerce.jpg",
                                description: "Build a complete e-commerce platform with AI features"
                            }
                        ].map((course, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                                    <Play className="h-12 w-12 text-blue-600" />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">{course.level}</Badge>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">{course.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {course.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {course.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="h-4 w-4" />
                                                {course.students}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500 mb-4">
                                        by {course.instructor}
                                    </div>
                                    <Button className="w-full">
                                        Start Course
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Quick Start Guide
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get up and running in minutes with our step-by-step guide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Create Your Account",
                                    description: "Sign up for free and get instant access to our platform"
                                },
                                {
                                    step: "02",
                                    title: "Choose Your Project",
                                    description: "Select from our templates or start from scratch"
                                },
                                {
                                    step: "03",
                                    title: "Describe Your Idea",
                                    description: "Tell our AI what you want to build in plain English"
                                },
                                {
                                    step: "04",
                                    title: "Customize & Deploy",
                                    description: "Fine-tune your application and deploy it live"
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                            <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center">
                                <div className="text-center">
                                    <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-600">Watch Demo Video</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Additional Resources
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive learning resources
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Documentation", count: "500+", description: "Comprehensive guides and API references" },
                            { title: "Video Tutorials", count: "200+", description: "Step-by-step video guides" },
                            { title: "Code Examples", count: "1000+", description: "Ready-to-use code snippets" },
                            { title: "Community Forum", count: "10K+", description: "Get help from the community" }
                        ].map((resource, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">
                                        {resource.count}
                                    </div>
                                    <CardDescription>{resource.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline" className="w-full">
                                        Explore
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of developers learning AI-powered development with our platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                            Start Free Course
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            View All Courses
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 