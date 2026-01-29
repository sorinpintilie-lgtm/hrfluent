import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStripProps {
  steps: Step[];
  className?: string;
}

export function ProcessStrip({ steps, className }: ProcessStripProps) {
  return (
    <div className={cn("border-y border-border bg-background-alt py-section-desktop", className)}>
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-card border border-border bg-white/70 p-6 hover:border-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
