"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { MessageCircle, Heart, Users, Calendar, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah J.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Finding DeepSoul was a turning point in my healing journey. The community here is so supportive and the resources have helped me develop healthier coping mechanisms.",
    role: "Community Member",
  },
  {
    name: "Michael T.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The group sessions have been transformative. Connecting with others who understand what I'm going through has made me feel less alone in my struggles.",
    role: "Group Therapy Participant",
  },
  {
    name: "Aisha K.",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I was skeptical about online therapy, but my therapist at DeepSoul has been amazing. The platform makes it easy to get support whenever I need it.",
    role: "Therapy Client",
  },
]

const communityFeatures = [
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Discussion Forums",
    description: "Engage in supportive conversations with peers on various mental health topics.",
  },
  {
    icon: <Heart className="h-8 w-8 text-secondary" />,
    title: "Support Circles",
    description: "Join small, focused groups for more intimate sharing and connection.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Peer Mentorship",
    description: "Connect with experienced community members who can guide your journey.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-secondary" />,
    title: "Virtual Events",
    description: "Participate in workshops, webinars, and social gatherings to learn and connect.",
  },
]

export default function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="community">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
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
            Join Our <span className="gradient-text">Supportive Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with others on similar journeys, share experiences, and grow together in a safe, moderated
            environment.
          </p>
        </motion.div>

        {/* Community Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
            >
              <div className="mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-center mb-8">Community Voices</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Card className="hover-card overflow-hidden">
                <CardContent className="pt-6 relative">
                  <Quote className="absolute top-2 right-2 h-8 w-8 text-primary/10" />
                  <div className="flex items-center mb-4">
                    <Avatar className="border-2 border-primary">
                      <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.8,
              },
            },
          }}
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Join Our Community
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
