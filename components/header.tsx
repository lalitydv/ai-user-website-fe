"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-[100]">
      <div className="bg-white/95 backdrop-blur-sm rounded-[50px] shadow-2xl p-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            {!logoError ? (
              <img
                src="/images/Logo/shinecoderlogo.svg"
                alt="Shinecoder Logo"
                className="h-10 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-10 px-4 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                Shinecoder
              </div>
            )}
          </Link>

          {/* Right side content */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#community" className="text-gray-700 hover:text-[#F72353] transition-colors">
                Community
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-[#F72353] transition-colors">
                Pricing
              </Link>
              <Link href="#tutorial" className="text-gray-700 hover:text-[#F72353] transition-colors">
                Tutorial
              </Link>
              <Link href="#story" className="text-gray-700 hover:text-[#F72353] transition-colors">
                Our Story
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-[#F72353] text-[#F72353] hover:bg-[#F72353] hover:text-white bg-transparent rounded-full px-4"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white rounded-full px-4"
                asChild
              >
                <Link href="/signup">Try Free</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="#community"
                className="block px-3 py-2 text-gray-700 hover:text-[#F72353]"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-[#F72353]"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#tutorial"
                className="block px-3 py-2 text-gray-700 hover:text-[#F72353]"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorial
              </Link>
              <Link
                href="#story"
                className="block px-3 py-2 text-gray-700 hover:text-[#F72353]"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[#F72353] text-[#F72353] hover:bg-[#F72353] hover:text-white bg-transparent rounded-full"
                  asChild
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white rounded-full"
                  asChild
                >
                  <Link href="/signup">Try Free</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
