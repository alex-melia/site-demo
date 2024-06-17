import AboutSection from "@/sections/About"
import FAQSection from "@/sections/FAQs"
import LandingSection from "@/sections/Landing"
import PricingSection from "@/sections/Pricing"
import TestimonialsSection from "@/sections/Testimonials"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <LandingSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  )
}
