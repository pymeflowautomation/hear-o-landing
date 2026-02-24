
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
    id: 'expertos-ia',
    name: 'Hear-O Expertos IA',
    description: 'Tu consejo de sabios digital 24/7. Tres agentes especializados en Audiología Clínica, Adaptación Técnica y Estrategia de Marketing.',
    setupPrice: '400€',
    monthlyPrice: '59€',
    annualMonthlyPrice: '47€', // 59 * 0.8 approx
    highlight: undefined,
    popular: false,
    amortizationTime: "Amortizado en 1 mes",
    amortizationBenefit: "Ahorra horas en consultas técnicas y mejora tus cierres",
    idealFor: [
      "Necesitas respuestas rápidas a dudas clínicas complejas",
      "Buscas soporte técnico inmediato para tus equipos",
      "Quieres mejorar tus argumentos de venta y cierre"
    ],
    dataBenefits: [
      "💡 **Respuestas al instante** 24/7 sin esperas telefónicas",
      "🧠 **Conocimiento experto** en todas las marcas y patologías",
      "📈 **Mejora tu tasa de cierre** con argumentos comerciales probados"
    ],
    features: [
      { text: 'Consultoría Clínica Instantánea', included: true },
      { text: 'Soporte en Equipos de Medición', included: true },
      { text: 'Mentoría en Ventas y Cierre', included: true },
      { text: 'Resuelve dudas complejas al instante', included: true },
      { text: 'Disponible 24/7', included: true },
    ]
  },
  {
    id: 'marketing-studio',
    name: 'Hear-O Marketing Studio',
    description: 'Marketing profesional "siempre encendido" sin dedicarle tiempo semanal. Fideliza, reactiva y capta automáticamente.',
    setupPrice: '750€',
    monthlyPrice: '99€',
    annualMonthlyPrice: '79€', // 99 * 0.8 approx
    highlight: 'Popular',
    popular: true,
    amortizationTime: "Amortizado en 2 meses",
    amortizationBenefit: "Reactiva pacientes dormidos automáticamente",
    idealFor: [
      "No tienes tiempo para dedicarle al marketing semanalmente",
      "Quieres profesionalizar la imagen de tu centro",
      "Necesitas reactivar pacientes antiguos automáticamente"
    ],
    dataBenefits: [
      "⏱️ **Ahorra el 100% del tiempo** de gestión de campañas",
      "🔄 **Reactiva pacientes** dormidos sin esfuerzo manual",
      "🚀 **Capta nuevos leads** con la Prueba Auditiva Online"
    ],
    features: [
      { text: 'Generador de Campañas y Publicaciones (IA)', included: true },
      { text: 'Panel de Acciones Automáticas (configurable)', included: true },
      { text: 'Prueba Auditiva Online (captación de leads)', included: true },
      { text: 'Actualización mensual de base de datos', included: true },
      { text: 'Fideliza, Reactiva y Capta automáticamente', included: true },
      { text: 'Histórico de acciones realizadas', included: true },
    ]
  },
  {
    id: 'anamnesis-assistant',
    name: 'Hear-O Anamnesis Assistant',
    description: 'Más que un CRM: Su Asistente Comercial Inteligente. Transforme la anamnesis en una conversación dirigida al cierre.',
    setupPrice: '750€',
    monthlyPrice: '99€',
    annualMonthlyPrice: '79€', // 99 * 0.8 approx
    highlight: 'Novedad',
    popular: false, 
    amortizationTime: "Amortizado en 3 meses",
    amortizationBenefit: "Aumenta el ticket medio y la conversión",
    idealFor: [
      "Quieres estandarizar el proceso de venta en tu centro",
      "Buscas diferenciarte con una experiencia visual para el paciente",
      "Necesitas informes profesionales entregados al momento"
    ],
    dataBenefits: [
      "🎯 **Aumenta la conversión** guiando al paciente al cierre",
      "📝 **Informes automáticos** sin dedicar tiempo extra a redactar",
      "⭐ **Experiencia WOW** que justifica el valor de tus audífonos"
    ],
    features: [
      { text: 'Doble pantalla (Audiólogo + Paciente)', included: true },
      { text: 'Guía de anamnesis estructurada', included: true },
      { text: 'Generación de Informe y Argumentario de venta', included: true },
      { text: 'Registro de pruebas audiológicas', included: true },
      { text: 'Impacto visual inmediato para el paciente', included: true },
      { text: 'Cierre de ventas asistido por IA', included: true },
    ]
  },
  {
    id: 'calendar-smart',
    name: 'Hear-O Calendario',
    description: 'Tu agenda bajo control. Reduce el absentismo y automatiza la gestión de citas.',
    setupPrice: '600€',
    monthlyPrice: '78€',
    annualMonthlyPrice: '62€', // 78 * 0.8 approx
    highlight: undefined,
    popular: false,
    amortizationTime: "Amortizado en 1 mes",
    amortizationBenefit: "Recupera horas de gestión administrativa",
    idealFor: [
      "Pierdes tiempo confirmando citas por teléfono",
      "Tienes huecos en la agenda por olvidos de pacientes",
      "Quieres sincronización total con Google Calendar"
    ],
    dataBenefits: [
      "⏱️ **Ahorra 15h/mes** en gestión de agenda",
      "📉 **Reduce un 40%** el absentismo con recordatorios",
      "🔄 **Sincronización total** sin duplicidades"
    ],
    features: [
      { text: 'Recordatorios automáticos (WhatsApp/Email)', included: true },
      { text: 'Avisos antes de cada cita', included: true },
      { text: 'Gestión de revisiones periódicas', included: true },
      { text: 'Sincronización Google Calendar', included: true },
      { text: 'Gestión de renovaciones', included: true },
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Puedo contratar solo una solución o tengo que comprar todo el paquete?",
    answer: "Sí, cada solución (Marketing Studio, Anamnesis Assistant, Calendario, Expertos) es independiente y tiene su propia suscripción. Puedes empezar con la que más necesites.\n\nSin embargo, si contratas dos o más soluciones, las integramos en una única plataforma unificada para facilitarte la gestión y aplicamos un precio especial por paquete."
  },
  {
    question: "¿Realmente Marketing Studio funciona en automático o tengo que escribir yo los correos?",
    answer: "Puedes configurarlo para que trabaje 100% en automático y olvidarte.\n\n• **Campañas Estándar (Fidelización):** Recordatorios de revisión, cumpleaños o fin de garantía se dejan programados en la implantación. El sistema los envía solos siempre.\n• **Promociones (Captación):** El sistema genera ideas proactivamente. Tú solo eliges la idea que te gusta, el público (ej: 'pacientes de más de 3 años') y el canal. Hear-O se encarga de redactar, diseñar y enviar."
  },
  {
    question: "¿El Calendario se sincroniza con NOAH?",
    answer: "El Calendario Inteligente es un sistema independiente diseñado para **eliminar el absentismo y ahorrarte horas de teléfono**.\n\n• Se sincroniza totalmente con **Google Calendar** para que tengas tu agenda en el móvil.\n• No se sincroniza con NOAH en tiempo real (aunque cargamos tus datos iniciales al arrancar).\n• Su objetivo no es sustituir a NOAH, sino gestionar **recordatorios automáticos por WhatsApp y Email** y confirmar citas para que no tengas huecos vacíos."
  },
  {
    question: "¿Qué son los Expertos IA y cómo accedo a ellos?",
    answer: "Son Asistentes Virtuales Avanzados (GPTs personalizados) entrenados con conocimiento clínico, técnico y comercial específico del sector audiológico.\n\nEstán disponibles 24/7 para cuando tengas una duda clínica compleja, necesites soporte técnico sobre un equipo de medida o busques un argumento de venta. Si tienes otras soluciones Hear-O, accederás a ellos desde la misma plataforma."
  },
  {
    question: "¿Hear-O Anamnesis Assistant sustituye al Audiólogo?",
    answer: "Rotundamente no. Hear-O no diagnostica ni decide por ti. Es una herramienta de **apoyo a la venta**.\n\nTe guía durante la anamnesis para estructurar la consulta y te ofrece argumentos comerciales en tiempo real para rebatir objeciones. Tú tomas las decisiones clínicas; Hear-O te ayuda a comunicarlas para que el paciente entienda el valor y diga 'Sí'."
  },
  {
    question: "¿Es difícil de usar? ¿Incluye formación?",
    answer: "Todas las soluciones están diseñadas para ser usadas sin conocimientos técnicos. La pantalla te guía paso a paso.\n\nAdemás, la cuota de implantación incluye la configuración inicial completa (carga de datos, logos, precios) y una formación dedicada para ti y tu equipo. Te acompañamos en el arranque para asegurar que le sacas partido desde el primer día."
  }
];
