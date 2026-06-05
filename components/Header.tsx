import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }

    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-24 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'h-32 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 transition-all duration-500">
          <img
            src={LOGO_SMALL}
            alt="Hear-O Logo"
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-12' : 'h-20'}`}
          />
          <span className={`font-bold text-white transition-all duration-500 ${isScrolled ? 'text-3xl' : 'text-4xl'}`}>
            Hear-O
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <a href="#soluciones" onClick={(e) => handleNavClick(e, 'soluciones')} className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            Soluciones
          </a>
          <Link to="/software-centros-auditivos-hear-o" className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            Full Pack
          </Link>
          <Link to="/precios" className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            Precios
          </Link>
          <Link to="/sobre-hear-o" className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            Sobre Hear-O
          </Link>
          <Link to="/guias" className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            Guías
          </Link>
          <a href="#calculadora" onClick={(e) => handleNavClick(e, 'calculadora')} className="text-slate-300 hover:text-white transition-colors text-lg font-semibold">
            ROI
          </a>
          <Button variant="primary" size="lg" onClick={onContactClick} className="text-lg px-8">
            Hablamos
          </Button>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-xl z-50">
          <a href="#soluciones" onClick={(e) => handleNavClick(e, 'soluciones')} className="text-slate-300 hover:text-white text-xl font-medium block">
            Soluciones
          </a>
          <Link to="/software-centros-auditivos-hear-o" onClick={closeMenu} className="text-slate-300 hover:text-white text-xl font-medium block">
            Full Pack
          </Link>
          <Link to="/precios" onClick={closeMenu} className="text-slate-300 hover:text-white text-xl font-medium block">
            Precios
          </Link>
          <Link to="/sobre-hear-o" onClick={closeMenu} className="text-slate-300 hover:text-white text-xl font-medium block">
            Sobre Hear-O
          </Link>
          <Link to="/guias" onClick={closeMenu} className="text-slate-300 hover:text-white text-xl font-medium block">
            Guías
          </Link>
          <a href="#calculadora" onClick={(e) => handleNavClick(e, 'calculadora')} className="text-slate-300 hover:text-white text-xl font-medium block">
            ROI
          </a>
          <Button variant="primary" size="lg" onClick={() => { closeMenu(); onContactClick(); }} className="w-full text-lg">
            Agenda una demo
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
