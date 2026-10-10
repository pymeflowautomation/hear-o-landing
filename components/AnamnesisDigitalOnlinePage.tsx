import React, { useState } from 'react';
import './AnamnesisDigitalOnlinePage.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  FileText,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';

interface AnamnesisDigitalOnlinePageProps {
  onContact: () => void;
}

const asset = (name: string) => `/images/anamnesis-digital/${name}`;

const reportPages = [
  {
    title: 'Informe preliminar',
    description: 'Resumen del caso y recomendación de evaluación auditiva.',
    image: 'anamnesis_con_informe_final_asistido_por_ia_recomendacion_pruebas.webp',
    alt: 'Primera parte del informe preliminar de recomendación auditiva',
  },
  {
    title: 'Pruebas recomendadas',
    description: 'Pruebas a valorar, objetivos y aspectos que conviene revisar.',
    image: 'resultado_ejemplo_recomendacion_pruebas_auditivas.webp',
    alt: 'Detalle del recorrido de pruebas auditivas recomendado en el informe',
  },
  {
    title: 'Consejo experto y gama',
    description: 'Orientación profesional y recomendación inicial de gama.',
    image: 'informe_consejos_recomendacion_gama.webp',
    alt: 'Consejo experto del audiólogo y orientación de gama del informe',
  },
];

const faqs = [
  {
    question: '¿La IA realiza un diagnóstico?',
    answer:
      'No. La IA genera una orientación preliminar para ayudar a preparar el siguiente paso. El audiólogo revisa siempre la información y mantiene el criterio profesional sobre la evaluación y la adaptación.',
  },
  {
    question: '¿Qué contiene la orientación?',
    answer:
      'Incluye preguntas concretas que conviene aclarar, pruebas audiológicas que se pueden valorar y el motivo de cada una, alertas o señales a tener en cuenta, información que falta y una orientación inicial de gama de audífono según las necesidades expresadas.',
  },
  {
    question: '¿Qué recibe el centro cuando el paciente la completa desde casa?',
    answer:
      'El centro recibe automáticamente el informe y el dossier de la sesión en PDF para revisarlos antes de la cita y aprovechar mejor el tiempo presencial.',
  },
  {
    question: '¿Se guardan las sesiones o los datos del paciente?',
    answer:
      'Las respuestas y comentarios de la sesión son temporales y la aplicación no conserva un historial de pacientes. La IA recibe la información necesaria para orientar el caso, sin nombre, teléfono ni correo del paciente.',
  },
  {
    question: '¿Puede utilizarse en consulta con apoyo visual?',
    answer:
      'Sí. El profesional puede guiar la anamnesis en el centro y mostrar el apoyo visual sincronizado en otra pantalla o dispositivo para que el paciente se reconozca en situaciones cotidianas.',
  },
  {
    question: '¿Cuánto tarda en estar lista para el centro?',
    answer:
      'Se entrega personalizada con la identidad y los datos del centro. El plazo concreto se confirma al revisar las necesidades de cada centro durante la implantación.',
  },
];

const AnamnesisDigitalOnlinePage: React.FC<AnamnesisDigitalOnlinePageProps> = ({ onContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openReportPreview, setOpenReportPreview] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="anamnesis-page">
      <Helmet>
        <title>Anamnesis digital para centros auditivos | Hear-O</title>
        <meta
          name="description"
          content="Anamnesis digital para centros auditivos con guía para el audiólogo, apoyo visual para el paciente, orientación preliminar con IA y modalidad online desde casa."
        />
        <meta
          name="keywords"
          content="anamnesis digital para centros auditivos, anamnesis audiológica con IA, software de anamnesis para audiólogos, anamnesis online para pacientes de audiología"
        />
        <link rel="canonical" href="https://hear-o.es/anamnesis_digital_online_para_centros_auditivos" />
        <meta property="og:title" content="Anamnesis digital para centros auditivos | Hear-O" />
        <meta
          property="og:description"
          content="Guía al audiólogo, ayuda al paciente a comprender y libera tiempo en gabinete."
        />
        <meta property="og:url" content="https://hear-o.es/anamnesis_digital_online_para_centros_auditivos" />
      </Helmet>

      <header className="anamnesis-nav">
        <div className="anamnesis-shell anamnesis-nav-inner">
          <Link to="/" className="anamnesis-brand" onClick={closeMenu} aria-label="Hear-O, volver al inicio">
            <img src="/images/logo-hear-o-naranja.webp" alt="Hear-O" />
          </Link>
          <nav className={`anamnesis-nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#como-ayuda" onClick={closeMenu}>Cómo ayuda</a>
            <a href="#paciente-online" onClick={closeMenu}>Paciente online</a>
            <a href="#precio" onClick={closeMenu}>Precio</a>
            <a href="#implantacion" onClick={closeMenu}>Implantación</a>
            <a href="#preguntas" onClick={closeMenu}>Preguntas frecuentes</a>
            <button className="anamnesis-nav-cta" onClick={() => { closeMenu(); onContact(); }}>
              Quiero información <ArrowRight size={16} />
            </button>
          </nav>
          <button
            type="button"
            className="anamnesis-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <main>
        <section className="anamnesis-hero anamnesis-hero-showcase anamnesis-hero-two-column">
          <div className="anamnesis-shell anamnesis-hero-grid anamnesis-hero-showcase-inner">
            <div className="anamnesis-hero-copy">
              <div className="anamnesis-eyebrow"><Sparkles size={15} /> Mejora la conversión de centros ópticos y auditivos</div>
              <h1>Anamnesis digital con IA para <span>guiar mejor cada adaptación</span></h1>
              <p className="anamnesis-hero-lead">
                Prepara la conversación, ayuda al paciente a comprender sus necesidades y da al profesional más claridad para recomendar.
              </p>
              <div className="anamnesis-hero-actions">
                <button className="anamnesis-button anamnesis-button-primary" onClick={onContact}>
                  Quiero información para mi centro <ArrowRight size={18} />
                </button>
                <a className="anamnesis-button anamnesis-button-link" href="#como-funciona">
                  Ver cómo funciona <span>↓</span>
                </a>
              </div>
              <div className="anamnesis-trust-row">
                <div><Check size={16} /> Personalizada para tu centro</div>
                <div><Check size={16} /> La IA orienta; el profesional decide</div>
              </div>
            </div>

            <div className="anamnesis-hero-visual anamnesis-hero-image-stage">
              <img
                className="anamnesis-hero-main-image"
                src={asset('anamnesis_online_con_apoyo_visual_para_centros_auditivos.webp')}
                alt="Audiólogo guiando a una paciente con apoyo visual durante la anamnesis en un centro auditivo"
              />
              <article className="anamnesis-hero-benefit online-benefit">
                <span className="anamnesis-note-icon benefit-icon-online"><Clock3 size={18} /></span>
                <div><strong>Paciente online</strong><small>Ahorra horas de gabinete: la completa en casa con guía y el informe llega a tu centro.</small></div>
              </article>
              <article className="anamnesis-hero-benefit visual-benefit">
                <span className="anamnesis-note-icon benefit-icon-visual"><Eye size={18} /></span>
                <div><strong>Apoyo visual en gabinete</strong><small>El paciente comprende mejor su dificultad, valora la recomendación y la conversación puede mejorar la conversión.</small></div>
              </article>
              <article className="anamnesis-hero-benefit recommendation-benefit">
                <span className="anamnesis-note-icon benefit-icon-tests"><Stethoscope size={18} /></span>
                <div><strong>Pruebas y gama orientativas</strong><small>La IA analiza la información y propone pruebas a valorar y una gama de audífonos adecuada al perfil.</small></div>
              </article>
              <article className="anamnesis-hero-benefit guided-conversation-benefit">
                <span className="anamnesis-note-icon benefit-icon-conversation"><MessageCircle size={18} /></span>
                <div><strong>Conversación guiada</strong><small>El profesional sabe qué preguntar y cómo argumentar para mejorar la conversión.</small></div>
              </article>
            </div>
          </div>
          <div className="anamnesis-hero-bottom-line">Guía al audiólogo <i /> Ayuda al paciente a comprender <i /> Libera tiempo en gabinete</div>
        </section>

        <section className="anamnesis-section anamnesis-challenge-section" id="como-ayuda">
          <div className="anamnesis-shell">
            <div className="anamnesis-section-intro narrow">
              <div className="anamnesis-kicker">ANAMNESIS PROFESIONAL, CON IMPACTO EN LA CONVERSIÓN</div>
              <h2>Guía mejor la conversación. Ayuda al paciente a decidir.</h2>
              <p>Una anamnesis bien conducida permite comprender qué necesita cada paciente y explicarle por qué una solución auditiva puede ayudarle. Hear-O aporta un método profesional para preguntar, escuchar y argumentar con más seguridad, favoreciendo la confianza y el avance hacia la adaptación.</p>
            </div>
            <div className="anamnesis-challenge-grid">
              <article className="anamnesis-challenge-card">
                <div className="anamnesis-icon-circle orange"><MessageCircle size={23} /></div>
                <h3>Sabe qué preguntar y cómo continuar</h3>
                <p>La guía estructura la conversación y ayuda a profundizar en las respuestas importantes. Así, el profesional puede conectar las necesidades del paciente con una recomendación mejor explicada.</p>
              </article>
              <article className="anamnesis-challenge-card">
                <div className="anamnesis-icon-circle blue"><Eye size={23} /></div>
                <h3>El paciente comprende mejor su situación</h3>
                <p>Las imágenes muestran escenas cotidianas en las que puede reconocerse. Al entender mejor cómo le afecta su audición, participa más activamente y puede aceptar con mayor confianza la solución propuesta.</p>
              </article>
              <article className="anamnesis-challenge-card">
                <div className="anamnesis-icon-circle green"><Clock3 size={23} /></div>
                <h3>Aprovecha mejor el tiempo de consulta</h3>
                <p>El paciente completa la anamnesis desde casa y el centro recibe automáticamente el dossier con sus respuestas y la orientación preliminar de la IA. La consulta puede centrarse en valorar el caso y orientar los siguientes pasos.</p>
              </article>
            </div>
            <div className="anamnesis-challenge-closing">Más claridad para el paciente. Más seguridad para el profesional. Mejores condiciones para avanzar hacia la adaptación.</div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-transformation" id="como-funciona">
          <div className="anamnesis-shell">
            <div className="anamnesis-section-intro narrow">
              <div className="anamnesis-kicker">DE LA ANAMNESIS AL SIGUIENTE PASO</div>
              <h2>Una conversación mejor preparada cambia cómo avanza la consulta</h2>
              <p>Hear-O conecta las respuestas del paciente con una orientación útil para el profesional y un dossier que permite continuar el proceso con claridad.</p>
            </div>
            <div className="anamnesis-process-image">
              <img src={asset('infografia_anamnesis_digital_asistida_por_ia_para_centros_auditivos.webp')} alt="Recorrido de una anamnesis digital asistida por IA" />
            </div>
          </div>
        </section>

        <section className="anamnesis-contact-strip">
          <div className="anamnesis-shell">
            <div><strong>¿Quieres ver cómo encajaría en tu centro?</strong><span>Cuéntanos cómo preparáis hoy la primera conversación.</span></div>
            <button onClick={onContact}>Hablemos de tu centro <ArrowRight size={17} /></button>
          </div>
        </section>

        <section className="anamnesis-online-section" id="paciente-online">
          <div className="anamnesis-shell anamnesis-online-grid">
            <div className="anamnesis-online-copy">
              <div className="anamnesis-kicker light">PACIENTE ONLINE</div>
              <h2>La consulta empieza antes de la cita</h2>
              <p>Envía un enlace y deja que el paciente complete la anamnesis desde casa, con instrucciones claras y sin acompañamiento presencial.</p>
              <div className="anamnesis-online-steps">
                <div><b>01</b><span><strong>El centro envía el enlace</strong>El paciente recibe una experiencia preparada para hacerlo por sí mismo.</span></div>
                <div><b>02</b><span><strong>La anamnesis se completa desde casa</strong>Responde a su ritmo y puede añadir comentarios.</span></div>
                <div><b>03</b><span><strong>El centro recibe el dossier</strong>La IA prepara la orientación y el PDF llega automáticamente al terminar.</span></div>
              </div>
              <div className="anamnesis-time-badge"><Clock3 size={19} /><span><strong>Más tiempo de valor en gabinete</strong>La cita puede empezar con información ya preparada.</span></div>
            </div>
            <div className="anamnesis-online-visual">
              <div className="anamnesis-phone-card">
                <img src={asset('anamnesis_audiologica_online_desde_casa.webp')} alt="Paciente completando la anamnesis online desde casa" />
              </div>
              <div className="anamnesis-inbox-card"><Mail size={19} /><span><strong>Dossier recibido</strong><small>Orientación preliminar lista para revisar</small></span></div>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-feature-section">
          <div className="anamnesis-shell anamnesis-feature-grid">
            <div className="anamnesis-feature-copy">
              <div className="anamnesis-kicker">01 · GUÍA PARA EL PROFESIONAL</div>
              <h2>Preguntas claras para que el audiólogo sepa cómo avanzar</h2>
              <p>La anamnesis corta o larga presenta preguntas y respuestas preparadas para conducir la conversación con orden y descubrir qué situaciones están afectando realmente al paciente.</p>
              <ul className="anamnesis-check-list">
                <li><Check size={17} /> Un recorrido estructurado, sin depender de la improvisación.</li>
                <li><Check size={17} /> Comentarios del profesional cuando necesita dejar una observación.</li>
                <li><Check size={17} /> Una experiencia coherente para todo el equipo.</li>
              </ul>
            </div>
            <div className="anamnesis-feature-media">
              <div className="anamnesis-media-label"><Stethoscope size={15} /> CONVERSACIÓN GUIADA</div>
              <img src={asset('anamnesis_audiologica_asistida_guia_conversacion.webp')} alt="Anamnesis audiológica asistida con guía de conversación" />
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-feature-section soft-blue">
          <div className="anamnesis-shell anamnesis-feature-grid reverse-mobile">
            <div className="anamnesis-feature-media">
              <div className="anamnesis-media-label"><Eye size={15} /> APOYO VISUAL SINCRONIZADO</div>
              <img src={asset('aamnesis_asistida_por_ia_con_apoyo_visual_paciente_centro_auditivo.webp')} alt="Apoyo visual para el paciente durante la anamnesis audiológica" />
            </div>
            <div className="anamnesis-feature-copy">
              <div className="anamnesis-kicker">02 · EL PACIENTE COMPRENDE</div>
              <h2>Imágenes que convierten una explicación en algo reconocible</h2>
              <p>El apoyo visual muestra situaciones cotidianas para que el paciente pueda identificarse, explicar mejor lo que vive y participar en la conversación.</p>
              <div className="anamnesis-quote">“No se trata solo de oír una explicación. Se trata de reconocer cómo afecta a tu vida.”</div>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-feature-section">
          <div className="anamnesis-shell anamnesis-feature-grid">
            <div className="anamnesis-feature-copy">
              <div className="anamnesis-kicker">03 · ORIENTACIÓN PRELIMINAR</div>
              <h2>La IA ordena la información para preparar el siguiente paso</h2>
              <p>Al terminar, la aplicación analiza las respuestas y comentarios para ofrecer una orientación preliminar que el profesional puede revisar.</p>
              <div className="anamnesis-orientation-list">
                <span><Check size={15} /> Preguntas a aclarar</span>
                <span><Check size={15} /> Pruebas a valorar y su motivo</span>
                <span><Check size={15} /> Alertas e información que falta</span>
                <span><Check size={15} /> Orientación inicial de gama</span>
              </div>
              <p className="anamnesis-disclaimer"><ShieldCheck size={17} /> Es apoyo para el profesional. No es un diagnóstico automático ni sustituye su criterio.</p>
            </div>
            <div className="anamnesis-feature-media report-media">
              <div className="anamnesis-media-label"><Sparkles size={15} /> INFORME PRELIMINAR · 3 VISTAS</div>
              <div className="report-gallery">
                {reportPages.map((page, index) => (
                  <button
                    className={`report-gallery-card ${index === 0 ? 'report-gallery-card-featured' : ''}`}
                    key={page.image}
                    type="button"
                    onClick={() => setOpenReportPreview(index)}
                    aria-label={`Ampliar: ${page.title}`}
                  >
                    <span className="report-gallery-image">
                      <img src={asset(page.image)} alt={page.alt} />
                      <span className="report-gallery-zoom">Ver ampliada <ArrowRight size={14} /></span>
                    </span>
                    <span className="report-gallery-caption">
                      <small>VISTA 0{index + 1}</small>
                      <strong>{page.title}</strong>
                      <span>{page.description}</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="report-gallery-hint">Pulsa cualquier vista para explorar el informe con más detalle.</p>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-dossier-section">
          <div className="anamnesis-shell anamnesis-dossier-grid">
            <div className="anamnesis-dossier-visual">
              <img src={asset('resumen_anamnesis_digital_centros_auditivos.webp')} alt="Resumen de una anamnesis digital para centros auditivos" />
            </div>
            <div className="anamnesis-dossier-copy">
              <div className="anamnesis-kicker">04 · DOSSIER DE SESIÓN</div>
              <h2>Todo lo importante, ordenado para continuar</h2>
              <p>El PDF final reúne la anamnesis y la orientación preliminar de la IA para que el centro pueda revisarlo, explicarlo y avanzar con el paciente.</p>
              <div className="anamnesis-dossier-points">
                <div><FileText size={20} /><span><strong>Un resumen comprensible</strong>La información queda organizada y fácil de revisar.</span></div>
                <div><MessageCircle size={20} /><span><strong>Una base para conversar</strong>Ayuda a retomar la cita desde lo que el paciente ha expresado.</span></div>
                <div><ArrowRight size={20} /><span><strong>Un siguiente paso más claro</strong>El profesional decide cómo continuar con la evaluación.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-privacy-section">
          <div className="anamnesis-shell anamnesis-privacy-grid">
            <div>
              <div className="anamnesis-kicker">DISEÑADA PARA USARLA CON TRANQUILIDAD</div>
              <h2>Una herramienta independiente y personalizada para tu centro</h2>
              <p>Se entrega lista para usar con la identidad y los datos del centro, sin pedirte que gestiones una base de datos de pacientes.</p>
            </div>
            <div className="anamnesis-privacy-card">
              <div className="anamnesis-privacy-icon"><ShieldCheck size={25} /></div>
              <div><h3>Privacidad desde el diseño</h3><p>Las respuestas y comentarios son temporales. La aplicación no conserva un historial de pacientes y la IA recibe solo la información necesaria para orientar el caso.</p></div>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-implant-section" id="implantacion">
          <div className="anamnesis-shell">
            <div className="anamnesis-section-intro narrow">
              <div className="anamnesis-kicker">CÓMO SE IMPLANTA</div>
              <h2>Empieza con una herramienta que ya habla el idioma de tu centro</h2>
              <p>La implantación es sencilla: se personaliza la aplicación, se prepara el recorrido y el equipo puede empezar a utilizarla en consulta o enviarla a sus pacientes.</p>
            </div>
            <div className="anamnesis-implant-grid">
              <div><span>01</span><h3>Personalizamos</h3><p>Identidad, datos y experiencia del centro.</p></div>
              <div><span>02</span><h3>Te entregamos</h3><p>La aplicación lista para usar con tu equipo.</p></div>
              <div><span>03</span><h3>La incorporas</h3><p>En consulta, con apoyo visual, o desde casa.</p></div>
            </div>
          </div>
        </section>

        <section className="anamnesis-price-section" id="precio">
          <div className="anamnesis-shell anamnesis-price-grid">
            <div>
              <div className="anamnesis-kicker light">PROPUESTA COMERCIAL INICIAL</div>
              <h2>Una mejor preparación para cada adaptación</h2>
              <p>Una herramienta independiente para ayudar al equipo a comprender mejor cada caso y aprovechar mejor cada conversación.</p>
              <button className="anamnesis-button anamnesis-button-light" onClick={onContact}>Quiero información para mi centro <ArrowRight size={18} /></button>
              <div className="anamnesis-evolution-note">
                <span>UNA EVOLUCIÓN MÁS COMPLETA E INTEGRADA</span>
                <h3>Hear-O Asistente IA Anamnesis</h3>
                <p>Además de guiar la anamnesis, conecta la información del paciente con recomendaciones profesionales, argumentos para explicar la propuesta y seguimiento de sesiones e informes.</p>
              </div>
            </div>
            <div className="anamnesis-price-card">
              <div className="anamnesis-price-card-top"><span>IMPLANTACIÓN</span><Sparkles size={20} /></div>
              <div className="anamnesis-price-promo">PROMOCIÓN DE LANZAMIENTO · AHORRA UN 20 %</div>
              <div className="anamnesis-price-main">
                <strong>490 €</strong>
                <div className="anamnesis-price-main-detail"><del>612,50 €</del><span>pago único</span></div>
              </div>
              <div className="anamnesis-price-maintenance-title">Opcional: Mantenimiento mensual</div>
              <div className="anamnesis-price-monthly"><strong>19 €/mes</strong></div>
              <div className="anamnesis-price-annual">O pago anual de <strong>204 €/año</strong> <span>(2 cuotas gratis)</span></div>
              <p>Más IVA. La cuota es opcional y mantiene la aplicación operativa y cuidada.</p>
              <details className="anamnesis-maintenance-details">
                <summary>¿Qué incluye el mantenimiento opcional?</summary>
                <ul>
                  <li>Adaptación a medida de preguntas y respuestas.</li>
                  <li>Imágenes y aplicación más personalizada.</li>
                  <li>Control de sesiones.</li>
                  <li>Informes IA personalizados.</li>
                  <li>Mejoras y cuidado continuo de la aplicación.</li>
                </ul>
              </details>
              <button onClick={onContact}>Hablar con Hear-O <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="anamnesis-section anamnesis-faq-section" id="preguntas">
          <div className="anamnesis-shell anamnesis-faq-grid">
            <div className="anamnesis-faq-intro">
              <div className="anamnesis-kicker">PREGUNTAS FRECUENTES</div>
              <h2>Lo importante, claro desde el principio</h2>
              <p>Si quieres saber cómo encaja en tu centro, cuéntanos cómo trabajáis hoy y te orientamos.</p>
              <button className="anamnesis-text-button" onClick={onContact}>Resolver mi caso <ArrowRight size={16} /></button>
            </div>
            <div className="anamnesis-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`anamnesis-faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                    <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{faq.question}</span><ChevronDown size={19} />
                    </button>
                    {isOpen && <p>{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="anamnesis-final-cta">
          <div className="anamnesis-shell">
            <div className="anamnesis-final-ornament">H</div>
            <div className="anamnesis-kicker light">EL SIGUIENTE PASO EMPIEZA CON UNA BUENA CONVERSACIÓN</div>
            <h2>Comprende mejor a cada paciente, recomienda con más seguridad y ayuda a adaptar más audífonos.</h2>
            <p>Descubre cómo puede encajar la anamnesis digital en tu centro auditivo.</p>
            <button className="anamnesis-button anamnesis-button-primary" onClick={onContact}>Quiero información para mi centro <ArrowRight size={18} /></button>
          </div>
        </section>
      </main>

      {openReportPreview !== null && (
        <div className="report-lightbox" onClick={() => setOpenReportPreview(null)}>
          <section
            className="report-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-lightbox-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="report-lightbox-header">
              <div>
                <span>INFORME PRELIMINAR · VISTA 0{openReportPreview + 1} DE 03</span>
                <h2 id="report-lightbox-title">{reportPages[openReportPreview].title}</h2>
              </div>
              <button type="button" onClick={() => setOpenReportPreview(null)} aria-label="Cerrar vista ampliada"><X size={21} /></button>
            </div>
            <img className="report-lightbox-image" src={asset(reportPages[openReportPreview].image)} alt={reportPages[openReportPreview].alt} />
            <div className="report-lightbox-footer">
              <button type="button" onClick={() => setOpenReportPreview((openReportPreview + reportPages.length - 1) % reportPages.length)}>
                <ChevronLeft size={18} /> Anterior
              </button>
              <p>{reportPages[openReportPreview].description}</p>
              <button type="button" onClick={() => setOpenReportPreview((openReportPreview + 1) % reportPages.length)}>
                Siguiente <ChevronRight size={18} />
              </button>
            </div>
          </section>
        </div>
      )}

      <footer className="anamnesis-footer">
        <div className="anamnesis-shell anamnesis-footer-inner">
          <div className="anamnesis-footer-brand"><img src="/images/logo-hear-o-pequeno2.webp" alt="Hear-O" /><span>Hear-O Audiology</span></div>
          <p>Herramientas digitales para centros auditivos que quieren crecer sin perder calidad humana.</p>
          <div className="anamnesis-footer-links"><a href="mailto:info@hear-o.es">info@hear-o.es</a><Link to="/">Volver a Hear-O</Link></div>
        </div>
      </footer>
    </div>
  );
};

export default AnamnesisDigitalOnlinePage;
