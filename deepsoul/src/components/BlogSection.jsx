"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Mindfulness Techniques for Daily Stress Relief",
    excerpt:
      "Discover simple mindfulness practices that can help you manage stress and find calm in your everyday life.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Dr. Emma Chen",
    category: "Mindfulness",
  },
  {
    title: "Understanding Anxiety: Causes, Symptoms, and Management",
    excerpt:
      "Learn about the science behind anxiety, how to recognize its symptoms, and effective strategies for managing it.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 28, 2023",
    readTime: "8 min read",
    author: "Dr. James Wilson",
    category: "Mental Health",
  },
  {
    title: "The Power of Connection: Building Meaningful Relationships",
    excerpt: "Explore how fostering genuine connections with others can significantly improve your mental wellbeing.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 10, 2023",
    readTime: "6 min read",
    author: "Sarah Johnson",
    category: "Relationships",
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="blog">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-16"
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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Insights & Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our collection of articles, guides, and resources to support your mental wellness journey.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="rounded-full border-primary hover:bg-primary/10 group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Card className="overflow-hidden hover-card border-border h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            },
          }}
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, resources, and wellness tips directly in your
            inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
