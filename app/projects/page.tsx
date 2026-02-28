"use client";

import { useState } from "react";
import Image from "next/image";
import { Cpu, Brain, Zap, Trophy, Boxes, Sparkles, Calendar, Users, Target, Mail, User, MessageSquare } from "lucide-react";

// Image loading wrapper component
const ImageWithLoader = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/20 border-t-brown-red rounded-full animate-spin" />
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const entryLevelProjects = [
  {
    title: "risc-v soc",
    category: "digital design",
    description: "working with an ibex demo system featuring a complete soc architecture with essential components.",
    image: "/images/RISC-V_SoC.png",
    tech: ["risc-v", "verilog", "digital design"],
    status: "active",
    highlights: [
      "ram and gpio integration",
      "uart and spi interfaces",
      "debug module with jtag support"
    ]
  },
  {
    title: "systolic array",
    category: "digital design",
    description: "edge transformer and accelerator architectures with software/hardware co-design.",
    image: "/images/systolic_array.png",
    tech: ["hardware acceleration", "co-design", "ml"],
    status: "active",
    highlights: [
      "embedding vector processing",
      "multi-layer architecture",
      "attention head optimization"
    ]
  },
  {
    title: "design space exploration",
    category: "digital design",
    description: "finding optimal software/hardware designs by mapping transformer design space with ppa analysis.",
    image: "/images/design_space_exploration.png",
    tech: ["ppa analysis", "optimization", "architecture"],
    status: "active",
    highlights: [
      "power-performance-area analysis",
      "hardware-efficient design mapping",
      "energy vs token delay balance"
    ]
  },
  {
    title: "pll (phase-locked loop)",
    category: "custom design",
    description: "frequency multiplier taking 240mhz input and generating 2.4ghz output signal.",
    image: "/images/PLL(Phased-locked_Loop).png",
    tech: ["analog design", "rf", "clock generation"],
    status: "active",
    highlights: [
      "dac and pfd components",
      "vco & output buffer",
      "10x frequency multiplication"
    ]
  }
];

const advancedProjects = [
  {
    title: "5ghz trx",
    category: "rf design",
    description: "advanced rf transceiver with stacked class-e power amplifier and integrated dual-issue risc-v processor.",
    image: "/images/5GHz_TRX.png",
    tech: ["rf design", "power amplifier", "risc-v"],
    status: "active",
    highlights: [
      "stacked class-e pa architecture",
      "5ghz operating frequency",
      "dual-issue risc-v integration"
    ]
  }
];

const competitions = [
  {
    name: "ieee code-a-chip travel grants",
    years: "2021-2025",
    description: "competitive travel grants for chip design projects",
    status: "ongoing"
  },
  {
    name: "chipathons",
    years: "2021-2025",
    description: "intensive chip design competitions and hackathons",
    status: "ongoing"
  },
  {
    name: "blocks & bots chipathon",
    years: "2025",
    description: "specialized chipathon focusing on robotics and chip integration",
    status: "upcoming",
    highlight: true
  }
];

const benefits = [
  {
    icon: Calendar,
    title: "weekly meetings",
    description: "regular sessions covering chip design topics, project updates, and skill development"
  },
  {
    icon: Users,
    title: "mentoring",
    description: "get guidance from experienced members and faculty advisors"
  },
  {
    icon: Target,
    title: "team projects",
    description: "collaborate on real chip design projects from concept to tapeout"
  }
];

const upcomingGoals = [
  {
    title: "ieee code-a-chip 2026",
    description: "form and train a competitive team for the prestigious chip design competition",
    status: "recruiting"
  },
  {
    title: "sscs distinguished speakers",
    description: "host industry leaders and researchers for talks and workshops",
    status: "planning"
  },
  {
    title: "bos hackathon",
    description: "organize a chip design hackathon for students across the university",
    status: "upcoming"
  }
];

export default function ProjectsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    interests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("thank you for your interest! we'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            projects & <span className="text-brown-red">join us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            explore our cutting-edge research and become part of brown's open-source chip design community
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">current projects</h2>
            <p className="text-white/70">real technical projects pushing the boundaries of chip design</p>
          </div>

          {/* Entry-Level Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brown-red mb-6">entry-level projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {entryLevelProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="border border-white/10 rounded-xl overflow-hidden hover:border-brown-red/50 transition-all bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-black/50">
                    <ImageWithLoader
                      src={project.image}
                      alt={project.title}
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-brown-red transition-colors">
                          {project.title}
                        </h4>
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white/70 text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-brown-red flex-shrink-0" />
                          <span className="text-white/80">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-black/40 border border-white/10 rounded text-white/60 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Projects */}
          <div>
            <h3 className="text-2xl font-bold text-brown-red mb-6">advanced projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="border-2 border-brown-red/50 rounded-xl overflow-hidden hover:border-brown-red transition-all bg-gradient-to-br from-brown-red/10 to-transparent backdrop-blur-sm group"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-black/50">
                    <ImageWithLoader
                      src={project.image}
                      alt={project.title}
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-brown-red transition-colors">
                          {project.title}
                        </h4>
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 bg-brown-red/30 border border-brown-red rounded text-brown-red text-xs font-semibold">
                          {project.category}
                        </span>
                        <span className="px-2 py-0.5 bg-brown-red rounded text-white text-xs font-bold">
                          advanced
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-brown-red flex-shrink-0" />
                          <span className="text-white/80">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-black/40 border border-white/10 rounded text-white/60 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      {/* <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-brown-red/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Trophy className="text-brown-red" size={36} />
              <h2 className="text-4xl font-bold text-white">Competitions & Events</h2>
            </div>
            <p className="text-white/70">Participating in prestigious chip design competitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions.map((comp, index) => (
              <div 
                key={comp.name}
                className={`
                  border rounded-xl p-6 transition-all backdrop-blur-sm
                  ${comp.highlight 
                    ? 'border-brown-red bg-brown-red/10 border-glow' 
                    : 'border-white/10 bg-white/5 hover:border-white/30'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-bold ${comp.highlight ? 'text-brown-red' : 'text-white'}`}>
                    {comp.name}
                  </h3>
                  {comp.highlight && (
                    <Sparkles className="text-brown-red" size={20} />
                  )}
                </div>
                
                <div className="text-white/50 text-sm mb-2">{comp.years}</div>
                
                <p className="text-white/70 text-sm mb-4">
                  {comp.description}
                </p>
                
                <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                  comp.status === "Upcoming" 
                    ? "bg-brown-red/20 text-brown-red border border-brown-red/30" 
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                }`}>
                  {comp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* IEEE Code-a-Chip 2026 */}
      {/* <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-brown-red rounded-2xl p-8 md:p-12 bg-gradient-to-br from-brown-red/10 to-transparent backdrop-blur-sm border-glow">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-brown-red rounded-full text-white text-sm font-bold mb-4">
                UPCOMING GOAL
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IEEE Code-a-Chip 2026
              </h2>
              <p className="text-lg text-white/80 mb-8">
                We're forming a team to compete in IEEE Code-a-Chip 2026, one of the most prestigious 
                chip design competitions in the world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <div className="text-brown-red font-bold text-2xl mb-1">2026</div>
                  <div className="text-white/70 text-sm">Competition Year</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <div className="text-brown-red font-bold text-2xl mb-1">Team</div>
                  <div className="text-white/70 text-sm">Collaborative Effort</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <div className="text-brown-red font-bold text-2xl mb-1">Global</div>
                  <div className="text-white/70 text-sm">Worldwide Recognition</div>
                </div>
              </div>

              <a
                href="#register"
                className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Join BOS */}
      {/* <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Join BOS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="border border-white/10 rounded-xl p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-brown-red to-red-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* What We're Working On */}
      {/* <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-brown-red/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            What We're Working On
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Join us as we pursue ambitious goals in chip design and education
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingGoals.map((goal, index) => (
              <div 
                key={goal.title}
                className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-brown-red/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">
                    {goal.title}
                  </h3>
                  <span className="px-2 py-1 bg-brown-red/20 border border-brown-red/30 rounded text-brown-red text-xs font-semibold">
                    {goal.status}
                  </span>
                </div>
                <p className="text-white/70 text-sm">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Registration Form */}
      <section id="register" className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              register your interest
            </h2>
            <p className="text-white/70">
              fill out the form below and we'll get in touch with you about joining bos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-white/10 rounded-xl p-8 bg-black/50 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <User size={18} className="text-brown-red" />
                  <span>full name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                  placeholder="john doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <Mail size={18} className="text-brown-red" />
                  <span>email address *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                  placeholder="john.doe@brown.edu"
                />
              </div>

              {/* Year */}
              <div>
                <label htmlFor="year" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <Calendar size={18} className="text-brown-red" />
                  <span>year *</span>
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                >
                  <option value="" className="bg-black">select your year</option>
                  <option value="freshman" className="bg-black">freshman</option>
                  <option value="sophomore" className="bg-black">sophomore</option>
                  <option value="junior" className="bg-black">junior</option>
                  <option value="senior" className="bg-black">senior</option>
                  <option value="graduate" className="bg-black">graduate student</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label htmlFor="interests" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <Target size={18} className="text-brown-red" />
                  <span>areas of interest</span>
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                  placeholder="e.g., vlsi, ai for chip design, analog circuits"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <MessageSquare size={18} className="text-brown-red" />
                  <span>tell us about yourself</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all resize-none"
                  placeholder="why are you interested in bos? any prior experience with chip design?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
              >
                submit registration
              </button>
            </div>
          </form>

          {/* Contact Info */}
          {/* <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">
              Or reach out directly:
            </p>
            <a 
              href="mailto:contact@brownopenchip.org"
              className="inline-flex items-center space-x-2 text-brown-red hover:text-brown-red/80 transition-colors font-semibold"
            >
              <Mail size={20} />
              <span>contact@brownopenchip.org</span>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
