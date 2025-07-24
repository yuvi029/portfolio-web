import { Mail, Phone, MapPin, Linkedin, GraduationCap, Github } from "lucide-react";

export default function About() {
  return (
    <div
      className="relative min-h-screen text-white font-sans px-8 py-16 overflow-hidden"
      id="about"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/your-background.jpg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* My Journey */}
        <div>
          <h2 className="text-5xl font-bold text-blue-400 mb-6">My Journey</h2>
          <p className="text-2xl mb-4 text-gray-300">
            I'm a passionate B.Tech Electrical Engineering student at NIT Jamshedpur, driven by curiosity and a love for innovation.
            My journey in engineering has been fueled by a desire to bridge the gap between theoretical knowledge and practical applications.
          </p>
          <p className="text-2xl mb-4 text-gray-300">
            From circuit design to software development, I enjoy exploring the intersection of hardware and software.
            My goal is to contribute to cutting-edge technologies that make a meaningful impact on society.
          </p>
          <p className="text-2xl text-gray-300">
            When I'm not studying or coding, you'll find me on the cricket field, badminton court, watching shows, or exploring new music.
            I believe in maintaining a balance between technical growth and personal interests.
          </p>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-md hover:shadow-blue-500/50 transition duration-300"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Quick Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Quick Info</h2>
          <ul className="space-y-5 text-gray-200">
            <li className="flex items-center gap-4">
              <Mail className="text-blue-400 bg-blue-900 p-2 rounded-full" size={40} />
              <span>singhyuvi4321@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-green-400 bg-green-900 p-2 rounded-full" size={40} />
              <span>+91 91113 68936</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="text-purple-400 bg-purple-900 p-2 rounded-full" size={40} />
              <span>Jamshedpur, Jharkhand</span>
            </li>
            <li className="flex items-center gap-4">
              <Linkedin className="text-blue-300 bg-blue-900 p-2 rounded-full" size={40} />
              <a
                href="https://www.linkedin.com/in/yuvraj-singh-205491253/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/yuvraj-singh
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Github className="text-gray-300 bg-gray-800 p-2 rounded-full" size={36} />
              <a
                href="https://github.com/yuvi029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/yuvi029
              </a>
            </li>
            <li className="flex items-center gap-4">
              <GraduationCap className="text-orange-400 bg-orange-900 p-2 rounded-full" size={36} />
              <span>NIT Jamshedpur</span>
            </li>
          </ul>

          {/* Fun Fact Box */}
          <div className="mt-10 border-l-4 border-blue-400 pl-4 bg-white/5 p-4 rounded-md shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Fun Fact</h3>
            <p className="text-gray-200">
              I've built over 4 personal projects and participated in 4+ hackathons,
              always pushing the boundaries of what's possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
