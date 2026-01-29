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
      <h2 className="mb-4 font-serif text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[16px] md:text-[18px] leading-[1.7] text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
