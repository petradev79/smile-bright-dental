import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  role: string;
  image: { src: string; alt: string };
  href?: string;
}

export function TeamCard({ name, role, image, href }: TeamCardProps) {
  const content = (
    <article className="group flex flex-col items-center gap-4 text-center">
      <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-primary-100 shadow-md group-hover:shadow-lg group-hover:border-primary-300 transition-all duration-200">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-body text-lg font-semibold text-neutral-900">{name}</h3>
      <p className="font-body text-sm text-neutral-500">{role}</p>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
