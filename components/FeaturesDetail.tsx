import React from 'react';
import { Target, Clock, MessageSquare, Check } from 'lucide-react';

const FeaturesDetail: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-orange">Hear-O:</span><br />Inteligencia Artificial y Automatizaciones para Centros Auditivos
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            No es solo un software. Es tener un comercial experto que nunca falla, un gestor que nunca duerme y un equipo de marketing trabajando 24/7. Todo en uno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1: Convierte Más */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-green-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-green-400" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Convierte Más</h3>
            <p className="text-slate-400 text-lg mb-6 min-h-[72px] leading-relaxed">
              Asistente IA que te ayuda en la anamnesis con argumentos comerciales y emocionales, selecciona los 2-3 audífonos perfectos y genera dossieres profesionales que cierran ventas.
            </p>
            <ul className="space-y-4">
              {[
                "Argumentos Comerciales con IA",
                "Recomendaciones personalizadas",
                "Dossieres profesionales auto-generados"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-1 shrink-0" />
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Gestiona Todo */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group relative">
             {/* Highlight effect */}
             <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="text-blue-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Gestiona y Fideliza</h3>
                <p className="text-slate-400 text-lg mb-6 min-h-[72px] leading-relaxed">
                  CRM inteligente con recordatorios Automáticos vía email y Whatsapp de citas, revisiones, periodos de prueba. Envíos de promociones, cross-seling y up-selling
                </p>
                <ul className="space-y-4">
                  {[
                    "Recordatorios automáticos",
                    "Auto-reserva de citas",
                    "WhatsApp IA 24/7"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-blue-400 mt-1 shrink-0" />
                      <span className="text-slate-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Card 3: Capta Nuevos */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-purple-400" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Capta Nuevos</h3>
            <p className="text-slate-400 text-lg mb-6 min-h-[72px] leading-relaxed">
              Estrategia de captación de leads con Auto-test para el centro, web y RRSS, secuencias de email marketing  y recuperación de pacientes perdidos.
            </p>
            <ul className="space-y-4">
              {[
                "Auto-test Auditivo integrado",
                "Recuperación de Clientes Perdidos",
                "Marketing Automático"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-purple-400 mt-1 shrink-0" />
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesDetail;