import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-950 shadow-md py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-400">
          FriendlyDev
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-500 opacity-50 hover:text-blue-400 hover:opacity-100 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                className="animate-in fade-in duration-300"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                className="animate-in fade-in duration-300"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 mt-4 pb-4' 
          : 'max-h-0 opacity-0 mt-0 pb-0'
      }`}>
        <ul className="flex flex-col space-y-4 text-gray-300 font-medium">
            <li className={`transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block py-2 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={`transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '150ms' : '0ms' }}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block py-2 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className={`transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `block py-2 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className={`transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `block py-2 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className={`transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block py-2 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : ''}`
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
