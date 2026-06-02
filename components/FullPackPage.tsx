import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Gauge, TrendingUp, Users } from 'lucide-react';
import Button from './Button';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import SeoJsonLd from './SeoJsonLd';
import { FULL_PACK, modules, SITE_URL } from '../seoContent';

interface FullPackPageProps {
  onContact: () => void;
}

const FullPackPage: React.FC<FullPackPageProps> = ({ onContact }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hear-O Full Pack Lanzamiento',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${SITE_URL}/software-centros-auditivos-hear-o`,
    description: 'Software IA para centros auditivos con Marketing Studio, Asistente de Anamnesis, CRM & Calendario y Expertos IA.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '215',
      description: 'Cuota mensual con facturación anual. Implantación 1.990 EUR.'
    },
    provider: {
      '@type': 'Organization',
      name: 'Hear-O',
      url: SITE_URL
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32">
      <Helmet>
        <title>Software para Centros Auditivos con IA | Hear-O Full Pack</title>
        <meta name="description" content="Hear-O Full Pack: software IA para centros auditivos con marketing, anamnesis, CRM, calendario y expertos IA conectados." />
        <meta name="keywords" content="software para centros auditivos, programa para centros auditivos, aplicación para centros auditivos, software IA para centros auditivos" />
        <link rel="canonical" href="https://hear-o.es/software-centros-auditivos-hear-o" />
      </Helmet>
      <SeoJsonLd data={jsonLd} />
      <LandingHeader onContactClick={onContact} />

      <main>
        <section className="container mx-auto px-6 lg:px-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 items-center">
            <div>
              <div className="inline-flex bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full font-bold text-sm mb-6">
                Software IA para centros auditivos
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Todo el ecosistema Hear-O conectado en un unico sistema
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Hear-O Full Pack une los 4 módulos de la aplicación web para captar pacientes, organizar citas, mejorar la consulta y apoyar al equipo con IA especializada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onContact} size="lg" className="text-lg px-8">
                  Solicitar demo Full Pack
                  <ArrowRight className="ml-2" size={22} />
                </Button>
                <a href="#precio-full-pack" className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-lg font-bold text-slate-200 hover:border-white hover:text-white transition-colors">
                  Ver precio especial
                </a>
              </div>
            </div>

            <div id="precio-full-pack" className="bg-gradient-to-br from-brand-orange/25 to-blue-500/10 border border-brand-orange/40 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold">{FULL_PACK.name}</h2>
                <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-black">Ahorra 20%</span>
              </div>
              <div className="space-y-5 mb-8">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-300">Implantacion</span>
                  <div className="text-right">
                    <span className="block text-slate-500 line-through">{FULL_PACK.originalSetupPrice}</span>
                    <span className="text-3xl font-bold">{FULL_PACK.setupPrice}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Cuota</span>
                  <div className="text-right">
                    <span className="block text-slate-500 line-through">{FULL_PACK.originalMonthlyPrice}</span>
                    <span className="text-4xl font-bold text-green-400">{FULL_PACK.monthlyPrice}</span>
                    <span className="block text-sm text-slate-400">{FULL_PACK.billingNote}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-slate-200">
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Marketing Studio</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Asistente de Anamnesis</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> CRM & Calendario</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Expertos IA</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 mb-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">Los 4 modulos del sistema</h2>
              <p className="text-xl text-slate-400">Puedes contratar modulos sueltos, pero el mayor valor aparece cuando trabajan conectados.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {modules.map(module => (
                <Link key={module.id} to={module.path} className={`bg-slate-950 border ${module.border} rounded-2xl p-6 hover:bg-slate-800 transition-colors`}>
                  <div className={`w-14 h-14 rounded-xl ${module.bg} ${module.color} flex items-center justify-center mb-5`}>
                    <module.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{module.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{module.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <Gauge className="text-brand-orange mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-3">Amortizacion estimada</h3>
              <p className="text-5xl font-black text-white mb-2">{FULL_PACK.amortization}</p>
              <p className="text-slate-400">Con una venta extra al mes y un ahorro moderado de gestión.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <TrendingUp className="text-green-400 mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-3">ROI estimado</h3>
              <p className="text-5xl font-black text-green-400 mb-2">{FULL_PACK.firstYearRoi}</p>
              <p className="text-slate-400">Primer año con implantación y 12 cuotas incluidas.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <Users className="text-blue-400 mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-3">Caso semi-real</h3>
              <p className="text-slate-300 leading-relaxed">Centro independiente con base de datos antigua, agenda manual y baja comunicacion post-visita: el sistema recupera seguimiento, reduce llamadas y aumenta oportunidades.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 mb-24">
          <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Respuestas rapidas para Google e IA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['¿Qué es Hear-O?', 'Hear-O es una aplicación web modular con IA para centros auditivos. Ayuda a captar, organizar, vender y dar soporte al equipo.'],
                ['¿Qué módulos incluye Hear-O?', 'Incluye Marketing Studio, Asistente de Anamnesis, CRM & Calendario y Expertos IA.'],
                ['¿Cuánto cuesta el Full Pack?', 'El Full Pack Lanzamiento tiene una implantación de 1.990€ y una cuota de 215€/mes con facturación anual.'],
                ['¿Para qué tipo de centro sirve?', 'Para centros auditivos que quieren vender más audífonos, ahorrar gestión, recuperar pacientes y profesionalizar su seguimiento.']
              ].map(([question, answer]) => (
                <div key={question} className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">{question}</h3>
                  <p className="text-slate-400 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FullPackPage;
