import { describe, it, expect, beforeEach } from 'vitest'

const POPUP_INTERVAL = 24 * 60 * 60 * 1000
const PAGE_VIEW_THRESHOLD = 5

/** Simulates the popup trigger logic from newsletter-popup.tsx */
function shouldShowPopup(): boolean {
  if (localStorage.getItem('newsletterSubscribed') === 'true') return false

  const lastShown = localStorage.getItem('lastNewsletterPopupShown')
  if (lastShown) {
    const elapsed = Date.now() - parseInt(lastShown, 10)
    if (elapsed < POPUP_INTERVAL) return false
  }

  const pageViews = parseInt(localStorage.getItem('pageViews') || '0', 10)
  return pageViews >= PAGE_VIEW_THRESHOLD
}

function incrementPageViews() {
  const current = parseInt(localStorage.getItem('pageViews') || '0', 10)
  localStorage.setItem('pageViews', String(current + 1))
}

describe('NewsletterPopup – trigger logic', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('does not show when user is already subscribed', () => {
    localStorage.setItem('newsletterSubscribed', 'true')
    for (let i = 0; i < PAGE_VIEW_THRESHOLD; i++) incrementPageViews()
    expect(shouldShowPopup()).toBe(false)
  })

  it('does not show when popup was shown less than 24h ago', () => {
    localStorage.setItem('lastNewsletterPopupShown', String(Date.now() - 1000))
    for (let i = 0; i < PAGE_VIEW_THRESHOLD; i++) incrementPageViews()
    expect(shouldShowPopup()).toBe(false)
  })

  it('does not show when page views are below threshold', () => {
    for (let i = 0; i < PAGE_VIEW_THRESHOLD - 1; i++) incrementPageViews()
    expect(shouldShowPopup()).toBe(false)
  })

  it('shows when all conditions are met', () => {
    for (let i = 0; i < PAGE_VIEW_THRESHOLD; i++) incrementPageViews()
    expect(shouldShowPopup()).toBe(true)
  })

  it('shows when popup was shown more than 24h ago and threshold met', () => {
    localStorage.setItem(
      'lastNewsletterPopupShown',
      String(Date.now() - POPUP_INTERVAL - 1000)
    )
    for (let i = 0; i < PAGE_VIEW_THRESHOLD; i++) incrementPageViews()
    expect(shouldShowPopup()).toBe(true)
  })

  it('increments page views correctly', () => {
    expect(localStorage.getItem('pageViews')).toBeNull()
    incrementPageViews()
    expect(localStorage.getItem('pageViews')).toBe('1')
    incrementPageViews()
    incrementPageViews()
    expect(localStorage.getItem('pageViews')).toBe('3')
  })
})
