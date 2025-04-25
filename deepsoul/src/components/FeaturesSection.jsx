"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Heart, Brain, Users, BookOpen, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: <Heart className="h-10 w-10 text-secondary" />,
    title: "Emotional Support",
    description:
      "Access compassionate support whenever you need it, with professionals who truly care about your wellbeing.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Mental Wellness Tools",
    description:
      "Discover practical tools and techniques to manage stress, anxiety, and improve your overall mental health.",
  },
  {
    icon: <Users className="h-10 w-10 text-secondary" />,
    title: "Community Connection",
    description: "Join a supportive community of individuals on similar journeys, sharing experiences and growth.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Educational Resources",
    description: "Access a wealth of articles, videos, and guides to deepen your understanding of mental health.",
  },
  {
    icon: <Shield className="h-10 w-10 text-secondary" />,
    title: "Safe Environment",
    description: "Our platform prioritizes your privacy and creates a judgment-free space for healing and growth.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Accessibility",
    description: "Get help whenever you need it with round-the-clock access to resources and support.",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/10 to-transparent"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary/20 opacity-50 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-secondary/20 opacity-50 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How DeepSoul <span className="gradient-text">Supports You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform offers multiple pathways to emotional wellbeing and personal growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover-card gradient-border"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="mb-4 relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md"></div>
                <div className="relative bg-card rounded-full p-3 w-fit">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
