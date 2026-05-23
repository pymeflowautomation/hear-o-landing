import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Hero from './Hero';
import PainPoints from './PainPoints';
import HowItWorks from './HowItWorks';
import FeaturesDetail from './FeaturesDetail';
import Solution from './Solution';
import RoiCalculator from './RoiCalculator';
import Pricing from './Pricing';
import Onboarding from './Onboarding';
import FAQ from './FAQ';
import Footer from './Footer';
import Button from './Button';
import CookieNotice from './CookieNotice';

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
        <title>Hear-O | Software IA para Centros Auditivos</title>
        <meta name="description" content="Automatiza tu Centro Auditivo con IA y vende más audífonos. Aumenta tus ventas un 60% y ahorra 30h/mes en gestión. Marketing y Anamnesis con Inteligencia Artificial." />
        <link rel="canonical" href="https://hear-o.es/" />
      </Helmet>
      <Header onContactClick={onContactClick} />
      
      <main>
        <Hero onCtaClick={onContactClick} onRoiClick={scrollToRoi} onNavigate={onNavigate} />
        <PainPoints />
        <HowItWorks onNavigate={onNavigate} />
        <FeaturesDetail />
        <Pricing onContactClick={onContactClick} onNavigate={onNavigate} />
        <RoiCalculator onContactClick={onContactClick} />
        <Solution />
        <Onboarding />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-brand-blue to-indigo-900 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Activa la versión IA de tu Centro Auditivo Hoy
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Deja de perder tiempo y dinero. Agenda una demo de 15 minutos y te mostramos cómo Hear-O garantiza resultados.
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
              <span className="flex items-center gap-1">✅ Setup en 30 días</span>
              <span className="hidden sm:inline text-blue-400/50">|</span>
              <span className="flex items-center gap-1">✅ Onboarding completo incluido</span>
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
