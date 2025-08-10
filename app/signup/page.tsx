"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle, signInWithGithub } = useAuth()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Google sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGithubSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithGithub()
    } catch (error) {
      console.error('GitHub sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen md:m-28 shadow-lg rounded-lg bg-white dark:bg-gray-900 flex relative overflow-hidden">
      {/* Left Side - Robot Image */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Robot Image */}
          <div className="relative z-10">
            <Image
              src="/images/Login/login-image.png"
              alt="Futuristic Robot"
              width={800}
              height={600}
              className="drop-shadow-2xl w-full h-full object-cover"
              priority
            />
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-[hsl(var(--brand-pink))]">CREATE </span>
              <span className="text-[hsl(var(--brand-blue))]">ACCOUNT</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Start creating amazing websites and dashboards
            </p>
          </div>

          {/* Social Sign In Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={handleGithubSignIn}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Continue with Github</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400">or</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-900 dark:text-white font-semibold">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="h-12 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:border-[hsl(var(--brand-pink))] focus:ring-[hsl(var(--brand-pink))] transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-900 dark:text-white font-semibold">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="h-12 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:border-[hsl(var(--brand-pink))] focus:ring-[hsl(var(--brand-pink))] transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:border-[hsl(var(--brand-pink))] focus:ring-[hsl(var(--brand-pink))] transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-900 dark:text-white font-semibold">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="h-12 pr-12 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:border-[hsl(var(--brand-pink))] focus:ring-[hsl(var(--brand-pink))] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-900 dark:text-white font-semibold">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="h-12 pr-12 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 focus:border-[hsl(var(--brand-pink))] focus:ring-[hsl(var(--brand-pink))] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="rounded border-gray-300 mt-1 dark:border-gray-600 dark:bg-gray-700" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              I agree to the{" "}
              <Link href="/terms" className="text-[hsl(var(--brand-blue))] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[hsl(var(--brand-blue))] hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* Create Account Button */}
          <Button className="w-full h-12 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] hover:from-[hsl(var(--brand-pink))/90] hover:to-[hsl(var(--brand-blue))/90] text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
            Create Account →
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-[hsl(var(--brand-pink))] hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
