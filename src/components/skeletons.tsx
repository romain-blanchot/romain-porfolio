import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SkeletonGrid({
  count,
  className,
  itemClassName,
  prefix,
}: Readonly<{
  count: number
  className: string
  itemClassName: string
  prefix: string
}>) {
  return (
    <div className={className}>
      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={`${prefix}-${index}`} className={itemClassName} />
      ))}
    </div>
  )
}

export function SkeletonCardGrid({
  count,
  className,
  prefix,
  headerContent,
  bodyContent,
}: Readonly<{
  count: number
  className: string
  prefix: string
  headerContent: (index: number) => React.ReactNode
  bodyContent: (index: number) => React.ReactNode
}>) {
  return (
    <div className={className}>
      {Array.from({ length: count }, (_, index) => (
        <Card key={`${prefix}-${index}`}>
          <CardHeader>{headerContent(index)}</CardHeader>
          <CardContent>{bodyContent(index)}</CardContent>
        </Card>
      ))}
    </div>
  )
}

export function SkeletonSection({
  className,
  titleWidth = "w-64",
  children,
}: Readonly<{
  className?: string
  titleWidth?: string
  children: React.ReactNode
}>) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <Skeleton className={`mx-auto mb-12 h-12 ${titleWidth}`} />
        {children}
      </div>
    </section>
  )
}

export function SkeletonRepeat({
  count,
  prefix,
  children,
}: Readonly<{
  count: number
  prefix: string
  children: (index: number) => React.ReactNode
}>) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={`${prefix}-${index}`}>{children(index)}</div>
      ))}
    </>
  )
}
