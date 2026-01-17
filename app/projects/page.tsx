import { Cpu, Brain, Zap, Trophy, Boxes, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI for Chip Design",
    icon: Brain,
    description: "Using Large Language Models (LLMs) for automated layout generation and optimization.",
    tech: ["Python", "Machine Learning", "gLayout"],
    status: "Active",
    category: "Research",
    highlights: [
      "Automated layout generation",
      "LLM-powered design optimization",
      "Next-gen EDA tools"
    ]
  },
  {
    title: "OpenFASOC",
    icon: Zap,
    description: "Fully Open-Source Autonomous SoC Synthesis - generating synthesizable analog circuits.",
    tech: ["Verilog", "Python", "Open-Source EDA"],
    status: "Active",
    category: "Development",
    highlights: [
      "Automated analog design",
      "Open-source synthesis",
      "Temperature sensors, ADCs"
    ]
  },
  {
    title: "MOSbius",
    icon: Cpu,
    description: "A playground for transistor-level experimentation - chips capable of being used on a breadboard.",
    tech: ["VLSI", "Hardware", "Educational"],
    status: "Active",
    category: "Hardware",
    highlights: [
      "Breadboard-compatible chips",
      "Transistor-level learning",
      "Hands-on experimentation"
    ]
  },
  {
    title: "BlockTransmute",
    icon: Boxes,
    description: "Innovative project bridging Minecraft worlds with 3D chip visualization and design.",
    tech: ["3D Visualization", "Minecraft", "VLSI"],
    status: "In Development",
    category: "Innovation",
    highlights: [
      "Minecraft integration",
      "3D chip visualization",
      "Educational gaming"
    ]
  }
];

const competitions = [
  {
    name: "IEEE Code-a-Chip Travel Grants",
    years: "2021-2025",
    description: "Competitive travel grants for chip design projects",
    status: "Ongoing"
  },
  {
    name: "Chipathons",
    years: "2021-2025",
    description: "Intensive chip design competitions and hackathons",
    status: "Ongoing"
  },
  {
    name: "Blocks & Bots Chipathon",
    years: "2025",
    description: "Specialized chipathon focusing on robotics and chip integration",
    status: "Upcoming",
    highlight: true
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Projects & <span className="text-brown-red text-shadow-glow">Research</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Cutting-edge research and hands-on projects in open-source chip design
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Current Projects</h2>
            <p className="text-white/70">Real technical projects pushing the boundaries of chip design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.title}
                  className="border border-white/10 rounded-xl p-6 hover:border-brown-red/50 transition-all bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-brown-red to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brown-red transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            project.status === "Active" 
                              ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}>
                            {project.status}
                          </span>
                          <span className="px-2 py-0.5 bg-white/10 border border-white/20 rounded text-white/70 text-xs font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-4">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-brown-red/5">
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
      </section>

      {/* IEEE Code-a-Chip 2026 */}
      <section className="py-20 grid-bg border-t border-white/10">
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
                href="/join"
                className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
