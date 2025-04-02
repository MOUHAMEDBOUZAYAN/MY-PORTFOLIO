import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaUser,
  FaEnvelope,
  FaFileDownload
} from "react-icons/fa";
import { Link } from 'react-scroll';

function Nav() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FaHome />, color: 'text-blue-500', label: 'Home' },
    { id: 'about', icon: <FaUser />, color: 'text-purple-500', label: 'About' },
    { id: 'projects', icon: <FaProjectDiagram />, color: 'text-emerald-500', label: 'Projects' },
    { id: 'contact', icon: <FaEnvelope />, color: 'text-rose-500', label: 'Contact' },
    { id: 'resume', icon: <FaFileDownload />, color: 'text-amber-500', label: 'Resume', isExternal: true }
  ];

  return (
    <nav className={`fixed bottom-2 sm:bottom-4 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
      <div className="container mx-auto flex justify-center px-2">
        <div className={`bg-black/20 h-14 sm:h-16 backdrop-blur-2xl rounded-full w-full max-w-md sm:max-w-lg px-4 flex justify-evenly items-center text-xl sm:text-2xl mx-auto transition-all ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.id}
                href="/resume.pdf"
                download="Your_Resume.pdf"
                className={`group cursor-pointer w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center transition-all ${activeLink === item.id ? `${item.color} scale-110` : 'text-white/70 hover:' + item.color}`}
                onClick={() => setActiveLink(item.id)}
              >
                <NavIcon icon={item.icon} label={item.label} />
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                spy={true}
                onSetActive={() => setActiveLink(item.id)}
                className={`group cursor-pointer w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center transition-all ${activeLink === item.id ? `${item.color} scale-110` : 'text-white/70 hover:' + item.color}`}
              >
                <NavIcon icon={item.icon} label={item.label} />
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}

const NavIcon = ({ icon, label }) => (
  <div className="relative flex items-center justify-center">
    <div className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white">
      {label}
    </span>
  </div>
);

export default Nav;