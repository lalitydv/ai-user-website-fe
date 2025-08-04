"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [animationPhase, setAnimationPhase] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle, signInWithGithub } = useAuth()

  useEffect(() => {
    // Animation sequence timing
    const timer1 = setTimeout(() => setAnimationPhase(1), 1000) // Robots enter
    const timer2 = setTimeout(() => setAnimationPhase(2), 3000) // Left robot slides to logo
    const timer3 = setTimeout(() => setAnimationPhase(3), 5000) // Both robots dance
    const timer4 = setTimeout(() => setAnimationPhase(4), 8000) // Right robot slides out
    const timer5 = setTimeout(() => setAnimationPhase(5), 10000) // Final jumping animation

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

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
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-auto px-4 py-8">

      {/* PART 2 & 3: Login Form - Centered */}
      <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto z-10">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-[#F72353]">Welcome </span>
              <span className="text-[#235EAD]">Back</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Sign In With Your Socials Or Create An Account.
            </p>
          </div>

          {/* Social Sign In Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
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
              <span>Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={handleGithubSignIn}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-gray-800 px-4 text-gray-500 dark:text-gray-400">or</span>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 focus:border-[#F72353] focus:ring-[#F72353] transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-900 dark:text-white font-semibold">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 focus:border-[#F72353] focus:ring-[#F72353] transition-all duration-300"
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-[#235EAD] hover:underline font-medium transition-all duration-300"
            >
              Forgot Password
            </Link>
          </div>

          {/* Continue Button */}
          <Button className="w-full h-12 bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Terms */}
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            By Clicking <span className="font-semibold text-gray-900 dark:text-white">"Create Account"</span> Or{" "}
            <span className="font-semibold text-gray-900 dark:text-white">"Continue With Google"</span>,
            <br />
            You Agree To The Buildro's{" "}
            <Link href="/terms" className="text-[#235EAD] hover:underline">
              Terms & Conditions
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="text-[#235EAD] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#F72353] hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes dance {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes jump {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        .animate-dance {
          animation: dance 0.5s ease-in-out infinite;
        }
        
        .animate-jump {
          animation: jump 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
