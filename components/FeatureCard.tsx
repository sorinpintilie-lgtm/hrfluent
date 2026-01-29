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
        "rounded-card border border-border bg-surface p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-200",
        className
      )}
      {...props}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-base leading-relaxed text-muted">{description}</p>
    </div>
  );
}
