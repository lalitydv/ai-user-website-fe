"use client"

import React from 'react'
import { X, Circle } from 'lucide-react'

interface WidgetCardProps {
    title: string
    filename?: string
    status?: 'success' | 'warning' | 'error'
    onClose?: () => void
    children: React.ReactNode
    className?: string
}

export function WidgetCard({
    title,
    filename,
    status = 'success',
    onClose,
    children,
    className = ''
}: WidgetCardProps) {
    const statusColors = {
        success: 'bg-[hsl(var(--success))]',
        warning: 'bg-[hsl(var(--warning))]',
        error: 'bg-[hsl(var(--danger))]'
    }

    return (
        <div className={`
      bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-[hsl(var(--radius-2xl))] 
      shadow-[hsl(var(--shadow-lg))] hover:shadow-[hsl(var(--shadow-lg))] 
      transition-all duration-200 hover:-translate-y-1
      ${className}
    `}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--border))]">
                <div className="flex items-center space-x-2">
                    {filename && (
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
                            <span className="text-sm font-medium text-[hsl(var(--text))]">{filename}</span>
                        </div>
                    )}
                    <h3 className="text-sm font-semibold text-[hsl(var(--text))]">{title}</h3>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-[hsl(var(--surface-2))] rounded-[hsl(var(--radius-sm))] transition-colors"
                    >
                        <X className="h-4 w-4 text-[hsl(var(--text-muted))]" />
                    </button>
                )}
            </div>

            {/* Body */}
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}
