"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Footer() {
  const [videoError, setVideoError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={() => setVideoError(true)}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Fallback CSS Gradient Animation */}
      {videoError && (
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 animate-gradient"></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {!logoError ? (
                <Image
                  src="/images/Logo/buildro-logo.png"
                  alt="buildro.ai Logo"
                  width={144}
                  height={48}
                  className="h-12 w-auto"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <div className="h-12 px-6 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  buildro.ai
                </div>
              )}
            </Link>
            <p className="text-gray-300 max-w-md">
              From simple prompts, build complete websites and dashboards that are clean,
              responsive, and ready to use. No coding required.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/community" className="hover:text-blue-500 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/tutorial" className="hover:text-blue-500 transition-colors">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-blue-500 transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest features and updates.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 backdrop-blur-sm"
              />
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 buildro.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
