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
    <div className={cn("rounded-card border border-border bg-white/70 p-8 hover:border-primary hover:-translate-y-0.5 transition-all duration-200", className)}>
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 17L22 7L17 12L12 2Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-muted italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10" />
        <div>
          <p className="text-base font-medium text-text">{author}</p>
          <p className="text-sm text-muted">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}
