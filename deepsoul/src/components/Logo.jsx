"use client"

import { Sparkle } from "lucide-react"
import { motion } from "framer-motion"

export default function Logo({ size = "default", animated = false }) {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl",
  }

  if (animated) {
    return (
      <div className="flex items-center gap-1.5">
        <motion.div className="relative" whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-70"
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
          <motion.div className="relative bg-background dark:bg-card rounded-full p-1.5" whileHover={{ scale: 1.1 }}>
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkle className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.span
          className={`font-bold tracking-tight ${sizeClasses[size]}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.span
            className="text-primary"
            whileHover={{
              color: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"],
            }}
            transition={{ duration: 1 }}
          >
            Deep
          </motion.span>
          <motion.span
            className="text-secondary"
            whileHover={{
              color: ["hsl(var(--secondary))", "hsl(var(--primary))", "hsl(var(--secondary))"],
            }}
            transition={{ duration: 1 }}
          >
            Soul
          </motion.span>
        </motion.span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-70"></div>
        <div className="relative bg-background dark:bg-card rounded-full p-1.5">
          <Sparkle className="h-5 w-5 text-primary" />
        </div>
      </div>
      <span className={`font-bold tracking-tight ${sizeClasses[size]}`}>
        <span className="text-primary">Deep</span>
        <span className="text-secondary">Soul</span>
      </span>
    </div>
  )
}
