import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 font-serif text-[28px] leading-tight sm:text-[32px] lg:text-[34px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
