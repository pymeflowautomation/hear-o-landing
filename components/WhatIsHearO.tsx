import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { modules } from '../seoContent';
import Reveal from './Reveal';
import GlowBorder from './GlowBorder';

const WhatIsHearO: React.FC = () => (
  <section id="soluciones" className="py-24 bg-slate-950 px-4">
    <Reveal className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Qué es Hear-O</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Un Sistema IA personalizado para vender más audífonos y ahorrar gestión
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Hear-O conecta CRM, automatizaciones, marketing, calendario, anamnesis asistida y expertos IA. Puedes usar un módulo concreto o implantar el Full Pack con todo el ecosistema conectado.
          </p>
          <div className="space-y-3 text-slate-300 mb-8">
            <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> Capta y reactiva pacientes.</p>
            <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> Ordena citas, revisiones y renovaciones.</p>
            <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> Mejora la anamnesis y la conversión.</p>
            <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> Da soporte IA al equipo 24/7.</p>
          </div>
          <Link to="/software-centros-auditivos-hear-o" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-4 font-bold text-white hover:bg-orange-600 transition-colors">
            Ver Full Pack <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {modules.map(module => (
            <Link key={module.id} to={module.path} className={`neon-corner-subtle group bg-slate-900 border ${module.border} rounded-2xl p-6 hover:bg-slate-800 transition-colors`}>
              <GlowBorder subtle />
              <div className={`w-14 h-14 rounded-xl ${module.bg} ${module.color} flex items-center justify-center mb-5`}>
                <module.icon size={28} />
              </div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white">{module.name}</h3>
                <ArrowRight className={`${module.color} opacity-70 group-hover:translate-x-1 transition-transform shrink-0`} />
              </div>
              <div className={`text-sm font-bold ${module.color} mb-3`}>{module.eyebrow}</div>
              <p className="text-slate-400 leading-relaxed mb-5">{module.summary}</p>
              <span className="text-white font-bold underline decoration-slate-600 group-hover:decoration-white">
                Ver página del módulo
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default WhatIsHearO;
