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
          "bg-surface": variant === "default",
          "bg-surface border border-border": variant === "bordered",
          "bg-surface shadow-soft hover:shadow-soft-lg": variant === "elevated",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
