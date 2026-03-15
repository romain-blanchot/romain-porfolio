import { describe, it, expect } from 'vitest'
import { newsletterSchema } from '@/lib/schema/schema.newsletter'
import { mockT } from '../mocks/i18n'

const schema = newsletterSchema(mockT)

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    const result = schema.safeParse({ email: 'test@example.com' })
    expect(result.success).toBe(true)
  })

  it('accepts email with optional name and language', () => {
    const result = schema.safeParse({
      email: 'test@example.com',
      name: 'John',
      language: 'fr',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('John')
      expect(result.data.language).toBe('fr')
    }
  })

  it('rejects missing email', () => {
    const result = schema.safeParse({})
    expect(result.success).toBe(false)
  })

  it('rejects empty email string', () => {
    const result = schema.safeParse({ email: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email format', () => {
    const invalid = ['not-email', 'foo@', '@bar.com', 'a@b', 'test @test.com']
    for (const email of invalid) {
      const result = schema.safeParse({ email })
      expect(result.success).toBe(false)
    }
  })

  it('allows name and language to be omitted', () => {
    const result = schema.safeParse({ email: 'test@example.com' })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBeUndefined()
      expect(result.data.language).toBeUndefined()
    }
  })
})
