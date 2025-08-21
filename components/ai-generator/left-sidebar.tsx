"use client"

import React, { useState } from 'react'
import { FileText, Palette, Code, Zap, Eye, Heart, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProgressSteps } from './progress-steps'
import { ChatInterface } from './chat-interface'

interface LeftSidebarProps {
    prompt: string
    currentStep: string
    progress: number
    activeView: string
    onViewChange: (view: 'preview' | 'code' | 'video' | 'files') => void
}

export function LeftSidebar({ prompt, currentStep, progress, activeView, onViewChange }: LeftSidebarProps) {
    const [isChatExpanded, setIsChatExpanded] = useState(true)

    return (
        <div className="w-80 bg-card border-r border-border flex flex-col">
            {/* Project Header */}
            <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground">hello-world-hello-73</h2>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <ChevronDown className="h-4 w-4" />
                    </button>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                        {prompt}
                    </p>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="flex-1 overflow-y-auto p-6">
                <ProgressSteps currentStep={currentStep} />

                {/* What's Next Section */}
                <div className="mt-6 space-y-3">
                    <h3 className="text-sm font-medium text-foreground">What's next?</h3>
                    <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>Refine & Customize: Tweak the design, animations, and layouts via prompts or visual edits.</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>Master Prompting: Use 'chat mode' to plan out your project without making edits.</span>
                        </div>
                        <div className="flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>GitHub Sync: Transfer your project's code to GitHub for two-way sync of edits.</span>
                        </div>
                    </div>
                </div>

                {/* Integration Section */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[hsl(var(--brand-pink))]/10 to-[hsl(var(--brand-blue))]/10 border border-[hsl(var(--brand-pink))]/20 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-3">
                        Need to save information, add your accounts, connect with other services?
                    </p>
                    <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                            Connect Supabase
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                            Visit docs
                        </Button>
                    </div>
                </div>
            </div>

            {/* Chat Interface */}
            <ChatInterface isExpanded={isChatExpanded} onToggle={() => setIsChatExpanded(!isChatExpanded)} />
        </div>
    )
}
