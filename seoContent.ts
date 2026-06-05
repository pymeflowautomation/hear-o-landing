import {
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  FileCheck,
  Mail,
  MessageSquare,
  Repeat,
  Sparkles,
  Target,
  Users,
  Zap
} from 'lucide-react';

export const SITE_URL = 'https://hear-o.es';

export const FULL_PACK = {
  name: 'Full Pack Lanzamiento',
  setupPrice: '1.990€',
  originalSetupPrice: '2.500€',
  monthlyPrice: '215€',
  originalMonthlyPrice: '269€',
  billingNote: 'al mes con facturación anual',
  amortization: '3-4 meses',
  firstYearBenefit: '13.430€',
  secondYearBenefit: '15.420€',
  firstYearRoi: '+295%',
  secondYearRoi: '+598%'
};

export const modules = [
  {
    id: 'marketing-studio',
    name: 'Marketing Studio',
    eyebrow: 'Captación, fidelización y reactivación',
    path: '/marketing-automatico-centros-auditivos',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    icon: Mail,
    summary: 'Automatiza campañas, contenidos, promociones y seguimiento comercial para que el centro mantenga contacto constante con pacientes y leads.',
    keywords: ['marketing automático para centros auditivos', 'marketing para audiología', 'reactivar pacientes centro auditivo']
  },
  {
    id: 'anamnesis-assistant',
    name: 'Asistente de Anamnesis',
    eyebrow: 'Consulta, argumentacion y cierre',
    path: '/software-anamnesis-vender-mas-audifonos',
    color: 'text-brand-orange',
    bg: 'bg-brand-orange/10',
    border: 'border-brand-orange/30',
    icon: FileCheck,
    summary: 'Guía la anamnesis, convierte datos clínicos en argumentos comprensibles y genera informes que ayudan al paciente a decidir.',
    keywords: ['software de anamnesis para centros auditivos', 'cómo vender más audífonos', 'mejorar conversión centro auditivo']
  },
  {
    id: 'crm-calendario',
    name: 'CRM & Calendario',
    eyebrow: 'Agenda, pacientes y recordatorios',
    path: '/crm-calendario-centros-auditivos',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    icon: CalendarCheck,
    summary: 'Centraliza pacientes, citas, revisiones y renovaciones con recordatorios automáticos por WhatsApp y email.',
    keywords: ['crm para centros auditivos', 'calendario para centros auditivos', 'automatizar citas centro auditivo']
  },
  {
    id: 'expertos-ia',
    name: 'Expertos IA',
    eyebrow: 'Soporte clínico, técnico y comercial',
    path: '/expertos-ia-audiologia',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    icon: BrainCircuit,
    summary: 'Asistentes IA especializados para resolver dudas de audiología, equipos, adaptación, marketing y venta en cualquier momento.',
    keywords: ['IA para audiólogos', 'asistente IA audiología', 'consultor IA audiología']
  }
];

export const modulePages = {
  'crm-calendario': {
    title: 'CRM y Calendario para Centros Auditivos | Hear-O',
    description: 'CRM y calendario para centros auditivos. Organiza pacientes, citas, revisiones, renovaciones y recordatorios automáticos con Hear-O.',
    canonical: `${SITE_URL}/crm-calendario-centros-auditivos`,
    h1: 'CRM y Calendario para Centros Auditivos',
    lead: 'Hear-O CRM & Calendario organiza pacientes, citas, revisiones y renovaciones en un sistema pensado para centros auditivos que quieren ahorrar horas y reducir olvidos.',
    cta: 'Quiero automatizar mi agenda',
    proof: 'Un centro con 30 horas mensuales de gestión puede liberar gran parte de ese tiempo automatizando avisos, revisiones y seguimientos.',
    image: '/images/visual_del_crm.webp',
    imageAlt: 'CRM para centros auditivos con ficha de paciente y seguimiento',
    sections: [
      {
        icon: Users,
        title: 'Pacientes ordenados',
        text: 'Cada contacto queda centralizado con estado, historial, revisiones pendientes y oportunidades de renovacion.'
      },
      {
        icon: CalendarCheck,
        title: 'Citas bajo control',
        text: 'Recordatorios automáticos antes de cada visita para reducir huecos en agenda y llamadas manuales.'
      },
      {
        icon: Repeat,
        title: 'Seguimiento continuo',
        text: 'Revisiones periódicas, periodos de prueba, renovaciones y pacientes antiguos se gestionan sin depender de memoria o hojas sueltas.'
      }
    ],
    faqs: [
      ['¿Hear-O CRM sustituye a NOAH?', 'No. Hear-O se centra en gestión comercial, agenda, recordatorios y seguimiento. Puede partir de datos existentes, pero no sustituye la parte clínica.'],
      ['¿Puede enviar recordatorios automáticos?', 'Sí. El objetivo es reducir llamadas manuales y avisar al paciente por canales como WhatsApp o email según la configuración del centro.'],
      ['¿Sirve para recuperar pacientes antiguos?', 'Sí. Permite segmentar la base de datos y activar acciones de seguimiento para pacientes sin contacto reciente.']
    ]
  },
  'expertos-ia': {
    title: 'Expertos IA para Audiologia y Centros Auditivos | Hear-O',
    description: 'Expertos IA para audiólogos: apoyo 24/7 en dudas clínicas, equipos, adaptación, marketing y venta sin sustituir al profesional.',
    canonical: `${SITE_URL}/expertos-ia-audiologia`,
    h1: 'Expertos IA para Audiologia',
    lead: 'Hear-O Expertos IA es un equipo de asistentes especializados que ayuda al audiologo a resolver dudas clinicas, tecnicas y comerciales al instante.',
    cta: 'Quiero conocer Expertos IA',
    proof: 'Pensado para decisiones del día a día: una duda sobre una prueba, un argumento de venta, una incidencia técnica o una idea de marketing.',
    image: '/images/expertos_ia_hear-o.webp',
    imageAlt: 'Asistente IA para audiólogos y centros auditivos',
    sections: [
      {
        icon: BrainCircuit,
        title: 'Audiología clínica',
        text: 'Apoyo para interpretar situaciones frecuentes y preparar una comunicacion clara con el paciente.'
      },
      {
        icon: Zap,
        title: 'Equipos y adaptacion',
        text: 'Orientación rápida cuando aparece una duda técnica o necesitas revisar una decisión de adaptación.'
      },
      {
        icon: MessageSquare,
        title: 'Venta y marketing',
        text: 'Ideas, argumentos y mensajes para explicar mejor el valor de la solucion auditiva sin presionar al paciente.'
      }
    ],
    faqs: [
      ['¿Expertos IA diagnostica?', 'No. Es una herramienta de apoyo. El audiólogo mantiene siempre la decisión profesional.'],
      ['¿Está disponible todo el día?', 'Sí. Está pensado para resolver dudas en el momento, sin esperar a una llamada o soporte externo.'],
      ['¿Puede ayudar en ventas?', 'Sí. Puede proponer argumentos, respuestas a objeciones y explicaciones más claras para el paciente.']
    ]
  }
};

export const guidePages = [
  {
    slug: 'software-ia-centros-auditivos',
    title: 'Qué es un Sistema IA para centros auditivos',
    description: 'Guía clara sobre qué es un Sistema IA para centros auditivos, qué tareas automatiza y cuándo tiene sentido implantarlo.',
    keyword: 'software IA para centros auditivos',
    answer: 'Un Sistema IA para centros auditivos combina gestión, automatizaciones y asistentes inteligentes para ahorrar tiempo, mejorar seguimiento y ayudar al equipo a vender mejor sin perder trato humano.',
    modulePath: '/software-centros-auditivos-hear-o',
    moduleLabel: 'Ver el sistema completo Hear-O'
  },
  {
    slug: 'como-vender-mas-audifonos-sin-ser-agresivo',
    title: 'Cómo vender más audífonos sin ser agresivo',
    description: 'Claves para vender más audífonos explicando mejor el problema, el valor y el seguimiento posterior.',
    keyword: 'cómo vender más audífonos',
    answer: 'Para vender más audífonos sin ser agresivo hay que mejorar la comprensión del paciente, ordenar la anamnesis y acompañar la decisión con argumentos visuales y seguimiento.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis'
  },
  {
    slug: 'automatizar-citas-revisiones-centro-auditivo',
    title: 'Cómo automatizar citas y revisiones en un centro auditivo',
    description: 'Cómo reducir llamadas, olvidos y huecos en agenda con recordatorios automáticos para centros auditivos.',
    keyword: 'automatizar citas centro auditivo',
    answer: 'Automatizar citas y revisiones consiste en programar avisos, confirmaciones y seguimientos para que el paciente reciba recordatorios sin llamadas manuales del equipo.',
    modulePath: '/crm-calendario-centros-auditivos',
    moduleLabel: 'Ver CRM & Calendario'
  },
  {
    slug: 'crm-para-centros-auditivos-que-debe-incluir',
    title: 'CRM para centros auditivos: qué debe incluir',
    description: 'Elementos clave de un CRM para centros auditivos: pacientes, citas, revisiones, renovaciones y oportunidades.',
    keyword: 'CRM para centros auditivos',
    answer: 'Un CRM para centros auditivos debe controlar pacientes, citas, revisiones, periodos de prueba, renovaciones y acciones comerciales, no solo guardar datos de contacto.',
    modulePath: '/crm-calendario-centros-auditivos',
    moduleLabel: 'Ver CRM & Calendario'
  },
  {
    slug: 'recuperar-pacientes-antiguos-audiologia',
    title: 'Cómo recuperar pacientes antiguos en audiología',
    description: 'Estrategia práctica para reactivar pacientes antiguos y oportunidades dormidas en un centro auditivo.',
    keyword: 'recuperar pacientes centro auditivo',
    answer: 'Para recuperar pacientes antiguos hay que segmentar la base de datos, detectar motivos de contacto y activar campañas de revisión, renovación o seguimiento con mensajes útiles.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio'
  },
  {
    slug: 'ia-para-audiologos-usos-reales',
    title: 'IA para audiólogos: usos reales en consulta',
    description: 'Usos reales de la IA para audiólogos en consulta, soporte técnico, comunicación y venta.',
    keyword: 'IA para audiólogos',
    answer: 'La IA para audiólogos puede apoyar dudas clínicas, explicar conceptos al paciente, preparar argumentos comerciales y ahorrar tiempo en tareas repetitivas.',
    modulePath: '/expertos-ia-audiologia',
    moduleLabel: 'Ver Expertos IA'
  },
  {
    slug: 'marketing-automatico-centros-auditivos-guia',
    title: 'Marketing automático para centros auditivos',
    description: 'Guía de marketing automático para centros auditivos: fidelización, reactivación, captación y contenidos.',
    keyword: 'marketing automático para centros auditivos',
    answer: 'El marketing automático para centros auditivos permite mantener contacto constante con pacientes y leads mediante campañas, recordatorios, contenidos y acciones programadas.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio'
  },
  {
    slug: 'mejorar-conversion-prueba-auditiva',
    title: 'Cómo mejorar la conversión después de una prueba auditiva',
    description: 'Cómo mejorar la conversión tras una prueba auditiva con anamnesis, explicación visual, informe y seguimiento.',
    keyword: 'mejorar conversión centro auditivo',
    answer: 'La conversión mejora cuando el paciente entiende su pérdida auditiva, visualiza el impacto en su vida diaria y recibe un informe claro que sostiene la decisión después de la consulta.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis'
  }
];
