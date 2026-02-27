import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorImage: { src: string; alt: string };
  rating: 1 | 2 | 3 | 4 | 5;
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorImage,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm min-w-[300px] snap-center flex-shrink-0 lg:min-w-0">
      {/* Quote icon */}
      <span className="text-4xl leading-none text-primary-200 font-display select-none">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-current" : "text-neutral-200 fill-neutral-200"}`}
          />
        ))}
      </div>

      {/* Quote text */}
      <p className="font-body text-sm md:text-base text-neutral-700 leading-relaxed">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
        <Image
          src={authorImage.src}
          alt={authorImage.alt}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-body text-sm font-semibold text-neutral-900">{authorName}</p>
          {authorRole && (
            <p className="font-body text-xs text-neutral-500">{authorRole}</p>
          )}
        </div>
      </div>
    </article>
  );
}
