"use client"

import React from 'react'
import { ArrowLeft, Share2, Target, Eye, Code, Play, Folder, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TopHeaderProps {
    onBack: () => void
}

export function TopHeader({ onBack }: TopHeaderProps) {
    return (
        <div className="fixed top-4 left-4 right-4 z-[100]">
            <div className="bg-[hsl(var(--surface))]/95 backdrop-blur-sm rounded-[hsl(var(--radius-lg))] p-4 mx-auto border border-[hsl(var(--border))] shadow-[hsl(var(--shadow-soft))]">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--brand))] transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back</span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-600))] rounded-[hsl(var(--radius-md))] flex items-center justify-center">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="text-sm text-[hsl(var(--text-muted))]">
                                Project: <span className="font-medium text-[hsl(var(--text))]">buildro-ai-project</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-[hsl(var(--brand))] text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))] hover:text-white bg-transparent transition-all duration-200"
                        >
                            <Share2 className="h-4 w-4 mr-2" />
                            Invite
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-[hsl(var(--brand))] text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))] hover:text-white bg-transparent transition-all duration-200"
                        >
                            <Target className="h-4 w-4 mr-2" />
                            Upgrade
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-600))] hover:from-[hsl(var(--brand))/90] hover:to-[hsl(var(--brand-600))/90] text-white shadow-[hsl(var(--shadow-soft))] hover:shadow-[hsl(var(--shadow-lg))] transition-all duration-200"
                        >
                            Publish
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
