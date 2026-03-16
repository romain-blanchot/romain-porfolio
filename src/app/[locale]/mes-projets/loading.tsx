import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonSection, SkeletonGrid } from "@/components/skeletons"

export default function Loading() {
  return (
    <div className="animate-in fade-in space-y-12 pt-10 duration-500">
      <SkeletonSection className="scroll-mt-8 py-16">
        {/* Featured Project Skeleton */}
        <div className="mb-12 space-y-12">
          <Skeleton className="h-[400px] w-full rounded-lg md:h-96" />
        </div>

        {/* Other Projects Skeleton */}
        <SkeletonGrid
          count={4}
          prefix="skeleton-project"
          className="grid gap-6 md:grid-cols-2"
          itemClassName="h-80 rounded-lg"
        />
      </SkeletonSection>
    </div>
  )
}
