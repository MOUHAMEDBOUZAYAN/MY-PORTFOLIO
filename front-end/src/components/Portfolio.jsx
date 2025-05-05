import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiZoomIn } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInView, setIsInView] = useState(false);
  
  // Disable scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description: "A full-featured e-commerce solution with Stripe payment integration and content management. This project includes product management, shopping cart functionality, user authentication, and a complete checkout process with Stripe integration.",
      category: "web",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS"],
      links: [
        { icon: <FiGithub />, url: "#", label: "GitHub" },
        { icon: <FiExternalLink />, url: "#", label: "Live Demo" }
      ],
      features: [
        "Responsive design for all devices",
        "Product search and filtering",
        "User authentication and profiles",
        "Secure payment processing",
        "Content management with Sanity"
      ]
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "Productivity app with drag-and-drop interface, user authentication, and real-time updates. Users can create projects, assign tasks, set deadlines, and track progress in an intuitive interface with real-time collaboration features.",
      category: "web",
      image: "/images/projects/management-app.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      links: [
        { icon: <FiGithub />, url: "#", label: "GitHub" },
        { icon: <FiExternalLink />, url: "#", label: "Live Demo" }
      ],
      features: [
        "Drag and drop task management",
        "Real-time updates with Firebase",
        "User authentication and team management",
        "Project analytics and reporting",
        "Calendar integration and notifications"
      ]
    },
    {
      id: 3,
      title: "AI Image Generator",
      description: "DALL-E powered image generation web application with social sharing capabilities. This platform allows users to create unique AI-generated images based on text prompts and share their creations with the community.",
      category: "web",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
      links: [
        { icon: <FiGithub />, url: "#", label: "GitHub" },
        { icon: <FiExternalLink />, url: "#", label: "Live Demo" }
      ],
      features: [
        "Natural language to image generation",
        "Community showcase and exploration",
        "Image variations and editing",
        "User collections and favorites",
        "Social sharing integration"
      ]
    },
    {
      id: 4,
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and personal fitness goals. This app helps users monitor their progress, follow personalized workout plans, and connect with fitness communities.",
      category: "mobile",
      image: "/images/projects/fitness-app.jpg",
      technologies: ["React Native", "Firebase", "Health API", "Redux"],
      links: [
        { icon: <FiGithub />, url: "#", label: "GitHub" },
        { icon: <FiExternalLink />, url: "#", label: "App Store" }
      ],
      features: [
        "Personalized workout plans",
        "Nutrition tracking and meal planning",
        "Progress visualization and statistics",
        "Integration with health devices",
        "Community challenges and social features"
      ]
    },
    {
      id: 5,
      title: "Finance Dashboard UI Design",
      description: "Modern UI/UX design for a financial analytics dashboard with data visualization. This design project focuses on creating an intuitive interface for users to track investments, analyze financial data, and manage budgets.",
      category: "ui",
      image: "/images/projects/finance-ui.jpg",
      technologies: ["Figma", "Adobe XD", "Illustrator", "UI/UX"],
      links: [
        { icon: <FiExternalLink />, url: "#", label: "Behance" }
      ],
      features: [
        "Interactive data visualization",
        "Dark and light mode themes",
        "Responsive layouts for all devices",
        "User research and testing process",
        "Complete design system and component library"
      ]
    },
    {
      id: 6,
      title: "Real Estate Booking Platform",
      description: "Property listing and booking platform with virtual tours and appointment scheduling. This web application helps users find properties, schedule viewings, and connect with real estate agents through a streamlined interface.",
      category: "web",
      image: "/images/projects/real-estate.jpg",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Mapbox"],
      links: [
        { icon: <FiGithub />, url: "#", label: "GitHub" },
        { icon: <FiExternalLink />, url: "#", label: "Live Demo" }
      ],
      features: [
        "Property search with advanced filters",
        "Interactive map integration",
        "Virtual property tours",
        "Appointment scheduling system",
        "Agent messaging and notifications"
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section 
      id="portfolio" 
      className="py-20 px-4 bg-white dark:bg-gray-900"
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-500">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects and creative work. Each project represents my commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onClick={() => openModal(project)}
            >
              <div className="relative h-56 overflow-hidden group">
                <div 
                  className="h-full w-full bg-gray-300 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-300">View Details</span>
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white">
                      <FiZoomIn />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description.split('.')[0]}.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {modalOpen && selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 p-2 bg-gray-800/60 dark:bg-gray-200/20 text-white rounded-full z-10 hover:bg-red-600 transition-colors"
                  onClick={closeModal}
                >
                  <IoMdClose size={20} />
                </button>

                {/* Project image */}
                <div 
                  className="w-full h-64 md:h-80 bg-gray-300 dark:bg-gray-700"
                  style={{
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Project details */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                        <span className="ml-2">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work? Check out my GitHub for additional projects.
          </p>
          <a
            href="https://github.com/MOUHAMEDBOUZAYAN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <FiGithub className="mr-2" /> Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;