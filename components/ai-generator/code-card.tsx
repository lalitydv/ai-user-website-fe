"use client"

import React from 'react'
import { WidgetCard } from './widget-card'

interface CodeCardProps {
    filename: string
    code: string
    language?: string
    onClose?: () => void
    className?: string
}

export function CodeCard({
    filename,
    code,
    language = 'typescript',
    onClose,
    className = ''
}: CodeCardProps) {
    return (
        <WidgetCard
            title="Code"
            filename={filename}
            status="success"
            onClose={onClose}
            className={`w-96 max-w-full ${className}`}
        >
            <div className="bg-[hsl(var(--bg-muted))] rounded-[hsl(var(--radius-md))] p-3 overflow-x-auto">
                <pre className="text-xs font-mono text-[hsl(var(--text))] leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </WidgetCard>
    )
}

// Example usage with sample code
export function SampleCodeCard({ onClose, className = '' }: { onClose?: () => void, className?: string }) {
    const sampleCode = `import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity 
} from 'lucide-react'

interface DashboardStatsProps {
  totalUsers: number
  revenue: number
  growth: number
  activeUsers: number
}

export function DashboardStats({ 
  totalUsers, 
  revenue, 
  growth, 
  activeUsers 
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +{growth}% from last month
          </p>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${revenue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            +12% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Growth</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{growth}%</div>
          <p className="text-xs text-muted-foreground">
            +5% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +8% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}`

    return (
        <CodeCard
            filename="dashboard-stats.tsx"
            code={sampleCode}
            language="typescript"
            onClose={onClose}
            className={className}
        />
    )
}
