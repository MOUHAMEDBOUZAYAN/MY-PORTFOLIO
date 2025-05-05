import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Modern E-Commerce",
    description: "Next.js e-commerce with Stripe payments and Sanity CMS",
    tags: ["Next.js", "Stripe", "Sanity"],
    image: "/images/projects/ecommerce.jpg",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" }
    ]
  },
  {
    title: "Task Management App",
    description: "Productivity app with drag-n-drop interface and Firebase auth",
    tags: ["React", "Firebase", "Tailwind"],
    image: "/images/projects/management-app.png",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" }
    ]
  },
  {
    title: "AI Image Generator",
    description: "DALL-E powered image generation with share functionality",
    tags: ["OpenAI", "Node.js", "MongoDB"],
    image: "/images/projects/ai-generator.jpg",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Here are some of my recent projects with modern technologies
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-4">
                    {project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        aria-label={i === 0 ? "GitHub" : "Live Demo"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;