
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/public/lovable-uploads/8c61e61c-2c08-4a78-8212-aaef826700a5.png" 
              alt="Meltdown Logo" 
              className="h-10 w-auto"
            />
            <span className="font-header font-bold text-xl">Meltdown</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-header hover:text-secondary transition-colors">Home</Link>
            <Link to="/corporate-wellness" className="font-header hover:text-secondary transition-colors">Corporate Wellness</Link>
            <Link to="/companies" className="font-header hover:text-secondary transition-colors">For Companies</Link>
            <Link to="/providers" className="font-header hover:text-secondary transition-colors">For Providers</Link>
            <Link to="/employees" className="font-header hover:text-secondary transition-colors">For Employees</Link>
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
            <Link to="/corporate-wellness" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>Corporate Wellness</Link>
            <Link to="/companies" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>For Companies</Link>
            <Link to="/providers" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>For Providers</Link>
            <Link to="/employees" className="font-header py-2 hover:text-secondary" onClick={toggleMenu}>For Employees</Link>
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
