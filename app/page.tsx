import Link from "next/link";
import { ArrowRight, Cpu, Code, Users, BookOpen } from "lucide-react";
import SceneClient from "../components/SceneClient";

const curriculum = [
  {
    level: "physical level",
    color: "from-red-600 to-red-400",
    courses: [
      {
        code: "engn 0510",
        name: "electromagnetism",
        description: "foundation in electromagnetic theory"
      }
    ]
  },
  {
    level: "device level",
    color: "from-orange-600 to-orange-400",
    courses: [
      {
        code: "engn 0520",
        name: "circuits & signals",
        description: "basic circuit analysis and signal processing"
      }
    ]
  },
  {
    level: "circuit level",
    color: "from-yellow-600 to-yellow-400",
    courses: [
      {
        code: "engn 1570",
        name: "linear systems",
        description: "linear system analysis and design"
      },
      {
        code: "engn 1620",
        name: "analog electronics",
        description: "analog circuit design fundamentals"
      }
    ]
  },
  {
    level: "logic level",
    color: "from-green-600 to-green-400",
    courses: [
      {
        code: "engn 1630",
        name: "digital electronics",
        description: "digital logic and circuit design"
      }
    ]
  },
  {
    level: "system level",
    color: "from-blue-600 to-blue-400",
    courses: [
      {
        code: "engn 1650",
        name: "embedded systems",
        description: "microcontroller programming and hardware integration"
      },
      {
        code: "engn 2912e",
        name: "low power vlsi",
        description: "includes tapeout project - design to fabrication",
        highlight: true
      },
      {
        code: "engn 2912k",
        name: "mixed-signal",
        description: "analog and digital circuit integration"
      }
    ]
  },
  {
    level: "architecture level",
    color: "from-purple-600 to-purple-400",
    courses: [
      {
        code: "engn 1640",
        name: "computer architecture",
        description: "cpu design and computer organization"
      }
    ]
  }
];

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
                brown <span className="text-brown-red">open</span> silicon
              </h1>
              <p className="text-xl md:text-2xl text-white/80">
                designing open chips, together.
              </p>
              <p className="text-lg text-white/60 max-w-xl">
                the process of specifying, modeling, and creating the architecture and physical layout of an integrated circuit (ic) using open-source tools.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded transition-all"
                >
                  join us <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-brown-red text-white font-semibold rounded transition-all"
                >
                  view projects
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
              our mission
            </h2>
            <div className="w-24 h-1 bg-brown-red mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">open source tools</h3>
              <p className="text-white/70">
                leveraging cutting-edge open-source tools for chip design, making vlsi accessible to all students.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">hands-on learning</h3>
              <p className="text-white/70">
                from tapeout design to reproducible vlsi workflows, we provide practical experience in chip design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brown-red/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-brown-red" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">community driven</h3>
              <p className="text-white/70">
                connecting students with industry leaders and researchers to build the future of silicon design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section Divider */}
      <section className="py-12 bg-brown-red/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="text-brown-red" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              curriculum & <span className="text-brown-red">education</span>
            </h2>
          </div>
          <p className="text-xl text-white/70">
            from fundamental physics to complete system architecture, this curriculum guides you through 
            the layers of chip design education at brown.
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-6" />
        </div>
      </section>

      {/* Curriculum Roadmap */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {curriculum.map((level, levelIndex) => (
              <div key={level.level} className="relative">
                {/* Connection Line */}
                {levelIndex < curriculum.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-brown-red to-transparent z-0 hidden md:block" />
                )}
                
                <div className="relative z-10">
                  {/* Level Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                      {levelIndex + 1}
                    </div>
                    <div>
                      <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                        {level.level}
                      </h2>
                      <div className="text-white/50 text-sm">
                        {level.courses.length} {level.courses.length === 1 ? 'course' : 'courses'}
                      </div>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="ml-0 md:ml-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {level.courses.map((course) => (
                      <div 
                        key={course.code}
                        className={`
                          border rounded-lg p-5 transition-all
                          ${course.highlight 
                            ? 'border-brown-red bg-brown-red/10' 
                            : 'border-white/10 bg-white/5 hover:border-white/30'
                          }
                          backdrop-blur-sm group
                        `}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className={`text-sm font-bold mb-1 ${
                              course.highlight ? 'text-brown-red' : 'text-white/50'
                            }`}>
                              {course.code}
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-brown-red transition-colors">
                              {course.name}
                            </h3>
                          </div>
                          {course.highlight && (
                            <span className="px-2 py-1 bg-brown-red rounded text-white text-xs font-bold">
                              tapeout
                            </span>
                          )}
                        </div>
                        <p className="text-white/70 text-sm">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-brown-red/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            key highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">7</div>
              <div className="text-white font-semibold mb-2">abstraction levels</div>
              <div className="text-white/70 text-sm">
                from physical electromagnetics to system architecture
              </div>
            </div>
            
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">10+</div>
              <div className="text-white font-semibold mb-2">ece courses</div>
              <div className="text-white/70 text-sm">
                comprehensive pathway through chip design
              </div>
            </div>
            
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">1</div>
              <div className="text-white font-semibold mb-2">tapeout course</div>
              <div className="text-white/70 text-sm">
                engn 2912e - real chip fabrication experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ready to start your journey?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            join bos to get guidance on course selection and hands-on project experience in chip design.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all text-lg"
          >
            get started <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
