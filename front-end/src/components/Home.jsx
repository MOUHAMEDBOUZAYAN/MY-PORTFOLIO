import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.png';

const Home = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com/yourprofile", color: "hover:text-blue-600" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", color: "hover:text-pink-600" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-500" },
    { icon: <FaGithub />, url: "https://github.com/yourprofile", color: "hover:text-white" }
  ];

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 sm:p-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-6 md:gap-12">
        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left max-w-2xl"
          variants={container}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            variants={item}
          >
            Mouhamed Bouzayan
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-4 sm:mb-6"
            variants={item}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300"
            variants={item}
          >
            I build responsive, modern web applications with clean code and intuitive user experiences.
            Passionate about solving problems through technology.
          </motion.p>
          
          {/* Call to Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={item}>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-900/30 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div 
            className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-8"
            variants={item}
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl sm:text-3xl text-gray-400 ${social.color} transition-colors`}
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 500 }
                }}
                whileTap={{ scale: 0.9 }}
                custom={index}
                variants={item}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 ml-0 md:ml-8"
          variants={item}
        >
          <motion.img 
            src={profilePhoto} 
            alt="Mouhamed Bouzayan"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-500/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
          />
          
          {/* Floating Tech Badges */}
          <motion.div 
            className="absolute -bottom-4 -left-4 bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-700 flex items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-xs font-medium">React Expert</span>
          </motion.div>
          
          <motion.div 
            className="absolute -top-4 -right-4 bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-700 flex items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-xs font-medium">Full Stack</span>
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              boxShadow: "inset 0 0 20px rgba(147, 197, 253, 0.4)"
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;