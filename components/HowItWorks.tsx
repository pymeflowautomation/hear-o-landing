
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, BrainCircuit, FileCheck, ArrowRight, Mail, Users, Sparkles, ArrowDown, Calendar } from 'lucide-react';
import Button from './Button';
import GlowBorder from './GlowBorder';

interface HowItWorksProps {
  onNavigate: (view: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center']
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [125, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [160, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [195, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 1], [0.25, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.42, 1], [0.2, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.54, 1], [0.18, 1, 1]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.66, 1], [0.15, 1, 1]);

  const scrollToPricing = () => {
    const element = document.getElementById('precios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="en-accion" ref={sectionRef} className="py-24 bg-[#020617] relative overflow-hidden">
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
          <motion.div style={{ y: y1, opacity: opacity1 }} className="relative group h-full block">
            <div className="neon-corner-subtle card-accent-blue h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-blue/50 transition-all duration-300 hover:-translate-y-1">
              <GlowBorder subtle />
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
                  className="flex-1 py-2.5 px-2 rounded-lg bg-white text-xs font-black text-slate-950 hover:bg-blue-100 transition-colors border border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                >
                  Ver precio
                </button>
                <Link 
                  to="/marketing-automatico-centros-auditivos"
                  className="flex-1 py-2.5 px-2 rounded-lg bg-brand-blue text-xs font-black text-white hover:bg-blue-600 transition-colors border border-blue-300/50 flex items-center justify-center gap-1 shadow-[0_0_20px_rgba(59,130,246,0.34)]"
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
          </motion.div>

          {/* Solution 2: CRM & Calendario */}
          <motion.div style={{ y: y2, opacity: opacity2 }} className="relative group h-full">
            <div className="neon-corner-subtle card-accent-green h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
              <GlowBorder subtle />
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5 text-green-500 group-hover:scale-110 transition-transform duration-300">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">CRM & Calendario</h3>
              <div className="text-green-500 font-bold text-xs uppercase tracking-wider mb-4">Organiza y Gestiona</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tu agenda bajo control. Recordatorios automáticos y gestión IA de citas. Reduce tareas administrativas y el absentismo.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Recordatorios auto
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Sincronización total
                </li>
              </ul>
              <div className="flex gap-2 w-full mt-auto">
                <button 
                  onClick={scrollToPricing}
                  className="flex-1 py-2.5 px-2 rounded-lg bg-white text-xs font-black text-slate-950 hover:bg-green-100 transition-colors border border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                >
                  Ver precio
                </button>
                <Link 
                  to="/crm-calendario-centros-auditivos"
                  className="flex-1 py-2.5 px-2 rounded-lg bg-green-500 text-xs font-black text-slate-950 hover:bg-green-400 transition-colors border border-green-200/60 flex items-center justify-center gap-1 shadow-[0_0_20px_rgba(34,197,94,0.34)]"
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
          </motion.div>

          {/* Solution 3: Anamnesis Assistant */}
          <motion.div style={{ y: y3, opacity: opacity3 }} className="relative group h-full block">
            <div className="neon-corner-subtle card-accent-orange h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1 relative z-10 bg-[#020617]">
              <GlowBorder subtle />
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
                  className="flex-1 py-2.5 px-2 rounded-lg bg-white text-xs font-black text-slate-950 hover:bg-orange-100 transition-colors border border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                >
                  Ver precio
                </button>
                <Link 
                  to="/software-anamnesis-vender-mas-audifonos"
                  className="flex-1 py-2.5 px-2 rounded-lg bg-brand-orange text-xs font-black text-white hover:bg-orange-600 transition-colors border border-orange-200/50 flex items-center justify-center gap-1 shadow-[0_0_20px_rgba(249,115,22,0.38)]"
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
          </motion.div>

          {/* Solution 4: Expertos IA */}
          <motion.div style={{ y: y4, opacity: opacity4 }} className="relative group h-full">
            <div className="neon-corner-subtle card-accent-purple h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <GlowBorder subtle />
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expertos IA</h3>
              <div className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-4">Optimiza y Resuelve</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Tu consejo de sabios 24/7. Resuelve dudas clínicas complejas, problemas técnicos y estrategias de negocio al instante.
              </p>
              <ul className="text-left space-y-2 mt-auto w-full mb-6">
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Consultoría clínica
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Soporte técnico
                </li>
              </ul>
              <div className="flex gap-2 w-full mt-auto">
                <button 
                  onClick={scrollToPricing}
                  className="flex-1 py-2.5 px-2 rounded-lg bg-white text-xs font-black text-slate-950 hover:bg-purple-100 transition-colors border border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                >
                  Ver precio
                </button>
                <Link 
                  to="/expertos-ia-audiologia"
                  className="flex-1 py-2.5 px-2 rounded-lg bg-purple-500 text-xs font-black text-white hover:bg-purple-600 transition-colors border border-purple-200/50 flex items-center justify-center gap-1 shadow-[0_0_20px_rgba(168,85,247,0.36)]"
                >
                  Ver Info <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToPricing} size="lg" className="text-lg px-10 py-4 shadow-xl shadow-brand-blue/20">
              Ver Soluciones y Precios <ArrowRight className="ml-2" />
            </Button>
            <Link to="/software-centros-auditivos-hear-o" className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-10 py-4 text-lg font-bold text-slate-200 hover:border-white hover:text-white transition-colors">
              Ver Full Pack
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
