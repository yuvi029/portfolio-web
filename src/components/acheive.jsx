import React from 'react';

const achievements = [
  "Solved 200+ DSA problems across platforms: LeetCode, HackerRank (5), CodeChef (3)",
  "Shortlisted – Unstop Talent Park (Tech) 2025 (Round 2 Qualifier)",
  
  "Winner – Off Road Quest conducted by Drift Racing Team (DRT), NIT Jamshedpur",
  "Winner – Technical Quiz organized by Rays Club, NIT Jamshedpur",
];

const Achievements = () => {
  return (
    <div className="bg-[#0a1128] text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 decoration-yellow-500 mb-8">
        Achievements & Awards
      </h2>
      <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed max-w-4xl mx-auto">
        {achievements.map((item, index) => (
          <li key={index} className="text-gray-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
