"use client"

import React, { useState, useEffect } from 'react'
import { Plus, Folder, Globe, Lock, Calendar, Code, Eye, Edit, Trash, ArrowRight, Star } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

interface Project {
    id: string
    name: string
    description: string
    prompt: string
    type: 'complete' | 'public'
    status: 'draft' | 'live' | 'archived'
    createdAt: string
    updatedAt: string
    tags: string[]
    isPublic: boolean
}

const ProjectManager = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [activeTab, setActiveTab] = useState<'complete' | 'public'>('complete')
    const [searchTerm, setSearchTerm] = useState('')
    const { theme } = useTheme()
    const router = useRouter()

    const isDark = theme === 'dark'

    useEffect(() => {
        // Load projects from localStorage
        const savedProjects = localStorage.getItem('aiProjects')
        if (savedProjects) {
            setProjects(JSON.parse(savedProjects))
        }
    }, [])

    const saveProjects = (newProjects: Project[]) => {
        setProjects(newProjects)
        localStorage.setItem('aiProjects', JSON.stringify(newProjects))
    }

    const createNewProject = () => {
        router.push('/dashboard/prompt-input')
    }

    const openProject = (project: Project) => {
        localStorage.setItem('currentProject', JSON.stringify(project))
        router.push(`/dashboard/project/${project.id}`)
    }

    const deleteProject = (projectId: string) => {
        const newProjects = projects.filter(p => p.id !== projectId)
        saveProjects(newProjects)
    }

    const toggleProjectVisibility = (projectId: string) => {
        const newProjects = projects.map(p =>
            p.id === projectId ? { ...p, isPublic: !p.isPublic } : p
        )
        saveProjects(newProjects)
    }

    const filteredProjects = projects.filter(project =>
        project.type === activeTab &&
        (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'live': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
            case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
            case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
        }
    }

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        AI Project Manager
                    </h1>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Manage all your AI-generated projects and websites
                    </p>
                </div>

                {/* Tabs and Search */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                        {[
                            { key: 'complete', label: 'Complete Projects', icon: Folder },
                            { key: 'public', label: 'Public Websites', icon: Globe }
                        ].map(({ key, label, icon: Icon }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key as 'complete' | 'public')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${activeTab === key
                                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                                    : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F72353] ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                                }`}
                        />
                        <button
                            onClick={createNewProject}
                            className="bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            New Project
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`rounded-xl border p-6 hover:shadow-lg transition-all cursor-pointer ${isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            onClick={() => openProject(project)}
                        >
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    {project.type === 'complete' ? (
                                        <Folder className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <Globe className="w-5 h-5 text-green-500" />
                                    )}
                                    <div>
                                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {project.name}
                                        </h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        toggleProjectVisibility(project.id)
                                    }}
                                    className={`p-2 rounded-md transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {project.isPublic ? (
                                        <Globe className="w-4 h-4 text-blue-500" />
                                    ) : (
                                        <Lock className="w-4 h-4 text-gray-500" />
                                    )}
                                </button>
                            </div>

                            {/* Project Description */}
                            <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {project.description}
                            </p>

                            {/* Project Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Project Footer */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(project.updatedAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            openProject(project)
                                        }}
                                        className={`p-2 rounded-md transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        <Eye className="w-4 h-4 text-blue-500" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            deleteProject(project.id)
                                        }}
                                        className={`p-2 rounded-md transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        <Trash className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-200'
                            }`}>
                            <Folder className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            No {activeTab === 'complete' ? 'projects' : 'websites'} yet
                        </h3>
                        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {activeTab === 'complete'
                                ? 'Create your first AI project to get started'
                                : 'Publish your first website to make it public'
                            }
                        </p>
                        <button
                            onClick={createNewProject}
                            className="bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all flex items-center gap-2 mx-auto"
                        >
                            <Plus className="w-4 h-4" />
                            Create New Project
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectManager
