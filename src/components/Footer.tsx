
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/public/lovable-uploads/8c61e61c-2c08-4a78-8212-aaef826700a5.png" 
                alt="Meltdown Logo" 
                className="h-10 w-auto"
              />
              <span className="font-header font-bold text-xl">Meltdown</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transforming corporate wellness with innovative programs that benefit companies, employees, and wellness providers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-header text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/corporate-wellness" className="text-gray-600 hover:text-secondary transition-colors">Corporate Wellness</Link></li>
              <li><Link to="/companies" className="text-gray-600 hover:text-secondary transition-colors">For Companies</Link></li>
              <li><Link to="/providers" className="text-gray-600 hover:text-secondary transition-colors">For Providers</Link></li>
              <li><Link to="/employees" className="text-gray-600 hover:text-secondary transition-colors">For Employees</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-header text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-600 hover:text-secondary transition-colors">Events & Community</Link></li>
              <li><Link to="/academy" className="text-gray-600 hover:text-secondary transition-colors">Academy for Trainers</Link></li>
              <li><Link to="/meltfit" className="text-gray-600 hover:text-secondary transition-colors">MeltFit Programs</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="col-span-1">
            <h3 className="font-header text-lg font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">Sign up for our newsletter to get the latest wellness insights.</p>
            <Link to="/contact" className="btn-primary mb-4">Contact Us</Link>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Meltdown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
