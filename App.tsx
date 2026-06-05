
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AnamnesisDetail from './components/AnamnesisDetail';
import MarketingDetail from './components/MarketingDetail';
import ModuleDetail from './components/ModuleDetail';
import FullPackPage from './components/FullPackPage';
import PricingPage from './components/PricingPage';
import { GuideDetail, GuidesIndex } from './components/GuidePages';
import AboutPage from './components/AboutPage';
import NotFound from './components/NotFound';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const loadTallyEmbeds = () => {
      const tally = (window as typeof window & { Tally?: { loadEmbeds: () => void } }).Tally;
      if (tally) {
        tally.loadEmbeds();
        return;
      }

      document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc || '';
      });
    };

    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      loadTallyEmbeds();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = loadTallyEmbeds;
    script.onerror = loadTallyEmbeds;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isContactModalOpen) return;

    const loadTallyEmbeds = () => {
      const tally = (window as typeof window & { Tally?: { loadEmbeds: () => void } }).Tally;
      if (tally) {
        tally.loadEmbeds();
        return;
      }

      document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc || '';
      });
    };

    window.setTimeout(loadTallyEmbeds, 0);
  }, [isContactModalOpen]);

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      navigate('/');
    } else if (view === 'anamnesis') {
      navigate('/software-anamnesis-vender-mas-audifonos');
    } else if (view === 'marketing') {
      navigate('/marketing-automatico-centros-auditivos');
    } else if (view === 'crm') {
      navigate('/crm-calendario-centros-auditivos');
    } else if (view === 'expertos') {
      navigate('/expertos-ia-audiologia');
    } else if (view === 'full-pack') {
      navigate('/software-centros-auditivos-hear-o');
    }
  };

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Home onContactClick={openModal} onNavigate={handleNavigate} />} 
        />
        <Route 
          path="/software-anamnesis-vender-mas-audifonos" 
          element={<AnamnesisDetail onContact={openModal} />} 
        />
        <Route 
          path="/marketing-automatico-centros-auditivos" 
          element={<MarketingDetail onContact={openModal} />} 
        />
        <Route 
          path="/crm-calendario-centros-auditivos" 
          element={<ModuleDetail moduleId="crm-calendario" onContact={openModal} />} 
        />
        <Route 
          path="/expertos-ia-audiologia" 
          element={<ModuleDetail moduleId="expertos-ia" onContact={openModal} />} 
        />
        <Route 
          path="/software-centros-auditivos-hear-o" 
          element={<FullPackPage onContact={openModal} />} 
        />
        <Route 
          path="/precios" 
          element={<PricingPage onContact={openModal} onNavigate={handleNavigate} />} 
        />
        <Route 
          path="/sobre-hear-o" 
          element={<AboutPage onContact={openModal} />} 
        />
        <Route 
          path="/guias" 
          element={<GuidesIndex onContact={openModal} />} 
        />
        <Route 
          path="/guias/:slug" 
          element={<GuideDetail onContact={openModal} />} 
        />
        <Route path="*" element={<NotFound onContact={openModal} />} />
      </Routes>

      <Modal 
        isOpen={isContactModalOpen} 
        onClose={closeModal}
        title="Cuéntanos tu caso:"
      >
        <div className="w-full min-h-[568px] bg-transparent">
           <div className="flex flex-col items-center justify-start min-h-[568px] text-center">
              <iframe 
                data-tally-src="https://tally.so/embed/lbvNv6?hideTitle=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="760" 
                frameBorder="0" 
                marginHeight={0}
                marginWidth={0}
                title="Contactar Hear-O"
                className="w-full min-h-[760px]"
                style={{ background: 'transparent', display: 'block' }}
              ></iframe>
           </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
