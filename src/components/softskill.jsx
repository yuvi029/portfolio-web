import React from 'react';

const hobbies = [
  {
    name: 'Badminton',
    emoji: '🏸',
    color: 'from-purple-700 to-purple-900',
  },
  {
    name: 'Cricket',
    emoji: '🏏',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    name: 'Football',
    emoji: '⚽',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Web Series',
    emoji: '🎬',
    color: 'from-pink-600 to-pink-800',
  },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-16 min-h-screen font-sans"
    >
      <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-pink-500 inline-block">
        My Hobbies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${hobby.color} p-[2px] rounded-xl w-full max-w-[200px] shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105 duration-300`}
          >
            <div className="bg-[#1e1e1e] p-6 rounded-lg h-full flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">{hobby.emoji}</div>
              <h3 className="text-lg font-semibold text-center">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
