"use client"

import { motion } from "framer-motion"

export default function Users() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex -space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-full border-2 border-background overflow-hidden"
            style={{ zIndex: 5 - i }}
          >
            <img
              src={`/placeholder.svg?height=32&width=32&text=${i}`}
              alt={`User ${i}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">2,500+</span> people joined
      </span>
    </motion.div>
  )
}
