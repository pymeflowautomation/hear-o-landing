
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AnamnesisDetail from './components/AnamnesisDetail';
import MarketingDetail from './components/MarketingDetail';
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

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      navigate('/');
    } else if (view === 'anamnesis') {
      navigate('/software-anamnesis-vender-mas-audifonos');
    } else if (view === 'marketing') {
      navigate('/marketing-automatico-centros-auditivos');
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
          element={<AnamnesisDetail onBack={() => navigate('/')} onContact={openModal} />} 
        />
        <Route 
          path="/marketing-automatico-centros-auditivos" 
          element={<MarketingDetail onBack={() => navigate('/')} onContact={openModal} />} 
        />
      </Routes>

      <Modal 
        isOpen={isContactModalOpen} 
        onClose={closeModal}
        title="Cuéntanos tu caso:"
      >
        <div className="h-[600px] w-full bg-transparent">
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
    </>
  );
};

export default App;
