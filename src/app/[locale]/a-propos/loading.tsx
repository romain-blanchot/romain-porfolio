import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonSection } from "@/components/skeletons"

export default function Loading() {
  return (
    <div className="animate-in fade-in pt-16 duration-500 lg:pt-20">
      <SkeletonSection className="bg-muted/50 scroll-mt-8 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-[550px] overflow-hidden rounded-lg">
            <Skeleton className="h-full w-full" />
          </div>

          {/* Texte */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />

            <div className="pt-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>

            <div className="pt-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5" />
            </div>
          </div>
        </div>
      </SkeletonSection>
    </div>
  )
}
