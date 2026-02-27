import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureSplit } from "@/components/FeatureSplit";
import { CtaBanner } from "@/components/CtaBanner";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Team — Smile Bright Dental",
  description:
    "Meet the expert dentists at Smile Bright Dental in Niš. Our experienced team specializes in cosmetic dentistry, oral surgery, implants, and more.",
};

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title="Expert Dentists You Can Trust"
            description="Our team of highly trained professionals brings together decades of combined experience to deliver exceptional dental care."
          />
        </div>
      </section>

      {/* Featured Founder */}
      <FeatureSplit
        image={images.team.ana}
        eyebrow="Founder & Lead Dentist"
        title="Dr. Ana Petrović"
        description="Dr. Ana Petrović founded Smile Bright Dental in 2015 with a vision to bring world-class dental care to Niš. With over 12 years of experience specializing in cosmetic dentistry and prosthetics, she has transformed thousands of smiles. Dr. Petrović trained at leading European institutions and is passionate about combining artistry with clinical precision. Under her leadership, Smile Bright has become one of the most trusted dental practices in the region."
        checklist={[
          "Specialist in cosmetic dentistry and prosthetics",
          "Over 12 years of clinical experience",
          "Trained at leading European dental institutions",
          "Founder and visionary behind Smile Bright Dental",
        ]}
      />

      {/* Dr. Jovana */}
      <FeatureSplit
        image={images.team.jovana}
        eyebrow="General & Restorative Dentist"
        title="Dr. Jovana Ilić"
        description="Dr. Jovana Ilić joined Smile Bright Dental in 2018, bringing her expertise in general and restorative dentistry. She is known for her gentle approach and dedication to preventive care, helping patients maintain optimal oral health. Dr. Ilić specializes in teeth whitening, fillings, and routine care, ensuring every patient leaves with a brighter, healthier smile."
        checklist={[
          "Expert in preventive and restorative dentistry",
          "Specializes in teeth whitening and fillings",
          "Known for her gentle, patient-centered approach",
          "Committed to ongoing professional development",
        ]}
        imagePosition="right"
        bgColor="neutral"
      />

      {/* Dr. Dragan */}
      <FeatureSplit
        image={images.team.dragan}
        eyebrow="Oral Surgeon"
        title="Dr. Dragan Savić"
        description="Dr. Dragan Savić is Smile Bright Dental's oral surgery specialist, joining the team in 2019. With extensive training in implantology and surgical procedures, he handles everything from complex extractions to full dental implant placements. Dr. Savić is recognized for his precision, calm demeanor, and commitment to minimally invasive techniques that prioritize patient comfort."
        checklist={[
          "Specialist in oral surgery and implantology",
          "Expert in complex extractions and bone grafting",
          "Trained in minimally invasive surgical techniques",
          "Recognized for precision and patient comfort",
        ]}
      />

      {/* CTA */}
      <CtaBanner
        title="Book an Appointment With Our Team"
        description="Experience personalized dental care from our expert team. Schedule your visit today."
        primaryCta={{ label: "Book Appointment", href: "#contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
