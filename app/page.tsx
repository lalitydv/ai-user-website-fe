import { Hero } from "@/components/hero"
import { Community } from "@/components/community"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"

import { VideoIntro } from "@/components/video-intro"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Community />
      <VideoIntro />
      <Pricing />
      <Process />
      <Testimonials />
     
    </main>
  )
}
