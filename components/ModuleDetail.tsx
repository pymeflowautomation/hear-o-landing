import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import SeoJsonLd from './SeoJsonLd';
import Reveal from './Reveal';
import ZoomableImage from './ZoomableImage';
import { PRICING_PLANS } from '../constants';
import { FULL_PACK, modulePages, modules, SITE_URL } from '../seoContent';

interface ModuleDetailProps {
  moduleId: keyof typeof modulePages;
  onContact: () => void;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ moduleId, onContact }) => {
  const page = modulePages[moduleId];
  const module = modules.find(item => item.id === moduleId);
  const pricingId = moduleId === 'crm-calendario' ? 'calendar-smart' : 'expertos-ia';
  const plan = PRICING_PLANS.find(item => item.id === pricingId);
  const supportImages = moduleId === 'crm-calendario'
    ? [
        {
          src: '/images/recordatorios_automaticos_citas_centro_auditivo.webp',
          alt: 'Recordatorios automaticos de citas en un centro auditivo',
          title: 'Recordatorios automaticos',
          text: 'Avisos para reducir olvidos, huecos en agenda y llamadas manuales.'
        },
        {
          src: '/images/gestion_citas_recordatosios_con_calendario_centro_auditivo.webp',
          alt: 'Gestion de citas y calendario para centro auditivo',
          title: 'Calendario conectado',
          text: 'Citas, revisiones y renovaciones organizadas en un flujo unico.'
        }
      ]
    : [
        {
          src: '/images/expertos_ia_hear-o.webp',
          alt: 'Expertos IA de Hear-O para audiología',
          title: 'Soporte experto 24/7',
          text: 'Apoyo inmediato para dudas clinicas, tecnicas, comerciales y de marketing.'
        }
      ];

  if (!module) {
    return null;
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: `Hear-O ${module.name}`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: page.canonical,
      description: page.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock'
      },
      provider: {
        '@type': 'Organization',
        name: 'Hear-O',
        url: SITE_URL
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer
        }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32">
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={module.keywords.join(', ')} />
        <link rel="canonical" href={page.canonical} />
      </Helmet>
      <SeoJsonLd data={jsonLd} />
      <LandingHeader onContactClick={onContact} />

      <main>
        <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 ${module.bg} ${module.color} px-4 py-2 rounded-full font-bold text-sm mb-6`}>
                <module.icon size={18} />
                {module.eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.h1}</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">{page.lead}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onContact} size="lg" className="text-lg px-8">
                  {page.cta}
                  <ArrowRight className="ml-2" size={22} />
                </Button>
                <Link
                  to="/software-centros-auditivos-hear-o"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-lg font-bold text-slate-200 hover:border-white hover:text-white transition-colors"
                >
                  Ver Full Pack
                </Link>
              </div>
            </div>
            <div className={`rounded-3xl border ${module.border} bg-slate-900/70 p-3 shadow-2xl`}>
              <ZoomableImage src={page.image} alt={page.imageAlt} frameClassName="rounded-2xl" className="min-h-[320px]" />
            </div>
          </div>
        </Reveal>

        <Reveal className="bg-slate-900 py-20 mb-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">Qué resuelve este módulo</h2>
              <p className="text-xl text-slate-400">{page.proof}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.sections.map(section => (
                <div key={section.title} className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
                  <div className={`w-14 h-14 rounded-xl ${module.bg} ${module.color} flex items-center justify-center mb-6`}>
                    <section.icon size={30} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
          <div className={`grid grid-cols-1 ${supportImages.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-[1fr_0.9fr]'} gap-8`}>
            {supportImages.map(item => (
              <div key={item.src} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <ZoomableImage src={item.src} alt={item.alt} frameClassName="rounded-none" className="h-72" />
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6">Cómo encaja dentro de Hear-O</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {module.name} funciona como módulo independiente, pero gana valor cuando trabaja junto al resto del ecosistema Hear-O. Marketing activa la demanda, CRM & Calendario ordena el seguimiento, Anamnesis mejora el cierre y Expertos IA ayuda al equipo en el día a día.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map(item => (
                  <Link key={item.id} to={item.path} className={`border ${item.border} bg-slate-950 rounded-xl p-4 hover:bg-slate-800 transition-colors`}>
                    <div className={`flex items-center gap-3 font-bold ${item.color}`}>
                      <item.icon size={20} />
                      {item.name}
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/30 rounded-3xl p-8 sticky top-28">
              {plan && (
                <div className="mb-8 rounded-2xl bg-slate-950/70 border border-slate-700 p-5">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Precio del módulo</div>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">Implantacion</span>
                      <span className="font-bold text-white">{plan.setupPrice}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">Mantenimiento</span>
                      <span className="font-bold text-green-400">{plan.annualMonthlyPrice}/mes</span>
                    </div>
                    <p className="text-xs text-slate-500">Precio con facturación anual. También disponible contratación mensual.</p>
                  </div>
                </div>
              )}
              <div className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-3">Oferta recomendada</div>
              <h3 className="text-3xl font-bold mb-4">{FULL_PACK.name}</h3>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Los 4 modulos conectados</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Implantacion {FULL_PACK.setupPrice}</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> {FULL_PACK.monthlyPrice}/mes con facturación anual</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Amortizacion estimada: {FULL_PACK.amortization}</li>
              </ul>
              <Link to="/software-centros-auditivos-hear-o" className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
                Ver oferta Full Pack
              </Link>
            </aside>
          </div>
        </Reveal>

        <section className="container mx-auto px-6 lg:px-20 mb-24 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-5">
            {page.faqs.map(([question, answer]) => (
              <div key={question} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">{question}</h3>
                <p className="text-slate-400 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ModuleDetail;
