import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
}

export function ServiceCard({ icon, title, description, href, featured = false }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-1",
        featured
          ? "bg-primary-500 shadow-[0_4px_14px_0_rgb(26_110_255/0.35)] hover:shadow-[0_8px_30px_0_rgb(26_110_255/0.30)]"
          : "border border-neutral-200 bg-white shadow-sm hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl",
          featured ? "bg-white/20 text-white" : "bg-primary-50 text-primary-500"
        )}
      >
        {icon}
      </div>
      <h3
        className={cn(
          "font-body text-xl font-semibold",
          featured ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-body text-sm leading-relaxed",
          featured ? "text-white/80" : "text-neutral-600"
        )}
      >
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5",
            featured ? "text-white" : "text-primary-500"
          )}
        >
          Learn More <ArrowRight size={16} />
        </Link>
      )}
    </article>
  );
}
