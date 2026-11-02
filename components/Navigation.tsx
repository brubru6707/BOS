"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LookToggle from "@/components/LookToggle";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/bloc", label: "bloc" },
  { href: "/team", label: "team" },
  // { href: "/education", label: "Education" },
  { href: "/projects", label: "projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/95 border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-semibold text-ink">Brown Open Silicon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 text-[15px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 underline-offset-8 decoration-2 transition-colors ${
                  pathname === link.href
                    ? "text-ink underline decoration-brown-red"
                    : "text-ink/70 hover:text-brown-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LookToggle className="ml-3 border border-ink px-3 py-1.5 text-ink hover:border-brown-red hover:text-brown-red transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ink p-2"
            aria-label={mobileMenuOpen ? "close menu" : "open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 text-[15px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 transition-colors ${
                  pathname === link.href
                    ? "text-brown-red"
                    : "text-ink/70 hover:text-ink"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <LookToggle className="block mx-3 mt-2 w-fit border border-ink px-3 py-1.5 text-ink" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}
