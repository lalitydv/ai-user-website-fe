"use client"

import React from 'react'
import { Upload, Code, FileText, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FilesViewProps {
    selectedFile: string | null
    onFileSelect: (fileName: string) => void
}

export function FilesView({ selectedFile, onFileSelect }: FilesViewProps) {
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

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'tsx':
            case 'ts':
                return <Code className="h-4 w-4 text-blue-500" />
            case 'css':
                return <FileText className="h-4 w-4 text-purple-500" />
            case 'json':
                return <FileText className="h-4 w-4 text-yellow-500" />
            case 'config':
                return <Settings className="h-4 w-4 text-green-500" />
            default:
                return <FileText className="h-4 w-4 text-muted-foreground" />
        }
    }

    return (
        <div className="h-full bg-background p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Project Files</h3>
                <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                </Button>
            </div>

            <div className="space-y-2">
                {generatedFiles.map((file, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${selectedFile === file.name
                                ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))]/10 to-[hsl(var(--brand-blue))]/10 border border-[hsl(var(--brand-pink))]/20'
                                : 'hover:bg-muted/50'
                            }`}
                        onClick={() => onFileSelect(file.name)}
                    >
                        <div className="flex items-center space-x-3">
                            {getFileIcon(file.type)}
                            <span className="text-sm text-foreground">{file.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                            {file.type}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}
