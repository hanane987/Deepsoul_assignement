"use client"

import { motion } from "framer-motion"
import { Heart, Users, BookOpen, Calendar, Moon, Activity } from "lucide-react"

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: <Heart className="w-6 h-6 text-[#fffae6]" />,
      title: "Emotional Support",
      description: "Access compassionate support whenever you need it, day or night.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      icon: <Users className="w-6 h-6 text-[#fffae6]" />,
      title: "Community Connection",
      description: "Join supportive communities of people who understand your journey.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#fffae6]" />,
      title: "Educational Resources",
      description: "Evidence-based articles, videos, and tools for mental wellness.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#fffae6]" />,
      title: "Therapy Scheduling",
      description: "Easily book and manage therapy sessions with licensed professionals.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      icon: <Moon className="w-6 h-6 text-[#fffae6]" />,
      title: "Sleep & Relaxation",
      description: "Guided meditations and sleep stories to help you rest and recharge.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      icon: <Activity className="w-6 h-6 text-[#fffae6]" />,
      title: "Mood Tracking",
      description: "Track your emotional patterns to gain insights and measure progress.",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#001845] to-[#001233] dark:from-[#000c2b] dark:to-[#001845]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff9966]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff9966]/30 to-transparent"></div>

      <motion.div
        className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#001233]/10 to-[#ff9966]/5 blur-[60px]"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-60 h-60 rounded-full bg-gradient-to-tr from-[#ff9966]/10 to-[#fffae6]/5 blur-[70px]"
        animate={{
          x: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 5,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] font-medium text-sm shadow-lg"
          >
            Comprehensive Tools
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]"
          >
            Features Designed For Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]">
              Wellbeing
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-[#fffae6] dark:text-[#fffae6]">
            DeepSoul offers a comprehensive suite of tools and resources to support every aspect of your mental health
            journey.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -5px rgba(0, 35, 121, 0.2), 0 10px 20px -5px rgba(0, 35, 121, 0.1)",
              }}
              className="bg-gradient-to-br from-[#001845] to-[#001233] dark:from-[#000c2b] dark:to-[#001845] rounded-2xl p-8 border border-[#001233] dark:border-[#001845] shadow-[0_10px_30px_rgba(0,35,121,0.1)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 mr-4 rounded-xl bg-gradient-to-br from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] shadow-[0_10px_20px_rgba(0,35,121,0.1)] transform group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
              
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#ffbb99] dark:text-[#ffbb99]">{feature.title}</h3>
              <p className="text-[#fffae6] dark:text-[#fffae6]">{feature.description}</p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px 2px rgba(255, 159, 102, 0.3)",
                  background: "linear-gradient(to right, #ff9966, #ffbb99)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white text-sm font-medium shadow-[0_5px_15px_rgba(255,95,0,0.3)] transition-all duration-300"
              >
                Explore
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
              background: "linear-gradient(to right, #ff9966, #ffbb99)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white rounded-lg font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
