"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah J.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Finding DeepSoul was a turning point in my healing journey. The community here is so supportive and the resources have helped me develop healthier coping mechanisms.",
    role: "Community Member",
    rating: 5,
  },
  {
    name: "Michael T.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The group sessions have been transformative. Connecting with others who understand what I'm going through has made me feel less alone in my struggles.",
    role: "Group Therapy Participant",
    rating: 5,
  },
  {
    name: "Aisha K.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I was skeptical about online therapy, but my therapist at DeepSoul has been amazing. The platform makes it easy to get support whenever I need it.",
    role: "Therapy Client",
    rating: 4,
  },
  {
    name: "David L.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The mindfulness exercises have completely changed how I handle stress. I've learned techniques that help me stay grounded even during the most challenging times.",
    role: "Self-Help Program User",
    rating: 5,
  },
  {
    name: "Elena R.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "DeepSoul's resources on anxiety management have been life-changing. I've made more progress in three months than I did in years of trying to handle it on my own.",
    role: "Anxiety Program Participant",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-muted/50" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Community Says</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real people who have found support and healing through DeepSoul.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <motion.div
            className="overflow-hidden"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.3 } },
            }}
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="px-4"
            >
              <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10 px-8 md:px-12 relative">
                  <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10" />
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <Avatar className="h-24 w-24 border-4 border-primary/20">
                        <img
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                        />
                      </Avatar>
                      <div className="mt-4 text-center">
                        <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                        <div className="flex items-center justify-center mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonials[currentIndex].rating ? "text-secondary" : "text-muted"
                              }`}
                              fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-lg md:text-xl italic">"{testimonials[currentIndex].content}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
