"use client"

import { motion } from "framer-motion"

export default function TherapySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const therapyOptions = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists tailored to your specific needs.",
      icon: "👤",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive environment.",
      icon: "👥",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Couples Therapy",
      description: "Strengthen your relationship with professional guidance and support.",
      icon: "💞",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <motion.section
      id="therapy"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#001845] to-[#001233] dark:from-[#000c2b] dark:to-[#001845]"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#fffae6 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#001233]/10 to-[#ff9966]/5 blur-[60px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-tr from-[#ff9966]/10 to-[#fffae6]/5 blur-[70px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
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
            Professional Support
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]"
          >
            Therapy That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]">
              Works For You
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-[#fffae6] dark:text-[#fffae6]">
            Connect with licensed therapists who specialize in various mental health areas. Our platform makes
            professional help accessible, affordable, and convenient.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
          {therapyOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -5px rgba(0, 35, 121, 0.2), 0 10px 20px -5px rgba(0, 35, 121, 0.1)",
              }}
              className="bg-gradient-to-br from-[#001845] to-[#001233] dark:from-[#000c2b] dark:to-[#001845] rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,35,121,0.1)] transition-all duration-300 border border-[#001233] dark:border-[#001845] relative overflow-hidden group backdrop-blur-sm"
            >
              <motion.div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#001233]/10 to-[#ff9966]/5 -mr-10 -mt-10 group-hover:scale-[3] transition-transform duration-700" />
              <motion.div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tr from-[#ff9966]/10 to-[#fffae6]/5 -ml-10 -mb-10 group-hover:scale-[3] transition-transform duration-700 delay-100" />

              <div className="mb-6 relative z-10 overflow-hidden rounded-xl h-40">
                <img
                  src={option.image || "/placeholder.svg"}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-4xl">{option.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-[#ffbb99] dark:text-[#ffbb99] relative z-10 transform group-hover:translate-x-2 transition-transform duration-300">
                {option.title}
              </h3>
              <p className="text-[#fffae6] dark:text-[#fffae6] mb-6 relative z-10">{option.description}</p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                  background: "linear-gradient(to right, #ff9966, #ffbb99)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] relative z-10 transition-all duration-300"
              >
                Learn More
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
            Find Your Therapist Today
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
