"use client"

import React from 'react'
import { FileText, Palette, Code, Zap, Eye } from 'lucide-react'

interface ProgressStepsProps {
    currentStep: string
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
    const steps = [
        { id: 'analyzing', label: 'Analyzing your prompt...', icon: FileText },
        { id: 'designing', label: 'Designing the layout...', icon: Palette },
        { id: 'coding', label: 'Generating code...', icon: Code },
        { id: 'optimizing', label: 'Optimizing performance...', icon: Zap },
        { id: 'preview', label: 'Preparing preview...', icon: Eye }
    ]

    const currentStepIndex = steps.findIndex(step => step.id === currentStep)

    return (
        <div className="bg-gradient-to-r from-[hsl(var(--brand-pink))]/10 to-[hsl(var(--brand-blue))]/10 border border-[hsl(var(--brand-pink))]/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground mb-3 font-medium">
                Building your project...
            </p>
            <div className="space-y-3">
                {steps.map((step, index) => {
                    const Icon = step.icon
                    const isActive = step.id === currentStep
                    const isCompleted = index < currentStepIndex

                    return (
                        <div key={step.id} className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCompleted
                                    ? 'bg-green-500'
                                    : isActive
                                        ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]'
                                        : 'bg-muted'
                                }`}>
                                {isCompleted ? (
                                    <span className="text-white text-xs">✓</span>
                                ) : (
                                    <Icon className="h-3 w-3 text-white" />
                                )}
                            </div>
                            <span className={`text-sm ${isActive
                                    ? 'text-[hsl(var(--brand-pink))] font-medium'
                                    : isCompleted
                                        ? 'text-green-600 dark:text-green-400'
                                        : 'text-muted-foreground'
                                }`}>
                                {step.label}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
