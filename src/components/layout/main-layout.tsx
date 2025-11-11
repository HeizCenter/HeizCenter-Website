import { SkipToContent } from "@/components/accessibility";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout component
 * Provides semantic HTML structure with proper landmark regions
 * Includes skip to content link for keyboard navigation
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SkipToContent />
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}

interface SectionProps {
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  id?: string;
}

/**
 * Semantic Section component with proper ARIA labels
 */
export function Section({
  children,
  ariaLabel,
  ariaLabelledBy,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={className}
    >
      {children}
    </section>
  );
}

interface ArticleProps {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

/**
 * Semantic Article component
 */
export function Article({ children, ariaLabel, className }: ArticleProps) {
  return (
    <article aria-label={ariaLabel} className={className}>
      {children}
    </article>
  );
}

interface NavProps {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  id?: string;
}

/**
 * Semantic Nav component with required aria-label
 */
export function Nav({ children, ariaLabel, className, id }: NavProps) {
  return (
    <nav id={id} aria-label={ariaLabel} className={className}>
      {children}
    </nav>
  );
}
