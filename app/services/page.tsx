import type { Metadata } from "next";
import { Sparkles, Scissors, Wrench, Crown, Stethoscope, ScanLine, PenTool, Baby, ShieldCheck, HeartPulse } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureSplit } from "@/components/FeatureSplit";
import { CtaBanner } from "@/components/CtaBanner";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services — Smile Bright Dental",
  description:
    "Explore our comprehensive dental services including teeth whitening, oral surgery, dental implants, prosthetics, and more in Niš, Serbia.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Dental Care"
            description="From preventive care to advanced procedures, we offer a complete range of dental services to keep your smile healthy and beautiful."
          />
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard
              icon={<Sparkles size={28} />}
              title="Teeth Whitening"
              description="Professional whitening treatments to restore your smile's natural brilliance and boost your confidence."
              href="#whitening"
              featured
            />
            <ServiceCard
              icon={<Scissors size={28} />}
              title="Oral Surgery"
              description="Expert surgical procedures including extractions, jaw corrections, and tissue grafting."
              href="#surgery"
            />
            <ServiceCard
              icon={<Wrench size={28} />}
              title="Dental Implants"
              description="Permanent tooth replacement solutions that look, feel, and function like natural teeth."
              href="#implants"
            />
            <ServiceCard
              icon={<Crown size={28} />}
              title="Dental Prosthetics"
              description="Custom crowns, bridges, and dentures crafted for a perfect fit and natural appearance."
              href="#prosthetics"
            />
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div id="whitening">
        <FeatureSplit
          image={images.services.whitening}
          eyebrow="Cosmetic Dentistry"
          title="Professional Teeth Whitening"
          description="Our in-office whitening treatments use advanced LED technology and professional-grade gels to brighten your smile by up to 8 shades in a single visit. We also offer custom take-home kits for gradual, comfortable whitening."
          checklist={[
            "In-office treatment with immediate results",
            "Custom take-home whitening kits",
            "Safe, enamel-friendly professional gels",
            "Long-lasting results with proper care",
          ]}
          bgColor="neutral"
        />
      </div>

      <div id="surgery">
        <FeatureSplit
          image={images.services.surgery}
          eyebrow="Surgical Procedures"
          title="Expert Oral Surgery"
          description="Led by Dr. Dragan Savić, our oral surgery services cover everything from wisdom tooth extractions to complex jaw procedures. We use minimally invasive techniques and modern anesthesia to ensure your comfort throughout."
          checklist={[
            "Wisdom tooth and complex extractions",
            "Jaw correction and bone grafting",
            "Tissue grafting and regeneration",
            "Minimally invasive surgical techniques",
          ]}
          imagePosition="right"
        />
      </div>

      <div id="implants">
        <FeatureSplit
          image={images.services.implants}
          eyebrow="Tooth Replacement"
          title="Dental Implants"
          description="Dental implants are the gold standard for replacing missing teeth. Our team uses 3D imaging and computer-guided placement to ensure precise, predictable results that can last a lifetime."
          checklist={[
            "3D imaging for precise implant placement",
            "Single tooth, bridge, and full-arch solutions",
            "Titanium and ceramic implant options",
            "Lifetime durability with proper maintenance",
          ]}
          bgColor="neutral"
        />
      </div>

      <div id="prosthetics">
        <FeatureSplit
          image={images.services.prosthetics}
          eyebrow="Restorative Care"
          title="Dental Prosthetics"
          description="Whether you need a single crown or a full set of dentures, our prosthetic solutions are custom-designed to match your natural teeth in color, shape, and function — giving you a seamless, comfortable smile."
          checklist={[
            "Custom porcelain crowns and bridges",
            "Full and partial dentures",
            "Same-day temporary restorations",
            "Natural-looking, precision-fitted results",
          ]}
          imagePosition="right"
        />
      </div>

      {/* Additional Services */}
      <section className="py-12 md:py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="More Services"
            title="Additional Dental Services"
            description="We also offer a range of general and preventive dental services to keep your oral health in top shape."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Stethoscope size={28} />}
              title="Routine Checkups"
              description="Regular dental exams and cleanings to maintain your oral health and catch issues early."
            />
            <ServiceCard
              icon={<ScanLine size={28} />}
              title="Dental X-Rays"
              description="Digital X-rays for accurate diagnosis with minimal radiation exposure."
            />
            <ServiceCard
              icon={<PenTool size={28} />}
              title="Fillings"
              description="Tooth-colored composite fillings that restore strength and blend seamlessly with your natural teeth."
            />
            <ServiceCard
              icon={<HeartPulse size={28} />}
              title="Root Canal"
              description="Gentle root canal therapy to save infected teeth and relieve pain effectively."
            />
            <ServiceCard
              icon={<ShieldCheck size={28} />}
              title="Teeth Cleaning"
              description="Professional cleaning and scaling to remove plaque, tartar, and surface stains."
            />
            <ServiceCard
              icon={<Baby size={28} />}
              title="Pediatric Dentistry"
              description="Gentle, child-friendly dental care to set your kids up for a lifetime of healthy smiles."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Get Started?"
        description="Book your appointment today and let our expert team take care of your smile."
        primaryCta={{ label: "Book Appointment", href: "#contact" }}
        secondaryCta={{ label: "Contact Us", href: "#contact" }}
      />
    </>
  );
}
