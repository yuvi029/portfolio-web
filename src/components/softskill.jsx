import { 
  FaTableTennis, FaFutbol, FaTv, FaUsers, FaLaptopCode, FaBookOpen, FaMusic, FaPlane 
} from 'react-icons/fa';
import { GiCricketBat, GiNightSleep } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';

const hobbies = [
  { icon: <FaTableTennis size={28} />, name: "Badminton", bg: "bg-indigo-600" },
  { icon: <GiCricketBat size={28} />, name: "Cricket", bg: "bg-emerald-600" },
  { icon: <FaFutbol size={28} />, name: "Football", bg: "bg-rose-600" },
  { icon: <FaTv size={28} />, name: "Science Thrillers", bg: "bg-purple-600" },
  { icon: <FaUsers size={28} />, name: "Time with Friends", bg: "bg-pink-600" },
  { icon: <FaLaptopCode size={28} />, name: "Coding Projects", bg: "bg-blue-600" },
  { icon: <MdScience size={28} />, name: "Exploring Science", bg: "bg-cyan-600" },
  { icon: <FaBookOpen size={28} />, name: "Reading Books", bg: "bg-orange-600" },
  { icon: <FaMusic size={28} />, name: "Music", bg: "bg-teal-600" },
  { icon: <FaPlane size={28} />, name: "Traveling", bg: "bg-yellow-600" },
  { icon: <GiNightSleep size={28} />, name: "Relaxing", bg: "bg-gray-600" },
];

const SkillsAndHobbies = () => {
  return (
    <div className="bg-[#0a1128] text-white py-16 px-6 md:px-20 min-h-screen">
      {/* Hobbies Section */}
      <h2 className="text-4xl font-extrabold text-center mb-14">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          My Hobbies & Interests
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center w-36 h-36 rounded-2xl ${hobby.bg} shadow-lg 
            transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer`}
          >
            <div className="animate-pulse">{hobby.icon}</div>
            <p className="mt-3 text-sm font-semibold text-center">{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndHobbies;
