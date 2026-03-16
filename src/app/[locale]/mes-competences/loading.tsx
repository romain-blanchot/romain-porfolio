import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SkeletonSection } from "@/components/skeletons"

export default function Loading() {
  return (
    <div className="animate-in fade-in pt-16 duration-500 lg:pt-32">
      <SkeletonSection className="bg-muted/50 scroll-mt-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }, (_, index) => (
            <Card key={`skeleton-card-${index}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }, (_, badgeIndex) => (
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
      </SkeletonSection>
    </div>
  )
}
