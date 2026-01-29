import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function IconBadge({ icon, label, className }: IconBadgeProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-text">{label}</span>
    </div>
  );
}
