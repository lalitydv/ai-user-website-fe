"use client"

import { useState } from "react"
import Image from "next/image"

export function DebugImages() {
    const [results, setResults] = useState<{ [key: string]: string }>({})

    const testImages = [
        "/images/Logo/buildro-logo.png",
        "/images/Logo/buil-ai.png",
        "/images/Home/ai-image.png",
        "/images/Login/login-image.png",
        "/placeholder-logo.png"
    ]

    const testImageLoading = async (src: string) => {
        try {
            // Test 1: Direct fetch
            const response = await fetch(src)
            const status = response.status
            const contentType = response.headers.get('content-type')

            // Test 2: Create Image object
            const img = new window.Image()
            const imgPromise = new Promise((resolve, reject) => {
                img.onload = () => resolve('loaded')
                img.onerror = () => reject('failed')
                img.src = src
            })

            let imgResult = 'unknown'
            try {
                await imgPromise
                imgResult = 'loaded'
            } catch {
                imgResult = 'failed'
            }

            setResults(prev => ({
                ...prev,
                [src]: `Fetch: ${status} (${contentType}), Image: ${imgResult}`
            }))

            console.log(`Image ${src}:`, {
                fetchStatus: status,
                contentType,
                imageLoad: imgResult
            })
        } catch (error) {
            setResults(prev => ({
                ...prev,
                [src]: `Error: ${error}`
            }))
            console.error(`Error testing ${src}:`, error)
        }
    }

    const testAllImages = () => {
        testImages.forEach(src => testImageLoading(src))
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Image Debug Page</h1>

            <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Debug Controls</h2>
                <button
                    onClick={testAllImages}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
                >
                    Test All Images
                </button>
                <button
                    onClick={() => setResults({})}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Clear Results
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testImages.map((src, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-900">
                        <h3 className="font-medium mb-2">Test {index + 1}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 break-all">{src}</p>

                        {/* Test with Next.js Image */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium mb-2">Next.js Image Component:</h4>
                            <div className="relative w-full h-24 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`Test image ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    onLoad={() => console.log(`✅ Next.js Image loaded: ${src}`)}
                                    onError={(e) => console.error(`❌ Next.js Image failed: ${src}`, e)}
                                />
                            </div>
                        </div>

                        {/* Test with regular img tag */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium mb-2">Regular img Tag:</h4>
                            <img
                                src={src}
                                alt={`Test image ${index + 1}`}
                                className="w-full h-24 object-contain bg-gray-100 dark:bg-gray-800 rounded"
                                onLoad={() => console.log(`✅ Regular img loaded: ${src}`)}
                                onError={(e) => console.error(`❌ Regular img failed: ${src}`, e)}
                            />
                        </div>

                        {/* Test button */}
                        <div className="mb-3">
                            <button
                                onClick={() => testImageLoading(src)}
                                className="text-sm px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Test Load
                            </button>
                        </div>

                        {/* Results */}
                        {results[src] && (
                            <div className="text-xs p-2 bg-gray-100 dark:bg-gray-800 rounded">
                                <strong>Results:</strong> {results[src]}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Open browser console to see detailed logs</li>
                    <li>Check Network tab for failed requests</li>
                    <li>Compare Next.js Image vs regular img tag behavior</li>
                    <li>Verify image paths are correct</li>
                    <li>Check if images are being served by Vercel</li>
                </ol>
            </div>
        </div>
    )
} 