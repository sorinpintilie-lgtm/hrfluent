import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 transition-all duration-200",
        {
          "bg-white/70": variant === "default",
          "bg-white/70 border border-border": variant === "bordered",
          "bg-white/70 border border-border hover:border-primary hover:-translate-y-0.5": variant === "elevated",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
