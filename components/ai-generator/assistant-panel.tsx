"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Github, BookOpen, Sparkles, Eye, Code, ChevronRight, Zap, Settings, Users, Database } from 'lucide-react'

interface AssistantPanelProps {
    projectTitle: string
    onPreview: () => void
    onGenerateCode: () => void
    onConnectGithub: () => void
    onManageKnowledge: () => void
}

export function AssistantPanel({
    projectTitle,
    onPreview,
    onGenerateCode,
    onConnectGithub,
    onManageKnowledge
}: AssistantPanelProps) {
    const [prompt, setPrompt] = useState('Create a modern dashboard for a SaaS company with user management, analytics, and billing features')

    return (
        <div className="w-full lg:w-96 h-full bg-[hsl(var(--surface))] border-r border-[hsl(var(--border))] shadow-[hsl(var(--shadow-soft))] overflow-y-auto">
            <div className="p-6 space-y-6">
                {/* Project Header */}
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[hsl(var(--success))] rounded-full"></div>
                        <span className="text-xs text-[hsl(var(--text-muted))] font-medium">LIVE</span>
                    </div>
                    <h1 className="text-xl font-semibold text-[hsl(var(--text))]">{projectTitle}</h1>
                    <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">
                        A comprehensive SaaS dashboard with modern UI components, real-time data visualization, and enterprise-grade features.
                    </p>
                </div>

                {/* Prompt Box */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-[hsl(var(--text))]">What would you like to build?</label>
                        <Textarea
                            placeholder="Describe your application, features, and requirements..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-[120px] resize-none border-[hsl(var(--border))] focus:border-[hsl(var(--ring))] focus:ring-2 focus:ring-[hsl(var(--ring))] rounded-[hsl(var(--radius-md))] bg-[hsl(var(--surface))] text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-muted))]"
                        />
                        <div className="flex space-x-3">
                            <Button
                                onClick={onPreview}
                                size="sm"
                                className="flex-1 bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-600))] text-white shadow-[hsl(var(--shadow-soft))] hover:shadow-[hsl(var(--shadow-lg))] transition-all duration-200"
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                Preview Latest
                            </Button>
                            <Button
                                onClick={onGenerateCode}
                                size="sm"
                                variant="outline"
                                className="flex-1 border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200"
                            >
                                <Code className="h-4 w-4 mr-2" />
                                Generate Code
                            </Button>
                        </div>
                    </div>
                </div>

                {/* What's Next */}
                <div className="space-y-3">
                    <h3 className="text-sm font-medium text-[hsl(var(--text))] flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-[hsl(var(--brand))]" />
                        What's next?
                    </h3>
                    <div className="space-y-2">
                        {[
                            'Refine & Customize Components',
                            'Master Advanced Prompting',
                            'Connect to Database & APIs',
                            'Deploy to Production'
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm text-[hsl(var(--text-muted))]">
                                <CheckCircle className="h-3 w-3 text-[hsl(var(--success))]" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Knowledge Actions */}
                <div className="space-y-3">
                    <h3 className="text-sm font-medium text-[hsl(var(--text))]">Connect & Integrate</h3>
                    <div className="space-y-2">
                        <Button
                            onClick={onConnectGithub}
                            variant="outline"
                            size="sm"
                            className="w-full justify-start border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200"
                        >
                            <Github className="h-4 w-4 mr-2" />
                            Connect to GitHub
                            <ChevronRight className="h-4 w-4 ml-auto" />
                        </Button>
                        <Button
                            onClick={onManageKnowledge}
                            variant="outline"
                            size="sm"
                            className="w-full justify-start border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200"
                        >
                            <Database className="h-4 w-4 mr-2" />
                            Connect Database
                            <ChevronRight className="h-4 w-4 ml-auto" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200"
                        >
                            <Users className="h-4 w-4 mr-2" />
                            Team Collaboration
                            <ChevronRight className="h-4 w-4 ml-auto" />
                        </Button>
                    </div>
                </div>

                {/* Bottom Chat Interface */}
                <div className="pt-4 border-t border-[hsl(var(--border))]">
                    <div className="space-y-3">
                        <Textarea
                            placeholder="Ask Buildro anything about your project..."
                            className="min-h-[60px] resize-none border-[hsl(var(--border))] focus:border-[hsl(var(--ring))] focus:ring-2 focus:ring-[hsl(var(--ring))] rounded-[hsl(var(--radius-md))] bg-[hsl(var(--surface))] text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-muted))]"
                        />
                        <div className="flex space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--ring))] transition-all duration-200"
                            >
                                <Settings className="h-4 w-4 mr-2" />
                                Settings
                            </Button>
                            <Button
                                size="sm"
                                className="flex-1 bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-600))] text-white shadow-[hsl(var(--shadow-soft))] hover:shadow-[hsl(var(--shadow-lg))] transition-all duration-200"
                            >
                                <Zap className="h-4 w-4 mr-2" />
                                Ask AI
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
