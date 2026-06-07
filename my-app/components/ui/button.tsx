import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white border-[1.5px] border-gray-900 rounded-sm shadow-[1.5px_1.5px_0px_#555] hover:shadow-[2.5px_2.5px_0px_#555] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:shadow-[0.5px_0.5px_0px_#555] active:translate-x-[0.5px] active:translate-y-[0.5px]",
        outline:
          "bg-white text-gray-900 border-[1.5px] border-gray-900 rounded-sm shadow-[1.5px_1.5px_0px_#222] hover:shadow-[2.5px_2.5px_0px_#222] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] active:shadow-[0.5px_0.5px_0px_#222] active:translate-x-[0.5px] active:translate-y-[0.5px]",
        orange:
          "bg-orange-500 text-white border-[1.5px] border-orange-700 rounded-sm shadow-[1.5px_1.5px_0px_#9a3412] hover:bg-orange-600 hover:shadow-[2.5px_2.5px_0px_#9a3412] hover:translate-x-[-0.5px] hover:translate-y-[-0.5px]",
        ghost: "hover:bg-gray-100 rounded-sm",
        link: "text-gray-900 underline-offset-4 hover:underline",
        destructive:
          "bg-red-500 text-white border-[1.5px] border-red-700 rounded-sm shadow-[1.5px_1.5px_0px_#991b1b]",
        secondary:
          "bg-gray-100 text-gray-900 border border-gray-300 rounded-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
