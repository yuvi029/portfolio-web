import React from 'react';
import {
  Code2,
  Globe,
  Settings2,
  Award,
  Users,
  MessageCircle,
  Clock,
  Handshake
} from 'lucide-react';

const softSkills = [
  {
    name: 'Teamwork',
    icon: <Users className="w-6 h-6 text-white" />,
    bg: 'bg-blue-700',
  },
  {
    name: 'Communication',
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    bg: 'bg-purple-700',
  },
  {
    name: 'Leadership',
    icon: <Award className="w-6 h-6 text-white" />,
    bg: 'bg-green-700',
  },
  {
    name: 'Time Management',
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: 'bg-orange-600',
  },
  {
    name: 'Collaboration',
    icon: <Handshake className="w-6 h-6 text-white" />,
    bg: 'bg-pink-700',
  },
];

const Skills = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a] text-white py-16 px-6 md:px-16 font-sans min-h-screen relative"
      id="skills"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-purple-500 inline-block">
        Skills & Achievements
      </h2>

      {/* Hard Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10 z-10 relative mb-20">

        {/* Programming Languages */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center gap-2">
            <Code2 className="w-5 h-5" /> Programming Languages
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm leading-6">
            <li>C++</li>
            <li>JavaScript (ES6+)</li>
            <li>Python (Basic)</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center gap-2">
            <Globe className="w-5 h-5" /> Web Development
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm leading-6">
            <li>React.js with Vite</li>
            <li>Tailwind CSS</li>
            <li>HTML5, CSS3</li>
            <li>React Router, Hooks</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center gap-2">
            <Settings2 className="w-5 h-5" /> Tools & Platforms
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm leading-6">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Codeforces / LeetCode</li>
            <li>Figma (Basic)</li>
          </ul>
        </div>

        {/* JEE Achievement Card */}
        <div className="bg-gradient-to-br from-purple-800 via-indigo-700 to-purple-900 p-[2px] rounded-xl shadow-xl hover:shadow-yellow-400/20 transition-all transform hover:scale-105 duration-300">
          <div className="bg-[#0f172a] p-6 rounded-[10px] h-full">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" /> JEE Achievements
            </h3>
            <p className="text-gray-200 text-sm leading-6">
              Secured a spot in the <span className="text-yellow-300 font-semibold">Top 1.8%</span> in JEE Mains among
              1 million+ candidates and achieved an <span className="text-yellow-300 font-semibold">All India Rank of 21,000</span> in JEE Advanced — paving the path to <span className="text-blue-300 font-semibold">NIT Jamshedpur</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <h2 className="text-3xl font-bold text-center mb-10">Soft Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#1e1e1e] hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105 rounded-xl p-6 w-full max-w-[160px]"
          >
            <div
              className={`p-4 rounded-full mb-3 ${skill.bg} flex items-center justify-center`}
            >
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
