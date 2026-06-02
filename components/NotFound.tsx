import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import LandingHeader from './LandingHeader';

interface NotFoundProps {
  onContact: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onContact }) => (
  <div className="min-h-screen bg-slate-950 text-white pt-32">
    <Helmet>
      <title>Página no encontrada | Hear-O</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <LandingHeader onContactClick={onContact} />
    <main className="container mx-auto px-6 lg:px-20 pb-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Página no encontrada</h1>
      <p className="text-xl text-slate-400 mb-8">Esta dirección no existe, pero puedes volver al ecosistema Hear-O.</p>
      <Link to="/" className="inline-flex rounded-xl bg-brand-orange px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors">
        Volver a la home
      </Link>
    </main>
    <Footer />
  </div>
);

export default NotFound;
