import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "phone";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className,
}: CtaButtonProps) {
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600",
    phone: "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <Link href={href}>
      <Button
        className={cn(
          "font-bold rounded-lg transition-all duration-200 inline-flex items-center gap-2",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {variant === "phone" && <Phone className="h-5 w-5" />}
        {children}
        {icon && variant !== "phone" && <ArrowRight className="h-5 w-5" />}
      </Button>
    </Link>
  );
}
