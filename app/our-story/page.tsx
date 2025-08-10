import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HowWeWork from "../../components/HowWeWork"
import MeetOurTeam from "../../components/MeetOurTeam";
import InsightsCarousel from "@/components/InsightsCarousel";


export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* About Us Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                            About Us
                        </h1>
                        <div className="flex justify-center space-x-2 mb-6">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[hsl(var(--brand-pink))] rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[hsl(var(--brand-blue))] rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Your Prompt. Our Code. Stunning Results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-lg flex items-center justify-center hover-lift">
                                <div className="text-muted-foreground text-center p-4">
                                    <div className="text-4xl mb-2">🏢</div>
                                    <div className="text-sm sm:text-lg">Company Image</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Text */}
                        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                            <p className="text-base sm:text-lg text-muted-foreground">
                                We are a team of passionate developers, designers, and AI enthusiasts who believe that everyone should have the power to create amazing applications.
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                Our platform combines cutting-edge AI technology with intuitive design to transform your ideas into functional code faster than ever before.
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                Whether you're a seasoned developer or just starting your journey, our tools empower you to build, iterate, and deploy with confidence.
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                Join thousands of developers who are already building the future with our AI-powered platform.
                            </p>
                        </div>
                    </div>

                    {/* Statistics Bar */}
                    <div className="mt-12 sm:mt-16">
                        <div className="bg-gradient-to-r from-[hsl(var(--brand-pink))] via-purple-500 to-[hsl(var(--brand-blue))] rounded-lg p-6 sm:p-8 hover-lift">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                                <div className="text-white">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">10,000+</div>
                                    <div className="text-sm sm:text-lg">USERS</div>
                                </div>
                                <div className="text-white">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">8000+</div>
                                    <div className="text-sm sm:text-lg">PROJECTS</div>
                                </div>
                                <div className="text-white">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">2000+</div>
                                    <div className="text-sm sm:text-lg">REMIX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <HowWeWork />



            {/* Meet Our Team Section */}
            <MeetOurTeam />


            {/* Insights & Inspiration Section */}
            <InsightsCarousel />

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                        Join thousands of developers who are already creating the future with our AI-powered platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-gray-100 hover-lift">
                            Get Started Free
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground hover-lift">
                            View Documentation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 