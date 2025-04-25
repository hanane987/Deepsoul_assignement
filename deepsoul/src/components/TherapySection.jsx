"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const therapyTypes = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions with licensed therapists tailored to your specific needs and goals.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Group Therapy",
    description: "Connect with others facing similar challenges in a supportive, therapist-led group environment.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Couples Therapy",
    description:
      "Strengthen your relationship with specialized therapy for couples facing challenges or seeking growth.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function TherapySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 bg-muted relative overflow-hidden" id="therapy">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
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
            Professional <span className="gradient-text">Therapy Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with licensed therapists who specialize in various approaches to mental health and emotional
            wellbeing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
          {therapyTypes.map((therapy, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={therapy.image || "/placeholder.svg"}
                  alt={therapy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{therapy.title}</h3>
                <p className="text-muted-foreground mb-4">{therapy.description}</p>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white group"
                >
                  <span className="flex items-center">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
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
              transition: {
                duration: 0.5,
                delay: 0.6,
              },
            },
          }}
        >
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our therapists are carefully vetted professionals with expertise in various therapeutic approaches, ready to
            support your unique journey.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Find Your Therapist
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
