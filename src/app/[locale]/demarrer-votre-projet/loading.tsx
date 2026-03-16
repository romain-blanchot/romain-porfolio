import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="animate-in fade-in container mx-auto px-4 py-8 pt-20 duration-500 md:py-16 md:pt-20">
      <div className="mb-8 text-center md:mb-12">
        <Skeleton className="mx-auto mb-3 h-10 w-3/4 md:mb-4 md:w-1/2" />
        <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        <div className="space-y-6 md:space-y-8">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-56" />
            </CardHeader>
            <CardContent>
              {/* Formulaire skeleton */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-full" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary">
            <CardHeader>
              <Skeleton className="bg-primary-foreground/20 h-8 w-56" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[...new Array(6)].map((_, index) => (
                  <div key={`skeleton-why-${index}`} className="flex items-start gap-2">
                    <Skeleton className="bg-primary-foreground/20 mt-1 h-5 w-5 rounded-full" />
                    <div>
                      <Skeleton className="bg-primary-foreground/20 mb-1 h-4 w-32" />
                      <Skeleton className="bg-primary-foreground/20 h-8 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 md:space-y-8">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-56" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...new Array(5)].map((_, index) => (
                  <div key={`skeleton-step-${index}`} className="flex items-start gap-4">
                    <Skeleton className="h-8 w-8 flex-shrink-0 rounded-full" />
                    <div className="min-w-0 flex-1 space-y-1">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-56" />
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <Skeleton className="h-64 w-full rounded-lg" />
            </CardContent>
          </Card>

          <div className="relative overflow-hidden rounded-lg">
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
              <div className="w-full">
                <Skeleton className="mb-1 h-6 w-48 bg-white/30 md:mb-2" />
                <Skeleton className="mb-2 h-4 w-full max-w-md bg-white/30 md:mb-4" />
                <Skeleton className="h-8 w-32 bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
