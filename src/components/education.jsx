import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      title: 'National Institute of Technology, Jamshedpur',
      degree: 'Bachelor of Technology',
      field: 'Electrical Engineering',
      duration: '2023 - 2027',
      score: 'CGPA: 8.14/10',
      color: 'text-blue-400',
      highlights: [
        'DRT Member',
        'Pre-Ojass winner',
        'Ojass and Culfest core member',
        'IEEE Student Member',
      ],
    },
    {
      title: 'Vivekanand Vision Ideal Public School',
      degree: 'Senior Secondary (XII)',
      field: 'Physics, Chemistry, Mathematics',
      duration: '2020 - 2022',
      score: 'Percentage: 91.2%',
      color: 'text-green-400',
      highlights: [
        'School Topper in Physics ,Chemistry ,Maths',
        'Active Student Council Member',
        'Cracked JEE Mains with a Top 1.8% All-India Rank, and secured AIR 21,000 in JEE Advanced—earning a place at NIT Jamshedpur.',
      ],
    },
    {
      title: 'St. Xavier’s Ledhupur, Varanasi',
      degree: 'Secondary (X)',
      field: 'All Subjects',
      duration: '2018 - 2020',
      score: 'Percentage: 90%',
      color: 'text-purple-400',
      highlights: [
        'Perfect Score in Mathematics',
        'Science Fair Winner',
        'Student Council Member',
      ],
    },
    {
      title: 'Delhi Public School',
      degree: 'Class II to VIII',
      field: 'All Subjects',
      duration: '2011 - 2018',
      score: 'Percentage: 96.8%',
      color: 'text-yellow-400',
      highlights: [
        'Was Junior Sports Captain in Class V',
        'School Topper',
        'IMO and NSO Winner',
      ],
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-16 px-4 md:px-12 min-h-screen font-sans relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

      {/* Vertical timeline line */}
      <div className="hidden md:block absolute left-1/2 top-32 bottom-12 w-1 bg-blue-500 z-0 transform -translate-x-1/2" />

      <div className="flex flex-col gap-20 relative z-10">
        {educationData.map((edu, idx) => {
          const isRight = idx % 2 !== 0;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-between ${
                isRight ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex w-1/12 justify-center relative">
                <div className="w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10" />
              </div>

              {/* Education box */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className={`${edu.color} font-semibold`}>{edu.degree}</p>
                <p className="text-gray-300">{edu.field}</p>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{edu.duration}</span>
                  <span className={`${edu.color} font-bold`}>{edu.score}</span>
                </div>
                <p className="font-semibold mt-3">Key Achievements</p>
                <ul className="list-disc ml-5 text-sm mt-1 text-gray-300">
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Right dot spacing mirror */}
              <div className="hidden md:block w-1/12" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
