"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { SparkleIcon } from "./SparkleIcon";
import { Button } from "./Button";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[200] bg-white/80 backdrop-blur-xl border-b border-neutral-200/60 transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-6 lg:px-8 h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <SparkleIcon size={28} className="text-primary-500" />
          <span className="font-display text-xl font-bold text-neutral-900">
            Smile Bright
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-medium transition-colors duration-[120ms]",
                pathname === link.href
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-600 hover:text-primary-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#contact" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200/60 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-base font-medium py-2 transition-colors",
                  pathname === link.href
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-600 hover:text-primary-500"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" size="md" fullWidth className="mt-2">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
