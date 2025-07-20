// src/components/Navbar.jsx
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Hobbies",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f1117] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo/Name */}
        <h1 className="text-3xl text-yellow-500 font-serif">Yuvraj Singh</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveLink(item)}
                className={`relative transition duration-200 ${
                  activeLink === item ? "text-blue-400" : "hover:text-blue-300"
                }`}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded-md"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub Icon */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 ml-4 md:ml-8 text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
