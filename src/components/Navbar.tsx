
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/public/lovable-uploads/MeltdownLogo.png" 
              alt="Meltdown Logo" 
              className="h-10 w-auto"
            />
            <span className="font-header font-bold text-xl">Meltdown</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-header hover:text-secondary transition-colors">Home</Link>
            
            {/* Corporate Wellness Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="font-header flex items-center hover:text-secondary transition-colors"
              >
                Corporate Wellness <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link 
                      to="/corporate-wellness" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" 
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link 
                      to="/companies" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" 
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      For Companies
                    </Link>
                    <Link 
                      to="/providers" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" 
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      For Providers
                    </Link>
                    <Link 
                      to="/employees" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" 
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      For Employees
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/events" className="font-header hover:text-secondary transition-colors">Events</Link>
            <Link to="/academy" className="font-header hover:text-secondary transition-colors">Academy</Link>
            <Link to="/meltfit" className="font-header hover:text-secondary transition-colors">MeltFit</Link>
            <Link to="/contact" className="font-header hover:text-secondary transition-colors">Contact</Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <div className="container-custom flex flex-col space-y-3">
            <Link to="/" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Home</Link>
            <Link to="/corporate-wellness" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Corporate Wellness Overview</Link>
            <Link to="/companies" className="font-header py-2 hover:text-secondary pl-4" onClick={toggleMenu}>- For Companies</Link>
            <Link to="/providers" className="font-header py-2 hover:text-secondary pl-4" onClick={toggleMenu}>- For Providers</Link>
            <Link to="/employees" className="font-header py-2 hover:text-secondary pl-4" onClick={toggleMenu}>- For Employees</Link>
            <Link to="/events" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Events</Link>
            <Link to="/academy" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Academy</Link>
            <Link to="/meltfit" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>MeltFit</Link>
            <Link to="/contact" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Contact</Link>
            <Link to="/contact" className="btn-primary self-start mt-2" onClick={toggleMenu}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
