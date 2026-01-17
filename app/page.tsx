import Link from "next/link";
import { ArrowRight, Cpu, Code, Users } from "lucide-react";
import SceneClient from "../components/SceneClient";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Brown Open <span className="text-brown-red text-shadow-glow">Silicon</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80">
                Designing open chips, together.
              </p>
              <p className="text-lg text-white/60 max-w-xl">
                The process of specifying, modeling, and creating the architecture and physical layout of an integrated circuit (IC) using open-source tools.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center px-6 py-3 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded transition-all border-glow"
                >
                  Join Us <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-brown-red text-white font-semibold rounded transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* 3D Model */}
            <div className="relative">
              <div className="absolute inset-0 bg-brown-red/10 blur-3xl rounded-full" />
              <SceneClient />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-brown-red mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Open Source Tools</h3>
              <p className="text-white/70">
                Leveraging cutting-edge open-source tools for chip design, making VLSI accessible to all students.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hands-On Learning</h3>
              <p className="text-white/70">
                From tapeout design to reproducible VLSI workflows, we provide practical experience in chip design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
              <p className="text-white/70">
                Connecting students with industry leaders and researchers to build the future of silicon design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Design the Future?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join Brown Open Silicon and be part of the open-source chip design revolution.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all border-glow text-lg"
          >
            Get Started <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
