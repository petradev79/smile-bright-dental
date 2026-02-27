import { cn } from "@/lib/cn";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost" | "inverted";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  href?: string;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary-500 text-white shadow-[0_4px_14px_0_rgb(26_110_255/0.35)] hover:bg-primary-600 hover:shadow-[0_8px_30px_0_rgb(26_110_255/0.30)] hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "bg-primary-50 text-primary-600 hover:bg-primary-100 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 hover:scale-[1.02] active:scale-[0.98]",
  "outline-white":
    "border-2 border-white/40 text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "text-neutral-700 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98]",
  inverted:
    "bg-white text-primary-600 shadow-lg hover:bg-neutral-50 hover:scale-[1.02] active:scale-[0.98]",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm h-9",
  md: "px-6 py-2.5 text-sm h-11",
  lg: "px-8 py-3.5 text-base h-13",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "transition-all duration-200",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
