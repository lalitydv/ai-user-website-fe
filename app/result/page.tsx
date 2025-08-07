"use client"

import { ResultPreview } from "@/components/result-preview"
import { useSearchParams, useRouter } from "next/navigation"
import { Suspense } from "react"

function ResultContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const prompt = searchParams.get('prompt') || "Create a professional dashboard"

    const handleBack = () => {
        router.push('/')
    }

    return (
        <ResultPreview
            prompt={prompt}
            onBack={handleBack}
        />
    )
}

export default function ResultPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#F72353]"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        }>
            <ResultContent />
        </Suspense>
    )
} 