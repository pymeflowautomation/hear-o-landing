import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowDown, ArrowLeft, ArrowRight, BarChart3, Check, ChevronDown, HelpCircle,
  Compass, FileCheck2, MapPin, ShieldCheck, Sparkles, Store, TrendingUp,
} from 'lucide-react';
import './AuditorLanding.css';

type Answer = string | string[];
type FormAnswers = Record<string, Answer>;
type AuditorPreview = {
  center: { name: string; type: string; town: string; province: string; postalCode: string };
  generatedAt: string; executiveSummary: string; painRead: string;
  topActions: { title: string; why: string; firstStep: string; timeframe: string }[];
  nextStep: string;
};

const steps = [
  { title: 'Tu centro', detail: 'Identidad y prioridad' },
  { title: 'Tu presencia digital', detail: 'Web y perfiles' },
  { title: 'Captación y contactos', detail: 'Fuentes y base de datos' },
  { title: 'Acciones de marketing', detail: 'Frecuencia, canales y responsable' },
  { title: 'Citas y atención', detail: 'Visitas y equipo' },
  { title: 'Resultados', detail: 'Medición y próximos pasos' },
];

const painOptions = ['Pocas primeras visitas', 'Audiología tiene poca visibilidad', 'Cuesta convertir consultas en adaptaciones', 'Hay ausencias o poco seguimiento', 'Falta tiempo o método en el equipo', 'Me cuesta identificar la causa principal'];
const actionOptions = ['Carteles, escaparate o materiales en el centro', 'Acciones locales o colaboraciones', 'Web, SEO local o Perfil de Empresa en Google', 'Publicaciones en redes sociales', 'Publicidad o promociones', 'Campañas de email, SMS o WhatsApp', 'Ninguna'];
const sourceOptions = ['Personas que pasan por la zona', 'Recomendaciones de pacientes', 'Google, mapas o web', 'Redes sociales o anuncios', 'Colaboradores profesionales', 'Pacientes anteriores', 'Aún no tenemos primeras visitas'];
const metricOptions = ['Sí: revisamos consultas y visitas generadas y decidimos qué mantener o cambiar', 'A veces, pero sin una revisión periódica', 'Miramos alcance o interacciones, pero no las consultas o visitas que generan', 'No solemos revisar ni registrar el resultado de las acciones'];
const analysisMessages = [
  'Revisamos tus respuestas sobre visibilidad, marketing y atención al paciente.',
  'Contrastamos la información pública disponible sobre el centro y su zona.',
  'Buscamos oportunidades para atraer más visitas y mejorar la conversión.',
  'Ordenamos los hallazgos en prioridades y acciones prácticas.',
  'El análisis local puede tardar un poco más. Al terminar verás aquí una primera lectura y recibirás el PDF completo.',
];
const featuredProducts = [
  { name: 'Marketing Studio', description: 'Más de 20 campañas de email y SMS programadas, con publicaciones automáticas en blog y redes.', image: '/images/hero-marketing-ia-centros-auditivos.webp', href: '/marketing-automatico-centros-auditivos' },
  { name: 'Prueba Auditiva Online', description: 'Capta pacientes desde redes, publicidad o el propio centro con una prueba auditiva completa y online.', image: '/images/prueba-auditiva-online-para-centros-auditivos.webp', href: '/guias/prueba-auditiva-online-para-centros-auditivos' },
  { name: 'Anamnesis Digital', description: 'Un apoyo visual que refuerza la conversión. El paciente puede completarla desde casa y ahorrar tiempo en consulta.', image: '/images/anamnesis-digital/resumen_anamnesis_digital_centros_auditivos.webp', href: '/anamnesis_digital_online_para_centros_auditivos' },
  { name: 'Agenda Inteligente', description: 'Organiza citas, confirma visitas y recupera tiempo para atender mejor.', image: '/images/gestion_citas_recordatosios_con_calendario_centro_auditivo.webp', href: '/crm-calendario-centros-auditivos' },
  { name: 'Asistente IA de Anamnesis', description: 'Mejora la conversión de adaptaciones con una anamnesis guiada, apoyo visual e informe con recomendación de gama.', image: '/images/anamnesis-audiologia-con-sincronizacion-con-presentacion.webp', href: '/software-anamnesis-vender-mas-audifonos' },
  { name: 'Expertos IA Audiología', description: 'Resuelve dudas del día a día cuando el paciente está delante.', image: '/images/expertos_ia_hear-o.webp', href: '/expertos-ia-audiologia' },
];

function ChoiceGroup({
  label, value, options, onChange, multiple = false, optional = true, required = false, maxSelections,
}: {
  label: string; value?: Answer; options: string[]; onChange: (value: Answer) => void;
  multiple?: boolean; optional?: boolean; required?: boolean; maxSelections?: number;
}) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];
  const toggle = (option: string) => {
    if (!multiple) { onChange(option); return; }
    const without = selected.filter((item) => item !== option);
    if (!selected.includes(option) && maxSelections && selected.length >= maxSelections) return;
    const next = selected.includes(option) ? without : [...without, option];
    const exclusiveOptions = ['Ninguna', 'No hay un proceso común que incluya estas etapas'];
    onChange(exclusiveOptions.includes(option) ? (selected.includes(option) ? [] : [option]) : next.filter((item) => !exclusiveOptions.includes(item)));
  };
  return <fieldset className="auditor-fieldset">
    <legend>{label}{(required || optional) && <span className={required ? 'auditor-required' : 'auditor-optional'}>{required ? 'Obligatoria' : 'Opcional'}</span>}</legend>
    <div className="auditor-choice-grid">
      {options.map((option) => <button key={option} type="button" className={`auditor-choice ${selected.includes(option) ? 'is-selected' : ''}`} aria-pressed={selected.includes(option)} onClick={() => toggle(option)}>
        <span className="auditor-choice-mark">{selected.includes(option) && <Check size={14} />}</span><span>{option}</span>
      </button>)}
    </div>
  </fieldset>;
}

function TextField({ label, value, onChange, placeholder, optional = true, required = false, type = 'text', maxLength, hint }: {
  label: string; value?: string; onChange: (value: string) => void; placeholder?: string;
  optional?: boolean; required?: boolean; type?: string; maxLength?: number; hint?: string;
}) {
  return <label className="auditor-field"><span className="auditor-field-label">{label}{(required || optional) && <small className={required ? 'auditor-required' : 'auditor-optional'}>{required ? 'Obligatorio' : 'Opcional'}</small>}</span>
    <input type={type} value={value || ''} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} maxLength={maxLength} aria-required={required} />
    {hint && <span className="auditor-hint">{hint}</span>}
  </label>;
}

const AuditorLanding: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [error, setError] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showAuditor, setShowAuditor] = useState(false);
  const [busy, setBusy] = useState(false);
  const [busySeconds, setBusySeconds] = useState(0);
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);
  const [previewReady, setPreviewReady] = useState(false);
  const [report, setReport] = useState<AuditorPreview | null>(null);
  const [deliveryMessage, setDeliveryMessage] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const analysisMessageIndex = Math.min(Math.floor(busySeconds / 8), analysisMessages.length - 1);
  const featuredProduct = featuredProducts[featuredProductIndex];
  useEffect(() => {
    if (!busy) return undefined;
    const timer = window.setInterval(() => setBusySeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, [busy]);
  useEffect(() => {
    if (busy && busySeconds > 0 && busySeconds % 11 === 0) setFeaturedProductIndex((index) => (index + 1) % featuredProducts.length);
  }, [busy, busySeconds]);
  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);
  const value = (key: string) => answers[key];
  const setValue = (key: string, next: Answer) => setAnswers((current) => ({ ...current, [key]: next }));
  const stringValue = (key: string) => typeof value(key) === 'string' ? value(key) as string : '';
  const listValue = (key: string) => Array.isArray(value(key)) ? value(key) as string[] : stringValue(key) ? [stringValue(key)] : [];
  const isOptical = stringValue('centerType') === 'Óptica con audiología';
  const start = () => { setShowAuditor(true); setTimeout(() => document.getElementById('auditor-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); };
  const next = () => {
    setError('');
    const requiredKeys = step === 0 ? ['centerType', 'centerName', 'pain'] : [['centerType'], ['webType'], [isOptical ? 'storefront' : 'sources'], ['marketingFrequency'], ['teamConfidence'], ['metrics']][step];
    const isMissing = requiredKeys.some((key) => {
      const requiredValue = value(key);
      return Array.isArray(requiredValue) ? requiredValue.length === 0 : !String(requiredValue || '').trim();
    });
    if (isMissing) {
      setError('Responde la pregunta marcada como obligatoria para continuar.'); return;
    }
    if (step < steps.length - 1) { setStep((current) => current + 1); setTimeout(() => document.getElementById('auditor-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); }
    else { setPreviewReady(true); setTimeout(() => document.getElementById('auditor-preview')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); }
  };
  const submitAudit = async () => {
    if (!leadName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail) || !privacyAccepted) {
      setError('Indica tu nombre, un email válido y acepta la información de privacidad para recibir el informe.'); return;
    }
    setBusy(true); setBusySeconds(0); setFeaturedProductIndex(0); setError('');
    try {
      const response = await fetch('/api/auditor/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers, lead: { name: leadName.trim(), email: leadEmail.trim(), privacyAccepted } }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || 'No hemos podido preparar el análisis. Inténtalo de nuevo.');
      if (!result?.preview) throw new Error('No hemos podido preparar el informe. Inténtalo de nuevo.');
      setReport(result.preview);
      setDeliveryMessage(result.delivery?.message || 'El informe completo se enviará a tu correo.');
      setTimeout(() => document.getElementById('auditor-report-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'No hemos podido preparar el análisis. Inténtalo de nuevo.');
    } finally { setBusy(false); }
  };
  const faqs = [
    ['¿Qué analiza el Auditor-IA?', 'Revisa la situación que describes, la presencia física y digital del centro, la forma de captar y acompañar pacientes y, cuando hay datos fiables, el entorno local. Separa lo que nos cuentas de lo que se ha podido comprobar.'],
    ['¿Sirve para una óptica con gabinete auditivo?', 'Sí. El análisis tiene en cuenta si la óptica está aprovechando su tráfico, su equipo y su base de contactos para dar visibilidad a audiología, sin asumir que todos sus clientes son candidatos.'],
    ['¿Y para un centro auditivo independiente?', 'También. En ese caso el foco se pone en cómo atraer visitas desde Google, la web, las recomendaciones, los colaboradores y las acciones locales.'],
    ['¿El informe me obliga a contratar Hear-O?', 'No. Recibirás recomendaciones prácticas para tu centro. Si una solución de Hear-O encaja de verdad con una oportunidad detectada, te explicaremos cómo podría ayudarte.'],
    ['¿La estimación de personas con dificultades auditivas equivale a clientes?', 'No. Es una estimación demográfica basada en estadísticas publicadas y edades de la población. No mide diagnósticos locales, demanda activa, ventas ni ingresos que el centro haya perdido.'],
  ];

  return <main className="auditor-page">
    <Helmet>
      <title>Audita gratis tu centro auditivo: más visitas y ventas | Hear-O</title>
      <meta name="description" content="Analiza gratis la visibilidad, el marketing y la captación de tu centro auditivo. Descubre qué frena las visitas y recibe acciones concretas para mejorar." />
      <meta name="keywords" content="auditoría de marketing para centros auditivos, auditor marketing audiología, captar pacientes centro auditivo, marketing local audiología, diagnóstico centro auditivo" />
      <link rel="canonical" href="https://hear-o.es/auditor-ia-centros-auditivos" />
      <meta property="og:title" content="Audita gratis tu centro auditivo | Hear-O" />
      <meta property="og:description" content="Descubre qué frena la captación de pacientes y qué acciones pueden ayudarte a conseguir más visitas y vender más audífonos." />
      <meta property="og:url" content="https://hear-o.es/auditor-ia-centros-auditivos" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Auditor de marketing para centros auditivos Hear-O', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Herramienta online de análisis de marketing, visibilidad y captación para centros auditivos.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, provider: { '@type': 'Organization', name: 'Hear-O', url: 'https://hear-o.es' }, inLanguage: 'es-ES', isAccessibleForFree: true,
      })}</script>
    </Helmet>

    <header className="auditor-nav"><div className="auditor-container auditor-nav-inner">
      <Link to="/" className="auditor-brand" aria-label="Hear-O, inicio"><img src="/images/logo-hear-o-pequeno2.webp" alt="" /><span>Hear-O</span></Link>
      <div className="auditor-nav-note"><ShieldCheck size={16} /> Análisis profesional para centros auditivos</div>
      <a href="#como-funciona" className="auditor-nav-link">Cómo funciona <ArrowDown size={15} /></a>
    </div></header>

    <section className="auditor-hero"><div className="auditor-container auditor-hero-grid">
      <div className="auditor-hero-copy">
        <div className="auditor-eyebrow"><span></span> AUDITORÍA GRATUITA PARA CENTROS AUDITIVOS</div>
        <h1>Audita tu centro auditivo <em>gratis</em></h1>
        <p className="auditor-hero-lead">Descubre qué está frenando la captación y qué puedes hacer para conseguir más visitas y vender más audífonos. Recibirás un diagnóstico de tu centro, tu presencia local y tus acciones de marketing, con prioridades claras para mejorar.</p>
        <div className="auditor-hero-actions"><button className="auditor-primary" onClick={start}>Empezar mi auditoría <ArrowRight size={18} /></button><span><ShieldCheck size={16} /> Gratis · Sin tarjeta · Empieza sin registrarte</span></div>
        <div className="auditor-proof-row"><div><strong>Detecta qué te frena</strong><small>Captación y conversión</small></div><i></i><div><strong>Prioriza acciones</strong><small>Físicas y digitales</small></div><i></i><div><strong>Mejora con criterio</strong><small>Soluciones si encajan</small></div></div>
      </div>
      <div className="auditor-hero-visual" aria-label="Vista previa del informe de auditoría">
        <div className="auditor-orbit auditor-orbit-one"></div><div className="auditor-orbit auditor-orbit-two"></div>
        <div className="auditor-report-mock"><div className="auditor-report-top"><span className="auditor-report-mark">h</span><div><b>DIAGNÓSTICO DE CENTRO</b><small>Marketing y captación local</small></div><span className="auditor-report-date">HEAR-O</span></div>
          <div className="auditor-report-title"><small>LECTURA INICIAL</small><strong>Oportunidades para crecer en audiología</strong><span>Un análisis adaptado a tu centro y a tu zona.</span></div>
          <div className="auditor-report-metrics"><div><MapPin /><small>Entorno</small><b>Local</b></div><div><Compass /><small>Áreas</small><b>8 frentes</b></div><div><TrendingUp /><small>Prioridades</small><b>Accionables</b></div></div>
          <div className="auditor-report-bars"><div><span>Más primeras visitas</span><b>Reforzar la visibilidad local</b></div><div><span>Mejor conversión</span><b>Revisar cómo se atienden las consultas</b></div><div><span>Menos citas vacías</span><b>Mejorar confirmación y seguimiento</b></div></div>
          <div className="auditor-report-action"><Sparkles size={17} /><span><b>Ejemplo de prioridades</b><small>El informe se adapta a las respuestas de cada centro</small></span><ArrowRight size={16} /></div>
        </div>
        <div className="auditor-float-note"><span><BarChart3 size={17} /></span><div><b>Análisis con contexto local</b><small>Tu localidad y área de influencia</small></div></div>
        <div className="auditor-float-check"><FileCheck2 size={17} /> Informe personalizado</div>
      </div>
    </div></section>

    <section className="auditor-strip"><div className="auditor-container auditor-strip-inner"><span>Para ópticas con audiología</span><i></i><span>Para centros auditivos independientes</span><i></i><span>Hecho para el mercado audiológico</span></div></section>

    <section className="auditor-problem auditor-section"><div className="auditor-container auditor-two-col">
      <div><span className="auditor-kicker">MÁS VISITAS EMPIEZAN CON UN BUEN DIAGNÓSTICO</span><h2>Si no llegan suficientes pacientes, necesitas saber <em>qué está fallando.</em></h2></div>
      <div className="auditor-problem-copy"><p>Quizá la audiología no se ve desde la calle. Quizá Google no te muestra, la web no genera confianza o las consultas no avanzan hasta una adaptación.</p><p>El Auditor revisa las causas que sí puedes trabajar: desde el escaparate y el tráfico de tu óptica hasta la captación local, el seguimiento, las ausencias y la experiencia del equipo.</p><button className="auditor-text-link" onClick={start}>Descubre tus prioridades <ArrowRight size={16} /></button></div>
    </div></section>

    <section className="auditor-insights auditor-section"><div className="auditor-container"><div className="auditor-section-heading"><span className="auditor-kicker">UNA VISIÓN COMPLETA DEL CENTRO</span><h2>Un diagnóstico que conecta <em>las acciones con las visitas.</em></h2><p>La herramienta adapta el análisis al tipo de centro y a lo que más preocupa a su propietario.</p></div>
      <div className="auditor-insight-grid">
        <article><span className="auditor-insight-icon blue"><Store /></span><h3>Atraer más primeras visitas</h3><p>Detecta barreras en la fachada, la presencia digital, Google y las acciones locales que pueden estar haciendo que no te encuentren o no pidan cita.</p></article>
        <article><span className="auditor-insight-icon orange"><Compass /></span><h3>Aprovechar el tráfico de óptica</h3><p>Si combinas óptica y audiología, analizamos cómo se presenta el servicio y si existen formas adecuadas de darlo a conocer a tus clientes.</p></article>
        <article><span className="auditor-insight-icon green"><TrendingUp /></span><h3>Convertir y dar seguimiento</h3><p>Revisa cómo se atienden las consultas, se proponen adaptaciones, se confirman las citas y se acompaña a cada paciente después.</p></article>
        <article><span className="auditor-insight-icon violet"><MapPin /></span><h3>Entender tu mercado local</h3><p>Consideramos la localidad, el código postal y, cuando tiene sentido, el entorno al que se desplaza la población cercana.</p></article>
      </div>
    </div></section>

    <section id="como-funciona" className="auditor-method auditor-section"><div className="auditor-container"><div className="auditor-section-heading"><span className="auditor-kicker">CLARO DESDE EL PRINCIPIO</span><h2>De tus respuestas a un <em>plan que puedes poner en marcha.</em></h2></div>
      <div className="auditor-method-grid"><div className="auditor-method-card"><span>01</span><h3>Nos cuentas cómo trabajas</h3><p>Un cuestionario guiado, con respuestas ágiles y espacio para explicar tu principal preocupación.</p></div><div className="auditor-method-card"><span>02</span><h3>Analizamos tu situación</h3><p>Revisamos tus respuestas, tu presencia pública y el contexto local disponible para identificar obstáculos reales.</p></div><div className="auditor-method-card"><span>03</span><h3>Te damos un plan de mejora</h3><p>Recibes prioridades, acciones comprensibles y formas de medir el avance. Hear-O aparece solo cuando una solución encaja.</p></div></div>
      <div className="auditor-method-note"><ShieldCheck size={19} /><p>Separamos lo que nos cuentas de lo que observamos o estimamos. Si falta información fiable, te lo diremos; no inventaremos cifras ni resultados.</p></div>
    </div></section>

    <section className="auditor-insight-spotlight"><div className="auditor-container auditor-spotlight-grid"><div className="auditor-spotlight-copy"><span className="auditor-kicker">MERCADO POTENCIAL, CON CONTEXTO</span><h2>Tu localidad importa. Y también <em>lo que hay alrededor.</em></h2><p>En municipios grandes, la lectura puede centrarse en la localidad. En poblaciones pequeñas, también conviene valorar el área a la que la gente se desplaza para comprar o acudir a servicios.</p><p>Cuando haya datos de edad disponibles, el informe puede ofrecer una estimación poblacional de personas que podrían declarar dificultades auditivas. Es contexto para planificar, no una cifra de pacientes o ventas garantizadas.</p><button className="auditor-text-link" onClick={start}>Analiza mi zona <ArrowRight size={16} /></button></div><div className="auditor-zone-card"><div className="auditor-zone-header"><MapPin size={18} /><span>LECTURA TERRITORIAL</span><small>según población y datos disponibles</small></div><div className="auditor-zone-main"><span className="auditor-zone-dot"></span><div><b>Localidad principal</b><small>Área de análisis prioritaria</small></div><strong>1</strong></div><div className="auditor-zone-connector"></div><div className="auditor-zone-secondary"><span className="auditor-zone-ring"></span><div><b>Entorno próximo</b><small>Relevante en poblaciones pequeñas</small></div><span className="auditor-zone-tag">AMPLIACIÓN</span></div><div className="auditor-zone-disclaimer">La zona ampliada se identifica por separado. No convierte a toda su población en clientes potenciales.</div></div></div></section>

    <section className="auditor-why auditor-section"><div className="auditor-container auditor-two-col"><div><span className="auditor-kicker">DEL PROBLEMA A LA ACCIÓN</span><h2>Diagnóstico útil. Pasos claros. <em>Soluciones cuando encajan.</em></h2><p className="auditor-why-lead">No basta con decirte que hay que mejorar. El informe explica qué hacer, por qué es prioritario y cómo comprobar si funciona.</p></div><div className="auditor-why-list"><div><b>01</b><p><strong>Entiendes qué te está frenando</strong> Conectamos las respuestas y señales disponibles con el impacto que pueden tener en las visitas y las ventas.</p></div><div><b>02</b><p><strong>Sabes por dónde empezar</strong> Recibes acciones aplicables para tu equipo, organizadas según su prioridad.</p></div><div><b>03</b><p><strong>Haces más fácil ponerlo en marcha</strong> Si una solución de Hear-O encaja con el problema detectado, te contamos cómo puede ayudarte.</p></div></div></div></section>

    <section className="auditor-cta"><div className="auditor-container auditor-cta-inner"><div><span>EMPIEZA POR ENTENDER TU SITUACIÓN</span><h2>Descubre qué puedes mejorar para atraer más pacientes</h2><p>Haz gratis el diagnóstico y recibe prioridades claras para conseguir más visitas y mejorar tus ventas.</p></div><button className="auditor-primary auditor-primary-light" onClick={start}>Hacer mi auditoría gratis <ArrowRight size={18} /></button></div></section>

    <section className="auditor-faq auditor-section"><div className="auditor-container auditor-faq-grid"><div><span className="auditor-kicker">PREGUNTAS FRECUENTES</span><h2>Antes de empezar</h2><p>Lo importante, explicado con claridad.</p></div><div className="auditor-faq-list">{faqs.map(([question, answer], index) => <article key={question} className={`auditor-faq-item ${faqOpen === index ? 'open' : ''}`}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{question}</span><ChevronDown size={18} /></button>{faqOpen === index && <p>{answer}</p>}</article>)}</div></div></section>

    {showAuditor && <section className="auditor-form-section" id="auditor-form"><div className="auditor-container auditor-form-layout">
      <aside className="auditor-form-aside"><span className="auditor-kicker">TU DIAGNÓSTICO</span><h2>Empecemos por <em>tu centro.</em></h2><p>Responde las preguntas marcadas como obligatorias. El resto puedes dejarlo en blanco si no tienes el dato.</p><div className="auditor-form-privacy"><ShieldCheck size={17} /><span>No incluyas datos clínicos ni información identificable de pacientes.</span></div><div className="auditor-form-help"><HelpCircle size={16} /><span>Al final te pediremos nombre y email para generar y enviarte el informe.</span></div></aside>
      <div className="auditor-form-card">
        <div className="auditor-form-progress-top"><span>Auditoría guiada <b>· Paso {step + 1} de {steps.length}</b></span><span>{progress}%</span></div>
        <div className="auditor-progress-track"><span style={{ width: `${progress}%` }} /></div>
        <div className="auditor-step-nav">{steps.map((item, index) => <button key={item.title} type="button" className={index === step ? 'active' : index < step ? 'complete' : ''} onClick={() => index < step && setStep(index)} aria-label={`Paso ${index + 1}: ${item.title}`}><i>{index < step ? <Check size={12} /> : index + 1}</i><span>{item.title}</span></button>)}</div>
        <div className="auditor-step-heading"><span>PASO 0{step + 1}</span><h3>{steps[step].title}</h3><p>{steps[step].detail}</p></div>

        {step === 0 && <div className="auditor-questions">
          <ChoiceGroup label="¿Qué tipo de centro quieres analizar?" value={value('centerType')} options={['Óptica con audiología', 'Centro o gabinete auditivo']} required onChange={(v) => setValue('centerType', v)} />
          <div className="auditor-field-row"><TextField label="Nombre comercial del centro" value={stringValue('centerName')} onChange={(v) => setValue('centerName', v)} placeholder="Ej. Centro Auditivo Manuel" required /><TextField label="Código postal" value={stringValue('postalCode')} onChange={(v) => setValue('postalCode', v.replace(/\D/g, '').slice(0, 5))} placeholder="28001" maxLength={5} /></div>
          <div className="auditor-field-row"><TextField label="Localidad" value={stringValue('town')} onChange={(v) => setValue('town', v)} placeholder="Nombre de la localidad" /><TextField label="Provincia" value={stringValue('province')} onChange={(v) => setValue('province', v)} placeholder="Provincia" /></div>
          <ChoiceGroup label="¿Dónde notas más el problema ahora mismo? Elige hasta dos." value={value('pain')} options={painOptions} multiple maxSelections={2} required onChange={(v) => setValue('pain', v)} />
        </div>}

        {step === 1 && <div className="auditor-questions">
          <ChoiceGroup label="¿Cómo es la presencia web de tu centro?" value={value('webType')} options={['Web propia del centro', 'Página dentro de la web de central o cadena', 'Otra presencia web', 'No tiene web']} required onChange={(v) => setValue('webType', v)} />
          {['Web propia del centro', 'Página dentro de la web de central o cadena', 'Otra presencia web'].includes(stringValue('webType')) && <TextField label="Enlace de la página" value={stringValue('website')} onChange={(v) => setValue('website', v)} placeholder="https://" type="url" optional />}
          <ChoiceGroup label="¿Tienes un Perfil de Empresa en Google para esta sede?" value={value('googleProfile')} options={['Sí, tengo el enlace', 'Sí, pero no encuentro el enlace', 'No']} onChange={(v) => setValue('googleProfile', v)} />
          {stringValue('googleProfile') === 'Sí, tengo el enlace' && <TextField label="Enlace del perfil" value={stringValue('googleUrl')} onChange={(v) => setValue('googleUrl', v)} placeholder="https://maps.app.goo.gl/…" type="url" optional />}
          <div className="auditor-field-row"><TextField label="Instagram" value={stringValue('instagram')} onChange={(v) => setValue('instagram', v)} placeholder="@usuario o enlace" optional /><ChoiceGroup label="Presencia en Instagram" value={value('instagramExists')} options={['Tenemos perfil', 'No tenemos', 'Prefiero omitir']} onChange={(v) => setValue('instagramExists', v)} optional /></div>
        </div>}

        {step === 2 && <div className="auditor-questions">
          {isOptical ? <>
            <ChoiceGroup label="¿Qué texto aparece en el rótulo principal del local?" value={value('exteriorSignage')} options={['«Audiología» o «Centro Auditivo» aparece escrito junto al nombre del centro, en tamaño visible', 'Aparece escrito, pero en letra pequeña o en una línea secundaria', 'Solo aparece un icono o dibujo de una oreja', 'No aparece ninguna referencia a audiología']} onChange={(v) => setValue('exteriorSignage', v)} />
            <ChoiceGroup label="Aproximadamente, ¿qué parte del escaparate ocupa la audiología?" value={value('storefront')} options={['No hay referencias a audiología', 'Solo un cartel pequeño o 1–2 audífonos (menos de 1/4)', 'Entre 1/4 y 1/3 del escaparate', 'Un tercio o más del escaparate', 'El centro no tiene escaparate']} required onChange={(v) => setValue('storefront', v)} />
            <ChoiceGroup label="Desde recepción y las zonas de paso de la óptica, ¿qué elementos de audiología están a la vista? Elige todos los que correspondan." value={value('interior')} options={['Una placa o rótulo que identifica el gabinete', 'Un expositor pequeño o muestrario de hasta cinco audífonos', 'Material que explica el servicio y cómo pedir información o cita', 'Una zona de audiología identificable antes de entrar al gabinete', 'Ninguna']} multiple maxSelections={4} onChange={(v) => setValue('interior', v)} />
            <ChoiceGroup label="¿Cómo se informa de audiología a los clientes de óptica?" value={value('referrals')} options={['El equipo sigue una pauta para mencionarla cuando procede', 'Se comenta, pero sin una pauta común', 'Solo si el cliente pregunta', 'No forma parte habitual de la atención en óptica']} onChange={(v) => setValue('referrals', v)} />
          </> : <>
            <ChoiceGroup label="¿Cuál es vuestra principal fuente de captación de primeras visitas? Puedes elegir varias." value={value('sources')} options={sourceOptions} multiple required onChange={(v) => setValue('sources', v)} />
            <ChoiceGroup label="¿Cuántos contactos hay aproximadamente en vuestra base?" value={value('databaseSize')} options={['0', '1–100', '101–300', '301–1.000', 'Más de 1.000']} onChange={(v) => setValue('databaseSize', v)} />
            <ChoiceGroup label="¿Cómo tenéis organizada esa base de contactos?" value={value('segmentation')} options={['Pacientes, interesados y clientes separados', 'Algunas categorías separadas', 'Una lista única', 'No tenemos una base organizada']} onChange={(v) => setValue('segmentation', v)} />
            <ChoiceGroup label="¿Qué seguimiento hacéis a los contactos después de una visita o adaptación?" value={value('followUp')} options={['Proceso planificado por etapas', 'Seguimiento manual habitual', 'Solo cuando alguien se acuerda', 'Solo si el paciente contacta', 'No hacemos seguimiento']} onChange={(v) => setValue('followUp', v)} />
          </>}
          <div className="auditor-location-confirm"><MapPin size={18} /><span>Analizaremos la zona de <b>{stringValue('town') || 'tu localidad'}{stringValue('province') ? `, ${stringValue('province')}` : ''}</b>. Si es una población pequeña, valoraremos también el entorno próximo cuando haya datos fiables.</span></div>
        </div>}

        {step === 3 && <div className="auditor-questions">
          <ChoiceGroup label="¿Con qué frecuencia hacéis acciones de marketing para audiología?" value={value('marketingFrequency')} options={['Varias por semana', 'Una a la semana', 'Varias al mes', 'Una al mes', 'Eventualmente', 'No hacemos acciones']} required onChange={(v) => setValue('marketingFrequency', v)} />
          <ChoiceGroup label="¿Qué acciones soléis hacer de forma habitual? Elige todas las que correspondan." value={value('actions')} options={actionOptions} multiple onChange={(v) => setValue('actions', v)} />
          <ChoiceGroup label="¿Quién se ocupa habitualmente del marketing?" value={value('marketingRoutine')} options={['Alguien del centro, además de su trabajo habitual y sin formación específica', 'Un familiar o conocido sin formación específica', 'Un profesional o agencia externa', 'Una persona especialista en marketing dentro del equipo', 'No hay una persona responsable directa']} onChange={(v) => setValue('marketingRoutine', v)} />
          {isOptical && <>
            <ChoiceGroup label="¿Cuántos contactos hay aproximadamente en vuestra base?" value={value('databaseSize')} options={['0', '1–100', '101–300', '301–1.000', 'Más de 1.000']} onChange={(v) => setValue('databaseSize', v)} />
            <ChoiceGroup label="¿Cómo tenéis organizada esa base de contactos?" value={value('segmentation')} options={['Pacientes, interesados y clientes de óptica separados', 'Algunas categorías separadas', 'Una lista única', 'No tenemos una base organizada']} onChange={(v) => setValue('segmentation', v)} />
            <ChoiceGroup label="¿Qué seguimiento hacéis a los contactos después de una visita o adaptación?" value={value('followUp')} options={['Proceso planificado por etapas', 'Seguimiento manual habitual', 'Solo cuando alguien se acuerda', 'Solo si el paciente contacta', 'No hacemos seguimiento']} onChange={(v) => setValue('followUp', v)} />
          </>}
        </div>}

        {step === 4 && <div className="auditor-questions">
          <ChoiceGroup label="En una semana habitual, ¿cuántas primeras visitas de audiología recibís?" value={value('firstVisits')} options={['0–5', '6–10', '11–20', 'Más de 20']} onChange={(v) => setValue('firstVisits', v)} />
          <ChoiceGroup label="¿Qué proporción de citas quedó vacía por ausencia sin aviso?" value={value('noShow')} options={['0–5%', '6–10%', '11–20%', 'Más del 20%', 'No lo medimos']} onChange={(v) => setValue('noShow', v)} />
          <div className="auditor-field-row"><TextField label="Citas previstas el último mes" value={stringValue('scheduledAppointments')} onChange={(v) => setValue('scheduledAppointments', v.replace(/\D/g, ''))} placeholder="Ej. 40" optional /><TextField label="Ausencias sin aviso" value={stringValue('missedAppointments')} onChange={(v) => setValue('missedAppointments', v.replace(/\D/g, ''))} placeholder="Ej. 4" optional /></div>
          <ChoiceGroup label="¿Cómo recordáis y confirmáis las citas?" value={value('reminders')} options={['Aviso automático y confirmación', 'Aviso automático sin confirmación', 'Llamadas o mensajes manuales', 'De forma irregular', 'No enviamos recordatorios']} onChange={(v) => setValue('reminders', v)} />
          <ChoiceGroup label="¿Qué pasos forman parte del proceso habitual de atención y adaptación? Elige todos los que correspondan." value={value('teamProcess')} options={['El paciente pasa primero por la sala de espera', 'Se le ofrecen folletos con información auditiva', 'La anamnesis es un test en una hoja', 'La anamnesis es un diálogo argumentado', 'Tenemos definido el recorrido de pruebas', 'Adaptamos las pruebas a cada caso', 'Explicamos el resultado de las pruebas', 'Entregamos un informe final al paciente', 'Explicamos el proceso de adaptación y los primeros meses']} multiple maxSelections={9} onChange={(v) => setValue('teamProcess', v)} />
          <ChoiceGroup label="¿Qué nivel profesional y comercial tiene el equipo?" value={value('teamConfidence')} options={['Nivel profesional alto, pero nivel comercial bajo', 'Buen nivel profesional y comercial', 'Algo inexpertos e inseguros', 'Variable: depende del profesional']} required onChange={(v) => setValue('teamConfidence', v)} />
        </div>}

        {step === 5 && <div className="auditor-questions">
          <ChoiceGroup label="Después de una campaña, publicación o colaboración, ¿revisáis qué resultado ha dado?" value={value('metrics')} options={metricOptions} required onChange={(v) => setValue('metrics', v)} />
          <ChoiceGroup label="¿Qué inversión mensual en marketing podríais valorar?" value={value('budget')} options={['0 €/mes', 'Hasta 100 €/mes', '101–300 €/mes', '301–600 €/mes', 'Más de 600 €/mes', 'Necesito orientación', 'Prefiero no responder']} onChange={(v) => setValue('budget', v)} optional />
          <div className="auditor-review-card"><h4>Tu análisis incluirá</h4><div><Check size={15} /> Presencia física y digital</div><div><Check size={15} /> Captación y seguimiento de pacientes</div><div><Check size={15} /> Contexto local y oportunidades de mejora</div><div><Check size={15} /> Acciones ordenadas por prioridad</div><p>Al terminar, te pediremos tu nombre y email para generar el informe. Verás un avance en esta página y enviaremos el informe completo en PDF a esa dirección.</p></div>
          <label className="auditor-field"><span className="auditor-field-label">Cuéntanos qué te preocupa de verdad <small>Opcional</small></span><textarea value={stringValue('painDetails')} onChange={(e) => setValue('painDetails', e.target.value.slice(0, 800))} placeholder="¿Qué te gustaría que mejorara en los próximos meses?" rows={4} /><span className="auditor-hint">{stringValue('painDetails').length}/800</span></label>
        </div>}

        {error && <div className="auditor-form-error" role="alert">{error}</div>}
        <div className="auditor-form-actions">{step > 0 && <button className="auditor-back" onClick={() => { setStep((current) => current - 1); setError(''); }}><ArrowLeft size={16} /> Anterior</button>}<button className="auditor-primary" onClick={next} disabled={busy}>{busy ? <><span className="auditor-spinner"></span> Preparando el análisis…</> : step === steps.length - 1 ? <>Ver mi diagnóstico <ArrowRight size={16} /></> : <>Continuar <ArrowRight size={16} /></>}</button></div>
        <p className="auditor-form-footnote">La descarga del informe no supone suscribirte a comunicaciones comerciales.</p>
      </div>
    </div></section>}

    {previewReady && !report && <section className="auditor-preview-section" id="auditor-preview"><div className="auditor-container auditor-preview-card">
      <div className="auditor-preview-label"><Sparkles size={16} /> ÚLTIMO PASO · ENTREGA DEL INFORME</div>
      <h2>Recibe el diagnóstico de tu centro</h2>
      <p className="auditor-preview-summary">Cuando envíes tus datos, analizaremos tus respuestas y mostraremos aquí una primera lectura con las prioridades principales. También enviaremos el informe completo en PDF al correo que indiques.</p>
      <div className="auditor-preview-unlock">
        {busy ? <div className="auditor-analysis-progress" role="status" aria-live="polite" aria-atomic="true">
          <div className="auditor-analysis-icon"><Sparkles size={23} /></div>
          <span className="auditor-analysis-kicker">AUDITORÍA EN CURSO</span>
          <h3>Estamos analizando tu centro</h3>
          <p key={analysisMessageIndex} className="auditor-analysis-message">{analysisMessages[analysisMessageIndex]}</p>
          <div className="auditor-analysis-track" aria-hidden="true"><span /></div>
          <div className="auditor-analysis-checks"><span><i /> Presencia y captación</span><span><i /> Marketing y seguimiento</span><span><i /> Prioridades de mejora</span></div>
          <div className="auditor-featured-wrap"><span className="auditor-featured-label">MIENTRAS PREPARAMOS TU INFORME · DESCUBRE HEAR-O</span><article key={featuredProduct.name} className="auditor-featured-product"><img src={featuredProduct.image} alt="" /><div><strong>{featuredProduct.name}</strong><p>{featuredProduct.description}</p><a href={featuredProduct.href} target="_blank" rel="noopener noreferrer">Conocer la solución <ArrowRight size={15} /></a></div></article><div className="auditor-featured-dots" aria-label="Soluciones Hear-O">{featuredProducts.map((product, index) => <button key={product.name} type="button" className={index === featuredProductIndex ? 'active' : ''} aria-label={`Ver ${product.name}`} aria-pressed={index === featuredProductIndex} onClick={() => setFeaturedProductIndex(index)} />)}</div></div>
          <small>La búsqueda de información local puede tardar unos instantes. Mantén esta página abierta; te mostraremos el resultado aquí.</small>
        </div> : <>
          <div><b>Comprueba bien tu dirección de email</b><span>El informe completo se enviará ahí. Incluirá hallazgos, evidencias disponibles, acciones priorizadas y soluciones Hear-O solo cuando encajen con tu caso.</span></div>
          <div className="auditor-unlock-fields"><TextField label="Tu nombre" value={leadName} onChange={setLeadName} placeholder="Nombre" required optional={false} /><TextField label="Email para recibir el informe" value={leadEmail} onChange={setLeadEmail} placeholder="nombre@centro.es" type="email" required optional={false} /></div>
          <label className="auditor-consent"><input type="checkbox" checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} /><span>He leído la <a href="https://pymeflow.es/politica-de-privacidad/" target="_blank" rel="noreferrer">Política de privacidad</a> y acepto que Hear-O use mis datos para generar y enviarme este informe, y conservar una copia para su gestión.</span></label>
          <p className="auditor-report-delivery-note">Solo usaremos tu correo para entregarte el informe. No te suscribiremos a comunicaciones comerciales.</p>
          {error && <div className="auditor-form-error auditor-gate-error" role="alert">{error}</div>}
          <button className="auditor-primary" onClick={submitAudit}>Generar mi diagnóstico y enviar el PDF <ArrowRight size={17} /></button>
        </>}
      </div>
    </div></section>}

    {report && <section className="auditor-report-result auditor-section" id="auditor-report-result"><div className="auditor-container">
      <article className="auditor-preview-report">
        <header className="auditor-report-cover"><div className="auditor-report-brand"><img src="/images/logo-hear-o-naranja.webp" alt="Hear-O" /><span>PRIMERA LECTURA · DIAGNÓSTICO</span></div><p>Marketing y captación de audiología</p><h2>{report.center.name || 'Tu centro auditivo'}</h2><div>{[report.center.town, report.center.province].filter(Boolean).join(', ')}{report.center.postalCode ? ` · CP ${report.center.postalCode}` : ''}</div><small>Generado el {new Date(report.generatedAt).toLocaleDateString('es-ES')}</small></header>
        <section className="auditor-report-section auditor-report-executive"><span className="auditor-kicker">RESUMEN INICIAL</span><p className="auditor-report-summary">{report.executiveSummary}</p><div className="auditor-report-pain"><b>El reto que has señalado</b><p>{report.painRead}</p></div></section>
        <section className="auditor-report-section"><span className="auditor-kicker">DOS PRIORIDADES PARA EMPEZAR</span><div className="auditor-preview-actions">{report.topActions.map((action, i) => <article key={`${action.title}-${i}`}><span>0{i + 1}</span><div><h3>{action.title}</h3><p>{action.why}</p>{action.firstStep && <small><b>Primer paso:</b> {action.firstStep}</small>}<small><b>Plazo orientativo:</b> {action.timeframe}</small></div></article>)}</div></section>
        {report.nextStep && <section className="auditor-report-section"><span className="auditor-kicker">SIGUIENTE PASO</span><p className="auditor-report-paragraph">{report.nextStep}</p></section>}
        <div className="auditor-report-delivery-success"><FileCheck2 size={18} /><span>{deliveryMessage}</span></div>
        <p className="auditor-preview-summary">Te hemos mostrado la conclusión inicial y las primeras prioridades. El PDF incluye el análisis del mercado y la competencia, los problemas conectados, un plan práctico por fases y las soluciones Hear-O que encajan con tu caso.</p>
      </article>
    </div></section>}

    <footer className="auditor-footer"><div className="auditor-container auditor-footer-inner"><Link to="/" className="auditor-brand"><img src="/images/logo-hear-o-naranja.webp" alt="" /><span>Hear-O</span></Link><span>Más oportunidades para los centros auditivos.</span><Link to="/">Volver a Hear-O <ArrowRight size={14} /></Link></div></footer>
  </main>;
};

export default AuditorLanding;
