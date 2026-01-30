import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, className }: TestimonialCardProps) {
  return (
    <div className={cn("rounded-card border border-border bg-white/70 p-5 hover:border-primary hover:-translate-y-0.5 transition-all duration-200", className)}>
      <p className="mb-4 text-lg leading-relaxed text-muted italic">{quote}</p>
      <div className="flex flex-col">
        <p className="text-base font-medium text-text">{author}</p>
        <p className="text-sm text-muted">{role}, {company}</p>
      </div>
    </div>
  );
}
