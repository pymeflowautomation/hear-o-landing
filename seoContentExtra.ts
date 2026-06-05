export const guideCategories = [
  'Ventas',
  'Captación',
  'Anamnesis',
  'CRM y Agenda',
  'IA para audiólogos',
  'Comparativas',
  'Recursos útiles'
];

type GuideVisuals = {
  ready?: boolean;
  infographic?: {
    src: string;
    alt: string;
    prompt: string;
  };
  image: {
    src: string;
    alt: string;
    prompt: string;
  };
};

type GuideExtra = {
  category: string;
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
  visuals?: GuideVisuals;
};

const visualBase = '/images';

export const guideEnhancements: Record<string, GuideExtra> = {
  'software-ia-centros-auditivos': {
    category: 'IA para audiólogos',
    tips: ['Unificar marketing, agenda y consulta en un flujo único.', 'Automatizar recordatorios y acciones repetitivas.', 'Usar IA como apoyo al equipo, no como sustituto.'],
    example: 'Un centro que usa hojas sueltas, agenda manual y mensajes improvisados puede empezar conectando citas, revisiones, pacientes antiguos y argumentos de consulta dentro de un mismo sistema.',
    tableRows: [['Software tradicional', 'Gestiona datos y procesos internos'], ['Sistema IA Hear-O', 'Gestiona, automatiza y ayuda a vender mejor'], ['SaaS cerrado', 'Obliga a adaptarse a una estructura fija']],
    sections: [
      {
        id: 'que-es',
        title: 'Qué es un Sistema IA para centros auditivos',
        paragraphs: [
          'Un Sistema IA para centros auditivos no debería limitarse a guardar pacientes o mostrar una agenda. Su valor está en conectar las partes que normalmente trabajan separadas: captación, seguimiento, consulta, recordatorios, campañas y apoyo al equipo.',
          'En un centro auditivo, muchas oportunidades no se pierden por falta de profesionalidad, sino por falta de sistema. Un paciente no vuelve a revisión, una base de datos queda parada, una prueba termina sin seguimiento o cada persona del equipo explica el valor de los audífonos de una forma distinta.'
        ]
      },
      {
        id: 'por-que-importa',
        title: 'Por qué la IA tiene sentido en un centro auditivo',
        paragraphs: [
          'La IA aporta valor cuando ayuda a ordenar decisiones repetitivas y a mejorar la comunicación con el paciente. No se trata de sustituir al audiólogo ni de automatizar la parte humana de la consulta. Se trata de liberar tiempo y dar soporte en tareas donde el equipo suele improvisar o depender de memoria.',
          'Por ejemplo, puede ayudar a preparar argumentos comerciales, segmentar pacientes antiguos, generar ideas de campañas, recordar revisiones, crear materiales de apoyo tras una prueba auditiva o resolver dudas frecuentes del equipo.'
        ],
        bullets: [
          'Menos tareas manuales en agenda y seguimiento.',
          'Más consistencia en la explicación al paciente.',
          'Mejor aprovechamiento de la base de datos del centro.',
          'Más capacidad para captar, fidelizar y reactivar pacientes.'
        ]
      },
      {
        id: 'que-debe-incluir',
        title: 'Qué debe incluir un buen sistema con IA para audiología',
        paragraphs: [
          'Un sistema útil para centros auditivos debe estar pensado para el recorrido real del paciente, no solo para la gestión interna. La captación, la cita, la prueba, la recomendación, la decisión y el seguimiento posterior forman parte del mismo proceso.',
          'Por eso, la IA debe trabajar conectada con CRM, calendario, marketing, anamnesis e informes. Si cada herramienta funciona por separado, el centro acaba teniendo más pantallas, más tareas y menos claridad.'
        ],
        bullets: [
          'CRM para saber qué necesita cada paciente y cuál es la próxima acción.',
          'Calendario y recordatorios para reducir olvidos y ausencias.',
          'Marketing automático para captar, fidelizar y reactivar.',
          'Anamnesis asistida para explicar mejor la necesidad auditiva.',
          'Expertos IA para apoyar al equipo en dudas clínicas, técnicas y comerciales.'
        ]
      },
      {
        id: 'errores-frecuentes',
        title: 'Errores frecuentes al implantar IA en un centro auditivo',
        paragraphs: [
          'El error más habitual es pensar que la IA por sí sola va a resolver el crecimiento del centro. La tecnología ayuda, pero necesita un proceso claro: qué pacientes se van a contactar, qué mensajes se enviarán, cuándo se hará seguimiento y cómo se medirá el resultado.',
          'Otro error es elegir una herramienta genérica que no entiende el día a día de un centro auditivo. Audiología tiene tiempos, objeciones, revisiones, renovaciones y una sensibilidad comercial muy concreta. La IA debe adaptarse a ese contexto.'
        ]
      },
      {
        id: 'hear-o',
        title: 'Cómo encaja Hear-O en este enfoque',
        paragraphs: [
          'Hear-O está planteado como un Sistema IA personalizado para centros auditivos. Combina CRM, automatizaciones, marketing, calendario, anamnesis asistida y expertos IA para que el centro tenga un proceso más ordenado desde la captación hasta el seguimiento posterior.',
          'La diferencia importante es que no se plantea como un SaaS cerrado donde el centro se adapta a lo que hay. La implantación puede ajustarse a la marca, los mensajes, la base de datos, las campañas y la forma de trabajar de cada centro.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La IA no sustituye el trato humano del centro auditivo. Lo que debe hacer es ayudar al equipo a llegar mejor preparado, hacer seguimiento a tiempo y explicar el valor con más claridad.',
      items: ['Más orden', 'Más seguimiento', 'Mejor explicación', 'Más oportunidades']
    },
    faqs: [
      ['¿Hear-O es un software?', 'Sí, pero su valor principal es ser un Sistema IA personalizado para centros auditivos. No se limita a gestionar datos: conecta CRM, marketing, calendario, anamnesis y automatizaciones.'],
      ['¿Sustituye al equipo?', 'No. Ayuda al equipo a ahorrar tiempo, explicar mejor y hacer seguimiento. La decisión profesional y el trato humano siguen siendo del centro.'],
      ['¿Puede convivir con otros programas?', 'Sí. Hear-O puede complementar sistemas existentes cuando el centro necesita mejorar captación, seguimiento, venta y automatizaciones.'],
      ['¿La base de datos sigue siendo del centro?', 'Sí. La base de datos y la relación con los pacientes siguen perteneciendo al centro auditivo.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-sistema-ia-centros-auditivos.webp`,
        alt: 'Infografía del Sistema IA Hear-O conectado con marketing, CRM, calendario, anamnesis y expertos IA',
        prompt: 'Mapa visual de Hear-O conectando marketing, CRM, calendario, anamnesis y expertos IA en un centro auditivo español, estilo profesional limpio, colores naranja y azul'
      },
      image: {
        src: `${visualBase}/sistema-ia-centro-auditivo.webp`,
        alt: 'Audiólogo usando un panel IA de Hear-O en un centro auditivo',
        prompt: 'Audiólogo usando una pantalla moderna con panel IA en un centro auditivo luminoso, paciente sentado enfrente, estilo realista profesional'
      }
    }
  },
  'como-vender-mas-audifonos-sin-ser-agresivo': {
    category: 'Ventas',
    tips: ['Preguntar antes de argumentar.', 'Traducir datos técnicos a situaciones cotidianas.', 'Resumir el beneficio antes de hablar de precio.', 'Cerrar con una siguiente acción clara, no con un “ya me dirá”.'],
    example: 'Si el paciente duda por precio, el equipo puede volver a la escena concreta que apareció en la anamnesis: la comida familiar, la televisión, una conversación con los nietos o el cansancio al final del día. La recomendación deja de ser “este audífono cuesta X” y pasa a ser “esta solución responde a lo que usted me dijo que quería recuperar”.',
    tableRows: [['Venta agresiva', 'Presiona, habla de precio demasiado pronto y genera rechazo'], ['Venta consultiva', 'Escucha, detecta necesidades y acompaña la decisión con claridad'], ['Hear-O', 'Ordena preguntas, argumentos, explicación visual e informe para sostener la decisión']],
    sections: [
      {
        id: 'venta-consultiva',
        title: 'Vender audífonos sin presionar: la base es la venta consultiva',
        paragraphs: [
          'Vender más audífonos no debería significar presionar más. En audiología, vender bien significa ayudar al paciente a comprender qué le ocurre, cómo afecta a su vida diaria y qué solución puede devolverle comunicación, autonomía y tranquilidad.',
          'La diferencia está en el enfoque. Una venta transaccional se centra en el aparato, la marca, los canales o el precio. Una venta consultiva se centra en la persona: qué situaciones evita, qué conversaciones le duelen, qué miedos tiene y qué espera recuperar.'
        ]
      },
      {
        id: 'anamnesis-emocional',
        title: 'La anamnesis emocional antes que el argumento comercial',
        paragraphs: [
          'El paciente no siempre llega diciendo “quiero comprar audífonos”. Muchas veces llega con dudas, vergüenza, miedo al precio o resistencia a aceptar su pérdida auditiva. Por eso, antes de argumentar, hay que escuchar.',
          'Una buena anamnesis no se queda en “¿qué tal oye?”. Busca escenas concretas: comidas familiares, llamadas, televisión, reuniones, conversaciones con nietos, sensación de aislamiento o cansancio por intentar entender. Esas escenas son la base ética de la recomendación.'
        ],
        bullets: [
          'Qué situación le frustra más.',
          'Qué evita hacer por no oír bien.',
          'Qué le gustaría recuperar si la adaptación funciona.',
          'Qué miedo tiene respecto al audífono, al precio o al cambio.'
        ]
      },
      {
        id: 'traducir-tecnologia',
        title: 'Traducir tecnología a beneficios de vida',
        paragraphs: [
          'Uno de los errores más habituales es explicar audífonos como si el paciente comprara fichas técnicas. Canales, algoritmos, direccionalidad o inteligencia artificial pueden ser importantes, pero no venden por sí solos si el paciente no entiende qué ganará con ellos.',
          'La tecnología debe traducirse a beneficios cotidianos. No se trata de decir “este modelo tiene mejor reducción de ruido”, sino “este modelo le ayudará a seguir una conversación en una comida sin terminar agotado por el esfuerzo”.'
        ],
        bullets: [
          'Reducción de ruido: menos cansancio en restaurantes o reuniones.',
          'Conectividad: llamadas y televisión con más comodidad y menos discusiones en casa.',
          'Ajuste objetivo: tranquilidad de saber que la adaptación no se hace “a ojo”.',
          'Gama superior: más ayuda en las escenas complejas que el propio paciente ha descrito.'
        ]
      },
      {
        id: 'precio-objeciones',
        title: 'Cómo hablar de precio sin parecer agresivo',
        paragraphs: [
          'El precio suele aparecer como objeción, pero muchas veces es una mezcla de miedo, falta de comprensión del valor y dudas sobre si realmente funcionará. Si se habla de precio antes de que el paciente entienda el beneficio, la conversación se vuelve defensiva.',
          'La forma ética de abordar el precio es conectarlo con el objetivo de vida que el paciente ha expresado y explicar el proceso con transparencia: adaptación, periodo de prueba, ajustes, revisiones y acompañamiento.'
        ]
      },
      {
        id: 'cierre-etico',
        title: 'El cierre ético: no abandonar al paciente con sus dudas',
        paragraphs: [
          'Cerrar no debería ser un momento incómodo ni una presión final. Si la consulta ha sido clara, el cierre es la consecuencia natural de un proceso bien explicado. El paciente entiende el problema, entiende la solución y necesita un siguiente paso concreto.',
          'Terminar con “pues ya se lo piensa” puede parecer prudente, pero muchas veces deja al paciente solo con su miedo, su duda y su pérdida auditiva. Un cierre ético no fuerza; propone un plan: probar, ajustar, revisar y decidir con información.'
        ],
        bullets: [
          'Resumir lo que el paciente dijo que quería recuperar.',
          'Confirmar que la solución responde a esas situaciones.',
          'Resolver la última duda antes de avanzar.',
          'Proponer el siguiente paso de forma clara y tranquila.'
        ]
      },
      {
        id: 'hear-o-ayuda',
        title: 'Cómo ayuda Hear-O a vender mejor sin ser agresivo',
        paragraphs: [
          'Hear-O no sustituye la conversación del audioprotesista. La ordena. Ayuda a que la anamnesis sea más completa, que los argumentos estén conectados con la vida real del paciente y que el informe posterior refuerce la decisión cuando el paciente llega a casa.',
          'Esto es especialmente útil cuando varios profesionales atienden en el mismo centro. El sistema ayuda a mantener un método común: preguntar mejor, explicar mejor, visualizar el impacto y dar seguimiento sin depender de la memoria o de la improvisación.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El buen cierre no empieza al final de la consulta. Empieza cuando el paciente se siente escuchado y entiende que la recomendación responde a su propia vida.',
      items: ['Escuchar', 'Traducir', 'Visualizar', 'Acompañar']
    },
    faqs: [
      ['¿Vender mejor significa presionar?', 'No. Significa explicar mejor, escuchar más y ayudar al paciente a decidir con información clara.'],
      ['¿Cómo se evita parecer agresivo?', 'Evitando empezar por el precio o por la tecnología. Primero hay que entender la situación del paciente y después conectar la solución con esa necesidad.'],
      ['¿Es útil hablar de emociones en una venta de audífonos?', 'Sí. La pérdida auditiva afecta a conversaciones, familia, autonomía y confianza. Ignorar esa parte hace que la recomendación parezca fría o puramente comercial.'],
      ['¿Dónde ayuda Hear-O?', 'En anamnesis, argumentos, explicación visual, informe y seguimiento posterior. Ayuda a convertir la consulta en un proceso más claro y consistente.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-venta-etica-audifonos.webp`,
        alt: 'Infografía del proceso de venta ética de audífonos en cinco pasos',
        prompt: 'Proceso de venta ética de audífonos en 5 pasos: escuchar, explicar, visualizar, recomendar, acompañar, diseño claro para centros auditivos'
      },
      image: {
        src: `${visualBase}/venta-audifonos-sin-presionar.webp`,
        alt: 'Audióloga explicando audífonos a un paciente con apoyo visual',
        prompt: 'Audióloga explicando opciones de audífonos a un paciente mayor con una pantalla visual, ambiente cercano y profesional'
      }
    }
  },
  'automatizar-citas-revisiones-centro-auditivo': {
    category: 'CRM y Agenda',
    tips: ['Enviar recordatorios antes de la cita.', 'Programar revisiones futuras al cerrar la visita.', 'Separar pacientes por tipo de cita, estado y próxima acción.', 'Automatizar solo los mensajes repetitivos y dejar al equipo las conversaciones que requieren criterio.'],
    example: 'Un centro que confirma citas por teléfono puede ahorrar horas si cada paciente recibe avisos automáticos y el equipo solo interviene cuando hay una cancelación, una duda o una oportunidad comercial clara.',
    tableRows: [['Agenda manual', 'Depende de llamadas, memoria y revisión constante'], ['Calendario conectado', 'Ordena citas, revisiones y próximos pasos'], ['Automatización', 'Recuerda, confirma, segmenta y reduce ausencias'], ['Hear-O Calendar', 'Convierte esos flujos en una interfaz visual para el centro auditivo']],
    sections: [
      {
        id: 'por-que-automatizar',
        title: 'Por qué automatizar citas y revisiones en un centro auditivo',
        paragraphs: [
          'En un centro auditivo, la agenda no es solo una lista de horas ocupadas. Es una fuente directa de ingresos, fidelización y oportunidades futuras. Cada cita olvidada, revisión no programada o paciente sin seguimiento puede terminar en horas perdidas, huecos en agenda y ventas que nunca llegan a producirse.',
          'Automatizar citas y revisiones permite reducir tareas repetitivas, evitar olvidos y dar al paciente una sensación de centro ordenado. No se trata de eliminar el trato humano, sino de reservarlo para lo importante: resolver dudas, explicar opciones y acompañar decisiones.'
        ]
      },
      {
        id: 'valor-economico',
        title: 'El valor real: ahorro de horas, menos ausencias y más oportunidades',
        paragraphs: [
          'Muchas veces el coste de una agenda manual no se ve porque está repartido en pequeñas tareas: llamar para confirmar, buscar huecos, recordar revisiones, perseguir pacientes que no contestan, revisar hojas o mirar el calendario varias veces al día.',
          'Cuando esas tareas se automatizan, el centro gana tiempo administrativo y reduce errores. Además, una revisión que se agenda y se recuerda a tiempo puede convertirse en una oportunidad de ajuste, renovación, mantenimiento o recomendación.'
        ],
        bullets: [
          'Menos llamadas manuales para confirmar citas.',
          'Menos huecos por olvidos o ausencias.',
          'Más revisiones programadas en el momento adecuado.',
          'Más control sobre garantías, renovaciones y periodos de prueba.'
        ]
      },
      {
        id: 'segmentacion',
        title: 'Segmentar citas: la clave para no enviar el mismo mensaje a todos',
        paragraphs: [
          'No todas las citas tienen el mismo objetivo. Una primera prueba auditiva, una adaptación, una revisión, una limpieza, una garantía o una renovación necesitan mensajes distintos y tiempos distintos.',
          'La segmentación permite que cada paciente reciba el aviso adecuado según su situación. Esto mejora la asistencia, reduce confusión y hace que el centro parezca más profesional sin tener que escribir cada mensaje a mano.'
        ],
        bullets: [
          'Primeras visitas y pruebas auditivas.',
          'Adaptaciones y revisiones de seguimiento.',
          'Revisiones periódicas y mantenimiento.',
          'Garantías, renovaciones y pacientes antiguos.'
        ]
      },
      {
        id: 'flujos',
        title: 'Qué hay detrás: flujos, herramientas y automatizaciones',
        paragraphs: [
          'Técnicamente, estas automatizaciones suelen apoyarse en herramientas de conexión como Make, n8n u otros sistemas capaces de unir formularios, calendarios, bases de datos, email, WhatsApp y tareas internas.',
          'La idea general es sencilla: cuando ocurre algo en el calendario o en la ficha del paciente, se dispara una acción. Por ejemplo, enviar un recordatorio, crear una tarea para recepción, programar una revisión futura o avisar al equipo si el paciente no confirma.',
          'La parte delicada no es solo conectar herramientas. Lo importante es diseñar bien el flujo: qué se envía, a quién, cuándo, por qué canal y qué debe ocurrir si el paciente responde, cancela o no confirma.'
        ]
      },
      {
        id: 'errores',
        title: 'Errores habituales al automatizar la agenda',
        paragraphs: [
          'Automatizar mal puede ser casi tan problemático como no automatizar. Si todos los pacientes reciben el mismo mensaje, si los avisos llegan tarde o si nadie revisa las respuestas, el sistema pierde valor.',
          'También conviene evitar una automatización excesivamente fría. El paciente debe sentir orden y acompañamiento, no que está hablando con una máquina. Por eso es importante automatizar lo repetitivo y dejar margen al equipo cuando aparece una situación personal.'
        ]
      },
      {
        id: 'hear-o-calendar',
        title: 'Cómo lo facilita Hear-O Calendar',
        paragraphs: [
          'Hear-O Calendar busca que el centro no tenga que construir todo este sistema desde cero. La lógica de citas, recordatorios, revisiones y seguimiento se concentra en una interfaz visual pensada para centros auditivos.',
          'El objetivo es que el equipo pueda ver qué ocurre con cada paciente, qué acciones están programadas y qué necesita atención humana. Así, las automatizaciones dejan de ser algo técnico y se convierten en una herramienta práctica para ahorrar tiempo y mantener la agenda viva.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Automatizar la agenda no es enviar mensajes automáticos sin control. Es convertir cada cita y revisión en un flujo ordenado que ahorra tiempo y evita oportunidades perdidas.',
      items: ['Menos llamadas', 'Menos ausencias', 'Más revisiones', 'Más control']
    },
    extraImages: [
      {
        src: `${visualBase}/recordatorios_automaticos_citas_centro_auditivo.webp`,
        alt: 'Recordatorios automáticos de citas para un centro auditivo',
        afterSectionId: 'hear-o-calendar'
      }
    ],
    faqs: [
      ['¿Esto sustituye el trato humano?', 'No. Reduce tareas repetitivas para que el equipo pueda dedicar más tiempo a conversaciones importantes.'],
      ['¿Sirve para revisiones y garantías?', 'Sí. Es especialmente útil para revisiones periódicas, periodos de prueba, garantías, mantenimiento y renovaciones.'],
      ['¿Hace falta usar herramientas como Make o n8n?', 'En muchos proyectos de automatización se usan herramientas de conexión, pero el centro no debería tener que diseñar todo desde cero si cuenta con un sistema ya preparado.'],
      ['¿Qué aporta Hear-O Calendar?', 'Aporta una interfaz visual y una lógica pensada para centros auditivos, facilitando recordatorios, seguimiento y organización de la agenda sin depender de procesos manuales.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-recordatorios-citas-centro-auditivo.webp`,
        alt: 'Infografía de recordatorios automáticos para citas y revisiones de un centro auditivo',
        prompt: 'Flujo de recordatorios automáticos para centro auditivo: cita, WhatsApp, confirmación, revisión, seguimiento, estilo SaaS limpio'
      },
      image: {
        src: `${visualBase}/calendario-digital-centro-auditivo.webp`,
        alt: 'Recepción de centro auditivo con calendario digital y recordatorios',
        prompt: 'Recepción de centro auditivo con calendario digital y notificaciones de citas en pantalla, estilo realista'
      }
    }
  },
  'crm-para-centros-auditivos-que-debe-incluir': {
    category: 'CRM y Agenda',
    tips: ['Registrar la próxima acción de cada paciente.', 'Separar pacientes nuevos, activos, en prueba, pendientes y dormidos.', 'Medir oportunidades, no solo contactos.', 'Usar la información del CRM para captar, convertir y fidelizar mejor.'],
    example: 'Un paciente que compró hace cuatro años no debe quedar olvidado. Un buen CRM debe detectar que puede necesitar revisión, mantenimiento, renovación o una nueva recomendación, y facilitar que el centro actúe a tiempo.',
    tableRows: [['CRM básico', 'Guarda datos y notas de pacientes'], ['CRM útil', 'Organiza agenda, seguimiento, estados y próximas acciones'], ['CRM estratégico', 'Ayuda a captar, convertir, recuperar base de datos y mejorar la experiencia del paciente'], ['Hear-O CRM & Calendario', 'Conecta pacientes, citas, recordatorios, informes y automatizaciones en una interfaz visual']],
    sections: [
      {
        id: 'mas-que-base-datos',
        title: 'Un CRM para centros auditivos debe ser más que una base de datos',
        paragraphs: [
          'Muchos centros llaman CRM a una lista de pacientes con nombre, teléfono y alguna nota. Eso puede servir para consultar información, pero no transforma el trabajo diario ni ayuda realmente a vender más o a atender mejor.',
          'Un CRM para centros auditivos debería funcionar como el sistema nervioso del centro: saber quién es cada paciente, en qué punto está, qué necesita ahora, qué cita tiene pendiente y cuál es la próxima acción recomendada.'
        ]
      },
      {
        id: 'trabajo-diario',
        title: 'Facilitar el trabajo diario del audiólogo y del equipo',
        paragraphs: [
          'El audiólogo debería poder concentrarse en lo que mejor sabe hacer: diagnosticar, adaptar, explicar y acompañar al paciente. Si pierde demasiado tiempo buscando datos, revisando agendas, recordando llamadas o reconstruyendo el historial, el CRM no está cumpliendo su función.',
          'Un buen CRM reduce fricción. Permite entrar en la ficha del paciente y entender rápido su situación: historial, citas, pruebas, audífonos, revisiones, incidencias, objeciones, oportunidades y próximos pasos.'
        ],
        bullets: [
          'Menos tiempo buscando información.',
          'Menos dependencia de memoria, papeles o Excel.',
          'Más claridad antes de cada visita.',
          'Más coordinación entre recepción, audiología y seguimiento comercial.'
        ]
      },
      {
        id: 'captacion-conversion',
        title: 'Captación y conversión: el CRM también debe ayudar a vender mejor',
        paragraphs: [
          'Un CRM no debería limitarse a registrar lo que ya ha pasado. También debe ayudar a generar nuevas oportunidades. Para un centro auditivo, esto significa controlar leads, pruebas auditivas, campañas, pacientes pendientes de decisión y contactos antiguos que pueden volver a activarse.',
          'La conversión mejora cuando el equipo sabe en qué punto está cada persona. No es lo mismo un lead que pidió información, un paciente que hizo una prueba y no decidió, una adaptación en periodo de prueba o un usuario que compró hace años y nunca volvió.'
        ],
        bullets: [
          'Seguimiento de leads y primeras visitas.',
          'Pacientes que hicieron prueba auditiva y no compraron.',
          'Oportunidades de renovación o revisión.',
          'Campañas de captación y reactivación conectadas con la base de datos.'
        ]
      },
      {
        id: 'base-de-datos',
        title: 'Aprovechar la base de datos: el activo oculto del centro auditivo',
        paragraphs: [
          'La base de datos de un centro auditivo suele tener mucho más valor del que parece. En ella hay pacientes antiguos, revisiones pendientes, garantías cercanas a vencer, renovaciones posibles, familiares, leads fríos y oportunidades que no se trabajaron en su momento.',
          'El problema es que, si esa información no está segmentada ni conectada con acciones concretas, se queda dormida. Un CRM útil permite convertir datos en decisiones: a quién contactar, por qué motivo, con qué mensaje y cuándo.'
        ]
      },
      {
        id: 'agenda-recordatorios',
        title: 'Agenda, recordatorios y soluciones rápidas a problemas cotidianos',
        paragraphs: [
          'Un centro auditivo vive muchas situaciones repetidas: pacientes que olvidan citas, revisiones que no se programan, huecos que aparecen tarde, llamadas pendientes, garantías sin revisar o periodos de prueba sin seguimiento claro.',
          'El CRM debe ayudar a resolver esos problemas de forma rápida. No siempre hace falta una gran estrategia; a veces el valor está en que el sistema avise, recuerde, ordene y evite que una tarea importante dependa de que alguien se acuerde.'
        ],
        bullets: [
          'Recordatorios automáticos de citas.',
          'Avisos de revisiones y renovaciones.',
          'Tareas internas para recepción o audiología.',
          'Estados claros para saber qué paciente necesita atención.'
        ]
      },
      {
        id: 'fichas-informes-recomendaciones',
        title: 'Fichas completas, informes y recomendaciones',
        paragraphs: [
          'Una ficha de paciente completa no debería ser un almacén de datos sin uso. Debe ayudar al profesional a llegar preparado a cada consulta y a ofrecer una experiencia más clara al paciente.',
          'Cuando el CRM conecta información clínica, comercial y de seguimiento, puede facilitar informes más completos, recomendaciones mejor justificadas y una comunicación más coherente después de la visita.'
        ],
        bullets: [
          'Historial del paciente y evolución.',
          'Audífonos, pruebas, revisiones y observaciones.',
          'Objeciones, preferencias y situaciones importantes detectadas.',
          'Informes claros para reforzar la decisión y el seguimiento.'
        ]
      },
      {
        id: 'hear-o-crm',
        title: 'Por qué Hear-O encaja en este enfoque',
        paragraphs: [
          'Hear-O encaja porque no plantea el CRM como una pieza aislada, sino como parte de un sistema completo para captar, organizar, explicar, convertir y hacer seguimiento. En un centro auditivo, esas fases están conectadas: una campaña genera un lead, ese lead necesita cita, la consulta necesita una buena anamnesis y después hace falta seguimiento.',
          'Por eso, cada módulo de Hear-O aporta una parte concreta del proceso y evita que el centro dependa de herramientas sueltas o de tareas manuales que se pierden entre recepción, consulta y marketing.'
        ],
        bullets: [
          'Marketing Studio ayuda a captar, fidelizar y reactivar pacientes con campañas, contenidos y acciones conectadas con la base de datos.',
          'CRM & Calendario organiza pacientes, citas, recordatorios, revisiones, garantías y próximas acciones para que nada dependa de la memoria del equipo.',
          'Asistente de Anamnesis ayuda a convertir mejor la consulta, conectando necesidades del paciente con argumentos claros, informes y recomendaciones.',
          'Expertos IA da apoyo al equipo en dudas clínicas, técnicas, comerciales y de marketing, para resolver problemas cotidianos con más rapidez.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El mejor CRM para un centro auditivo no es el que guarda más datos, sino el que convierte esos datos en próximas acciones útiles.',
      items: ['Pacientes claros', 'Agenda ordenada', 'Más seguimiento', 'Mejor conversión']
    },
    faqs: [
      ['¿Un CRM es solo una agenda?', 'No. Una agenda organiza citas; un CRM debe organizar pacientes, estados, seguimiento, oportunidades e historial.'],
      ['¿Puede ayudar a captar pacientes?', 'Sí. Si conecta leads, campañas y base de datos, puede ayudar a captar, reactivar y hacer seguimiento de oportunidades.'],
      ['¿La base de datos sigue siendo del centro?', 'Sí. La base de datos pertenece al centro y debe poder usarse para mejorar el seguimiento y la relación con los pacientes.'],
      ['¿Qué aporta Hear-O frente a un CRM aislado?', 'Aporta un sistema más completo: Marketing Studio para captar y reactivar, CRM & Calendario para organizar, Anamnesis para convertir mejor la consulta y Expertos IA para apoyar al equipo.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-crm-centro-auditivo.webp`,
        alt: 'Infografía de la estructura ideal de un CRM para centros auditivos',
        prompt: 'Estructura ideal de CRM para centro auditivo: pacientes, citas, revisiones, ventas, garantías, oportunidades'
      },
      image: {
        src: `${visualBase}/crm-ficha-paciente-centro-auditivo.webp`,
        alt: 'Pantalla de CRM con ficha de paciente y seguimiento comercial',
        prompt: 'Pantalla de CRM con ficha de paciente auditivo, agenda y seguimiento comercial, diseño moderno'
      }
    }
  },
  'recuperar-pacientes-antiguos-audiologia': {
    category: 'Captación',
    tips: ['Segmentar por tiempo sin contacto y situación del paciente.', 'Usar motivos útiles: revisión, garantía, limpieza, adaptación o renovación.', 'Medir respuestas, citas generadas y oportunidades recuperadas.', 'Automatizar la estrategia para que no dependa de campañas puntuales o de tiempo libre.'],
    example: 'Una base de datos antigua puede esconder pacientes con audífonos fuera de garantía, revisiones pendientes, necesidades nuevas o familiares que también podrían necesitar ayuda. Si el centro no los contacta, esas oportunidades quedan invisibles.',
    tableRows: [['Base de datos olvidada', 'Pacientes antiguos sin contacto, sin revisión y sin seguimiento'], ['Reactivación manual', 'Requiere segmentar, escribir mensajes, usar herramientas externas y dedicar horas'], ['Reactivación automatizada', 'Mantiene contacto constante con menos carga para el equipo'], ['Hear-O Marketing Studio', 'Configura parámetros sencillos y deja campañas, textos y acciones trabajando en automático']],
    sections: [
      {
        id: 'por-que-importa',
        title: 'Por qué recuperar pacientes antiguos es tan importante',
        paragraphs: [
          'Muchos centros auditivos invierten tiempo y dinero en captar pacientes nuevos, pero se olvidan de una fuente de valor que ya tienen: su propia base de datos. Ahí hay personas que ya conocen el centro, que ya confiaron en el equipo o que en algún momento mostraron interés.',
          'Recuperar pacientes antiguos no es solo una acción comercial. También es una forma de cuidar la salud auditiva de personas que pueden llevar años sin revisión, con audífonos mal ajustados, garantías vencidas o necesidades que han cambiado.'
        ]
      },
      {
        id: 'beneficio-economico',
        title: 'El beneficio real y económico de no olvidar la base de datos',
        paragraphs: [
          'Una base de datos dormida tiene coste, aunque no aparezca como una factura. Cada paciente sin seguimiento puede ser una revisión perdida, una renovación que hace la competencia, una recomendación que nunca llega o una oportunidad de venta que se enfría.',
          'El retorno puede ser muy alto porque no se parte de cero. No hay que convencer a un desconocido de que el centro existe; hay que recuperar una relación y darle un motivo útil para volver.'
        ],
        bullets: [
          'Más revisiones y citas de mantenimiento.',
          'Más oportunidades de renovación de audífonos.',
          'Más fidelización y contacto con pacientes antiguos.',
          'Menos dependencia de campañas de captación externa.'
        ]
      },
      {
        id: 'segmentacion',
        title: 'Segmentar antes de enviar: no todos los pacientes antiguos son iguales',
        paragraphs: [
          'El error habitual es mandar el mismo mensaje a toda la base de datos. Eso suele generar poca respuesta y puede parecer impersonal. Una buena reactivación empieza separando grupos de pacientes según su situación.',
          'No necesita el mismo mensaje una persona que compró hace seis meses, otra que terminó la garantía hace poco, un paciente que hizo una prueba y no compró, o alguien que lleva cuatro años sin revisión.'
        ],
        bullets: [
          'Pacientes sin revisión reciente.',
          'Usuarios con audífonos fuera de garantía.',
          'Pacientes que hicieron prueba pero no compraron.',
          'Contactos antiguos que nunca llegaron a cita.',
          'Pacientes con posible renovación por antigüedad del dispositivo.'
        ]
      },
      {
        id: 'acciones-mensajes',
        title: 'Qué acciones y mensajes funcionan mejor',
        paragraphs: [
          'El mensaje no debe sonar a “ven a comprar”. Debe tener un motivo útil y creíble: revisión auditiva, ajuste, limpieza, comprobación de audífonos, final de garantía, nueva tecnología, revisión anual o seguimiento de una prueba anterior.',
          'El objetivo de cada campaña debe estar claro. A veces será generar una cita de revisión. Otras, recuperar un paciente que no decidió. Otras, informar de una mejora o recordar que conviene revisar el estado de los audífonos.'
        ],
        bullets: [
          'Campaña de revisión anual.',
          'Campaña de fin de garantía o mantenimiento.',
          'Campaña para pacientes que no cerraron tras la prueba.',
          'Campaña de renovación por antigüedad del audífono.',
          'Campaña educativa para recuperar confianza y contacto.'
        ]
      },
      {
        id: 'coste-manual',
        title: 'El problema de hacerlo manualmente',
        paragraphs: [
          'La estrategia es buena, pero hacerla a mano consume tiempo. Hay que segmentar la base de datos, preparar textos, crear diseños, decidir canales, programar envíos, revisar respuestas, medir resultados y repetirlo con cierta frecuencia.',
          'Además, muchas veces hace falta pagar o configurar herramientas externas para email, automatización, formularios, diseño o seguimiento. El resultado es que el centro sabe que debería hacerlo, pero lo deja para “cuando haya tiempo”.'
        ]
      },
      {
        id: 'hear-o-marketing-studio',
        title: 'Por qué Hear-O Marketing Studio encaja aquí',
        paragraphs: [
          'Hear-O Marketing Studio está pensado precisamente para que la recuperación de pacientes no dependa de que el centro encuentre tiempo para diseñar campañas desde cero. El audiólogo no tiene que convertirse en especialista en marketing, automatizaciones o herramientas externas.',
          'El centro configura parámetros sencillos: segmentos, frecuencias, canales, tipos de campañas y nivel de control. A partir de ahí, el sistema puede ayudar a generar textos, preparar acciones y mantener una comunicación constante con pacientes y contactos antiguos.',
          'La ventaja no es solo ahorrar horas. También es reducir costes externos, evitar improvisación y mantener viva una base de datos que, de otra forma, suele quedar olvidada.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La base de datos no es un archivo histórico. Es una fuente viva de revisiones, renovaciones, recomendaciones y oportunidades si se trabaja con método.',
      items: ['Segmentar', 'Contactar', 'Medir', 'Reactivar']
    },
    faqs: [
      ['¿Es captación o fidelización?', 'Ambas. Recupera relación con pacientes antiguos y puede generar nuevas citas, revisiones, renovaciones o recomendaciones.'],
      ['¿Se puede hacer sin molestar?', 'Sí, si el mensaje aporta utilidad real y se envía al segmento adecuado. No se trata de insistir, sino de ofrecer un motivo razonable para volver.'],
      ['¿Por qué no hacerlo manualmente?', 'Se puede, pero exige tiempo, constancia, segmentación, textos, herramientas y seguimiento. Por eso muchas campañas se abandonan tras el primer intento.'],
      ['¿Qué aporta Hear-O Marketing Studio?', 'Permite configurar campañas y parámetros sencillos para que la reactivación funcione de forma más automática, reduciendo horas y costes externos.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-reactivar-pacientes-antiguos.webp`,
        alt: 'Infografía del embudo de reactivación de pacientes antiguos',
        prompt: 'Embudo de reactivación de pacientes antiguos: base de datos, segmentación, mensaje, cita, renovación'
      }
    }
  },
  'ia-para-audiologos-usos-reales': {
    category: 'IA para audiólogos',
    tips: ['Usarla para crear contenidos y mensajes revisables.', 'Crear expertos internos para dudas clínicas, técnicas y comerciales.', 'Preparar mejores explicaciones para pacientes.', 'Ahorrar horas en tareas repetitivas sin sustituir el criterio profesional.'],
    example: 'Un centro puede usar IA para preparar una campaña de revisión, redactar un artículo sobre pérdida auditiva, resolver una duda técnica antes de una adaptación o convertir una objeción del paciente en una explicación clara y cercana.',
    tableRows: [['Marketing', 'Ideas para blog, redes, campañas y mensajes de seguimiento'], ['Consulta', 'Apoyo en explicaciones, objeciones y argumentos al paciente'], ['Equipo', 'Expertos IA para dudas clínicas, técnicas, comerciales y de marketing'], ['Hear-O', 'Integra estos usos en un sistema adaptado al centro auditivo']],
    sections: [
      {
        id: 'usos-reales',
        title: 'Usos reales de la IA para audiólogos y centros auditivos',
        paragraphs: [
          'La IA puede ser muy útil en un centro auditivo si se aplica a tareas concretas. No se trata de usar inteligencia artificial porque esté de moda, sino de resolver problemas reales: falta de tiempo, comunicación irregular, dudas técnicas, campañas que nunca se preparan o explicaciones al paciente que dependen demasiado de la improvisación.',
          'Bien utilizada, la IA ayuda al equipo a trabajar con más velocidad y más claridad. Pero debe estar al servicio del audiólogo, no sustituir su criterio clínico ni convertir la atención al paciente en algo frío o genérico.'
        ]
      },
      {
        id: 'contenidos-blog-redes',
        title: 'Generación de contenidos para blog y redes',
        paragraphs: [
          'Muchos centros saben que deberían publicar contenido, pero no encuentran tiempo o no saben qué temas tratar. La IA puede ayudar a generar ideas, borradores, titulares, calendarios editoriales y publicaciones adaptadas al tono del centro.',
          'Esto no significa publicar sin revisar. El equipo debe validar el contenido, ajustar el lenguaje y asegurarse de que no se prometen resultados ni se simplifican temas clínicos. La IA acelera el trabajo, pero la responsabilidad final sigue siendo del centro.'
        ],
        bullets: [
          'Ideas para artículos sobre pérdida auditiva, revisiones o cuidado de audífonos.',
          'Publicaciones para redes sociales con lenguaje cercano.',
          'Calendarios de contenido mensual.',
          'Adaptación de un mismo tema a blog, email y redes.'
        ]
      },
      {
        id: 'textos-campanas',
        title: 'Textos para campañas, recordatorios y seguimiento',
        paragraphs: [
          'Otro uso práctico es la creación de textos para campañas. Un centro puede necesitar mensajes para revisar audífonos, recuperar pacientes antiguos, recordar citas, informar de una promoción o invitar a una Prueba Auditiva Online.',
          'La IA puede proponer textos iniciales, versiones más cercanas, asuntos de email, mensajes breves para WhatsApp o llamadas a la acción. La clave está en que esos mensajes respondan a un objetivo claro y a un segmento concreto.'
        ]
      },
      {
        id: 'expertos-ia',
        title: 'Crear expertos IA para audiología, equipos y negocio',
        paragraphs: [
          'Uno de los usos más potentes es crear asistentes especializados. No es lo mismo una IA genérica que un experto preparado para responder dudas habituales de audiología, adaptación, equipos, argumentación comercial o marketing del centro.',
          'Estos expertos pueden ayudar al equipo a ordenar una respuesta, preparar una explicación o revisar una duda antes de hablar con el paciente. No sustituyen formación ni criterio profesional, pero reducen la sensación de estar solo ante cada problema.'
        ],
        bullets: [
          'Experto en dudas clínicas frecuentes.',
          'Experto en adaptación y problemas técnicos.',
          'Experto en argumentación comercial y objeciones.',
          'Experto en marketing y campañas para centros auditivos.'
        ]
      },
      {
        id: 'dudas-clinicas',
        title: 'Consulta de dudas clínicas y técnicas',
        paragraphs: [
          'En el día a día aparecen dudas: cómo explicar una situación al paciente, cómo preparar una recomendación, cómo revisar una incidencia o cómo enfocar una adaptación compleja. La IA puede servir como apoyo para estructurar la respuesta y no depender solo de memoria o búsqueda manual.',
          'Es importante remarcar el límite: la IA no diagnostica ni decide por el audiólogo. Ayuda a ordenar información, plantear opciones y mejorar la comunicación. La decisión profesional sigue siendo siempre humana.'
        ]
      },
      {
        id: 'argumentacion-paciente',
        title: 'Apoyo en la argumentación al paciente',
        paragraphs: [
          'La venta de audífonos no se gana solo con datos técnicos. Muchas veces el paciente necesita entender por qué una solución tiene sentido para su vida diaria. La IA puede ayudar a traducir tecnología a beneficios: menos fatiga, más claridad en reuniones, mejor comunicación familiar o más seguridad.',
          'También puede preparar respuestas a objeciones habituales: precio, miedo a no adaptarse, estigma, dudas sobre gamas o resistencia a empezar. Esto ayuda al audiólogo a explicar mejor sin parecer agresivo.'
        ]
      },
      {
        id: 'coste-herramientas',
        title: 'El problema de usar IA con herramientas sueltas',
        paragraphs: [
          'Un centro puede intentar hacerlo todo con herramientas externas: una IA para textos, otra para imágenes, otra para campañas, otra para automatizaciones, otra para organizar tareas. El problema es que pronto aparece una nueva carga de trabajo: aprender herramientas, pagar suscripciones, conectar sistemas y revisar resultados.',
          'La IA solo ahorra tiempo si está integrada en un proceso. Si se convierte en otra pantalla más que el equipo debe gestionar, el beneficio se reduce.'
        ]
      },
      {
        id: 'hear-o-integrado',
        title: 'Cómo Hear-O integra estos usos de IA',
        paragraphs: [
          'Hear-O reúne estos usos dentro de un sistema pensado para centros auditivos. Marketing Studio ayuda a crear campañas, contenidos y mensajes; Expertos IA da apoyo en dudas clínicas, técnicas, comerciales y de marketing; Anamnesis ayuda a argumentar mejor al paciente; y CRM & Calendario conecta seguimiento, citas y recordatorios.',
          'El beneficio es claro: menos herramientas externas, menos horas de preparación, más consistencia en la comunicación y más capacidad para que el audiólogo se centre en diagnosticar, adaptar y acompañar al paciente.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La IA no debe ser otra herramienta aislada. Debe integrarse en el trabajo real del centro para ahorrar tiempo, mejorar comunicación y apoyar al equipo.',
      items: ['Contenido', 'Campañas', 'Expertos', 'Argumentación']
    },
    faqs: [
      ['¿La IA puede diagnosticar?', 'No. La IA puede ayudar a ordenar información y preparar explicaciones, pero el diagnóstico y la decisión profesional siguen siendo del audiólogo.'],
      ['¿Sirve para crear contenidos de marketing?', 'Sí. Puede ayudar con ideas, borradores, textos de campañas, publicaciones y emails, siempre revisados por el centro.'],
      ['¿Puede ayudar en la consulta?', 'Sí. Puede apoyar en explicaciones al paciente, objeciones, argumentos y preparación de informes o recomendaciones.'],
      ['¿Qué aporta Hear-O frente a usar herramientas sueltas?', 'Integra los usos de IA en módulos pensados para centros auditivos, reduciendo horas, costes externos y dispersión de herramientas.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-ia-para-audiologos.webp`,
        alt: 'Infografía de usos reales de IA para audiólogos',
        prompt: 'Infografía editorial para explicar usos reales de la IA en audiología. Crear una composición tipo mapa de usos con cinco áreas diferenciadas: dudas clínicas, adaptación técnica, explicación al paciente, argumentos de venta y marketing del centro.'
      },
      image: {
        src: `${visualBase}/ia-para-audiologos-mesa-trabajo.webp`,
        alt: 'Mesa de trabajo de un audiólogo con audífonos, notas clínicas y apoyo de IA',
        prompt: 'Imagen editorial realista de una mesa de trabajo de un audiólogo moderno vista desde arriba. Sobre la mesa hay una tablet, unos audífonos, notas clínicas ordenadas, un pequeño audiograma estilizado, un bolígrafo y una interfaz de IA representada de forma sutil como luz o panel abstracto, sin textos legibles.'
      }
    }
  },
  'marketing-automatico-centros-auditivos-guia': {
    category: 'Captación',
    tips: [
      'Separar las acciones de captación, fidelización y recuperación de pacientes.',
      'Segmentar la base de datos antes de enviar campañas.',
      'Automatizar las acciones repetitivas para que no dependan del tiempo libre del equipo.',
      'Medir qué campañas generan citas, revisiones y oportunidades reales.'
    ],
    example: 'Un centro puede programar una campaña de revisión auditiva, un recordatorio para pacientes antiguos, una acción de captación con Prueba Auditiva Online y varios contenidos educativos sin tener que empezar desde cero cada semana.',
    tableRows: [
      ['Sin marketing', 'El centro depende de llamadas sueltas, recomendaciones y pacientes que entran por iniciativa propia.'],
      ['Marketing improvisado', 'Se publican acciones sin estrategia, sin seguimiento y con resultados difíciles de medir.'],
      ['Agencia externa', 'Puede aportar calidad, pero supone un coste recurrente que fácilmente llega a 400 €/mes o más según el alcance.'],
      ['Automatización', 'Mantiene una cadencia constante de campañas, recordatorios y seguimiento.'],
      ['Hear-O Marketing Studio', 'Paquetiza la estrategia, los textos, los canales y la ejecución para centros auditivos.']
    ],
    sections: [
      {
        id: 'necesidad-marketing',
        title: 'Por qué un centro auditivo necesita hacer marketing',
        paragraphs: [
          'Un centro auditivo no debería depender solo de que el paciente llame, vuelva por iniciativa propia o recuerde cuándo le toca una revisión. La relación con el paciente empieza antes de la primera cita y continúa mucho después de la adaptación.',
          'El marketing bien planteado no consiste únicamente en publicar anuncios. También sirve para captar nuevos pacientes, fidelizar a quienes ya confían en el centro, recuperar bases de datos antiguas, explicar mejor el valor de los audífonos y mantener una comunicación constante sin resultar invasivo.',
          'En audiología, muchas oportunidades se pierden por silencio: pacientes que no vuelven, pruebas auditivas que no se convierten, revisiones que no se recuerdan, familiares que no entienden la recomendación o contactos que quedan en una hoja, una agenda o un Excel.'
        ]
      },
      {
        id: 'captar-fidelizar-recuperar',
        title: 'Captar, fidelizar y recuperar: los tres objetivos principales',
        paragraphs: [
          'Una estrategia de marketing para centros auditivos debe cubrir tres frentes. Si solo se piensa en captar, se pierde el valor de la base de datos. Si solo se piensa en pacientes actuales, el centro deja de generar nuevas oportunidades.',
          'El enfoque más útil es combinar acciones sencillas, constantes y bien segmentadas.'
        ],
        bullets: [
          'Captación: atraer personas interesadas en revisar su audición, resolver dudas o realizar una Prueba Auditiva Online.',
          'Fidelización: mantener contacto con pacientes adaptados mediante revisiones, consejos de uso, mantenimiento y mensajes de confianza.',
          'Recuperación: volver a activar pacientes antiguos, oportunidades no cerradas, presupuestos pendientes o personas que no acudieron a una cita.',
          'Educación: explicar con claridad cuándo conviene revisar la audición, qué aporta una adaptación correcta y por qué no todos los audífonos son iguales.'
        ]
      },
      {
        id: 'falta-tiempo-recursos',
        title: 'El problema: falta de tiempo, recursos y conocimiento',
        paragraphs: [
          'La mayoría de centros auditivos saben que deberían hacer más acciones comerciales y de comunicación, pero el día a día manda. Hay llamadas, citas, pruebas, adaptaciones, revisiones, incidencias, garantías y tareas administrativas.',
          'Por eso suelen aparecer tres escenarios. El primero es no hacer nada de forma constante. El segundo es contratar una agencia externa, con costes recurrentes que pueden superar fácilmente los 400 €/mes y que no siempre conocen bien la realidad de un gabinete auditivo. El tercero es hacerlo de manera improvisada: una publicación suelta, un email ocasional o una campaña sin seguimiento.',
          'El problema no es solo económico. También es de foco. Cada hora dedicada a preparar textos, diseños, envíos o listados es una hora que el audiólogo no dedica a diagnosticar, adaptar, explicar o acompañar al paciente.'
        ]
      },
      {
        id: 'automatizar-marketing',
        title: 'La solución: automatizar el marketing del centro',
        paragraphs: [
          'Automatizar significa convertir las acciones repetitivas en flujos preparados. No se trata de enviar mensajes sin control, sino de definir qué debe ocurrir, cuándo debe ocurrir y a qué tipo de paciente debe dirigirse cada comunicación.',
          'Un centro puede automatizar recordatorios de revisión, campañas de recuperación, mensajes posteriores a una prueba auditiva, comunicaciones educativas, captación desde formularios o acciones vinculadas a pacientes que llevan demasiado tiempo sin contacto.',
          'La ventaja es clara: el marketing deja de depender de si alguien encuentra un hueco libre. El sistema mantiene una cadencia constante y el equipo solo interviene donde realmente aporta valor.'
        ]
      },
      {
        id: 'complejidad-tecnica',
        title: 'Por qué automatizar no es tan sencillo si se hace desde cero',
        paragraphs: [
          'La automatización suena sencilla, pero montarla bien requiere criterio, herramientas y tiempo. Normalmente hay que combinar formularios, CRM, email marketing, WhatsApp o SMS, calendarios, bases de datos, diseños, textos, segmentación y medición.',
          'Además, muchas automatizaciones necesitan conectores o herramientas tipo Make o n8n para que unas aplicaciones hablen con otras. Eso obliga a diseñar flujos, probarlos, mantenerlos y corregirlos cuando algo cambia.',
          'Para un centro auditivo, el objetivo no debería ser aprender a programar automatizaciones. El objetivo debería ser tener campañas útiles funcionando, con control suficiente y sin convertir el marketing en otro problema operativo.'
        ]
      },
      {
        id: 'hear-o-marketing-studio',
        title: 'Hear-O Marketing Studio: marketing automático preparado para centros auditivos',
        paragraphs: [
          'Hear-O Marketing Studio nace precisamente para resolver ese punto. En lugar de que el centro tenga que montar herramientas externas, escribir cada campaña, crear integraciones y mantener flujos técnicos, Hear-O ofrece una alternativa paquetizada y pensada para audiología.',
          'El centro puede configurar parámetros sencillos: tipo de campaña, frecuencia, segmento, canal, objetivo y tono. A partir de ahí, el sistema ayuda a ejecutar acciones de captación, fidelización y recuperación con una lógica profesional y adaptada al contexto del centro.',
          'La ventaja no está solo en ahorrar costes externos. También está en reducir horas internas, evitar improvisación, mantener una comunicación constante y convertir la base de datos en una fuente real de oportunidades.',
          'Así, el audiólogo puede centrarse en lo que mejor sabe hacer: valorar, adaptar, explicar y acompañar. El marketing queda integrado en el funcionamiento del centro, no como una tarea suelta que se recuerda cuando hay tiempo.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El marketing de un centro auditivo no debería depender del tiempo libre del equipo. Debe funcionar como un sistema constante que capta, fideliza, recupera y mide.',
      items: ['Captar nuevos pacientes', 'Fidelizar pacientes adaptados', 'Recuperar oportunidades antiguas', 'Medir resultados reales']
    },
    faqs: [
      ['¿Un centro auditivo pequeño necesita hacer marketing?', 'Sí. Precisamente un centro pequeño necesita aprovechar mejor cada contacto, cada revisión y cada paciente de su base de datos.'],
      ['¿Es mejor contratar una agencia externa?', 'Puede ser útil, pero supone un coste recurrente y exige que la agencia entienda bien el sector auditivo. Hear-O busca reducir esa dependencia con acciones ya preparadas para centros auditivos.'],
      ['¿Qué acciones se pueden automatizar?', 'Recordatorios de revisión, recuperación de pacientes antiguos, campañas educativas, seguimiento post-prueba, captación desde formularios y comunicaciones segmentadas.'],
      ['¿Qué aporta Hear-O Marketing Studio?', 'Aporta campañas, textos, segmentación, canales y ejecución en una solución sencilla, reduciendo horas internas, costes externos e improvisación.']
    ],
    visuals: {
      ready: true,
      image: {
        src: `${visualBase}/marketing-automatico-centro-auditivo-collage.webp`,
        alt: 'Collage editorial de marketing automático para centros auditivos con email, redes, recordatorios y prueba auditiva online',
        prompt: 'Collage editorial premium para una guía sobre marketing automático en centros auditivos. Composición con varias piezas visuales sobre una mesa o fondo oscuro elegante: una tarjeta de email, una publicación social, una tarjeta de recordatorio de revisión, una pequeña landing de Prueba Auditiva Online y una ficha de paciente simplificada.'
      }
    }
  },
  'mejorar-conversion-prueba-auditiva': {
    category: 'Anamnesis',
    tips: [
      'Cerrar la venta como consecuencia natural de una buena explicación, no como una presión final.',
      'Traducir cada dato de la prueba auditiva a una situación real del paciente.',
      'Usar un informe claro para que el paciente recuerde en casa el problema, la recomendación y el valor de la solución.',
      'Preparar un argumentario de cierre basado en las objeciones y motivaciones concretas del paciente.'
    ],
    example: 'Si un paciente duda por precio, el audiólogo puede apoyarse en el informe para recordar la dificultad detectada en la anamnesis, explicar qué situaciones mejorará la adaptación y plantear el siguiente paso con seguridad: prueba, selección de gama o seguimiento fechado.',
    tableRows: [
      ['Prueba auditiva aislada', 'El paciente recibe datos, pero puede no entender el impacto real en su vida.'],
      ['Explicación consultiva', 'El audiólogo conecta pérdida auditiva, situaciones cotidianas y beneficio esperado.'],
      ['Informe personalizado', 'El paciente se lleva una explicación profesional, visual y fácil de compartir con la familia.'],
      ['Argumentario de cierre', 'El centro responde objeciones con argumentos adaptados al caso concreto.'],
      ['Hear-O Anamnesis', 'Une anamnesis, informe comercial y apoyo al cierre en un mismo flujo.']
    ],
    sections: [
      {
        id: 'conversion-empieza-prueba',
        title: 'La conversión empieza durante la prueba auditiva',
        paragraphs: [
          'Mejorar la conversión tras una prueba auditiva no consiste en insistir más al final de la consulta. Consiste en construir mejor el camino hasta la decisión.',
          'Cuando el paciente solo recibe datos técnicos, es fácil que la conversación acabe en precio, dudas o un “me lo pensaré”. En cambio, cuando entiende cómo su pérdida auditiva afecta a su vida diaria, la recomendación deja de parecer una venta y empieza a parecer una solución lógica.',
          'Por eso, la prueba auditiva debe convertirse en una explicación clara: qué ocurre, cómo le afecta, qué puede mejorar y por qué la recomendación tiene sentido para su caso.'
        ]
      },
      {
        id: 'tecnicas-cierre-audiologia',
        title: 'Técnicas de cierre útiles para el audiólogo',
        paragraphs: [
          'El cierre en audiología debe ser consultivo. El audiólogo no vende un aparato: guía una decisión de salud, comunicación y calidad de vida.',
          'Hay varias ideas sencillas que ayudan a cerrar mejor sin presionar.'
        ],
        bullets: [
          'No hablar solo de tecnología: traducir canales, reducción de ruido o conectividad a beneficios reales como entender una cena familiar, ver la televisión sin conflicto o participar en una reunión.',
          'Evitar condicionales inseguros: en lugar de “si quiere podríamos verlo”, plantear un siguiente paso claro y profesional.',
          'Usar la anamnesis como base del cierre: la recomendación debe apoyarse en lo que el propio paciente ha contado.',
          'Responder al precio desde el valor: no discutir solo el importe, sino explicar qué problema concreto resuelve y durante cuánto tiempo.',
          'Dejar espacio al paciente: después de una pregunta de cierre, conviene permitir que piense y responda sin rellenar el silencio con más argumentos.'
        ]
      },
      {
        id: 'informe-personalizado',
        title: 'El informe personalizado como herramienta de confianza',
        paragraphs: [
          'Uno de los grandes problemas de la consulta es que el paciente no recuerda todo lo que se le ha explicado. Puede salir convencido a medias, hablarlo en casa y perder fuerza porque no sabe repetir bien los argumentos.',
          'Un informe completo y personalizado cambia esa situación. No debe ser solo un documento técnico, sino una pieza clara, profesional y orientada a que el paciente comprenda su caso.',
          'El informe debe recoger los puntos importantes de la prueba, las situaciones reales que el paciente quiere mejorar, la recomendación del audiólogo, el motivo de esa recomendación y el beneficio esperado.',
          'Cuando está bien planteado, el informe genera confianza, reduce incertidumbre y ayuda a que la decisión no dependa solo de lo que el paciente recuerde de memoria al salir del gabinete.'
        ]
      },
      {
        id: 'enfoque-comercial-etico',
        title: 'Un enfoque comercial, pero ético y útil',
        paragraphs: [
          'Que el informe tenga enfoque comercial no significa manipular. Significa explicar mejor el valor de la solución y facilitar que el paciente tome una decisión informada.',
          'La clave está en unir datos clínicos, necesidades personales y recomendación profesional. Si el paciente ha contado que evita reuniones por no entender, el informe debe reflejarlo. Si su mayor problema es la televisión, la familia o el ruido, la explicación debe girar alrededor de eso.',
          'Así, el cierre no se apoya en frases genéricas, sino en una lógica personalizada: “esto es lo que te ocurre, esto es lo que quieres recuperar y esta es la solución que mejor encaja”.'
        ]
      },
      {
        id: 'argumentario-cierre',
        title: 'Argumentario de cierre basado en el paciente',
        paragraphs: [
          'El audiólogo necesita argumentos, pero no cualquier argumento. Necesita respuestas adaptadas al caso concreto: precio, miedo a equivocarse, vergüenza, dudas sobre comodidad, rechazo a la tecnología o necesidad de consultarlo con la familia.',
          'Un buen argumentario de cierre parte del informe y de la anamnesis. Si el paciente duda por precio, se puede volver al beneficio de vida. Si duda por miedo a no adaptarse, se puede explicar el proceso de prueba, ajuste y seguimiento. Si duda porque necesita hablarlo en casa, el informe permite que esa conversación no empiece desde cero.',
          'El objetivo no es forzar la decisión. Es evitar que una oportunidad bien trabajada se pierda por falta de claridad, por una objeción mal respondida o por no haber definido el siguiente paso.'
        ]
      },
      {
        id: 'hear-o-anamnesis',
        title: 'Cómo ayuda Hear-O con el Asistente de Anamnesis',
        paragraphs: [
          'El Asistente de Anamnesis de Hear-O ayuda a ordenar todo este proceso. Durante la consulta, permite recoger información relevante del paciente, detectar motivaciones, entender objeciones y conectar la prueba auditiva con situaciones reales.',
          'A partir de esa información, Hear-O puede generar un informe completo, profesional y personalizado, con un enfoque claro hacia la comprensión, la confianza y la conversión.',
          'Además, el módulo puede apoyar al audiólogo con un argumentario de cierre basado en el propio informe y en el perfil del paciente. Eso reduce improvisación, ayuda a responder mejor las dudas y mantiene una comunicación coherente desde la anamnesis hasta la recomendación final.',
          'El resultado es una consulta más clara para el paciente y más segura para el audiólogo: menos presión, más estructura y más posibilidades de transformar una prueba auditiva en una decisión.'
        ]
      }
    ],
    visualBreak: {
      title: 'La idea central',
      text: 'Una prueba auditiva convierte mejor cuando el paciente entiende su problema, recibe una recomendación personalizada y se lleva argumentos claros para decidir con confianza.',
      items: ['Anamnesis bien guiada', 'Informe completo y visual', 'Argumentario de cierre', 'Seguimiento si no decide']
    },
    extraImages: [
      {
        src: `${visualBase}/informe-tras-prueba-audiologica-1.webp`,
        alt: 'Ejemplo de informe personalizado generado por Hear-O tras una prueba audiológica',
        afterSectionId: 'informe-personalizado',
        caption: 'Ejemplo de informe generado por Hear-O tras una prueba audiológica.',
        layout: 'right'
      },
      {
        src: `${visualBase}/ARGUMENTARIO-POST-PRUEBAS-AUDIOLOGICAS.webp`,
        alt: 'Ejemplo de argumentario de cierre generado por Hear-O después de una prueba audiológica',
        afterSectionId: 'argumentario-cierre',
        caption: 'Ejemplo de argumentario de cierre generado por Hear-O a partir del informe y del perfil del paciente.',
        layout: 'right'
      }
    ],
    faqs: [
      ['¿El informe debe ser técnico o comercial?', 'Debe ser profesional y claro. Puede incluir datos técnicos, pero explicados con lenguaje sencillo y conectados con la vida diaria del paciente.'],
      ['¿Un argumentario de cierre significa presionar al paciente?', 'No. Significa preparar respuestas útiles para resolver dudas reales y ayudar al paciente a tomar una decisión informada.'],
      ['¿Qué aporta Hear-O frente a hacerlo manualmente?', 'Hear-O ordena la anamnesis, genera informes personalizados y ayuda con argumentos de cierre adaptados al paciente, reduciendo improvisación.'],
      ['¿Ayuda si el paciente quiere pensarlo en casa?', 'Sí. Un informe claro permite que el paciente y su familia revisen la explicación, recuerden la recomendación y mantengan vivo el hilo de la consulta.']
    ],
    visuals: {
      ready: true,
      infographic: {
        src: `${visualBase}/infografia-conversion-prueba-auditiva.webp`,
        alt: 'Infografía de la ruta para mejorar la conversión tras una prueba auditiva',
        prompt: 'Ruta post-prueba auditiva: explicación visual, informe, objeciones, seguimiento familiar, cierre'
      },
      image: {
        src: `${visualBase}/informe-visual-prueba-auditiva.webp`,
        alt: 'Paciente recibiendo un informe visual después de una prueba auditiva',
        prompt: 'Paciente recibiendo un informe visual después de una prueba auditiva, ambiente profesional y cercano'
      }
    }
  }
};

export const newGuidePages = [
  {
    slug: 'cerrar-mejor-venta-audifonos-sin-presionar',
    category: 'Ventas',
    title: 'Cómo cerrar mejor una venta de audífonos sin presionar',
    description: 'Método práctico para cerrar mejor ventas de audífonos con escucha, valor, prueba visual y seguimiento.',
    keyword: 'cerrar venta de audífonos',
    answer: 'Cerrar mejor una venta de audífonos no consiste en insistir más, sino en lograr que el paciente entienda el problema, vea el valor de la solución y salga con una decisión o siguiente paso claro.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis',
    tips: [
      'Detectar el dolor real del paciente antes de hablar de modelos o precios.',
      'Traducir cada característica técnica a un beneficio de vida cotidiana.',
      'Presentar la recomendación como un plan de rehabilitación, no como una venta de producto.',
      'Usar opciones comparables para que el paciente valore beneficios, no solo importes.',
      'Cerrar con un siguiente paso claro: prueba, selección, financiación, revisión o seguimiento fechado.'
    ],
    example: 'Si el paciente se centra solo en precio, el audiólogo puede volver a su dificultad concreta: reuniones, televisión, familia o seguridad en la calle. La conversación cambia cuando el precio se conecta con recuperar una situación importante, no con comprar un aparato.',
    tableRows: [
      ['Cierre débil', 'Termina en “me lo pienso” porque el paciente no ha conectado problema, solución y beneficio.'],
      ['Cierre consultivo', 'Resume el caso, explica la recomendación y propone un siguiente paso lógico.'],
      ['Objeción de precio', 'Se responde desde el valor, la duración de uso, la mejora esperada y las opciones disponibles.'],
      ['Informe y argumentario', 'Mantienen viva la explicación dentro y fuera del gabinete.'],
      ['Hear-O Anamnesis', 'Refuerza el cierre con anamnesis emocional, presentación visual, informe y argumentos personalizados.']
    ],
    sections: [
      {
        id: 'cierre-sin-presion',
        title: 'Cerrar sin presionar: qué significa realmente',
        paragraphs: [
          'Cerrar una venta de audífonos sin presionar no significa evitar la venta. Significa guiar al paciente con seguridad, claridad y responsabilidad profesional.',
          'El error habitual es pensar que el cierre ocurre al final de la consulta, cuando se dice el precio. En realidad, el cierre empieza mucho antes: en la anamnesis, en la forma de explicar la pérdida auditiva, en cómo se conecta la prueba con la vida diaria y en cómo se resuelven las dudas.',
          'Cuando el paciente entiende qué le ocurre, por qué le afecta y qué puede recuperar, la decisión deja de sentirse como una compra forzada. Pasa a ser el siguiente paso natural de un proceso bien explicado.'
        ]
      },
      {
        id: 'venta-consultiva',
        title: 'De vendedor de audífonos a consultor de salud auditiva',
        paragraphs: [
          'El audiólogo no debería competir por “vender un aparato”. Su papel es ayudar al paciente a recuperar comunicación, autonomía y confianza.',
          'La venta consultiva parte de una idea sencilla: el paciente no compra canales, chips ni algoritmos. Compra entender mejor a su familia, participar en conversaciones, reducir esfuerzo auditivo, evitar aislamiento y sentirse más seguro.',
          'Por eso, antes de recomendar una solución, hay que escuchar. Una buena recomendación nace de lo que el paciente ha contado: dónde falla, qué evita, qué le preocupa, qué espera recuperar y qué objeciones tiene.'
        ]
      },
      {
        id: 'traducir-tecnologia-beneficio',
        title: 'Traducir la tecnología a beneficios que el paciente entienda',
        paragraphs: [
          'Hablar solo de tecnología suele llevar la conversación al precio. Si el paciente escucha “más canales”, “mejor reducción de ruido” o “gama superior” sin entender el beneficio, puede pensar que se le está intentando vender algo más caro.',
          'La clave está en traducir cada prestación a una escena real. La reducción de ruido no es un dato técnico: es poder seguir una cena sin agotarse. La conectividad no es un accesorio: es ver la televisión sin subir el volumen y sin conflicto familiar. La verificación y los ajustes no son pasos técnicos: son seguridad de que la adaptación se hará con precisión.',
          'Cuanto más concreta sea la explicación, más fácil será que el paciente valore la recomendación.'
        ],
        bullets: [
          'No digas solo “este audífono tiene mejor procesamiento”; explica qué situación concreta mejora.',
          'No presentes la gama alta como lujo; preséntala como la opción que responde mejor a entornos complejos si el paciente los necesita.',
          'No dejes que el precio aparezca aislado; conéctalo con duración, uso diario, comodidad y mejora esperada.'
        ]
      },
      {
        id: 'estrategias-cierre',
        title: 'Estrategias prácticas para cerrar mejor',
        paragraphs: [
          'Un cierre efectivo necesita estructura. No basta con explicar mucho; hay que ordenar la conversación para que el paciente llegue a una decisión con menos miedo.',
          'Estas estrategias ayudan a cerrar sin sonar agresivo.'
        ],
        bullets: [
          'Resumen de beneficios: antes de hablar de decisión, repasa lo que el paciente dijo que quería recuperar.',
          'Pre-cierre: explica qué ocurrirá después, cómo será la prueba, qué revisiones habrá y cómo se ajustará la adaptación.',
          'Opciones comparables: presenta alternativas con diferencias claras de beneficio, no como una lista fría de precios.',
          'Pregunta de siguiente paso: evita preguntas que invitan al “no” automático y plantea una acción concreta.',
          'Silencio después del cierre: cuando haces una pregunta clara, deja que el paciente procese antes de añadir más argumentos.'
        ]
      },
      {
        id: 'objeciones-habituales',
        title: 'Cómo responder objeciones sin discutir',
        paragraphs: [
          'Las objeciones no siempre son rechazo. Muchas veces son miedo, falta de confianza o necesidad de más información.',
          'Si el paciente dice que es caro, quizá no ha entendido todavía el valor. Si dice que lo quiere pensar, quizá necesita seguridad. Si dice que no quiere parecer mayor, quizá hay una barrera emocional. Si quiere hablarlo con la familia, necesita llevarse una explicación que pueda compartir.',
          'Responder bien no es insistir. Es volver al caso concreto del paciente y aclarar la duda con respeto.'
        ],
        bullets: [
          'Precio: vuelve al beneficio real, al uso diario y a las opciones de inversión.',
          'Miedo a no adaptarse: explica el proceso de prueba, ajustes y acompañamiento.',
          'Vergüenza o estigma: refuerza discreción, normalidad y mejora de autonomía.',
          '“Me lo pienso”: acuerda una revisión, una llamada o un siguiente paso con fecha.'
        ]
      },
      {
        id: 'anamnesis-emocional',
        title: 'Cómo ayuda la anamnesis emocional al cierre',
        paragraphs: [
          'El Asistente de Anamnesis de Hear-O ayuda a reforzar el argumentario principal desde el principio. No se limita a recoger datos clínicos: ordena también la parte emocional y cotidiana de la pérdida auditiva.',
          'Esto es clave para el cierre porque permite que la recomendación no parezca genérica. El audiólogo puede apoyar su propuesta en frases, situaciones y objetivos que el propio paciente ha expresado durante la consulta.',
          'Si el paciente ha contado que evita reuniones familiares, que se cansa en restaurantes o que discute por la televisión, esos datos deben formar parte de la explicación final. Ahí es donde el cierre gana fuerza sin necesidad de presión.'
        ]
      },
      {
        id: 'presentacion-paciente',
        title: 'Presentación de Paciente: ayudar a asimilar el problema',
        paragraphs: [
          'La Presentación de Paciente sincronizada ayuda a convertir la información de la consulta en una explicación visual y ordenada.',
          'Esto es importante porque muchos pacientes no terminan de asumir su pérdida auditiva con una explicación verbal. Necesitan ver el problema, entender cómo se relaciona con su vida y recibir una recomendación que parezca clara, lógica y personal.',
          'Cuando la presentación acompaña la conversación, el paciente no recibe solo una opinión del audiólogo. Recibe una narrativa completa: su situación, sus dificultades, el impacto y la solución recomendada.'
        ]
      },
      {
        id: 'informe-argumentario',
        title: 'Informe y argumentario: seguridad para cerrar mejor',
        paragraphs: [
          'La fase final es especialmente importante. Un buen informe personalizado permite que el paciente se lleve la explicación a casa, la recuerde y la comparta con su familia.',
          'El argumentario de cierre ayuda al audiólogo a responder con más seguridad. No son frases genéricas: son argumentos basados en el informe, en la anamnesis y en las objeciones reales del paciente.',
          'Así, Hear-O ayuda a que la consulta no dependa solo de la memoria o improvisación del profesional. El cierre queda apoyado por una explicación coherente, un documento claro y respuestas adaptadas al caso.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El cierre sin presión no es vender menos. Es vender mejor: escuchar, explicar, conectar con la vida diaria y guiar al paciente hacia una decisión segura.',
      items: ['Anamnesis emocional', 'Beneficio de vida', 'Opciones claras', 'Argumentario final']
    },
    faqs: [
      ['¿Cerrar sin presionar significa no insistir?', 'Significa no forzar. El audiólogo debe guiar la decisión con claridad, resolver dudas y proponer un siguiente paso concreto.'],
      ['¿Cómo se responde una objeción de precio?', 'Conectando el precio con el beneficio real, el uso diario, la duración de la solución y las opciones disponibles.'],
      ['¿Por qué ayuda la anamnesis emocional?', 'Porque permite que la recomendación se base en lo que el paciente ha vivido y verbalizado, no en argumentos genéricos.'],
      ['¿Qué aporta Hear-O al cierre?', 'Hear-O ayuda con anamnesis emocional, presentación visual del paciente, informe personalizado y argumentario de cierre adaptado al caso.']
    ]
  },
  {
    slug: 'vender-audifonos-gama-alta-explicando-valor',
    category: 'Ventas',
    title: 'Cómo vender audífonos de gama alta explicando valor',
    description: 'Ideas para vender audífonos de gama alta explicando diferencias reales sin parecer agresivo.',
    keyword: 'vender audífonos gama alta',
    answer: 'Vender audífonos de gama alta exige explicar valor, no solo prestaciones: comodidad, comprensión en ruido, autonomía, conectividad, seguimiento y mejora en situaciones importantes.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis',
    tips: [
      'Partir siempre de la anamnesis: la gama recomendada debe responder a situaciones reales del paciente.',
      'No vender “más tecnología”; vender menos limitaciones, más vida social y más seguridad en entornos complejos.',
      'Comparar gamas por beneficios cotidianos, no por listados técnicos difíciles de entender.',
      'Ayudar al paciente a imaginar cómo será su día a día si vuelve a participar sin tanto esfuerzo.',
      'Presentar la gama alta como una recomendación clínica y funcional cuando el caso lo justifica.'
    ],
    example: 'Una persona activa socialmente no compra un chip mejor: compra volver a participar en cenas, reuniones y conversaciones familiares sin agotarse ni quedarse fuera. Si esa escena está bien detectada en la anamnesis, la gama alta deja de parecer un lujo y empieza a entenderse como la opción que protege mejor esa nueva vida sin limitaciones.',
    tableRows: [
      ['Explicación débil', '“Este audífono tiene más prestaciones y cuesta más”.'],
      ['Explicación de valor', '“Esta gama responde mejor a las situaciones con ruido, reuniones y vida social que usted quiere recuperar”.'],
      ['Anamnesis', 'Da la base argumental para justificar la recomendación sin parecer agresivo.'],
      ['Presentación visual', 'Ayuda al paciente a entender el problema y a imaginar el beneficio real.'],
      ['Hear-O', 'Aporta preguntas guiadas, presentación sincronizada y un Asistente para Argumentar Gamas.']
    ],
    sections: [
      {
        id: 'gama-alta-no-es-lujo',
        title: 'La gama alta no debe explicarse como un lujo',
        paragraphs: [
          'Uno de los errores más habituales al vender audífonos de gama alta es presentarlos como “lo mejor” sin explicar por qué son lo mejor para ese paciente concreto.',
          'Si el paciente solo percibe una diferencia de precio, la gama alta parecerá un capricho. Si entiende que esa diferencia está relacionada con su vida real, con sus entornos de escucha y con lo que quiere recuperar, la conversación cambia.',
          'La gama alta debe explicarse como una herramienta para reducir limitaciones en situaciones complejas: ruido, reuniones, restaurantes, conversaciones familiares, televisión, llamadas, movilidad, seguridad o fatiga auditiva.'
        ]
      },
      {
        id: 'base-anamnesis',
        title: 'La base debe estar en una anamnesis bien argumentada',
        paragraphs: [
          'Antes de recomendar una gama, el audiólogo necesita saber qué vida lleva el paciente. No es lo mismo una persona que casi siempre está en casa que alguien que trabaja, conduce, sale a comer, viaja, se reúne con amigos o convive con varios familiares.',
          'Una buena anamnesis permite detectar el verdadero argumento de venta: no “necesita gama alta”, sino “necesita una solución que responda a las situaciones que más le limitan”.',
          'Cuando el paciente ha verbalizado sus dificultades, la recomendación gana legitimidad. El audiólogo no empuja una gama superior; conecta una solución con una necesidad expresada por el propio paciente.'
        ],
        bullets: [
          'Preguntar por situaciones con ruido, no solo por si oye bien o mal.',
          'Detectar momentos de frustración: comidas, reuniones, nietos, televisión o llamadas.',
          'Identificar miedo al precio, a no adaptarse o a llevar algo visible.',
          'Confirmar qué le gustaría recuperar si la adaptación funcionara bien.'
        ]
      },
      {
        id: 'nueva-vida-sin-limitaciones',
        title: 'Vender la nueva vida sin limitaciones, no el audífono',
        paragraphs: [
          'El paciente no entra al centro buscando micrófonos direccionales, canales o procesamiento avanzado. Entra buscando dejar de perder conversaciones, dejar de sentirse aislado y volver a participar con normalidad.',
          'Si somos capaces de trasladar el valor de esa nueva vida sin limitaciones, el precio deja de compararse solo con un objeto. Se compara con recuperar vida social, autonomía, tranquilidad familiar y seguridad.',
          'Por eso, una de las mejores estrategias es llevar al paciente a imaginar una escena concreta: una cena familiar, una reunión, una conversación con sus nietos o una salida con amigos. Después, explicar qué gama ofrece más seguridad para resolver esa escena.'
        ]
      },
      {
        id: 'comparar-gamas',
        title: 'Cómo comparar gamas sin hablar solo de precio',
        paragraphs: [
          'Comparar gamas no debería ser enseñar una tabla fría de importes. Debe ser una comparación de niveles de respuesta ante situaciones reales.',
          'Una opción básica puede ser suficiente para entornos tranquilos. Una opción media puede mejorar el día a día con más comodidad. Una opción alta puede ser especialmente relevante cuando el paciente necesita rendimiento en ruido, vida social activa, tecnología más adaptativa o menos esfuerzo auditivo.',
          'La clave es no empezar por lo más barato ni por lo más caro. Hay que presentar opciones con una lógica clara: qué cubre cada una, dónde se queda corta y por qué una gama superior puede encajar mejor con los objetivos detectados.'
        ],
        bullets: [
          'Evitar “esta es la barata, esta la intermedia y esta la cara”.',
          'Usar “esta opción cubre entornos tranquilos; esta añade más seguridad en vida social; esta está pensada para situaciones complejas”.',
          'Relacionar cada salto de gama con una mejora concreta que el paciente pueda entender.',
          'Si se habla de inversión, fraccionar mentalmente el valor por uso diario y años de vida útil.'
        ]
      },
      {
        id: 'prestaciones-beneficio-real',
        title: 'Traducir prestaciones de gama alta a beneficios reales',
        paragraphs: [
          'Las prestaciones de una gama alta solo venden si el paciente entiende qué gana con ellas. El lenguaje técnico debe convertirse en lenguaje de vida.',
          'La reducción avanzada de ruido puede significar seguir una conversación en una mesa con varias personas. La direccionalidad puede significar centrarse en quien habla. La conectividad puede significar llamadas más cómodas o televisión sin discusiones. Los ajustes y verificaciones pueden significar tranquilidad de que la adaptación no se hace “a ojo”.',
          'Cuanto mejor se traduzca la tecnología, menos se defiende el precio y más se explica el valor.'
        ]
      },
      {
        id: 'hear-o-anamnesis-presentacion',
        title: 'Cómo ayuda Hear-O con anamnesis guiada y presentación sincronizada',
        paragraphs: [
          'Hear-O facilita este trabajo desde el Asistente de Anamnesis. Sus preguntas guiadas ayudan a detectar situaciones clave, motivaciones, objeciones y objetivos de vida del paciente.',
          'Después, la presentación sincronizada permite ordenar esa información de forma visual. Esto ayuda al paciente a asimilar su problema y a imaginar cómo sería su vida con menos limitaciones.',
          'Cuando el paciente se ve reflejado en la explicación, la recomendación de gama se vuelve más comprensible. No se trata de “subir ticket”, sino de elegir una solución coherente con lo que quiere recuperar.'
        ]
      },
      {
        id: 'asistente-argumentar-gamas',
        title: 'Asistente para Argumentar Gamas de Hear-O',
        paragraphs: [
          'Hear-O también incorpora recursos específicos para ayudar al audiólogo a defender mejor las diferencias entre gamas.',
          'El Asistente para Argumentar Gamas define diferentes situaciones, expone el beneficio real de las prestaciones de una gama alta y ayuda a construir una explicación más clara para el paciente.',
          'Además, incluye un simulador de situaciones reales para que la conversación no se quede en datos técnicos. El audiólogo puede apoyarse en ejemplos concretos y explicar por qué una gama superior puede aportar más seguridad en determinados entornos.',
          'Este tipo de apoyo reduce improvisación, da consistencia al equipo y permite recomendar gamas altas con más seguridad, siempre desde la necesidad real del paciente.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La gama alta se entiende mejor cuando el paciente deja de ver un audífono caro y empieza a imaginar una vida con menos esfuerzo, más conversación y más participación.',
      items: ['Anamnesis', 'Vida social', 'Beneficio real', 'Gamas claras']
    },
    extraImages: [
      {
        src: `${visualBase}/como-recomendar-gama-alta-audifonos.webp`,
        alt: 'Asistente de Hear-O para argumentar gamas altas de audífonos con situaciones reales y beneficios para el paciente',
        afterSectionId: 'asistente-argumentar-gamas',
        caption: 'Ejemplo del Asistente para Argumentar Gamas de Hear-O, con situaciones reales, beneficios de gama alta y simulador de escenarios.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿Hay que ofrecer siempre gama alta?', 'No. Hay que recomendar la opción que mejor encaja con la vida, necesidades y entornos reales del paciente.'],
      ['¿Cómo se evita parecer agresivo al hablar de gama alta?', 'Apoyando la recomendación en la anamnesis y explicando beneficios reales, no presionando con tecnología o precio.'],
      ['¿Qué debe entender el paciente?', 'Debe entender qué limitaciones quiere reducir y qué gama ofrece más seguridad para conseguirlo en su día a día.'],
      ['¿Cómo ayuda Hear-O a argumentar gamas?', 'Hear-O usa preguntas guiadas, presentación sincronizada y un asistente específico para explicar prestaciones, situaciones reales y beneficios de cada gama.']
    ]
  },
  {
    slug: 'captar-mas-pacientes-centro-auditivo',
    category: 'Captación',
    title: 'Cómo captar más pacientes para un centro óptico y auditivo',
    description: 'Estrategia práctica para captar más pacientes en centros ópticos y auditivos combinando acciones presenciales, prueba auditiva online, SEO local y Marketing Studio.',
    keyword: 'captar pacientes centro óptico auditivo',
    answer: 'Para captar más pacientes, un centro óptico y auditivo necesita aprovechar su tráfico presencial, comunicar bien el servicio de audiología, ofrecer una puerta de entrada sencilla como una prueba auditiva online y mantener campañas digitales constantes con seguimiento automático.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio',
    tips: [
      'Aprovechar cada visita de óptica para informar de forma natural sobre el servicio auditivo.',
      'Crear una oferta de entrada sencilla: revisión, screening o Prueba Auditiva Online.',
      'Combinar acciones presenciales con Google Business, reseñas, SEO y campañas digitales.',
      'Captar leads no es suficiente: hay que hacer seguimiento con emails, promociones y recordatorios.',
      'Usar Hear-O Marketing Studio para generar campañas, publicaciones y promociones sin depender de improvisación.'
    ],
    example: 'Una óptica con gabinete auditivo puede colocar una tablet con cascos en la zona de espera e invitar a cada visita a hacer una prueba rápida tipo “ponte a prueba”. Si el resultado indica posible dificultad, el centro ya tiene una oportunidad para agendar una revisión auditiva profesional.',
    tableRows: [
      ['Tráfico de óptica', 'Personas que ya entran al centro y pueden descubrir el servicio auditivo.'],
      ['Screening en tienda', 'Prueba breve que transforma una visita normal en una oportunidad auditiva.'],
      ['Prueba Auditiva Online', 'Lead magnet para captar datos desde web, redes o dentro del propio centro.'],
      ['Canales digitales', 'Google Business, reseñas, SEO, campañas, email y publicaciones.'],
      ['Hear-O Marketing Studio', 'Ayuda a captar leads, crear campañas, generar promociones y mantener seguimiento.']
    ],
    sections: [
      {
        id: 'objetivo-captacion',
        title: 'El objetivo: convertir visibilidad en pacientes auditivos',
        paragraphs: [
          'Cada vez más ópticas incorporan gabinete auditivo. Eso abre una oportunidad muy potente: ya existe tráfico presencial, confianza de marca y una relación previa con personas que cuidan su salud visual.',
          'El reto es que el servicio de audiología no quede escondido. Si el paciente entra solo pensando en gafas, lentillas o una revisión visual, quizá nunca se plantee que también puede revisar su audición en el mismo centro.',
          'La captación debe tener un objetivo claro: transformar visitas, contactos y búsquedas online en oportunidades reales para el gabinete auditivo.'
        ]
      },
      {
        id: 'marketing-studio-pronto',
        title: 'Dónde encaja Hear-O Marketing Studio desde el principio',
        paragraphs: [
          'La captación no debería depender de que alguien tenga tiempo para pensar campañas, escribir emails, diseñar promociones o publicar en redes. Ahí es donde Hear-O Marketing Studio aporta valor desde el primer momento.',
          'Marketing Studio ayuda a crear campañas de captación, promociones, publicaciones, emails y acciones de seguimiento pensadas para centros auditivos y óptico-auditivos.',
          'La idea no es solo captar un lead. Es crear una cadena completa: atraer interés, recoger datos, enviar mensajes útiles, proponer una cita y mantener contacto hasta que la oportunidad avance.'
        ]
      },
      {
        id: 'canales-tradicionales',
        title: 'Canales tradicionales que siguen teniendo sentido',
        paragraphs: [
          'Aunque la captación digital es fundamental, un centro óptico y auditivo también debe cuidar los canales presenciales. No necesitan ser el eje de toda la estrategia, pero sí pueden generar recordatorio, cercanía y confianza local.',
          'La clave está en que el mensaje sea simple: el centro no solo vende audífonos, también ayuda a detectar problemas auditivos y a orientar al paciente.'
        ],
        bullets: [
          'Cartelería y escaparate destacado: mensajes visibles sobre revisión auditiva, pérdida auditiva y prueba inicial.',
          'Vallas o soportes locales: útiles si el centro está en una zona con tráfico peatonal o de vehículos y quiere reforzar marca.',
          'Acciones en centros de día: charlas breves, revisiones orientativas o jornadas de salud auditiva.',
          'Acciones en colegios o asociaciones: especialmente para educación, prevención y detección temprana cuando tenga sentido.',
          'Folletos bien planteados: mejor pocos mensajes claros que mucho texto técnico.'
        ]
      },
      {
        id: 'acciones-dentro-centro',
        title: 'Acciones directas dentro del centro óptico',
        paragraphs: [
          'Una óptica con gabinete auditivo tiene una ventaja que muchos centros auditivos puros no tienen: ya recibe visitas de forma constante.',
          'Ese tráfico debe aprovecharse con naturalidad, sin convertir cada visita en una venta forzada. Recepción, ópticos y personal de atención pueden informar de la existencia del servicio auditivo, detectar señales y proponer una prueba sencilla.',
          'Por ejemplo, una persona que viene a revisar la vista puede estar acompañada por un familiar con dificultad auditiva. O puede mencionar cansancio, edad, problemas de comunicación o molestias en reuniones. Esas señales son oportunidades para informar.'
        ],
        bullets: [
          'Formar al equipo para mencionar el servicio auditivo de forma breve y amable.',
          'Colocar mensajes visibles en mostrador, sala de espera y escaparate.',
          'Incluir una pregunta sencilla en la atención: “¿Hace cuánto no revisa también su audición?”.',
          'Ofrecer un screening auditivo rápido junto a la revisión óptica cuando el flujo del centro lo permita.'
        ]
      },
      {
        id: 'screening-prueba-online',
        title: 'Screening auditivo y Prueba Auditiva Online en el propio centro',
        paragraphs: [
          'Una acción muy potente es colocar una tablet con cascos y plantear la prueba como algo sencillo, rápido y casi lúdico: “ponte a prueba” o “comprueba tu audición en unos minutos”.',
          'Este enfoque reduce barreras. Muchas personas no pedirían una cita auditiva formal, pero sí aceptan hacer una prueba orientativa mientras esperan o después de su revisión óptica.',
          'Hear-O incluye una Prueba Auditiva Online que puede actuar como lead magnet. Puede usarse desde la web, campañas, redes sociales o incluso dentro del propio centro para captar datos y abrir una oportunidad de seguimiento.',
          'Puedes hacer clic aquí o en la imagen para ver la prueba auditiva online que se incluye con Hear-O Marketing Studio.'
        ]
      },
      {
        id: 'canales-digitales',
        title: 'Canales digitales para captar pacientes',
        paragraphs: [
          'La captación digital debe trabajar en paralelo al centro físico. Hoy muchas personas buscan antes en Google, comparan reseñas y revisan la web antes de pedir cita.',
          'Por eso, el centro necesita presencia local clara, una web bien posicionada y campañas que no se queden en publicaciones sueltas.'
        ],
        bullets: [
          'Ficha de Google Business completa: horarios, servicios, fotos, teléfono, ubicación, categorías y publicaciones.',
          'Reseñas: pedirlas de forma constante a pacientes satisfechos y responderlas con profesionalidad.',
          'SEO web: páginas claras para revisión auditiva, audífonos, prueba auditiva, centro auditivo y servicio de audiología en la ciudad.',
          'Contenido útil: artículos sobre síntomas, cuándo revisar la audición, audífonos, adaptación y cuidado auditivo.',
          'Campañas digitales: anuncios, emails, publicaciones y promociones conectadas con una oferta de entrada.'
        ]
      },
      {
        id: 'campanas-mailing-leads',
        title: 'Qué hacer después de captar un lead',
        paragraphs: [
          'Captar un lead no sirve de mucho si después no hay seguimiento. Muchas oportunidades se pierden porque alguien deja sus datos, recibe una llamada tarde o nunca vuelve a tener contacto con el centro.',
          'Una buena estrategia debe incluir emails, recordatorios, llamadas, mensajes de seguimiento y campañas específicas según el tipo de contacto: persona interesada, prueba online realizada, paciente antiguo, acompañante o usuario que no pidió cita.',
          'Aquí Hear-O Marketing Studio ayuda a mantener una comunicación constante sin que el equipo tenga que crear cada acción desde cero.'
        ]
      },
      {
        id: 'generador-promos-ia',
        title: 'Campañas, promociones y publicaciones con IA',
        paragraphs: [
          'Otro bloqueo habitual es no saber qué publicar, qué promoción lanzar o cómo redactar una campaña. Muchas veces el centro tiene intención de hacer marketing, pero no tiene tiempo ni equipo especializado.',
          'Hear-O Marketing Studio incluye recursos como el Generador de Promos con IA para crear campañas, promociones y publicaciones enfocadas al sector auditivo.',
          'Esto permite lanzar acciones más profesionales, mantener cadencia y dar presencia al gabinete auditivo sin depender siempre de una agencia externa o de la inspiración del momento.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Un centro óptico y auditivo no solo debe buscar pacientes fuera. También debe convertir mejor a las personas que ya entran por la puerta y mantener campañas digitales constantes.',
      items: ['Tráfico de óptica', 'Screening auditivo', 'Prueba online', 'Marketing Studio']
    },
    extraImages: [
      {
        src: `${visualBase}/mkt_leadmagnet hear-o.webp`,
        alt: 'Prueba Auditiva Online de Hear-O como lead magnet para captar pacientes en centros ópticos y auditivos',
        afterSectionId: 'screening-prueba-online',
        caption: 'Ejemplo de Prueba Auditiva Online incluida en Hear-O Marketing Studio para captar leads y convertir visitas en oportunidades.',
        layout: 'full',
        href: 'https://hear-o-centro-demo.vercel.app/prueba-auditiva-online/'
      },
      {
        src: `${visualBase}/marketing-con-IA-para-centros-audiologico.webp`,
        alt: 'Marketing con IA para centros audiológicos y óptico-auditivos con campañas, promociones y publicaciones',
        afterSectionId: 'generador-promos-ia',
        caption: 'Ejemplo de generación de campañas y promociones con IA dentro de Hear-O Marketing Studio.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿Esta estrategia sirve para ópticas con gabinete auditivo?', 'Sí. De hecho, una óptica puede aprovechar su tráfico presencial para informar, detectar interés y ofrecer una prueba auditiva sencilla.'],
      ['¿La captación depende solo de anuncios?', 'No. También depende de escaparate, atención en tienda, Google Business, reseñas, SEO, prueba online y seguimiento.'],
      ['¿Qué aporta la Prueba Auditiva Online?', 'Permite convertir una visita o usuario curioso en un lead con datos, resultado orientativo y posibilidad de seguimiento hacia una cita.'],
      ['¿Cómo ayuda Hear-O Marketing Studio?', 'Ayuda a captar leads, crear campañas de mailing, generar promociones y publicaciones con IA, y mantener acciones de marketing más constantes.']
    ]
  },
  {
    slug: 'prueba-auditiva-online-convertir-visitas-oportunidades',
    category: 'Captación',
    title: 'Prueba Auditiva Online: cómo convertir visitas en oportunidades',
    description: 'Cómo usar una Prueba Auditiva Online personalizada para captar leads, reforzar la imagen del centro óptico-auditivo y activar campañas con Hear-O Marketing Studio.',
    keyword: 'prueba auditiva online centro óptico auditivo',
    answer: 'Una Prueba Auditiva Online propia permite a un centro óptico-auditivo ofrecer una puerta de entrada sencilla, captar leads con su imagen de marca y activar después campañas de seguimiento dentro de Hear-O Marketing Studio.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio',
    tips: [
      'Usar la prueba auditiva online como lead magnet propio del centro, con su imagen de marca.',
      'Combinar una prueba auditiva en fases con un autotest de situaciones para captar perfiles diferentes.',
      'Insertarla en la web, campañas de email, redes sociales, publicidad y WhatsApp.',
      'Usarla también dentro del centro con una tablet y cascos para aprovechar el tráfico presencial.',
      'Conectar cada lead con un flujo de seguimiento dentro de Hear-O Marketing Studio.'
    ],
    example: 'Un centro óptico-auditivo puede enviar una campaña de email con una Prueba Auditiva Online, captar los datos de quienes la completan y activar después mensajes de seguimiento para ofrecer una revisión profesional en gabinete.',
    tableRows: [
      ['Sin prueba online', 'La visita web o el contacto curioso puede marcharse sin dejar datos.'],
      ['Prueba con marca del centro', 'El usuario recibe una experiencia más profesional y asociada al propio centro.'],
      ['Lead captado', 'El centro recoge datos útiles para seguimiento comercial y campañas.'],
      ['Marketing Studio', 'El lead entra en un flujo de emails, promociones, recordatorios o contacto.'],
      ['Resultado final', 'Más oportunidades para convertir visitas en pacientes reales.']
    ],
    sections: [
      {
        id: 'activo-propio-centro',
        title: 'Por qué es tan interesante tener una Prueba Auditiva Online propia',
        paragraphs: [
          'Para un centro óptico-auditivo, disponer de su propia Prueba Auditiva Online es mucho más que añadir una herramienta curiosa a la web.',
          'Es una forma de ofrecer valor antes de la cita, captar datos de personas interesadas y reforzar una imagen más moderna y profesional del centro.',
          'Además, si la prueba se presenta con la imagen de marca del centro, el usuario no siente que está usando una herramienta externa sin relación. Percibe que el propio centro le ofrece una primera orientación y una vía sencilla para pedir una revisión auditiva profesional.'
        ]
      },
      {
        id: 'marketing-studio-prueba',
        title: 'La Prueba Auditiva Online incluida en Hear-O Marketing Studio',
        paragraphs: [
          'Hear-O Marketing Studio incluye una Prueba Auditiva Online pensada para captar leads y activar acciones de marketing posteriores.',
          'La idea es sencilla: el centro ofrece una prueba atractiva y accesible; el usuario la completa; el centro recoge el lead; y después Marketing Studio permite trabajar esa oportunidad con campañas, emails, promociones o contacto comercial.',
          'Así, la prueba no se queda en una acción aislada. Se convierte en la puerta de entrada a un flujo completo de captación y seguimiento.'
        ]
      },
      {
        id: 'prueba-tres-fases',
        title: 'Prueba Auditiva Online en tres fases',
        paragraphs: [
          'La primera modalidad es una Prueba Auditiva Online estructurada en tres fases. Esto la hace más completa que un simple cuestionario y permite generar una experiencia más interesante para el usuario.',
          'Las tres fases trabajan diferentes aspectos de la audición: frecuencias, simulación de entornos y discriminación de habla con palabras.',
          'No sustituye una prueba profesional en gabinete, pero sí ayuda a detectar interés, orientar al usuario y abrir una conversación con el centro.'
        ],
        bullets: [
          'Frecuencias: permite una primera aproximación a la percepción de sonidos en diferentes rangos.',
          'Simulación de entornos: ayuda a que el usuario se identifique con situaciones cotidianas.',
          'Discriminación de habla con palabras: acerca la prueba a un problema real, que no es solo oír, sino entender.'
        ]
      },
      {
        id: 'autotest-situaciones',
        title: 'Autotest auditivo de situaciones',
        paragraphs: [
          'La segunda modalidad es un autotest de situaciones, basado en preguntas y respuestas.',
          'Este formato es especialmente útil para usuarios que todavía no se ven preparados para hacer una prueba auditiva más técnica, pero sí reconocen dificultades en su día a día.',
          'Preguntas sobre conversaciones, televisión, reuniones, ruido o cansancio auditivo ayudan a que la persona identifique señales y acepte mejor la recomendación de una revisión profesional.'
        ]
      },
      {
        id: 'casos-uso',
        title: 'Casos de uso para captar más leads',
        paragraphs: [
          'La Prueba Auditiva Online funciona mejor cuando no se limita a estar escondida en una página de la web. Debe moverse de forma activa por distintos canales.',
          'Estos son algunos usos prácticos para centros auditivos y óptico-auditivos.'
        ],
        bullets: [
          'Enviarla en campañas de email marketing a pacientes, leads antiguos o contactos de la base de datos.',
          'Insertarla en la página web como llamada a la acción principal para personas que aún no quieren pedir cita.',
          'Moverla en redes sociales como contenido útil: “comprueba tu audición en unos minutos”.',
          'Usarla en campañas de publicidad como oferta de entrada para captar usuarios interesados.',
          'Enviarla por WhatsApp o email como cribado previo antes de una visita.',
          'Usarla dentro del propio centro con una tablet y cascos, especialmente en ópticas con tráfico presencial.'
        ]
      },
      {
        id: 'flujo-captacion',
        title: 'Qué ocurre al contratar Hear-O Marketing Studio',
        paragraphs: [
          'Con Hear-O Marketing Studio, la Prueba Auditiva Online no funciona como una acción aislada. Funciona como una puerta de entrada para captar leads que engordan la base de datos del centro y quedan incluidos en acciones posteriores de marketing.',
          'El recorrido empieza con una campaña de mail, una publicación, un anuncio, un WhatsApp o un enlace desde la web. El usuario hace la prueba, rellena sus datos y el centro gana una oportunidad que antes probablemente se habría perdido.',
          'Cuando el usuario pide cita, el centro puede contactarle, agendar una revisión auditiva, realizar la valoración profesional y avanzar hacia la adaptación y la conversión en paciente.',
          'Cuando el usuario no pide cita, tampoco se pierde. Entra en la base de datos y queda disponible para recibir nuevas campañas de mail, promociones, recordatorios o contenidos hasta que vuelva a mostrar interés.',
          'Ese es el beneficio real: no todos los leads convierten en el primer contacto, pero Hear-O permite seguir trabajando sobre ellos hasta que estén preparados para pedir cita.'
        ],
        bullets: [
          'Campaña de mail o publicidad > el usuario hace la prueba > rellena sus datos.',
          'Si pide cita > el centro contacta > agenda revisión > adaptación > conversión en paciente.',
          'Si no pide cita > entra en base de datos > queda disponible para nuevas acciones.',
          'Campañas de mail a leads > algunos piden cita y otros siguen dentro de la base de datos.',
          'Resultado: el centro no solo capta contactos; crea una base de oportunidades que Marketing Studio sigue trabajando.'
        ]
      },
      {
        id: 'imagen-profesional',
        title: 'Imagen más profesional para el centro',
        paragraphs: [
          'Una prueba auditiva online con marca propia también mejora la percepción del centro.',
          'El usuario ve un centro más moderno, más accesible y mejor preparado para acompañarle antes incluso de la primera cita.',
          'Para ópticas que están incorporando audiología, este punto es especialmente importante: la prueba ayuda a dar visibilidad al gabinete y a presentar el servicio auditivo como una parte seria y bien integrada dentro del centro.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La Prueba Auditiva Online no es solo una prueba. Es una puerta de entrada para captar leads, reforzar marca y activar campañas dentro de Hear-O Marketing Studio.',
      items: ['Marca propia', 'Captación de leads', 'Seguimiento', 'Más citas']
    },
    extraImages: [
      {
        src: `${visualBase}/test_auditivo_4_frecuencias_para_centros_auditivos.webp`,
        alt: 'Prueba auditiva online por frecuencias para centros auditivos y óptico-auditivos',
        afterSectionId: 'prueba-tres-fases',
        caption: 'Ejemplo de fase de frecuencias dentro de la Prueba Auditiva Online incluida en Hear-O Marketing Studio.',
        layout: 'third'
      },
      {
        src: `${visualBase}/prueba_auditiva_online_gratis_para_centros_auditivos.webp`,
        alt: 'Prueba auditiva online con simulación de entornos para centros auditivos',
        afterSectionId: 'prueba-tres-fases',
        caption: 'Ejemplo de simulación de entornos para que el usuario relacione la prueba con situaciones reales.',
        layout: 'third'
      },
      {
        src: `${visualBase}/prueba_auditiva_online_gratis_discriminacion_palabras.webp`,
        alt: 'Prueba auditiva online de discriminación de palabras para centros auditivos',
        afterSectionId: 'prueba-tres-fases',
        caption: 'Ejemplo de discriminación de habla con palabras dentro de la Prueba Auditiva Online.',
        layout: 'third'
      },
      {
        src: `${visualBase}/ejemplo-autotest-auditivo-para-centros-auditivos.webp`,
        alt: 'Autotest auditivo de situaciones para captar leads en centros auditivos',
        afterSectionId: 'autotest-situaciones',
        caption: 'Ejemplo de autotest auditivo basado en situaciones cotidianas y preguntas sencillas.',
        layout: 'right'
      },
      {
        src: `${visualBase}/como_captar_leads_en_centro_auditivo.webp`,
        alt: 'Flujo de captación de leads en un centro auditivo con Prueba Auditiva Online y Hear-O Marketing Studio',
        afterSectionId: 'flujo-captacion',
        caption: 'Flujo de captación de leads con Prueba Auditiva Online: campaña, test, datos, cita o entrada en base de datos para nuevas campañas.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿La Prueba Auditiva Online sustituye una prueba profesional?', 'No. Es una herramienta de captación y orientación inicial. La valoración profesional debe realizarse en el centro.'],
      ['¿Puede llevar la imagen de marca del centro?', 'Sí. Lo interesante es que el usuario perciba la prueba como una herramienta propia del centro óptico-auditivo.'],
      ['¿Para qué sirve captar el lead?', 'Sirve para poder hacer seguimiento, enviar campañas, ofrecer una revisión profesional y trabajar la oportunidad dentro de Marketing Studio.'],
      ['¿Dónde puede usarse la prueba?', 'En la web, redes sociales, campañas de publicidad, email marketing, WhatsApp y también dentro del propio centro con una tablet y cascos.']
    ]
  },
  {
    slug: 'anamnesis-emocional-audiologia',
    category: 'Anamnesis',
    title: 'Qué es una anamnesis emocional en audiología',
    description: 'Qué es la anamnesis emocional en audiología, por qué ayuda a vender mejor audífonos y cómo Hear-O guía la consulta, la presentación, el informe y el argumentario.',
    keyword: 'anamnesis emocional audiología',
    answer: 'La anamnesis emocional es una conversación guiada que permite descubrir los problemas, miedos, limitaciones y deseos reales del paciente para explicar la solución auditiva desde el beneficio de vida, no solo desde el dato técnico.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis',
    tips: [
      'Evitar una anamnesis tipo test y convertirla en una conversación real.',
      'Escuchar escenas concretas: familia, televisión, reuniones, ruido, trabajo, cansancio o aislamiento.',
      'Detectar dolor, miedo, vergüenza, expectativas y objeciones antes de hablar de audífonos.',
      'Argumentar desde el cambio de vida y el estado emocional que el paciente quiere recuperar.',
      'Usar la información recogida para reforzar informe, recomendación de gama y cierre.'
    ],
    example: 'No es lo mismo decir “tiene pérdida en agudos” que explicar: “lo que nos ha contado sobre las comidas familiares encaja con esta dificultad para entender palabras en ruido; por eso la recomendación busca que vuelva a participar sin tanto esfuerzo”.',
    tableRows: [
      ['Anamnesis tipo test', 'Recoge respuestas, pero no siempre descubre el verdadero motivo de decisión.'],
      ['Anamnesis emocional', 'Descubre dolor, limitaciones, deseos, miedo al cambio y beneficio esperado.'],
      ['Objeciones', 'Se reducen porque la recomendación nace de lo que el paciente ha contado.'],
      ['Precio', 'Se mitiga cuando el paciente entiende el valor de recuperar vida diaria y bienestar.'],
      ['Hear-O', 'Guía preguntas, presentación visual, informe personalizado y argumentario de cierre.']
    ],
    sections: [
      {
        id: 'que-es-anamnesis-emocional',
        title: 'Qué es realmente una anamnesis emocional',
        paragraphs: [
          'Una anamnesis emocional no consiste en añadir preguntas “bonitas” a una entrevista clínica. Consiste en entender cómo vive el paciente su pérdida auditiva.',
          'La diferencia está en pasar de un cuestionario rígido a una conversación. El audiólogo no solo busca saber si oye peor, sino dónde, con quién, desde cuándo, qué evita, qué le duele, qué le preocupa y qué espera recuperar.',
          'Cuando el paciente verbaliza su problema real, la recomendación gana fuerza. Ya no se habla de comprar audífonos; se habla de recuperar conversaciones, seguridad, autonomía y tranquilidad.'
        ]
      },
      {
        id: 'evitar-test',
        title: 'Por qué evitar una anamnesis tipo test',
        paragraphs: [
          'Una anamnesis tipo test puede ser útil para ordenar información, pero si se queda solo en marcar respuestas, pierde la parte más valiosa de la consulta.',
          'El paciente necesita sentirse escuchado. Muchas veces llega con vergüenza, miedo al precio, resistencia a aceptar su pérdida o dudas sobre si un audífono le va a cambiar realmente la vida.',
          'Si el audiólogo se limita a preguntar y pasar pantalla, puede perder el verdadero motivo de decisión. En cambio, si conversa, escucha y profundiza, encuentra el argumento que después sostendrá la recomendación.'
        ]
      },
      {
        id: 'dolor-limitaciones',
        title: 'Escuchar los verdaderos problemas, dolores y limitaciones',
        paragraphs: [
          'El dato técnico importa, pero no suele ser lo que mueve la decisión. Lo que mueve la decisión es el impacto en la vida diaria.',
          'Hay pacientes que dejan de ir a comidas porque se cansan. Otros suben demasiado la televisión y generan tensión familiar. Otros evitan reuniones, se aíslan, fingen entender o dependen de que un familiar les repita todo.',
          'Esas escenas son oro para la consulta. No para manipular, sino para explicar con honestidad por qué la adaptación puede tener sentido.'
        ],
        bullets: [
          '¿En qué situación nota más que no entiende?',
          '¿Qué actividades ha dejado de hacer o disfruta menos?',
          '¿Qué le preocupa de empezar con audífonos?',
          '¿Qué le gustaría recuperar si la adaptación funcionara bien?',
          '¿Qué tendría que pasar para que sintiera que ha merecido la pena?'
        ]
      },
      {
        id: 'argumento-emocional',
        title: 'Argumentar desde el beneficio real y el cambio de vida',
        paragraphs: [
          'Una vez detectadas las escenas importantes, el audiólogo puede explicar la solución desde el beneficio real.',
          'El paciente no compra una prestación técnica. Compra volver a participar en una cena, entender a sus nietos, no aislarse en una reunión, sentirse más seguro en la calle o reducir el cansancio de intentar entender todo el día.',
          'Cuando la recomendación se basa en ese cambio de vida, la conversación deja de girar solo alrededor del precio. El audífono pasa de ser un producto caro a una herramienta para recuperar bienestar.'
        ]
      },
      {
        id: 'objeciones-precio',
        title: 'Cómo una buena anamnesis reduce objeciones y mitiga el precio',
        paragraphs: [
          'Muchas objeciones aparecen porque el paciente todavía no ha entendido el valor de la solución o no se siente seguro con el proceso.',
          'Si la anamnesis está bien hecha, parte de esas objeciones se trabajan antes de que aparezcan. El miedo a no adaptarse se reduce explicando el acompañamiento. El rechazo a la tecnología se reduce conectándola con un beneficio concreto. La objeción de precio se mitiga cuando el paciente entiende qué vida quiere recuperar.',
          'Esto no significa que el precio deje de importar. Significa que deja de estar solo. Se compara con el uso diario, con el bienestar, con la comunicación familiar y con la seguridad de tener un plan profesional.'
        ]
      },
      {
        id: 'cierre-adaptacion',
        title: 'Por qué aumenta las posibilidades de cerrar la adaptación',
        paragraphs: [
          'El cierre no empieza al final. Empieza cuando el paciente se siente escuchado y reconoce su propio problema.',
          'Una anamnesis emocional bien hecha permite que la recomendación parezca lógica, personal y coherente. El audiólogo no empuja una solución genérica: devuelve al paciente lo que ha contado y le muestra un camino para mejorar.',
          'Por eso aumentan mucho las posibilidades de cerrar la adaptación. Hay menos improvisación, más confianza y una explicación que el paciente puede entender y recordar.'
        ]
      },
      {
        id: 'hear-o-preguntas-guiadas',
        title: 'Cómo ayuda Hear-O: preguntas guiadas y argumento de refuerzo',
        paragraphs: [
          'Hear-O es perfecto para este enfoque porque ayuda al audiólogo a saber qué preguntar en cada momento y cómo hacerlo de forma adecuada, emocional y útil para la venta consultiva.',
          'El Asistente de Anamnesis no sustituye al profesional. Le da estructura, le recuerda aspectos importantes y le aporta argumentos de refuerzo para profundizar en lo que el paciente está contando.',
          'Así, el audiólogo se siente más seguro, evita dejar preguntas importantes fuera y puede construir una recomendación mucho más conectada con la vida real del paciente.'
        ]
      },
      {
        id: 'presentacion-sincronizada',
        title: 'Presentación sincronizada para que el paciente visualice el problema',
        paragraphs: [
          'Mientras se realiza la anamnesis, el paciente puede tener delante una tablet o pantalla con una representación visual y sincronizada de cada pregunta.',
          'Esto refuerza el argumento porque el paciente no solo escucha: también ve, visualiza y asimila mejor el problema.',
          'Cuando una pregunta se acompaña de una imagen o escena clara, es más fácil que el paciente conecte con su propia experiencia y acepte que la pérdida auditiva tiene consecuencias reales en su vida.'
        ]
      },
      {
        id: 'informe-argumentario-final',
        title: 'Informe personalizado, recomendación de gama y argumentario de cierre',
        paragraphs: [
          'Al finalizar la anamnesis, el módulo permite guardar pruebas auditivas, requisitos del auricular, formato recomendado y toda la información importante recogida durante la consulta.',
          'Con esa información, la IA genera un informe 100% personalizado, profesional y adaptado al caso, incluyendo una recomendación de gama basada en la anamnesis y las pruebas.',
          'Al mismo tiempo, Hear-O genera un argumentario para que el audiólogo sepa cómo cerrar esa venta: qué beneficio remarcar, cómo responder objeciones y cómo explicar la recomendación con seguridad.',
          'El resultado es una consulta más ordenada, más convincente y más segura para el profesional. El Asistente de Anamnesis ayuda a convertir más porque transforma una conversación dispersa en un proceso completo de escucha, explicación, informe y cierre.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La anamnesis emocional convierte mejor porque el paciente no decide solo por datos: decide cuando entiende qué problema tiene, qué vida quiere recuperar y por qué la solución tiene sentido para él.',
      items: ['Escucha real', 'Dolor del paciente', 'Beneficio de vida', 'Cierre seguro']
    },
    extraImages: [
      {
        src: `${visualBase}/ejemplo-anamnesis-audiolgia-1.webp`,
        alt: 'Ejemplo del Asistente de Anamnesis de Hear-O con preguntas guiadas y argumento de refuerzo para audiología',
        afterSectionId: 'hear-o-preguntas-guiadas',
        caption: 'Ejemplo de preguntas guiadas y argumento de refuerzo dentro del Asistente de Anamnesis de Hear-O.',
        layout: 'full'
      },
      {
        src: `${visualBase}/anamnesis-audiologia-con-sincronizacion-con-presentacion.webp`,
        alt: 'Anamnesis audiológica con presentación sincronizada para que el paciente visualice cada pregunta',
        afterSectionId: 'presentacion-sincronizada',
        caption: 'Ejemplo de presentación sincronizada: el paciente visualiza cada pregunta y entiende mejor el problema.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿La anamnesis emocional es menos clínica?', 'No. Complementa la parte clínica con el impacto real en la vida del paciente, haciendo la explicación más comprensible.'],
      ['¿Ayuda realmente a vender más audífonos?', 'Sí, porque mejora la comprensión, reduce objeciones y permite argumentar desde necesidades que el propio paciente ha expresado.'],
      ['¿Cómo ayuda con la objeción de precio?', 'El precio se entiende mejor cuando se conecta con recuperar vida social, autonomía, tranquilidad y bienestar diario.'],
      ['¿Qué aporta Hear-O al proceso?', 'Hear-O guía preguntas, sincroniza una presentación visual, guarda información clave y genera informe personalizado y argumentario de cierre.']
    ]
  },
  {
    slug: 'transformar-prueba-auditiva-decision-compra',
    category: 'Anamnesis',
    title: 'Cómo transformar una prueba auditiva en una decisión de compra',
    description: 'Cómo convertir una prueba auditiva en una decisión de compra con anamnesis emocional, explicación visual, beneficio de vida, informe, argumentario y seguimiento con Hear-O.',
    keyword: 'prueba auditiva decisión de compra',
    answer: 'Una prueba auditiva se convierte en decisión de compra cuando deja de ser un resultado técnico y se transforma en una explicación personal: qué le ocurre al paciente, cómo afecta a su vida, qué puede recuperar y qué siguiente paso tiene sentido.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis',
    tips: [
      'No empezar por el audiograma: empezar por lo que el paciente quiere recuperar.',
      'Traducir cada resultado técnico a una consecuencia cotidiana comprensible.',
      'Usar la anamnesis emocional para justificar la recomendación.',
      'Explicar opciones y gamas desde beneficios reales, no desde precio o tecnología.',
      'Cerrar con informe, argumentario y siguiente paso claro.'
    ],
    example: 'Si el paciente sale diciendo “lo pensaré”, el proceso no debería terminar. Un informe personalizado puede recordar su dificultad concreta, explicar la recomendación y sostener el argumento en casa para que la decisión no se enfríe.',
    tableRows: [
      ['Prueba técnica', 'El paciente recibe datos, pero puede no entender qué significan para su vida.'],
      ['Prueba explicada', 'El resultado se conecta con familia, ruido, televisión, trabajo o vida social.'],
      ['Recomendación', 'La solución se justifica con la anamnesis y el beneficio esperado.'],
      ['Informe y argumentario', 'La explicación continúa después de la consulta y reduce dudas.'],
      ['Hear-O', 'Ordena la anamnesis, la presentación, el informe, la recomendación y el cierre.']
    ],
    sections: [
      {
        id: 'no-es-solo-prueba',
        title: 'La prueba auditiva no debería ser solo una medición',
        paragraphs: [
          'Una prueba auditiva puede ser clínicamente correcta y, aun así, no generar decisión. Esto ocurre cuando el paciente recibe datos, gráficos o porcentajes, pero no entiende qué implican en su vida diaria.',
          'El paciente no compra porque vea una curva. Compra cuando entiende qué problema tiene, cómo le afecta y qué puede mejorar con una adaptación bien planteada.',
          'Por eso, la prueba debe formar parte de una conversación más amplia: anamnesis, explicación visual, recomendación, gestión de objeciones y cierre.'
        ]
      },
      {
        id: 'antes-de-prueba',
        title: 'Antes de la prueba: descubrir el motivo real',
        paragraphs: [
          'El camino hacia la decisión empieza antes de colocar auriculares o mostrar resultados. Empieza preguntando qué le pasa al paciente y qué quiere recuperar.',
          'Una anamnesis emocional permite detectar escenas clave: conversaciones con nietos, comidas familiares, televisión, reuniones, llamadas, ruido, aislamiento o cansancio por intentar entender.',
          'Sin esa información, el audiólogo se queda defendiendo tecnología. Con esa información, puede explicar una solución conectada con el paciente.'
        ],
        bullets: [
          'Qué situaciones evita o disfruta menos.',
          'Dónde nota más esfuerzo auditivo.',
          'Qué le preocupa de usar audífonos.',
          'Qué espera recuperar si la adaptación funciona.',
          'Quién influye en la decisión: pareja, hijos, familia o acompañante.'
        ]
      },
      {
        id: 'explicar-resultado',
        title: 'Durante la explicación: traducir datos a consecuencias',
        paragraphs: [
          'El resultado técnico debe explicarse con lenguaje sencillo. No basta con decir que hay pérdida en una frecuencia o dificultad en ciertos rangos.',
          'Hay que traducirlo: “esto puede explicar por qué entiende peor cuando hay varias personas hablando”, “esto encaja con lo que nos ha contado sobre la televisión” o “esto puede provocar más cansancio al final del día”.',
          'Cuando el paciente reconoce su vida dentro de la explicación, la prueba deja de ser abstracta y empieza a tener sentido.'
        ]
      },
      {
        id: 'beneficio-vida',
        title: 'El beneficio de vida como eje de la recomendación',
        paragraphs: [
          'La recomendación debe hablar menos de aparatos y más de vida recuperada.',
          'El audífono no se presenta como un producto, sino como una herramienta para volver a participar, entender mejor, reducir esfuerzo, ganar autonomía y sentirse más tranquilo.',
          'Este enfoque también ayuda con el precio. El importe sigue existiendo, pero se compara con un beneficio real: recuperar conversaciones, seguridad y bienestar durante años.'
        ]
      },
      {
        id: 'opciones-gamas',
        title: 'Presentar opciones sin convertir la consulta en una lista de precios',
        paragraphs: [
          'Una parte delicada es explicar gamas. Si se presentan como “barata, media y cara”, el paciente suele centrarse en el precio.',
          'Si se presentan como niveles de respuesta ante situaciones reales, la conversación cambia. Una opción puede cubrir entornos tranquilos; otra puede aportar más comodidad en vida diaria; otra puede ofrecer más seguridad en ruido, reuniones o vida social activa.',
          'El objetivo no es empujar siempre la gama más alta. El objetivo es que el paciente entienda qué opción responde mejor a su caso.'
        ]
      },
      {
        id: 'objeciones-cierre',
        title: 'Objeciones: precio, miedo, familia y “me lo pienso”',
        paragraphs: [
          'Las objeciones suelen aparecer cuando el paciente todavía tiene miedo o no ha entendido del todo el valor de la solución.',
          'El precio se trabaja volviendo al beneficio y al uso diario. El miedo a no adaptarse se trabaja explicando prueba, ajustes y seguimiento. La necesidad de hablarlo con la familia se trabaja entregando una explicación clara que pueda compartirse.',
          'El “me lo pienso” no tiene por qué ser el final. Puede ser una oportunidad para fijar un siguiente paso, entregar un informe y mantener vivo el hilo argumental.'
        ]
      },
      {
        id: 'informe-post-prueba',
        title: 'El informe post-prueba mantiene viva la decisión',
        paragraphs: [
          'Muchos pacientes salen de la consulta con demasiada información. Al llegar a casa, recuerdan menos de lo que el audiólogo cree.',
          'Un informe personalizado ayuda a que la explicación no se pierda. Debe recoger el resultado, las situaciones detectadas, el impacto en la vida diaria, la recomendación y el motivo de esa recomendación.',
          'Si además tiene un enfoque claro hacia la confianza y la conversión, permite que la conversación continúe con familiares sin empezar desde cero.'
        ]
      },
      {
        id: 'hear-o-proceso',
        title: 'Cómo Hear-O convierte la prueba en un proceso de decisión',
        paragraphs: [
          'Hear-O une las piezas que normalmente quedan separadas. El Asistente de Anamnesis guía las preguntas para detectar motivos, miedos, limitaciones y objetivos del paciente.',
          'La presentación sincronizada ayuda a explicar el problema de forma visual durante la consulta, para que el paciente no solo escuche, sino que entienda y asimile.',
          'Después, Hear-O permite generar un informe personalizado, recomendar gama y preparar un argumentario de cierre adaptado al caso. Esto da más seguridad al audiólogo y hace que la decisión tenga una base más clara.',
          'El resultado es una consulta menos improvisada: escucha, prueba, explicación, recomendación, informe, argumentario y seguimiento trabajan juntos para convertir mejor.'
        ]
      }
    ],
    visualBreak: {
      title: 'Ruta de conversión',
      text: 'La decisión no aparece por insistir al final. Aparece cuando todo el proceso lleva al paciente desde “tengo una prueba” hasta “entiendo mi problema y sé qué paso dar”.',
      items: ['Escuchar', 'Explicar', 'Recomendar', 'Cerrar']
    },
    extraImages: [
      {
        src: `${visualBase}/como_transformar_prueba_auditiva_en_venta_de_audifonos.webp`,
        alt: 'Infografía sobre cómo transformar una prueba auditiva en una venta de audífonos con Hear-O',
        afterSectionId: 'hear-o-proceso',
        caption: 'Infografía del proceso Hear-O para convertir una prueba auditiva en una decisión de compra: anamnesis, explicación, informe, argumentario y seguimiento.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿Una buena prueba auditiva basta para vender?', 'No siempre. La prueba debe explicarse de forma que el paciente entienda el impacto en su vida y el valor de la solución.'],
      ['¿Qué papel tiene la anamnesis?', 'Es la base de la recomendación. Permite conectar el resultado técnico con situaciones reales del paciente.'],
      ['¿Hace falta informe?', 'Ayuda mucho porque la decisión suele continuar en casa y el paciente necesita recordar los argumentos principales.'],
      ['¿Qué aporta Hear-O?', 'Estructura la consulta, guía la anamnesis, apoya la explicación visual y genera informe y argumentario para cerrar con más seguridad.']
    ]
  },
  {
    slug: 'reducir-ausencias-agenda-centro-auditivo',
    category: 'CRM y Agenda',
    title: 'Cómo reducir ausencias en la agenda de un centro auditivo',
    description: 'Cómo reducir ausencias en centros auditivos con CRM segmentado, calendario visual, tipos de cita, recordatorios automáticos y reagendado con Hear-O.',
    keyword: 'reducir ausencias centro auditivo',
    answer: 'Para reducir ausencias en un centro auditivo hace falta una base bien organizada: CRM segmentado, calendario claro, tipos de cita definidos, recordatorios automáticos y posibilidad de reagendar antes de que el hueco se pierda.',
    modulePath: '/crm-calendario-centros-auditivos',
    moduleLabel: 'Ver CRM & Calendario',
    tips: [
      'Segmentar contactos por tipo: lead, paciente, no paciente u otros perfiles.',
      'Definir tipos de cita: estudio auditivo, revisión, adaptación, fin de prueba, garantía o seguimiento.',
      'Usar un calendario visual con filtros, duración de cita y estados claros.',
      'Enviar siempre al menos un recordatorio antes de la cita.',
      'Permitir confirmación y reagendado para evitar huecos perdidos.'
    ],
    example: 'Si un paciente tiene una revisión o un fin de prueba, Hear-O puede enviar recordatorios automáticos y permitir reagendar si no puede acudir, evitando llamadas manuales y reduciendo ausencias.',
    tableRows: [
      ['CRM sin segmentar', 'El equipo pierde tiempo buscando quién es cada contacto y qué acción necesita.'],
      ['CRM claro', 'Permite ver de un vistazo si es lead, paciente, si tiene citas o si está en prueba de audífono.'],
      ['Agenda manual', 'Obliga a llamar, confirmar y recolocar huecos de forma repetitiva.'],
      ['Calendario visual', 'Ordena tipos de cita, filtros, duración y estado de cada visita.'],
      ['Hear-O CRM & Calendario', 'Une CRM segmentado, calendario visual, recordatorios y reagendado automático.']
    ],
    sections: [
      {
        id: 'base-organizacion',
        title: 'La base: CRM y calendario bien organizados',
        paragraphs: [
          'Reducir ausencias no empieza el día antes de la cita. Empieza mucho antes, con una buena organización del CRM y del calendario.',
          'Si los contactos están mal clasificados, si no se sabe quién es paciente, lead o no paciente, o si las citas no tienen tipos claros, el equipo trabaja con demasiada fricción.',
          'Un centro auditivo necesita que la información importante esté ordenada para que cada persona del equipo sepa qué ocurre, qué acción toca y qué riesgo tiene cada cita.'
        ]
      },
      {
        id: 'crm-segmentado',
        title: 'Un CRM con contactos útiles y segmentados',
        paragraphs: [
          'El CRM no debería ser solo una lista de nombres y teléfonos. Debe contener información útil para actuar rápido.',
          'Como mínimo, conviene diferenciar tipos de contacto: lead, paciente, no paciente, acompañante, contacto antiguo u otros perfiles propios del centro.',
          'También debe permitir ver de un solo vistazo las opciones y acciones de un contacto: si tiene citas, si está en prueba de audífono, si es paciente activo, si hay una oportunidad pendiente o si requiere seguimiento.'
        ],
        bullets: [
          'Tipo de contacto: lead, paciente, no paciente u otro.',
          'Estado comercial o clínico: interesado, en prueba, adaptado, pendiente o antiguo.',
          'Citas actuales y próximas acciones.',
          'Notas útiles para que el equipo no tenga que reconstruir el caso cada vez.'
        ]
      },
      {
        id: 'claridad-crm',
        title: 'La claridad del CRM ahorra tiempo cada día',
        paragraphs: [
          'Cuando el CRM muestra la información esencial de forma clara, el equipo gana velocidad.',
          'A golpe de vista se puede saber de qué contacto se trata, si tiene o no tiene citas, si es paciente o no, si está en prueba de audífono o si hay una acción pendiente.',
          'Esa claridad reduce llamadas internas, búsquedas, dudas y errores. También mejora la atención, porque el equipo llega a cada conversación con más contexto.'
        ]
      },
      {
        id: 'tipos-cita-calendario',
        title: 'Tipos de cita bien definidos para una agenda eficiente',
        paragraphs: [
          'No todas las citas son iguales. Un estudio auditivo, una revisión, una adaptación, un fin de prueba o una garantía tienen objetivos, duración y preparación diferentes.',
          'Definir bien los tipos de cita permite que el calendario sea más fácil de monitorizar. También ayuda a filtrar, ordenar el día y evitar conflictos.',
          'Cuando la agenda distingue claramente cada tipo de cita, el centro puede prever mejor cargas de trabajo, duración de visitas y huecos disponibles.'
        ]
      },
      {
        id: 'calendario-visual',
        title: 'Calendario visual, filtros y control del día',
        paragraphs: [
          'Un calendario útil debe permitir ver el día con claridad: qué citas hay, de qué tipo son, cuánto duran, qué profesional las atiende y qué estado tienen.',
          'Los filtros ayudan a monitorizar la agenda sin ruido. Por ejemplo, ver solo estudios auditivos, revisiones, primeras visitas o citas pendientes de confirmación.',
          'Esa organización permite optimizar el día, reducir conflictos y evitar que el equipo tenga que interpretar una agenda poco clara.'
        ]
      },
      {
        id: 'coste-recordatorios',
        title: 'El coste oculto de llamar para recordar citas',
        paragraphs: [
          'Un centro auditivo necesita recordatorios sí o sí. Como mínimo, una llamada o mensaje antes de la cita reduce olvidos y mejora la asistencia.',
          'El problema es que hacerlo manualmente consume muchas horas. Las llamadas de confirmación, recordatorios y cambios pueden ocupar fácilmente entre 20 y 30 horas al mes.',
          'Traducido a coste empresarial, esa dedicación puede acercarse a 600 € mensuales en una tarea que no genera ventas directas: solo intenta evitar ausencias y huecos perdidos.',
          'Por eso, automatizar recordatorios no es un detalle menor. Es una forma de ahorrar tiempo, reducir coste y liberar al equipo para tareas que sí aportan más valor.'
        ]
      },
      {
        id: 'hear-o-crm-calendario',
        title: 'Cómo lo resuelve Hear-O CRM & Calendario',
        paragraphs: [
          'Hear-O CRM & Calendario cubre esta necesidad desde la base: CRM claro y segmentado, calendario visual, tipos de cita, filtros y automatización de recordatorios.',
          'Cuando se agenda una cita, el sistema puede enviar confirmación. Después, puede enviar recordatorios de cita y avisos de fin de prueba, reduciendo casi a cero la necesidad de llamadas manuales.',
          'Además, si el paciente necesita cambiar la cita, la posibilidad de reagendar de forma automática ayuda a evitar huecos perdidos y reduce ausencias.',
          'El resultado es una agenda más ordenada, menos trabajo repetitivo y más tiempo para que el equipo se centre en atender, adaptar y vender mejor.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Las ausencias no se reducen solo recordando citas. Se reducen cuando el CRM, el calendario, los tipos de cita y los recordatorios trabajan juntos.',
      items: ['CRM claro', 'Calendario visual', 'Recordatorios', 'Reagendado']
    },
    extraImages: [
      {
        src: `${visualBase}/visual_del_crm.webp`,
        alt: 'Vista de CRM para centro auditivo con contacto, citas, estado de paciente y prueba de audífono',
        afterSectionId: 'claridad-crm',
        caption: 'Ejemplo de CRM visual: de un vistazo se entiende el tipo de contacto, sus citas, su estado y próximas acciones.',
        layout: 'full'
      },
      {
        src: `${visualBase}/gestion_citas_recordatosios_con_calendario_centro_auditivo.webp`,
        alt: 'Calendario para centro auditivo con gestión de citas, recordatorios, filtros y tipos de visita',
        afterSectionId: 'calendario-visual',
        caption: 'Ejemplo de calendario visual para controlar tipos de cita, duración, filtros y agenda diaria.',
        layout: 'full'
      },
      {
        src: `${visualBase}/recordatorios_automaticos_citas_centro_auditivo.webp`,
        alt: 'Recordatorios automáticos de citas y fin de prueba para centros auditivos',
        afterSectionId: 'hear-o-crm-calendario',
        caption: 'Ejemplo de recordatorios automáticos de citas y fin de pruebas con Hear-O CRM & Calendario.',
        layout: 'full'
      }
    ],
    faqs: [
      ['¿Basta con enviar un recordatorio?', 'Ayuda, pero funciona mucho mejor cuando el CRM y el calendario están bien organizados desde el inicio.'],
      ['¿Qué tipo de segmentación necesita un centro auditivo?', 'Como mínimo, diferenciar leads, pacientes, no pacientes, contactos antiguos y estados como en prueba, adaptado o pendiente.'],
      ['¿Cuánto tiempo pueden consumir los recordatorios manuales?', 'En muchos centros pueden ocupar entre 20 y 30 horas al mes entre llamadas, confirmaciones y cambios de cita.'],
      ['¿Qué aporta Hear-O CRM & Calendario?', 'Aporta CRM segmentado, calendario visual, confirmaciones, recordatorios y reagendado automático para reducir ausencias y ahorrar tiempo.']
    ]
  },
  {
    slug: 'ventas-renovacion-audifonos-centro-auditivo',
    category: 'Ventas',
    title: 'Cómo conseguir ventas con renovación de audífonos',
    description: 'Estrategia para vender más renovaciones de audífonos con postventa continuada, fidelización, ofertas bien planteadas y campañas automáticas con Hear-O Marketing Studio.',
    keyword: 'renovación de audífonos centro auditivo',
    answer: 'Conseguir ventas por renovación de audífonos depende de mantener una relación activa con el paciente: buen servicio postventa, revisiones, comunicación constante, campañas de fidelización y una oferta de renovación presentada en el momento adecuado.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio',
    tips: [
      'No esperar a que el paciente pida renovar: preparar el terreno con seguimiento continuado.',
      'Usar revisiones y postventa como momentos naturales para detectar necesidad de cambio.',
      'Segmentar pacientes por antigüedad del audífono, garantía, revisiones y uso real.',
      'Crear campañas de renovación con mensajes educativos, no solo descuentos.',
      'Automatizar campañas para que estas acciones no dependan de memoria o tiempo libre.'
    ],
    example: 'Un paciente con audífonos de más de cuatro años puede recibir una campaña educativa sobre mejoras tecnológicas, una invitación a revisión y una oferta de renovación personalizada. Si el centro espera a que el paciente lo pida, probablemente llegue tarde.',
    tableRows: [
      ['Sin estrategia', 'El paciente renueva tarde, en otro centro o solo cuando el audífono falla.'],
      ['Postventa activa', 'El centro mantiene relación, revisiones y confianza durante toda la vida útil del audífono.'],
      ['Campaña de renovación', 'El mensaje llega en el momento adecuado y con una propuesta clara.'],
      ['Marketing Studio', 'Automatiza campañas a pacientes para que el centro no tenga que prepararlas manualmente.'],
      ['Resultado', 'Más fidelización, más renovaciones y menos pérdida de pacientes antiguos.']
    ],
    sections: [
      {
        id: 'renovacion-oportunidad',
        title: 'La renovación de audífonos es una oportunidad que muchos centros pierden',
        paragraphs: [
          'Muchos centros auditivos centran su esfuerzo en captar pacientes nuevos, pero dejan escapar una oportunidad muy valiosa: los pacientes que ya compraron, ya confiaron y podrían renovar en el propio centro.',
          'La renovación no debería depender de que el paciente vuelva por iniciativa propia. Si no hay seguimiento, es fácil que el paciente se enfríe, compare en otro sitio o solo aparezca cuando el audífono ya falla.',
          'Una estrategia de renovación bien trabajada convierte la postventa en una fuente estable de ventas y fidelización.'
        ]
      },
      {
        id: 'postventa-fidelizacion',
        title: 'Postventa continuada: la base para vender renovaciones',
        paragraphs: [
          'La venta de renovación empieza mucho antes de ofrecer un nuevo audífono. Empieza con un buen servicio postventa.',
          'Revisiones, ajustes, limpieza, resolución de dudas, seguimiento de satisfacción y comunicación periódica hacen que el paciente siga vinculado al centro.',
          'Cuando el paciente siente que el centro le acompaña, la renovación deja de ser una venta aislada y se convierte en una evolución natural de su tratamiento auditivo.'
        ]
      },
      {
        id: 'segmentacion-pacientes',
        title: 'Segmentar pacientes para saber a quién hablar y cuándo',
        paragraphs: [
          'No todos los pacientes están en el mismo momento. Por eso, la base de datos debe segmentarse con criterio.',
          'Tiene sentido diferenciar pacientes por antigüedad de audífonos, fecha de compra, garantía, revisiones pendientes, incidencias, nivel de satisfacción o tecnología utilizada.',
          'Esa segmentación permite lanzar mensajes más útiles: no es lo mismo hablar con un paciente recién adaptado que con uno que lleva años con los mismos audífonos.'
        ],
        bullets: [
          'Pacientes con audífonos de más de tres o cuatro años.',
          'Pacientes con garantía próxima a finalizar.',
          'Pacientes con revisiones pendientes.',
          'Pacientes con incidencias o quejas recurrentes.',
          'Pacientes que podrían beneficiarse de mejoras tecnológicas.'
        ]
      },
      {
        id: 'oferta-renovacion',
        title: 'Cómo plantear una buena oferta de renovación',
        paragraphs: [
          'Una buena oferta de renovación no debería ser solo “descuento por cambiar audífonos”.',
          'Debe explicar por qué tiene sentido revisar la tecnología actual, qué mejoras puede notar el paciente y qué valor tiene actualizar su solución auditiva.',
          'El mensaje debe conectar con beneficios reales: más comodidad, mejor rendimiento en ruido, menos esfuerzo, conectividad, seguridad, seguimiento y mejor experiencia diaria.'
        ]
      },
      {
        id: 'acciones-marketing',
        title: 'Acciones de marketing para activar renovaciones',
        paragraphs: [
          'Las renovaciones no se trabajan con una sola llamada. Funcionan mejor con una secuencia de acciones.',
          'Primero se educa, después se invita a revisión, luego se presenta una propuesta y finalmente se hace seguimiento. Esa secuencia puede hacerse por email, WhatsApp, llamada, campaña interna o comunicación en revisión.',
          'Lo importante es que el paciente reciba mensajes útiles antes de que tenga un problema grave o antes de que busque otra alternativa.'
        ],
        bullets: [
          'Email educativo sobre vida útil de audífonos.',
          'Campaña de revisión para pacientes antiguos.',
          'Promoción de renovación por tiempo limitado.',
          'Mensaje sobre mejoras tecnológicas relevantes.',
          'Seguimiento posterior si no responde a la primera acción.'
        ]
      },
      {
        id: 'hear-o-marketing-studio',
        title: 'Cómo ayuda Hear-O Marketing Studio',
        paragraphs: [
          'Hear-O Marketing Studio es especialmente útil en este punto porque permite trabajar campañas predefinidas a pacientes sin que el centro tenga que prepararlas desde cero cada mes.',
          'El sistema puede ayudar a lanzar acciones de fidelización, revisión, recuperación y renovación, con mensajes adaptados al contexto de un centro auditivo.',
          'Esto permite que el centro se olvide de tareas esenciales que normalmente se posponen por falta de tiempo. Las campañas se mantienen vivas, llegan al paciente y ayudan a detectar oportunidades de renovación.',
          'El valor no está solo en vender más. También está en proteger la relación con pacientes antiguos y evitar que el centro pierda renovaciones por silencio.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La renovación de audífonos no se improvisa al final. Se prepara con postventa, confianza, segmentación y campañas constantes.',
      items: ['Postventa', 'Fidelización', 'Campañas', 'Renovación']
    },
    faqs: [
      ['¿Cuándo conviene empezar a hablar de renovación?', 'Depende del caso, pero conviene monitorizar antigüedad del audífono, garantía, satisfacción y revisiones para detectar el momento adecuado.'],
      ['¿La renovación debe plantearse como descuento?', 'No solo. Es mejor explicar el valor de actualizar tecnología, comodidad, rendimiento y seguimiento.'],
      ['¿Por qué se pierden renovaciones?', 'Por falta de seguimiento, base de datos sin segmentar, pacientes antiguos olvidados o campañas que nunca se lanzan.'],
      ['¿Qué aporta Hear-O Marketing Studio?', 'Permite lanzar campañas predefinidas de fidelización, revisión y renovación para que estas acciones no dependan del tiempo libre del centro.']
    ]
  },
  {
    slug: 'hear-o-vs-software-tradicional-centros-auditivos',
    category: 'Comparativas',
    title: 'Hear-O vs software tradicional para centros auditivos',
    description: 'Comparativa clara entre Hear-O y un software tradicional para centros auditivos: gestión interna frente a captación, conversión, automatización, IA y seguimiento.',
    keyword: 'Hear-O vs software tradicional centros auditivos',
    answer: 'La diferencia principal es que un software tradicional suele ordenar la gestión interna, mientras que Hear-O está pensado como un Sistema IA personalizado para captar más oportunidades, convertir mejor, automatizar seguimiento y liberar tiempo al equipo.',
    modulePath: '/software-centros-auditivos-hear-o',
    moduleLabel: 'Ver Full Pack Hear-O',
    tips: [
      'No comparar solo por “funciones”, sino por impacto real en ventas, agenda y seguimiento.',
      'Distinguir entre gestión interna y crecimiento del centro.',
      'Valorar si el sistema ayuda a captar leads, recuperar pacientes y mejorar cierres.',
      'Revisar si permite personalización de marca, campañas y procesos propios.',
      'Medir ahorro de horas y oportunidades recuperadas, no solo coste mensual.'
    ],
    example: 'Un software tradicional puede guardar pacientes, agenda o facturación. Hear-O va más allá: ayuda a captar leads con Marketing Studio, ordenar citas con CRM & Calendario, mejorar la consulta con Anamnesis e informes, y apoyar al equipo con Expertos IA.',
    tableRows: [
      ['Software tradicional', 'Suele centrarse en gestión, agenda, fichas, facturación o procesos internos.'],
      ['ERP o programa clásico', 'Ordena información, pero no siempre ayuda a captar, vender o automatizar seguimiento.'],
      ['Hear-O', 'Sistema IA personalizado que conecta CRM, calendario, marketing, anamnesis, informes, IA y automatizaciones.'],
      ['Diferencia clave', 'No solo guarda datos: ayuda a convertir datos en acciones comerciales y operativas.'],
      ['Convivencia', 'Hear-O puede complementar sistemas existentes si el centro ya usa otro programa para gestión interna.']
    ],
    sections: [
      {
        id: 'comparar-bien',
        title: 'Por qué no conviene comparar solo listas de funciones',
        paragraphs: [
          'Comparar Hear-O con un software tradicional solo por una lista de funciones puede llevar a una conclusión equivocada.',
          'Muchos programas tienen pacientes, agenda, notas, documentos o facturación. Eso es útil, pero no responde a la pregunta más importante: ¿ayuda al centro a captar más, vender mejor, recuperar oportunidades y ahorrar horas?',
          'La comparación correcta debe hacerse por impacto. Un sistema puede guardar mucha información y, aun así, no activar ninguna acción relevante.'
        ]
      },
      {
        id: 'software-tradicional',
        title: 'Qué suele hacer un software tradicional para centros auditivos',
        paragraphs: [
          'Un software tradicional suele estar pensado para organizar la actividad interna del centro. Puede ayudar con fichas, agenda, historial, presupuestos, facturación, stock o documentos.',
          'Ese tipo de gestión es necesaria, pero normalmente se queda dentro del centro. Ordena lo que ya ha pasado o lo que alguien introduce manualmente.',
          'El problema aparece cuando el centro necesita crecer: captar leads, automatizar campañas, recuperar pacientes antiguos, hacer seguimiento post-prueba o mejorar el cierre de ventas.'
        ]
      },
      {
        id: 'limites-software',
        title: 'Dónde se queda corto un software clásico',
        paragraphs: [
          'El límite habitual no es que el software sea malo. Es que su objetivo es otro.',
          'Puede guardar una cita, pero no siempre reduce llamadas de confirmación. Puede tener una ficha de paciente, pero no siempre propone una acción. Puede registrar una prueba, pero no siempre genera un informe comercial útil. Puede tener base de datos, pero no siempre ayuda a reactivarla.',
          'En un centro auditivo moderno, el valor está en conectar información con acciones.'
        ],
        bullets: [
          'Leads que entran por web o campañas y no reciben seguimiento.',
          'Pacientes antiguos que quedan dormidos en la base de datos.',
          'Pruebas auditivas que terminan en “me lo pienso”.',
          'Recordatorios de cita que dependen de llamadas manuales.',
          'Campañas de marketing que se hacen tarde, poco o sin continuidad.'
        ]
      },
      {
        id: 'hear-o-sistema-ia',
        title: 'Hear-O como Sistema IA personalizado',
        paragraphs: [
          'Hear-O no está planteado como otro programa cerrado al que el centro se adapta. Está planteado como un Sistema IA personalizado para centros auditivos.',
          'La diferencia es que combina módulos que normalmente estarían separados: CRM, calendario, automatizaciones, Marketing Studio, Asistente de Anamnesis, informes, argumentarios y Expertos IA.',
          'Además, permite trabajar con la marca del centro, adaptar campañas, personalizar flujos y mantener la propiedad de la base de datos del centro.'
        ]
      },
      {
        id: 'modulos-comparativa',
        title: 'Qué aporta cada módulo frente a un software tradicional',
        paragraphs: [
          'La diferencia se entiende mejor viendo el papel de cada módulo.',
          'Marketing Studio ayuda a captar leads, crear campañas, generar promociones y mover la Prueba Auditiva Online. CRM & Calendario organiza contactos, citas, estados, recordatorios y reagendado. El Asistente de Anamnesis mejora la consulta, genera informes y argumentarios. Los Expertos IA apoyan al equipo en dudas, contenidos, campañas y argumentación.',
          'El resultado es un sistema orientado a acciones, no solo a registro.'
        ]
      },
      {
        id: 'cuando-elegir',
        title: 'Cuándo tiene sentido Hear-O',
        paragraphs: [
          'Hear-O tiene más sentido cuando el centro no solo quiere ordenar información, sino mejorar resultados.',
          'Por ejemplo, cuando hay oportunidades sin seguimiento, pacientes antiguos sin trabajar, ausencias en agenda, campañas que no se hacen, cierres débiles tras la prueba o explicaciones comerciales desiguales entre profesionales.',
          'También encaja especialmente bien en centros que quieren una herramienta personalizada, con branding propio y acompañamiento, no un SaaS cerrado donde “te aguantas con lo que hay”.'
        ]
      },
      {
        id: 'convivir',
        title: '¿Puede convivir Hear-O con otro software?',
        paragraphs: [
          'Sí. En algunos centros, Hear-O puede convivir con un sistema de gestión ya implantado.',
          'No siempre hace falta sustituir todo. A veces el centro ya tiene un programa para facturación o gestión interna, pero necesita una capa de crecimiento, automatización, marketing y apoyo IA.',
          'La decisión depende del punto de partida del centro y de qué problema quiere resolver primero.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Un software tradicional ayuda a gestionar. Hear-O busca gestionar, automatizar y activar oportunidades para que el centro capte, convierta y haga seguimiento mejor.',
      items: ['Captar', 'Convertir', 'Automatizar', 'Seguimiento']
    },
    faqs: [
      ['¿Hear-O sustituye a todos los programas?', 'No necesariamente. Puede complementar sistemas existentes si el centro ya usa otro software para gestión interna.'],
      ['¿Por qué no llamarlo solo software?', 'Porque su propuesta es más amplia: CRM, IA, marketing, automatizaciones, calendario, anamnesis, informes y acompañamiento personalizado.'],
      ['¿Qué diferencia a Hear-O de un CRM tradicional?', 'Hear-O no solo guarda contactos; conecta contactos con campañas, citas, recordatorios, informes, argumentarios y acciones de seguimiento.'],
      ['¿Para qué centro tiene más sentido?', 'Para centros que quieren captar más oportunidades, ahorrar horas, reducir tareas manuales y mejorar la conversión de pruebas auditivas.']
    ]
  },
  {
    slug: 'mejor-crm-centros-auditivos-que-debe-tener',
    category: 'Comparativas',
    title: 'Mejor CRM para centros auditivos: qué debe tener',
    description: 'Guía para elegir el mejor CRM para centros auditivos: criterios, errores frecuentes, checklist de compra y por qué Hear-O CRM & Calendario encaja.',
    keyword: 'mejor CRM centros auditivos',
    answer: 'El mejor CRM para un centro auditivo no es el que tiene más campos, sino el que ayuda al equipo a saber quién es cada contacto, qué necesita, qué cita tiene, qué oportunidad existe y cuál es la próxima acción.',
    modulePath: '/crm-calendario-centros-auditivos',
    moduleLabel: 'Ver CRM & Calendario',
    tips: [
      'Elegir un CRM que muestre la próxima acción, no solo datos del paciente.',
      'Comprobar que permite segmentar leads, pacientes, no pacientes y contactos antiguos.',
      'Valorar calendario, recordatorios, estados y seguimiento antes que una lista enorme de campos.',
      'Revisar si ayuda a vender y recuperar oportunidades, no solo a guardar información.',
      'Evitar CRMs genéricos que obligan al centro a adaptar su proceso a una herramienta poco específica.'
    ],
    example: 'Un CRM útil avisa de pacientes dormidos, revisiones pendientes, garantías, pruebas de audífonos, leads sin cita y oportunidades de renovación sin que el equipo tenga que revisar listas manualmente.',
    tableRows: [
      ['CRM básico', 'Guarda contactos, notas y quizá alguna cita.'],
      ['CRM útil', 'Segmenta contactos, muestra estados, próxima acción y seguimiento pendiente.'],
      ['CRM para audiología', 'Entiende revisiones, pruebas, adaptaciones, garantías, renovaciones y leads.'],
      ['CRM conectado', 'Une calendario, recordatorios, campañas, informes y automatizaciones.'],
      ['Hear-O CRM & Calendario', 'Combina CRM visual, agenda, filtros, recordatorios, reagendado y conexión con el resto del sistema Hear-O.']
    ],
    sections: [
      {
        id: 'no-mas-campos',
        title: 'El mejor CRM no es el que tiene más campos',
        paragraphs: [
          'Un error habitual al elegir CRM es fijarse solo en cuántos datos puede guardar.',
          'Un centro auditivo no necesita una base de datos enorme y difícil de usar. Necesita claridad: quién es el contacto, en qué estado está, qué necesita y qué acción toca ahora.',
          'Si el equipo tarda demasiado en entender la ficha de un paciente, el CRM no está ayudando. Está añadiendo fricción.'
        ]
      },
      {
        id: 'criterios-eleccion',
        title: 'Criterios para elegir el mejor CRM para un centro auditivo',
        paragraphs: [
          'Un CRM para centros auditivos debe estar pensado para el flujo real del negocio: captación, cita, prueba, adaptación, revisión, garantía, renovación y seguimiento.',
          'Por eso, los criterios de elección deben ir más allá de “guardar contactos”.'
        ],
        bullets: [
          'Segmentación por tipo de contacto: lead, paciente, no paciente, antiguo, en prueba o pendiente.',
          'Vista clara de próximas acciones y citas.',
          'Calendario conectado con tipos de visita y duración.',
          'Recordatorios y confirmaciones automáticas.',
          'Seguimiento de oportunidades comerciales.',
          'Filtros para localizar pacientes dormidos, revisiones pendientes o garantías próximas.',
          'Facilidad de uso para todo el equipo.'
        ]
      },
      {
        id: 'errores-frecuentes',
        title: 'Errores frecuentes al elegir CRM',
        paragraphs: [
          'No todos los CRMs sirven igual para un centro auditivo. Muchos sistemas genéricos obligan a configurar demasiado y acaban siendo difíciles de mantener.',
          'Otro error es elegir una herramienta que solo organiza agenda, pero no ayuda a convertir oportunidades ni a hacer seguimiento.',
          'También conviene evitar sistemas donde la información queda aislada: contactos por un lado, agenda por otro, campañas en otra herramienta y seguimiento en notas sueltas.'
        ],
        bullets: [
          'Elegir por precio sin valorar ahorro de tiempo.',
          'Elegir por cantidad de funciones sin comprobar si el equipo las usará.',
          'No definir estados de pacientes y leads.',
          'No conectar CRM con calendario y recordatorios.',
          'No medir qué páginas, campañas o citas generan oportunidades.'
        ]
      },
      {
        id: 'checklist-compra',
        title: 'Checklist antes de contratar un CRM',
        paragraphs: [
          'Antes de contratar un CRM, el centro debería responder algunas preguntas prácticas.',
          'Si la herramienta no responde bien a estas preguntas, probablemente se quedará corta para el día a día.'
        ],
        bullets: [
          '¿Puedo ver de un vistazo si el contacto es lead, paciente o antiguo?',
          '¿Puedo saber si tiene cita, prueba de audífono o seguimiento pendiente?',
          '¿Puedo filtrar por tipo de cita o estado?',
          '¿Puedo automatizar recordatorios y confirmaciones?',
          '¿Puedo conectar campañas o acciones de marketing?',
          '¿Puedo detectar oportunidades de revisión, renovación o recuperación?',
          '¿El equipo lo entenderá sin complicarse?'
        ]
      },
      {
        id: 'crm-ventas',
        title: 'Un buen CRM también ayuda a vender',
        paragraphs: [
          'Un CRM para centros auditivos no debería limitarse a administración. También debe ayudar a mejorar ventas y conversión.',
          'Esto significa controlar leads, saber quién hizo una prueba y no compró, detectar pacientes antiguos, organizar llamadas y evitar que una oportunidad se pierda por falta de seguimiento.',
          'Cuando el CRM muestra la próxima acción, el equipo no depende de memoria, hojas sueltas o listas que nadie revisa.'
        ]
      },
      {
        id: 'hear-o-encaja',
        title: 'Por qué Hear-O CRM & Calendario encaja',
        paragraphs: [
          'Hear-O CRM & Calendario encaja porque está pensado para la realidad de un centro auditivo, no para cualquier negocio genérico.',
          'Permite segmentar contactos, ver información útil de un vistazo, organizar citas por tipo, trabajar con filtros, enviar recordatorios y reducir llamadas manuales.',
          'Además, no funciona aislado. Se conecta con Marketing Studio, Asistente de Anamnesis, informes, argumentarios, recordatorios y automatizaciones. Eso convierte el CRM en parte de un sistema de crecimiento, no solo en una base de datos.'
        ]
      },
      {
        id: 'cuando-no-basta',
        title: 'Cuándo un CRM se queda corto',
        paragraphs: [
          'Un CRM se queda corto cuando el equipo sigue dependiendo de Excel, llamadas manuales, notas sueltas o memoria para saber qué hacer.',
          'También se queda corto si no permite trabajar campañas, si no avisa de oportunidades o si no conecta agenda con seguimiento.',
          'La señal más clara es esta: si el centro tiene muchos datos pero pocas acciones, el CRM no está cumpliendo su función.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El mejor CRM para un centro auditivo no es el que más guarda. Es el que más ayuda a actuar: citar, recordar, vender, recuperar y hacer seguimiento.',
      items: ['Segmentar', 'Agendar', 'Recordar', 'Convertir']
    },
    faqs: [
      ['¿Debe ser específico para audiología?', 'Conviene mucho, porque un centro auditivo tiene revisiones, adaptaciones, garantías, renovaciones, pruebas y oportunidades muy concretas.'],
      ['¿Un CRM genérico puede servir?', 'Puede servir al principio, pero suele requerir más configuración y no siempre entiende los procesos propios de audiología.'],
      ['¿Qué es lo más importante en un CRM auditivo?', 'Que permita ver el estado del contacto, la próxima acción, las citas, el seguimiento y las oportunidades pendientes.'],
      ['¿Hear-O es solo un CRM?', 'No. Incluye CRM & Calendario, pero también Marketing Studio, Asistente de Anamnesis, informes, IA y automatizaciones conectadas.']
    ]
  },
  {
    slug: 'informe-auditivo-vender-mas-audifonos',
    category: 'Anamnesis',
    title: 'Cómo elaborar un informe auditivo que te ayude a vender más audífonos',
    description: 'Cómo estructurar un informe auditivo profesional para que no sea solo clínico, sino una herramienta comercial que refuerce confianza, valor y decisión de compra.',
    keyword: 'informe auditivo vender audífonos',
    answer: 'Un informe auditivo bien elaborado no solo resume una prueba: ayuda al paciente a entender su problema, recordar la recomendación, compartirla con su familia y tomar una decisión con más confianza.',
    modulePath: '/software-anamnesis-vender-mas-audifonos',
    moduleLabel: 'Ver Asistente de Anamnesis',
    tips: [
      'No limitar el informe a datos técnicos: explicar consecuencias en la vida diaria.',
      'Conectar resultados con lo que el paciente contó en la anamnesis.',
      'Incluir una recomendación clara y justificada.',
      'Usar lenguaje sencillo para que el paciente pueda compartirlo en casa.',
      'Preparar el informe como apoyo al cierre, no como documento frío.'
    ],
    example: 'Un informe que solo dice “pérdida auditiva en determinadas frecuencias” informa, pero no convence. Un informe que explica cómo esa pérdida afecta a conversaciones familiares, televisión o reuniones, y por qué se recomienda una gama concreta, ayuda mucho más a vender.',
    tableRows: [
      ['Informe clínico básico', 'Resume datos, pero puede no ayudar al paciente a decidir.'],
      ['Informe pedagógico', 'Explica resultados con lenguaje sencillo y ejemplos cotidianos.'],
      ['Informe comercial ético', 'Conecta problema, beneficio, recomendación y siguiente paso.'],
      ['Informe personalizado', 'Usa anamnesis, pruebas, necesidades y objeciones reales del paciente.'],
      ['Hear-O Anamnesis', 'Genera informes completos y personalizados que ayudan a reforzar, convencer y cerrar.']
    ],
    sections: [
      {
        id: 'informe-herramienta-venta',
        title: 'El informe auditivo también puede vender',
        paragraphs: [
          'Un informe auditivo no debería ser solo un documento clínico para archivar.',
          'Bien estructurado, puede convertirse en una herramienta comercial muy potente: ayuda al paciente a entender qué le ocurre, por qué se recomienda una solución y qué puede ganar si actúa.',
          'Esto no significa manipular ni exagerar. Significa explicar mejor, con más claridad y con mensajes que conecten el resultado técnico con la vida real del paciente.'
        ]
      },
      {
        id: 'problema-informes-frios',
        title: 'El problema de los informes demasiado técnicos',
        paragraphs: [
          'Muchos informes auditivos son correctos desde el punto de vista técnico, pero difíciles de entender para el paciente.',
          'Si el documento está lleno de datos, gráficos o conceptos que el paciente no sabe interpretar, puede acabar generando más distancia que confianza.',
          'El informe debe traducir el resultado: qué significa, cómo afecta, qué situaciones explica y qué recomendación tiene sentido.'
        ]
      },
      {
        id: 'estructura-informe',
        title: 'Estructura de un informe auditivo orientado a conversión',
        paragraphs: [
          'Un buen informe debe seguir una estructura clara. Primero contextualiza el motivo de consulta. Después resume los resultados. Luego conecta esos resultados con situaciones reales. Finalmente presenta la recomendación y el siguiente paso.',
          'La clave es que el paciente no sienta que recibe un documento genérico, sino un resumen de su caso.'
        ],
        bullets: [
          'Motivo de consulta y situaciones que preocupan al paciente.',
          'Resumen claro de resultados de la prueba auditiva.',
          'Impacto en vida diaria: familia, ruido, televisión, trabajo o seguridad.',
          'Recomendación de solución y motivo de esa recomendación.',
          'Beneficio esperado y siguiente paso recomendado.'
        ]
      },
      {
        id: 'mensajes-correctos',
        title: 'Qué mensajes debe lanzar el informe',
        paragraphs: [
          'El informe debe reforzar tres ideas: el problema existe, tiene consecuencias reales y hay una solución razonable.',
          'También debe reducir dudas. Si el paciente teme no adaptarse, el informe puede explicar el proceso de prueba y ajustes. Si duda por precio, puede recordar el beneficio de vida. Si necesita hablarlo con la familia, el informe le da argumentos claros.',
          'Un buen informe no presiona. Acompaña la decisión.'
        ]
      },
      {
        id: 'familia-decision',
        title: 'El informe sigue vendiendo fuera del gabinete',
        paragraphs: [
          'Muchas decisiones de audífonos no se cierran en el momento. El paciente se va a casa, lo habla con su pareja, hijos o familia, y ahí se juega parte de la venta.',
          'Si no lleva nada claro, la conversación se enfría. Si lleva un informe bien explicado, puede recordar el problema, la recomendación y el beneficio esperado.',
          'Por eso el informe debe estar pensado también para quien no estuvo en la consulta.'
        ]
      },
      {
        id: 'recomendacion-gama',
        title: 'Recomendación de gama sin parecer agresivo',
        paragraphs: [
          'El informe también puede ayudar a justificar una gama recomendada.',
          'La recomendación no debe presentarse como “esta es la cara”. Debe explicarse desde las necesidades detectadas: ruido, vida social, comodidad, conectividad, autonomía o dificultad para entender palabras.',
          'Cuando la gama se justifica con la anamnesis y las pruebas, el paciente entiende mejor el valor.'
        ]
      },
      {
        id: 'hear-o-informes',
        title: 'Cómo ayuda Hear-O con informes completos y personalizados',
        paragraphs: [
          'El Asistente de Anamnesis de Hear-O permite recoger información clínica, emocional y comercial durante la consulta.',
          'Con esa información, la IA puede generar un informe completo, profesional y 100% personalizado, conectado con la anamnesis, las pruebas y las necesidades reales del paciente.',
          'El informe no se limita a describir datos. Refuerza la recomendación, explica el beneficio, ayuda a convencer y facilita que el paciente tome una decisión informada.',
          'Además, Hear-O genera un argumentario para que el audiólogo sepa cómo cerrar la venta: qué remarcar, cómo responder objeciones y qué siguiente paso proponer.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Un informe auditivo vende mejor cuando convierte datos en comprensión: problema, impacto, recomendación, beneficio y siguiente paso.',
      items: ['Diagnóstico claro', 'Beneficio real', 'Recomendación', 'Cierre']
    },
    faqs: [
      ['¿Un informe auditivo debe ser comercial?', 'Debe ser profesional y ético, pero también claro y orientado a que el paciente entienda el valor de la recomendación.'],
      ['¿Qué diferencia hay entre informe técnico e informe útil para vender?', 'El técnico recoge datos; el informe útil traduce esos datos a consecuencias, beneficios y siguiente paso.'],
      ['¿Ayuda si el paciente quiere consultarlo con la familia?', 'Sí. Un informe claro permite que la conversación continúe en casa con argumentos bien explicados.'],
      ['¿Qué aporta Hear-O?', 'Hear-O genera informes personalizados y argumentarios de cierre a partir de la anamnesis, las pruebas y el perfil del paciente.']
    ]
  },
  {
    slug: 'soporte-tecnico-instantaneo-centros-auditivos-ia',
    category: 'IA para audiólogos',
    title: 'Soporte técnico instantáneo para centros auditivos gracias a la IA',
    description: 'Cómo un centro auditivo puede resolver dudas técnicas de audífonos, equipos y software de adaptación al instante con Expertos IA especializados.',
    keyword: 'soporte técnico centros auditivos',
    answer: 'El soporte técnico instantáneo con IA permite que un centro auditivo resuelva dudas sobre audífonos, equipos, adaptación y software sin depender siempre de una llamada al fabricante, especialmente cuando el paciente está delante y no se puede esperar.',
    modulePath: '/expertos-ia-audiologia',
    moduleLabel: 'Ver Expertos IA',
    tips: [
      'Identificar qué dudas técnicas se repiten más en consulta.',
      'Diferenciar dudas urgentes de problemas que sí requieren soporte oficial del fabricante.',
      'Usar fuentes seguras, documentación técnica y guías de fabricante como base principal.',
      'Registrar las respuestas útiles para mejorar el criterio interno del equipo.',
      'Usar Expertos IA como apoyo inmediato, no como sustituto de la responsabilidad profesional.'
    ],
    example: 'Un audioprotesista está ajustando unos audífonos y tiene una duda sobre conectividad, configuración de programa o verificación. En vez de interrumpir la consulta para llamar al fabricante, puede consultar al Experto IA, obtener una respuesta estructurada y decidir el siguiente paso sin perder ritmo con el paciente delante.',
    tableRows: [
      ['Soporte tradicional', 'Depende de teléfono, horario, disponibilidad y tiempos de espera.'],
      ['Duda en consulta', 'El paciente está delante y el centro necesita una respuesta rápida.'],
      ['Experto IA', 'Responde al instante usando documentación, manuales y fuentes controladas.'],
      ['Límite razonable', 'Si hay una incidencia crítica o garantía, se deriva al fabricante.'],
      ['Beneficio', 'Más autonomía, menos interrupciones y mejor experiencia para el paciente.']
    ],
    sections: [
      {
        id: 'problema-soporte-tecnico',
        title: 'El problema del soporte técnico cuando el paciente está delante',
        paragraphs: [
          'En un centro auditivo, muchas dudas técnicas aparecen en el peor momento: durante una adaptación, una revisión, una prueba de audífonos o una explicación al paciente.',
          'Puede ser una duda sobre un software de adaptación, una configuración concreta, una conexión inalámbrica, un accesorio, una medición o una función específica del audífono.',
          'El problema no es que el soporte del fabricante no sea útil. Lo es. El problema es que no siempre está disponible en el instante exacto en el que el centro lo necesita.'
        ]
      },
      {
        id: 'coste-espera',
        title: 'Por qué esperar puede afectar a la consulta',
        paragraphs: [
          'Cuando el profesional se queda bloqueado, la consulta pierde fluidez. El paciente percibe dudas, el tiempo se alarga y el centro puede acabar posponiendo una decisión que quizá podía resolverse en el momento.',
          'Además, llamar al fabricante significa depender de horarios, disponibilidad, colas, personas concretas y explicaciones que a veces no llegan cuando hacen falta.',
          'En un entorno donde la confianza es clave, tener una respuesta rápida ayuda a mantener el control de la consulta.'
        ],
        bullets: [
          'Se evita interrumpir la adaptación por una duda puntual.',
          'Se reduce la sensación de improvisación delante del paciente.',
          'Se protege el tiempo del equipo y de la agenda.',
          'Se gana autonomía técnica en el día a día.'
        ]
      },
      {
        id: 'que-puede-resolver',
        title: 'Qué tipo de dudas puede resolver un soporte IA',
        paragraphs: [
          'Un soporte IA bien construido puede ayudar en dudas frecuentes de adaptación, conectividad, accesorios, software, pruebas, verificación y explicación técnica al paciente.',
          'También puede ordenar instrucciones complejas, resumir documentación, recordar pasos de un procedimiento o sugerir comprobaciones antes de escalar una incidencia.',
          'La clave está en que no sea una IA genérica sin contexto. Debe estar preparada para audiología y alimentada con fuentes seguras.'
        ],
        bullets: [
          'Dudas sobre software de adaptación y ajustes habituales.',
          'Preguntas sobre accesorios, conectividad o compatibilidades.',
          'Interpretación práctica de guías y documentación técnica.',
          'Pasos de comprobación antes de llamar al soporte oficial.',
          'Explicaciones sencillas para trasladar al paciente.'
        ]
      },
      {
        id: 'rag-fuentes-seguras',
        title: 'Por qué importan las fuentes seguras y los RAG especializados',
        paragraphs: [
          'En audiología no sirve cualquier respuesta. Una IA que inventa o mezcla información sin control puede ser peligrosa para el criterio profesional del centro.',
          'Por eso el enfoque correcto es trabajar con RAG especializados: bases de conocimiento construidas con documentación fiable, guías de fabricantes, manuales y contenidos revisados.',
          'En Hear-O, los Expertos IA priorizan fuentes seguras de fabricantes y documentación propia, usando fuentes externas solo como apoyo limitado cuando aportan contexto. La idea es que la respuesta sea útil, trazable y prudente.'
        ]
      },
      {
        id: 'cuando-escalar',
        title: 'Cuándo sí conviene contactar con el fabricante',
        paragraphs: [
          'La IA no debe sustituir al soporte oficial cuando hay incidencias de garantía, reparación, fallo de hardware, actualización crítica o una instrucción que dependa directamente del fabricante.',
          'Lo inteligente es usarla como primera capa de resolución: ayuda a entender el problema, probar comprobaciones básicas y preparar mejor la consulta al soporte si finalmente hace falta.',
          'Eso reduce llamadas innecesarias y hace que las llamadas inevitables sean más claras y eficientes.'
        ]
      },
      {
        id: 'hear-o-expertos-ia',
        title: 'Cómo ayuda Hear-O Expertos IA',
        paragraphs: [
          'Hear-O Expertos IA funciona como un equipo de consulta disponible para el centro auditivo cuando aparece una duda técnica, audiológica o comercial.',
          'El objetivo es que el profesional no dependa siempre de un teléfono ni tenga que buscar entre manuales mientras el paciente espera.',
          'Con Expertos IA, el centro obtiene respuestas inmediatas, basadas en conocimiento especializado y orientadas a resolver problemas reales de consulta.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'El soporte IA no elimina al fabricante: evita que cada duda diaria obligue a parar la consulta, llamar y esperar.',
      items: ['Respuesta rápida', 'Fuentes seguras', 'Más autonomía', 'Mejor consulta']
    },
    faqs: [
      ['¿La IA sustituye al soporte del fabricante?', 'No. Sirve como primera capa de ayuda inmediata para dudas frecuentes y problemas cotidianos. Las incidencias críticas deben seguir escalándose al fabricante.'],
      ['¿Qué ventaja tiene frente a buscar en Google?', 'Un Experto IA especializado trabaja con fuentes controladas, contexto audiológico y una respuesta pensada para el día a día del centro.'],
      ['¿Puede usarse con el paciente delante?', 'Sí. Precisamente tiene sentido cuando el centro necesita resolver una duda sin romper la consulta.'],
      ['¿Qué aporta Hear-O?', 'Hear-O Expertos IA ofrece respuestas inmediatas para soporte técnico, dudas audiológicas y argumentos prácticos, usando conocimiento especializado y fuentes seguras.']
    ]
  },
  {
    slug: 'ia-audiologos-resolver-dudas-tecnicas-audiologicas',
    category: 'IA para audiólogos',
    title: 'IA para audiólogos: cómo resolver dudas técnicas y audiológicas en consulta',
    description: 'Usos prácticos de la IA para audiólogos y centros auditivos: adaptación, diagnóstico, pruebas audiológicas, soporte técnico y explicación al paciente.',
    keyword: 'IA para audiólogos',
    answer: 'La IA para audiólogos puede actuar como apoyo inmediato en consulta para resolver dudas técnicas, interpretar situaciones audiológicas, revisar pasos de adaptación y preparar explicaciones claras para el paciente.',
    modulePath: '/expertos-ia-audiologia',
    moduleLabel: 'Ver Expertos IA',
    tips: [
      'Usar la IA para ordenar dudas, no para delegar el criterio clínico.',
      'Pedir respuestas estructuradas: contexto, comprobaciones, explicación y siguiente paso.',
      'Separar dudas técnicas de dudas audiológicas para obtener respuestas más precisas.',
      'Consultar fuentes seguras cuando se trate de equipos, software o fabricantes.',
      'Convertir respuestas útiles en aprendizaje interno para todo el equipo.'
    ],
    example: 'Durante una revisión, el audiólogo detecta que el paciente se queja de ruido, fatiga auditiva y dificultad en conversaciones grupales. Puede pedir al Experto IA una guía de comprobaciones, posibles ajustes, preguntas adicionales y una explicación sencilla para el paciente antes de decidir la intervención.',
    tableRows: [
      ['Duda técnica', 'Software, conectividad, accesorios, ajustes o equipos.'],
      ['Duda audiológica', 'Pruebas, síntomas, resultados, adaptación o seguimiento.'],
      ['Duda comercial', 'Cómo explicar valor, tecnología o siguiente paso al paciente.'],
      ['IA genérica', 'Puede ayudar, pero no siempre conoce el contexto audiológico.'],
      ['Expertos IA Hear-O', 'Especializados en la realidad del centro auditivo.']
    ],
    sections: [
      {
        id: 'ia-como-apoyo',
        title: 'La IA como segundo apoyo dentro de la consulta',
        paragraphs: [
          'Un audiólogo toma decisiones con conocimiento, experiencia y responsabilidad. La IA no sustituye eso. Su valor está en actuar como apoyo inmediato cuando hace falta ordenar información, revisar opciones o recordar pasos.',
          'En consulta, el tiempo importa. No siempre se puede parar para buscar manuales, llamar a soporte o revisar documentación extensa.',
          'Una IA especializada puede ayudar a pensar mejor y más rápido, siempre dejando la decisión final en manos del profesional.'
        ]
      },
      {
        id: 'dudas-tecnicas',
        title: 'Dudas técnicas: adaptación, equipos y software',
        paragraphs: [
          'Los centros auditivos trabajan con software de adaptación, audífonos de distintas marcas, accesorios, conectividad, equipos de medición y procedimientos que cambian con frecuencia.',
          'Es normal que aparezcan dudas puntuales: qué comprobar antes de repetir una medición, cómo explicar una función, qué revisar si una conexión falla o qué paso seguir en un ajuste concreto.',
          'La IA puede ordenar esas dudas en una respuesta práctica: primero comprobaciones, después posibles causas y finalmente siguiente paso recomendado.'
        ],
        bullets: [
          'Comprobaciones básicas antes de escalar una incidencia.',
          'Resumen de instrucciones técnicas complejas.',
          'Ayuda para preparar una llamada al soporte oficial.',
          'Explicaciones más claras para el paciente.'
        ]
      },
      {
        id: 'dudas-audiologicas',
        title: 'Dudas audiológicas: pruebas, resultados y criterio práctico',
        paragraphs: [
          'También hay dudas que no son puramente técnicas. Pueden estar relacionadas con una prueba, una queja del paciente, una evolución inesperada o una dificultad para traducir resultados a una recomendación.',
          'En esos casos, un Experto IA puede ayudar a estructurar el razonamiento: qué datos faltan, qué preguntas conviene hacer, qué hipótesis revisar y cómo explicarlo con prudencia.',
          'Esto es especialmente útil para equipos con diferentes niveles de experiencia, porque ayuda a mantener un criterio más homogéneo dentro del centro.'
        ]
      },
      {
        id: 'explicar-al-paciente',
        title: 'Explicar mejor al paciente lo que está ocurriendo',
        paragraphs: [
          'Muchas veces el problema no es solo resolver la duda, sino explicarla bien. El paciente necesita entender qué ocurre, por qué se hacen ciertos ajustes y qué puede esperar.',
          'La IA puede ayudar a convertir una explicación técnica en lenguaje claro: menos jerga, más ejemplos cotidianos y más conexión con la vida diaria.',
          'Eso mejora la confianza del paciente y reduce la sensación de que la adaptación es un proceso confuso.'
        ]
      },
      {
        id: 'equipo-mas-autonomo',
        title: 'Un equipo más autónomo y menos dependiente de una sola persona',
        paragraphs: [
          'En muchos centros, ciertas dudas siempre acaban en la misma persona: el audioprotesista más experto, el responsable técnico o el fabricante.',
          'Eso crea cuellos de botella. Si esa persona no está disponible, la consulta se retrasa o la decisión se pospone.',
          'Un sistema de Expertos IA ayuda a repartir conocimiento, estandarizar respuestas y dar más seguridad al equipo en situaciones habituales.'
        ]
      },
      {
        id: 'hear-o-expertos-ia',
        title: 'Cómo ayuda Hear-O Expertos IA',
        paragraphs: [
          'Hear-O Expertos IA integra asistentes especializados para dudas técnicas, audiológicas y comerciales del centro auditivo.',
          'No está pensado como un chat genérico, sino como una herramienta de trabajo para consulta: respuestas rápidas, enfoque práctico, fuentes seguras y orientación al caso real.',
          'El resultado es menos dependencia, más seguridad y una consulta más fluida cuando aparece una duda en medio del proceso.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'La IA no decide por el audiólogo. Le ayuda a pensar, comprobar y explicar mejor cuando el tiempo de consulta importa.',
      items: ['Técnica', 'Audiología', 'Paciente', 'Equipo']
    },
    faqs: [
      ['¿Puede una IA resolver dudas clínicas?', 'Puede ayudar a ordenar información y sugerir comprobaciones, pero la decisión profesional siempre corresponde al audiólogo.'],
      ['¿Es lo mismo una IA genérica que un Experto IA?', 'No. Un Experto IA debe estar especializado en audiología, fuentes seguras y casos reales de centro auditivo.'],
      ['¿Sirve para equipos con poca experiencia?', 'Sí, puede ayudar a dar estructura, seguridad y criterios de comprobación en situaciones frecuentes.'],
      ['¿Qué aporta Hear-O?', 'Hear-O Expertos IA aporta asistentes especializados para soporte técnico, dudas audiológicas, adaptación y argumentación al paciente.']
    ]
  },
  {
    slug: 'reducir-dependencia-soporte-fabricantes-centro-auditivo',
    category: 'IA para audiólogos',
    title: 'Cómo reducir la dependencia del soporte de fabricantes en un centro auditivo',
    description: 'Por qué depender siempre del soporte técnico de fabricantes puede frenar la consulta y cómo los Expertos IA ayudan a ganar autonomía en el centro auditivo.',
    keyword: 'soporte fabricantes audífonos',
    answer: 'Un centro auditivo puede reducir su dependencia del soporte de fabricantes si crea una primera capa interna de resolución: documentación, procedimientos, conocimiento compartido y Expertos IA capaces de responder dudas frecuentes al instante.',
    modulePath: '/expertos-ia-audiologia',
    moduleLabel: 'Ver Expertos IA',
    tips: [
      'Crear una lista de las dudas técnicas más repetidas del centro.',
      'Documentar pasos internos para incidencias frecuentes.',
      'Usar IA especializada como primera consulta antes de llamar al fabricante.',
      'Escalar al fabricante solo cuando sea necesario por garantía, reparación o instrucción oficial.',
      'Formar al equipo con las respuestas y casos que más se repiten.'
    ],
    example: 'Un centro que llama varias veces por semana a fabricantes para dudas repetidas puede empezar creando una primera capa de resolución: preguntas frecuentes internas, documentación ordenada y Expertos IA. Así el equipo resuelve más casos sin esperar y solo escala los casos que realmente lo requieren.',
    tableRows: [
      ['Dependencia alta', 'Cada duda termina en llamada, espera o interrupción de consulta.'],
      ['Dependencia saludable', 'El centro resuelve dudas frecuentes y escala solo lo necesario.'],
      ['Conocimiento interno', 'Procedimientos, casos frecuentes y aprendizaje compartido.'],
      ['Expertos IA', 'Respuesta inmediata basada en documentación y fuentes seguras.'],
      ['Resultado', 'Más autonomía, menos interrupciones y mejor control del proceso.']
    ],
    sections: [
      {
        id: 'dependencia-fabricante',
        title: 'Depender del fabricante para todo frena el día a día',
        paragraphs: [
          'Los fabricantes son una pieza importante del sector. Sus equipos técnicos, guías y documentación son necesarios, especialmente para incidencias concretas, garantías o dudas muy específicas.',
          'Pero depender de ellos para cualquier duda cotidiana puede hacer que el centro pierda autonomía.',
          'Si cada problema implica llamar, esperar y explicar desde cero, el equipo acaba trabajando al ritmo de la disponibilidad externa, no al ritmo de la consulta.'
        ]
      },
      {
        id: 'coste-oculto',
        title: 'El coste oculto de llamar siempre al soporte',
        paragraphs: [
          'Cada llamada no solo consume minutos. También corta la concentración, rompe la experiencia del paciente, retrasa la agenda y puede generar inseguridad en el equipo.',
          'Cuando el paciente está delante, una espera técnica se convierte en una espera comercial y emocional. La confianza puede enfriarse.',
          'Por eso la autonomía técnica no es solo una mejora interna. También afecta a la percepción profesional del centro.'
        ],
        bullets: [
          'Menos interrupciones durante pruebas y adaptaciones.',
          'Menos tiempo perdido en llamadas repetidas.',
          'Más seguridad del profesional delante del paciente.',
          'Más capacidad para resolver dudas sin posponer decisiones.'
        ]
      },
      {
        id: 'primera-capa-resolucion',
        title: 'Crear una primera capa de resolución interna',
        paragraphs: [
          'Reducir dependencia no significa dejar de usar soporte oficial. Significa crear una primera capa de resolución antes de llamar.',
          'Esa capa puede incluir documentación ordenada, preguntas frecuentes internas, procedimientos sencillos y un sistema de IA que ayude a encontrar respuestas fiables rápidamente.',
          'Con este enfoque, el centro llama menos, llama mejor y resuelve más situaciones por sí mismo.'
        ]
      },
      {
        id: 'que-no-debe-hacer-ia',
        title: 'Qué no debe hacer la IA',
        paragraphs: [
          'Una IA no debe inventar instrucciones, sustituir garantías, diagnosticar sin criterio profesional ni dar por segura una información dudosa.',
          'Tampoco debe reemplazar al fabricante cuando hay una incidencia oficial, una reparación, un fallo de producto o una actualización crítica.',
          'Su papel correcto es ayudar a entender, ordenar, comprobar y preparar el siguiente paso.'
        ]
      },
      {
        id: 'beneficio-equipo',
        title: 'Más autonomía para todo el equipo',
        paragraphs: [
          'Cuando el conocimiento se concentra en una persona o en el soporte externo, el centro se vuelve más lento.',
          'Con una base de conocimiento y Expertos IA, el equipo puede resolver dudas frecuentes con más seguridad, incluso cuando la persona más experta no está disponible.',
          'Esto ayuda a estandarizar respuestas, mejorar la formación interna y dar una experiencia más consistente al paciente.'
        ]
      },
      {
        id: 'hear-o-expertos-ia',
        title: 'Cómo ayuda Hear-O Expertos IA',
        paragraphs: [
          'Hear-O Expertos IA permite al centro contar con un apoyo inmediato para dudas técnicas, audiológicas y de adaptación.',
          'Trabaja con conocimiento especializado, priorizando documentación segura y fuentes de fabricantes, para que la respuesta sea útil y prudente.',
          'Así el centro gana independencia operativa: resuelve más dudas en el momento, reduce llamadas innecesarias y mantiene la consulta en marcha.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'No se trata de dejar de hablar con fabricantes. Se trata de no depender de ellos para cada duda cotidiana.',
      items: ['Autonomía', 'Rapidez', 'Criterio', 'Escalado']
    },
    faqs: [
      ['¿Reducir dependencia significa no usar soporte oficial?', 'No. Significa usarlo mejor: para incidencias que realmente lo requieren, no para cada duda repetida.'],
      ['¿Qué dudas puede resolver primero el centro?', 'Dudas frecuentes de adaptación, pasos de comprobación, interpretación de documentación, conectividad o explicación técnica al paciente.'],
      ['¿La IA puede trabajar con documentación de fabricantes?', 'Sí, cuando se configura con bases de conocimiento y fuentes seguras adecuadas.'],
      ['¿Qué aporta Hear-O?', 'Hear-O Expertos IA funciona como primera capa de consulta para que el centro gane autonomía técnica y audiológica sin perder prudencia profesional.']
    ]
  },
  {
    slug: 'herramientas-recursos-utiles-centros-auditivos',
    category: 'Recursos útiles',
    title: 'Herramientas y recursos útiles para centros auditivos',
    description: 'Colección práctica de herramientas sencillas para centros auditivos: bancos de imágenes, diseño, email marketing, vídeo, IA, textos y recursos visuales.',
    keyword: 'herramientas para centros auditivos',
    answer: 'Un centro auditivo puede apoyarse en herramientas sencillas para crear imágenes, emails, vídeos, publicaciones, textos e ideas de marketing, siempre que las use con criterio y no acabe dispersando datos y tareas en demasiadas plataformas.',
    modulePath: '/marketing-automatico-centros-auditivos',
    moduleLabel: 'Ver Marketing Studio',
    tips: [
      'Elegir herramientas fáciles, que el equipo pueda usar sin formación técnica.',
      'Revisar siempre licencias, derechos de imagen y condiciones de uso.',
      'Mantener una imagen de marca coherente: colores, logos, tono y mensajes.',
      'No dispersar leads y datos de pacientes en herramientas que no estén controladas.',
      'Usar Hear-O Marketing Studio cuando se quiera centralizar campañas, promociones y seguimiento.'
    ],
    example: 'Un centro puede usar Canva para diseñar una publicación, Unsplash para buscar una imagen, ChatGPT para redactar un primer borrador y Brevo para enviar un email. El problema aparece cuando cada acción queda desconectada de la base de datos y nadie hace seguimiento.',
    tableRows: [
      ['Imagen y diseño', 'Canva, Freepik, Unsplash, Pixabay o Pexels ayudan a crear materiales visuales.'],
      ['Email marketing', 'Brevo y MailerLite permiten enviar newsletters y campañas sencillas.'],
      ['Vídeo y redes', 'Canva y CapCut ayudan a crear piezas rápidas para redes sociales.'],
      ['IA y textos', 'ChatGPT, Claude y Gemini ayudan a generar ideas, textos e informes revisables.'],
      ['Hear-O Marketing Studio', 'Centraliza campañas, promociones, lead magnets y seguimiento para centros auditivos.']
    ],
    sections: [
      {
        id: 'como-usarlas',
        title: 'Cómo usar herramientas sin complicar el día a día',
        paragraphs: [
          'El objetivo de esta guía no es que un centro auditivo use veinte herramientas. Es justo lo contrario: conocer recursos sencillos para resolver tareas concretas sin perder tiempo.',
          'Una herramienta puede ayudar a crear una imagen, redactar un email o preparar una campaña, pero no debe convertirse en otro problema de gestión.',
          'La regla práctica es sencilla: si una herramienta ahorra tiempo, mejora la calidad o ayuda a captar pacientes, puede tener sentido. Si obliga al equipo a duplicar trabajo, copiar datos o depender de alguien externo para todo, conviene revisarlo.'
        ]
      },
      {
        id: 'criterios',
        title: 'Criterios para elegir bien',
        paragraphs: [
          'Para un centro auditivo, lo más importante es que las herramientas sean fáciles, seguras y útiles para acciones reales: captar, informar, fidelizar, recuperar pacientes o mejorar la imagen del centro.',
          'También conviene revisar que el contenido generado sea profesional y que no suene genérico. En salud auditiva, la confianza importa mucho.',
          'Por eso, cualquier texto, imagen o campaña debe revisarse antes de publicarse. La IA ayuda, pero el criterio final debe ser del centro.'
        ],
        bullets: [
          'Que sea sencilla para el equipo.',
          'Que tenga enlaces, permisos y condiciones claras.',
          'Que ayude a una tarea concreta, no a “probar por probar”.',
          'Que permita mantener una imagen profesional.',
          'Que no disperse datos sensibles de pacientes o leads.'
        ]
      },
      {
        id: 'marketing-studio',
        title: 'Dónde encaja Hear-O Marketing Studio',
        paragraphs: [
          'Todas estas herramientas pueden ayudar, pero tienen una limitación: normalmente trabajan separadas.',
          'El centro puede diseñar en Canva, escribir en ChatGPT, enviar con Brevo y buscar imágenes en Unsplash. Pero si después no hay estrategia, seguimiento ni conexión con la base de datos, el impacto se reduce.',
          'Hear-O Marketing Studio busca cubrir esa parte: campañas, promociones, publicaciones, lead magnets y seguimiento pensados para centros auditivos, dentro de una lógica más ordenada.'
        ]
      }
    ],
    visualBreak: {
      title: 'Idea clave',
      text: 'Las herramientas ayudan, pero el resultado aparece cuando se usan con método: buen contenido, buena imagen, datos controlados y seguimiento real.',
      items: ['Imagen', 'Textos', 'Campañas', 'Seguimiento']
    },
    toolCards: [
      {
        name: 'Unsplash',
        category: 'Banco de imágenes',
        use: 'Fotos',
        description: 'Fotos de calidad para publicaciones, blogs o recursos visuales. Útil cuando el centro necesita una imagen limpia y profesional.',
        url: 'https://unsplash.com/'
      },
      {
        name: 'Pixabay',
        category: 'Banco de imágenes',
        use: 'Fotos y vídeos',
        description: 'Biblioteca sencilla de fotos, vídeos, ilustraciones y recursos visuales para piezas rápidas de comunicación.',
        url: 'https://pixabay.com/'
      },
      {
        name: 'Pexels',
        category: 'Banco de imágenes',
        use: 'Fotos y vídeos',
        description: 'Recurso útil para encontrar fotos y vídeos sencillos para redes, artículos o campañas del centro.',
        url: 'https://www.pexels.com/'
      },
      {
        name: 'Freepik',
        category: 'Contenido visual',
        use: 'Vectores y recursos',
        description: 'Muy útil para creatividades, iconos, plantillas, fondos y recursos gráficos. Conviene revisar siempre condiciones y atribución.',
        url: 'https://www.freepik.com/'
      },
      {
        name: 'Canva',
        category: 'Diseño',
        use: 'Imágenes y vídeo',
        description: 'Herramienta sencilla para carteles, publicaciones, presentaciones, vídeos cortos y creatividades del centro.',
        url: 'https://www.canva.com/'
      },
      {
        name: 'Microsoft Designer',
        category: 'Diseño con IA',
        use: 'Creatividades',
        description: 'Permite crear diseños e imágenes con ayuda de IA. Puede servir para ideas rápidas de campañas y publicaciones.',
        url: 'https://designer.microsoft.com/'
      },
      {
        name: 'CapCut',
        category: 'Vídeo',
        use: 'Redes sociales',
        description: 'Editor de vídeo sencillo para reels, vídeos cortos, subtítulos y piezas rápidas para Instagram, TikTok o Facebook.',
        url: 'https://www.capcut.com/'
      },
      {
        name: 'Brevo',
        category: 'Email marketing',
        use: 'Campañas',
        description: 'Plataforma para enviar emails, newsletters y automatizaciones básicas. Útil para campañas a leads o pacientes.',
        url: 'https://www.brevo.com/'
      },
      {
        name: 'MailerLite',
        category: 'Email marketing',
        use: 'Newsletters',
        description: 'Alternativa sencilla para newsletters, formularios y comunicaciones periódicas con una base de contactos.',
        url: 'https://www.mailerlite.com/'
      },
      {
        name: 'ChatGPT',
        category: 'IA',
        use: 'Textos e ideas',
        description: 'Útil para borradores de campañas, posts, emails, informes explicativos e ideas de contenido siempre revisadas por el equipo.',
        url: 'https://chatgpt.com/'
      },
      {
        name: 'Claude',
        category: 'IA',
        use: 'Textos largos',
        description: 'Puede ayudar a ordenar documentos, redactar textos largos, mejorar explicaciones y preparar borradores de contenido.',
        url: 'https://claude.ai/'
      },
      {
        name: 'Gemini',
        category: 'IA',
        use: 'Imágenes e ideas',
        description: 'Recurso útil para ideas, textos, apoyo visual y generación de imágenes según las funciones disponibles en cada momento.',
        url: 'https://gemini.google.com/'
      }
    ],
    faqs: [
      ['¿Hace falta usar muchas herramientas?', 'No. Conviene usar pocas, sencillas y con una función clara. Demasiadas herramientas pueden generar desorden.'],
      ['¿Puede un centro auditivo usar IA para marketing?', 'Sí, pero siempre revisando los textos, el tono, la precisión y la adecuación al sector sanitario.'],
      ['¿Qué herramientas son más útiles para empezar?', 'Canva para diseño, una herramienta de email como Brevo o MailerLite y una IA como ChatGPT o Claude para borradores.'],
      ['¿Qué aporta Hear-O frente a usar herramientas sueltas?', 'Hear-O Marketing Studio busca unir campañas, promociones, lead magnets y seguimiento en un sistema pensado para centros auditivos.']
    ]
  }
];

export const usefulResources = [
  ['Brevo', 'Email marketing', 'Envíos, newsletters y automatizaciones básicas para comunicarse mejor.'],
  ['Calendly', 'Reservas', 'Reserva de citas sencilla para leads y pacientes.'],
  ['Canva', 'Diseño', 'Creatividades para campañas, carteles y publicaciones del centro.'],
  ['Bancos de imágenes', 'Contenido', 'Unsplash, Pexels o bancos profesionales para evitar imágenes pobres.'],
  ['ChatGPT', 'IA', 'Ideas, borradores y explicaciones siempre revisadas por el equipo.'],
  ['Checklist post-prueba', 'Ventas', 'Resumen interno para informe, seguimiento, objeciones y próxima acción.']
];

export const successCases = [
  ['Centro auditivo independiente', '1 gabinete, agenda manual y poca comunicación con pacientes antiguos.', '+18 citas recuperadas en 60 días', 'Con Marketing Studio y CRM & Calendario se ordenaron revisiones, recordatorios y una campaña de reactivación.'],
  ['Centro con varios gabinetes', 'Equipo comercial desigual y mensajes distintos según quien atendía la consulta.', 'Proceso de venta más estable', 'Anamnesis Assistant ayudó a unificar preguntas, argumentos y explicación visual.'],
  ['Base de datos antigua', 'Miles de contactos sin segmentar y oportunidades dormidas por falta de seguimiento.', 'Reactivación medible por segmentos', 'Hear-O permitió separar perfiles, lanzar mensajes útiles y convertir antiguos pacientes en nuevas revisiones.'],
  ['Venta de gamas altas', 'Buenas pruebas auditivas, pero dificultad para explicar diferencias de valor.', 'Mejor defensa del ticket medio', 'La anamnesis emocional y los informes visuales conectaron tecnología, necesidad real y vida diaria.']
];
