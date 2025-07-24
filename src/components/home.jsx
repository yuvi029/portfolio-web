import { FaDownload } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profileImage from '../assets/YUVRAJ_NIRMAAN.jpg';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
      id="home"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a] z-0"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* ✅ Circular Profile Image */}
        <img
          src={profileImage}
          alt="Yuvraj Singh"
          className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
          Yuvraj Singh
        </h1>

        <h2 className="text-lg md:text-xl font-medium text-gray-300">
          <Typewriter
            words={[
              "Aspiring Full Stack Developer",
              "B.Tech EE | NIT Jamshedpur",
              "Frontend Developer",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-sm md:text-base text-gray-400 mt-4 max-w-xl leading-relaxed">
          Passionate Electrical Engineering student with a drive for innovation
          and technology.
          <br />
          <span className="italic">
            "Engineering tomorrow with every line of code."
          </span>
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-blue-500/50 transition"
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
      </motion.div>
    </section>
  );
};

export default Hero;
