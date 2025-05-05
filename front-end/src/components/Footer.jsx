import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaHeart, 
  FaArrowUp 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' }
  ];
  
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com/yourprofile", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/MOUHAMEDBOUZAYAN", label: "GitHub" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-500">M</span>ouhamed<span className="text-blue-500">B</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating modern and responsive web applications.
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer inline-block"
                    activeClass="text-blue-500"
                    spy={true}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-sm text-gray-500 mb-1">Email</span>
                <a href="mailto:your.email@example.com" className="hover:text-blue-500 transition-colors">
                  your.email@example.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500 mb-1">Phone</span>
                <a href="tel:+212123456789" className="hover:text-blue-500 transition-colors">
                  +212 123-456-789
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500 mb-1">Location</span>
                <p>Beni Mellal, Morocco</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mouhamed Bouzayan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Designed with <FaHeart className="text-red-500 mx-1" /> by Mouhamed Bouzayan
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Link
        to="home"
        smooth={true}
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors"
      >
        <FaArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;