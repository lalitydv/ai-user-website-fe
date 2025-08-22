"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Monitor, Tablet, Smartphone, User, Play } from 'lucide-react'

interface AppBarProps {
    activeTab: 'preview' | 'code'
    onTabChange: (tab: 'preview' | 'code') => void
    deviceMode: 'desktop' | 'tablet' | 'mobile'
    onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void
    onPublish: () => void
}

export function AppBar({
    activeTab,
    onTabChange,
    deviceMode,
    onDeviceChange,
    onPublish
}: AppBarProps) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    const deviceIcons = {
        desktop: Monitor,
        tablet: Tablet,
        mobile: Smartphone
    }

    const DeviceIcon = deviceIcons[deviceMode]

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-16 bg-[hsl(var(--surface))] border-b border-[hsl(var(--border))] shadow-[hsl(var(--shadow-soft))]">
            <div className="flex items-center justify-between h-full px-6">
                {/* Left: Logo + Product Name */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-600))] rounded-[hsl(var(--radius-md))] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <span className="text-lg font-semibold text-[hsl(var(--text))]">Buildro.ai</span>
                </div>

                {/* Center: View Tabs */}
                <div className="flex items-center space-x-1 bg-[hsl(var(--surface-2))] rounded-[hsl(var(--radius-lg))] p-1">
                    <button
                        onClick={() => onTabChange('preview')}
                        className={`px-4 py-2 rounded-[hsl(var(--radius-md))] text-sm font-medium transition-all duration-200 ${activeTab === 'preview'
                                ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-[hsl(var(--shadow-soft))]'
                                : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:underline'
                            }`}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => onTabChange('code')}
                        className={`px-4 py-2 rounded-[hsl(var(--radius-md))] text-sm font-medium transition-all duration-200 ${activeTab === 'code'
                                ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-[hsl(var(--shadow-soft))]'
                                : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:underline'
                            }`}
                    >
                        Code
                    </button>
                </div>

                {/* Right: Device Switcher + User + Publish */}
                <div className="flex items-center space-x-4">
                    {/* Device Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="border-[hsl(var(--border))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]">
                                <DeviceIcon className="h-4 w-4 mr-2" />
                                {deviceMode.charAt(0).toUpperCase() + deviceMode.slice(1)}
                                <ChevronDown className="h-4 w-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-32 bg-[hsl(var(--surface))] border-[hsl(var(--border))] shadow-[hsl(var(--shadow-lg))]">
                            <DropdownMenuItem onClick={() => onDeviceChange('desktop')} className="text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]">
                                <Monitor className="h-4 w-4 mr-2" />
                                Desktop
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onDeviceChange('tablet')} className="text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]">
                                <Tablet className="h-4 w-4 mr-2" />
                                Tablet
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onDeviceChange('mobile')} className="text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]">
                                <Smartphone className="h-4 w-4 mr-2" />
                                Mobile
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User Avatar */}
                    <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0">
                        <User className="h-5 w-5 text-[hsl(var(--text-muted))]" />
                    </Button>

                    {/* Publish Button */}
                    <Button
                        onClick={onPublish}
                        size="sm"
                        className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-600))] text-white shadow-[hsl(var(--shadow-soft))] hover:shadow-[hsl(var(--shadow-lg))] transition-all duration-200"
                    >
                        <Play className="h-4 w-4 mr-2" />
                        Publish
                    </Button>
                </div>
            </div>
        </div>
    )
}
