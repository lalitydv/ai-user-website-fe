import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Modern Family Home",
    category: "Residential",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete custom home construction with contemporary design",
  },
  {
    title: "Office Complex Renovation",
    category: "Commercial",
    image: "/placeholder.svg?height=300&width=400",
    description: "Full renovation of 50,000 sq ft office complex",
  },
  {
    title: "Luxury Kitchen Remodel",
    category: "Remodeling",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-end kitchen renovation with custom cabinetry",
  },
  {
    title: "Retail Store Build-out",
    category: "Commercial",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete retail space construction and design",
  },
  {
    title: "Bathroom Renovation",
    category: "Remodeling",
    image: "/placeholder.svg?height=300&width=400",
    description: "Spa-like bathroom transformation with premium finishes",
  },
  {
    title: "Warehouse Construction",
    category: "Commercial",
    image: "/placeholder.svg?height=300&width=400",
    description: "Large-scale warehouse facility construction",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects that showcase our expertise and quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
