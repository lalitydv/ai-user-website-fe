"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Footer() {
  const [videoError, setVideoError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="relative py-2 w-full bg-[url('/images/Home/launch-your-product.png')] bg-cover bg-center bg-no-repeat text-black dark:text-white overflow-hidden ">
      {/* Background Video */}

      {/* Fallback CSS Gradient Animation */}
      {videoError && (
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue animate-gradient"></div>
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-3">
            {!logoError ? (
              <Image
                src="/images/Logo/buildro-logo.png"
                alt="buildro.ai Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <div className="h-10 px-4 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                buildro.ai
              </div>
            )}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-black dark:text-white text-lg">News letter</h4>
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-brand-pink transition-colors"
              />
              <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sitemap Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-black dark:text-white text-lg">Sitemap</h4>
            <ul className="space-y-3 text-black dark:text-white">
              <li>
                <Link href="/" className="hover:text-brand-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/business-management" className="hover:text-brand-pink transition-colors">
                  Business Management
                </Link>
              </li>
              <li>
                <Link href="/saas" className="hover:text-brand-pink transition-colors">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-brand-pink transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-black dark:text-white text-lg">Socials</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="flex items-center space-x-3 text-black dark:text-white hover:text-brand-pink transition-all duration-300 group">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center group-hover:bg-brand-pink group-hover:scale-110 transition-all duration-300">
                    <span className="text-white dark:text-black text-xs font-bold group-hover:text-white">f</span>
                  </div>
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 text-black dark:text-white hover:text-brand-pink transition-all duration-300 group">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <span className="text-white dark:text-black text-xs font-bold group-hover:text-white">in</span>
                  </div>
                  <span>Linkedin</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 text-black dark:text-white hover:text-brand-pink transition-all duration-300 group">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:bg-brand-pink group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-white dark:text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                    </svg>
                  </div>
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black dark:border-gray-700 mt-8 pt-8 text-center text-black dark:text-white">
          <p>&copy; {new Date().getFullYear()} buildro.ai All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
