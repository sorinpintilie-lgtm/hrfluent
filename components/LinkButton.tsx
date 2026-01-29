import { cn } from "@/lib/utils";
import { LinkHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

interface LinkButtonProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href: string;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-button font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-[#FBFBF7] hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-soft-lg active:translate-y-0":
              variant === "primary",
            "bg-transparent border border-border text-text hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0":
              variant === "secondary",
            "text-text hover:text-primary hover:bg-primary/5": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";
