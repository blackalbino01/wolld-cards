'use client'
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 md:px-6">
        <div className="flex justify-between items-center px-4 md:px-20 py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-xl md:text-2xl font-bold ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              WOLLD Cards
            </span>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <a 
              href="#" 
              className={`text-base transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-white/80'
              }`}
            >
              Exchange Services
            </a>
            <a 
              href="#" 
              className={`text-base transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-white/80'
              }`}
            >
              Home
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className={`px-4 py-2 space-y-4 ${
            scrolled ? 'bg-white/95' : 'bg-black/20'
          }`}>
            <a 
              href="#" 
              className={`block text-base transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-white/80'
              }`}
            >
              Exchange Services
            </a>
            <a 
              href="#" 
              className={`block text-base transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-white/80'
              }`}
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
