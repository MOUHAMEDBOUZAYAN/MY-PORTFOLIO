import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePhoto from '../assets/profile.png';
import { 
  FaCode, 
  FaServer, 
  FaPalette,
  FaUser,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPaintBrush,
  FaMobile,
  FaGlobe
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase, SiAdobexd } from 'react-icons/si';

// Define animation variants outside the component so they can be reused
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 } 
  }
};

const About = () => {
  const [activeSection, setActiveSection] = useState('description');

  const profileData = {
    description: {
      title: "Développeur Full Stack",
      bio: "Passionné par la création d'applications web modernes et performantes. Je combine expertise technique et sens du design pour développer des solutions innovantes.",
      experience: "1+ ans d'expérience",
      location: "Beni Mellal, Maroc",
      image: profilePhoto,
      highlights: [
        "Développement d'applications web complètes",
        "Conception d'interfaces utilisateur intuitives",
        "Optimisation des performances",
        "Collaboration en équipe agile"
      ]
    },
    skills: {
      frontend: [
        { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
        { name: "HTML/CSS", icon: <FaGlobe className="text-orange-400" />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 80 }
      ],
      backend: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 85 },
        { name: "Express", icon: <FaServer className="text-gray-300" />, level: 80 },
        { name: "MongoDB", icon: <FaDatabase className="text-green-500" />, level: 75 },
        { name: "Firebase", icon: <SiFirebase className="text-amber-400" />, level: 70 }
      ],
      design: [
        { name: "UI/UX", icon: <FaPaintBrush className="text-pink-400" />, level: 80 },
        { name: "Figma", icon: <FaPalette className="text-purple-400" />, level: 75 },
        { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" />, level: 70 },
        { name: "Responsive Design", icon: <FaMobile className="text-blue-300" />, level: 85 }
      ]
    }
  };

  const navItems = [
    { id: 'description', icon: <FaUser className="mr-2" />, label: 'Profil' },
    { id: 'skills', icon: <FaCode className="mr-2" />, label: 'Compétences' }
  ];

  return (
    <motion.section 
      id="about" 
      className="min-h-screen py-20 px-4 sm:px-8 bg-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav 
        className="flex justify-center mb-12 sticky top-0 z-10 bg-gray-800/80 backdrop-blur-sm py-2"
        variants={itemVariants}
      >
        <div className="flex space-x-1 bg-gray-700 rounded-full p-1 shadow-inner">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeSection === 'description' && (
            <ProfileSection data={profileData.description} />
          )}
          {activeSection === 'skills' && (
            <SkillsSection data={profileData.skills} />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

const ProfileSection = ({ data }) => (
  <motion.div
    key="description"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={sectionVariants}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
  >
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={itemVariants}
        >
          <img 
            src={data.image} 
            alt="Profil" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-blue-400 transition-all duration-300" />
        </motion.div>
        <motion.div 
          className="flex-1"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            {data.title}
          </motion.h2>
          <motion.p 
            className="text-gray-300 mb-4"
            variants={itemVariants}
          >
            {data.bio}
          </motion.p>
          
          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.p 
              className="text-blue-400 font-medium mb-2"
              variants={itemVariants}
            >
              Points forts :
            </motion.p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.highlights.map((highlight, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className="text-gray-300">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-4"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center bg-gray-700/50 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span className="text-gray-300">{data.experience}</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-gray-700/50 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span className="text-gray-300">{data.location}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const SkillsSection = ({ data }) => (
  <motion.div
    key="skills"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={sectionVariants}
  >
    <motion.h2 
      className="text-3xl font-bold text-center mb-8 text-white"
      variants={itemVariants}
    >
      Mes Compétences Techniques
    </motion.h2>
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
    >
      {Object.entries(data).map(([category, skills]) => (
        <motion.div
          key={category}
          className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">
              {category === 'frontend' && <FaCode className="text-blue-400" />}
              {category === 'backend' && <FaServer className="text-green-400" />}
              {category === 'design' && <FaPalette className="text-purple-400" />}
            </div>
            <h3 className="text-xl font-semibold capitalize text-white">
              {category === 'frontend' ? 'Frontend' : 
               category === 'backend' ? 'Backend' : 'Design'}
            </h3>
          </div>
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <motion.li 
                key={skill.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="h-2 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      backgroundColor: 
                        skill.level > 85 ? '#60a5fa' : 
                        skill.level > 70 ? '#3b82f6' : '#93c5fd'
                    }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default About;