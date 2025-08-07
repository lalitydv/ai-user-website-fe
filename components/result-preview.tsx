"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Download, Share2, Edit, Eye, Code, Settings, Copy, Check, FileText, Palette, Zap, Heart, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResultPreviewProps {
  prompt: string
  onBack: () => void
}

interface GeneratedComponent {
  name: string
  code: string
  type: 'tsx' | 'css' | 'config'
}

export function ResultPreview({ prompt, onBack }: ResultPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('preview')
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Mock generated components based on the prompt
  const generatedComponents: GeneratedComponent[] = [
    {
      name: 'Navbar.tsx',
      code: `import React from 'react'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#F72353] to-[#235EAD] bg-clip-text text-transparent">
              Buildro AI
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-gradient-to-r from-[#F72353] to-[#235EAD]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}`,
      type: 'tsx'
    },
    {
      name: 'Hero.tsx',
      code: `import React from 'react'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F72353] to-[#235EAD] bg-clip-text text-transparent mb-6">
          Build Beautiful Websites with AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Transform your ideas into stunning, professional websites in seconds using the power of artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-[#F72353] to-[#235EAD]">
            Start Building
          </Button>
          <Button variant="outline" size="lg">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  )
}`,
      type: 'tsx'
    },
    {
      name: 'Features.tsx',
      code: `import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Palette, Code, Eye } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate complete websites in seconds, not hours."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Modern, responsive designs that look professional."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Production-ready React and Tailwind CSS code."
    },
    {
      icon: Eye,
      title: "Live Preview",
      description: "See your changes instantly as you build."
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Buildro AI?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to create stunning websites
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`,
      type: 'tsx'
    },
    {
      name: 'tailwind.config.js',
      code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,
      type: 'config'
    }
  ]

  const getWebsiteType = (prompt: string) => {
    const lowerPrompt = prompt.toLowerCase()
    if (lowerPrompt.includes('lovable') || lowerPrompt.includes('landing')) return 'Landing Page'
    if (lowerPrompt.includes('saas') || lowerPrompt.includes('ai')) return 'AI SaaS'
    if (lowerPrompt.includes('portfolio') || lowerPrompt.includes('developer')) return 'Developer Portfolio'
    if (lowerPrompt.includes('documentation') || lowerPrompt.includes('docs')) return 'Documentation Site'
    if (lowerPrompt.includes('startup')) return 'Startup Website'
    if (lowerPrompt.includes('product') || lowerPrompt.includes('showcase')) return 'Product Showcase'
    if (lowerPrompt.includes('blog')) return 'Blog Website'
    if (lowerPrompt.includes('event')) return 'Event Website'
    if (lowerPrompt.includes('mobile app') || lowerPrompt.includes('app')) return 'Mobile App Website'
    if (lowerPrompt.includes('personal') || lowerPrompt.includes('brand')) return 'Personal Branding'
    return 'Professional Website'
  }

  const websiteType = getWebsiteType(prompt)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Project: <span className="font-medium text-gray-900 dark:text-white">buildro-ai-project</span>
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-[#F72353]/10 to-[#235EAD]/10 text-[#F72353] border-[#F72353]/20">
                {websiteType}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download ZIP
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Generated Design */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-900 dark:text-white">Live Preview</CardTitle>
                    <CardDescription>Real-time preview of your generated website</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={activeTab === 'preview' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveTab('preview')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      variant={activeTab === 'code' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveTab('code')}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {activeTab === 'preview' ? (
                  /* Preview Mode */
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-[#F72353]/10 to-[#235EAD]/10 rounded-xl p-8 border border-[#F72353]/20">
                      <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F72353] to-[#235EAD] bg-clip-text text-transparent mb-4">
                          {websiteType}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          Generated from: "{prompt}"
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Components</p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{generatedComponents.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-lg flex items-center justify-center">
                              <Code className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Lines of Code</p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">247</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-[#235EAD] to-[#F72353] rounded-lg flex items-center justify-center">
                              <FileText className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Features</p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-lg flex items-center justify-center">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Component Preview */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generated Components</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {generatedComponents.map((component, index) => (
                            <div
                              key={index}
                              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#F72353] cursor-pointer transition-colors"
                              onClick={() => {
                                setSelectedComponent(component.name)
                                setActiveTab('code')
                              }}
                            >
                              <div className="flex items-center space-x-2">
                                <FileText className="h-4 w-4 text-[#F72353]" />
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {component.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {component.type.toUpperCase()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Code Mode */
                  <div className="h-[600px] overflow-auto">
                    <div className="bg-gray-900 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400 text-sm">
                            {selectedComponent || 'src/components/Navbar.tsx'}
                          </span>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                            {selectedComponent ? generatedComponents.find(c => c.name === selectedComponent)?.type || 'tsx' : 'tsx'}
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopy}
                          className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                          {copied ? 'Copied!' : 'Copy'}
                        </Button>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                          <code>
                            {selectedComponent
                              ? generatedComponents.find(c => c.name === selectedComponent)?.code || '// Component not found'
                              : generatedComponents[0]?.code || '// No components available'
                            }
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Controls */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Prompt Info */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Generated From</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{prompt}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Design
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Code className="h-4 w-4 mr-2" />
                      View All Code
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Responsive Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Dark Mode Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Modern UI Components</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Professional Styling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">TypeScript Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Tailwind CSS</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Component List */}
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {generatedComponents.map((component, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedComponent(component.name)
                          setActiveTab('code')
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-[#F72353]" />
                          <span className="text-sm text-gray-900 dark:text-white">
                            {component.name}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {component.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 