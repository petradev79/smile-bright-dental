"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { Button } from "./Button";
import { SparkleIcon } from "./SparkleIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface HeroSectionProps {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  mainImage: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  floatingBadge?: { text: string };
}

export function HeroSection({
  heading,
  description,
  primaryCta,
  secondaryCta,
  mainImage,
  secondaryImage,
  floatingBadge,
}: HeroSectionProps) {
  const headingRef = useScrollReveal({ delay: 0 });
  const paraRef = useScrollReveal({ delay: 100 });
  const actionsRef = useScrollReveal({ delay: 200 });
  const mediaRef = useScrollReveal({ delay: 300 });

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4 md:px-6 lg:px-8">
        {/* Content column */}
        <div className="flex flex-col gap-6 lg:max-w-[55%] text-center lg:text-left">
          <h1
            ref={headingRef}
            className="reveal font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-neutral-900"
          >
            {heading}{" "}
            <SparkleIcon size={32} className="inline-block text-primary-400 -mt-2" animated />
          </h1>
          <p
            ref={paraRef}
            className="reveal font-body text-lg text-neutral-600 leading-relaxed max-w-[540px] mx-auto lg:mx-0"
          >
            {description}
          </p>
          <div
            ref={actionsRef}
            className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Media column */}
        <div ref={mediaRef} className="reveal relative w-full lg:max-w-[45%]">
          <div className="relative">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={600}
              height={500}
              className="rounded-3xl shadow-xl object-cover w-full aspect-[4/3]"
              priority
            />
            {secondaryImage && (
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                width={250}
                height={200}
                className="absolute -bottom-6 -left-6 w-[45%] rounded-2xl shadow-lg border-4 border-white object-cover aspect-[4/3]"
              />
            )}
            {floatingBadge && (
              <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <Award size={20} className="text-primary-500" />
                <span className="font-body text-sm font-semibold text-neutral-900">
                  {floatingBadge.text}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
