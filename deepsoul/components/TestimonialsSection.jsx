// File: components/TestimonialsSection.jsx
"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const controls = useAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Anxiety Recovery",
      image: "/images/person1.jpg",
      quote:
        "DeepSoul has been a lifeline for me. The therapists are compassionate and skilled, and the community support has made me feel less alone in my journey with anxiety.",
    },
    {
      name: "Michael Chen",
      role: "Depression Management",
      image: "/images/person2.jpg",
      quote:
        "After struggling with depression for years, finding DeepSoul was a turning point. The personalized approach and consistent support have helped me develop healthy coping mechanisms.",
    },
    {
      name: "Aisha Patel",
      role: "Stress Management",
      image: "/images/person3.jpg",
      quote:
        "The mindfulness resources and supportive community at DeepSoul have transformed how I handle stress. I've learned techniques that help me stay grounded even during challenging times.",
    },
    {
      name: "David Rodriguez",
      role: "Relationship Counseling",
      image: "/images/person4.jpeg",
      quote:
        "My partner and I were struggling to communicate effectively. The couples therapy through DeepSoul gave us the tools to understand each other better and strengthen our relationship.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentIndex]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [currentIndex, controls]);

  const handleMouseEnter = () => {
    setAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b]"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#001233] to-transparent dark:from-[#001845]/30 dark:to-transparent -skew-x-12 transform origin-top-right"></div>

      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#001233]/10 to-[#ff9966]/5 blur-[60px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-gradient-to-tr from-[#ff9966]/10 to-[#fffae6]/5 blur-[70px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] font-medium text-sm shadow-lg"
          >
            Success Stories
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]"
          >
            Hear From Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]">
              Community
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-[#fffae6] dark:text-[#fffae6]">
            Real stories from real people who have found support, healing, and growth through DeepSoul.
          </motion.p>
        </motion.div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,35,121,0.15)] border border-[#001233] dark:border-[#001845] max-w-4xl mx-auto backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ffbb99] dark:to-[#ff9966] shadow-[0_10px_20px_rgba(255,95,0,0.3)]">
                      <img
                        src={testimonials[currentIndex].image || "/images/person1.jpg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#ff9966] to-[#ffbb99] rounded-full p-2 shadow-[0_5px_15px_rgba(255,95,0,0.4)]"
                    >
                      <Quote className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl italic mb-6 text-[#fffae6] dark:text-[#fffae6]">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#ffbb99] dark:text-[#ffbb99]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{
                scale: 1.1,
                background: "linear-gradient(to right, #ff9966, #ffbb99)",
                color: "white",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ffbb99] dark:to-[#ff9966] w-6 shadow-[0_0_10px_rgba(255,95,0,0.5)]"
                      : "bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <motion.button
              whileHover={{
                scale: 1.1,
                background: "linear-gradient(to right, #ff9966, #ffbb99)",
                color: "white",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}