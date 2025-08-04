"use client"

import React, { useEffect, useRef } from 'react'

export function KnowledgeTransferAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Animation variables
        let animationId: number
        const particles: Particle[] = []
        const maxParticles = 20

        // Particle class
        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number
            opacity: number
            life: number
            maxLife: number
            path: { x: number; y: number }[]
            currentPathIndex: number

            constructor(startX: number, startY: number) {
                this.x = startX
                this.y = startY
                this.size = Math.random() * 4 + 2
                this.opacity = 1
                this.life = 0
                this.maxLife = 200
                this.path = []
                this.currentPathIndex = 0

                // Generate curved path from robot to human
                this.generatePath(startX, startY)

                // Set initial velocity towards first path point
                const firstPoint = this.path[1] || this.path[0]
                const dx = firstPoint.x - this.x
                const dy = firstPoint.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                this.vx = (dx / distance) * 2
                this.vy = (dy / distance) * 2
            }

            generatePath(startX: number, startY: number) {
                if (!canvas) return
                const endX = canvas.width * 0.8 // Human position
                const endY = startY
                const controlX = (startX + endX) / 2
                const controlY = startY - 100 // Curve upward

                // Generate points along a quadratic Bezier curve
                for (let t = 0; t <= 1; t += 0.02) {
                    const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX
                    const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY
                    this.path.push({ x, y })
                }
            }

            update() {
                this.life++

                if (this.currentPathIndex < this.path.length - 1) {
                    const targetPoint = this.path[this.currentPathIndex + 1]
                    const dx = targetPoint.x - this.x
                    const dy = targetPoint.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 5) {
                        this.currentPathIndex++
                    } else {
                        this.vx = (dx / distance) * 2
                        this.vy = (dy / distance) * 2
                    }
                }

                this.x += this.vx
                this.y += this.vy
                this.opacity = 1 - (this.life / this.maxLife)
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save()
                ctx.globalAlpha = this.opacity

                // Draw particle as a glowing circle with trail effect
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
                gradient.addColorStop(0.3, 'rgba(247, 35, 83, 0.7)')
                gradient.addColorStop(0.7, 'rgba(35, 94, 173, 0.4)')
                gradient.addColorStop(1, 'rgba(35, 94, 173, 0)')

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
                ctx.fill()

                // Inner bright core
                const coreGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
                coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
                coreGradient.addColorStop(0.5, 'rgba(247, 35, 83, 0.8)')
                coreGradient.addColorStop(1, 'rgba(247, 35, 83, 0)')

                ctx.fillStyle = coreGradient
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()

                // Particle trail
                const trailLength = 5
                for (let i = 1; i <= trailLength; i++) {
                    const trailX = this.x - this.vx * i * 0.5
                    const trailY = this.y - this.vy * i * 0.5
                    const trailOpacity = this.opacity * (1 - i / trailLength) * 0.3

                    ctx.globalAlpha = trailOpacity
                    ctx.fillStyle = 'rgba(247, 35, 83, 0.5)'
                    ctx.beginPath()
                    ctx.arc(trailX, trailY, this.size * 0.5, 0, Math.PI * 2)
                    ctx.fill()
                }

                ctx.restore()
            }

            isDead() {
                return this.life >= this.maxLife
            }
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Add new particles
            if (particles.length < maxParticles && Math.random() < 0.1) {
                const startX = canvas.width * 0.2 // Robot position
                const startY = canvas.height * 0.5
                particles.push(new Particle(startX, startY))
            }

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i]
                particle.update()
                particle.draw(ctx)

                if (particle.isDead()) {
                    particles.splice(i, 1)
                }
            }

            // Draw robot
            drawRobot(ctx, canvas.width * 0.2, canvas.height * 0.5)

            // Draw human
            drawHuman(ctx, canvas.width * 0.8, canvas.height * 0.5)

            // Draw "Builder AI" text
            drawBuilderAIText(ctx, canvas.width * 0.5, canvas.height * 0.4)

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationId)
        }
    }, [])

    const drawRobot = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.save()

        // Robot body with metallic effect
        const bodyGradient = ctx.createLinearGradient(x - 30, y - 40, x + 30, y + 40)
        bodyGradient.addColorStop(0, '#4A5568')
        bodyGradient.addColorStop(0.5, '#718096')
        bodyGradient.addColorStop(1, '#2D3748')
        ctx.fillStyle = bodyGradient
        ctx.fillRect(x - 30, y - 40, 60, 80)

        // Robot head with metallic effect
        const headGradient = ctx.createLinearGradient(x - 25, y - 70, x + 25, y - 30)
        headGradient.addColorStop(0, '#2D3748')
        headGradient.addColorStop(0.5, '#4A5568')
        headGradient.addColorStop(1, '#1A202C')
        ctx.fillStyle = headGradient
        ctx.fillRect(x - 25, y - 70, 50, 40)

        // Robot eyes with glow effect
        const eyeGlow = ctx.createRadialGradient(x - 11, y - 56, 0, x - 11, y - 56, 12)
        eyeGlow.addColorStop(0, 'rgba(247, 35, 83, 0.8)')
        eyeGlow.addColorStop(1, 'rgba(247, 35, 83, 0)')
        ctx.fillStyle = eyeGlow
        ctx.beginPath()
        ctx.arc(x - 11, y - 56, 12, 0, Math.PI * 2)
        ctx.fill()

        const eyeGlow2 = ctx.createRadialGradient(x + 11, y - 56, 0, x + 11, y - 56, 12)
        eyeGlow2.addColorStop(0, 'rgba(247, 35, 83, 0.8)')
        eyeGlow2.addColorStop(1, 'rgba(247, 35, 83, 0)')
        ctx.fillStyle = eyeGlow2
        ctx.beginPath()
        ctx.arc(x + 11, y - 56, 12, 0, Math.PI * 2)
        ctx.fill()

        // Robot eyes
        ctx.fillStyle = '#F72353'
        ctx.fillRect(x - 15, y - 60, 8, 8)
        ctx.fillRect(x + 7, y - 60, 8, 8)

        // Robot antenna
        ctx.strokeStyle = '#4A5568'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(x, y - 70)
        ctx.lineTo(x, y - 85)
        ctx.stroke()

        // Antenna light
        ctx.fillStyle = '#F72353'
        ctx.beginPath()
        ctx.arc(x, y - 85, 4, 0, Math.PI * 2)
        ctx.fill()

        // Mind/Knowledge area (glowing)
        const gradient = ctx.createRadialGradient(x, y - 20, 0, x, y - 20, 30)
        gradient.addColorStop(0, 'rgba(247, 35, 83, 0.4)')
        gradient.addColorStop(0.7, 'rgba(247, 35, 83, 0.1)')
        gradient.addColorStop(1, 'rgba(247, 35, 83, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y - 20, 30, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
    }

    const drawHuman = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.save()

        // Human body with clothing effect
        const bodyGradient = ctx.createLinearGradient(x - 20, y - 30, x + 20, y + 30)
        bodyGradient.addColorStop(0, '#4A5568')
        bodyGradient.addColorStop(0.5, '#718096')
        bodyGradient.addColorStop(1, '#2D3748')
        ctx.fillStyle = bodyGradient
        ctx.fillRect(x - 20, y - 30, 40, 60)

        // Human head with skin tone
        const headGradient = ctx.createRadialGradient(x, y - 50, 0, x, y - 50, 20)
        headGradient.addColorStop(0, '#F7FAFC')
        headGradient.addColorStop(0.7, '#E2E8F0')
        headGradient.addColorStop(1, '#CBD5E0')
        ctx.fillStyle = headGradient
        ctx.beginPath()
        ctx.arc(x, y - 50, 20, 0, Math.PI * 2)
        ctx.fill()

        // Hair
        ctx.fillStyle = '#2D3748'
        ctx.beginPath()
        ctx.arc(x, y - 55, 15, Math.PI, 0)
        ctx.fill()

        // Eyes
        ctx.fillStyle = '#2D3748'
        ctx.beginPath()
        ctx.arc(x - 6, y - 52, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x + 6, y - 52, 2, 0, Math.PI * 2)
        ctx.fill()

        // Mind/Knowledge area (glowing)
        const gradient = ctx.createRadialGradient(x, y - 30, 0, x, y - 30, 30)
        gradient.addColorStop(0, 'rgba(35, 94, 173, 0.4)')
        gradient.addColorStop(0.7, 'rgba(35, 94, 173, 0.1)')
        gradient.addColorStop(1, 'rgba(35, 94, 173, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y - 30, 30, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
    }

    const drawBuilderAIText = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.save()

        // Animated glow effect
        const time = Date.now() * 0.001
        const glowIntensity = 0.3 + 0.2 * Math.sin(time * 2)

        // Outer glow
        ctx.shadowColor = '#F72353'
        ctx.shadowBlur = 20 + glowIntensity * 10
        ctx.fillStyle = 'rgba(247, 35, 83, 0.1)'
        ctx.font = 'bold 32px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Builder AI', x, y)

        // Text shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
        ctx.shadowBlur = 3
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
        ctx.fillText('Builder AI', x + 2, y + 2)

        // Main text with gradient
        ctx.shadowBlur = 0
        const gradient = ctx.createLinearGradient(x - 60, y, x + 60, y)
        gradient.addColorStop(0, '#F72353')
        gradient.addColorStop(0.5, '#FF6B9D')
        gradient.addColorStop(1, '#235EAD')
        ctx.fillStyle = gradient
        ctx.fillText('Builder AI', x, y)

        // Animated underline
        const underlineY = y + 5
        const underlineWidth = 120 + Math.sin(time * 3) * 10
        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(x - underlineWidth / 2, underlineY)
        ctx.lineTo(x + underlineWidth / 2, underlineY)
        ctx.stroke()

        ctx.restore()
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-10">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ background: 'transparent' }}
            />
        </div>
    )
} 