import { test, expect } from '@playwright/test'

test.describe('Cookie Consent', () => {
  test('shows cookie banner on first visit', async ({ page }) => {
    await page.goto('/')
    const banner = page.getByText(/cookie/i).first()
    await expect(banner).toBeVisible()
  })

  test('hides banner after accepting', async ({ page }) => {
    await page.goto('/')
    const acceptButton = page.getByRole('button', { name: /accepter|accept/i })
    await acceptButton.click()

    // Banner should be hidden, only the manage button should remain
    await expect(page.getByRole('button', { name: /gérer|manage/i })).toBeVisible()
  })

  test('persists consent in localStorage', async ({ page }) => {
    await page.goto('/')
    const acceptButton = page.getByRole('button', { name: /accepter|accept/i })
    await acceptButton.click()

    const consent = await page.evaluate(() => localStorage.getItem('cookieConsent'))
    expect(consent).toBeTruthy()
    const parsed = JSON.parse(consent!)
    expect(parsed.necessary).toBe(true)
    expect(parsed.analytics).toBe(true)
  })
})
