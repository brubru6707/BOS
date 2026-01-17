import { Hammer, BookOpen, Unlock, Network } from "lucide-react";

const blocData = [
  {
    title: "BUILD",
    icon: Hammer,
    color: "from-brown-red to-red-600",
    items: [
      "Tapeout design",
      "Reproducible VLSI workflows"
    ],
    description: "Focus on practical chip design and manufacturing-ready solutions"
  },
  {
    title: "LEARN",
    icon: BookOpen,
    color: "from-blue-600 to-blue-400",
    items: [
      "VLSI and Chip Design",
      "Project Management Skills"
    ],
    description: "Master both technical and collaborative skills"
  },
  {
    title: "OPEN",
    icon: Unlock,
    color: "from-green-600 to-green-400",
    items: [
      "Open Source Tools for Chip Design",
      "Open to all students"
    ],
    description: "Democratizing chip design through open-source innovation"
  },
  {
    title: "CONNECT",
    icon: Network,
    color: "from-purple-600 to-purple-400",
    items: [
      "Industry Leaders",
      "Leading Researchers"
    ],
    description: "Build relationships with pioneers in the field"
  }
];

export default function BlocPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-bg border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The <span className="text-brown-red text-shadow-glow">BLOC</span> Framework
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Our guiding principles: <span className="text-brown-red font-semibold">Build, Learn, Open, Connect</span>
          </p>
          <div className="w-24 h-1 bg-brown-red mx-auto mt-8" />
        </div>
      </section>

      {/* BLOC Grid - Bento Box Layout */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Grid - 2x2 Bento */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {blocData.map((bloc, index) => {
              const Icon = bloc.icon;
              return (
                <div
                  key={bloc.title}
                  className={`
                    border border-white/10 rounded-xl p-8 
                    hover:border-brown-red/50 transition-all duration-300
                    bg-gradient-to-br ${bloc.color} bg-opacity-5
                    backdrop-blur-sm group
                    ${index === 0 ? 'md:row-span-1' : ''}
                  `}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${bloc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {bloc.title}
                      </h2>
                      <p className="text-white/60 text-sm">
                        {bloc.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    {bloc.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-3 bg-black/30 rounded-lg p-3 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-brown-red mt-2 flex-shrink-0" />
                        <p className="text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Stack */}
          <div className="md:hidden space-y-6">
            {blocData.map((bloc) => {
              const Icon = bloc.icon;
              return (
                <div
                  key={bloc.title}
                  className={`
                    border border-white/10 rounded-xl p-6 
                    bg-gradient-to-br ${bloc.color} bg-opacity-5
                    backdrop-blur-sm
                  `}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${bloc.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {bloc.title}
                      </h2>
                      <p className="text-white/60 text-sm">
                        {bloc.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {bloc.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-3 bg-black/30 rounded-lg p-3 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-brown-red mt-1.5 flex-shrink-0" />
                        <p className="text-white/90 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Framework Overview
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-brown-red">
                  <th className="text-left py-4 px-6 text-white font-bold">Pillar</th>
                  <th className="text-left py-4 px-6 text-white font-bold">Focus Areas</th>
                  <th className="text-left py-4 px-6 text-white font-bold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {blocData.map((bloc, index) => (
                  <tr 
                    key={bloc.title}
                    className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                      index % 2 === 0 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${bloc.color} flex items-center justify-center`}>
                          {(() => {
                            const Icon = bloc.icon;
                            return <Icon className="text-white" size={20} />;
                          })()}
                        </div>
                        <span className="text-white font-semibold">{bloc.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <ul className="space-y-1">
                        {bloc.items.map((item, idx) => (
                          <li key={idx} className="text-white/70 text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-6 text-white/70 text-sm">
                      {bloc.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
