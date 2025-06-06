import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2 text-2xl font-bold text-primary" onClick={closeMenu}>
              <img src="/lovable-uploads/13b31893-1e73-4f68-bf9b-b72e0a0afc8d.png" alt="Meltdown Logo" className="h-8 w-auto" />
              <span>Meltdown</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <div className="py-2">
                    <Link to="/corporate-wellness" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" onClick={closeMenu}>
                      Corporate Wellness
                    </Link>
                    <Link to="/companies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" onClick={closeMenu}>
                      For Companies
                    </Link>
                    <Link to="/employees" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" onClick={closeMenu}>
                      For Employees
                    </Link>
                    <Link to="/providers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors" onClick={closeMenu}>
                      For Providers
                    </Link>
                  </div>
                </div>}
            </div>

            <Link to="/events" className={`text-gray-700 hover:text-primary transition-colors ${isActive('/events') ? 'text-primary font-semibold' : ''}`} onClick={closeMenu}>
              Events
            </Link>
            <Link to="/academy" className={`text-gray-700 hover:text-primary transition-colors ${isActive('/academy') ? 'text-primary font-semibold' : ''}`} onClick={closeMenu}>
              Academy
            </Link>
            <Link to="/meltfit" className={`text-gray-700 hover:text-primary transition-colors ${isActive('/meltfit') ? 'text-primary font-semibold' : ''}`} onClick={closeMenu}>
              MeltFit
            </Link>
            <Link to="/wellness-partners" className={`text-gray-700 hover:text-primary transition-colors ${isActive('/wellness-partners') ? 'text-primary font-semibold' : ''}`} onClick={closeMenu}>
              Partners
            </Link>
            <Link to="/contact" className={`text-gray-700 hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : ''}`} onClick={closeMenu}>
              Contact
            </Link>
            <Link to="/schedule-demo" onClick={closeMenu} className="bg-primary text-Black px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/corporate-wellness" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                Corporate Wellness
              </Link>
              <Link to="/companies" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                For Companies
              </Link>
              <Link to="/employees" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                For Employees
              </Link>
              <Link to="/providers" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                For Providers
              </Link>
              <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                Events
              </Link>
              <Link to="/academy" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                Academy
              </Link>
              <Link to="/meltfit" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                MeltFit
              </Link>
              <Link to="/wellness-partners" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                Partners
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors" onClick={closeMenu}>
                Contact
              </Link>
              <Link to="/schedule-demo" className="block px-3 py-2 bg-primary text-white rounded-full text-center mx-3 mt-4 hover:bg-primary/90 transition-colors" onClick={closeMenu}>
                Get Demo
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;