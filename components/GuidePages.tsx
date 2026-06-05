import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Wrench, X } from 'lucide-react';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import SeoJsonLd from './SeoJsonLd';
import { FULL_PACK, guidePages, modules, SITE_URL } from '../seoContent';
import { guideCategories, guideEnhancements, newGuidePages, usefulResources } from '../seoContentExtra';

interface GuideProps {
  onContact: () => void;
}

type Guide = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keyword: string;
  answer: string;
  modulePath: string;
  moduleLabel: string;
  tips: string[];
  example: string;
  tableRows: string[][];
  faqs: string[][];
  sections?: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  visualBreak?: {
    title: string;
    text: string;
    items: string[];
  };
  extraImages?: {
    src: string;
    alt: string;
    afterSectionId?: string;
    caption?: string;
    layout?: 'right' | 'full' | 'third';
    href?: string;
  }[];
  toolCards?: {
    name: string;
    category: string;
    use: string;
    description: string;
    url: string;
  }[];
  visuals?: {
    ready?: boolean;
    infographic?: {
      src: string;
      alt: string;
      prompt: string;
    };
    image?: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
};

const allModuleIds = ['marketing-studio', 'anamnesis-assistant', 'crm-calendario', 'expertos-ia'];

const guideRelatedModuleIds: Record<string, string[]> = {
  'software-ia-centros-auditivos': allModuleIds,
  'como-vender-mas-audifonos-sin-ser-agresivo': ['anamnesis-assistant', 'expertos-ia'],
  'automatizar-citas-revisiones-centro-auditivo': ['crm-calendario'],
  'crm-para-centros-auditivos-que-debe-incluir': allModuleIds,
  'recuperar-pacientes-antiguos-audiologia': ['marketing-studio', 'crm-calendario'],
  'ia-para-audiologos-usos-reales': ['expertos-ia'],
  'marketing-automatico-centros-auditivos-guia': ['marketing-studio'],
  'mejorar-conversion-prueba-auditiva': ['anamnesis-assistant'],
  'cerrar-mejor-venta-audifonos-sin-presionar': ['anamnesis-assistant'],
  'vender-audifonos-gama-alta-explicando-valor': ['anamnesis-assistant'],
  'captar-mas-pacientes-centro-auditivo': ['marketing-studio', 'crm-calendario'],
  'prueba-auditiva-online-convertir-visitas-oportunidades': ['marketing-studio'],
  'anamnesis-emocional-audiologia': ['anamnesis-assistant'],
  'transformar-prueba-auditiva-decision-compra': ['anamnesis-assistant'],
  'reducir-ausencias-agenda-centro-auditivo': ['crm-calendario'],
  'ventas-renovacion-audifonos-centro-auditivo': ['marketing-studio'],
  'hear-o-vs-software-tradicional-centros-auditivos': allModuleIds,
  'mejor-crm-centros-auditivos-que-debe-tener': allModuleIds,
  'informe-auditivo-vender-mas-audifonos': ['anamnesis-assistant'],
  'soporte-tecnico-instantaneo-centros-auditivos-ia': ['expertos-ia'],
  'ia-audiologos-resolver-dudas-tecnicas-audiologicas': ['expertos-ia'],
  'reducir-dependencia-soporte-fabricantes-centro-auditivo': ['expertos-ia'],
  'herramientas-recursos-utiles-centros-auditivos': ['marketing-studio']
};

export const allGuidePages: Guide[] = [
  ...guidePages.map(guide => {
    const enhancement = guideEnhancements[guide.slug];
    return {
      ...guide,
      category: enhancement?.category || 'Ventas',
      tips: enhancement?.tips || ['Detectar el punto donde se pierden ventas, citas o pacientes.', 'Automatizar tareas repetitivas sin cambiar el trato humano.', 'Medir el ahorro de horas y las oportunidades recuperadas.'],
      example: enhancement?.example || 'Un centro auditivo puede aplicar esta idea empezando por el proceso que más tiempo consume o donde más oportunidades se pierden.',
      tableRows: enhancement?.tableRows || [['Situación', 'Qué ocurre'], ['Mejora', 'Qué cambia con un proceso ordenado']],
      faqs: enhancement?.faqs || [['¿Sirve para centros pequeños?', 'Sí. La clave es empezar por el flujo que más impacto tenga.']],
      sections: enhancement?.sections,
      visualBreak: enhancement?.visualBreak,
      extraImages: enhancement?.extraImages,
      toolCards: enhancement?.toolCards,
      visuals: enhancement?.visuals
    };
  }),
  ...newGuidePages
];

export const GuidesIndex: React.FC<GuideProps> = ({ onContact }) => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const categories = ['Todas', ...guideCategories];
  const filteredGuides = useMemo(
    () => activeCategory === 'Todas' ? allGuidePages : allGuidePages.filter(guide => guide.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32">
      <Helmet>
        <title>Centro de Conocimiento para Centros Auditivos | Hear-O</title>
        <meta name="description" content="Guías, recursos y consejos para vender más audífonos, captar pacientes, automatizar agenda y aplicar IA en centros auditivos." />
        <link rel="canonical" href="https://hear-o.es/guias" />
      </Helmet>
      <LandingHeader onContactClick={onContact} />
      <main className="container mx-auto px-6 lg:px-20 pb-24">
        <section className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full font-bold text-sm mb-6">
            <BookOpen size={18} />
            Centro de Conocimiento Hear-O
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Guías para vender, captar y automatizar mejor</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Contenido pensado para centros auditivos que buscan respuestas prácticas antes de comprar una solución como Hear-O.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  activeCategory === category
                    ? 'border-brand-orange bg-brand-orange text-white'
                    : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-brand-orange/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {filteredGuides.map(guide => (
            <Link key={guide.slug} to={`/guias/${guide.slug}`} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-brand-orange/50 hover:bg-slate-800 transition-colors">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="text-sm font-bold text-brand-orange">{guide.category}</div>
                <div className="text-xs text-slate-500">{guide.keyword}</div>
              </div>
              <h2 className="text-2xl font-bold mb-3">{guide.title}</h2>
              <p className="text-slate-400 leading-relaxed mb-5">{guide.description}</p>
              <span className="inline-flex items-center gap-2 text-white font-bold">
                Leer guía <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="text-brand-orange" />
            <h2 className="text-3xl font-bold">Herramientas y recursos útiles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {usefulResources.map(([name, category, text]) => (
              <div key={name} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="text-xs font-bold uppercase text-brand-orange mb-2">{category}</div>
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-slate-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const GuideDetail: React.FC<GuideProps> = ({ onContact }) => {
  const { slug } = useParams();
  const guide = allGuidePages.find(item => item.slug === slug);
  const [expandedImage, setExpandedImage] = useState<NonNullable<Guide['extraImages']>[number] | null>(null);

  if (!guide) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pt-32">
        <LandingHeader onContactClick={onContact} />
        <main className="container mx-auto px-6 lg:px-20 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Guía no encontrada</h1>
          <Link to="/guias" className="text-brand-orange font-bold">Volver a guías</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const renderParagraph = (paragraph: string) => {
    const pruebaText = 'Puedes hacer clic aquí o en la imagen para ver la prueba auditiva online que se incluye con Hear-O Marketing Studio.';
    const pruebaUrl = 'https://hear-o-centro-demo.vercel.app/prueba-auditiva-online/';

    if (paragraph === pruebaText) {
      return (
        <>
          Puedes hacer{' '}
          <a href={pruebaUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-orange hover:text-brand-orange-light">
            clic aquí
          </a>{' '}
          o en la imagen para ver la prueba auditiva online que se incluye con Hear-O Marketing Studio.
        </>
      );
    }

    return paragraph;
  };

  const relatedModuleIds = guideRelatedModuleIds[guide.slug] || modules.filter(module => module.path === guide.modulePath).map(module => module.id);
  const relatedModules = modules.filter(module => relatedModuleIds.includes(module.id));
  const hearOSectionIndex = guide.sections?.findIndex(section => {
    const text = `${section.id} ${section.title}`.toLowerCase();
    return text.includes('hear-o') || text.includes('hearo');
  }) ?? -1;

  const renderHearOCta = () => (
    <section className="mb-10 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-brand-orange/20 to-blue-500/10 p-8">
      <div className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-3">Esto ya lo hace Hear-O por ti</div>
      <h2 className="text-3xl font-bold mb-4">No tienes que hacerlo todo manualmente</h2>
      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        Sabemos que muchas de estas acciones son valiosas, pero también consumen tiempo, herramientas y seguimiento. Hear-O las integra en un sistema pensado para centros auditivos, con IA, automatizaciones e implantación adaptada a tu forma de trabajar.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-7">
        <button
          type="button"
          onClick={onContact}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors"
        >
          Contacta y te mostramos cómo <ArrowRight size={18} />
        </button>
        <Link to="/software-centros-auditivos-hear-o" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-4 font-bold text-white hover:border-brand-orange transition-colors">
          Ver Hear-O completo <ArrowRight size={18} />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedModules.map(module => {
          const Icon = module.icon;

          return (
            <Link key={module.id} to={module.path} className={`border ${module.border} bg-slate-950 rounded-xl p-4 hover:bg-slate-800 transition-colors`}>
              <div className={`flex items-center gap-3 font-bold ${module.color}`}>
                <Icon size={20} />
                {module.name}
              </div>
              <p className="text-sm text-slate-400 mt-2">{module.summary}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );

  const renderExtraImage = (image: NonNullable<Guide['extraImages']>[number], className: string, captionClassName: string) => {
    const imageNode = (
      <img
        src={image.src}
        alt={image.alt}
        className="h-auto w-full object-cover"
        loading="lazy"
      />
    );

    return (
      <figure key={image.src} className={className}>
        {image.href ? (
          <a href={image.href} target="_blank" rel="noopener noreferrer" aria-label={image.alt}>
            {imageNode}
          </a>
        ) : (
          <button type="button" onClick={() => setExpandedImage(image)} className="block w-full text-left" aria-label={`Ampliar imagen: ${image.alt}`}>
            {imageNode}
          </button>
        )}
        {image.caption && (
          <figcaption className={captionClassName}>
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const jsonLd = [
    {
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map(([question, answer]) => ({
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
        <title>{guide.title} | Hear-O</title>
        <meta name="description" content={guide.description} />
        <meta name="keywords" content={guide.keyword} />
        <link rel="canonical" href={`https://hear-o.es/guias/${guide.slug}`} />
      </Helmet>
      <SeoJsonLd data={jsonLd} />
      <LandingHeader onContactClick={onContact} />

      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setExpandedImage(null)}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900 p-3 text-white hover:border-brand-orange"
            aria-label="Cerrar imagen ampliada"
          >
            <X size={24} />
          </button>
          <figure className="max-h-full max-w-6xl overflow-auto rounded-3xl border border-slate-700 bg-slate-900">
            <img src={expandedImage.src} alt={expandedImage.alt} className="h-auto w-full" />
            {expandedImage.caption && (
              <figcaption className="border-t border-slate-800 px-5 py-4 text-sm leading-relaxed text-slate-300">
                {expandedImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      <main className="container mx-auto px-6 lg:px-20 pb-24">
        <article className="max-w-4xl mx-auto">
          <Link to="/guias" className="text-brand-orange font-bold inline-flex items-center gap-2 mb-8">
            Centro de Conocimiento Hear-O
          </Link>
          <div className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-4">{guide.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{guide.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">{guide.description}</p>

          {guide.visuals?.ready && guide.visuals.image && (
            <figure className="mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <img
                src={guide.visuals.image.src}
                alt={guide.visuals.image.alt}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </figure>
          )}

          <nav className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
            <div className="text-sm font-bold text-slate-400 uppercase mb-4">Tabla de contenidos</div>
            <div className="grid sm:grid-cols-2 gap-3 text-slate-300">
              <a href="#respuesta" className="hover:text-brand-orange">Respuesta directa</a>
              {guide.sections?.map(section => (
                <a key={section.id} href={`#${section.id}`} className="hover:text-brand-orange">{section.title}</a>
              ))}
              {guide.toolCards && <a href="#herramientas" className="hover:text-brand-orange">Herramientas recomendadas</a>}
              <a href="#consejos" className="hover:text-brand-orange">Consejos prácticos</a>
              <a href="#ejemplo" className="hover:text-brand-orange">Ejemplo aplicado</a>
              <a href="#comparativa" className="hover:text-brand-orange">Tabla sencilla</a>
              <a href="#faq" className="hover:text-brand-orange">Preguntas frecuentes</a>
            </div>
          </nav>

          <section id="respuesta" className="bg-brand-orange/10 border border-brand-orange/30 rounded-3xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-3">Respuesta directa</h2>
            <p className="text-slate-200 text-lg leading-relaxed">{guide.answer}</p>
          </section>

          {guide.visuals?.ready && guide.visuals.infographic && (
            <figure className="mb-10 overflow-hidden rounded-3xl border border-brand-orange/30 bg-slate-900">
              <img
                src={guide.visuals.infographic.src}
                alt={guide.visuals.infographic.alt}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </figure>
          )}

          {guide.extraImages?.filter(image => !image.afterSectionId).map(image => (
            <figure key={image.src} className="mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}

          {guide.sections?.map((section, index) => (
            <React.Fragment key={section.id}>
              {index === 2 && guide.visualBreak && (
                <aside className="mb-10 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-brand-orange/15 to-blue-500/10 p-8">
                  <div className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-3">{guide.visualBreak.title}</div>
                  <p className="text-xl text-slate-100 leading-relaxed mb-6">{guide.visualBreak.text}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {guide.visualBreak.items.map(item => (
                      <div key={item} className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-center font-bold text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>
              )}

              <section id={section.id} className="mb-10 scroll-mt-28">
                <div className={guide.extraImages?.some(image => image.afterSectionId === section.id && image.layout === 'right') ? 'grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start' : ''}>
                  <div>
                    <h2 className="text-3xl font-bold mb-5">{section.title}</h2>
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph}>{renderParagraph(paragraph)}</p>
                  ))}
                </div>
                    {section.bullets && (
                      <div className="mt-6 grid gap-3">
                        {section.bullets.map(bullet => (
                          <p key={bullet} className="flex gap-3 text-slate-300 text-lg leading-relaxed">
                            <CheckCircle2 className="text-green-400 shrink-0 mt-1" />
                            {bullet}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {guide.extraImages?.filter(image => image.afterSectionId === section.id && image.layout === 'right').map(image => (
                    renderExtraImage(image, 'overflow-hidden rounded-3xl border border-slate-800 bg-slate-900', 'border-t border-slate-800 px-4 py-3 text-sm leading-relaxed text-slate-400')
                  ))}
                </div>
              </section>

              {guide.extraImages?.some(image => image.afterSectionId === section.id && image.layout === 'third') && (
                <div className="mb-10 grid grid-cols-3 gap-4">
                  {guide.extraImages.filter(image => image.afterSectionId === section.id && image.layout === 'third').map(image => (
                    renderExtraImage(image, 'overflow-hidden rounded-3xl border border-slate-800 bg-slate-900', 'border-t border-slate-800 px-4 py-3 text-sm leading-relaxed text-slate-400')
                  ))}
                </div>
              )}

              {guide.extraImages?.filter(image => image.afterSectionId === section.id && image.layout !== 'right' && image.layout !== 'third').map(image => (
                renderExtraImage(image, 'mb-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900', 'border-t border-slate-800 px-5 py-4 text-sm leading-relaxed text-slate-400')
              ))}

              {index === hearOSectionIndex && renderHearOCta()}
            </React.Fragment>
          ))}

          {hearOSectionIndex === -1 && renderHearOCta()}

          {guide.toolCards && (
            <section id="herramientas" className="mb-10 scroll-mt-28">
              <h2 className="text-3xl font-bold mb-5">Herramientas recomendadas</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {guide.toolCards.map(tool => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-brand-orange/60 hover:bg-slate-800"
                  >
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold uppercase text-brand-orange">{tool.category}</span>
                      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase text-slate-300">{tool.use}</span>
                    </div>
                    <h3 className="mb-3 flex items-center justify-between gap-4 text-2xl font-bold">
                      {tool.name}
                      <ArrowRight className="shrink-0 text-brand-orange transition-transform group-hover:translate-x-1" size={20} />
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{tool.description}</p>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section id="consejos" className="mb-10">
            <h2 className="text-3xl font-bold mb-5">Consejos prácticos</h2>
            <div className="space-y-4">
              {guide.tips.map(tip => (
                <p key={tip} className="flex gap-3 text-slate-300 text-lg leading-relaxed">
                  <CheckCircle2 className="text-green-400 shrink-0 mt-1" />
                  {tip}
                </p>
              ))}
            </div>
          </section>

          <section id="ejemplo" className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-bold mb-4">Ejemplo aplicado</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{guide.example}</p>
          </section>

          <section id="comparativa" className="mb-10">
            <h2 className="text-3xl font-bold mb-5">Tabla sencilla</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              {guide.tableRows.map(([label, value]) => (
                <div key={label} className="grid sm:grid-cols-[220px_1fr] border-b border-slate-800 last:border-b-0 bg-slate-900">
                  <div className="bg-slate-950 px-5 py-4 font-bold text-white">{label}</div>
                  <div className="px-5 py-4 text-slate-300">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-5">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {guide.faqs.map(([question, answer]) => (
                <div key={question} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">{question}</h3>
                  <p className="text-slate-400 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/30 rounded-3xl p-8">
            <div className="text-sm text-brand-orange font-bold uppercase tracking-wider mb-2">Cómo ayuda Hear-O</div>
            <h2 className="text-3xl font-bold mb-3">{FULL_PACK.name}</h2>
            <p className="text-slate-300 mb-6">Hear-O combina CRM, IA, automatizaciones, marketing, calendario y anamnesis asistida con personalización para cada centro auditivo.</p>
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
