"use client"

import { useAuth } from "@/contexts/AuthContext"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function TestAuthPage() {
    const { user, loading, signInWithGoogle, signInWithGithub } = useAuth()
    const [testResults, setTestResults] = useState<{
        supabaseConnection: boolean | null
        authContext: boolean | null
        environmentVariables: boolean | null
    }>({
        supabaseConnection: null,
        authContext: null,
        environmentVariables: null
    })
    const [isTesting, setIsTesting] = useState(false)

    const runTests = async () => {
        setIsTesting(true)
        const results = {
            supabaseConnection: null,
            authContext: null,
            environmentVariables: null
        }

        // Test 1: Environment Variables
        try {
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
            const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            const googleClientId = process.env.GOOGLE_CLIENT_ID
            const githubClientId = process.env.GITHUB_CLIENT_ID

            results.environmentVariables = !!(supabaseUrl && supabaseKey && googleClientId && githubClientId)
            console.log("Environment Variables Test:", {
                supabaseUrl: !!supabaseUrl,
                supabaseKey: !!supabaseKey,
                googleClientId: !!googleClientId,
                githubClientId: !!githubClientId
            })
        } catch (error) {
            console.error("Environment Variables Test Failed:", error)
            results.environmentVariables = false
        }

        // Test 2: Supabase Connection
        try {
            if (!supabase) {
                results.supabaseConnection = false
                console.log("Supabase Connection Test: Client not initialized")
            } else {
                const { data, error } = await supabase.auth.getSession()
                results.supabaseConnection = !error
                console.log("Supabase Connection Test:", { data, error })
            }
        } catch (error) {
            console.error("Supabase Connection Test Failed:", error)
            results.supabaseConnection = false
        }

        // Test 3: Auth Context
        try {
            results.authContext = !loading && typeof signInWithGoogle === 'function' && typeof signInWithGithub === 'function'
            console.log("Auth Context Test:", { loading, hasGoogleSignIn: typeof signInWithGoogle === 'function', hasGithubSignIn: typeof signInWithGithub === 'function' })
        } catch (error) {
            console.error("Auth Context Test Failed:", error)
            results.authContext = false
        }

        setTestResults(results)
        setIsTesting(false)
    }

    const getStatusIcon = (status: boolean | null) => {
        if (status === null) return <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
        if (status) return <CheckCircle className="h-5 w-5 text-green-500" />
        return <XCircle className="h-5 w-5 text-red-500" />
    }

    const getStatusText = (status: boolean | null) => {
        if (status === null) return "Not tested"
        if (status) return "✅ Working"
        return "❌ Failed"
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        API & Authentication Test
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Test if your Supabase API and authentication are working properly
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                {getStatusIcon(testResults.environmentVariables)}
                                <span>Environment Variables</span>
                            </CardTitle>
                            <CardDescription>
                                Check if all required environment variables are loaded
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Status: {getStatusText(testResults.environmentVariables)}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                {getStatusIcon(testResults.supabaseConnection)}
                                <span>Supabase Connection</span>
                            </CardTitle>
                            <CardDescription>
                                Test connection to Supabase API
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Status: {getStatusText(testResults.supabaseConnection)}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                {getStatusIcon(testResults.authContext)}
                                <span>Auth Context</span>
                            </CardTitle>
                            <CardDescription>
                                Check if authentication context is working
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Status: {getStatusText(testResults.authContext)}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                {user ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-gray-400" />}
                                <span>User Authentication</span>
                            </CardTitle>
                            <CardDescription>
                                Current authentication status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Status: {user ? "✅ Logged In" : "❌ Not Logged In"}
                            </p>
                            {user && (
                                <div className="mt-2 text-xs text-gray-500">
                                    <p>Email: {user.email}</p>
                                    <p>Name: {user.user_metadata?.full_name || "Not provided"}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <Button
                        onClick={runTests}
                        disabled={isTesting}
                        className="w-full md:w-auto"
                    >
                        {isTesting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Running Tests...
                            </>
                        ) : (
                            "Run API Tests"
                        )}
                    </Button>

                    {user && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button
                                onClick={signInWithGoogle}
                                variant="outline"
                                className="w-full"
                            >
                                Test Google Sign In
                            </Button>
                            <Button
                                onClick={signInWithGithub}
                                variant="outline"
                                className="w-full"
                            >
                                Test GitHub Sign In
                            </Button>
                        </div>
                    )}
                </div>

                <div className="mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Environment Variables Check</CardTitle>
                            <CardDescription>
                                Current environment variables status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Supabase URL:</span>
                                    <span className={process.env.NEXT_PUBLIC_SUPABASE_URL ? "text-green-500" : "text-red-500"}>
                                        {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Supabase Key:</span>
                                    <span className={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "text-green-500" : "text-red-500"}>
                                        {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Google Client ID:</span>
                                    <span className={process.env.GOOGLE_CLIENT_ID ? "text-green-500" : "text-red-500"}>
                                        {process.env.GOOGLE_CLIENT_ID ? "✅ Set" : "❌ Missing"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>GitHub Client ID:</span>
                                    <span className={process.env.GITHUB_CLIENT_ID ? "text-green-500" : "text-red-500"}>
                                        {process.env.GITHUB_CLIENT_ID ? "✅ Set" : "❌ Missing"}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
} 