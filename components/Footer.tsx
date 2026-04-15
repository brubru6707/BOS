import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-brown-red font-bold text-lg mb-4">
              brown open silicon
            </h3>
            <p className="text-white/70 text-sm">
              a student-run club at brown university dedicated to open-source chip design and vlsi education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bloc" className="text-white/70 hover:text-brown-red transition-colors">
                  bloc framework
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-brown-red transition-colors">
                  our team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-brown-red transition-colors">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-brown-red transition-colors">
                  join us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:wilson_vo@brown.edu"
                className="text-white/70 hover:text-brown-red transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/brubru6707/BOS"
                className="text-white/70 hover:text-brown-red transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} brown open silicon. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
