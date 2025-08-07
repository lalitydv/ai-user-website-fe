import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Licensed and fully insured",
  "15+ years of experience",
  "Quality materials and craftsmanship",
  "On-time project completion",
  "Competitive pricing",
  "24/7 customer support",
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Buildro?</h2>
              <p className="text-lg text-gray-600">
                With over 15 years in the construction industry, Buildro has established itself as a trusted partner for
                residential and commercial projects. Our commitment to quality, reliability, and customer satisfaction
                sets us apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Construction team"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
