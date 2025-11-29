import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-[#020617] relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Stylized UI Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-orange opacity-20 blur-2xl rounded-full"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for Interface Screenshot */}
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center group overflow-hidden">
                 <img 
                   src="https://pymeflow.es/wp-content/uploads/2025/11/imagen-hear-o.jpg" 
                   alt="Hear-O Dashboard Interface" 
                   className="object-cover w-full h-full opacity-50 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-slate-950/80 p-8 rounded-xl border border-slate-700 backdrop-blur-md">
                        <p className="text-brand-orange font-mono text-base mb-4">AI ANALYSIS COMPLETE</p>
                        <div className="space-y-4">
                            <div className="flex justify-between text-base w-72 text-slate-300">
                                <span>Citas Optimizadas</span>
                                <span className="text-green-400">+120%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[85%]"></div>
                            </div>
                            <div className="flex justify-between text-base w-72 text-slate-300 mt-2">
                                <span>Tasa Conversión</span>
                                <span className="text-brand-blue">+65%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                                <div className="bg-brand-blue h-full w-[70%]"></div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              La Tecnología que tu Centro Auditivo necesita
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Hear-O no es solo un software, es una solución de IA para centros auditivos diseñada por profesionales del sector. Es tu nuevo director comercial virtual. Trabaja 24/7 analizando datos, contactando pacientes y organizando tu agenda para que tú solo te dediques a vender y adaptar más audífonos.
            </p>

            <ul className="space-y-5">
              {[
                "Automatización de recordatorios por WhatsApp y Email",
                "CRM inteligente que detecta oportunidades de venta",
                "Argumentarios de venta asistidos por IA en tiempo real",
                "Reactíva tu base de datos de pacientes dormidos"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                  <span className="text-slate-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;