import { useState } from "react"
import NeonBackground from "@/components/NeonBackground"
import Header from "@/components/Header"
import HeroContent from "@/components/HeroContent"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NeonBackground />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroContent />
    </div>
  )
}
