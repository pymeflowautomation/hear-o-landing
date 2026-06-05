import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, BrainCircuit, CalendarDays, CheckCircle2, Filter, Headphones, MessageSquare, ShieldCheck, UserRoundCheck, Zap } from 'lucide-react';
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
  const isCrmCalendar = moduleId === 'crm-calendario';
  const isExpertosIa = moduleId === 'expertos-ia';
  const pageTitle = isCrmCalendar ? 'CRM y Calendario para centros auditivos' : isExpertosIa ? 'Expertos IA para centros auditivos' : page.h1;
  const pageLead = isCrmCalendar
    ? 'Hear-O CRM & Calendario organiza contactos, tipos de cita y recordatorios automáticos en una experiencia visual sencilla, pensada para reducir ausencias, ahorrar llamadas y trabajar con más claridad.'
    : isExpertosIa
      ? 'Hear-O Expertos IA ofrece apoyo inmediato para dudas técnicas, audiológicas y de adaptación, reduciendo la dependencia del soporte de fabricantes cuando el paciente está delante y no se puede esperar.'
      : page.lead;
  const pageCta = isCrmCalendar || isExpertosIa ? 'Quiero ver una demo' : page.cta;
  const pageProof = isCrmCalendar
    ? 'La falta de organización cuesta tiempo y oportunidades: contactos mezclados, agenda poco clara, llamadas manuales y ausencias que podrían evitarse con confirmaciones y recordatorios automáticos.'
    : isExpertosIa
      ? 'El problema no es que el soporte del fabricante no sea útil. El problema es depender de una llamada, un horario o una disponibilidad externa justo cuando necesitas una respuesta en consulta.'
      : page.proof;
  const crmFeatureBlocks = [
    {
      icon: UserRoundCheck,
      title: 'Contactos ordenados por tipo',
      text: 'Pacientes, no pacientes, leads y otros contactos quedan separados desde el primer vistazo. El equipo sabe a quién está atendiendo y qué tipo de registro tiene delante.'
    },
    {
      icon: CalendarDays,
      title: 'Tipos de cita claros',
      text: 'Estudio auditivo, revisión, fin de prueba u otros tipos de cita pueden diferenciarse para que la agenda diaria, semanal o mensual sea mucho más fácil de leer.'
    },
    {
      icon: Filter,
      title: 'Filtros para trabajar más rápido',
      text: 'La agenda puede consultarse con filtros por tipo de cita o tipo de contacto, evitando perder tiempo buscando qué hay que hacer en cada momento.'
    },
    {
      icon: Bell,
      title: 'Confirmaciones y recordatorios',
      text: 'El sistema puede enviar confirmación al reservar una cita y recordatorios previos configurables por antelación y canal para reducir ausencias.'
    }
  ];
  const expertFeatureBlocks = [
    {
      icon: Headphones,
      title: 'Soporte técnico al instante',
      text: 'Ayuda rápida ante dudas de software de adaptación, conectividad, accesorios, equipos o configuraciones habituales.'
    },
    {
      icon: BrainCircuit,
      title: 'Apoyo audiológico',
      text: 'Consulta de dudas sobre pruebas, resultados, adaptación, quejas del paciente o pasos razonables de comprobación.'
    },
    {
      icon: ShieldCheck,
      title: 'Fuentes seguras',
      text: 'Respuestas apoyadas en conocimiento especializado, documentación técnica y fuentes fiables, no en una IA genérica sin contexto.'
    },
    {
      icon: Zap,
      title: 'Consulta más fluida',
      text: 'Menos interrupciones, menos esperas y más seguridad cuando el paciente está delante y la consulta debe continuar.'
    }
  ];
  const supportImages = moduleId === 'crm-calendario'
    ? [
        {
          src: '/images/recordatorios_automaticos_citas_centro_auditivo.webp',
          alt: 'Recordatorios automáticos de citas en un centro auditivo',
          title: 'Recordatorios automáticos',
          text: 'Avisos configurables antes de cada cita para reducir olvidos, ausencias y llamadas manuales del equipo.'
        },
        {
          src: '/images/gestion_citas_recordatosios_con_calendario_centro_auditivo.webp',
          alt: 'Gestión de citas y calendario para centro auditivo',
          title: 'Calendario visual',
          text: 'Vista clara de día, semana y mes con tipos de cita y filtros para organizar el trabajo sin confusión.'
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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{pageTitle}</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">{pageLead}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onContact} size="lg" className="text-lg px-8">
                  {pageCta}
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
              <p className="text-xl text-slate-400">{pageProof}</p>
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

        {isCrmCalendar && (
          <>
            <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                <div>
                  <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Organización visual</div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Menos desorden, menos llamadas, menos ausencias</h2>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    El valor de Hear-O CRM & Calendario no está en llenar el centro de campos y pantallas. Está en que el equipo vea rápido qué tipo de contacto tiene delante, qué cita hay programada y qué recordatorios se han automatizado.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Cuando la agenda y los contactos están bien clasificados, el centro deja de depender de memoria, notas sueltas o llamadas de última hora. El día se entiende mejor y las tareas repetitivas empiezan a desaparecer.
                  </p>
                  <Button onClick={onContact} size="lg" className="text-lg px-8">
                    Contacta y te dejamos una demo para probarlo
                    <ArrowRight className="ml-2" size={22} />
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {crmFeatureBlocks.map(item => (
                    <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-5">
                        <item.icon size={26} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="rounded-3xl border border-green-500/30 bg-slate-900 p-3">
                  <ZoomableImage
                    src="/images/visual_del_crm.webp"
                    alt="CRM visual de Hear-O para clasificar contactos y ver citas asociadas"
                    frameClassName="rounded-2xl"
                    className="min-h-[300px]"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Cada contacto con su estado claro</h2>
                  <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                    <p>
                      En Hear-O puedes diferenciar contactos por tipo: paciente, no paciente, lead u otro. Esta clasificación evita que todo quede mezclado en una base de datos difícil de trabajar.
                    </p>
                    <p>
                      Cada registro muestra información útil para orientarse rápido: datos principales, citas vinculadas y estado general del contacto. Si además se incorpora el Asistente de Anamnesis, el CRM puede enriquecerse con pruebas, informes y documentación generada durante la consulta.
                    </p>
                    <p>
                      La idea es simple: que el equipo sepa qué está viendo sin tener que preguntar, buscar o revisar varias herramientas.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </>
        )}

        {isExpertosIa && (
          <>
            <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                <div>
                  <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Respuestas cuando no puedes esperar</div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">El paciente está delante y la duda aparece ahora</h2>
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    En un centro auditivo, muchas dudas técnicas o audiológicas aparecen en plena consulta: una adaptación, una revisión, una conexión, una prueba o una explicación que el paciente necesita entender.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    Llamar al fabricante puede ser útil, pero no siempre es viable en ese momento. Expertos IA actúa como una primera capa de apoyo inmediato para que el profesional pueda comprobar, ordenar y decidir el siguiente paso sin romper la consulta.
                  </p>
                  <Button onClick={onContact} size="lg" className="text-lg px-8">
                    Contacta y te dejamos una demo para probarlo
                    <ArrowRight className="ml-2" size={22} />
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {expertFeatureBlocks.map(item => (
                    <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                        <item.icon size={26} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="bg-slate-900 py-20 mb-24">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                  <div className="rounded-3xl border border-purple-500/30 bg-slate-950 p-3">
                    <ZoomableImage
                      src="/images/expertos_ia_hear-o.webp"
                      alt="Expertos IA de Hear-O para soporte técnico y audiológico en centros auditivos"
                      frameClassName="rounded-2xl"
                      className="min-h-[320px]"
                    />
                  </div>
                  <div>
                    <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Usos reales</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Soporte técnico, dudas audiológicas y explicación al paciente</h2>
                    <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                      <p>
                        Expertos IA puede ayudar con dudas de software de adaptación, conectividad, accesorios, equipos, comprobaciones previas y documentación técnica.
                      </p>
                      <p>
                        También puede apoyar dudas audiológicas: cómo ordenar una queja del paciente, qué datos conviene revisar, cómo interpretar una situación frecuente o cómo explicar el resultado con un lenguaje más claro.
                      </p>
                      <p>
                        No sustituye el criterio del audiólogo ni el soporte oficial cuando hay una incidencia crítica. Su valor está en resolver muchas dudas del día a día en el instante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">IA especializada, no una respuesta genérica</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-5">
                      En audiología no vale cualquier respuesta. Por eso Expertos IA se plantea como una herramienta especializada, apoyada en conocimiento técnico, documentación segura y fuentes fiables.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      La idea es trabajar con bases de conocimiento específicas, priorizando documentación de fabricantes y fuentes controladas. Las fuentes externas solo deben servir como apoyo limitado, no como base principal de la respuesta.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ['Primera capa de ayuda', 'Permite resolver dudas frecuentes antes de llamar al soporte oficial.'],
                      ['Menos dependencia externa', 'El centro gana autonomía y no se queda parado por cada duda cotidiana.'],
                      ['Escalado inteligente', 'Cuando hace falta fabricante, la consulta llega mejor preparada y con el problema más claro.']
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-slate-400 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </>
        )}

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

        {isCrmCalendar && (
          <>
            <Reveal className="bg-slate-900 py-20 mb-24">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
                  <div>
                    <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">La función clave</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Confirmaciones y recordatorios automáticos para reducir ausencias</h2>
                    <div className="space-y-4 text-lg text-slate-300 leading-relaxed mb-8">
                      <p>
                        Muchos centros dedican horas cada mes a llamar o escribir para confirmar citas. Es una tarea necesaria, pero repetitiva: no genera ingresos directos y aun así no siempre evita que el paciente olvide la cita.
                      </p>
                      <p>
                        Hear-O CRM & Calendario permite enviar una confirmación cuando la cita queda reservada y recordatorios previos antes de la visita. El centro puede configurar la antelación y los canales para adaptarlo a su forma de trabajar.
                      </p>
                      <p>
                        El objetivo es claro: menos llamadas manuales, menos huecos en agenda y más tiempo para atender pacientes.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {[
                        'Confirmación automática al reservar la cita.',
                        'Recordatorio previo configurable.',
                        'Canales adaptables según el centro.',
                        'Menos llamadas y menos ausencias.'
                      ].map(item => (
                        <p key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300">
                          <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </p>
                      ))}
                    </div>
                    <Button onClick={onContact} size="lg" className="text-lg px-8">
                      Te lo enseñamos y dejamos una demo para probarlo
                      <ArrowRight className="ml-2" size={22} />
                    </Button>
                  </div>
                  <div className="rounded-3xl border border-green-500/30 bg-slate-950 p-3">
                    <ZoomableImage
                      src="/images/recordatorios_automaticos_citas_centro_auditivo.webp"
                      alt="Confirmaciones y recordatorios automáticos de citas para centros auditivos"
                      frameClassName="rounded-2xl"
                      className="min-h-[320px]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="container mx-auto px-6 lg:px-20 mb-24">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Leads, pacientes y otros contactos: cada cosa en su sitio</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-5">
                      CRM & Calendario permite registrar cualquier tipo de contacto, incluso si todavía no es paciente. Por ejemplo, una persona interesada puede quedar como lead y diferenciarse claramente de un paciente ya activo.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Si además contratas Marketing Studio, esos leads pueden trabajarse con campañas, envíos automatizados y la Prueba Auditiva Online para captar nuevos contactos. Pero esa parte pertenece al módulo de marketing; el CRM pone el orden y la estructura.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      ['CRM & Calendario', 'Ordena contactos, citas, estados, filtros, confirmaciones y recordatorios.'],
                      ['Asistente de Anamnesis', 'Añade pruebas, informes y argumentarios cuando se contrata junto al CRM.'],
                      ['Marketing Studio', 'Trabaja leads y pacientes con campañas automatizadas y Prueba Auditiva Online.']
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-slate-400 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </>
        )}

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
