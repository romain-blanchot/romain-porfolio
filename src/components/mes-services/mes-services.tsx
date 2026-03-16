"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Server,
  Database,
  Brain,
  Cloud,
  Zap,
  Shield,
  Cog,
  Users,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/locales/client"

// Définir toutes les traductions possibles pour satisfaire TypeScript
const serviceKeys = {
  categories: {
    dev: "mes-services.category.dev",
    sys: "mes-services.category.sys",
    ai: "mes-services.category.ai",
  },
  items: {
    web: {
      title: "mes-services.item.web.title",
      description: "mes-services.item.web.description",
    },
    api: {
      title: "mes-services.item.api.title",
      description: "mes-services.item.api.description",
    },
    integration: {
      title: "mes-services.item.integration.title",
      description: "mes-services.item.integration.description",
    },
    cloud: {
      title: "mes-services.item.cloud.title",
      description: "mes-services.item.cloud.description",
    },
    devops: {
      title: "mes-services.item.devops.title",
      description: "mes-services.item.devops.description",
    },
    security: {
      title: "mes-services.item.security.title",
      description: "mes-services.item.security.description",
    },
    aiIntegration: {
      title: "mes-services.item.ai-integration.title",
      description: "mes-services.item.ai-integration.description",
    },
    mlPipelines: {
      title: "mes-services.item.ml-pipelines.title",
      description: "mes-services.item.ml-pipelines.description",
    },
    dataAnalysis: {
      title: "mes-services.item.data-analysis.title",
      description: "mes-services.item.data-analysis.description",
    },
  },
  cta: {
    learnMore: "mes-services.learn-more",
    title: "mes-services.call-to-action.title",
    description: "mes-services.call-to-action.description",
    start: "mes-services.call-to-action.start",
    meeting: "mes-services.call-to-action.meeting",
  },
  page: {
    title: "mes-services.title",
    subtitle: "mes-services.subtitle",
  },
} as const

// Utiliser ces clés constantes dans la structure de données
const services = [
  {
    category: serviceKeys.categories.dev,
    items: [
      {
        title: serviceKeys.items.web.title,
        description: serviceKeys.items.web.description,
        icon: <Code className="h-8 w-8" />,
        skills: ["React", "Next.js", "Node.js", "TypeScript"],
      },
      {
        title: serviceKeys.items.api.title,
        description: serviceKeys.items.api.description,
        icon: <Zap className="h-8 w-8" />,
        skills: ["REST", "GraphQL", "Express", "Apollo"],
      },
      {
        title: serviceKeys.items.integration.title,
        description: serviceKeys.items.integration.description,
        icon: <Cog className="h-8 w-8" />,
        skills: ["Microservices", "ESB", "Middleware"],
      },
    ],
  },
  {
    category: serviceKeys.categories.sys,
    items: [
      {
        title: serviceKeys.items.cloud.title,
        description: serviceKeys.items.cloud.description,
        icon: <Cloud className="h-8 w-8" />,
        skills: ["AWS", "Azure", "GCP", "Kubernetes"],
      },
      {
        title: serviceKeys.items.devops.title,
        description: serviceKeys.items.devops.description,
        icon: <Server className="h-8 w-8" />,
        skills: ["Docker", "Jenkins", "GitLab CI", "Ansible"],
      },
      {
        title: serviceKeys.items.security.title,
        description: serviceKeys.items.security.description,
        icon: <Shield className="h-8 w-8" />,
        skills: ["OWASP", "GDPR", "ISO 27001"],
      },
    ],
  },
  {
    category: serviceKeys.categories.ai,
    items: [
      {
        title: serviceKeys.items.aiIntegration.title,
        description: serviceKeys.items.aiIntegration.description,
        icon: <Brain className="h-8 w-8" />,
        skills: ["TensorFlow", "PyTorch", "Scikit-learn"],
      },
      {
        title: serviceKeys.items.mlPipelines.title,
        description: serviceKeys.items.mlPipelines.description,
        icon: <Database className="h-8 w-8" />,
        skills: ["MLflow", "Kubeflow", "Apache Airflow"],
      },
      {
        title: serviceKeys.items.dataAnalysis.title,
        description: serviceKeys.items.dataAnalysis.description,
        icon: <Users className="h-8 w-8" />,
        skills: ["Pandas", "Spark", "Tableau", "Power BI"],
      },
    ],
  },
]

export default function MesServicesClient() {
  const t = useI18n()

  return (
    <div className="container mx-auto mt-16 px-4 py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center md:mb-12"
      >
        <h1 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl">{t(serviceKeys.page.title)}</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
          {t(serviceKeys.page.subtitle)}
        </p>
      </motion.div>

      <Tabs defaultValue={services[0].category} className="w-full">
        <TabsList className="mb-4 grid w-full grid-cols-1 pt-4 pb-28 md:mb-8 md:grid-cols-3 md:pt-1 lg:pt-1 lg:pb-10">
          {services.map((service) => (
            <TabsTrigger
              key={service.category}
              value={service.category}
              className="text-base md:text-lg"
            >
              {t(service.category)}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.category} value={service.category}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {service.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex h-full flex-col">
                    <CardHeader>
                      <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-full md:mb-4 md:h-12 md:w-12">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg md:text-xl">{t(item.title)}</CardTitle>
                      <CardDescription className="text-sm md:text-base">
                        {t(item.description)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs md:text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full text-sm md:text-base">
                        {t(serviceKeys.cta.learnMore)}
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 text-center md:mt-16"
      >
        <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl">{t(serviceKeys.cta.title)}</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base md:mb-8 md:text-xl">
          {t(serviceKeys.cta.description)}
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
          <Button size="default" className="md:size-lg" asChild>
            <Link href="/demarrer-votre-projet">
              {t(serviceKeys.cta.start)}
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Link>
          </Button>
          {/* <Button size="default" className="md:size-lg" variant="outline" asChild>
            <Link href="/contact">{t(serviceKeys.cta.meeting)}</Link>
          </Button> */}
        </div>
      </motion.div>
    </div>
  )
}
