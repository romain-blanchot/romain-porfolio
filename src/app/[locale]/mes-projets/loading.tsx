import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="animate-in fade-in space-y-12 pt-10 duration-500">
      <section className="scroll-mt-8 py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Skeleton className="mx-auto mb-12 h-12 w-64" />

          {/* Featured Project Skeleton */}
          <div className="mb-12 space-y-12">
            <Skeleton className="h-[400px] w-full rounded-lg md:h-96" />
          </div>

          {/* Other Projects Skeleton */}
          <div className="grid gap-6 md:grid-cols-2">
            {[...new Array(4)].map((_, index) => (
              <Skeleton key={`skeleton-project-${index}`} className="h-80 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
