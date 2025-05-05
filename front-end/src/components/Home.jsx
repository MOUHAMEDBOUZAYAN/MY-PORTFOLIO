import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import profilePhoto from '../assets/profile.png';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-500", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/MOUHAMEDBOUZAYAN", color: "hover:text-purple-500", label: "GitHub" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", color: "hover:text-pink-500", label: "Instagram" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourprofile", color: "hover:text-blue-600", label: "Facebook" }
  ];

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate={controls}
      variants={container}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated particles/shapes for background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 bg-blue-500/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div 
            className="text-center md:text-left max-w-2xl"
            variants={container}
          >
            <motion.p 
              className="text-blue-400 font-medium mb-4"
              variants={item}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
              variants={item}
            >
              Mouhamed <span className="text-blue-500">Bouzayan</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6"
              variants={item}
            >
              <span className="text-typing">Full Stack Developer</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 text-gray-400 max-w-xl"
              variants={item}
            >
              I build modern, responsive web applications with clean code and intuitive user experiences.
              Specialized in React and Node.js development.
            </motion.p>
            
            {/* Call to Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8" variants={item}>
              <Link
                to="contact"
                smooth={true}
                duration={800}
              >
                <motion.button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex justify-center md:justify-start gap-6"
              variants={item}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-2xl text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 500 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with effects */}
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            variants={item}
          >
            {/* Main image with glow effect */}
            <motion.div 
              className="w-full h-full rounded-full relative z-10 overflow-hidden border-4 border-blue-500/30"
              animate={{ 
                boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img 
                src={profilePhoto} 
                alt="Mouhamed Bouzayan"
                className="w-full h-full object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4
                }}
              />
            </motion.div>
            
            {/* Rotating circle effect */}
            <motion.div
              className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-700 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-sm font-medium text-blue-400">React Expert</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-700 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-sm font-medium text-green-400">Full Stack Developer</span>
            </motion.div>
            
            {/* Experience badge */}
            <motion.div 
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-700 z-20"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-xs font-medium text-yellow-400">1+ Years Experience</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-2 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;