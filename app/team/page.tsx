
import Image from "next/image";
import { Award, GraduationCap, User } from "lucide-react";

const teamMembers = [
  {
    name: "Mehdi Saligane",
    role: "Faculty Advisor",
    title: "Assistant Professor in ECE",
    credentials: "IEEE SSCS TC-OSE Chair",
    description: "Leading expert in open-source chip design and VLSI education.",
    type: "faculty",
    image: "/mehdi.png"
  },
  {
    name: "Xinting Jiang",
    role: "Founding Member",
    title: "1st Year PhD Student",
    credentials: "Research Focus: AI for Chip Design",
    description: "Pioneering machine learning applications in VLSI layout automation.",
    type: "student",
    image: "/xinting.png"
  },
  {
    name: "Wilson Vo",
    role: "Founding Member",
    title: "4th Year Undergraduate",
    credentials: "Focus: Open-Source VLSI Tools",
    description: "Leading student initiatives in open chip design and community building.",
    type: "student",
    image: "/wilson.png"
  }
];

export default function TeamPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meet Our <span className="text-brown-red text-shadow-glow">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Student-run, faculty-mentored. Building the future of open silicon together.
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* Team Structure Banner */}
      <section className="py-12 bg-brown-red/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-brown-red" size={32} />
              <div className="text-left">
                <div className="text-white font-bold text-lg">Student-Run</div>
                <div className="text-white/60 text-sm">By students, for students</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center space-x-3">
              <Award className="text-brown-red" size={32} />
              <div className="text-left">
                <div className="text-white font-bold text-lg">Faculty-Mentored</div>
                <div className="text-white/60 text-sm">Expert guidance and support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Advisor */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="text-brown-red mr-3" size={32} />
              Faculty Advisor
            </h2>
            
            <div className="border-2 border-brown-red rounded-xl p-8 bg-gradient-to-br from-brown-red/10 to-transparent backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-brown-red to-red-800 rounded-xl flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 overflow-hidden">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    width={128}
                    height={128}
                    className="object-cover w-32 h-32 rounded-xl"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {teamMembers[0].name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-brown-red/20 border border-brown-red rounded-full text-brown-red text-sm font-semibold">
                      {teamMembers[0].title}
                    </span>
                    <span className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-white/80 text-sm">
                      {teamMembers[0].credentials}
                    </span>
                  </div>
                  <p className="text-white/70 text-lg">
                    {teamMembers[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founding Members */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <User className="text-brown-red mr-3" size={32} />
              Founding Members
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.slice(1).map((member, index) => (
                <div 
                  key={member.name}
                  className="border border-white/10 rounded-xl p-6 hover:border-brown-red/50 transition-all bg-white/5 backdrop-blur-sm group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-brown-red/70 to-brown-red/40 rounded-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover w-20 h-20 rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-brown-red text-sm font-semibold mb-2">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="px-3 py-2 bg-black/30 rounded-lg border border-white/5">
                      <p className="text-white/90 text-sm">{member.title}</p>
                    </div>
                    <div className="px-3 py-2 bg-black/30 rounded-lg border border-white/5">
                      <p className="text-white/70 text-sm">{member.credentials}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 grid-bg border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            We're always looking for passionate students interested in chip design and open-source hardware.
          </p>
          <a
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-brown-red hover:bg-brown-red/90 text-white font-semibold rounded-lg transition-all border-glow"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
