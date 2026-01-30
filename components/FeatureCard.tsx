import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

export function FeatureCard({ icon, title, description, image, className, ...props }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-white/70 hover:border-primary hover:-translate-y-0.5 transition-all duration-200 overflow-hidden",
        className
      )}
      {...props}
    >
      {image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      ) : icon && (
        <div className="p-6 pb-0">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
        </div>
      )}
      <div className={image ? "p-6" : "px-6 pb-6"}>
        <h3 className="mb-2 text-[20px] md:text-[24px] font-serif font-medium">{title}</h3>
        <p className="text-[16px] md:text-[18px] leading-[1.7] text-muted">{description}</p>
      </div>
    </div>
  );
}
