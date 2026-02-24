import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { LOGO_SMALL } from '../constants';

interface LandingHeaderProps {
  onContactClick: () => void;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'h-24 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'h-32 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
        {/* Left Side: Logo + Link */}
        <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 transition-all duration-500 group">
              <img 
                src={LOGO_SMALL} 
                alt="Hear-O Logo" 
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10' : 'h-16'}`}
              />
              <span className={`font-bold text-white transition-all duration-500 group-hover:text-blue-400 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
                Hear-O
              </span>
            </Link>
            
            <Link 
                to="/"
                className="hidden md:block text-slate-300 hover:text-white font-medium transition-colors"
            >
                Otras soluciones Hear-O
            </Link>
        </div>

        {/* Right Side: CTA */}
        <div>
          <Button variant="primary" size="lg" onClick={onContactClick} className="text-lg px-8">
            ¿Hablamos?
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
