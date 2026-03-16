import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="animate-in fade-in pt-16 duration-500 lg:pt-32">
      <section className="bg-muted/50 scroll-mt-8 py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
          <Skeleton className="mx-auto mb-12 h-12 w-64" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend Skills Card */}
            {[...new Array(5)].map((_, index) => (
              <Card key={`skeleton-card-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-6 rounded" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...new Array(5)].map((_, badgeIndex) => (
                      <Skeleton
                        key={`skeleton-badge-${badgeIndex}`}
                        className="h-6 w-20 rounded-full"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
