import React from 'react'

const HowWeWork = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        How We Work
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
                        From Concept To Completion — Our Process, Your Impact
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 strategy-grid">
                    {/* Strategy Point 01 */}
                    <div className="space-y-4 hover-lift p-6 rounded-lg transition-all duration-300">
                        <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-muted leading-none">01</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Instant Results</h3>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Transform your vision into functional code in seconds. Our AI understands your requirements and generates production-ready components instantly.
                        </p>
                    </div>

                    {/* Strategy Point 02 */}
                    <div className="space-y-4 hover-lift p-6 rounded-lg transition-all duration-300">
                        <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-muted  leading-none">02</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Industry-Specific Designs</h3>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Choose from expertly crafted templates designed for your industry. Each template is optimized for performance and user experience.
                        </p>
                    </div>

                    {/* Strategy Point 03 */}
                    <div className="space-y-4 hover-lift p-6 rounded-lg transition-all duration-300">
                        <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-muted  leading-none">03</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Developer-Friendly Output</h3>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Receive clean, semantic React JSX with Tailwind CSS. Our code follows best practices and is ready for immediate integration.
                        </p>
                    </div>

                    {/* Strategy Point 04 */}
                    <div className="space-y-4 hover-lift p-6 rounded-lg transition-all duration-300">
                        <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-muted  leading-none">04</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Creative Freedom</h3>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Customize every aspect of your application. Our platform gives you the flexibility to create unique solutions that match your brand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork
