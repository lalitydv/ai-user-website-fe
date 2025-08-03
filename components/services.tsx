import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Home, Wrench, Building, PaintBucket, Zap } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom home building and major renovations with attention to every detail.",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial renovations.",
  },
  {
    icon: Hammer,
    title: "Remodeling",
    description: "Kitchen, bathroom, and whole-house remodeling services.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Professional repair services and ongoing maintenance solutions.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Complete interior design and finishing services.",
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    description: "Licensed electrical and plumbing installation and repairs.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive construction and renovation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
