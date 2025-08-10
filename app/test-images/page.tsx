"use client"

import React from 'react'
import Image from 'next/image'

export default function TestImagesPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Image Test Page</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Test 1: Logo */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Logo Test</h2>
                        <div className="flex justify-center">
                            <Image
                                src="/images/Logo/buildro-logo.png"
                                alt="Buildro Logo"
                                width={200}
                                height={80}
                                className="h-20 w-auto"
                                priority
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Path: /images/Logo/buildro-logo.png</p>
                    </div>

                    {/* Test 2: Hero Background */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Hero Background Test</h2>
                        <div className="relative h-32 overflow-hidden rounded">
                            <Image
                                src="/images/Home/hero-bg.png"
                                alt="Hero Background"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Path: /images/Home/hero-bg.png</p>
                    </div>

                    {/* Test 3: AI Image */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">AI Image Test</h2>
                        <div className="flex justify-center">
                            <Image
                                src="/images/Home/ai-image.png"
                                alt="AI Image"
                                width={300}
                                height={200}
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Path: /images/Home/ai-image.png</p>
                    </div>

                    {/* Test 4: Login Image */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Login Image Test</h2>
                        <div className="flex justify-center">
                            <Image
                                src="/images/Login/login-image.png"
                                alt="Login Image"
                                width={300}
                                height={200}
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Path: /images/Login/login-image.png</p>
                    </div>
                </div>

                {/* Debug Info */}
                <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
                        <p><strong>Base URL:</strong> {typeof window !== 'undefined' ? window.location.origin : 'Server-side'}</p>
                        <p><strong>User Agent:</strong> {typeof navigator !== 'undefined' ? navigator.userAgent : 'Server-side'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 