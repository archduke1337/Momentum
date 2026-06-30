"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { ButtonHTMLAttributes } from "react";

const smoothButtonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-transform duration-150 ease-out focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/20 hover:brightness-110",
        outline:
          "border border-border bg-surface shadow-sm hover:bg-surface-elevated hover:border-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:brightness-110",
        ghost: "hover:bg-surface hover:text-foreground hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        candy:
          "border border-border/50 bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 [&_svg]:drop-shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type SmoothButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof smoothButtonVariants> & {
    asChild?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
  };

function SmoothButton({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: SmoothButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(smoothButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}

export default SmoothButton;
export { smoothButtonVariants };
