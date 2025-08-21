"use client"

import React from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CodeViewProps {
    selectedFile: string | null
}

export function CodeView({ selectedFile }: CodeViewProps) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        const codeText = `import React from 'react';
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

export default App;`

        await navigator.clipboard.writeText(codeText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="h-full bg-background p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground text-sm">
                        {selectedFile || 'src/App.tsx'}
                    </span>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {selectedFile ? 'tsx' : 'tsx'}
                    </Badge>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="bg-muted border-border text-foreground hover:bg-muted/80"
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                        </>
                    )}
                </Button>
            </div>

            <div className="bg-muted rounded-lg p-4 h-[calc(100%-60px)] overflow-auto">
                <pre className="text-foreground font-mono text-sm">
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
    )
}
