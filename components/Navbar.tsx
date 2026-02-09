import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, 
  Home, BookOpen, Layers, Briefcase, Award, Globe, FileText, Mail 
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Academic Profile', path: '/academic-profile', icon: BookOpen },
  { name: 'Projects', path: '/projects', icon: Layers },
  { name: 'Experience', path: '/professional-experience', icon: Briefcase },
  { name: 'Achievements', path: '/achievements', icon: Award },
  { name: 'Global Exposure', path: '/global-exposure', icon: Globe },
  { name: 'CV', path: '/cv', icon: FileText },
  { name: 'Contact', path: '/contact', icon: Mail },
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isOpen 
            ? 'bg-white border-b border-gray-100' 
            : scrolled 
              ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
              : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Identity / Home Link */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <div className="relative overflow-hidden w-10 h-10 rounded-full bg-gray-200 border border-gray-300 shadow-inner flex-shrink-0">
                <img 
                  src="/images/header/header.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // IMPORTANT: Prevents infinite loop
                    target.src = "https://placehold.co/200x200/e2e8f0/475569?text=IN";
                  }}
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
                className="text-gray-600 hover:text-primary focus:outline-none p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col p-6 h-full overflow-y-auto pb-24 bg-gradient-to-b from-white to-gray-50/50">
           {/* Menu Header */}
           <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 px-2">
             Menu
           </div>
           
           <div className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                     isActive 
                       ? 'bg-primary text-white shadow-md shadow-primary/20' 
                       : 'bg-white border border-gray-100 text-gray-600 hover:border-primary/20 hover:shadow-sm'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-50 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-lg font-medium tracking-tight">{item.name}</span>
                  {isActive && <ChevronRight size={18} className="ml-auto opacity-80" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100">
             <div className="text-center">
                <p className="font-serif font-bold text-primary">Irfat Nur Aboni</p>
                <p className="text-xs mt-1 text-gray-400">© {new Date().getFullYear()} Academic Portfolio</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;