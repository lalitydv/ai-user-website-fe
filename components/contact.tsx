import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Construction Ave
                    <br />
                    Building City, BC 12345
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@buildro.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Mon-Fri: 8AM-6PM
                    <br />
                    Sat: 9AM-4PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Project Type</Label>
                <Input id="project" placeholder="Kitchen Remodel, New Construction, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
