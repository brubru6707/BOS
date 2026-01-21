"use client";

import { useState } from "react";
import { Calendar, Users, Target, Mail, User, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Weekly Meetings",
    description: "Regular sessions covering chip design topics, project updates, and skill development"
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Get guidance from experienced members and faculty advisors"
  },
  {
    icon: Target,
    title: "Team Projects",
    description: "Collaborate on real chip design projects from concept to tapeout"
  }
];

const upcomingGoals = [
  {
    title: "IEEE Code-a-Chip 2026",
    description: "Form and train a competitive team for the prestigious chip design competition",
    status: "Recruiting"
  },
  {
    title: "SSCS Distinguished Speakers",
    description: "Host industry leaders and researchers for talks and workshops",
    status: "Planning"
  },
  {
    title: "BOS Hackathon",
    description: "Organize a chip design hackathon for students across the university",
    status: "Upcoming"
  }
];

export default function JoinPage() {
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
    alert("Thank you for your interest! We'll be in touch soon.");
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
            Join <span className="text-brown-red text-shadow-glow">BOS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Become part of Brown's open-source chip design community
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-black">
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
      </section>

      {/* Upcoming Goals */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-brown-red/5">
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
      </section>

      {/* Registration Form */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Register Your Interest
            </h2>
            <p className="text-white/70">
              Fill out the form below and we'll get in touch with you about joining BOS
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-white/10 rounded-xl p-8 bg-black/50 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <User size={18} className="text-brown-red" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <Mail size={18} className="text-brown-red" />
                  <span>Email Address *</span>
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
                  <span>Year *</span>
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                >
                  <option value="" className="bg-black">Select your year</option>
                  <option value="freshman" className="bg-black">Freshman</option>
                  <option value="sophomore" className="bg-black">Sophomore</option>
                  <option value="junior" className="bg-black">Junior</option>
                  <option value="senior" className="bg-black">Senior</option>
                  <option value="graduate" className="bg-black">Graduate Student</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label htmlFor="interests" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <Target size={18} className="text-brown-red" />
                  <span>Areas of Interest</span>
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all"
                  placeholder="e.g., VLSI, AI for chip design, analog circuits"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center space-x-2 text-white font-semibold mb-2">
                  <MessageSquare size={18} className="text-brown-red" />
                  <span>Tell us about yourself</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-brown-red focus:outline-none focus:ring-2 focus:ring-brown-red/50 transition-all resize-none"
                  placeholder="Why are you interested in BOS? Any prior experience with chip design?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all border-glow"
              >
                Submit Registration
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
