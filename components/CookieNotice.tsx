
import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobamos si ya existe una decisión guardada
    const consent = localStorage.getItem('hear-o-cookie-consent');
    if (!consent) {
      // Pequeño retardo para que la animación de entrada quede suave
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hear-o-cookie-consent', 'accepted');
    setIsVisible(false);
    // Aquí se podrían inicializar scripts de terceros (Google Analytics, Pixel, etc.)
  };

  const handleReject = () => {
    localStorage.setItem('hear-o-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
        
        <div className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl">
          <p className="mb-2">
            <strong>🍪 Valoramos tu privacidad.</strong>
          </p>
          <p>
            Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y ofrecerte contenido personalizado. 
            Puedes aceptar todas las cookies o configurarlas según tus preferencias. 
            Consulta nuestra <a href="https://pymeflow.es/politica-de-cookies/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-white underline transition-colors">Política de Cookies</a> para más información.
          </p>
          <div className="mt-2 text-xs text-slate-500 flex gap-4">
            <a href="https://pymeflow.es/aviso-legal/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Aviso Legal</a>
            <a href="https://pymeflow.es/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <Button 
            onClick={handleReject} 
            variant="outline" 
            size="sm"
            className="border-slate-600 text-slate-400 hover:text-white hover:border-slate-400"
          >
            Rechazar
          </Button>
          <Button 
            onClick={handleAccept} 
            variant="primary" 
            size="sm"
            className="whitespace-nowrap"
          >
            Aceptar todas
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CookieNotice;
