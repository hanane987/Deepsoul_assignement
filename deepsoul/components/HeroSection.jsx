// File: components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts on the client
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateMovement = (axis, strength = 20) => {
    // Return 0 during SSR or if not mounted
    if (!mounted || typeof window === "undefined") {
      return 0;
    }
    const center = axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    return (position - center) / strength;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-16 px-4 flex items-center relative overflow-hidden bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#ffbb99]/20 to-[#ff9966]/10 dark:from-[#ffbb99]/10 dark:to-[#ff9966]/5 blur-[120px]"
          animate={{
            x: calculateMovement("x", 30),
            y: calculateMovement("y", 30),
            scale: [1, 1.05, 1],
          }}
          transition={{
            x: { type: "spring", damping: 50, stiffness: 100 },
            y: { type: "spring", damping: 50, stiffness: 100 },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#fffae6]/20 to-[#ffbb99]/10 dark:from-[#fffae6]/10 dark:to-[#ffbb99]/5 blur-[100px]"
          animate={{
            x: calculateMovement("x", -40),
            y: calculateMovement("y", -40),
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", damping: 50, stiffness: 100 },
            y: { type: "spring", damping: 50, stiffness: 100 },
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={containerVariants} className="text-left">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] font-medium text-sm shadow-lg"
          >
            Your Mental Wellness Journey Starts Here
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]"
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]">
              DeepSoul
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-[#fffae6] dark:text-[#fffae6] max-w-lg leading-relaxed"
          >
            A safe, supportive space where healing begins. Connect with professional therapists, supportive communities,
            and evidence-based tools for your mental health journey.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.5)",
                background: "linear-gradient(to right, #ff9966, #ffbb99)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white rounded-lg font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] backdrop-blur-sm transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px 5px rgba(0, 35, 121, 0.4)",
                background: "linear-gradient(to right, #001233, #001845)",
                color: "white",
                borderColor: "#001233",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-transparent to-transparent hover:from-[#001233] hover:to-[#001845] text-[#fffae6] dark:text-[#fffae6] rounded-lg font-medium border-2 border-[#ffbb99] dark:border-[#ffbb99] transition-all duration-300 shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative h-[500px] w-full">
          {/* Animated illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-[400px] h-[400px]"
              animate={{
                x: calculateMovement("x", -15),
                y: calculateMovement("y", -15),
              }}
              transition={{ type: "spring", damping: 40, stiffness: 90 }}
            >
              {/* Main circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#001233] via-[#003399] to-[#001845] dark:from-[#001233] dark:via-[#003399] dark:to-[#001845] opacity-20 dark:opacity-10"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Main image */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-[#ffbb99]/30 shadow-[0_0_30px_rgba(255,159,102,0.3)]"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <img
                  src="/images/brave.jpg"
                  alt="Person meditating"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Orbiting elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99] shadow-[0_0_15px_rgba(255,95,0,0.7)]"
                  animate={{
                    x: Math.cos(i * ((Math.PI * 2) / 3)) * 150,
                    y: Math.sin(i * ((Math.PI * 2) / 3)) * 150,
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 10px rgba(255,95,0,0.5)",
                      "0 0 20px rgba(255,95,0,0.8)",
                      "0 0 10px rgba(255,95,0,0.5)",
                    ],
                  }}
                  transition={{
                    x: {
                      duration: 10 + i * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                    y: {
                      duration: 10 + i * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.5,
                    },
                    opacity: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.5,
                    },
                    boxShadow: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: i * 0.5,
                    },
                  }}
                />
              ))}

              {/* Floating images around the main circle */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffbb99] shadow-[0_0_15px_rgba(255,159,102,0.5)]"
                animate={{
                  y: ["-25%", "-30%", "-25%"],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <img
                  src="/images/joy.webp"
                  alt="Meditation icon"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffbb99] shadow-[0_0_15px_rgba(255,159,102,0.5)]"
                animate={{
                  y: ["25%", "30%", "25%"],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <img
                  src="/images/doubt.png"
                  alt="Wellness icon"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute left-0 top-1/2 transform -translate-x-1/4 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffbb99] shadow-[0_0_15px_rgba(255,159,102,0.5)]"
                animate={{
                  x: ["-25%", "-30%", "-25%"],
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <img
                  src="/images/panic.jpeg"
                  alt="Therapy icon"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffbb99] shadow-[0_0_15px_rgba(255,159,102,0.5)]"
                animate={{
                  x: ["25%", "30%", "25%"],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              >
                <img
                  src="/images/water.jpg"
                  alt="Community icon"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]"
                  initial={{
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    opacity: 0,
                    scale: Math.random() * 0.5 + 0.5,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    opacity: [0, 0.7, 0],
                    scale: [Math.random() * 0.5 + 0.5, Math.random() * 1 + 0.5, Math.random() * 0.5 + 0.5],
                    boxShadow: ["0 0 0px rgba(255,95,0,0)", "0 0 10px rgba(255,95,0,0.5)", "0 0 0px rgba(255,95,0,0)"],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}