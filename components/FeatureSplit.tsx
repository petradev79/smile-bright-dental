import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";

interface FeatureSplitProps {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  description: string;
  checklist?: string[];
  cta?: { label: string; href: string };
  imagePosition?: "left" | "right";
  bgColor?: "white" | "neutral";
}

export function FeatureSplit({
  image,
  eyebrow,
  title,
  description,
  checklist,
  cta,
  imagePosition = "left",
  bgColor = "white",
}: FeatureSplitProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24", bgColor === "neutral" ? "bg-neutral-50" : "bg-white")}>
      <div
        className={cn(
          "mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 md:px-6 lg:px-8",
          imagePosition === "right" && "lg:flex-row-reverse"
        )}
      >
        {/* Image side */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={450}
            className="rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
          />
        </div>

        {/* Content side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="left"
          />

          {checklist && checklist.length > 0 && (
            <ul className="flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                    <Check size={14} />
                  </span>
                  <span className="font-body text-base text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <div className="mt-2">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
