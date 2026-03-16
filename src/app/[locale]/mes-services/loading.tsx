import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SkeletonGrid } from "@/components/skeletons"

export default function Loading() {
  return (
    <div className="animate-in fade-in container mx-auto mt-16 px-4 py-12 duration-500 md:py-16 lg:py-20">
      {/* En-tete de la page */}
      <div className="mb-8 text-center md:mb-12">
        <Skeleton className="mx-auto mb-3 h-10 w-3/4 md:mb-4 md:w-1/2" />
        <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
      </div>

      {/* Onglets de categories */}
      <div className="mb-8 w-full">
        <SkeletonGrid
          count={3}
          prefix="skeleton-tab"
          className="mb-4 grid w-full grid-cols-1 gap-4 pt-4 pb-10 md:mb-8 md:grid-cols-3 md:pt-1 lg:pt-1"
          itemClassName="h-12 rounded-md"
        />
      </div>

      {/* Grille de services */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={`skeleton-service-${index}`} className="h-full">
            <CardHeader>
              <div className="bg-muted mb-3 h-10 w-10 rounded-full md:mb-4 md:h-12 md:w-12" />
              <Skeleton className="mb-2 h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }, (_, tagIndex) => (
                  <Skeleton key={`skeleton-tag-${tagIndex}`} className="h-5 w-16 rounded-full" />
                ))}
              </div>
              <div className="pt-2">
                <Skeleton className="h-9 w-full rounded-md md:w-32" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section d'appel a l'action */}
      <div className="mt-10 md:mt-16">
        <Card className="bg-muted/10">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="space-y-6 text-center">
              <Skeleton className="mx-auto h-8 w-3/4" />
              <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
              <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Skeleton className="h-10 w-full rounded-md sm:w-40" />
                <Skeleton className="h-10 w-full rounded-md sm:w-40" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
