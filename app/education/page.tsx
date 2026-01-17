import { BookOpen, ArrowRight } from "lucide-react";

const curriculum = [
  {
    level: "Physical Level",
    color: "from-red-600 to-red-400",
    courses: [
      {
        code: "ENGN 0510",
        name: "Electromagnetism",
        description: "Foundation in electromagnetic theory"
      }
    ]
  },
  {
    level: "Device Level",
    color: "from-orange-600 to-orange-400",
    courses: [
      {
        code: "ENGN 0520",
        name: "Circuits & Signals",
        description: "Basic circuit analysis and signal processing"
      }
    ]
  },
  {
    level: "Circuit Level",
    color: "from-yellow-600 to-yellow-400",
    courses: [
      {
        code: "ENGN 1570",
        name: "Linear Systems",
        description: "Linear system analysis and design"
      },
      {
        code: "ENGN 1620",
        name: "Analog Electronics",
        description: "Analog circuit design fundamentals"
      }
    ]
  },
  {
    level: "Logic Level",
    color: "from-green-600 to-green-400",
    courses: [
      {
        code: "ENGN 1630",
        name: "Digital Electronics",
        description: "Digital logic and circuit design"
      }
    ]
  },
  {
    level: "System Level",
    color: "from-blue-600 to-blue-400",
    courses: [
      {
        code: "ENGN 1650",
        name: "Embedded Systems",
        description: "Microcontroller programming and hardware integration"
      },
      {
        code: "ENGN 2912E",
        name: "Low Power VLSI",
        description: "Includes tapeout project - design to fabrication",
        highlight: true
      },
      {
        code: "ENGN 2912K",
        name: "Mixed-Signal",
        description: "Analog and digital circuit integration"
      }
    ]
  },
  {
    level: "Architecture Level",
    color: "from-purple-600 to-purple-400",
    courses: [
      {
        code: "ENGN 1640",
        name: "Computer Architecture",
        description: "CPU design and computer organization"
      }
    ]
  }
];

export default function EducationPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Curriculum & <span className="text-brown-red text-shadow-glow">Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Navigate your path through ECE at Brown University
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-brown-red/5 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="text-brown-red" size={32} />
            <h2 className="text-2xl font-bold text-white">Your Roadmap to Chip Design</h2>
          </div>
          <p className="text-white/70">
            From fundamental physics to complete system architecture, this curriculum guides you through 
            the layers of chip design education at Brown.
          </p>
        </div>
      </section>

      {/* Curriculum Roadmap */}
      <section className="py-20 bg-black">
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
                        {level.courses.length} {level.courses.length === 1 ? 'Course' : 'Courses'}
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
                            ? 'border-brown-red bg-brown-red/10 border-glow' 
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
                              TAPEOUT
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
            Key Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">7</div>
              <div className="text-white font-semibold mb-2">Abstraction Levels</div>
              <div className="text-white/70 text-sm">
                From physical electromagnetics to system architecture
              </div>
            </div>
            
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">10+</div>
              <div className="text-white font-semibold mb-2">ECE Courses</div>
              <div className="text-white/70 text-sm">
                Comprehensive pathway through chip design
              </div>
            </div>
            
            <div className="border border-brown-red/50 rounded-xl p-6 bg-brown-red/5 backdrop-blur-sm">
              <div className="text-brown-red font-bold text-3xl mb-2">1</div>
              <div className="text-white font-semibold mb-2">Tapeout Course</div>
              <div className="text-white/70 text-sm">
                ENGN 2912E - Real chip fabrication experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join BOS to get guidance on course selection and hands-on project experience.
          </p>
          <a
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all border-glow"
          >
            Join Us <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
