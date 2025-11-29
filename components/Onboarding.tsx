import React from 'react';
import { Rocket, Headphones } from 'lucide-react';

const Onboarding: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
       {/* BG Decoration */}
       <div className="absolute -left-20 top-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">No es solo un Software, es un Sistema</h2>
          <div className="w-24 h-1.5 bg-brand-orange rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Text */}
          <div className="space-y-8">
            <p className="text-xl text-slate-300 leading-relaxed">
              Hear-O es un sistema de Automatizaciones diseñadas para Centros Auditivos que se personalizan y ajustan a las necesidades de cada centro. Entendemos que cada Centro Auditivo tiene sus flujos de trabajo únicos.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Por eso, Hear-O <span className="text-brand-blue font-bold">se implanta a medida</span>. No te entregamos una clave de acceso y "búscate la vida". Nuestro equipo de ingeniería personaliza los flujos de IA para que se adapten a tu forma de trabajar, garantizando que la tecnología trabaje para ti, y no al revés.
            </p>
            <div className="p-6 bg-slate-800/50 border-l-4 border-brand-orange rounded-r-lg">
              <p className="text-slate-400 text-lg italic">"La tecnología sin estrategia es solo gasto. Nosotros ponemos la estrategia y la tecnología."</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-8">
            
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 flex gap-6 hover:border-brand-blue transition-colors duration-300">
              <div className="bg-brand-blue/20 p-4 rounded-lg h-fit">
                <Headphones className="text-brand-blue" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Onboarding Incluido</h3>
                <ul className="space-y-3 text-slate-400 text-base">
                  <li className="flex items-center gap-3">• 1 mes de ajustes y pruebas intensivas</li>
                  <li className="flex items-center gap-3">• 2 sesiones de formación personalizadas (2h c/u)</li>
                  <li className="flex items-center gap-3">• Videos y Tutoriales</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 flex gap-6 hover:border-brand-orange transition-colors duration-300">
              <div className="bg-brand-orange/20 p-4 rounded-lg h-fit">
                <Rocket className="text-brand-orange" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Setup Rápido & Migración</h3>
                <ul className="space-y-3 text-slate-400 text-base">
                  <li className="flex items-center gap-3">✓ Implementación completa en 30 días</li>
                  <li className="flex items-center gap-3">✓ Soporte dedicado durante el proceso</li>
                  <li className="flex items-center gap-3">✓ Posibilidad de cargar tu base de datos.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Onboarding;