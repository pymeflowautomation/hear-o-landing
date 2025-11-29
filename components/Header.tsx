
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { LOGO_SMALL } from '../constants';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 130; // Altura aproximada del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'h-24 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'h-32 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4 transition-all duration-500">
          <img 
            src={LOGO_SMALL} 
            alt="Hear-O Logo" 
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-12' : 'h-20'}`}
          />
          <span className={`font-bold text-white transition-all duration-500 ${isScrolled ? 'text-3xl' : 'text-4xl'}`}>
            Hear-O
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a 
            href="#en-accion" 
            onClick={(e) => handleNavClick(e, 'en-accion')}
            className="text-slate-300 hover:text-white transition-colors text-xl font-semibold cursor-pointer"
          >
            ¿Cómo?
          </a>
          <a 
            href="#beneficios" 
            onClick={(e) => handleNavClick(e, 'beneficios')}
            className="text-slate-300 hover:text-white transition-colors text-xl font-semibold cursor-pointer"
          >
            Beneficios
          </a>
          <a 
            href="#calculadora" 
            onClick={(e) => handleNavClick(e, 'calculadora')}
            className="text-slate-300 hover:text-white transition-colors text-xl font-semibold cursor-pointer"
          >
            Calculadora ROI
          </a>
          <a 
            href="#precios" 
            onClick={(e) => handleNavClick(e, 'precios')}
            className="text-slate-300 hover:text-white transition-colors text-xl font-semibold cursor-pointer"
          >
            Precios
          </a>
          <Button variant="primary" size="lg" onClick={onContactClick} className="text-lg px-8">
            ¿Hablamos?
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-xl z-50">
          <a 
            href="#en-accion" 
            onClick={(e) => handleNavClick(e, 'en-accion')}
            className="text-slate-300 hover:text-white text-xl font-medium block"
          >
            En Acción
          </a>
          <a 
            href="#beneficios" 
            onClick={(e) => handleNavClick(e, 'beneficios')}
            className="text-slate-300 hover:text-white text-xl font-medium block"
          >
            Beneficios
          </a>
          <a 
            href="#calculadora" 
            onClick={(e) => handleNavClick(e, 'calculadora')}
            className="text-slate-300 hover:text-white text-xl font-medium block"
          >
            Calculadora ROI
          </a>
          <a 
            href="#precios" 
            onClick={(e) => handleNavClick(e, 'precios')}
            className="text-slate-300 hover:text-white text-xl font-medium block"
          >
            Precios
          </a>
          <Button variant="primary" size="lg" onClick={() => {
            setIsMobileMenuOpen(false);
            onContactClick();
          }} className="w-full text-lg">
            Agenda una Demo
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
