"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Paperclip, Globe, Send, Plus, Check, AlertCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Typewriter from 'typewriter-effect'

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
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      setShowFigmaDialog(false)
      setFigmaUrl("")
    }
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/Home/banerbg.png)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/5"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  CREATE WEBSITES & DASHBOARDS WITH
                  <br />
                  <span className="bg-gradient-to-r from-[#F72353] to-[#235EAD] bg-clip-text text-transparent">
                    A SIMPLE PROMPT
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  From Simple Prompts, Buildro Designs Full Websites And Dashboards That
                  <br />
                  Are Clean, Responsive, And Ready To Use.
                </p>
              </div>

              <div className="relative flex justify-center items-center space-x-8 mt-12">
                {/* Animated decorative background circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  {/* Large animated circles covering full screen */}
                  <div className="w-screen h-screen rounded-full border border-gradient-to-r from-[#235EAD]/20 to-[#F72353]/20 bg-gradient-to-r from-[#235EAD]/8 to-[#F72353]/8 animate-pulse"></div>
                  <div className="absolute w-[90vw] h-[90vw] rounded-full border border-gradient-to-r from-[#235EAD]/15 to-[#F72353]/15 bg-gradient-to-r from-[#235EAD]/6 to-[#F72353]/6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute w-[80vw] h-[80vw] rounded-full border border-gradient-to-r from-[#235EAD]/12 to-[#F72353]/12 bg-gradient-to-r from-[#235EAD]/4 to-[#F72353]/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute w-[70vw] h-[70vw] rounded-full border border-gradient-to-r from-[#235EAD]/10 to-[#F72353]/10 bg-gradient-to-r from-[#235EAD]/3 to-[#F72353]/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute w-[60vw] h-[60vw] rounded-full border border-gradient-to-r from-[#235EAD]/8 to-[#F72353]/8 bg-gradient-to-r from-[#235EAD]/2 to-[#F72353]/2 animate-pulse" style={{ animationDelay: '2s' }}></div>

                  {/* Zigzag animated elements - hidden on mobile */}
                  <div className="hidden md:block absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#235EAD]/30 to-[#F72353]/30 animate-bounce"></div>
                  <div className="hidden md:block absolute top-20 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#F72353]/25 to-[#235EAD]/25 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <div className="hidden md:block absolute bottom-20 left-20 w-18 h-18 rounded-full bg-gradient-to-r from-[#235EAD]/20 to-[#F72353]/20 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                  <div className="hidden md:block absolute bottom-10 right-10 w-14 h-14 rounded-full bg-gradient-to-r from-[#F72353]/15 to-[#235EAD]/15 animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                </div>

                {/* Clean Prompt Interface */}
                <div className="flex-1 max-w-4xl relative z-10">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
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
                          className={`w-full text-base py-4 px-4 border rounded-xl bg-white resize-none transition-all duration-300 ${isFocused
                            ? 'border-[#F72353] ring-2 ring-[#F72353]/20 shadow-lg'
                            : 'border-gray-200 focus:ring-2 focus:ring-[#F72353]/20 focus:border-[#F72353]'
                            }`}
                          placeholder=""
                          style={{
                            minHeight: "60px",
                            maxHeight: "120px",
                          }}
                        />
                        {!isFocused && (
                          <div className="absolute inset-0 pointer-events-none flex items-center px-4 py-1 text-gray-500">
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
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#F72353]">
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
                            className="text-gray-500 hover:text-[#F72353]"
                            onClick={handleFileUpload}
                          >
                            <Paperclip className="h-4 w-4 mr-2" />
                            Attach
                          </Button>

                          {/* Public Dropdown */}
                          <DropdownMenu open={isPublicDropdownOpen} onOpenChange={setIsPublicDropdownOpen}>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#235EAD]">
                                <Globe className="h-4 w-4 mr-2" />
                                Public
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-80 p-4">
                              <div className="space-y-3">
                                {privacyOptions.map((option) => (
                                  <div
                                    key={option.id}
                                    className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                                    onClick={() => setSelectedPrivacy(option.id)}
                                  >
                                    <div className="flex items-center justify-center w-5 h-5 mt-0.5">
                                      <div
                                        className={`w-4 h-4 rounded-full border-2 ${selectedPrivacy === option.id
                                          ? "border-[#F72353] bg-[#F72353]"
                                          : "border-gray-300"
                                          }`}
                                      >
                                        {selectedPrivacy === option.id && (
                                          <div className="w-full h-full rounded-full bg-[#F72353] flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900">{option.title}</div>
                                      <div className="text-sm text-gray-600">{option.description}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white rounded-full p-3"
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
                className="bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white"
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
            <div className="w-16 h-16 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              Adobe XD import functionality is currently in development and will be available soon.
            </p>
            <Button
              onClick={() => setShowXDDialog(false)}
              className="bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90 text-white"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
