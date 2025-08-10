"use client"

import Image from "next/image"
import { useState } from "react"

export function TestImages() {
    const [imageError, setImageError] = useState<string | null>(null)
    const [imageSuccess, setImageSuccess] = useState<string | null>(null)

    const testImages = [
        "/images/Logo/buildro-logo.png",
        "/images/Logo/buil-ai.png",
        "/images/Home/ai-image.png",
        "/images/Login/login-image.png",
        "/placeholder-logo.png"
    ]

    const handleImageLoad = (src: string) => {
        setImageSuccess(src)
        setImageError(null)
        console.log(`✅ Image loaded successfully: ${src}`)
    }

    const handleImageError = (src: string) => {
        setImageError(src)
        setImageSuccess(null)
        console.error(`❌ Image failed to load: ${src}`)
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Image Test Page</h1>

            <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Debug Info</h2>
                {imageSuccess && (
                    <p className="text-green-600 dark:text-green-400 mb-2">
                        ✅ Last successful image: {imageSuccess}
                    </p>
                )}
                {imageError && (
                    <p className="text-red-600 dark:text-red-400 mb-2">
                        ❌ Last failed image: {imageError}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testImages.map((src, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-900">
                        <h3 className="font-medium mb-2">Test {index + 1}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 break-all">{src}</p>

                        <div className="relative w-full h-32 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                            <Image
                                src={src}
                                alt={`Test image ${index + 1}`}
                                fill
                                className="object-contain"
                                onLoad={() => handleImageLoad(src)}
                                onError={() => handleImageError(src)}
                            />
                        </div>

                        <div className="mt-3">
                            <button
                                onClick={() => {
                                    const img = new window.Image()
                                    img.onload = () => handleImageLoad(src)
                                    img.onerror = () => handleImageError(src)
                                    img.src = src
                                }}
                                className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Test Load
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Check browser console for errors</li>
                    <li>Verify image files exist in public directory</li>
                    <li>Check network tab for failed requests</li>
                    <li>Verify Next.js Image component configuration</li>
                    <li>Check if images are being served by Vercel</li>
                </ol>
            </div>
        </div>
    )
} 