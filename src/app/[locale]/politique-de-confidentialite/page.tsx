// /app/[locale]/politique-de-confidentialite/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getI18n } from "@/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  setStaticParamsLocale(locale)
  const t = await getI18n()

  return {
    title: t("metadata.politique-de-confidentialite.title"),
    description: t("metadata.politique-de-confidentialite.description"),
  }
}

export default async function PolitiqueDeConfidentialite({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setStaticParamsLocale(locale)
  const t = await getI18n()

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("politique-de-confidentialite.back-home")}
          </Link>
        </Button>

        <h1 className="mb-8 text-3xl font-bold">{t("politique-de-confidentialite.title")}</h1>
        <p className="text-muted-foreground mb-6 text-sm">
          {/* Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")} */}
          {t("politique-de-confidentialite.last-update")}{" "}
          {new Date("2025-03-09").toLocaleDateString("fr-FR")}
        </p>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.1.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.1.p1")}</p>
            <p>{t("politique-de-confidentialite.section.1.p2")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.2.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.2.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.2.li1")}</li>
              <li>{t("politique-de-confidentialite.section.2.li2")}</li>
              <li>{t("politique-de-confidentialite.section.2.li3")}</li>
              <li>{t("politique-de-confidentialite.section.2.li4")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.3.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.3.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.3.li1")}</li>
              <li>{t("politique-de-confidentialite.section.3.li2")}</li>
              <li>{t("politique-de-confidentialite.section.3.li3")}</li>
              <li>{t("politique-de-confidentialite.section.3.li4")}</li>
              <li>{t("politique-de-confidentialite.section.3.li5")}</li>
              <li>{t("politique-de-confidentialite.section.3.li6")}</li>
            </ul>
            <p>{t("politique-de-confidentialite.section.3.p2")}</p>
            <p>{t("politique-de-confidentialite.section.3.p3")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.4.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.4.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                <strong>{t("politique-de-confidentialite.section.4.li1")}</strong>
              </li>
              <li>
                <strong>{t("politique-de-confidentialite.section.4.li2")}</strong>
              </li>
              <li>
                <strong>{t("politique-de-confidentialite.section.4.li3")}</strong>
              </li>
              <li>
                <strong>{t("politique-de-confidentialite.section.4.li4")}</strong>
              </li>
            </ul>
            <p>{t("politique-de-confidentialite.section.4.p2")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.5.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.5.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.5.li1")}</li>
              <li>{t("politique-de-confidentialite.section.5.li2")}</li>
            </ul>
            <p>{t("politique-de-confidentialite.section.5.p2")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.6.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.6.p1")}</p>
            <p>{t("politique-de-confidentialite.section.6.p2")}</p>
            <p>{t("politique-de-confidentialite.section.6.p3")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.7.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.7.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.7.li1")}</li>
              <li>{t("politique-de-confidentialite.section.7.li2")}</li>
            </ul>
            <p>{t("politique-de-confidentialite.section.7.p2")}</p>
            <p>{t("politique-de-confidentialite.section.7.p3")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.8.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.8.p1")}</p>
            <p>{t("politique-de-confidentialite.section.8.p2")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.9.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.9.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.9.li1")}</li>
              <li>{t("politique-de-confidentialite.section.9.li2")}</li>
              <li>{t("politique-de-confidentialite.section.9.li3")}</li>
              <li>{t("politique-de-confidentialite.section.9.li4")}</li>
              <li>{t("politique-de-confidentialite.section.9.li5")}</li>
              <li>{t("politique-de-confidentialite.section.9.li6")}</li>
              <li>{t("politique-de-confidentialite.section.9.li7")}</li>
              <li>{t("politique-de-confidentialite.section.9.li8")}</li>
            </ul>
            <p>{t("politique-de-confidentialite.section.9.p2")}</p>
            <p>{t("politique-de-confidentialite.section.9.p3")}</p>
            <p>{t("politique-de-confidentialite.section.9.p4")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.10.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.10.p1")}</p>
            <p>{t("politique-de-confidentialite.section.10.p2")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.10.li1")}</li>
              <li>{t("politique-de-confidentialite.section.10.li2")}</li>
              <li>{t("politique-de-confidentialite.section.10.li3")}</li>
              <li>{t("politique-de-confidentialite.section.10.li4")}</li>
            </ul>
            <p>{t("politique-de-confidentialite.section.10.p3")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.11.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.11.p1")}</p>
            <p>
              {t("politique-de-confidentialite.section.11.p2")}
              <Link href="/politique-cookies" className="text-primary hover:underline">
                {" "}
                {t("politique-de-confidentialite.section.11.cookie-policy")}
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.12.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.12.p1")}</p>
            <p>{t("politique-de-confidentialite.section.12.p2")}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              {t("politique-de-confidentialite.section.13.title")}
            </h2>
            <p>{t("politique-de-confidentialite.section.13.p1")}</p>
            <ul className="mb-4 list-disc pl-6">
              <li>{t("politique-de-confidentialite.section.13.li1")}</li>
              <li>{t("politique-de-confidentialite.section.13.li2")}</li>
              <li>{t("politique-de-confidentialite.section.13.li3")}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
