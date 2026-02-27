import { Button } from "./Button";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaBanner({ title, description, primaryCta, secondaryCta }: CtaBannerProps) {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[720px] text-center px-4 flex flex-col items-center gap-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button href={primaryCta.href} variant="inverted" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline-white" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
