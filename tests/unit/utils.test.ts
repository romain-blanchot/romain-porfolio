import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn() - className merge utility", () => {
  it("merges multiple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false, "visible")).toBe("base visible")
  })

  it("resolves Tailwind conflicts (last wins)", () => {
    const result = cn("px-4", "px-8")
    expect(result).toBe("px-8")
  })

  it("handles empty input", () => {
    expect(cn()).toBe("")
  })

  it("handles undefined and null", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar")
  })

  it("merges Tailwind color conflicts", () => {
    const result = cn("text-red-500", "text-blue-500")
    expect(result).toBe("text-blue-500")
  })
})
