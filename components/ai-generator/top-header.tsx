"use client"

import React from 'react'
import { ArrowLeft, Share2, Target, Eye, Code, Play, Folder, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TopHeaderProps {
    onBack: () => void
}

export function TopHeader({ onBack }: TopHeaderProps) {
    return (
        <div className="bg-card border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                                Project: <span className="font-medium text-foreground">buildro-ai-project</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Invite
                        </Button>
                        <Button variant="outline" size="sm">
                            <Target className="h-4 w-4 mr-2" />
                            Upgrade
                        </Button>
                        <Button size="sm" className="bg-destructive hover:bg-destructive/90">
                            Publish
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
