import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description, className, ...props }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface p-6 shadow-soft hover:border-primary hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200",
        className
      )}
      {...props}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-[20px] md:text-[24px] font-serif font-medium">{title}</h3>
      <p className="text-[16px] md:text-[18px] leading-[1.7] text-muted">{description}</p>
    </div>
  );
}
