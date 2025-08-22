"use client"

import React from 'react'

interface CanvasGradientProps {
    children: React.ReactNode
}

export function CanvasGradient({ children }: CanvasGradientProps) {
    return (
        <div className="flex-1 h-full relative overflow-hidden bg-[hsl(var(--bg))]">
            {/* Gradient Background with Concentric Rings */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `
              radial-gradient(circle at 20% 20%, hsl(var(--brand) / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.06) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, hsl(var(--brand) / 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, hsl(var(--accent) / 0.04) 0%, transparent 50%)
            `
                    }}
                />

                {/* Additional subtle gradients */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `
              radial-gradient(circle at 10% 90%, hsl(var(--brand) / 0.03) 0%, transparent 40%),
              radial-gradient(circle at 90% 10%, hsl(var(--accent) / 0.02) 0%, transparent 40%)
            `
                    }}
                />
            </div>

            {/* Content Area */}
            <div className="relative z-10 h-full p-6 lg:p-10">
                <div className="h-full flex items-center justify-center">
                    {children}
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle floating dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(var(--brand) / 0.1)] rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[hsl(var(--accent) / 0.1)] rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[hsl(var(--brand) / 0.08)] rounded-full animate-pulse delay-500" />
            </div>
        </div>
    )
}
