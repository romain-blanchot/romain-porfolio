import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SkeletonRepeat } from "@/components/skeletons"

export default function Loading() {
  return (
    <div className="animate-in fade-in pt-10 duration-500">
      <section className="scroll-mt-8 py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Skeleton className="mx-auto mb-12 h-12 w-64" />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Informations de contact */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-20 w-full" />

              <div className="space-y-4">
                <SkeletonRepeat count={2} prefix="skeleton-contact">
                  {() => (
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div>
                        <Skeleton className="mb-2 h-5 w-24" />
                        <Skeleton className="h-4 w-36" />
                      </div>
                    </div>
                  )}
                </SkeletonRepeat>
              </div>

              <div className="flex gap-4 pt-4">
                {Array.from({ length: 3 }, (_, index) => (
                  <Skeleton key={`skeleton-social-${index}`} className="h-10 w-10 rounded-full" />
                ))}
              </div>
            </div>

            {/* Formulaire de projet */}
            <Card>
              <CardHeader>
                <Skeleton className="mb-2 h-6 w-48" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
