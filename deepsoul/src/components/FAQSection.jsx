"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can benefit anyone looking to improve their mental wellbeing, work through challenges, or gain self-awareness. If you're experiencing persistent feelings of sadness, anxiety, or struggling with relationships or life transitions, therapy might be particularly helpful. Our platform offers a free initial consultation to help you determine if therapy is a good fit for your needs.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "DeepSoul offers various therapy approaches including Cognitive Behavioral Therapy (CBT), Mindfulness-Based Therapy, Psychodynamic Therapy, and more. We provide individual therapy, couples therapy, and group therapy sessions. Our matching system helps connect you with therapists whose expertise aligns with your specific needs and preferences.",
  },
  {
    question: "How much does therapy cost?",
    answer:
      "Our therapy services vary in cost depending on the type of session and therapist expertise. Individual sessions typically range from $80-150, while group sessions are more affordable. We offer subscription plans that provide discounted rates, and many of our therapists accept insurance. We're committed to making mental healthcare accessible and offer sliding scale options for those with financial constraints.",
  },
  {
    question: "Is online therapy as effective as in-person therapy?",
    answer:
      "Research shows that online therapy can be just as effective as in-person therapy for many conditions. Online therapy offers unique benefits including greater accessibility, convenience, and comfort of connecting from your own space. Our platform is designed to create a secure, confidential environment that facilitates meaningful therapeutic relationships between clients and therapists.",
  },
  {
    question: "How do I get started with DeepSoul?",
    answer:
      "Getting started is simple! Create a free account, complete a brief assessment about your needs and preferences, and you'll receive therapist recommendations. You can review therapist profiles, watch their introduction videos, and select someone you feel comfortable with. From there, you can schedule your first session directly through our platform. We also offer self-help resources that you can access immediately after signing up.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. We take your privacy very seriously. Our platform uses bank-level encryption to protect your data, and all therapists adhere to strict confidentiality standards in accordance with professional ethics and HIPAA regulations. Your personal information and session content remain private and secure. You can review our detailed privacy policy for more information on how we protect your data.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-muted/30" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"></div>
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, approach, and how to get started.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
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
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg overflow-hidden bg-card shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
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
          <p className="text-muted-foreground mb-2">Still have questions? We're here to help.</p>
          <a href="#contact" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
            Contact our support team
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
