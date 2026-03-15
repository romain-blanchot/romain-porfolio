/**
 * Mock translation function for tests.
 * Returns the key itself as the translated value.
 */
export const mockT = ((key: string) => key) as ReturnType<typeof import('@/locales/client').useI18n>
