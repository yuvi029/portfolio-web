import { FaUsers, FaComments, FaBrain, FaClock, FaTableTennis, FaFutbol, FaTv } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';

const softSkills = [
  { icon: <FaUsers size={28} />, name: "Team Work", bg: "bg-pink-600" },
  { icon: <FaComments size={28} />, name: "Communication", bg: "bg-blue-600" },
  { icon: <FaBrain size={28} />, name: "Problem Solving", bg: "bg-green-600" },
  { icon: <FaClock size={28} />, name: "Time Management", bg: "bg-yellow-600" },
];

const hobbies = [
  { icon: <FaTableTennis size={28} />, name: "Badminton", bg: "bg-indigo-600" },
  { icon: <GiCricketBat size={28} />, name: "Cricket", bg: "bg-emerald-600" },
  { icon: <FaFutbol size={28} />, name: "Football", bg: "bg-rose-600" },
  { icon: <FaTv size={28} />, name: "Web Series", bg: "bg-purple-600" },
];

const SkillsAndHobbies = () => {
  return (
    <div className="bg-[#0a1128] text-white py-16 px-6 md:px-20 min-h-screen">
      {/* Soft Skills Section */}
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-pink-500 mb-10">
        Soft Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-16">
        {softSkills.map((skill, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center w-36 h-36 rounded-full ${skill.bg} shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            {skill.icon}
            <p className="mt-3 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Hobbies Section */}
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-pink-500 mb-10">
        Hobbies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center w-36 h-36 rounded-full ${hobby.bg} shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            {hobby.icon}
            <p className="mt-3 text-sm font-semibold">{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndHobbies;
