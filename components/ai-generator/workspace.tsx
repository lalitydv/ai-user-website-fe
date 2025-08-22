"use client"

import React, { useState } from 'react'
import { AppBar } from './app-bar'
import { AssistantPanel } from './assistant-panel'
import { CanvasGradient } from './canvas-gradient'
import { CodeCard, SampleCodeCard } from './code-card'
import { PreviewCard } from './preview-card'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight, Sparkles, Zap, Code, Eye } from 'lucide-react'

interface WorkspaceProps {
    projectTitle?: string
}

export function Workspace({ projectTitle = "SaaS Dashboard - Project" }: WorkspaceProps) {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [showCodeWidget, setShowCodeWidget] = useState(false)
    const [showPreviewWidget, setShowPreviewWidget] = useState(false)

    const handlePreview = () => {
        setActiveTab('preview')
        setShowPreviewWidget(true)
    }

    const handleGenerateCode = () => {
        setActiveTab('code')
        setShowCodeWidget(true)
    }

    const handlePublish = () => {
        // Handle publish action
        console.log('Publishing...')
    }

    const handleConnectGithub = () => {
        // Handle GitHub connection
        console.log('Connecting to GitHub...')
    }

    const handleManageKnowledge = () => {
        // Handle knowledge management
        console.log('Managing knowledge...')
    }

    return (
        <div className="h-screen bg-[hsl(var(--bg))] overflow-hidden">
            {/* App Bar */}
            <AppBar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                deviceMode={deviceMode}
                onDeviceChange={setDeviceMode}
                onPublish={handlePublish}
            />

            {/* Main Layout */}
            <div className="flex h-full pt-16">
                {/* Desktop/Tablet: Left Panel */}
                <div className="hidden lg:block">
                    <AssistantPanel
                        projectTitle={projectTitle}
                        onPreview={handlePreview}
                        onGenerateCode={handleGenerateCode}
                        onConnectGithub={handleConnectGithub}
                        onManageKnowledge={handleManageKnowledge}
                    />
                </div>

                {/* Mobile: Hamburger Menu */}
                <div className="lg:hidden">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="fixed top-20 left-4 z-50 lg:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Canvas Area */}
                <CanvasGradient>
                    {/* Default Content */}
                    {!showCodeWidget && !showPreviewWidget && (
                        <div className="text-center space-y-8 max-w-2xl">
                            <div className="space-y-6">
                                <div className="w-32 h-32 bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-600))] rounded-[hsl(var(--radius-2xl))] flex items-center justify-center mx-auto shadow-[hsl(var(--shadow-lg))]">
                                    <Sparkles className="h-16 w-16 text-white" />
                                </div>

                                <div className="space-y-4">
                                    <h1 className="text-4xl font-bold text-[hsl(var(--text))] leading-tight">
                                        Build Your Next App with AI
                                    </h1>
                                    <p className="text-xl text-[hsl(var(--text-muted))] leading-relaxed max-w-xl mx-auto">
                                        Transform your ideas into fully functional applications using the power of artificial intelligence.
                                        Buildro generates clean, production-ready code for modern web applications.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button
                                        onClick={handlePreview}
                                        size="lg"
                                        className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-600))] text-white shadow-[hsl(var(--shadow-lg))] hover:shadow-[hsl(var(--shadow-lg))] transition-all duration-200 px-8 py-3 text-lg"
                                    >
                                        <Eye className="h-5 w-5 mr-2" />
                                        Start Building
                                        <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>

                                    <Button
                                        onClick={handleGenerateCode}
                                        size="lg"
                                        variant="outline"
                                        className="border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200 px-8 py-3 text-lg"
                                    >
                                        <Code className="h-5 w-5 mr-2" />
                                        View Examples
                                    </Button>
                                </div>
                            </div>

                            {/* Feature Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                {[
                                    {
                                        icon: Zap,
                                        title: "AI-Powered",
                                        description: "Generate complete applications from natural language descriptions"
                                    },
                                    {
                                        icon: Code,
                                        title: "Production Ready",
                                        description: "Clean, maintainable code that follows best practices"
                                    },
                                    {
                                        icon: Eye,
                                        title: "Real-time Preview",
                                        description: "See your changes instantly across all device sizes"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="text-center space-y-3 p-6 bg-[hsl(var(--surface))] rounded-[hsl(var(--radius-lg))] border border-[hsl(var(--border))] shadow-[hsl(var(--shadow-soft))]">
                                        <div className="w-12 h-12 bg-[hsl(var(--brand))/10] rounded-[hsl(var(--radius-lg))] flex items-center justify-center mx-auto">
                                            <feature.icon className="h-6 w-6 text-[hsl(var(--brand))]" />
                                        </div>
                                        <h3 className="font-semibold text-[hsl(var(--text))]">{feature.title}</h3>
                                        <p className="text-sm text-[hsl(var(--text-muted))]">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Floating Widgets */}
                    {showCodeWidget && (
                        <div className="absolute top-8 right-8">
                            <SampleCodeCard
                                onClose={() => setShowCodeWidget(false)}
                            />
                        </div>
                    )}

                    {showPreviewWidget && (
                        <div className="absolute top-8 right-8">
                            <PreviewCard
                                onClose={() => setShowPreviewWidget(false)}
                                deviceMode={deviceMode}
                                onDeviceChange={setDeviceMode}
                            />
                        </div>
                    )}
                </CanvasGradient>
            </div>

            {/* Mobile Slide-over Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[200] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Slide-over Panel */}
                    <div className="absolute left-0 top-0 h-full w-80 max-w-[90vw] bg-[hsl(var(--surface))] shadow-[hsl(var(--shadow-lg))] transform transition-transform duration-300 ease-out">
                        <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--border))]">
                            <h2 className="text-lg font-semibold text-[hsl(var(--text))]">Menu</h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="p-4">
                            <AssistantPanel
                                projectTitle={projectTitle}
                                onPreview={handlePreview}
                                onGenerateCode={handleGenerateCode}
                                onConnectGithub={handleConnectGithub}
                                onManageKnowledge={handleManageKnowledge}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
