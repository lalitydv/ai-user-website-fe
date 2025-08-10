"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Paperclip, Globe, Send, Plus, Check, AlertCircle, ChevronUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Typewriter from 'typewriter-effect'
import { useRouter } from "next/navigation"
import Image from "next/image"
export function Hero() {
  const [prompt, setPrompt] = useState("")
  const [isPublicDropdownOpen, setIsPublicDropdownOpen] = useState(false)
  const [isPlusDropdownOpen, setIsPlusDropdownOpen] = useState(false)
  const [selectedPrivacy, setSelectedPrivacy] = useState("public")
  const [showFigmaDialog, setShowFigmaDialog] = useState(false)
  const [showXDDialog, setShowXDDialog] = useState(false)
  const [figmaUrl, setFigmaUrl] = useState("")
  const [urlError, setUrlError] = useState("")
  const [isValidUrl, setIsValidUrl] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  // Typewriter effect prompts
  const prompts = [
    "Create a dashboard to visualize sales data...",
    "Create a CRM to manage leads, contacts, and deals",
    "Build an HRMS for employee tracking and payroll",
    "Make an inventory system for a small business",
    "Design a school management dashboard with attendance and fees",
    "Generate a POS system for a cafe with table ordering",
    "Create a blogging platform with categories and comments",
    "Build a customer support ticketing app",
    "Design a job portal with candidate login and recruiter dashboard",
    "Generate a task management tool like Trello",
    "Build an ecommerce admin panel with product and order tracking"
  ]

  const privacyOptions = [
    {
      id: "public",
      title: "Public",
      description: "Anyone can view and remix",
      icon: Globe,
    },
    {
      id: "workspace",
      title: "Workspace",
      description: "Only visible to your workspace",
      icon: Globe,
    },
    {
      id: "personal",
      title: "Personal",
      description: "Only visible to yourself, unless shared",
      icon: Globe,
    },
  ]

  const validateFigmaUrl = (url: string) => {
    const figmaRegex = /^https:\/\/(www\.)?figma\.com\/(file|proto)\/[a-zA-Z0-9]+/
    if (!url) {
      setUrlError("")
      setIsValidUrl(false)
      return
    }

    if (figmaRegex.test(url)) {
      setUrlError("")
      setIsValidUrl(true)
    } else {
      setUrlError("Please enter a valid Figma URL")
      setIsValidUrl(false)
    }
  }

  const handleFigmaUrlChange = (value: string) => {
    setFigmaUrl(value)
    validateFigmaUrl(value)
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log("Files selected:", files)
    }
  }

  const handleFigmaImport = () => {
    if (isValidUrl) {
      console.log("Importing from Figma:", figmaUrl)
    }
  }

  // Direct prompt submission - no login required
  const handleSendPrompt = () => {
    if (prompt.trim()) {
      // Navigate directly to generating page with prompt
      const searchParams = new URLSearchParams()
      searchParams.set('prompt', prompt)
      router.push(`/generating?${searchParams.toString()}`)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Add scroll event listener to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="min-h-[80vh] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/Home/hero-bg.png)',
        backgroundColor: '#f8fafc' // Fallback color
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/Logo/buil-ai.png"
                        alt="buildro.ai Logo"
                        width={200}
                        height={40}
                        className="h-20 w-auto object-contain"
                        priority
                      />
                    </div>
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Turn a Single Prompt into Full Websites & Dashboards
                </p>
              </div>

              <div className="relative flex justify-center items-center space-x-8 mt-12">


                {/* Clean Prompt Interface */}
                <div className="flex-1 w-full md:w-[768px] max-w-4xl relative z-10">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <textarea
                          value={prompt}
                          onChange={(e) => {
                            setPrompt(e.target.value)
                            // Auto-resize functionality
                            const textarea = e.target as HTMLTextAreaElement
                            textarea.style.height = "auto"
                            const scrollHeight = textarea.scrollHeight
                            const lineHeight = 20
                            const maxRows = 6
                            const maxHeight = lineHeight * maxRows

                            if (scrollHeight <= maxHeight) {
                              textarea.style.height = `${scrollHeight}px`
                              textarea.style.overflowY = "hidden"
                            } else {
                              textarea.style.height = `${maxHeight}px`
                              textarea.style.overflowY = "auto"
                            }
                          }}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          rows={3}
                          className={`w-full text-base py-4 px-4 border rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none transition-all duration-300 ${isFocused
                            ? 'border-brand-pink ring-2 ring-brand-pink/20 shadow-lg'
                            : 'border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink'
                            }`}
                          placeholder=""
                          style={{
                            minHeight: "60px",
                            maxHeight: "120px",
                          }}
                        />
                        {!isFocused && (
                          <div className="absolute inset-0 pointer-events-none flex items-start px-4 py-4 text-gray-500 dark:text-gray-400">
                            <Typewriter
                              options={{
                                strings: prompts,
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                                cursor: '|',
                                cursorClassName: 'text-[#F72353] animate-pulse'
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Plus Dropdown */}
                          <DropdownMenu open={isPlusDropdownOpen} onOpenChange={setIsPlusDropdownOpen}>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:text-brand-pink dark:hover:text-brand-pink">
                                <Plus className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48">
                              <DropdownMenuItem onClick={() => setShowFigmaDialog(true)}>
                                <div className="flex items-center space-x-2">
                                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                  <span>Figma Import</span>
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setShowXDDialog(true)}>
                                <div className="flex items-center space-x-2">
                                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                                  <span>Adobe XD</span>
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          {/* Attach Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 dark:text-gray-400 hover:text-brand-pink dark:hover:text-brand-pink"
                            onClick={handleFileUpload}
                          >
                            <Paperclip className="h-4 w-4 mr-2" />
                            Attach
                          </Button>

                          {/* Public Dropdown */}
                          <DropdownMenu open={isPublicDropdownOpen} onOpenChange={setIsPublicDropdownOpen}>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue">
                                <Globe className="h-4 w-4 mr-2" />
                                Public
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-80 p-4">
                              <div className="space-y-3">
                                {privacyOptions.map((option) => (
                                  <div
                                    key={option.id}
                                    className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg"
                                    onClick={() => setSelectedPrivacy(option.id)}
                                  >
                                    <div className="flex items-center justify-center w-5 h-5 mt-0.5">
                                      <div
                                        className={`w-4 h-4 rounded-full border-2 ${selectedPrivacy === option.id
                                          ? "border-brand-pink bg-brand-pink"
                                          : "border-gray-300 dark:border-gray-600"
                                          }`}
                                      >
                                        {selectedPrivacy === option.id && (
                                          <div className="w-full h-full rounded-full bg-brand-pink flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900 dark:text-white">{option.title}</div>
                                      <div className="text-sm text-gray-600 dark:text-gray-400">{option.description}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <Button
                          size="sm"
                          onClick={handleSendPrompt}
                          disabled={!prompt.trim()}
                          className="bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,.pdf,.sketch,.fig"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Figma Import Dialog */}
      <Dialog open={showFigmaDialog} onOpenChange={setShowFigmaDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <span>Import from Figma</span>
            </DialogTitle>
            <DialogDescription>Enter your Figma file or prototype URL to import the design</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="figma-url">Figma URL</Label>
              <div className="relative">
                <Input
                  id="figma-url"
                  placeholder="https://www.figma.com/file/..."
                  value={figmaUrl}
                  onChange={(e) => handleFigmaUrlChange(e.target.value)}
                  className={`pr-10 ${urlError ? "border-red-500" : isValidUrl ? "border-green-500" : ""}`}
                />
                {isValidUrl && (
                  <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
                {urlError && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                )}
              </div>
              {urlError && <p className="text-sm text-red-500">{urlError}</p>}
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowFigmaDialog(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleFigmaImport}
                disabled={!isValidUrl}
                className="bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white"
              >
                Import Design
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Adobe XD Coming Soon Dialog */}
      <Dialog open={showXDDialog} onOpenChange={setShowXDDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-pink-500 rounded"></div>
              <span>Adobe XD Import</span>
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Adobe XD import functionality is currently in development and will be available soon.
            </p>
            <Button
              onClick={() => setShowXDDialog(false)}
              className="bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-brand-pink to-brand-blue hover:from-brand-pink/90 hover:to-brand-blue/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </section>
  )
}
