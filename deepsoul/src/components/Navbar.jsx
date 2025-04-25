"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Search,
  Bell,
  User,
  Heart,
  BookOpen,
  Sparkle,
  Zap,
  Users,
  MessageCircle,
  Calendar,
  FileText,
  Video,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "./Logo"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  {
    name: "Home",
    href: "/",
    isActive: true,
  },
  {
    name: "Services",
    href: "#services",
    isActive: false,
    megaMenu: true,
    columns: [
      {
        title: "Therapy",
        items: [
          { name: "Individual Therapy", href: "#individual", icon: <User className="h-4 w-4" /> },
          { name: "Group Therapy", href: "#group", icon: <Users className="h-4 w-4" /> },
          { name: "Couples Therapy", href: "#couples", icon: <Heart className="h-4 w-4" /> },
        ],
      },
      {
        title: "Self-Help",
        items: [
          { name: "Guided Meditation", href: "#meditation", icon: <Sparkle className="h-4 w-4" /> },
          { name: "Journaling", href: "#journaling", icon: <BookOpen className="h-4 w-4" /> },
          { name: "Stress Management", href: "#stress", icon: <Zap className="h-4 w-4" /> },
        ],
      },
      {
        title: "Programs",
        items: [
          { name: "8-Week Mindfulness", href: "#mindfulness", icon: <Sparkle className="h-4 w-4" /> },
          { name: "Anxiety Relief", href: "#anxiety", icon: <Heart className="h-4 w-4" /> },
          { name: "Sleep Improvement", href: "#sleep", icon: <Moon className="h-4 w-4" /> },
        ],
      },
    ],
  },
  {
    name: "Community",
    href: "#community",
    isActive: false,
    dropdown: [
      { name: "Forums", href: "#forums", icon: <MessageCircle className="h-4 w-4" /> },
      { name: "Events", href: "#events", icon: <Calendar className="h-4 w-4" /> },
      { name: "Support Groups", href: "#support-groups", icon: <Users className="h-4 w-4" /> },
    ],
  },
  {
    name: "Resources",
    href: "#resources",
    isActive: false,
    dropdown: [
      { name: "Articles", href: "#articles", icon: <FileText className="h-4 w-4" /> },
      { name: "Videos", href: "#videos", icon: <Video className="h-4 w-4" /> },
      { name: "Podcasts", href: "#podcasts", icon: <Headphones className="h-4 w-4" /> },
    ],
  },
  {
    name: "About",
    href: "#about",
    isActive: false,
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMegaMenu, setOpenMegaMenu] = useState(false)
  const dropdownRef = useRef(null)
  const megaMenuRef = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setOpenMegaMenu(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
    setIsMenuOpen(false)
  }

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName)
    if (linkName === "Services") {
      setOpenMegaMenu(!openMegaMenu)
    } else {
      setOpenMegaMenu(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-2 backdrop-blur-xl bg-background/70 shadow-lg shadow-primary/5" : "py-4 bg-transparent",
      )}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrolled
            ? typeof window !== "undefined"
              ? window.scrollY / (document.body.scrollHeight - window.innerHeight)
              : 0
            : 0,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <Logo animated />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <motion.nav
              className="flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  ref={
                    link.megaMenu && link.name === "Services"
                      ? megaMenuRef
                      : link.name === openDropdown
                        ? dropdownRef
                        : null
                  }
                >
                  <motion.div
                    className="relative px-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <button
                      onClick={() => {
                        handleLinkClick(link.name)
                        if (link.dropdown || link.megaMenu) {
                          toggleDropdown(link.name)
                        }
                      }}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center group",
                        activeLink === link.name && "text-primary font-medium",
                      )}
                    >
                      {link.name}
                      {(link.dropdown || link.megaMenu) && (
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-300",
                            (openDropdown === link.name || (link.name === "Services" && openMegaMenu)) && "rotate-180",
                          )}
                        />
                      )}

                      {/* Hover effect */}
                      <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                      {/* Active indicator */}
                      {activeLink === link.name && (
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Regular Dropdown Menu */}
                    <AnimatePresence>
                      {link.dropdown && openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-xl bg-card border border-border shadow-lg shadow-primary/10 overflow-hidden z-50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
                          <div className="relative z-10 py-1">
                            {link.dropdown.map((item, idx) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center px-4 py-2 text-sm hover:bg-primary/10 transition-colors duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {item.icon && <span className="mr-2 text-primary">{item.icon}</span>}
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {link.megaMenu && link.name === "Services" && openMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] rounded-xl bg-card border border-border shadow-xl shadow-primary/10 overflow-hidden z-50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
                          <div className="relative z-10 p-6">
                            <div className="grid grid-cols-3 gap-6">
                              {link.columns.map((column, colIdx) => (
                                <motion.div
                                  key={column.title}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: colIdx * 0.1 }}
                                >
                                  <h3 className="font-medium text-primary mb-3">{column.title}</h3>
                                  <ul className="space-y-2">
                                    {column.items.map((item, itemIdx) => (
                                      <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: colIdx * 0.1 + itemIdx * 0.05 + 0.2 }}
                                      >
                                        <Link
                                          href={item.href}
                                          className="flex items-center text-sm text-foreground/80 hover:text-primary transition-colors"
                                          onClick={() => setOpenMegaMenu(false)}
                                        >
                                          {item.icon && <span className="mr-2 text-primary">{item.icon}</span>}
                                          {item.name}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                            <motion.div
                              className="mt-6 pt-4 border-t border-border"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <div className="flex justify-between items-center">
                                <p className="text-sm text-muted-foreground">
                                  Discover our comprehensive healing services
                                </p>
                                <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                                  View All Services
                                </Button>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </motion.nav>
          </div>

          {/* Actions */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Search Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" aria-label="Search">
                <Search className="h-5 w-5 text-foreground/80" />
              </Button>
            </motion.div>

            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-foreground/80" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-secondary"></span>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="relative w-12 h-6 rounded-full bg-primary/20 flex items-center transition-colors duration-300"
              >
                <motion.div
                  className="absolute left-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  animate={{
                    x: theme === "dark" ? 24 : 0,
                    backgroundColor: theme === "dark" ? "hsl(var(--secondary))" : "hsl(var(--primary))",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {mounted && theme === "dark" ? (
                    <Sun className="h-3 w-3 text-white" />
                  ) : (
                    <Moon className="h-3 w-3 text-white" />
                  )}
                </motion.div>
              </button>
            </motion.div>

            {/* Login Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                Log In
              </Button>
            </motion.div>

            {/* Sign Up Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 relative overflow-hidden group">
                <span className="relative z-10">Sign Up</span>
                <span className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="absolute -inset-px rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="h-5 w-5 text-secondary" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="rounded-full relative"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden pt-4 pb-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col space-y-1"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                initial="closed"
                animate="open"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                  >
                    <div className="relative">
                      <button
                        onClick={() => {
                          handleLinkClick(link.name)
                          if (link.dropdown || link.megaMenu) {
                            toggleDropdown(link.name)
                          }
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg flex items-center justify-between",
                          activeLink === link.name
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-primary/5 text-foreground/80",
                        )}
                      >
                        {link.name}
                        {(link.dropdown || link.megaMenu) && (
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              openDropdown === link.name && "rotate-180",
                            )}
                          />
                        )}
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {((link.dropdown && openDropdown === link.name) ||
                          (link.megaMenu && link.name === "Services" && openDropdown === link.name)) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.dropdown &&
                              link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center px-4 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.icon && <span className="mr-2 text-primary">{item.icon}</span>}
                                  {item.name}
                                </Link>
                              ))}

                            {link.megaMenu &&
                              link.columns &&
                              link.columns.map((column) => (
                                <div key={column.title} className="mb-3">
                                  <h4 className="px-4 py-2 text-sm font-medium text-primary">{column.title}</h4>
                                  {column.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center px-4 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {item.icon && <span className="mr-2 text-primary">{item.icon}</span>}
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                >
                  <div className="flex space-x-2 pt-4 px-4">
                    <Button variant="outline" className="flex-1 rounded-full">
                      Log In
                    </Button>
                    <Button className="flex-1 rounded-full bg-gradient-to-r from-primary to-secondary">Sign Up</Button>
                  </div>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
