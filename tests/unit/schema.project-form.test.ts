import { describe, it, expect } from 'vitest'
import { projectFormSchema } from '@/lib/schema/schema.project-form'
import { mockT } from '../mocks/i18n'

const schema = projectFormSchema(mockT)

const validData = {
  name: 'Romain',
  surname: 'Blanchot',
  email: 'romain@example.com',
  company: 'Acme Corp',
  sector: 'Tech',
  budget: '5000-10000',
  timeline: '3 mois',
  mainObjective: 'Créer un site web',
  projectIdea: 'Portfolio professionnel',
  targetAudience: 'Développeurs',
  expectedResults: 'Plus de visibilité',
}

describe('projectFormSchema', () => {
  it('accepts valid complete data', () => {
    const result = schema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('accepts valid data with optional fields', () => {
    const result = schema.safeParse({
      ...validData,
      technicalPreferences: 'Next.js, Tailwind',
      otherDetails: 'Pas de deadline stricte',
    })
    expect(result.success).toBe(true)
  })

  const requiredFields = [
    'name', 'surname', 'email', 'company', 'sector',
    'budget', 'timeline', 'mainObjective', 'projectIdea',
    'targetAudience', 'expectedResults',
  ] as const

  for (const field of requiredFields) {
    it(`rejects missing required field: ${field}`, () => {
      const data = { ...validData }
      delete (data as Record<string, unknown>)[field]
      const result = schema.safeParse(data)
      expect(result.success).toBe(false)
    })

    it(`rejects empty string for required field: ${field}`, () => {
      const result = schema.safeParse({ ...validData, [field]: '' })
      expect(result.success).toBe(false)
    })
  }

  it('rejects invalid email format', () => {
    const result = schema.safeParse({ ...validData, email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects short fields exceeding 255 chars', () => {
    const longString = 'a'.repeat(256)
    const result = schema.safeParse({ ...validData, name: longString })
    expect(result.success).toBe(false)
  })

  it('rejects text fields exceeding 2000 chars', () => {
    const longString = 'a'.repeat(2001)
    const result = schema.safeParse({ ...validData, projectIdea: longString })
    expect(result.success).toBe(false)
  })

  it('accepts text fields at exactly 2000 chars', () => {
    const result = schema.safeParse({
      ...validData,
      projectIdea: 'a'.repeat(2000),
    })
    expect(result.success).toBe(true)
  })

  it('accepts short fields at exactly 255 chars', () => {
    const result = schema.safeParse({
      ...validData,
      name: 'a'.repeat(255),
    })
    expect(result.success).toBe(true)
  })
})
