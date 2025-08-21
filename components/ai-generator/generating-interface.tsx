"use client"

import React, { useState } from 'react'
import { Heart, Eye, Upload, Target, Code, FileText, Palette, Zap, ArrowLeft, ChevronRight, ChevronLeft, ChevronUp, Play, Folder, Share2, Settings, Copy, Check, ChevronDown, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GeneratingInterfaceProps {
  prompt: string
  currentStep: string
  progress: number
  onBack: () => void
  onComplete: () => void
}

export function GeneratingInterface({ prompt, currentStep, progress, onBack, onComplete }: GeneratingInterfaceProps) {
  const [activeView, setActiveView] = useState<'preview' | 'code' | 'video' | 'files'>('preview')
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const steps = [
    { id: 'analyzing', label: 'Analyzing your prompt...', icon: FileText },
    { id: 'designing', label: 'Designing the layout...', icon: Palette },
    { id: 'coding', label: 'Generating code...', icon: Code },
    { id: 'optimizing', label: 'Optimizing performance...', icon: Zap },
    { id: 'preview', label: 'Preparing preview...', icon: Eye }
  ]

  const currentStepIndex = steps.findIndex(step => step.id === currentStep)

  const messages = [
    {
      type: 'user',
      content: prompt,
      timestamp: 'Just now'
    },
    {
      type: 'ai',
      content: `I'll create a beautiful professional design with modern styling using your color theme. Let me build this step by step...`,
      timestamp: 'Just now'
    }
  ]

  const generatedFiles = [
    { name: 'App.tsx', type: 'tsx', path: 'src/App.tsx' },
    { name: 'index.css', type: 'css', path: 'src/index.css' },
    { name: 'components/Navbar.tsx', type: 'tsx', path: 'src/components/Navbar.tsx' },
    { name: 'components/Hero.tsx', type: 'tsx', path: 'src/components/Hero.tsx' },
    { name: 'components/Features.tsx', type: 'tsx', path: 'src/components/Features.tsx' },
    { name: 'components/Footer.tsx', type: 'tsx', path: 'src/components/Footer.tsx' },
    { name: 'tailwind.config.js', type: 'config', path: 'tailwind.config.js' },
    { name: 'package.json', type: 'json', path: 'package.json' }
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'tsx':
      case 'ts':
        return <Code className="h-4 w-4 text-blue-500" />
      case 'css':
        return <FileText className="h-4 w-4 text-purple-500" />
      case 'json':
        return <FileText className="h-4 w-4 text-yellow-500" />
      case 'config':
        return <Settings className="h-4 w-4 text-green-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Invite
              </Button>
              <Button variant="outline" size="sm">
                <Target className="h-4 w-4 mr-2" />
                Upgrade
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-64px)] flex">
        {/* Left Panel - Project Info & Chat */}
        <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Project Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">hello-world-hello-73</h2>
              <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {prompt}
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="bg-gradient-to-r from-[#F72353]/10 to-[#235EAD]/10 border border-[#F72353]/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-900 dark:text-white mb-3 font-medium">
                Building your project...
              </p>
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = step.id === currentStep
                  const isCompleted = index < currentStepIndex

                  return (
                    <div key={step.id} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCompleted
                        ? 'bg-green-500'
                        : isActive
                          ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD]'
                          : 'bg-gray-200 dark:bg-gray-700'
                        }`}>
                        {isCompleted ? (
                          <span className="text-white text-xs">✓</span>
                        ) : (
                          <Icon className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className={`text-sm ${isActive
                        ? 'text-[#F72353] font-medium'
                        : isCompleted
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-500 dark:text-gray-400'
                        }`}>
                        {step.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Chat History</h3>
              {messages.map((message, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.type === 'user'
                    ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD]'
                    : 'bg-gradient-to-r from-[#235EAD] to-[#F72353]'
                    }`}>
                    {message.type === 'user' ? (
                      <span className="text-white text-xs font-medium">U</span>
                    ) : (
                      <Heart className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg p-2 text-xs ${message.type === 'user'
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-gradient-to-r from-[#F72353]/10 to-[#235EAD]/10 border border-[#F72353]/20'
                      }`}>
                      <p className="text-gray-900 dark:text-white">{message.content}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask Buildro AI..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F72353] focus:border-transparent"
              />
              <Button size="sm" className="bg-gradient-to-r from-[#F72353] to-[#235EAD] hover:from-[#F72353]/90 hover:to-[#235EAD]/90">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#F72353]">
                + Edit
              </button>
              <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#F72353] flex items-center space-x-1">
                <span>Chat</span>
                <ChevronUp className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Panel - Main Content */}
        <div className="flex-1 flex flex-col">
          {/* View Toggle Buttons */}
          <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <Button
                variant={activeView === 'preview' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveView('preview')}
                className={activeView === 'preview' ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white' : ''}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button
                variant={activeView === 'code' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveView('code')}
                className={activeView === 'code' ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white' : ''}
              >
                <Code className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button
                variant={activeView === 'video' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveView('video')}
                className={activeView === 'video' ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white' : ''}
              >
                <Play className="h-4 w-4 mr-2" />
                Video
              </Button>
              <Button
                variant={activeView === 'files' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveView('files')}
                className={activeView === 'files' ? 'bg-gradient-to-r from-[#F72353] to-[#235EAD] text-white' : ''}
              >
                <Folder className="h-4 w-4 mr-2" />
                Files
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex">
            {/* Left Content Panel */}
            <div className="flex-1 border-r border-gray-200 dark:border-gray-700">
              {activeView === 'preview' && (
                <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute inset-0 w-24 h-24 border-4 border-[#F72353]/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 w-24 h-24 border-4 border-[#235EAD]/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Building your website...
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                      Creating a beautiful design with modern styling
                    </p>
                    <div className="w-full max-w-md mx-auto mb-8">
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#F72353] to-[#235EAD] h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{progress}% complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === 'code' && (
                <div className="h-full bg-gray-900 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400 text-sm">
                        {selectedFile || 'src/App.tsx'}
                      </span>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        {selectedFile ? generatedFiles.find(f => f.name === selectedFile)?.type || 'tsx' : 'tsx'}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 h-[calc(100%-60px)] overflow-auto">
                    <pre className="text-gray-300 font-mono text-sm">
                      <code>
                        {`import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;`}
                      </code>
                    </pre>
                  </div>
                </div>
              )}

              {activeView === 'video' && (
                <div className="h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#F72353] to-[#235EAD] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Video Preview</h3>
                    <p className="text-gray-400 mb-6">
                      Video preview will be available once generation is complete
                    </p>
                  </div>
                </div>
              )}

              {activeView === 'files' && (
                <div className="h-full bg-white dark:bg-gray-900 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Files</h3>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {generatedFiles.map((file, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${selectedFile === file.name
                          ? 'bg-gradient-to-r from-[#F72353]/10 to-[#235EAD]/10 border border-[#F72353]/20'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        onClick={() => setSelectedFile(file.name)}
                      >
                        <div className="flex items-center space-x-3">
                          {getFileIcon(file.type)}
                          <span className="text-sm text-gray-900 dark:text-white">{file.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {file.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Content Panel */}
            <div className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Files</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{generatedFiles.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{progress}%</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Code className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 