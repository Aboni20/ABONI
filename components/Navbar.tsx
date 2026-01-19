import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Academic Profile', path: '/academic-profile' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/professional-experience' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Global Exposure', path: '/global-exposure' },
  { name: 'CV', path: '/cv' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Identity / Home Link */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden w-10 h-10 rounded-full bg-gray-200 border border-gray-300 shadow-inner flex-shrink-0">
               <img 
                 src="https://picsum.photos/200/200" 
                 alt="Profile" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
               />
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-primary">
              Irfat Nur Aboni
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }} // Below header
      >
        <div className="flex flex-col p-6 space-y-4 h-full overflow-y-auto pb-24">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between text-lg font-medium py-3 border-b border-gray-100 ${
                 location.pathname === item.path ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {item.name}
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;