import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Nirmaan from '../assets/nirmaan.png';
import mindripple from '../assets/mindripple.png';
import shopai from '../assets/shopai.png';

const projects = [
  {
    title: 'Nirmaan',
    description:
      'Nirmaan is a web app that connects users with trusted contractors for services like house construction, repair, and renovation. Acting as a smart interface, it enables seamless booking, direct communication, and location-based search—bridging the gap between service seekers and providers.',
    image: Nirmaan,
    tags: ['HTML', 'Tailwind', 'React.js', 'Framer Motion'],
    codeLink: 'https://github.com/Runtime-Terror-5311/nirman_01.git',
    demoLink: 'https://nirman-01.vercel.app',
    featured: true,
  },
  {
    title: 'MindRipple Frontend',
    description:
      'MindRipple Frontend is a futuristic, single-page AI-themed website that raises awareness about real-world challenges through interactive visuals, smooth animations, and impactful storytelling.',
    image: mindripple,
    tags: ['HTML', 'Tailwind', 'React.js'],
    codeLink: 'https://github.com/yuvi029/frontend-2.git',
    demoLink: 'https://glittery-khapse-0dcd53.netlify.app/',
    featured: true,
  },
  {
    title: 'ShopAi',
    description:
      'Built during Sparkathon, this Walmart-inspired e-commerce platform replicates core functionalities of a real online shopping experience. It features dropdown navigation, responsive design, cart with quantity controls, and routing between product categories and services.',
    image: shopai,
    tags: ['HTML', 'Tailwind', 'React', 'Framer Motion', 'Python', 'C', 'Cython', 'Cuda', 'XSLT'],
    codeLink: 'https://github.com/yuvi029/Sparkathon.git',
    demoLink: 'https://shopai-sparkathon.vercel.app/', // replace with actual live link if different
    featured: false,
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-[#0F172A] text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition duration-300 relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            {project.featured && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Featured
              </span>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-xs px-3 py-1 rounded-full text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
