"use client"

import React from 'react'
import { Heart } from 'lucide-react'

interface PreviewViewProps {
    progress: number
}

export function PreviewView({ progress }: PreviewViewProps) {
    return (
        <div className="h-full flex items-center justify-center bg-muted/30">
            <div className="text-center">
                <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 border-4 border-[hsl(var(--brand-pink))]/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-24 h-24 border-4 border-[hsl(var(--brand-blue))]/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Building your website...
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                    Creating a beautiful design with modern styling
                </p>

                <div className="w-full max-w-md mx-auto mb-8">
                    <div className="bg-muted rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-sm text-muted-foreground">{progress}% complete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
