"use client"

import { motion } from "framer-motion"
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
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

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Events", href: "#" },
        { name: "Research", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] pt-16 pb-8 border-t border-[#001233] dark:border-[#001845]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff9966] to-[#ffbb99] flex items-center justify-center mr-3 shadow-[0_5px_15px_rgba(255,95,0,0.3)]"
              >
                <Heart className="w-5 h-5 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]">
                DeepSoul
              </h2>
            </div>
            <p className="text-[#fffae6] dark:text-[#fffae6] mb-6 max-w-md">
              Empowering individuals on their mental health journey through compassionate support, professional
              guidance, and community connection.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#ffbb99] mr-3" />
                <span className="text-[#fffae6] dark:text-[#fffae6]">support@deepsoul.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#ffbb99] mr-3" />
                <span className="text-[#fffae6] dark:text-[#fffae6]">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#ffbb99] mr-3" />
                <span className="text-[#fffae6] dark:text-[#fffae6]">123 Wellness Street, Mindful City</span>
              </div>
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-bold text-[#ffbb99] dark:text-[#ffbb99] mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[#fffae6] dark:text-[#fffae6] hover:text-[#ffbb99] dark:hover:text-[#ffbb99] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-[#001233] dark:border-[#001845] flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-[#fffae6] dark:text-[#fffae6] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DeepSoul. All rights reserved.Made by Hanane Lemnissir.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{
                  y: -3,
                  color: "#ffbb99",
                  boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] flex items-center justify-center text-[#fffae6] dark:text-[#fffae6] hover:text-[#ffbb99] dark:hover:text-[#ffbb99] transition-all duration-300 shadow-md"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
