import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  label: string;
  value: string;
  description?: string;
  className?: string;
}

export function MetricBadge({ label, value, description, className }: MetricBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 rounded-xl border border-border/80 bg-card/80 backdrop-blur-sm transition-all hover:border-primary/40",
        className
      )}
    >
      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
        {value}
      </span>
      <span className="text-sm font-semibold text-foreground mt-0.5">
        {label}
      </span>
      {description && (
        <span className="text-xs text-muted-foreground mt-1 leading-normal">
          {description}
        </span>
      )}
    </div>
  );
}
