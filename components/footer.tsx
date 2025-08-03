"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              {!logoError ? (
                <img
                  src="/images/Logo/shinecoderlogo.svg"
                  alt="Shinecoder Logo"
                  className="h-12 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-12 px-6 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  Shinecoder
                </div>
              )}
            </Link>
            <p className="text-gray-400 max-w-md">
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

          {/* Sitemap */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sitemap</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-blue-500 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-blue-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#tutorial" className="hover:text-blue-500 transition-colors">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-blue-500 transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Socials</h4>
            <ul className="space-y-2 text-gray-400">
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

          {/* Head Office */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Head Office</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-500" />
                <span>7th Cross Chiranahalli Badavane<br />Mandya 571401</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>info@shinecoder.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+91 94805 55553</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and updates.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shinecoder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
