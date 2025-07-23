import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border glass hover:bg-accent/20 hover:text-accent-foreground transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        electric: "bg-gradient-electric text-electric-foreground hover:shadow-glow hover:scale-105 transition-all duration-500 font-semibold glow-electric",
        hero: "glass bg-gradient-primary/20 text-foreground hover:bg-gradient-primary/30 hover:shadow-electric hover:scale-105 transition-all duration-500 font-semibold border border-electric/30",
        cta: "bg-electric text-electric-foreground hover:bg-electric/90 shadow-electric hover:shadow-glow hover:scale-105 transition-all duration-500 font-semibold animate-pulse-glow",
        neon: "bg-gradient-neon text-neon-foreground hover:shadow-neon hover:scale-105 transition-all duration-500 font-semibold",
        glass: "glass text-foreground hover:bg-white/10 hover:scale-105 transition-all duration-500 border border-white/20",
        magnetic: "bg-primary text-primary-foreground hover:bg-primary/90 magnetic transition-all duration-300 hover:shadow-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
