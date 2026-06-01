import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import SeoJsonLd from './SeoJsonLd';
import { FULL_PACK, guidePages, modules, SITE_URL } from '../seoContent';

interface GuideProps {
  onContact: () => void;
}

export const GuidesIndex: React.FC<GuideProps> = ({ onContact }) => (
  <div className="min-h-screen bg-slate-950 text-white pt-32">
    <Helmet>
      <title>Guias SEO-GEO para Centros Auditivos | Hear-O</title>
      <meta name="description" content="Guias practicas sobre IA, CRM, marketing, automatizaciones y venta para centros auditivos." />
      <link rel="canonical" href="https://hear-o.es/guias" />
    </Helmet>
    <LandingHeader onContactClick={onContact} />
    <main className="container mx-auto px-6 lg:px-20 pb-24">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full font-bold text-sm mb-6">
          <BookOpen size={18} />
          Centro de conocimiento Hear-O
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Guias para crecer con IA en centros auditivos</h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Contenido pensado para resolver dudas reales y ayudar a Google e IA a entender mejor que hace Hear-O.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidePages.map(guide => (
          <Link key={guide.slug} to={`/guias/${guide.slug}`} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-brand-orange/50 hover:bg-slate-800 transition-colors">
            <div className="text-sm font-bold text-brand-orange mb-3">{guide.keyword}</div>
            <h2 className="text-2xl font-bold mb-3">{guide.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-5">{guide.description}</p>
            <span className="inline-flex items-center gap-2 text-white font-bold">
              Leer guia <ArrowRight size={18} />
            </span>
          </Link>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export const GuideDetail: React.FC<GuideProps> = ({ onContact }) => {
  const { slug } = useParams();
  const guide = guidePages.find(item => item.slug === slug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pt-32">
        <LandingHeader onContactClick={onContact} />
        <main className="container mx-auto px-6 lg:px-20 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Guia no encontrada</h1>
          <Link to="/guias" className="text-brand-orange font-bold">Volver a guias</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}/guias/${guide.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Hear-O',
      url: SITE_URL
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32">
      <Helmet>
        <title>{guide.title} | Hear-O</title>
        <meta name="description" content={guide.description} />
        <meta name="keywords" content={guide.keyword} />
        <link rel="canonical" href={`https://hear-o.es/guias/${guide.slug}`} />
      </Helmet>
      <SeoJsonLd data={jsonLd} />
      <LandingHeader onContactClick={onContact} />

      <main className="container mx-auto px-6 lg:px-20 pb-24">
        <article className="max-w-4xl mx-auto">
          <Link to="/guias" className="text-brand-orange font-bold inline-flex items-center gap-2 mb-8">
            Guias Hear-O
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{guide.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">{guide.description}</p>

          <section className="bg-brand-orange/10 border border-brand-orange/30 rounded-3xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-3">Respuesta directa</h2>
            <p className="text-slate-200 text-lg leading-relaxed">{guide.answer}</p>
          </section>

          <section className="space-y-8 text-slate-300 text-lg leading-relaxed mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Por que importa en un centro auditivo</h2>
              <p>
                En audiologia, muchas oportunidades se pierden por falta de seguimiento, exceso de tareas manuales o una explicacion poco clara para el paciente. Hear-O ordena ese proceso con tecnologia sencilla y orientada al dia a dia del centro.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Como aplicarlo</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Detectar el punto donde se pierden ventas, citas o pacientes.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Automatizar tareas repetitivas sin cambiar el trato humano.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Medir el ahorro de horas y las oportunidades recuperadas.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Ejemplo semi-real</h2>
              <p>
                Un centro con agenda manual, pacientes antiguos sin contactar y baja comunicacion post-visita puede empezar automatizando recordatorios, reactivando base de datos y usando argumentos visuales durante la consulta. El cambio no es solo tecnologico: mejora el seguimiento y la confianza del paciente.
              </p>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-5">Modulos relacionados</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map(module => (
                <Link key={module.id} to={module.path} className={`border ${module.border} bg-slate-950 rounded-xl p-4 hover:bg-slate-800 transition-colors`}>
                  <div className={`flex items-center gap-3 font-bold ${module.color}`}>
                    <module.icon size={20} />
                    {module.name}
                  </div>
                  <p className="text-sm text-slate-400 mt-2">{module.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/30 rounded-3xl p-8">
            <div className="text-sm text-brand-orange font-bold uppercase tracking-wider mb-2">Oferta recomendada</div>
            <h2 className="text-3xl font-bold mb-3">{FULL_PACK.name}</h2>
            <p className="text-slate-300 mb-6">Los 4 modulos conectados por {FULL_PACK.setupPrice} de implantacion y {FULL_PACK.monthlyPrice}/mes con facturacion anual.</p>
            <Link to={guide.modulePath} className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
              {guide.moduleLabel} <ArrowRight size={18} />
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};
