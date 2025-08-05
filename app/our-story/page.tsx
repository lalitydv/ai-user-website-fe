import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Users, Target, Heart } from "lucide-react";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <Badge variant="secondary" className="mb-4">
                            Our Story
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Building the Future of
                            <span className="text-blue-600"> AI Development</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            From a small team with a big vision to a global platform empowering developers worldwide. This is our journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-xl text-gray-600 mb-6">
                                We believe that everyone should have the power to create amazing applications, regardless of their technical background. Our mission is to democratize AI development and make it accessible to creators worldwide.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                By combining cutting-edge AI technology with intuitive design, we're building a platform that transforms ideas into reality faster than ever before.
                            </p>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Learn More
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Target, title: "Vision", description: "Empower 1M+ developers" },
                                { icon: Heart, title: "Values", description: "Innovation & Community" },
                                { icon: Users, title: "Team", description: "50+ passionate experts" },
                                { icon: Award, title: "Impact", description: "10K+ apps created" }
                            ].map((item, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="pt-6">
                                        <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From humble beginnings to industry leadership
                        </p>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                year: "2020",
                                title: "The Beginning",
                                description: "Founded by a team of AI researchers and developers with a vision to democratize AI development",
                                milestone: "Company Founded"
                            },
                            {
                                year: "2021",
                                title: "First Product Launch",
                                description: "Released our first AI-powered development platform with basic features",
                                milestone: "Beta Launch"
                            },
                            {
                                year: "2022",
                                title: "Rapid Growth",
                                description: "Reached 10,000 users and launched advanced AI features",
                                milestone: "10K Users"
                            },
                            {
                                year: "2023",
                                title: "Global Expansion",
                                description: "Expanded to 50+ countries and launched enterprise solutions",
                                milestone: "Global Reach"
                            },
                            {
                                year: "2024",
                                title: "Industry Leader",
                                description: "Became the leading AI development platform with 100,000+ active users",
                                milestone: "100K Users"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="lg:w-1/3 text-center lg:text-right">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{item.year}</div>
                                    <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                                </div>

                                <div className="lg:w-1/3 flex justify-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full relative">
                                        <div className="absolute inset-0 w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                                    </div>
                                </div>

                                <div className="lg:w-1/3 text-center lg:text-left">
                                    <div className="text-lg text-gray-900 mb-2">{item.description}</div>
                                    <Badge variant="secondary">{item.milestone}</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate people behind our mission
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Chen",
                                role: "CEO & Co-founder",
                                avatar: "/team/sarah.jpg",
                                bio: "Former AI researcher at Google, passionate about democratizing technology",
                                linkedin: "#"
                            },
                            {
                                name: "Mike Johnson",
                                role: "CTO & Co-founder",
                                avatar: "/team/mike.jpg",
                                bio: "Full-stack developer with 15+ years experience in scalable systems",
                                linkedin: "#"
                            },
                            {
                                name: "Emma Davis",
                                role: "Head of Product",
                                avatar: "/team/emma.jpg",
                                bio: "Product leader with expertise in AI/ML and user experience design",
                                linkedin: "#"
                            },
                            {
                                name: "Alex Rodriguez",
                                role: "Head of Engineering",
                                avatar: "/team/alex.jpg",
                                bio: "Engineering leader focused on building robust and scalable platforms",
                                linkedin: "#"
                            },
                            {
                                name: "Lisa Wang",
                                role: "Head of Design",
                                avatar: "/team/lisa.jpg",
                                bio: "Design leader creating intuitive and beautiful user experiences",
                                linkedin: "#"
                            },
                            {
                                name: "David Kim",
                                role: "Head of Growth",
                                avatar: "/team/david.jpg",
                                bio: "Growth expert helping developers discover and adopt our platform",
                                linkedin: "#"
                            }
                        ].map((member, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <Avatar className="h-20 w-20 mx-auto mb-4">
                                        <AvatarImage src={member.avatar} />
                                        <AvatarFallback className="text-lg">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">{member.name}</CardTitle>
                                    <CardDescription className="text-base font-medium text-blue-600">
                                        {member.role}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        {member.bio}
                                    </p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Connect on LinkedIn
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description: "We constantly push the boundaries of what's possible with AI technology",
                                color: "bg-blue-100 text-blue-800"
                            },
                            {
                                title: "Accessibility",
                                description: "Making powerful tools available to everyone, regardless of technical background",
                                color: "bg-green-100 text-green-800"
                            },
                            {
                                title: "Community",
                                description: "Building a supportive ecosystem where developers can learn and grow together",
                                color: "bg-purple-100 text-purple-800"
                            },
                            {
                                title: "Quality",
                                description: "Delivering exceptional experiences and reliable tools that developers can trust",
                                color: "bg-orange-100 text-orange-800"
                            }
                        ].map((value, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <Badge className={`${value.color} mb-4`}>
                                        {value.title}
                                    </Badge>
                                    <CardDescription className="text-base">
                                        {value.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "100K+", label: "Active Users" },
                            { number: "50+", label: "Countries" },
                            { number: "10K+", label: "Apps Created" },
                            { number: "99.9%", label: "Uptime" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Join Our Mission
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Be part of the future of AI development. Start building amazing applications today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                            Get Started Free
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Join Our Team
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 