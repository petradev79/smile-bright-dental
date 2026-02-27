import { Sparkles, Scissors, Wrench, Crown, MapPin, Phone, Mail, Clock } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureSplit } from "@/components/FeatureSplit";
import { TeamCard } from "@/components/TeamCard";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaBanner } from "@/components/CtaBanner";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        heading="Your Smile Deserves the Best Care"
        description="At Smile Bright Dental, we combine advanced technology with compassionate care to give you the confident, healthy smile you've always wanted."
        primaryCta={{ label: "View Services", href: "/services" }}
        secondaryCta={{ label: "Contact Us", href: "#contact" }}
        mainImage={images.hero.main}
        secondaryImage={images.hero.secondary}
        floatingBadge={{ text: "10+ Years Experience" }}
      />

      {/* Our Services */}
      <section className="py-12 md:py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Dental Care for Your Whole Family"
            description="From routine checkups to advanced procedures, we offer a full range of dental services tailored to your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard
              icon={<Sparkles size={28} />}
              title="Teeth Whitening"
              description="Professional whitening treatments to restore your smile's natural brilliance and boost your confidence."
              href="/services#whitening"
              featured
            />
            <ServiceCard
              icon={<Scissors size={28} />}
              title="Oral Surgery"
              description="Expert surgical procedures including extractions, jaw corrections, and tissue grafting."
              href="/services#surgery"
            />
            <ServiceCard
              icon={<Wrench size={28} />}
              title="Dental Implants"
              description="Permanent tooth replacement solutions that look, feel, and function like natural teeth."
              href="/services#implants"
            />
            <ServiceCard
              icon={<Crown size={28} />}
              title="Dental Prosthetics"
              description="Custom crowns, bridges, and dentures crafted for a perfect fit and natural appearance."
              href="/services#prosthetics"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureSplit
        image={images.features}
        eyebrow="Why Choose Us"
        title="Achieve a Confident Smile With Us"
        description="We are committed to providing exceptional dental care using the latest technology and techniques."
        checklist={[
          "Experienced team with 10+ years of practice",
          "Advanced technology and modern equipment",
          "Wide range of dental services under one roof",
          "Personalized care plans for every patient",
        ]}
        cta={{ label: "Learn More", href: "/about" }}
      />

      {/* Professional Team */}
      <section className="py-12 md:py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet Our Expert Dentists"
            description="Our team of skilled professionals is dedicated to providing you with the highest quality dental care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-[800px] mx-auto">
            <TeamCard
              name="Dr. Ana Petrović"
              role="Founder & Lead Dentist"
              image={images.team.ana}
            />
            <TeamCard
              name="Dr. Jovana Ilić"
              role="General & Restorative Dentist"
              image={images.team.jovana}
            />
            <TeamCard
              name="Dr. Dragan Savić"
              role="Oral Surgeon"
              image={images.team.dragan}
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <DifferentiatorsSection
        title="What Makes Us Different From Others"
        items={[
          {
            number: "01",
            title: "Patient-Centered Approach",
            description:
              "Every treatment plan is customized to your unique needs, ensuring comfort and the best possible outcomes.",
          },
          {
            number: "02",
            title: "State-of-the-Art Technology",
            description:
              "We invest in the latest dental equipment and techniques to deliver precise, efficient, and pain-free treatments.",
          },
          {
            number: "03",
            title: "Transparent & Affordable Pricing",
            description:
              "No hidden fees — we believe everyone deserves access to quality dental care at fair, competitive prices.",
          },
        ]}
        image={images.differentiators}
      />

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Patients Say"
            description="Hear from the people who trust us with their smiles."
          />
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            <TestimonialCard
              quote="The team at Smile Bright made me feel so comfortable. My teeth whitening results are amazing — I can't stop smiling!"
              authorName="Marija S."
              authorRole="Patient"
              authorImage={images.testimonials.patient1}
              rating={5}
            />
            <TestimonialCard
              quote="Dr. Savić performed my implant surgery flawlessly. Professional, painless, and the results speak for themselves."
              authorName="Nikola D."
              authorRole="Patient"
              authorImage={images.testimonials.patient2}
              rating={5}
            />
            <TestimonialCard
              quote="I've been coming here for years with my whole family. The staff is wonderful and the clinic is always spotless."
              authorName="Jelena M."
              authorRole="Patient"
              authorImage={images.testimonials.patient3}
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Premium Dental Treatment at Affordable Prices"
        description="Schedule your appointment today and take the first step toward a healthier, brighter smile."
        primaryCta={{ label: "Book Appointment", href: "#contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Us"
            description="Ready to schedule your visit? Reach out to us today."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[900px] mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <MapPin size={24} />
              </div>
              <h3 className="font-body text-base font-semibold text-neutral-900">Address</h3>
              <p className="font-body text-sm text-neutral-600">
                Across from the Health Center, Ni&scaron;, Serbia
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <Phone size={24} />
              </div>
              <h3 className="font-body text-base font-semibold text-neutral-900">Phone</h3>
              <a href="tel:+381181234567" className="font-body text-sm text-primary-500 hover:text-primary-600 transition-colors">
                +381 18 123 4567
              </a>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <Mail size={24} />
              </div>
              <h3 className="font-body text-base font-semibold text-neutral-900">Email</h3>
              <a href="mailto:info@smilebright.rs" className="font-body text-sm text-primary-500 hover:text-primary-600 transition-colors">
                info@smilebright.rs
              </a>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <Clock size={24} />
              </div>
              <h3 className="font-body text-base font-semibold text-neutral-900">Hours</h3>
              <div className="font-body text-sm text-neutral-600">
                <p>Mon-Fri: 8AM - 5PM</p>
                <p>Sat: 8AM - 3PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
