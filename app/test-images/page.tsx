"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestImagesPage() {
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})
    const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({})
    const [isProduction, setIsProduction] = useState(false)

    useEffect(() => {
        // Check if we're in production
        setIsProduction(process.env.NODE_ENV === 'production')
    }, [])

    const handleImageError = (imagePath: string) => {
        setImageErrors(prev => ({ ...prev, [imagePath]: true }))
        console.error(`Failed to load image: ${imagePath}`)
    }

    const handleVideoError = (videoPath: string) => {
        setVideoErrors(prev => ({ ...prev, [videoPath]: true }))
        console.error(`Failed to load video: ${videoPath}`)
    }

    const testImages = [
        {
            path: "/images/Logo/buildro-logo.png",
            alt: "Buildro Logo",
            width: 200,
            height: 80
        },
        {
            path: "/images/Logo/buil-ai.png",
            alt: "Buildro AI Logo",
            width: 200,
            height: 80
        },
        {
            path: "/images/Home/hero-bg.png",
            alt: "Hero Background",
            width: 400,
            height: 300
        },
        {
            path: "/images/Home/ai-image.png",
            alt: "AI Image",
            width: 300,
            height: 200
        },
        {
            path: "/images/Login/login-image.png",
            alt: "Login Image",
            width: 300,
            height: 200
        }
    ]

    const testVideos = [
        {
            path: "/videos/footer-video-bg.mp4",
            alt: "Footer Video Background"
        },
        {
            path: "/videos/215500.mp4",
            alt: "Test Video"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Image & Video Test Page</h1>

                {/* Environment Info */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4">Environment Information</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <strong>Environment:</strong> {isProduction ? 'Production' : 'Development'}
                        </div>
                        <div>
                            <strong>Base URL:</strong> {typeof window !== 'undefined' ? window.location.origin : 'Unknown'}
                        </div>
                        <div>
                            <strong>User Agent:</strong> {typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'}
                        </div>
                        <div>
                            <strong>Timestamp:</strong> {new Date().toISOString()}
                        </div>
                    </div>
                </div>

                {/* Image Tests */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Image Tests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testImages.map((image, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <h3 className="text-lg font-medium mb-3">{image.alt}</h3>
                                <div className="flex justify-center mb-3">
                                    {!imageErrors[image.path] ? (
                                        <Image
                                            src={image.path}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className="max-w-full h-auto border rounded"
                                            onError={() => handleImageError(image.path)}
                                            priority={index < 2}
                                        />
                                    ) : (
                                        <div className="w-full h-32 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center text-red-600">
                                            ❌ Failed to load
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <div><strong>Path:</strong> {image.path}</div>
                                    <div><strong>Status:</strong> {imageErrors[image.path] ? '❌ Error' : '✅ Loaded'}</div>
                                    <div><strong>Dimensions:</strong> {image.width}x{image.height}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Tests */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Video Tests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testVideos.map((video, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <h3 className="text-lg font-medium mb-3">{video.alt}</h3>
                                <div className="mb-3">
                                    {!videoErrors[video.path] ? (
                                        <video
                                            src={video.path}
                                            controls
                                            className="w-full h-48 object-cover rounded border"
                                            onError={() => handleVideoError(video.path)}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="w-full h-48 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center text-red-600">
                                            ❌ Failed to load video
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <div><strong>Path:</strong> {video.path}</div>
                                    <div><strong>Status:</strong> {videoErrors[video.path] ? '❌ Error' : '✅ Loaded'}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Debug Information */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Debug Information</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Failed Images:</h3>
                            {Object.keys(imageErrors).length > 0 ? (
                                <ul className="list-disc list-inside text-red-600">
                                    {Object.keys(imageErrors).map(path => (
                                        <li key={path}>{path}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-green-600">✅ All images loaded successfully</p>
                            )}
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Failed Videos:</h3>
                            {Object.keys(videoErrors).length > 0 ? (
                                <ul className="list-disc list-inside text-red-600">
                                    {Object.keys(videoErrors).map(path => (
                                        <li key={path}>{path}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-green-600">✅ All videos loaded successfully</p>
                            )}
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Troubleshooting Steps:</h3>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                                <li>Check browser console for error messages</li>
                                <li>Verify file paths in public folder</li>
                                <li>Check Vercel deployment logs</li>
                                <li>Ensure files are committed to git</li>
                                <li>Verify next.config.js image configuration</li>
                                <li>Check vercel.json headers configuration</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Network Test */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Network Test</h2>
                    <div className="space-y-4">
                        <button
                            onClick={() => {
                                testImages.forEach(img => {
                                    fetch(img.path)
                                        .then(response => {
                                            console.log(`${img.path}: ${response.status} ${response.statusText}`)
                                        })
                                        .catch(error => {
                                            console.error(`${img.path}: ${error.message}`)
                                        })
                                })
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Test Image URLs
                        </button>

                        <button
                            onClick={() => {
                                testVideos.forEach(video => {
                                    fetch(video.path)
                                        .then(response => {
                                            console.log(`${video.path}: ${response.status} ${response.statusText}`)
                                        })
                                        .catch(error => {
                                            console.error(`${video.path}: ${error.message}`)
                                        })
                                })
                            }}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
                        >
                            Test Video URLs
                        </button>

                        <p className="text-sm text-gray-600">
                            Click the buttons above and check the browser console for network response details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 