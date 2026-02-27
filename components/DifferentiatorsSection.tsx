import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

interface DiffItemProps {
  number: string;
  title: string;
  description: string;
}

interface DifferentiatorsSectionProps {
  title: string;
  items: DiffItemProps[];
  image?: { src: string; alt: string };
}

export function DifferentiatorsSection({ title, items, image }: DifferentiatorsSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-12 md:py-16 lg:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 md:px-6 lg:px-8">
        {/* Content side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <SectionHeader title={title} light align="left" />
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-xl">
            {items.map((item, i) => (
              <div
                key={item.number}
                className={`flex gap-4 py-4 ${i < items.length - 1 ? "border-b border-neutral-100" : ""}`}
              >
                <span className="font-display text-lg font-bold text-primary-500 shrink-0 w-8">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-body text-base font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-600 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        {image && (
          <div className="w-full lg:w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={450}
              className="rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
