import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, CalendarCheck, CheckCircle2, Database, FileCheck, Mail, Palette, Settings, Sparkles } from 'lucide-react';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import SeoJsonLd from './SeoJsonLd';
import Button from './Button';
import { SITE_URL } from '../seoContent';

interface AboutPageProps {
  onContact: () => void;
}

const pillars = [
  {
    icon: Sparkles,
    title: 'Sistema IA, no software genérico',
    text: 'Hear-O une CRM, IA, automatizaciones, marketing, calendario, anamnesis asistida y expertos IA para resolver el día a día comercial del centro auditivo.'
  },
  {
    icon: Palette,
    title: 'Personalización y branding',
    text: 'El sistema puede adaptarse a la marca del centro, sus logos, sus mensajes y sus campañas propias, especialmente en Marketing Studio.'
  },
  {
    icon: Database,
    title: 'La base de datos sigue siendo del centro',
    text: 'Hear-O trabaja sobre la información del centro para ordenarla y activarla, pero la relación con pacientes y la base de datos pertenecen al centro.'
  },
  {
    icon: Settings,
    title: 'Implantación acompañada',
    text: 'No es un SaaS cerrado donde el centro se apaña solo. La implantación incluye configuración, formación y ajuste a los flujos reales.'
  }
];

const originPains = [
  {
    icon: Mail,
    title: 'Marketing poco constante o mal ejecutado',
    module: 'Marketing Studio',
    path: '/marketing-automatico-centros-auditivos',
    text: 'Durante años vimos que muchos centros no hacían marketing, lo hacían muy poco o lo dejaban para cuando hubiera tiempo. Otros lo intentaban de forma amateur o lo veían como gasto, no como inversión. Sin embargo, los centros que sí trabajaban marketing de forma constante crecían más.',
    solution: 'Por eso nace Marketing Studio: para que el centro pueda hacer marketing profesional, con IA y automatizaciones, sin que el audiólogo tenga que dedicar horas a pensar campañas, escribir textos o coordinar herramientas.'
  },
  {
    icon: FileCheck,
    title: 'Dificultad para vender y cerrar adaptaciones',
    module: 'Anamnesis Assistant',
    path: '/software-anamnesis-vender-mas-audifonos',
    text: 'Muchos audiólogos son excelentes profesionales, pero no tienen perfil comercial. A veces el proceso de venta es frío, demasiado técnico o inseguro. La anamnesis, que debería ser clave para detectar motivaciones y objeciones, se convierte en un test rápido o directamente se hace sin intención comercial.',
    solution: 'Por eso nace Anamnesis Assistant: para ayudar al profesional a preguntar mejor, argumentar mejor, explicar mejor el valor y cerrar con más seguridad mediante informes y argumentarios personalizados.'
  },
  {
    icon: CalendarCheck,
    title: 'Agenda desordenada y ausencias en citas',
    module: 'CRM & Calendario',
    path: '/crm-calendario-centros-auditivos',
    text: 'También detectamos un problema muy operativo: contactos poco segmentados, agendas difíciles de leer, citas sin clasificación clara y muchas horas perdidas en llamadas o mensajes manuales para confirmar visitas.',
    solution: 'Por eso nace CRM & Calendario: para ordenar contactos y tipos de cita en una experiencia visual sencilla, y automatizar confirmaciones y recordatorios que ayuden a reducir ausencias y ahorrar tiempo.'
  },
  {
    icon: BrainCircuit,
    title: 'Dependencia del soporte técnico y audiológico',
    module: 'Expertos IA',
    path: '/expertos-ia-audiologia',
    text: 'En consulta surgen dudas técnicas, de adaptación, de equipos o de criterio audiológico. El soporte de fabricantes es útil, pero no siempre está disponible justo cuando el paciente está delante y el centro necesita una respuesta inmediata.',
    solution: 'Por eso nacen los Expertos IA: asistentes especializados para dar apoyo instantáneo al equipo, reducir esperas, ordenar dudas y ganar autonomía en el día a día del centro.'
  }
];

const AboutPage: React.FC<AboutPageProps> = ({ onContact }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hear-O',
    url: SITE_URL,
    description: 'Sistema IA personalizado para centros auditivos en España.',
    areaServed: 'ES'
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32">
      <Helmet>
        <title>Sobre Hear-O | Sistema IA para Centros Auditivos</title>
        <meta name="description" content="Conoce Hear-O: Sistema IA personalizado para centros auditivos con CRM, automatizaciones, marketing, calendario, anamnesis asistida y expertos IA." />
        <link rel="canonical" href="https://hear-o.es/sobre-hear-o" />
      </Helmet>
      <SeoJsonLd data={jsonLd} />
      <LandingHeader onContactClick={onContact} />

      <main>
        <section className="container mx-auto px-6 lg:px-20 pb-20">
          <div className="max-w-4xl">
            <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-5">Sobre Hear-O</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Un Sistema IA personalizado para centros auditivos que quieren crecer
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Hear-O no nace para ser otro programa de audiología. Nace para ayudar al centro a captar pacientes, ordenar agenda, mejorar la consulta, hacer seguimiento y vender más audífonos con una combinación de CRM, IA y automatizaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onContact} size="lg" className="text-lg px-8">
                Solicitar demo <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link to="/guias" className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-lg font-bold text-slate-200 hover:border-white hover:text-white transition-colors">
                Ver Centro de Conocimiento
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 mb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map(pillar => (
                <article key={pillar.title} className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                    <pillar.icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{pillar.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Equipo y experiencia</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Hear-O nace desde dentro del sector audiológico</h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>Hear-O está impulsado por profesionales con muchos años de experiencia trabajando con centros auditivos, equipos, procesos comerciales, pacientes y necesidades reales del día a día.</p>
                <p>Esa experiencia nos permitió ver algo importante: muchos centros no necesitaban “otro software más”, sino un sistema que resolviera problemas muy concretos que se repetían una y otra vez.</p>
                <p>Por eso Hear-O combina conocimiento del sector, automatización, IA y acompañamiento en la implantación. La tecnología importa, pero solo tiene sentido si ayuda al centro a trabajar mejor y vender más sin perder trato humano.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold mb-5">Nuestra forma de entender Hear-O</h3>
              <div className="space-y-4">
                {[
                  'Diseñado para centros auditivos en España.',
                  'Pensado para problemas reales: captación, cierre, agenda y soporte.',
                  'Modular: puedes empezar por la solución que más necesitas.',
                  'Personalizable: branding, mensajes, campañas y forma de trabajo del centro.',
                  'Acompañado: configuración, formación y ajuste inicial.'
                ].map(item => (
                  <p key={item} className="flex gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-1" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 mb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mb-14">
              <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Por qué Hear-O</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">La razón real: cuatro dolores que frenan a muchos centros auditivos</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Tras muchos años en el sector, vimos que los principales problemas no estaban aislados. Se repetían en centros pequeños, ópticas con gabinete auditivo y centros con varios profesionales. Hear-O nace para responder a esos cuatro puntos críticos.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {originPains.map(item => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <Link to={item.path} className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-white transition-colors">
                        {item.module} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">{item.text}</p>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <div className="text-sm text-brand-orange font-bold uppercase tracking-wider mb-2">La solución Hear-O</div>
                    <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6">Qué significa que sea personalizable</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Puede usar la marca, tono, logos y materiales del centro.</p>
                <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Marketing Studio permite idear y programar campañas propias, no solo plantillas cerradas.</p>
                <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> La implantación se adapta a la base de datos, agenda, revisiones y forma de trabajar del centro.</p>
                <p className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0 mt-1" /> Los módulos pueden contratarse por separado o conectarse dentro del Full Pack.</p>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/30 rounded-3xl p-8">
              <div className="text-sm text-brand-orange font-bold uppercase tracking-wider mb-3">Mensaje clave</div>
              <h2 className="text-3xl font-bold mb-4">CRM + IA + automatizaciones</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Esa es la diferencia: no solo guardar datos, sino ayudar al centro a captar mejor, vender con más seguridad, ordenar agenda y resolver dudas del equipo con apoyo IA.
              </p>
              <Link to="/software-centros-auditivos-hear-o" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
                Ver Full Pack <ArrowRight size={18} />
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
