"use client"

import React from 'react'
import { Eye, Code, Download, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RightPanelProps {
    activeView: string
    selectedFile: string | null
    progress: number
}

export function RightPanel({ activeView, selectedFile, progress }: RightPanelProps) {
    const generatedFiles = [
        { name: 'App.tsx', type: 'tsx', path: 'src/App.tsx' },
        { name: 'index.css', type: 'css', path: 'src/index.css' },
        { name: 'components/Navbar.tsx', type: 'tsx', path: 'src/components/Navbar.tsx' },
        { name: 'components/Hero.tsx', type: 'tsx', path: 'src/components/Hero.tsx' },
        { name: 'components/Features.tsx', type: 'tsx', path: 'src/components/Features.tsx' },
        { name: 'components/Footer.tsx', type: 'tsx', path: 'src/components/Footer.tsx' },
        { name: 'tailwind.config.js', type: 'config', path: 'tailwind.config.js' },
        { name: 'package.json', type: 'json', path: 'package.json' }
    ]

    return (
        <div className="w-80 bg-card border-l border-border">
            {/* Project Info */}
            <div className="p-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Project Info</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Active
                        </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Files</span>
                        <span className="text-sm font-medium text-foreground">{generatedFiles.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium text-foreground">{progress}%</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Actions</h3>
                <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Code className="h-4 w-4 mr-2" />
                        View Code
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                </div>
            </div>

            {/* Current View Info */}
            <div className="p-4 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-2">Current View</h3>
                <div className="text-sm text-muted-foreground">
                    {activeView === 'preview' && 'Preview mode - View your generated website'}
                    {activeView === 'code' && 'Code mode - View and edit generated code'}
                    {activeView === 'video' && 'Video mode - Preview video content'}
                    {activeView === 'files' && 'Files mode - Manage project files'}
                </div>
            </div>
        </div>
    )
}
