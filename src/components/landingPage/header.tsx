"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  // Avoid hydration mismatch — must set state after mount to prevent SSR/client divergence
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.skills"), href: "/mes-competences" },
    { name: t("nav.projects"), href: "/mes-projets" },
    { name: t("nav.about"), href: "/a-propos" },
    { name: t("nav.contact"), href: "/me-contacter" },
    { name: t("nav.services"), href: "/mes-services" },
    { name: t("nav.demarer-votre-projet"), href: "/demarrer-votre-projet" },
  ]

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    // { code: "de", name: "Deutsch" },
    // { code: "es", name: "Español" },
  ]

  if (!mounted) return null

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-xl font-bold">
          Romain
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme and language toggles */}
        <div className="hidden items-center gap-2 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t("header.language")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLocale(lang.code as keyof typeof t)}
                  className={locale === lang.code ? "bg-accent" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">{t("header.theme")}</span>
          </Button>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">{t("header.theme")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>{t("header.light")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>{t("header.dark")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>{t("header.system")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="bg-background absolute top-16 right-0 left-0 border-b md:hidden"
          >
            <div className="container mx-auto space-y-4 px-4 py-4">
              <nav className="flex flex-col space-y-6 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-md hover:text-primary font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={locale === lang.code ? "default" : "outline"}
                      size="sm"
                      onClick={() => changeLocale(lang.code as keyof typeof t)}
                    >
                      {lang.code.toUpperCase()}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
