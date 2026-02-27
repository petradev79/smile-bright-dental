import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { SparkleIcon } from "./SparkleIcon";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Teeth Whitening", href: "/services#whitening" },
  { label: "Oral Surgery", href: "/services#surgery" },
  { label: "Dental Implants", href: "/services#implants" },
  { label: "Dental Prosthetics", href: "/services#prosthetics" },
];

const socialLinks = [
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-6 lg:px-8">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <SparkleIcon size={24} className="text-primary-400" />
            <span className="font-display text-lg font-bold text-white">
              Smile Bright
            </span>
          </Link>
          <p className="font-body text-sm text-neutral-400 leading-relaxed">
            Your trusted dental care provider in Ni&scaron;, dedicated to creating beautiful, healthy smiles for the whole family.
          </p>
          <div className="flex gap-3 mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-neutral-400 hover:text-white transition-colors duration-[120ms]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-neutral-400 hover:text-white transition-colors duration-[120ms]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" />
              <span className="font-body text-sm text-neutral-400">
                Across from the Health Center, Ni&scaron;, Serbia
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-primary-400 shrink-0 mt-0.5" />
              <div className="font-body text-sm text-neutral-400">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 8:00 AM - 3:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-400 shrink-0" />
              <a
                href="tel:+381181234567"
                className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
              >
                +381 18 123 4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-400 shrink-0" />
              <a
                href="mailto:info@smilebright.rs"
                className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
              >
                info@smilebright.rs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500 px-4">
        &copy; 2025 Smile Bright Dental. All rights reserved.
      </div>
    </footer>
  );
}
