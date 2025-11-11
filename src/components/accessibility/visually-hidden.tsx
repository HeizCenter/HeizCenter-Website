import { cn } from "@/lib/utils";

interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * VisuallyHidden component
 * Hides content visually but keeps it accessible to screen readers
 * Use for additional context that's not needed visually but important for accessibility
 */
export function VisuallyHidden({ children, className }: VisuallyHiddenProps) {
  return <span className={cn("sr-only", className)}>{children}</span>;
}

interface LiveRegionProps {
  children: React.ReactNode;
  politeness?: "polite" | "assertive" | "off";
  atomic?: boolean;
  relevant?: "additions" | "removals" | "text" | "all";
  className?: string;
}

/**
 * LiveRegion component
 * Creates an ARIA live region for dynamic content updates
 * Screen readers will announce changes to this region
 */
export function LiveRegion({
  children,
  politeness = "polite",
  atomic = true,
  relevant = "additions",
  className,
}: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className={cn("sr-only", className)}
    >
      {children}
    </div>
  );
}
