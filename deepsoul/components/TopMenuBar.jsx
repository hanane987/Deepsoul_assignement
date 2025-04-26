"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Heart } from "lucide-react"

export default function TopMenuBar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Therapy", href: "#therapy" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Community", href: "#community" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#001233]/90 dark:bg-[#001845]/90 shadow-lg dark:shadow-[#000]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff9966] to-[#ffbb99] flex items-center justify-center mr-3 shadow-[0_5px_15px_rgba(255,95,0,0.3)]"
              >
                <Heart className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]">
                DeepSoul
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{
                    scale: 1.1,
                    color: "#ffbb99",
                    textShadow: "0 0 8px rgba(255,159,102,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#fffae6] dark:text-[#fffae6] hover:text-[#ffbb99] dark:hover:text-[#ffbb99] font-medium transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                  boxShadow: "0 5px 15px rgba(0,35,121,0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] shadow-md transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                  background: "linear-gradient(to right, #ff9966, #ffbb99)",
                }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] transition-all duration-300"
              >
                Get Started
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-[#fffae6] dark:text-[#fffae6] hover:bg-[#001845] dark:hover:bg-[#001845] transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] shadow-lg border-b border-[#001233] dark:border-[#001845]"
            >
              <div className="px-4 py-4 space-y-3">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      color: "#ffbb99",
                      textShadow: "0 0 8px rgba(255,159,102,0.3)",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-[#fffae6] dark:text-[#fffae6] hover:text-[#ffbb99] dark:hover:text-[#ffbb99] font-medium transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                      background: "linear-gradient(to right, #ff9966, #ffbb99)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}
