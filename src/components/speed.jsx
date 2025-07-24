import React from 'react';
import speedBreakerImage from '../assets/1.jpg'; // adjust the path if needed

const SpeedBreakerProject = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white py-20 px-6" id="speed-breaker">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE SECTION */}
        <div>
          <img
            src={speedBreakerImage}
            alt="Speed Breaker Project"
            className="rounded-2xl shadow-xl w-full object-cover border border-gray-700 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Arduino-Based Speed Sensing Speed Breaker
          </h1>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            This Arduino-powered project features a smart <span className="font-semibold text-white">speed-sensing speed breaker</span> that activates only when a vehicle exceeds a specific speed limit—reducing unnecessary bumps for law-abiding drivers.
            It is combined with a <span className="font-semibold text-white">single-axis solar tracking system</span> to ensure optimal energy efficiency.
          </p>

          {/* KEY FEATURES */}
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Key Features:</h3>
          <ul className="list-disc pl-5 text-sm space-y-2 text-gray-300">
            <li>Speed detection using IR or ultrasonic sensors</li>
            <li>Dynamic speed breaker that only activates for over-speeding vehicles</li>
            <li>Single-axis solar tracker using LDRs and servo motors</li>
            <li>Powered by Arduino Uno and solar panel</li>
            <li>Energy-efficient and modular design</li>
          </ul>

          {/* TECH STACK */}
          <h3 className="text-lg font-semibold text-blue-300 mt-6 mb-2">Tech Stack & Tools:</h3>
          <div className="flex flex-wrap gap-2">
            {['Arduino Uno', 'Ultrasonic Sensor', 'IR Sensor', 'Servo Motor', 'Solar Panel', 'LDR', 'Embedded C'].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-br from-sky-700 to-indigo-800 text-xs text-white rounded-full shadow-md border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedBreakerProject;
