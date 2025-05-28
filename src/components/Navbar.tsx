
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNavLinkClass = (path: string) => {
    return `font-header transition-colors ${isActive(path) ? 'text-primary font-bold' : 'hover:text-secondary'}`;
  };

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
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Meltdown Logo" className="h-10 w-auto" src="/lovable-uploads/02d094e0-8d2b-4b00-b52b-a9623830309c.png" />
            <span className="font-header font-bold text-xl">Meltdown</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className={getNavLinkClass('/')}>Home</Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                className={`font-header flex items-center transition-colors ${
                  ['/corporate-wellness', '/companies', '/providers', '/employees'].some(path => isActive(path)) 
                    ? 'text-primary font-bold' 
                    : 'hover:text-secondary'
                }`}
              >
                Corporate Wellness <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/corporate-wellness" className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isActive('/corporate-wellness') ? 'text-primary font-bold' : ''}`} onClick={() => setIsDropdownOpen(false)}>
                      Overview
                    </Link>
                    <Link to="/companies" className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isActive('/companies') ? 'text-primary font-bold' : ''}`} onClick={() => setIsDropdownOpen(false)}>
                      For Companies
                    </Link>
                    <Link to="/providers" className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isActive('/providers') ? 'text-primary font-bold' : ''}`} onClick={() => setIsDropdownOpen(false)}>
                      For Providers
                    </Link>
                    <Link to="/employees" className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isActive('/employees') ? 'text-primary font-bold' : ''}`} onClick={() => setIsDropdownOpen(false)}>
                      For Employees
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/events" className={getNavLinkClass('/events')}>Events</Link>
            <Link to="/academy" className={getNavLinkClass('/academy')}>Academy</Link>
            <Link to="/meltfit" className={getNavLinkClass('/meltfit')}>MeltFit</Link>
            <Link to="/wellness-partners" className={getNavLinkClass('/wellness-partners')}>Wellness Partners</Link>
            <Link to="/careers" className={getNavLinkClass('/careers')}>Careers</Link>
            <Link to="/contact" className={getNavLinkClass('/contact')}>Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/schedule-demo" className="btn-primary">Get Started</Link>
          </div>

          <button className="md:hidden text-text" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <div className="container-custom flex flex-col space-y-3">
            <Link to="/" className={`py-2 ${getNavLinkClass('/')}`} onClick={toggleMenu}>Home</Link>
            <Link to="/corporate-wellness" className={`py-2 ${getNavLinkClass('/corporate-wellness')}`} onClick={toggleMenu}>Corporate Wellness Overview</Link>
            <Link to="/companies" className={`py-2 pl-4 ${getNavLinkClass('/companies')}`} onClick={toggleMenu}>- For Companies</Link>
            <Link to="/providers" className={`py-2 pl-4 ${getNavLinkClass('/providers')}`} onClick={toggleMenu}>- For Providers</Link>
            <Link to="/employees" className={`py-2 pl-4 ${getNavLinkClass('/employees')}`} onClick={toggleMenu}>- For Employees</Link>
            <Link to="/events" className={`py-2 ${getNavLinkClass('/events')}`} onClick={toggleMenu}>Events</Link>
            <Link to="/academy" className={`py-2 ${getNavLinkClass('/academy')}`} onClick={toggleMenu}>Academy</Link>
            <Link to="/meltfit" className={`py-2 ${getNavLinkClass('/meltfit')}`} onClick={toggleMenu}>MeltFit</Link>
            <Link to="/wellness-partners" className={`py-2 ${getNavLinkClass('/wellness-partners')}`} onClick={toggleMenu}>Wellness Partners</Link>
            <Link to="/careers" className={`py-2 ${getNavLinkClass('/careers')}`} onClick={toggleMenu}>Careers</Link>
            <Link to="/contact" className={`py-2 ${getNavLinkClass('/contact')}`} onClick={toggleMenu}>Contact</Link>
            <Link to="/schedule-demo" className="btn-primary self-start mt-2" onClick={toggleMenu}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
