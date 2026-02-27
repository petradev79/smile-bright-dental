import { cn } from "@/lib/cn";

interface SparkleIconProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function SparkleIcon({ className, size = 24, animated }: SparkleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "text-primary-400",
        animated && "animate-[sparkle-spin_3s_ease-in-out_infinite]",
        className
      )}
    >
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}
