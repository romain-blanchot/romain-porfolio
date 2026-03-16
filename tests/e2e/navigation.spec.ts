import { test, expect } from "@playwright/test"

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Romain/)
  })

  test("navigates to all main pages", async ({ page }) => {
    const routes = [
      "/mes-competences",
      "/mes-projets",
      "/a-propos",
      "/me-contacter",
      "/mes-services",
      "/demarrer-votre-projet",
    ]

    for (const route of routes) {
      const response = await page.goto(route)
      expect(response?.status()).toBe(200)
    }
  })

  test("locale switch to English works", async ({ page }) => {
    await page.goto("/en")
    await expect(page.locator("html")).toHaveAttribute("lang", "en")
  })

  test("default locale is French", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  })
})

test.describe("Responsive layout", () => {
  test("no horizontal overflow on desktop", async ({ page }) => {
    await page.goto("/")
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = await page.evaluate(() => window.innerWidth)
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5)
  })

  test("mobile menu button is visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    const menuButton = page.locator('button[aria-label*="menu" i]')
    await expect(menuButton).toBeVisible()
  })
})
