"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "./SectionHeader";

interface StatBubbleProps {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
}

interface StatsSectionProps {
  title: string;
  description?: string;
  stats: StatBubbleProps[];
}

function StatBubble({ value, label, size = "md" }: StatBubbleProps & { visible: boolean }) {
  const sizeClasses = {
    sm: "h-28 w-28",
    md: "h-36 w-36",
    lg: "h-44 w-44 bg-primary-500 text-white shadow-[0_4px_14px_0_rgb(26_110_255/0.35)]",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-full text-center",
        size === "lg" ? sizeClasses.lg : size === "sm" ? sizeClasses.sm : sizeClasses.md,
        size !== "lg" && (size === "md" ? "bg-primary-100" : "bg-neutral-100")
      )}
    >
      <span className="font-display text-2xl md:text-3xl font-bold">{value}</span>
      <span
        className={cn(
          "font-body text-xs md:text-sm mt-1",
          size === "lg" ? "text-white/80" : "text-neutral-500"
        )}
      >
        {label}
      </span>
    </div>
  );
}

export function StatsSection({ title, description, stats }: StatsSectionProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeader title={title} description={description} />
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <StatBubble {...stat} visible={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
