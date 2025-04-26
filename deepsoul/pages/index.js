"use client"

import { useState, useEffect } from "react"
import HeroSection from "../components/HeroSection"
import TherapySection from "../components/TherapySection"
import CommunitySection from "../components/CommunitySection"
import FeaturesSection from "../components/FeaturesSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import TopMenuBar from "../components/TopMenuBar"

export default function Page() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Check for user preference
    const savedTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] text-[#fffae6] dark:text-[#fffae6]">
      <TopMenuBar theme={theme} setTheme={handleThemeChange} />
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}
