import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import Pricing from './Pricing';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import { FULL_PACK } from '../seoContent';
import { MARKETING_ENTRY_OFFER, PRICING_PLANS } from '../constants';

interface PricingPageProps {
  onContact: () => void;
  onNavigate: (view: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onContact, onNavigate }) => {
  const marketingPlan = PRICING_PLANS.find(plan => plan.id === 'marketing-studio');
  const otherPlans = PRICING_PLANS.filter(plan => plan.id !== 'marketing-studio');

  return (
  <div className="min-h-screen bg-slate-950 text-white pt-24">
    <Helmet>
      <title>Precios Hear-O | Módulos y Full Pack para Centros Auditivos</title>
      <meta name="description" content="Precios de Hear-O: Marketing Studio para reactivar pacientes y módulos para centros auditivos con Anamnesis, CRM, Calendario y Expertos IA." />
      <link rel="canonical" href="https://hear-o.es/precios" />
    </Helmet>
    <LandingHeader onContactClick={onContact} />
    <main>
      <section className="container mx-auto px-6 lg:px-20 pt-20 pb-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Pricing Hear-O</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empieza por Marketing Studio</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Una entrada sencilla para activar tu base de datos, recuperar pacientes y captar leads con compromiso mínimo de 3 meses.
          </p>
        </div>

        {marketingPlan && (
          <div className="mb-10 rounded-3xl border border-blue-400/50 bg-gradient-to-br from-blue-500/20 via-slate-900 to-brand-orange/10 p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-center">
              <div>
                <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-3">Plan de entrada recomendado</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{MARKETING_ENTRY_OFFER.name}</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Tu CRM guarda contactos. Hear-O Marketing Studio los activa con campañas, reactivación y captación.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-slate-200">
                  {['Reactivar pacientes antiguos', 'Mantener comunicación constante', 'Captar leads con Prueba Auditiva Online', 'Probar 90 días con mínimo 3 meses'].map(item => (
                    <div key={item} className="flex gap-2 rounded-xl bg-slate-950/50 p-3">
                      <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6">
                <div className="flex justify-between border-b border-slate-800 pb-4 mb-4">
                  <span className="text-slate-400">{MARKETING_ENTRY_OFFER.setupLabel}</span>
                  <span className="text-3xl font-bold text-white">{MARKETING_ENTRY_OFFER.setupPrice}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-slate-400">Cuota</span>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-green-400">{MARKETING_ENTRY_OFFER.monthlyPrice}</span>
                    <span className="block text-xs text-slate-500">{MARKETING_ENTRY_OFFER.billingNote}</span>
                  </div>
                </div>
                <button onClick={onContact} className="w-full rounded-xl bg-white px-5 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
                  {MARKETING_ENTRY_OFFER.cta}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-5 text-white">Opción</th>
                <th className="p-5 text-white">Incluye</th>
                <th className="p-5 text-white">Activación / implantación</th>
                <th className="p-5 text-white">Cuota</th>
                <th className="p-5 text-white">Ideal para</th>
              </tr>
            </thead>
            <tbody>
              {marketingPlan && (
                <tr className="border-b border-blue-400/30 bg-blue-500/10">
                  <td className="p-5 font-bold text-blue-300">{marketingPlan.name}</td>
                  <td className="p-5 text-slate-200">{MARKETING_ENTRY_OFFER.duration} de Marketing Studio</td>
                  <td className="p-5 text-white font-bold">{marketingPlan.setupPrice}</td>
                  <td className="p-5 text-green-400 font-bold">{marketingPlan.monthlyPrice}/mes</td>
                  <td className="p-5 text-slate-300">Centros que quieren activar pacientes y leads</td>
                </tr>
              )}
              {otherPlans.map(plan => (
                <tr key={plan.id} className="border-b border-slate-800 last:border-b-0">
                  <td className="p-5 font-bold text-white">{plan.name}</td>
                  <td className="p-5 text-slate-300">Módulo individual</td>
                  <td className="p-5 text-slate-300">{plan.setupPrice}</td>
                  <td className="p-5 text-slate-300">{plan.annualMonthlyPrice}/mes</td>
                  <td className="p-5 text-slate-400">{plan.idealFor[0]}</td>
                </tr>
              ))}
              <tr className="border-b border-brand-orange/30 bg-brand-orange/10">
                <td className="p-5 font-bold text-brand-orange">{FULL_PACK.name}</td>
                <td className="p-5 text-slate-200">Los 4 módulos conectados</td>
                <td className="p-5 text-white font-bold">{FULL_PACK.setupPrice}</td>
                <td className="p-5 text-green-400 font-bold">{FULL_PACK.monthlyPrice}/mes</td>
                <td className="p-5 text-slate-300">Evolución para sistema completo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Pricing onContactClick={onContact} onNavigate={onNavigate} />
    </main>
    <Footer />
  </div>
  );
};

export default PricingPage;
