import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { FULL_PACK } from '../seoContent';
import Reveal from './Reveal';
import GlowBorder from './GlowBorder';

const planAccentClass: Record<string, string> = {
  'marketing-studio': 'card-accent-blue border-blue-400/50',
  'anamnesis-assistant': 'card-accent-orange border-orange-400/50',
  'calendar-smart': 'card-accent-green border-green-400/50',
  'expertos-ia': 'card-accent-purple border-purple-400/50'
};

const PricingSummary: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-slate-900 relative">
      <Reveal className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Soluciones y Precios</h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Empieza por un módulo o implanta todo Hear-O con el Full Pack recomendado.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-10">
          <div className="featured-pack-glow neon-corner relative overflow-visible rounded-3xl border border-brand-orange/60 bg-gradient-to-br from-brand-orange/25 via-slate-800 to-blue-500/15 p-8 lg:p-10 shadow-2xl">
            <GlowBorder />
            <div className="absolute right-5 top-5 z-20 rounded-full bg-red-500 px-4 py-2 text-sm font-black text-white shadow-[0_0_26px_rgba(239,68,68,0.65)] ring-2 ring-white/30">Ahorra 20%</div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-center">
              <div>
                <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-3">Oferta recomendada</div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{FULL_PACK.name}</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-6">
                  Los 4 módulos conectados: Marketing Studio, Asistente de Anamnesis, CRM & Calendario y Expertos IA.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200">
                  {['Captacion y marketing', 'Agenda y pacientes', 'Consulta y cierre', 'Soporte IA 24/7'].map(item => (
                    <li key={item} className="flex gap-2 rounded-xl bg-slate-950/40 p-3">
                      <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-accent-orange bg-slate-950/70 rounded-2xl border border-orange-400/40 p-6">
                <div className="flex justify-between border-b border-slate-800 pb-4 mb-4">
                  <span className="text-slate-400">Implantación</span>
                  <div className="text-right">
                    <span className="block text-red-400 line-through">{FULL_PACK.originalSetupPrice}</span>
                    <span className="text-3xl font-bold text-white">{FULL_PACK.setupPrice}</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-slate-400">Cuota</span>
                  <div className="text-right">
                    <span className="block text-red-400 line-through">{FULL_PACK.originalMonthlyPrice}</span>
                    <span className="text-4xl font-bold text-green-400">{FULL_PACK.monthlyPrice}</span>
                    <span className="block text-xs text-slate-500">/mes facturado anual</span>
                  </div>
                </div>
                <Link to="/software-centros-auditivos-hear-o" className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
                  Ver Full Pack
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
          {PRICING_PLANS.map(plan => (
            <div key={plan.id} className={`bg-slate-950 border rounded-2xl p-5 ${planAccentClass[plan.id] ?? 'border-slate-700'}`}>
              <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{plan.description}</p>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="block text-xs text-slate-500">Desde</span>
                  <span className="text-2xl font-bold text-white">{plan.annualMonthlyPrice}</span>
                  <span className="text-slate-500 text-xs">/mes</span>
                </div>
                <span className="text-sm text-slate-400">{plan.setupPrice} setup</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/precios" className="inline-flex rounded-xl bg-brand-blue px-8 py-4 text-lg font-bold text-white hover:bg-blue-600 transition-colors">
            Ver precios completos
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default PricingSummary;
