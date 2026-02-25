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
          ? 'h-20 md:h-24 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'h-24 md:h-32 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20 h-full flex items-center justify-between gap-4">
        {/* Left Side: Logo + Link */}
        <div className="flex items-center gap-4 md:gap-8 flex-shrink">
            <Link to="/" className="flex items-center gap-2 md:gap-4 transition-all duration-500 group flex-shrink-0">
              <img 
                src={LOGO_SMALL} 
                alt="Hear-O Logo" 
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-16'}`}
              />
              <span className={`font-bold text-white transition-all duration-500 group-hover:text-blue-400 whitespace-nowrap ${isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-3xl'}`}>
                Hear-O
              </span>
            </Link>
            
            <Link 
                to="/"
                className="hidden lg:block text-slate-300 hover:text-white font-medium transition-colors text-sm md:text-base whitespace-nowrap"
            >
                Otras soluciones Hear-O
            </Link>
        </div>

        {/* Right Side: CTA */}
        <div className="flex-shrink-0">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onContactClick} 
            className={`transition-all duration-300 ${isScrolled ? 'text-sm px-5 py-2' : 'text-sm md:text-lg px-5 md:px-8'}`}
          >
            ¿Hablamos?
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
