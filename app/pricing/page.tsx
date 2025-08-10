"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";
import { useState } from "react";
import { Testimonials } from "@/components/testimonials";

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);

    // Pricing data with monthly/yearly calculations
    const pricingData = {
        free: {
            monthly: 0,
            yearly: 0,
            features: [
                "4 messages/month",
                "3 projects",
                "Free AI Debugging"
            ]
        },
        pro: {
            monthly: 25,
            yearly: 250, // 2 months free
            features: [
                "4 messages/month",
                "Chat support",
                "Free AI debugging",
                "Build unlimited projects",
                "Publish your app to the web",
                "Built-in database + real integrations (Auth, Stripe & more)"
            ]
        },
        copilot: {
            monthly: 100,
            yearly: 1000, // 2 months free
            features: [
                "4 messages/month",
                "Priority Chat support - respond within 24 hours",
                "Free AI debugging",
                "Build unlimited projects",
                "Publish your app to the web",
                "Built-in database + real integrations (Auth, Stripe & more)"
            ]
        }
    };

    const getPrice = (plan: keyof typeof pricingData) => {
        const data = pricingData[plan];
        return isYearly ? data.yearly : data.monthly;
    };

    const getPeriod = () => isYearly ? "/ Year" : "/ Month";

    return (
        <>


            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative  px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center  mt-32">
                        <div className="mb-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Plans & Billing
                            </h1>
                            {/* Decorative line with circles */}
                            <div className="flex justify-center items-center mb-8">
                                <div className="w-32 h-px bg-border"></div>
                                <div className="flex gap-2 mx-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="w-32 h-px bg-border"></div>
                            </div>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Start for free. Upgrade to get the capacity that exactly matches your team's needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Toggle */}
                <section className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-center mb-12">
                            <div className="bg-muted rounded-full p-1 shadow-sm">
                                <div className="flex">
                                    <button
                                        onClick={() => setIsYearly(false)}
                                        className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${!isYearly
                                            ? 'bg-primary text-primary-foreground shadow-lg transform translate-y-0'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        <Calendar className="h-4 w-4" />
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setIsYearly(true)}
                                        className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${isYearly
                                            ? 'bg-primary text-primary-foreground shadow-lg transform translate-y-0'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        <Calendar className="h-4 w-4" />
                                        Yearly
                                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full ml-1">
                                            Save 20%
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Free Plan */}
                            <Card className="relative hover:shadow-xl transition-all duration-300 bg-card border-border rounded-3xl shadow-lg">
                                <CardHeader className="text-center pb-6">
                                    <CardTitle className="text-2xl text-foreground font-bold">Free</CardTitle>
                                    <CardDescription className="text-base mt-2 text-muted-foreground">
                                        For dipping your toes in.
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-5xl font-bold text-foreground">${getPrice('free')}</span>
                                        <span className="text-muted-foreground text-lg">{getPeriod()}</span>
                                    </div>
                                    {/* Gray box with messages */}
                                    <div className="mt-4 p-3 bg-muted rounded-xl">
                                        <span className="text-sm text-muted-foreground">4 messages/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-4 mb-8">
                                        {pricingData.free.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* No button for free plan as shown in image */}
                                </CardContent>
                            </Card>

                            {/* Pro Plan */}
                            <Card className="relative hover:shadow-xl transition-all duration-300 bg-card rounded-3xl shadow-lg">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <Badge className="bg-foreground text-background px-4 py-2 rounded-full font-semibold text-sm">
                                        Most Popular
                                    </Badge>
                                </div>
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 rounded-3xl p-[2px]" style={{
                                    background: 'var(--brand-gradient)'
                                }}>
                                    <div className="bg-card rounded-3xl h-full w-full"></div>
                                </div>
                                <div className="relative z-10">
                                    <CardHeader className="text-center pb-6">
                                        <CardTitle className="text-2xl text-foreground font-bold">Pro</CardTitle>
                                        <CardDescription className="text-base mt-2 text-muted-foreground">
                                            For bigger projects & more usage
                                        </CardDescription>
                                        <div className="mt-4">
                                            <span className="text-5xl font-bold text-foreground">${getPrice('pro')}</span>
                                            <span className="text-muted-foreground text-lg">{getPeriod()}</span>
                                            {isYearly && (
                                                <div className="text-sm text-primary mt-1">
                                                    Save ${(pricingData.pro.monthly * 12) - pricingData.pro.yearly}/year
                                                </div>
                                            )}
                                        </div>
                                        {/* Gray box with messages */}
                                        <div className="mt-4 p-3 bg-muted rounded-xl">
                                            <span className="text-sm text-muted-foreground">4 messages/month</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <ul className="space-y-4 mb-8">
                                            {pricingData.pro.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                                    <span className="text-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full py-3 rounded-xl font-semibold text-lg" style={{
                                            background: 'var(--brand-gradient)',
                                            color: 'white',
                                            border: 'none'
                                        }}>
                                            Get Started Now
                                        </Button>
                                    </CardContent>
                                </div>
                            </Card>

                            {/* Copilot Plan */}
                            <Card className="relative hover:shadow-xl transition-all duration-300 bg-card border-border rounded-3xl shadow-lg">
                                <CardHeader className="text-center pb-6">
                                    <CardTitle className="text-2xl text-foreground font-bold">Copilot</CardTitle>
                                    <CardDescription className="text-base mt-2 text-muted-foreground">
                                        Pro plan, with human support when you need it
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-5xl font-bold text-foreground">${getPrice('copilot')}</span>
                                        <span className="text-muted-foreground text-lg">{getPeriod()}</span>
                                        {isYearly && (
                                            <div className="text-sm text-primary mt-1">
                                                Save ${(pricingData.copilot.monthly * 12) - pricingData.copilot.yearly}/year
                                            </div>
                                        )}
                                    </div>
                                    {/* Gray box with messages */}
                                    <div className="mt-4 p-3 bg-muted rounded-xl">
                                        <span className="text-sm text-muted-foreground">4 messages/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-4 mb-8">
                                        {pricingData.copilot.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full py-3 rounded-xl font-semibold text-lg border-2" style={{
                                        borderImage: 'var(--brand-gradient) 1',
                                        background: 'transparent',
                                        color: 'var(--foreground)'
                                    }}>
                                        Get Started Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>



            </div>
            <Testimonials />
        </>
    );
} 