"use client"

import { useI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { Code, Rocket, Bot, Cloud } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const t = useI18n()

  const services = [
    {
      icon: <Code className="text-primary h-8 w-8" />,
      title: t("services.dev.title"),
      description: t("services.dev.description"),
    },
    {
      icon: <Rocket className="text-primary h-8 w-8" />,
      title: t("services.solutions.title"),
      description: t("services.solutions.description"),
    },
    {
      icon: <Bot className="text-primary h-8 w-8" />,
      title: t("services.ai.title"),
      description: t("services.ai.description"),
    },
    // {
    //   icon: <Zap className="h-8 w-8 text-primary" />,
    //   title: t("services.perf.title"),
    //   description: t("services.perf.description"),
    // },
    {
      icon: <Cloud className="text-primary h-8 w-8" />,
      title: t("services.deploy.title"),
      description: t("services.deploy.description"),
    },
  ]

  return (
    <section id="services" className="bg-muted/30 scroll-mt-8 py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 mb-4 w-fit rounded-lg p-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
