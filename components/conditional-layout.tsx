"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ConditionalLayoutProps {
    children: React.ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
    const pathname = usePathname()
    const isGeneratingPage = pathname === '/generating'

    return (
        <>
            {!isGeneratingPage && <Header />}
            {children}
            {!isGeneratingPage && <Footer />}
        </>
    )
}
