import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from './Pricing';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import { FULL_PACK } from '../seoContent';
import { PRICING_PLANS } from '../constants';

interface PricingPageProps {
  onContact: () => void;
  onNavigate: (view: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onContact, onNavigate }) => (
  <div className="min-h-screen bg-slate-950 text-white pt-24">
    <Helmet>
      <title>Precios Hear-O | Módulos y Full Pack para Centros Auditivos</title>
      <meta name="description" content="Precios de Hear-O: módulos individuales y Full Pack para centros auditivos con Marketing, Anamnesis, CRM, Calendario y Expertos IA." />
      <link rel="canonical" href="https://hear-o.es/precios" />
    </Helmet>
    <LandingHeader onContactClick={onContact} />
    <main>
      <section className="container mx-auto px-6 lg:px-20 pt-20 pb-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Pricing Hear-O</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Precios claros por módulo o Full Pack</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Compara cada módulo y decide si prefieres empezar por una solución concreta o implantar todo el ecosistema.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-5 text-white">Opcion</th>
                <th className="p-5 text-white">Incluye</th>
                <th className="p-5 text-white">Implantacion</th>
                <th className="p-5 text-white">Cuota anualizada</th>
                <th className="p-5 text-white">Ideal para</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-orange/30 bg-brand-orange/10">
                <td className="p-5 font-bold text-brand-orange">{FULL_PACK.name}</td>
                <td className="p-5 text-slate-200">Los 4 modulos conectados</td>
                <td className="p-5 text-white font-bold">{FULL_PACK.setupPrice}</td>
                <td className="p-5 text-green-400 font-bold">{FULL_PACK.monthlyPrice}/mes</td>
                <td className="p-5 text-slate-300">Centros que quieren sistema completo</td>
              </tr>
              {PRICING_PLANS.map(plan => (
                <tr key={plan.id} className="border-b border-slate-800 last:border-b-0">
                  <td className="p-5 font-bold text-white">{plan.name}</td>
                  <td className="p-5 text-slate-300">Modulo individual</td>
                  <td className="p-5 text-slate-300">{plan.setupPrice}</td>
                  <td className="p-5 text-slate-300">{plan.annualMonthlyPrice}/mes</td>
                  <td className="p-5 text-slate-400">{plan.idealFor[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Pricing onContactClick={onContact} onNavigate={onNavigate} />
    </main>
    <Footer />
  </div>
);

export default PricingPage;
