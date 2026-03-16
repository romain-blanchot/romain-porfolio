import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent shadow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">,
    VariantProps<typeof badgeVariants> {
  interactive?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}

function Badge({ className, variant, interactive, onClick, ...props }: BadgeProps) {
  if (interactive) {
    return (
      <button
        type="button"
        className={cn(badgeVariants({ variant }), className, "cursor-pointer")}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    )
  }

  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
