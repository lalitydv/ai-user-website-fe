"use client"

import React from 'react'
import { Eye, Code, Play, Folder } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { PreviewView } from './views/preview-view'
import { CodeView } from './views/code-view'
import { VideoView } from './views/video-view'
import { FilesView } from './views/files-view'

interface MainContentProps {
    activeView: 'preview' | 'code' | 'video' | 'files'
    selectedFile: string | null
    onFileSelect: (fileName: string) => void
    progress: number
}

export function MainContent({ activeView, selectedFile, onFileSelect, progress }: MainContentProps) {
    const views = [
        { id: 'preview', label: 'Preview', icon: Eye },
        { id: 'code', label: 'Code', icon: Code },
        { id: 'video', label: 'Video', icon: Play },
        { id: 'files', label: 'Files', icon: Folder }
    ]

    const renderView = () => {
        switch (activeView) {
            case 'preview':
                return <PreviewView progress={progress} />
            case 'code':
                return <CodeView selectedFile={selectedFile} />
            case 'video':
                return <VideoView />
            case 'files':
                return <FilesView selectedFile={selectedFile} onFileSelect={onFileSelect} />
            default:
                return <PreviewView progress={progress} />
        }
    }

    return (
        <div className="flex-1 flex flex-col">
            {/* View Toggle Buttons */}
            <div className="bg-card border-b border-border p-4">
                <div className="flex items-center space-x-2">
                    {views.map((view) => {
                        const Icon = view.icon
                        const isActive = activeView === view.id

                        return (
                            <Button
                                key={view.id}
                                variant={isActive ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => onViewChange(view.id as 'preview' | 'code' | 'video' | 'files')}
                                className={isActive ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] text-white' : ''}
                            >
                                <Icon className="h-4 w-4 mr-2" />
                                {view.label}
                            </Button>
                        )
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 border-r border-border">
                {renderView()}
            </div>
        </div>
    )
}
