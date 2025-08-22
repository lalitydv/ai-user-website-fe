"use client"

import React from 'react'
import { WidgetCard } from './widget-card'
import { Monitor, Tablet, Smartphone, BarChart3, Users, DollarSign, Activity } from 'lucide-react'

interface PreviewCardProps {
    onClose?: () => void
    deviceMode: 'desktop' | 'tablet' | 'mobile'
    onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void
    className?: string
}

export function PreviewCard({
    onClose,
    deviceMode,
    onDeviceChange,
    className = ''
}: PreviewCardProps) {
    const deviceIcons = {
        desktop: Monitor,
        tablet: Tablet,
        mobile: Smartphone
    }

    const deviceSizes = {
        desktop: 'w-full h-96',
        tablet: 'w-80 h-96',
        mobile: 'w-64 h-96'
    }

    const DeviceIcon = deviceIcons[deviceMode]

    return (
        <WidgetCard
            title="Preview"
            onClose={onClose}
            className={`${className}`}
        >
            <div className="space-y-4">
                {/* Device Selector */}
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-[hsl(var(--text-muted))]">Device:</span>
                    <div className="flex bg-[hsl(var(--surface-2))] rounded-[hsl(var(--radius-md))] p-1">
                        {(['desktop', 'tablet', 'mobile'] as const).map((device) => {
                            const Icon = deviceIcons[device]
                            return (
                                <button
                                    key={device}
                                    onClick={() => onDeviceChange(device)}
                                    className={`p-2 rounded-[hsl(var(--radius-sm))] transition-all duration-200 ${deviceMode === device
                                        ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-[hsl(var(--shadow-soft))]'
                                        : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Preview Frame */}
                <div className={`${deviceSizes[deviceMode]} mx-auto border-2 border-dashed border-[hsl(var(--border))] rounded-[hsl(var(--radius-lg))] bg-[hsl(var(--surface-2))] flex items-center justify-center overflow-hidden`}>
                    <div className="w-full h-full p-4">
                        {/* Dashboard Preview Content */}
                        <div className="space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[hsl(var(--text))]">Dashboard</h3>
                                <div className="w-3 h-3 bg-[hsl(var(--success))] rounded-full"></div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[hsl(var(--surface))] p-3 rounded-[hsl(var(--radius-md))] text-center">
                                    <Users className="h-6 w-6 text-[hsl(var(--brand))] mx-auto mb-2" />
                                    <div className="text-lg font-bold text-[hsl(var(--text))]">12.5K</div>
                                    <div className="text-xs text-[hsl(var(--text-muted))]">Users</div>
                                </div>
                                <div className="bg-[hsl(var(--surface))] p-3 rounded-[hsl(var(--radius-md))] text-center">
                                    <DollarSign className="h-6 w-6 text-[hsl(var(--brand))] mx-auto mb-2" />
                                    <div className="text-lg font-bold text-[hsl(var(--text))]">$45.2K</div>
                                    <div className="text-xs text-[hsl(var(--text-muted))]">Revenue</div>
                                </div>
                                <div className="bg-[hsl(var(--surface))] p-3 rounded-[hsl(var(--radius-md))] text-center">
                                    <Activity className="h-6 w-6 text-[hsl(var(--brand))] mx-auto mb-2" />
                                    <div className="text-lg font-bold text-[hsl(var(--text))]">89%</div>
                                    <div className="text-xs text-[hsl(var(--text-muted))]">Uptime</div>
                                </div>
                                <div className="bg-[hsl(var(--surface))] p-3 rounded-[hsl(var(--radius-md))] text-center">
                                    <BarChart3 className="h-6 w-6 text-[hsl(var(--brand))] mx-auto mb-2" />
                                    <div className="text-lg font-bold text-[hsl(var(--text))]">+23%</div>
                                    <div className="text-xs text-[hsl(var(--text-muted))]">Growth</div>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="bg-[hsl(var(--surface))] p-3 rounded-[hsl(var(--radius-md))]">
                                <div className="h-20 bg-gradient-to-r from-[hsl(var(--brand))/20] to-[hsl(var(--brand-600))/20] rounded-[hsl(var(--radius-sm))] flex items-center justify-center">
                                    <BarChart3 className="h-8 w-8 text-[hsl(var(--brand))]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Info */}
                <div className="text-center">
                    <p className="text-xs text-[hsl(var(--text-muted))]">
                        Live preview of your generated dashboard. Switch between device views to see responsive behavior.
                    </p>
                </div>
            </div>
        </WidgetCard>
    )
}
