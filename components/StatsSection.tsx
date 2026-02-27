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

function StatBubble({
  value,
  label,
  highlight = false,
}: StatBubbleProps & { visible: boolean; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-full text-center h-44 w-44",
        highlight
          ? "bg-primary-500 text-white shadow-[0_4px_14px_0_rgb(26_110_255/0.35)]"
          : "bg-primary-100"
      )}
    >
      <span className="font-display text-2xl md:text-3xl font-bold">{value}</span>
      <span
        className={cn(
          "font-body text-xs md:text-sm mt-1",
          highlight ? "text-white/80" : "text-neutral-500"
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
              <StatBubble {...stat} visible={visible} highlight={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
