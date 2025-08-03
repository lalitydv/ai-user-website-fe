"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [animationPhase, setAnimationPhase] = useState(0)

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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* PART 1: Left Robot */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <div
          className={`transition-all duration-2000 ease-in-out ${animationPhase === 0 ? "left-[-200px] opacity-0" :
            animationPhase === 1 ? "opacity-100" :
              animationPhase === 2 ? "opacity-100" :
                animationPhase === 3 ? "opacity-100" :
                  animationPhase === 4 ? "opacity-100" :
                    "opacity-100"
            } ${animationPhase >= 3 ? "animate-dance" : ""} ${animationPhase >= 5 ? "animate-jump" : ""}`}
        >
          <div className="w-32 h-32 relative">
            {/* Robot Body */}
            <div className="absolute bottom-0 w-24 h-24">
              {/* Main Body */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
                {/* Chest Panel */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl"></div>
              </div>

              {/* Head */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-gray-200">
                {/* Face Screen */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  {/* Eyes */}
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200"></div>
                  </div>
                </div>
                {/* Antenna */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
              </div>

              {/* Arms */}
              <div className="absolute bottom-16 left-2 w-3 h-8 bg-white rounded-full shadow-lg border border-gray-200 transform rotate-45 origin-bottom">
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-gray-800 rounded-lg"></div>
              </div>
              <div className="absolute bottom-16 right-2 w-3 h-8 bg-white rounded-full shadow-lg border border-gray-200 transform -rotate-45 origin-bottom">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 rounded-lg"></div>
              </div>

              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-4 h-8 bg-white rounded-full shadow-lg border border-gray-200">
                  <div className="absolute bottom-0 w-4 h-3 bg-blue-500 rounded-b-full"></div>
                </div>
                <div className="w-4 h-8 bg-white rounded-full shadow-lg border border-gray-200">
                  <div className="absolute bottom-0 w-4 h-3 bg-blue-500 rounded-b-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 & 3: Login Form - Centered */}
      <div className="w-full max-w-xl mx-auto px-8 z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-[#F72353]">Welcome </span>
              <span className="text-[#235EAD]">Back</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Sign In With Your Socials Or Create An Account.
            </p>
          </div>

          {/* Google Sign In */}
          <Button
            variant="outline"
            className="w-full h-12 bg-white border-gray-200 hover:bg-gray-50 text-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-lg"
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
            <span>continue with google</span>
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">or</span>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900 font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-gray-200 focus:border-[#F72353] focus:ring-[#F72353] transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-900 font-semibold">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12 border-gray-200 focus:border-[#F72353] focus:ring-[#F72353] transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-300"
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
          <p className="text-sm text-gray-600 text-center">
            By Clicking <span className="font-semibold text-gray-900">"Create Account"</span> Or{" "}
            <span className="font-semibold text-gray-900">"Continue With Google"</span>,
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
        </div>
      </div>

      {/* PART 4: Right Side - Gradient Section + Robot */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        {/* Top Gradient Section */}
        <div className="w-64 h-48 bg-gradient-to-b from-[#F72353] to-[#235EAD] rounded-2xl relative mb-8">
          {/* Sign Up Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
            <p className="text-xl font-semibold text-center">Don't have an account?</p>
            <Button
              variant="outline"
              className="bg-white text-gray-800 hover:bg-gray-50 border-white hover:border-gray-50 px-6 py-2 rounded-lg hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Robot */}
        <div
          className={`transition-all duration-2000 ease-in-out ${animationPhase === 0 ? "right-[-200px] opacity-0" :
            animationPhase === 1 ? "opacity-100" :
              animationPhase === 2 ? "opacity-100" :
                animationPhase === 3 ? "opacity-100" :
                  animationPhase === 4 ? "right-[-200px] opacity-0" :
                    "right-[-200px] opacity-0"
            } ${animationPhase >= 3 ? "animate-dance" : ""}`}
        >
          <div className="w-32 h-32 relative">
            {/* Robot Body */}
            <div className="absolute bottom-0 w-24 h-24">
              {/* Main Body */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
                {/* Chest Panel */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-gradient-to-b from-purple-400 to-purple-600 rounded-xl"></div>
              </div>

              {/* Head */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-gray-200">
                {/* Face Screen */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  {/* Single Eye */}
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                {/* Antenna */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-purple-500 rounded-full"></div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
              </div>

              {/* Arms - Raised */}
              <div className="absolute bottom-16 left-2 w-3 h-8 bg-white rounded-full shadow-lg border border-gray-200 transform -rotate-45 origin-bottom">
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-gray-800 rounded-lg"></div>
              </div>
              <div className="absolute bottom-16 right-2 w-3 h-8 bg-white rounded-full shadow-lg border border-gray-200 transform rotate-45 origin-bottom">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 rounded-lg"></div>
              </div>

              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-4 h-8 bg-white rounded-full shadow-lg border border-gray-200">
                  <div className="absolute bottom-0 w-4 h-3 bg-purple-500 rounded-b-full"></div>
                </div>
                <div className="w-4 h-8 bg-white rounded-full shadow-lg border border-gray-200">
                  <div className="absolute bottom-0 w-4 h-3 bg-purple-500 rounded-b-full"></div>
                </div>
              </div>
            </div>
          </div>
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
