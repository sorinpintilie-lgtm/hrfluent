import { cn } from "@/lib/utils";

interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className }: TrustBarProps) {
  return (
    <div className={cn("border-y border-border bg-background-alt py-8", className)}>
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-sm text-muted">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
            </svg>
            Fractional HR
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-sm text-muted">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
            </svg>
            Remote-first
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-sm text-muted">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
            </svg>
            Data-driven
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-sm text-muted">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
            </svg>
            Executive Support
          </span>
        </div>
      </div>
    </div>
  );
}
