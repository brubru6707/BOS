"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LookToggle from "@/components/LookToggle";

const navLinks = [
  { href: "/classic", label: "home" },
  { href: "/classic/bloc", label: "bloc" },
  { href: "/classic/team", label: "team" },
  // { href: "/education", label: "Education" },
  { href: "/classic/projects", label: "projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/classic" className="flex items-center space-x-2">
            {/* <div className="text-brown-red font-bold text-xl">bos</div> */}
            <div className="hidden sm:block text-xs text-white/70">
              brown <span className="text-brown-red text-shadow-glow">open</span>  silicon
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded transition-colors ${
                  pathname === link.href
                    ? "bg-brown-red text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LookToggle
              className="ml-3 flex rounded border border-white/30 text-sm"
              activeClassName="rounded bg-brown-red px-3 py-2 text-white"
              inactiveClassName="px-3 py-2 text-white/70 hover:text-white transition-colors"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  pathname === link.href
                    ? "bg-brown-red text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <LookToggle
              className="flex w-fit rounded border border-white/30 text-sm"
              activeClassName="rounded bg-brown-red px-3 py-2 text-white"
              inactiveClassName="px-3 py-2 text-white/70"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
