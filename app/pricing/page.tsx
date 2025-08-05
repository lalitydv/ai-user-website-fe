import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <Badge variant="secondary" className="mb-4">
                            Pricing Plans
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Choose Your
                            <span className="text-blue-600"> Perfect Plan</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Start building amazing applications with our powerful AI platform. Choose the plan that fits your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Toggle */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-lg p-1 shadow-sm border">
                            <div className="flex">
                                <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium">
                                    Monthly
                                </button>
                                <button className="px-6 py-2 rounded-md text-gray-600 font-medium hover:text-gray-900">
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Free Plan */}
                        <Card className="relative hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Free</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$0</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <CardDescription className="text-base mt-2">
                                    Perfect for getting started
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "5 projects per month",
                                        "Basic AI assistance",
                                        "Community support",
                                        "Standard templates",
                                        "1GB storage"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full">
                                    Get Started Free
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Pro Plan */}
                        <Card className="relative hover:shadow-lg transition-shadow duration-300 border-blue-600">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-blue-600 text-white px-4 py-1">
                                    Most Popular
                                </Badge>
                            </div>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Pro</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$29</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <CardDescription className="text-base mt-2">
                                    For professional developers
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Unlimited projects",
                                        "Advanced AI features",
                                        "Priority support",
                                        "Custom templates",
                                        "10GB storage",
                                        "Team collaboration",
                                        "API access",
                                        "Analytics dashboard"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Start Pro Trial
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Enterprise Plan */}
                        <Card className="relative hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <CardDescription className="text-base mt-2">
                                    For large teams and organizations
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Everything in Pro",
                                        "Unlimited team members",
                                        "Custom integrations",
                                        "Dedicated support",
                                        "100GB storage",
                                        "Advanced security",
                                        "Custom branding",
                                        "SLA guarantee"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full">
                                    Contact Sales
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Compare Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See what's included in each plan
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Free</th>
                                    <th className="text-center py-4 px-6 font-semibold text-blue-600">Pro</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    { feature: "Projects", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                                    { feature: "AI Requests", free: "100/month", pro: "Unlimited", enterprise: "Unlimited" },
                                    { feature: "Storage", free: "1GB", pro: "10GB", enterprise: "100GB" },
                                    { feature: "Team Members", free: "1", pro: "5", enterprise: "Unlimited" },
                                    { feature: "Priority Support", free: "❌", pro: "✅", enterprise: "✅" },
                                    { feature: "Custom Templates", free: "❌", pro: "✅", enterprise: "✅" },
                                    { feature: "API Access", free: "❌", pro: "✅", enterprise: "✅" },
                                    { feature: "Analytics", free: "❌", pro: "✅", enterprise: "✅" }
                                ].map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                                        <td className="py-4 px-6 text-center text-gray-600">{row.free}</td>
                                        <td className="py-4 px-6 text-center text-blue-600 font-medium">{row.pro}</td>
                                        <td className="py-4 px-6 text-center text-gray-600">{row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about our pricing
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                question: "Can I change my plan at any time?",
                                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                            },
                            {
                                question: "Is there a free trial for paid plans?",
                                answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
                            },
                            {
                                question: "Can I cancel my subscription anytime?",
                                answer: "Absolutely! You can cancel your subscription at any time from your account settings."
                            }
                        ].map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of developers building amazing applications with our platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                            Start Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 