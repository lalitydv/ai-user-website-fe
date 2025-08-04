"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [logoError, setLogoError] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/f215500.mp4" type="video/mp4" />
            <source src="/videos/215500.mp4" type="video/webm" />
          </video>
          {/* High opacity overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      )}

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
                <img
                  src="/images/Logo/buildro-logo.png"
                  alt="buildro.ai Logo"
                  className="h-12 w-auto"
                  onError={() => setLogoError(true)}
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

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Socials</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
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
