import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { successCases } from '../seoContentExtra';

const SuccessCases: React.FC = () => (
  <section className="py-24 bg-slate-950 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Casos de uso semi-reales</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Situaciones donde Hear-O encaja</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Ejemplos basados en problemas habituales de centros auditivos: agenda, reactivación, cierre y venta de valor.
          </p>
        </div>
        <Link to="/sobre-hear-o" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-white transition-colors">
          Conocer el sistema <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {successCases.map(([title, profile, result, text]) => (
          <article key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{profile}</p>
            <div className="text-green-400 font-black text-xl mb-4">{result}</div>
            <p className="text-slate-300 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessCases;
