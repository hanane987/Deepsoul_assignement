"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import { Sparkle, Heart, ArrowRight, MousePointer, Star, Shield, Brain, Users } from "lucide-react"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const mainControls = useAnimation()
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isInView, mainControls])

  // Calculate movement for the floating elements based on mouse position
  const calcMovement = (factor = 1) => {
    const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0
    const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0

    const moveX = ((mousePosition.x - centerX) / 50) * factor
    const moveY = ((mousePosition.y - centerY) / 50) * factor

    return { x: moveX, y: moveY }
  }

  // Create particles
  const createParticles = () => {
    return Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          background:
            i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--secondary))" : "hsl(var(--accent))",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -Math.random() * 100 - 50],
          x: [0, (Math.random() - 0.5) * 50],
          opacity: [0, 0.7, 0],
          scale: [0, Math.random() + 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: Math.random() * 5,
        }}
      />
    ))
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <motion.div className="absolute inset-0 -z-10" style={{ opacity }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 to-transparent"></div>
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-30"
          style={{ y: y1, x: calcMovement(-1).x, rotate: calcMovement(-1).x / 5 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-30"
          style={{ y: y2, x: calcMovement().x, rotate: calcMovement().x / 5 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-20"
          style={{ y: y1, x: calcMovement(0.5).x, rotate: calcMovement(0.5).x / 5 }}
        ></motion.div>
      </motion.div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full border border-primary/30 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full border border-secondary/30 opacity-50"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-accent/30 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          x: calcMovement(2).x,
          y: calcMovement(2).y,
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/10 hidden lg:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
        style={{
          x: calcMovement(-2).x,
          y: calcMovement(-2).y,
        }}
      ></motion.div>

      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{createParticles()}</div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10"
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Begin your healing journey today</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Find Your Path to{" "}
              </motion.span>
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="relative z-10 gradient-text">Inner Peace</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 skew-x-3"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                ></motion.span>
              </motion.span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              DeepSoul provides a safe space for emotional healing, personal growth, and mental wellness through
              therapy, self-help tools, and community support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="text-base rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base rounded-full border-primary hover:bg-primary/5 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">Learn More</span>
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="hidden lg:flex items-center justify-center lg:justify-start mt-16 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex flex-col items-center mr-3"
              >
                <MousePointer className="h-4 w-4" />
                <motion.div
                  className="h-10 w-0.5 bg-muted-foreground/30 mt-1"
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="w-full lg:w-1/2 relative z-10"
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Ripple effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.span
                  className="absolute w-full h-full rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <motion.span
                  className="absolute w-full h-full rounded-full border-2 border-primary/20"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              </div>

              {/* Main image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden morph-shape shadow-xl border border-white/10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                style={{
                  x: calcMovement(-0.5).x,
                  y: calcMovement(-0.5).y,
                  rotate: calcMovement(-0.2).x / 10,
                }}
              >
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Person meditating peacefully"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                  animate={{
                    opacity: [0.6, 0.4, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Interactive hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-secondary/0"
                  whileHover={{
                    background: "linear-gradient(to top right, rgba(var(--primary), 0.2), rgba(var(--secondary), 0.2))",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-white dark:bg-card shadow-lg rounded-full p-3 border border-primary/20"
                initial={{ y: 20, opacity: 0, rotate: -10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.4)",
                }}
                style={{
                  x: calcMovement(1).x,
                  y: calcMovement(1).y,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Heart className="h-8 w-8 text-secondary" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -left-6 top-1/4 bg-primary/80 text-white rounded-full p-2 shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{
                  x: calcMovement(1.5).x,
                  y: calcMovement(1.5).y,
                }}
              >
                <Sparkle className="h-5 w-5" />
              </motion.div>

              <motion.div
                className="absolute right-10 top-10 bg-secondary/80 text-white rounded-full px-3 py-1 text-sm font-medium shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                style={{
                  x: calcMovement(-1.5).x,
                  y: calcMovement(-1.5).y,
                }}
              >
                Mindfulness
              </motion.div>

              <motion.div
                className="absolute left-10 bottom-10 bg-accent/80 text-white rounded-full px-3 py-1 text-sm font-medium shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                style={{
                  x: calcMovement(1.2).x,
                  y: calcMovement(1.2).y,
                }}
              >
                <div className="flex items-center">
                  <Brain className="h-4 w-4 mr-1" />
                  <span>Mental Wellness</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 md:mt-28"
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {[
            { number: "10K+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
            { number: "500+", label: "Certified Therapists", icon: <Shield className="h-5 w-5" /> },
            { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5" /> },
            { number: "24/7", label: "Support Available", icon: <Heart className="h-5 w-5" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl gradient-border hover-card relative group overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">{stat.icon}</div>
              </div>

              <motion.p
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.p>
              <motion.p
                className="text-muted-foreground mt-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
