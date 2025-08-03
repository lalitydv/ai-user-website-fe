import { Hero } from "@/components/hero"
import { Community } from "@/components/community"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Community />
      <Pricing />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  )
}
