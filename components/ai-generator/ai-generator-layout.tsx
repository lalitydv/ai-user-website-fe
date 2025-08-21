"use client"

import React, { useState } from 'react'
import { ArrowLeft, Share2, Target, Eye, Code, Play, Folder, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TopHeader } from './top-header'
import { LeftSidebar } from './left-sidebar'
import { MainContent } from './main-content'
import { RightPanel } from './right-panel'

interface AIGeneratorLayoutProps {
    prompt: string
    currentStep: string
    progress: number
    onBack: () => void
}

export function AIGeneratorLayout({ prompt, currentStep, progress, onBack }: AIGeneratorLayoutProps) {
    const [activeView, setActiveView] = useState<'preview' | 'code' | 'video' | 'files'>('preview')
    const [selectedFile, setSelectedFile] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-background">
            <TopHeader onBack={onBack} />

            <div className="h-[calc(100vh-64px)] flex">
                <LeftSidebar
                    prompt={prompt}
                    currentStep={currentStep}
                    progress={progress}
                    activeView={activeView}
                    onViewChange={setActiveView}
                />

                <MainContent
                    activeView={activeView}
                    selectedFile={selectedFile}
                    onFileSelect={setSelectedFile}
                    progress={progress}
                />

                <RightPanel
                    activeView={activeView}
                    selectedFile={selectedFile}
                    progress={progress}
                />
            </div>
        </div>
    )
}
