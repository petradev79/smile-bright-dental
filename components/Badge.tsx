import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md";
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary-50 text-primary-700",
  success: "bg-success-100 text-success-500",
  warning: "bg-warning-100 text-warning-500",
  error: "bg-error-100 text-error-500",
};

const sizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-body font-medium",
        sizeClasses[size],
        variantClasses[variant]
      )}
    >
      {children}
    </span>
  );
}
