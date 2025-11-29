import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users, Zap, MessageSquare, FileSearch, FileText, Mail, Calendar, BarChart3 } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onCtaClick: () => void;
  onRoiClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onRoiClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black z-0" />
      
      {/* Animated Glow Orb */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]"
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]"
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-xl md:text-2xl font-medium text-blue-400 mb-4 tracking-wide uppercase">
                Automatiza tu Centro Auditivo con IA y vende más audífonos
              </h1>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6">
                Aumenta tus ventas de audífonos un <span className="text-brand-orange">60%</span> y ahorra <span className="text-brand-blue">30 h/mes</span> en gestión de citas.
              </h2>
            </motion.div>

            {/* Stats Box */}
            <motion.div 
              className="glass-panel p-6 rounded-xl border-l-4 border-brand-orange bg-slate-900/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-base md:text-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <TrendingUp className="text-green-400" size={24} />
                  </div>
                  <span className="text-slate-200 font-medium">+60% Conversión</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Clock className="text-blue-400" size={24} />
                  </div>
                  <span className="text-slate-200 font-medium">-80% horas gestión</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Users className="text-brand-orange" size={24} />
                  </div>
                  <span className="text-slate-200 font-medium">+40% pacientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Zap className="text-purple-400" size={24} />
                  </div>
                  <span className="text-slate-200 font-medium">Amortizado en 4 meses</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button onClick={onCtaClick} size="lg" className="group shadow-[0_0_20px_rgba(249,115,22,0.4)] text-lg px-10">
                Me interesa
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </Button>
              <Button variant="outline" size="lg" onClick={onRoiClick} className="border-slate-600 hover:border-white text-lg px-10">
                Calcular mi ROI
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Assistant Dashboard Card */}
          <div className="relative lg:h-[650px] w-full flex items-center justify-center perspective-1000">
             <motion.div 
               initial={{ opacity: 0, rotateY: -10, scale: 0.9 }}
               animate={{ opacity: 1, rotateY: 0, scale: 1 }}
               transition={{ duration: 0.8, type: "spring" }}
               className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden z-10"
             >
                {/* Header of the Card */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-700 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-indigo-600 flex items-center justify-center shadow-lg">
                    <Zap className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-none">Asistente IA Hear-O</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-sm font-medium uppercase tracking-wide">En acción</span>
                    </div>
                  </div>
                </div>

                {/* List Content */}
                <div className="p-6 space-y-5 pb-20 md:pb-6"> {/* Added padding bottom on mobile to clear the floating tag */}
                  
                  {/* Item 1 */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex gap-4 hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="shrink-0 mt-1">
                       <div className="bg-green-500/20 p-2.5 rounded-lg">
                         <MessageSquare size={20} className="text-green-400" />
                       </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5">Ayudante Comercial</h4>
                      <p className="text-slate-400 text-base leading-relaxed">Te guía y ofrece argumentos comerciales en cada pregunta de la anamnesis.</p>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex gap-4 hover:bg-slate-800/60 transition-colors"
                  >
                     <div className="shrink-0 mt-1">
                       <div className="bg-blue-500/20 p-2.5 rounded-lg">
                         <FileSearch size={20} className="text-blue-400" />
                       </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5">Análisis de Soluciones</h4>
                      <p className="text-slate-400 text-base leading-relaxed">Consulta tu Base de Datos y elige las 3 mejores opciones de audífonos.</p>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex gap-4 hover:bg-slate-800/60 transition-colors"
                  >
                     <div className="shrink-0 mt-1">
                       <div className="bg-purple-500/20 p-2.5 rounded-lg">
                         <FileText size={20} className="text-purple-400" />
                       </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5">Generación de Propuesta</h4>
                      <p className="text-slate-400 text-base leading-relaxed">PDF automático con el Diagnóstico, propuesta económica y Road Map.</p>
                    </div>
                  </motion.div>

                  {/* Item 4 */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex gap-4 hover:bg-slate-800/60 transition-colors"
                  >
                     <div className="shrink-0 mt-1">
                       <div className="bg-pink-500/20 p-2.5 rounded-lg">
                         <Mail size={20} className="text-pink-400" />
                       </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5">Email Marketing Completo</h4>
                      <p className="text-slate-400 text-base leading-relaxed">Onboarding, recordatorios y reactivación de pacientes perdidos.</p>
                    </div>
                  </motion.div>

                </div>
             </motion.div>

             {/* Floating Ticket 1 (Top Right) */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-2 top-24 md:-right-6 md:top-20 bg-slate-800 border border-slate-600 p-4 pr-6 rounded-lg shadow-xl z-20 flex items-center gap-4 backdrop-blur-md bg-slate-800/90"
             >
               <div className="bg-brand-blue/20 p-3 rounded-md">
                 <Calendar size={24} className="text-brand-blue"/>
               </div>
               <div>
                 <p className="text-sm text-slate-400">Recordatorio Enviado</p>
                 <p className="text-base font-bold text-white">Manuel López</p>
               </div>
             </motion.div>

             {/* Floating Ticket 2 (Bottom Left) - Adjusted for mobile */}
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -left-2 bottom-4 md:-left-6 md:bottom-32 bg-slate-800 border border-slate-600 p-4 pr-6 rounded-lg shadow-xl z-20 flex items-center gap-4 backdrop-blur-md bg-slate-800/90"
             >
               <div className="bg-green-500/20 p-3 rounded-md">
                 <BarChart3 size={24} className="text-green-400"/>
               </div>
               <div>
                  <p className="text-sm text-slate-400">4 ventas este mes</p>
                  <p className="text-xl font-bold text-green-400">+ 5.300€</p>
               </div>
             </motion.div>

             {/* Background Pulse Effect behind the card */}
             <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full -z-10 animate-pulse-slow transform scale-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;