import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-gray-50 text-gray-600",
        iot: "border-red-300 bg-red-50 text-red-600",
        education: "border-emerald-300 bg-emerald-50 text-emerald-700",
        ai: "border-purple-300 bg-purple-50 text-purple-600",
        blockchain: "border-pink-300 bg-pink-50 text-pink-600",
        health: "border-green-300 bg-green-50 text-green-600",
        services: "border-violet-300 bg-violet-50 text-violet-600",
        web: "border-blue-300 bg-blue-50 text-blue-600",
        mobile: "border-cyan-300 bg-cyan-50 text-cyan-600",
        ml: "border-amber-300 bg-amber-50 text-amber-700",
        outline: "border-gray-900 bg-white text-gray-900",
        secondary: "border-gray-200 bg-gray-100 text-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
