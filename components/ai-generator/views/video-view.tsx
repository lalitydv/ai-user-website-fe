"use client"

import React from 'react'
import { Play } from 'lucide-react'

export function VideoView() {
    return (
        <div className="h-full flex items-center justify-center bg-muted/30">
            <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Video Preview</h3>
                <p className="text-muted-foreground mb-6">
                    Video preview will be available once generation is complete
                </p>
                <div className="w-32 h-20 bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                    <Play className="h-6 w-6 text-muted-foreground" />
                </div>
            </div>
        </div>
    )
}
