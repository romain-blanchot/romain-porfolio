"use client"

import { useState, useEffect } from "react"
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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useI18n } from "@/locales/client"

type CookiePreferences = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: true,
    analytics: true,
    marketing: true,
  })
  const t = useI18n()

  /* eslint-disable react-hooks/set-state-in-effect -- localStorage read on mount requires setState for hydration safety */
  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      setShowBanner(true)
    } else {
      try {
        const savedPreferences = JSON.parse(consentGiven)
        setPreferences(savedPreferences)
      } catch (e) {
        console.error("Erreur lors du chargement des préférences de cookies:", e)
        setShowBanner(true)
      }
    }
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  // const handleRejectAll = () => {
  //   const allRejected = {
  //     necessary: true, // Toujours activé
  //     preferences: false,
  //     analytics: false,
  //     marketing: false,
  //   }
  //   savePreferences(allRejected)
  // }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    setShowPreferences(false)

    // Ici, vous pourriez implémenter la logique pour activer/désactiver les services
    // en fonction des préférences de l'utilisateur
    if (prefs.analytics) {
      console.log("Analytics activé")
    } else {
      console.log("Analytics désactivé")
    }

    if (prefs.marketing) {
      // Activer les cookies marketing
      console.log("Marketing activé")
    } else {
      // Désactiver les cookies marketing
      console.log("Marketing désactivé")
    }
  }

  const togglePreferences = () => {
    setShowPreferences(!showPreferences)
  }

  if (!showBanner && !showPreferences) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 left-4 z-50 text-xs opacity-70 hover:opacity-100"
        onClick={togglePreferences}
      >
        {t("cookie-consent.manage")}
      </Button>
    )
  }

  return (
    <div
      className={`fixed ${showPreferences ? "inset-0 z-50 flex items-center justify-center bg-black/50" : "right-0 bottom-0 left-0 z-50"}`}
    >
      {showPreferences ? (
        <Card className="mx-4 max-h-[90vh] w-full max-w-2xl overflow-auto">
          <CardHeader>
            <CardTitle>{t("cookie-consent.preferences-dialog.title")}</CardTitle>
            <CardDescription>{t("cookie-consent.preferences-dialog.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                {/* <TabsTrigger value="all">{t("cookie-consent.tabs.all")}</TabsTrigger> */}
                <TabsTrigger value="necessary">{t("cookie-consent.tabs.necessary")}</TabsTrigger>
                <TabsTrigger value="preferences">
                  {t("cookie-consent.tabs.preferences")}
                </TabsTrigger>
                <TabsTrigger value="analytics">{t("cookie-consent.tabs.analytics")}</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{t("cookie-consent.necessary.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("cookie-consent.necessary.description")}
                      </p>
                    </div>
                    <Switch checked={preferences.necessary} disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{t("cookie-consent.preferences.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("cookie-consent.preferences.description")}
                      </p>
                    </div>
                    <Switch
                      checked={preferences.preferences}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, preferences: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{t("cookie-consent.analytics.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("cookie-consent.analytics.description")}
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{t("cookie-consent.marketing.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("cookie-consent.marketing.description")}
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, marketing: checked })
                      }
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="necessary" className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium">{t("cookie-consent.necessary.title")}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {t("cookie-consent.necessary.description")}
                  </p>
                  <div className="bg-muted rounded-md p-4">
                    <p className="mb-2 text-sm">
                      <strong>__vercel</strong> - {t("cookie-consent.necessary.vercel")}
                    </p>
                    <p className="mb-2 text-sm">
                      <strong>next-auth.session-token</strong> -{" "}
                      {t("cookie-consent.necessary.nextauth")}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium">{t("cookie-consent.preferences.title")}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {t("cookie-consent.preferences.description")}
                  </p>
                  <div className="bg-muted rounded-md p-4">
                    <p className="mb-2 text-sm">
                      <strong>theme</strong> - {t("cookie-consent.preferences.theme")}
                    </p>
                    <p className="mb-2 text-sm">
                      <strong>language</strong> - {t("cookie-consent.preferences.language")}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Switch
                      id="preferences-switch"
                      checked={preferences.preferences}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, preferences: checked })
                      }
                    />
                    <Label htmlFor="preferences-switch">
                      {t("cookie-consent.preferences.enable")}
                    </Label>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium">{t("cookie-consent.analytics.title")}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {t("cookie-consent.analytics.description")}
                  </p>
                  <div className="bg-muted rounded-md p-4">
                    <p className="mb-2 text-sm">
                      <strong>Google Analytics 4</strong> - {t("cookie-consent.analytics.ga4")}
                    </p>
                    <p className="mb-2 text-sm">
                      <strong>Vercel Analytics</strong> - {t("cookie-consent.analytics.vercel")}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Switch
                      id="analytics-switch"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked })
                      }
                    />
                    <Label htmlFor="analytics-switch">{t("cookie-consent.analytics.enable")}</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-sm">
              <p>
                {t("cookie-consent.more-info")}{" "}
                <Link href="/politique-cookies" className="text-primary hover:underline">
                  {t("cookie-consent.cookie-policy")}
                </Link>
                .
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 md:flex-row md:justify-center">
            <Button
              variant="outline"
              onClick={() => setShowPreferences(false)}
              className="w-full md:w-auto"
            >
              {t("cookie-consent.buttons.cancel")}
            </Button>

            <Button variant="outline" onClick={handleAcceptAll} className="w-full md:w-auto">
              {t("cookie-consent.buttons.accept-all")}
            </Button>
            <Button onClick={handleSavePreferences} className="w-full md:w-auto">
              {t("cookie-consent.buttons.save")}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="bg-background fixed right-0 bottom-0 left-0 z-50 border-t p-4 md:right-4 md:bottom-4 md:left-auto md:max-w-xs md:rounded-lg md:border md:shadow-lg">
          <div className="flex flex-col gap-3">
            <p className="text-sm">{t("cookie-consent.banner.text")}</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePreferences}
                  className="w-1/4 text-xs"
                >
                  {t("cookie-consent.banner.more")}
                </Button>
                <Button size="sm" onClick={handleAcceptAll} className="w-3/4">
                  {t("cookie-consent.banner.accept")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
