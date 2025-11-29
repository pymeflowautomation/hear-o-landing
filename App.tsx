
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import FeaturesDetail from './components/FeaturesDetail';
import Solution from './components/Solution';
import Carousel from './components/Carousel';
import RoiCalculator from './components/RoiCalculator';
import Pricing from './components/Pricing';
import ExtraFeatures from './components/ExtraFeatures';
import Onboarding from './components/Onboarding';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Button from './components/Button';
import CookieNotice from './components/CookieNotice';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  const openCalendar = () => {
    window.open('https://calendar.app.google/ZRW5xV73FThbgKzi8', '_blank');
  };

  const scrollToRoi = () => {
    const element = document.getElementById('calculadora');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-orange/30 selection:text-white">
      <Header onContactClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} onRoiClick={scrollToRoi} />
        <PainPoints />
        <HowItWorks />
        <FeaturesDetail />
        <Solution />
        {/* <Carousel /> */}
        <RoiCalculator onContactClick={openModal} />
        <Pricing onContactClick={openModal} />
        <ExtraFeatures />
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
              <Button onClick={openModal} variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
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

      <Modal 
        isOpen={isContactModalOpen} 
        onClose={closeModal}
        title="Cuéntanos tu caso:"
      >
        <div className="h-[600px] w-full bg-transparent">
           {/* Tally Form Iframe with correct ID */}
           <div className="flex flex-col items-center justify-center h-full text-center">
              <iframe 
                src="https://tally.so/embed/ob99b5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Contactar Hear-O"
                className="w-full h-full"
                style={{ background: 'transparent' }}
              ></iframe>
           </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
