"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Sparkle } from "lucide-react"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to community resources and self-help tools.",
    features: [
      { included: true, text: "Community forum access" },
      { included: true, text: "Basic self-help resources" },
      { included: true, text: "Guided meditation (limited)" },
      { included: false, text: "1-on-1 therapy sessions" },
      { included: false, text: "Group therapy sessions" },
      { included: false, text: "Advanced wellness programs" },
      { included: false, text: "Priority support" },
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    description: "Full access to all self-help resources and group sessions.",
    features: [
      { included: true, text: "Community forum access" },
      { included: true, text: "Complete self-help library" },
      { included: true, text: "Unlimited guided meditations" },
      { included: true, text: "Weekly group therapy sessions" },
      { included: true, text: "Monthly wellness workshops" },
      { included: false, text: "1-on-1 therapy sessions" },
      { included: true, text: "Standard support" },
    ],
    buttonText: "Start Premium",
    popular: true,
  },
  {
    name: "Complete",
    price: "$99",
    period: "per month",
    description: "Comprehensive support including personal therapy sessions.",
    features: [
      { included: true, text: "Community forum access" },
      { included: true, text: "Complete self-help library" },
      { included: true, text: "Unlimited guided meditations" },
      { included: true, text: "Unlimited group therapy sessions" },
      { included: true, text: "Four 1-on-1 therapy sessions monthly" },
      { included: true, text: "All wellness programs" },
      { included: true, text: "24/7 priority support" },
    ],
    buttonText: "Start Complete",
    popular: false,
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="pricing">
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
            Choose Your <span className="gradient-text">Healing Path</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible plans designed to support your mental wellness journey, no matter where you are in your path.
          </p>
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
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Sparkle className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              <Card
                className={`relative overflow-hidden h-full hover-card ${
                  plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary transform rotate-45 translate-x-10 -translate-y-10"></div>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span
                          className={`flex-shrink-0 rounded-full p-1 ${
                            feature.included ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {feature.included ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </span>
                        <span className="ml-2 text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20"
                        : ""
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
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
          <p className="text-muted-foreground mb-6">
            All plans include a 7-day free trial. Cancel anytime. Need something more customized for your organization?
          </p>
          <Button variant="outline" className="rounded-full border-primary hover:bg-primary/10">
            Contact Us for Enterprise Plans
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
