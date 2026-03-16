"use client" // Exécute le code uniquement côté client

import { motion } from "framer-motion"
import Image from "next/image"
import photoProfilRomain from "@/public/photoProfilRomain.jpg"
import { useI18n } from "@/locales/client"

export default function HeroAnimated() {
  const t = useI18n()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} // 1 seconde de transition
      className="relative mt-6 sm:mt-8 lg:mt-0"
    >
      <div className="relative z-10 mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:mx-auto lg:mr-8 lg:h-96 lg:w-96">
        <div className="from-primary to-primary/40 absolute inset-0 animate-pulse rounded-full bg-gradient-to-br opacity-20 blur-2xl" />
        <div className="border-primary/20 relative h-full w-full overflow-hidden rounded-full border-2">
          <Image
            src={photoProfilRomain}
            alt="Romain"
            sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, (max-width: 1200px) 384px, 384px"
            // sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            className="h-full w-full object-cover"
            priority
            fetchPriority="high"
            quality={75}
            loading="eager"
            width={384}
            height={384}
            placeholder="blur"
          />
        </div>
        <div className="bg-background absolute -right-2 -bottom-2 rounded-lg border p-2 shadow-lg sm:-right-4 sm:-bottom-4 sm:p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3" />
            <span className="text-xs font-medium sm:text-sm">{t("hero.availability")}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
