// src/components/home.jsx
import React from 'react';
import profile from '../assets/YUVRAJ_NIRMAAN.jpg';
import { FaDownload } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-[#0f172a] text-white text-center overflow-x-hidden"
    >
      <img
        src={profile}
        alt="Yuvraj Singh"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-yellow-400 hover:scale-105 transition-transform duration-300 mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
        Yuvraj Singh
      </h1>

      <h2 className="text-lg md:text-xl font-medium text-gray-300">
        <Typewriter
          words={['Aspiring Full Stack Developer', 'B.Tech EE | NIT Jamshedpur']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <p className="text-sm md:text-base text-gray-400 mt-4 max-w-xl leading-relaxed">
        Passionate Electrical Engineering student with a drive for innovation and technology.
        <br />
        <span className="italic">"Engineering tomorrow with every line of code."</span>
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-md transition"
        >
          <FaDownload />
          Download Resume
        </a>

        <a
          href="#projects"
          className="border border-gray-300 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
        >
          <BsEye />
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;