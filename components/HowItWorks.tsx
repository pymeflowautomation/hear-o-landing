
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, BrainCircuit, FileCheck, ArrowRight, Mail, Users, Sparkles, ArrowDown, Calendar } from 'lucide-react';
import Button from './Button';

interface HowItWorksProps {
  onNavigate: (view: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const scrollToPricing = () => {
    const element = document.getElementById('precios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="en-accion" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Cómo <span className="text-brand-orange">vender más audífonos</span> con las Soluciones Hear-O
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Un ecosistema completo diseñado para cubrir cada etapa del ciclo de vida del paciente: desde que no te conoce hasta que se convierte en tu mejor prescriptor.
          </p>
        </div>

        {/* Ecosystem Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-[1400px] mx-auto mb-16">
          
          {/* Solution 1: Marketing Studio */}
          <div className="relative group h-full block">
            <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Marketing Studio</h3>
              <div className="text-brand-blue font-bold text-xs uppercase tracking-wider mb-4">Capta y Retiene</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Automatiza tu comunicación. Reactiva pacientes dormidos, capta nuevos leads y mantén tu agenda llena sin esfuerzo manual.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Campañas automáticas
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Reactivación de BBDD
                </li>
              </ul>
              
              <div className="flex gap-2 w-full mt-auto">
                <button 
                  onClick={scrollToPricing}
                  className="flex-1 py-2 px-2 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                >
                  Ver precio
                </button>
                <Link 
                  to="/marketing-automatico-centros-auditivos"
                  className="flex-1 py-2 px-2 rounded-lg bg-brand-blue/10 text-xs font-medium text-brand-blue hover:bg-brand-blue/20 transition-colors border border-brand-blue/20 flex items-center justify-center gap-1"
                >
                  Ver Info <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            
            {/* Connector Arrow (Desktop) */}
            <div className="hidden lg:flex absolute top-1/2 -right-5 z-20 text-slate-600 transform -translate-y-1/2">
              <ArrowRight size={24} />
            </div>
            {/* Connector Arrow (Mobile/Tablet) */}
            <div className="flex lg:hidden absolute -bottom-6 left-1/2 z-20 text-slate-600 transform -translate-x-1/2">
              <ArrowDown size={24} />
            </div>
          </div>

          {/* Solution 2: Calendario (NEW) */}
          <div className="relative group h-full">
            <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5 text-green-500 group-hover:scale-110 transition-transform duration-300">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Calendario</h3>
              <div className="text-green-500 font-bold text-xs uppercase tracking-wider mb-4">Organiza y Gestiona</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tu agenda bajo control. Recordatorios automáticos y gestión IA de citas. Reduce tareas administrativas y el absentismo.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Recordatorios auto
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Sincronización total
                </li>
              </ul>
            </div>
            
            {/* Connector Arrow (Desktop) */}
            <div className="hidden lg:flex absolute top-1/2 -right-5 z-20 text-slate-600 transform -translate-y-1/2">
              <ArrowRight size={24} />
            </div>
            {/* Connector Arrow (Mobile/Tablet) */}
            <div className="flex lg:hidden absolute -bottom-6 left-1/2 z-20 text-slate-600 transform -translate-x-1/2">
              <ArrowDown size={24} />
            </div>
          </div>

          {/* Solution 3: Anamnesis Assistant */}
          <div className="relative group h-full block">
            <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1 relative z-10 bg-[#020617]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap">
                CORE DEL SISTEMA
              </div>
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anamnesis</h3>
              <div className="text-brand-orange font-bold text-xs uppercase tracking-wider mb-4">Convence y Vende</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Transforma la consulta. Guía la anamnesis, proyecta profesionalidad y genera informes que justifican el valor de tus audífonos.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Experiencia visual WOW
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Cierre asistido
                </li>
              </ul>
              
              <div className="flex gap-2 w-full mt-auto">
                <button 
                  onClick={scrollToPricing}
                  className="flex-1 py-2 px-2 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                >
                  Ver precio
                </button>
                <Link 
                  to="/software-anamnesis-vender-mas-audifonos"
                  className="flex-1 py-2 px-2 rounded-lg bg-brand-orange/10 text-xs font-medium text-brand-orange hover:bg-brand-orange/20 transition-colors border border-brand-orange/20 flex items-center justify-center gap-1"
                >
                  Ver Info <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Connector Arrow (Desktop) */}
            <div className="hidden lg:flex absolute top-1/2 -right-5 z-20 text-slate-600 transform -translate-y-1/2">
              <ArrowRight size={24} />
            </div>
            {/* Connector Arrow (Mobile/Tablet) */}
            <div className="flex lg:hidden absolute -bottom-6 left-1/2 z-20 text-slate-600 transform -translate-x-1/2">
              <ArrowDown size={24} />
            </div>
          </div>

          {/* Solution 4: Expertos IA */}
          <div className="relative group h-full">
            <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expertos IA</h3>
              <div className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-4">Optimiza y Resuelve</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tu consejo de sabios 24/7. Resuelve dudas clínicas complejas, problemas técnicos y estrategias de negocio al instante.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Consultoría clínica
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Soporte técnico
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Button onClick={scrollToPricing} size="lg" className="text-lg px-10 py-4 shadow-xl shadow-brand-blue/20">
            Ver Soluciones y Precios <ArrowRight className="ml-2" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
