import type { Metadata } from "next";
import { FeatureSplit } from "@/components/FeatureSplit";
import { StatsSection } from "@/components/StatsSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — Smile Bright Dental",
  description:
    "Learn about Smile Bright Dental's story, mission, and the team dedicated to providing exceptional dental care in Niš, Serbia.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Us"
            title="Our Story & Mission"
            description="Dedicated to transforming smiles and building lasting relationships with every patient who walks through our doors."
          />
        </div>
      </section>

      {/* Founding Story */}
      <FeatureSplit
        image={images.about.founder}
        eyebrow="Our Beginning"
        title="Founded on a Vision for Better Dental Care"
        description="Dr. Ana Petrović founded Smile Bright Dental in 2015 with a clear mission: to bring world-class dental care to the people of Niš. After years of training and practice across Europe, she returned to her hometown to create a clinic that combines cutting-edge technology with a warm, patient-first approach."
        checklist={[
          "Established in 2015 in the heart of Niš",
          "Founded by Dr. Ana Petrović, a leading cosmetic dentist",
          "Built on European standards of care and technology",
          "Committed to accessible, high-quality dental treatments",
        ]}
      />

      {/* Mission & Values */}
      <FeatureSplit
        image={images.about.clinic}
        eyebrow="Our Mission"
        title="Growing With Our Community"
        description="Over the years, Smile Bright Dental has grown from a small practice into a trusted name in dental care across Niš. We've expanded our team, invested in state-of-the-art equipment, and broadened our services — all while staying true to our core values of compassion, excellence, and integrity."
        checklist={[
          "Expanded to a team of 3 specialized dentists",
          "Invested in the latest dental technology and equipment",
          "Active community outreach and dental education programs",
          "Thousands of satisfied patients and counting",
        ]}
        imagePosition="right"
        bgColor="neutral"
      />

      {/* Stats */}
      <StatsSection
        title="The Reasons Smile Bright is Unbeatable"
        description="Our numbers speak for themselves — years of experience, thousands of smiles."
        stats={[
          { value: "10+", label: "Years Experience", size: "lg" },
          { value: "3", label: "Expert Doctors", size: "lg" },
          { value: "4+", label: "Specialties", size: "lg" },
          { value: "5000+", label: "Happy Patients", size: "lg" },
        ]}
      />

      {/* CTA */}
      <CtaBanner
        title="Ready to Experience the Smile Bright Difference?"
        description="Join the thousands of patients who trust us with their dental care. Book your first appointment today."
        primaryCta={{ label: "Book Appointment", href: "#contact" }}
        secondaryCta={{ label: "Meet Our Team", href: "/team" }}
      />
    </>
  );
}
