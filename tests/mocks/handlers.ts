import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock Resend API
  http.post('https://api.resend.com/emails', () => {
    return HttpResponse.json({ id: 'mock-email-id' })
  }),
]
