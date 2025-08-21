"use client"

import { AIGeneratorLayout } from "@/components/ai-generator/ai-generator-layout"
import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

function GeneratingContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState('analyzing')
    const [progress, setProgress] = useState(0)

    const prompt = searchParams.get('prompt') || "Create a professional dashboard"

    useEffect(() => {
        if (!prompt) {
            router.push('/')
            return
        }

        // Start the generating process
        const steps = ['analyzing', 'designing', 'coding', 'optimizing', 'preview']
        let currentStepIndex = 0
        let currentProgress = 0

        const interval = setInterval(() => {
            currentProgress += 2
            setProgress(currentProgress)

            if (currentProgress >= 20 && currentStepIndex < steps.length - 1) {
                currentStepIndex++
                setCurrentStep(steps[currentStepIndex])
            }

            if (currentProgress >= 100) {
                clearInterval(interval)
                // Don't redirect to result page - result will be shown in the same interface
            }
        }, 100)

        return () => clearInterval(interval)
    }, [prompt, router])

    const handleBack = () => {
        router.push('/')
    }



    return (
        <AIGeneratorLayout
            prompt={prompt}
            currentStep={currentStep}
            progress={progress}
            onBack={handleBack}
        />
    )
}

export default function GeneratingPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#F72353]"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        }>
            <GeneratingContent />
        </Suspense>
    )
} 