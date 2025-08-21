"use client"

import React, { useState } from 'react'
import { Heart, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ChatInterfaceProps {
    isExpanded: boolean
    onToggle: () => void
}

export function ChatInterface({ isExpanded, onToggle }: ChatInterfaceProps) {
    const [inputValue, setInputValue] = useState('')

    const messages = [
        {
            type: 'user',
            content: 'Create a professional dashboard',
            timestamp: 'Just now'
        },
        {
            type: 'ai',
            content: `I'll create a beautiful professional design with modern styling using your color theme. Let me build this step by step...`,
            timestamp: 'Just now'
        }
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue.trim()) {
            // Handle chat submission
            setInputValue('')
        }
    }

    return (
        <div className="border-t border-border">
            {/* Agent Costs Banner */}
            <div className="p-3 bg-muted/50 border-b border-border">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Agent costs adapt to task complexity</span>
                    <button className="text-xs text-primary hover:underline">Read more</button>
                </div>
            </div>

            {/* Chat Messages */}
            {isExpanded && (
                <div className="flex-1 overflow-y-auto p-4 max-h-48">
                    <div className="space-y-3">
                        {messages.map((message, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.type === 'user'
                                        ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]'
                                        : 'bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-pink))]'
                                    }`}>
                                    {message.type === 'user' ? (
                                        <span className="text-white text-xs font-medium">U</span>
                                    ) : (
                                        <Heart className="h-3 w-3 text-white" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className={`rounded-lg p-2 text-xs ${message.type === 'user'
                                            ? 'bg-muted'
                                            : 'bg-gradient-to-r from-[hsl(var(--brand-pink))]/10 to-[hsl(var(--brand-blue))]/10 border border-[hsl(var(--brand-pink))]/20'
                                        }`}>
                                        <p className="text-foreground">{message.content}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="p-4">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask Buildro AI..."
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button type="submit" size="sm" className="bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] hover:from-[hsl(var(--brand-pink))]/90 hover:to-[hsl(var(--brand-blue))]/90">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </form>

                <div className="flex items-center justify-between mt-2">
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        + Edit
                    </button>
                    <button
                        onClick={onToggle}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
                    >
                        <span>Chat</span>
                        {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>
                </div>
            </div>
        </div>
    )
}
