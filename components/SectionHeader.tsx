import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-10 md:mb-12",
        align === "center" && "items-center text-center max-w-[600px] mx-auto",
        align === "left" && "items-start text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-body text-sm font-semibold uppercase tracking-wider",
            light ? "text-white/80" : "text-primary-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl lg:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "font-body text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
