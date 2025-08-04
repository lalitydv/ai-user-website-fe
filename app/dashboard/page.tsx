"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Settings, Plus, BarChart3, Zap, Palette, Code, Globe, Download, Share2, Star, Clock, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
    const { user, loading } = useAuth()
    const router = useRouter()
    const [recentProjects, setRecentProjects] = useState([
        {
            id: 1,
            name: "E-commerce Dashboard",
            type: "Dashboard",
            status: "Live",
            lastModified: "2 hours ago",
            remixes: 156,
            stars: 23
        },
        {
            id: 2,
            name: "CRM System",
            type: "Website",
            status: "Draft",
            lastModified: "1 day ago",
            remixes: 89,
            stars: 12
        }
    ])

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [user, loading, router])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#F72353] mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
                </div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome back, {user.user_metadata?.full_name || user.email}!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Start creating amazing websites and dashboards with AI
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                    <Plus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                    <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Live Projects</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                    <Share2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">2.4k</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Remixes</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                                    <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Stars</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="text-center">
                            <div className="mx-auto p-3 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-lg w-fit">
                                <Plus className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">Create New Project</CardTitle>
                            <CardDescription>Start a new website or dashboard</CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="text-center">
                            <div className="mx-auto p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg w-fit">
                                <Palette className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">Browse Templates</CardTitle>
                            <CardDescription>Explore community templates</CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="text-center">
                            <div className="mx-auto p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit">
                                <BarChart3 className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">Analytics</CardTitle>
                            <CardDescription>View project performance</CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="text-center">
                            <div className="mx-auto p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg w-fit">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                            <CardDescription>Common tasks & shortcuts</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                {/* Recent Projects */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Recent Projects
                        </h2>
                        <Button variant="outline" className="flex items-center space-x-2">
                            <Plus className="h-4 w-4" />
                            <span>New Project</span>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentProjects.map((project) => (
                            <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">{project.name}</CardTitle>
                                        <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <CardDescription className="flex items-center space-x-2">
                                        <Code className="h-4 w-4" />
                                        <span>{project.type}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center space-x-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{project.lastModified}</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4 text-sm">
                                                <span className="flex items-center space-x-1">
                                                    <Share2 className="h-4 w-4" />
                                                    <span>{project.remixes}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <Star className="h-4 w-4" />
                                                    <span>{project.stars}</span>
                                                </span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <Button size="sm" variant="outline">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                                <Button size="sm" variant="outline">
                                                    <Share2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Community Highlights */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Community Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <TrendingUp className="h-5 w-5 text-[#F72353]" />
                                    <span>Trending Templates</span>
                                </CardTitle>
                                <CardDescription>
                                    Most popular templates this week
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div>
                                            <p className="font-medium">E-commerce Dashboard</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">2.3k remixes</p>
                                        </div>
                                        <Badge variant="secondary">Hot</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div>
                                            <p className="font-medium">CRM System</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">1.8k remixes</p>
                                        </div>
                                        <Badge variant="outline">New</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <User className="h-5 w-5 text-[#235EAD]" />
                                    <span>Your Profile</span>
                                </CardTitle>
                                <CardDescription>
                                    Manage your account settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        <div className="w-10 h-10 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-full flex items-center justify-center text-white font-bold">
                                            {user.user_metadata?.full_name ? user.user_metadata.full_name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-medium">{user.user_metadata?.full_name || 'User'}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button variant="outline" size="sm" className="w-full">
                                            <Settings className="h-4 w-4 mr-2" />
                                            Settings
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full">
                                            <User className="h-4 w-4 mr-2" />
                                            Profile
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 