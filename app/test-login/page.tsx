"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, AlertCircle } from "lucide-react"

export default function TestLoginPage() {
    const { user, loading, signInWithGoogle, signInWithGithub } = useAuth()
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const [isGithubLoading, setIsGithubLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true)
        setError(null)
        try {
            await signInWithGoogle()
        } catch (err) {
            setError(`Google sign-in failed: ${err}`)
            console.error('Google sign-in error:', err)
        } finally {
            setIsGoogleLoading(false)
        }
    }

    const handleGithubSignIn = async () => {
        setIsGithubLoading(true)
        setError(null)
        try {
            await signInWithGithub()
        } catch (err) {
            setError(`GitHub sign-in failed: ${err}`)
            console.error('GitHub sign-in error:', err)
        } finally {
            setIsGithubLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        🔐 Authentication Test
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Test Google and GitHub authentication
                    </p>
                </div>

                {/* Status Card */}
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            {loading ? (
                                <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
                            ) : user ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                                <XCircle className="h-5 w-5 text-gray-400" />
                            )}
                            <span>Authentication Status</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Loading authentication state...
                            </p>
                        ) : user ? (
                            <div className="space-y-2">
                                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                    ✅ Logged In Successfully!
                                </p>
                                <div className="text-xs text-gray-500 space-y-1">
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Name:</strong> {user.user_metadata?.full_name || user.user_metadata?.name || "Not provided"}</p>
                                    <p><strong>Provider:</strong> {user.app_metadata?.provider || "Unknown"}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                ❌ Not logged in
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Error Display */}
                {error && (
                    <Card className="mb-6 border-red-200 dark:border-red-800">
                        <CardContent className="pt-6">
                            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                                <AlertCircle className="h-5 w-5" />
                                <span className="text-sm font-medium">Error:</span>
                            </div>
                            <p className="text-sm text-red-600 dark:text-red-400 mt-2">{error}</p>
                        </CardContent>
                    </Card>
                )}

                {/* Login Buttons */}
                {!user && (
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Test Authentication</CardTitle>
                                <CardDescription>
                                    Click the buttons below to test Google and GitHub authentication
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Google Sign In */}
                                <Button
                                    onClick={handleGoogleSignIn}
                                    disabled={isGoogleLoading || isGithubLoading}
                                    className="w-full h-12 text-base"
                                    variant="outline"
                                >
                                    {isGoogleLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Testing Google Sign In...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            Test Google Sign In
                                        </>
                                    )}
                                </Button>

                                {/* GitHub Sign In */}
                                <Button
                                    onClick={handleGithubSignIn}
                                    disabled={isGoogleLoading || isGithubLoading}
                                    className="w-full h-12 text-base"
                                    variant="outline"
                                >
                                    {isGithubLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Testing GitHub Sign In...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Test GitHub Sign In
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Success Message */}
                {user && (
                    <Card className="border-green-200 dark:border-green-800">
                        <CardContent className="pt-6">
                            <div className="text-center">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                                    Authentication Successful! 🎉
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    You have successfully logged in with {user.app_metadata?.provider || "OAuth provider"}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Environment Variables Check */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Environment Variables Status</CardTitle>
                        <CardDescription>
                            Check if all required environment variables are loaded
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                                <span>Supabase URL:</span>
                                <span className={process.env.NEXT_PUBLIC_SUPABASE_URL ? "text-green-500" : "text-red-500"}>
                                    {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Loaded" : "❌ Missing"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Supabase Key:</span>
                                <span className={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "text-green-500" : "text-red-500"}>
                                    {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Loaded" : "❌ Missing"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Google Client ID:</span>
                                <span className={process.env.GOOGLE_CLIENT_ID ? "text-green-500" : "text-red-500"}>
                                    {process.env.GOOGLE_CLIENT_ID ? "✅ Loaded" : "❌ Missing"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>GitHub Client ID:</span>
                                <span className={process.env.GITHUB_CLIENT_ID ? "text-green-500" : "text-red-500"}>
                                    {process.env.GITHUB_CLIENT_ID ? "✅ Loaded" : "❌ Missing"}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 