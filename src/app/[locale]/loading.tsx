import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="animate-in fade-in space-y-16 duration-500">
      {/* Hero Section Skeleton */}
      <section className="relative mt-10 py-10 sm:py-16 lg:py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
              <Skeleton className="mx-auto h-14 w-3/4 lg:mx-0" />
              <Skeleton className="h-24 w-full" />
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 sm:flex sm:flex-wrap sm:gap-6">
                {[...new Array(4)].map((_, index) => (
                  <Skeleton key={`skeleton-feature-${index}`} className="h-6 w-32" />
                ))}
              </div>
            </div>
            <div className="relative mt-6 flex justify-center sm:mt-8 lg:mt-0">
              <Skeleton className="h-56 w-56 rounded-full sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" />
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4 sm:mt-10 lg:mt-12 lg:justify-start">
            {[...new Array(3)].map((_, index) => (
              <Skeleton key={`skeleton-social-${index}`} className="h-10 w-10 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Skeleton className="mx-auto mb-10 h-12 w-64" />
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...new Array(3)].map((_, index) => (
              <Skeleton key={`skeleton-service-${index}`} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Skeleton className="mx-auto mb-10 h-12 w-64" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {[...new Array(10)].map((_, index) => (
              <Skeleton key={`skeleton-skill-${index}`} className="h-28 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Minimalistic Projects, About and Contact skeletons */}
      {[...new Array(3)].map((_, index) => (
        <section key={`skeleton-section-${index}`} className="py-16">
          <div className="container mx-auto px-4 sm:px-8 lg:px-12">
            <Skeleton className="mx-auto mb-10 h-12 w-64" />
            <div className="mx-auto max-w-3xl">
              <Skeleton className="h-96 rounded-lg" />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
