import { describe, it, expect } from "vitest"
import { config } from "@/proxy"

const matcher = config.matcher[0]
const regex = new RegExp(matcher)

describe("Middleware – route matcher", () => {
  const shouldMatch = ["/", "/fr", "/en", "/mes-projets", "/en/a-propos", "/demarrer-votre-projet"]
  const shouldNotMatch = [
    "/_next/static/chunk.js",
    "/favicon.ico",
    "/robots.txt",
    "/static/image.png",
    "/logo.svg",
    "/image.jpg",
  ]

  for (const path of shouldMatch) {
    it(`matches app route: ${path}`, () => {
      expect(regex.test(path)).toBe(true)
    })
  }

  for (const path of shouldNotMatch) {
    it(`excludes non-app path: ${path}`, () => {
      expect(regex.test(path)).toBe(false)
    })
  }
})
