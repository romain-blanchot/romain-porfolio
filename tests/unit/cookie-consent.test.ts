import { describe, it, expect, beforeEach } from "vitest"

type CookiePreferences = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

/** Simulates the savePreferences / loadPreferences logic from cookie-consent.tsx */
function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem("cookieConsent", JSON.stringify(prefs))
}

function loadPreferences(): CookiePreferences | null {
  const raw = localStorage.getItem("cookieConsent")
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

describe("CookieConsent – localStorage logic", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("returns null when no preferences are saved", () => {
    expect(loadPreferences()).toBeNull()
  })

  it("saves and loads preferences correctly", () => {
    const prefs: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: false,
      marketing: false,
    }
    savePreferences(prefs)
    expect(loadPreferences()).toEqual(prefs)
  })

  it('saves "accept all" preferences', () => {
    const all: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(all)
    expect(loadPreferences()).toEqual(all)
  })

  it("returns null for corrupted JSON", () => {
    localStorage.setItem("cookieConsent", "{bad json")
    expect(loadPreferences()).toBeNull()
  })

  it("overwrites previous preferences", () => {
    savePreferences({ necessary: true, preferences: true, analytics: true, marketing: true })
    savePreferences({ necessary: true, preferences: false, analytics: false, marketing: false })
    const loaded = loadPreferences()
    expect(loaded?.analytics).toBe(false)
    expect(loaded?.marketing).toBe(false)
  })
})
