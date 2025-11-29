
import { PricingPlan, FaqItem } from './types';

// Logo URLs
export const LOGO_SMALL = "https://pymeflow.es/wp-content/uploads/2025/11/logo-hear-o-pequeno2.png";
export const LOGO_LARGE = "https://pymeflow.es/wp-content/uploads/2025/11/logo-hear-o-naranja.png";

// Assumptions for Calculator
export const MARGIN_PER_UNIT = 1000; // €
export const UNITS_PER_PATIENT = 2;
export const HOURLY_COST = 23; // €
export const CONVERSION_IMPROVEMENT = 0.6; // 60%
export const TIME_SAVING = 0.8; // 80%
export const RECOVERY_RATE = 0.2; // 20%
// Conservative conversion on recovered patients
export const RECOVERY_CONVERSION = 0.15; 
// Investment cost for Amortization calc (Annual Premium: 4300 Setup + 3000 Monthly fees)
export const ESTIMATED_ANNUAL_INVESTMENT = 7300; 

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Hear-O Starter',
    description: 'Quiero vender más con los pacientes que ya tengo.',
    setupPrice: '1995€',
    monthlyPrice: '143€',
    annualMonthlyPrice: '119€', // 143 * 10 / 12 approx
    highlight: undefined,
    popular: false,
    amortizationTime: "¡Amortizado en 2 meses!",
    amortizationBenefit: "Beneficio Neto Anual estimado: 16.500€",
    idealFor: [
      "Tienes un centro pequeño (1-2 audiólogos)",
      "Recibes pacientes pero te cuesta convertirlos en ventas",
      "No tienes tiempo para crear dossieres profesionales",
      "Te pierdes en el seguimiento y recordatorios manuales"
    ],
    dataBenefits: [
      "🎯 **Mejora tus ventas de audífonos** con un potencial del 60% de conversiones gracias al Asistente Hear-O",
      "⏱️ **Ahorra el 80% del tiempo** de gestión de recordatorios, citas y revisiones periódicas",
      "📊 **Mejora la imagen del centro** con dossieres profesionales y personalizados",
      "💡 **Ahorra un 60% de tu tiempo** en consultas a proveedores y dudas técnicas gracias al Experto IA"
    ],
    features: [
      { text: 'Asistente Hear-O (Anamnesis guiada+ Argumentación comercial)', included: true },
      { text: 'Selección automática de audífonos (2-3 opciones)', included: true },
      { text: 'Dossier personalizado (Diagnóstico + Propuesta + Road Map)', included: true },
      { text: 'CRM con Pacientes y No pacientes', included: true },
      { text: 'Recordatorios automáticos revisiones y fin de prueba', included: true },
      { text: 'Sincronización Automática de Agenda', included: true },
      { text: '1 Experto IA (Audiólogo o Equipos)', included: true },
      { text: 'Marketing a Pacientes', included: false },
      { text: 'Recuperación de Pacientes Perdidos', included: false },
      { text: 'Atención WhatsApp IA 24/7', included: false },
    ]
  },
  {
    id: 'advance',
    name: 'Hear-O Advance',
    description: 'Quiero vender más y recuperar pacientes perdidos.',
    setupPrice: '2.990€',
    monthlyPrice: '180€',
    annualMonthlyPrice: '150€', // 180 * 10 / 12
    highlight: 'Popular',
    popular: true,
    amortizationTime: "Amortizado en 2 meses",
    amortizationBenefit: "Beneficio neto anual estimado: 19.500€",
    idealFor: [
      "Te cuesta Convertir pacientes en ventas",
      "Tienes una base de pacientes sin explotar (antiguos, perdidos)",
      "Quieres recuperar pacientes que no compraron en su día",
      "Quieres mejorar tu gestión de agenda"
    ],
    dataBenefits: [
      "🎯 **Mejora tus ventas de audífonos** con un potencial del 60% de conversiones gracias al Asistente Hear-O",
      "⏱️ **Ahorra el 80% del tiempo** de gestión de recordatorios, citas y revisiones periódicas",
      "🔄 **Fideliza a tus pacientes** con comunicación automatizada y personalizada",
      "📈 **Aumenta el ticket medio** con estrategias de cross-selling y up-selling automáticas",
      "🎨 **Mejora la imagen del centro** con dossieres profesionales y comunicación omnicanal",
      "📊 **Analiza los datos y toma decisiones estratégicas** con informes mensuales detallados",
      "💡 **Ahorra un 60% de tu tiempo** en consultas a proveedores gracias al Experto IA"
    ],
    features: [
      { text: 'Todo lo incluido en Starter', included: true },
      { text: 'Marketing Automatizado (Email/WhatsApp)', included: true },
      { text: 'Secuencias de recuperación y fidelización de Pacientes', included: true },
      { text: 'Marketing de Reseñas Google', included: true },
      { text: 'Gestión de Agenda Avanzada con Auto-reserva', included: true },
      { text: 'Análisis e Informe mensual de ventas', included: true },
      { text: '2 Expertos IA (Audiólogo y Marketing)', included: true },
      { text: 'Captación Activa de Leads', included: false },
      { text: 'Atención WhatsApp IA 24/7', included: false },
    ]
  },
  {
    id: 'premium',
    name: 'Hear-O Premium',
    description: 'Quiero captar más, vender más y crecer sin tener que contratar más empleados',
    setupPrice: '4.300€',
    monthlyPrice: '260€',
    annualMonthlyPrice: '217€', // 260 * 10 / 12 approx
    // Premium Offer Logic
    originalSetupPrice: '6.200€',
    originalMonthlyPrice: '360€',
    discountBadge: '¡Ahorra un 30%!',
    promoText: 'Solo los 100 primeros clientes',
    highlight: 'El más rentable',
    popular: false, 
    amortizationTime: "Amortizado en 4 meses",
    amortizationBenefit: "Beneficio neto anual estimado: 27.000€",
    idealFor: [
      "Quieres dominar tu mercado local y crecer agresivamente",
      "Necesitas captar pacientes nuevos (Leads)",
      "Recibes llamadas/WhatsApp fuera de horario",
      "Buscas una solución completa para todo el funnel"
    ],
    dataBenefits: [
      "🎯 **Mejora tus ventas de audífonos** con un potencial del 60% de conversiones gracias al Asistente Hear-O",
      "🚀 **Capta un 40% más de pacientes potenciales** con el auto-test y marketing automatizado",
      "⏱️ **Ahorra el 80% del tiempo** de gestión de recordatorios, citas y revisiones periódicas",
      "🔄 **Fideliza a tus pacientes** con comunicación omnicanal automatizada",
      "📈 **Aumenta el ticket medio** con estrategias de cross-selling y up-selling inteligentes",
      "🎨 **Mejora la imagen del centro** como referente tecnológico en tu zona",
      "📊 **Analiza los datos y toma decisiones estratégicas** con informes mensuales con IA",
      "⏰ **Ahorra el 70% del tiempo** que dedicas a la atención al paciente gracias al WhatsApp IA",
      "💡 **Ahorra un 75% de tu tiempo** en consultas a proveedores y dudas gracias a los 3 Expertos IA",
      "🌐 **Trabaja 24/7** sin añadir personal: captación, atención y gestión nunca duermen"
    ],
    features: [
      { text: 'Todo lo incluido en Advance', included: true },
      { text: 'Captación Activa de Leads (Auto-test para Centro, Web y RRSS)', included: true },
      { text: 'Secuencias de mail marketing automáticas específicas por perfil del Lead', included: true },
      { text: 'Campañas automáticas vía email y WhatsApp a toda la base', included: true },
      { text: 'Atención al Cliente con IA 24/7 (WhatsApp)', included: true },
      { text: 'Respuestas instantáneas y naturales', included: true },
      { text: 'Experto IA Audiólogo: Consultas clínicas y protocolos', included: true },
      { text: 'Experto IA en Equipos de Adaptación: Soporte técnico y Pruebas audiológicas', included: true },
      { text: 'Experto IA en Marketing y Ventas: Estrategias, copy, análisis competencia', included: true },
      { text: 'Análisis Avanzado Mensual & Estrategia', included: true },
      { text: 'Registro automático de leads en CRM', included: true },
      { text: 'Carga de contactos y pacientes de tu base de datos', included: true },
      { text: 'Soporte Prioritario', included: true },
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cómo funciona realmente el Asistente IA de Ventas Hear-O?",
    answer: "El Asistente Hear-O te ayudará en la parte más complicada del proceso: La Venta. Escuchará al cliente, comprenderá sus respuestas y te propondrá la siguiente pregunta en el tono adecuado y las palabras correctas. Es un Experto “Técnico - Comercial”, es decir, Está entrenado como un Increíble Vendedor con grandes conocimientos de Audiología.\n\nTú sólo tendrás que Leer sus propuestas de preguntas. Cada vez te sentirás más cómodo. Irás aprendiendo con Hear-O.\n\nDespués, terminadas la anamnesis y las pruebas auditivas, conociendo toda la información, accederá a la base de datos de Audífonos y buscará las 3 opciones que mejor se adaptan a tu Paciente.\n\nEn pocos segundos, creará un dossier que incluirá el Diagnóstico, la propuesta elegida y una sencilla guía de los siguientes pasos para que el Paciente esté siempre informado."
  },
  {
    question: "¿Hear-O sustituye al Audioprotesista o Profesional?",
    answer: "No. Hear-O no diagnostica ni decide por ti. Siempre tendrás que Validar y Revisar sus propuestas, él sólo hace el trabajo duro: Vender y presentarte la propuesta. Es un Empleado (incansable y experto) a tu cargo que tú tendrás que supervisar. Tú tendrás la última palabra."
  },
  {
    question: "¿Puedo decidir qué Fabricantes de Audífonos quiero trabajar?",
    answer: "Hear-O dispone de una Base de Datos inmensa con todos los fabricantes y modelos del Mercado, pero tú podrás decidir con qué marcas quieres trabajar. Antes del análisis de soluciones auditivas y antes de crear las propuestas, seleccionarás los Fabricantes con los que quieras trabajar o elegir para ese paciente."
  },
  {
    question: "¿Cuáles son las Mejoras Reales de Hear-O y cuándo las notaré?",
    answer: "Lo primero que vas a notar y desde el primer paciente es que, gracias al Asistente IA Hear-O, tus anamnesis y argumentos comerciales mejorarán de forma increíble. Sabrás qué decir en cada momento, y lo más importante: cómo decirlo. El Asistente Hear-O no sólo te dicta preguntas, te dice cómo argumentarlas y cómo explicarlas para que tu Paciente comprenda su problema, no lo “dramatice” y quiera ponerle solución con la Adaptación de unos Audífonos.\n\nPero también lo notarás porque tus Citas tendrán menos ausencias, porque conseguirás “rescatar” pacientes dormidos, renovaciones y porque tendrás captación de clientes potenciales.\n\nPara ver cómo se reactivan tus contactos y pacientes, pueden pasar algún mes, pero la mejora de tu conversión mejorará desde la primera visita en la que uses el Asistente Hear-O."
  },
  {
    question: "¿Es difícil el uso? ¿Hay Formación?",
    answer: "Está pensado para que cualquier audioprotesista pueda usarlo sin ser “de informática”. La pantalla te va guiando paso a paso; no hay que escribir grandes textos.\n\nIncluimos formación inicial con casos reales y acompañamiento en el arranque. En pocos días el flujo se vuelve rutina y no estorba en la consulta."
  },
  {
    question: "¿Qué incluye el Soporte?",
    answer: "Te ayudamos tanto con el uso diario (dudas, cambios, campañas) como con pequeños ajustes técnicos.\n\nIncluye acompañamiento tras la implantación, no solo la instalación y ya.\n\nLa idea es que el sistema se use y mejore contigo, no que se quede “apagado en un rincón”."
  }
];
