import React, { useState } from 'react';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaUser,
  FaEnvelope
} from "react-icons/fa";
import { Link } from 'react-scroll';

function Nav() {
  const [activeLink, setActiveLink] = useState('home');

  // Different colors for each icon (only shown when active)
  const activeColors = {
    home: 'text-blue-500',
    about: 'text-purple-500',
    projects: 'text-emerald-500',
    contact: 'text-rose-500'
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className='fixed bottom-5 left-0 right-0 w-full overflow-hidden z-50'>
      <div className='container mx-auto flex justify-center'>
        <div className='bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[500px] px-10 flex justify-evenly items-center text-2xl mx-auto'>
          <Link 
            to="home" 
            smooth={true} 
            onSetActive={() => handleSetActive('home')}
            className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all duration-300 ${activeLink === 'home' ? `${activeColors.home} scale-110` : 'text-white/70 hover:text-white'}`}
          >
            <div className="relative">
              <FaHome className="transition-all duration-300 group-hover:scale-125" />
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Home
              </span>
            </div>
          </Link>

          <Link 
            to="about" 
            smooth={true} 
            onSetActive={() => handleSetActive('about')}
            className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all duration-300 ${activeLink === 'about' ? `${activeColors.about} scale-110` : 'text-white/70 hover:text-white'}`}
          >
            <div className="relative">
              <FaUser className="transition-all duration-300 group-hover:scale-125" />
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                About
              </span>
            </div>
          </Link>

          <Link 
            to="projects" 
            smooth={true} 
            onSetActive={() => handleSetActive('projects')}
            className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all duration-300 ${activeLink === 'projects' ? `${activeColors.projects} scale-110` : 'text-white/70 hover:text-white'}`}
          >
            <div className="relative">
              <FaProjectDiagram className="transition-all duration-300 group-hover:scale-125" />
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Projects
              </span>
            </div>
          </Link>

          <Link 
            to="contact" 
            smooth={true} 
            onSetActive={() => handleSetActive('contact')}
            className={`group cursor-pointer w-[70px] h-[70px] flex flex-col items-center justify-center transition-all duration-300 ${activeLink === 'contact' ? `${activeColors.contact} scale-110` : 'text-white/70 hover:text-white'}`}
          >
            <div className="relative">
              <FaEnvelope className="transition-all duration-300 group-hover:scale-125" />
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Contact
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;