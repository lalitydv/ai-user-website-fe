import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <Badge variant="secondary" className="mb-4">
                            Join Our Community
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Build Together,
                            <span className="text-blue-600"> Grow Together</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Connect with developers, designers, and creators. Share ideas, get feedback, and collaborate on amazing projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Join Discord
                            </Button>
                            <Button size="lg" variant="outline">
                                Browse Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                            <div className="text-gray-600">Active Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Projects Shared</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover amazing projects created by our community members
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Chat Assistant",
                                description: "A conversational AI built with modern web technologies",
                                author: "Sarah Chen",
                                avatar: "/avatars/sarah.jpg",
                                tags: ["AI", "React", "TypeScript"],
                                likes: 234
                            },
                            {
                                title: "E-commerce Platform",
                                description: "Full-stack e-commerce solution with payment integration",
                                author: "Mike Johnson",
                                avatar: "/avatars/mike.jpg",
                                tags: ["Next.js", "Stripe", "PostgreSQL"],
                                likes: 189
                            },
                            {
                                title: "Task Management App",
                                description: "Beautiful and intuitive task management for teams",
                                author: "Emma Davis",
                                avatar: "/avatars/emma.jpg",
                                tags: ["Vue", "Firebase", "Tailwind"],
                                likes: 156
                            }
                        ].map((project, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={project.avatar} />
                                            <AvatarFallback>{project.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-500">❤️ {project.likes}</span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        by {project.author}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Channels */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Join Our Channels
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Connect with like-minded developers and creators
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "General", members: "2.5K", description: "General discussions and announcements" },
                            { name: "Showcase", members: "1.8K", description: "Share your projects and get feedback" },
                            { name: "Help & Support", members: "1.2K", description: "Get help with your coding challenges" },
                            { name: "Jobs", members: "800", description: "Find opportunities and hire talent" }
                        ].map((channel, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-lg">{channel.name}</CardTitle>
                                    <CardDescription>{channel.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-gray-500 mb-4">
                                        {channel.members} members
                                    </div>
                                    <Button variant="outline" className="w-full">
                                        Join Channel
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join our virtual and in-person events
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Web Development Workshop",
                                date: "Dec 15, 2024",
                                time: "2:00 PM EST",
                                type: "Virtual",
                                description: "Learn modern web development techniques with hands-on projects"
                            },
                            {
                                title: "AI & Machine Learning Meetup",
                                date: "Dec 20, 2024",
                                time: "6:00 PM EST",
                                type: "In-Person",
                                description: "Network with AI enthusiasts and learn about the latest trends"
                            }
                        ].map((event, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="outline">{event.type}</Badge>
                                        <div className="text-sm text-gray-500">
                                            {event.date} • {event.time}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{event.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {event.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full">
                                        Register Now
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
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Connect with thousands of developers, share your projects, and grow your skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                            Get Started Free
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 