import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-primary font-bold">Irfat Nur Aboni</p>
          <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} Academic Portfolio. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="mailto:irfatnuraboni71@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://linkedin.com/in/irfatnuraboni" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/aboni.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;