// Nav.jsx
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
    <nav className={`fixed bottom-5 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
      <div className="container mx-auto flex justify-center">
        <div className={`bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[600px] px-5 flex justify-evenly items-center text-2xl mx-auto transition-all ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.id}
                href="/resume.pdf"
                download="Mouhamed_Bouzayan_Resume.pdf"
                className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all ${activeLink === item.id ? `${item.color} scale-110` : 'text-white/70 hover:text-white'}`}
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
                className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all ${activeLink === item.id ? `${item.color} scale-110` : 'text-white/70 hover:text-white'}`}
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
  <div className="relative">
    <div className="transition-all duration-300 group-hover:scale-125">
      {icon}
    </div>
    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default Nav;