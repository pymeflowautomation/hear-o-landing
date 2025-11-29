import React from 'react';
import { LOGO_SMALL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 py-12 text-sm">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <img src={LOGO_SMALL} alt="Hear-O" className="h-8" />
               <span className="text-xl font-bold text-white">Hear-O. Un sistema de <a href="https://pymeflow.es/" className="text-brand-orange hover:text-white transition-colors">Pymeflow.es</a></span>
            </div>
            <p className="text-slate-300 max-w-sm text-xl">
              La primera solución de automatización inteligente diseñada exclusivamente para centros auditivos que quieren crecer sin perder calidad humana.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="https://pymeflow.es/aviso-legal/" className="hover:text-brand-orange transition-colors">Aviso Legal</a></li>
              <li><a href="https://pymeflow.es/politica-de-privacidad/" className="hover:text-brand-orange transition-colors">Política de Privacidad</a></li>
              <li><a href="https://pymeflow.es/politica-de-cookies/" className="hover:text-brand-orange transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-500">
              <li>info@pymeflow.es</li>
              <li>+34 609 83 69 04</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600">
          <p>© {new Date().getFullYear()} Hear-O. Todos los derechos reservados.</p>
          <p>Hecho por Pymeflow y ❤️ para el sector auditivo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;