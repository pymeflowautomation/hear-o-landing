import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import PainPoints from './PainPoints';
import HowItWorks from './HowItWorks';
import FeaturesDetail from './FeaturesDetail';
import Solution from './Solution';
import RoiCalculator from './RoiCalculator';
import PricingSummary from './PricingSummary';
import WhatIsHearO from './WhatIsHearO';
import ResourcesSection from './ResourcesSection';
import SuccessCases from './SuccessCases';
import Onboarding from './Onboarding';
import FAQ from './FAQ';
import Footer from './Footer';
import Button from './Button';
import CookieNotice from './CookieNotice';
import SeoJsonLd from './SeoJsonLd';
import { guidePages, SITE_URL } from '../seoContent';
import { newGuidePages } from '../seoContentExtra';
import { MARKETING_ENTRY_OFFER } from '../constants';
import { ArrowRight, ArrowUpRight, ClipboardList, Ear } from 'lucide-react';

interface HomeProps {
  onContactClick: () => void;
  onNavigate: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick, onNavigate }) => {
  const openCalendar = () => {
    window.open('https://calendar.app.google/ZRW5xV73FThbgKzi8', '_blank');
  };

  const scrollToRoi = () => {
    const element = document.getElementById('calculadora');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-orange/30 selection:text-white">
      <Helmet>
        <title>Sistema IA para Centros Auditivos | Hear-O</title>
        <meta name="description" content="Hear-O es un Sistema IA para centros auditivos: CRM, marketing, calendario, anamnesis asistida y automatizaciones para vender más audífonos y ahorrar gestión." />
        <link rel="canonical" href="https://hear-o.es/" />
      </Helmet>
      <SeoJsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Hear-O',
          url: SITE_URL,
          logo: `${SITE_URL}/images/logo-hear-o-naranja.webp`,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'info@hear-o.es',
            telephone: '+34 609 83 69 04',
            areaServed: 'ES'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Hear-O Marketing Studio',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: `${SITE_URL}/marketing-automatico-centros-auditivos`,
          description: 'Marketing automático para centros auditivos: reactivación de pacientes, comunicación constante y captación de leads.',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '79',
            description: `${MARKETING_ENTRY_OFFER.setupPrice} de activación y ${MARKETING_ENTRY_OFFER.monthlyPrice}/mes con compromiso mínimo de 3 meses.`
          }
        }
      ]} />
      <Header onContactClick={onContactClick} />
      
      <main>
        <Hero onCtaClick={onContactClick} onRoiClick={scrollToRoi} onNavigate={onNavigate} />
        <WhatIsHearO />
        <PainPoints />
        <HowItWorks onNavigate={onNavigate} />
        <section className="relative overflow-hidden border-y border-slate-800 bg-[#07111f] px-4 py-20 md:py-24">
          <div className="pointer-events-none absolute -right-36 -top-40 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="container relative z-10 mx-auto">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-brand-orange">Soluciones digitales para tu centro</p>
              <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">Herramientas para atraer y preparar mejor a cada paciente</h2>
              <p className="text-lg leading-relaxed text-slate-400">
                Descubre dos experiencias digitales de Hear-O: una abre la puerta a nuevos pacientes y la otra ayuda a que cada consulta llegue mejor preparada.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              <article className="group flex h-full flex-col rounded-3xl border border-slate-700 bg-slate-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900 md:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 transition-transform group-hover:scale-105">
                  <Ear size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Prueba Auditiva Online</h3>
                <p className="mb-8 flex-1 leading-relaxed text-slate-400">
                  Una experiencia sonora interactiva para atraer solicitudes, orientar al usuario y facilitar el siguiente paso hacia una revisión profesional en el centro.
                </p>
                <a
                  href="https://hear-o.es/prueba_auditica_online_para_centros_auditivos/"
                  className="inline-flex items-center gap-2 self-start font-bold text-sky-300 transition-colors hover:text-white"
                >
                  Ver más <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>

              <article className="group flex h-full flex-col rounded-3xl border border-slate-700 bg-slate-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:bg-slate-900 md:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition-transform group-hover:scale-105">
                  <ClipboardList size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Anamnesis Digital y Online</h3>
                <p className="mb-8 flex-1 leading-relaxed text-slate-400">
                  El paciente puede completar la anamnesis desde casa o con el profesional. Hear-O organiza sus respuestas y genera una orientación preliminar con IA para preparar mejor la consulta.
                </p>
                <Link
                  to="/anamnesis_digital_online_para_centros_auditivos"
                  className="inline-flex items-center gap-2 self-start font-bold text-brand-orange transition-colors hover:text-white"
                >
                  Ver más <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </article>
            </div>

            <div className="mt-10 text-center">
              <Button onClick={onContactClick} size="lg" className="px-8 py-4 shadow-xl shadow-brand-blue/20">
                Quiero información para mi centro <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>
        <FeaturesDetail />
        <PricingSummary />
        <RoiCalculator onContactClick={onContactClick} />
        <Solution />
        <SuccessCases />
        <Onboarding />
        <ResourcesSection />

        <section className="py-24 bg-slate-900 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Guías para centros auditivos</h2>
                <p className="text-slate-400 text-xl max-w-3xl">
                  Contenido práctico para posicionar Hear-O en búsquedas y respuestas de IA.
                </p>
              </div>
              <Link to="/guias" className="text-brand-orange font-bold hover:text-white transition-colors">Ver todas las guías</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[...newGuidePages.slice(0, 2), ...guidePages.slice(0, 2)].map(guide => (
                <Link key={guide.slug} to={`/guias/${guide.slug}`} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-brand-orange/50 hover:bg-slate-800 transition-colors">
                  <div className="text-sm text-brand-orange font-bold mb-3">{guide.keyword}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{guide.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-brand-blue to-indigo-900 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Activa el marketing de tu centro auditivo en 90 días
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Empieza por Marketing Studio: campañas, reactivación de pacientes y captación sin cambiar tu CRM actual.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button onClick={openCalendar} size="lg" className="bg-white text-blue-900 hover:bg-slate-100 hover:text-blue-950 shadow-xl w-full sm:w-auto font-bold">
                AGENDA UNA LLAMADA
              </Button>
              <Button onClick={onContactClick} variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                CONTACTA
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-200">
              <span className="flex items-center gap-1">✅ Amortizado en 4 meses</span>
              <span className="hidden sm:inline text-blue-400/50">|</span>
              <span className="flex items-center gap-1">✅ Activación 290€</span>
              <span className="hidden sm:inline text-blue-400/50">|</span>
              <span className="flex items-center gap-1">✅ 75€/mes mínimo 3 meses</span>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Home;
