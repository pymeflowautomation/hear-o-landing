/**
 * CONFIGURACIÓN DE EJEMPLO - CENTRO AUDITIVO REAL
 * 
 * Este es un ejemplo de configuración para un centro auditivo real.
 * Copia este contenido a config.js y adapta los valores.
 */

const CONFIG = {
  // ==========================================
  // DATOS DEL CENTRO AUDITIVO
  // ==========================================
  centro: {
    nombre: "AudioSalud Madrid",
    direccion: "Calle de Alcalá, 456",
    ciudad: "Madrid",
    codigoPostal: "28027",
    telefono: "+34 917 123 456",
    email: "info@audiosaludmadrid.es",
    urlWeb: "https://www.audiosaludmadrid.es",
    horario: "Lunes a Viernes: 9:00 - 20:00 | Sábados: 10:00 - 14:00",
    logo: "https://www.audiosaludmadrid.es/logo.png",
    colorPrimario: "#0066cc",
    colorSecundario: "#004499",
    colorAcento: "#00aa66",
  },

  // ==========================================
  // CONFIGURACIÓN DEL TEST AUDITIVO
  // ==========================================
  test: {
    // Frecuencias para screening (Hz) - NO MODIFICAR
    frecuencias: [500, 1000, 2000, 4000],
    
    // Intensidad de los pitidos en dB (40-60 recomendado)
    intensidadPitidos: 50,
    
    // Duración de cada pitido en ms
    duracionPitido: 1000,
    
    // Pares de palabras ambiguas para el test
    palabrasAmbiguas: [
      { correcta: "casa", alternativa: "caza", categoria: "sordo/sonoro" },
      { correcta: "rana", alternativa: "rama", categoria: "nasal/no-nasal" },
      { correcta: "taza", alternativa: "maza", categoria: "oclusiva/nasal" },
      { correcta: "pino", alternativa: "vino", categoria: "oclusiva/fricativa" },
      { correcta: "bala", alternativa: "pala", categoria: "sonoro/sordo" },
      { correcta: "coral", alternativa: "corral", categoria: "lateral/vibrante" },
      { correcta: "goma", alternativa: "coma", categoria: "oclusiva/nasal" },
      { correcta: "fresa", alternativa: "presa", categoria: "fricativa/oclusiva" },
    ],
    
    // Frases para simulaciones (el usuario debe repetir lo que oye)
    frasesSimulacion: {
      telefono: "El paquete llegará mañana por la mañana",
      cafeteria: "¿Me pones un café con leche y una tostada?",
      aireLibre: "Nos vemos a las cinco en la plaza mayor"
    },
    
    // Umbrales de evaluación
    umbralNormal: 70,
    umbralPreocupante: 40,
  },

  // ==========================================
  // INTEGRACIÓN CON TALLY FORMS (AUTO-TEST)
  // ==========================================
  tally: {
    // Crea tu formulario en https://tally.so
    // Ve a Share → Embed → Iframe y copia la URL
    urlIframe: "https://tally.so/embed/wQJ0X7",
    alturaIframe: 800,
  },

  // ==========================================
  // WEBHOOKS PARA MAKE (INTEGROMAT)
  // ==========================================
  webhooks: {
    // Crea un webhook en Make.com:
    // 1. Nuevo escenario → Webhook → Custom webhook
    // 2. Copia la URL y pégala aquí
    resultadoTest: "https://hook.make.com/abc123def456",
    
    // Webhooks adicionales (opcionales)
    nuevoLead: "",
    seguimiento: "",
  },

  // ==========================================
  // CONFIGURACIÓN DE EMAIL
  // ==========================================
  email: {
    asuntoResultado: "Resultados de tu test auditivo - AudioSalud Madrid",
    remitenteNombre: "AudioSalud Madrid",
    remitenteEmail: "noreply@audiosaludmadrid.es",
  },

  // ==========================================
  // TEXTOS PERSONALIZABLES
  // ==========================================
  textos: {
    // Hero section
    heroTitulo: "¿Escuchas bien o crees que escuchas bien?",
    heroSubtitulo: "Realiza nuestra prueba auditiva gratuita en 5 minutos y descubre si necesitas una revisión profesional",
    heroCTA: "Hacer test gratuito",
    heroCTASecundario: "Auto-test rápido",
    
    // Opciones
    opcionTestOnline: "Test Auditivo Online",
    opcionTestOnlineDesc: "Prueba completa con sonidos y simulaciones de situaciones reales",
    opcionAutoTest: "Auto-Test Rápido",
    opcionAutoTestDesc: "Cuestionario de 4 preguntas sobre tu audición diaria",
    
    // Pitidos
    pitidosTitulo: "Test de Pitidos",
    pitidosInstrucciones: "Ponte auriculares si los tienes disponibles. Escucharás una serie de pitidos a diferentes frecuencias. Indica si escuchas cada sonido en cada oído.",
    pitidosOidoDerecho: "Oído derecho",
    pitidosOidoIzquierdo: "Oído izquierdo",
    
    // Simulaciones
    simulacionTitulo: "Simulaciones de situaciones reales",
    simulacionInstrucciones: "Escucharás tres situaciones cotidianas. En cada una, intenta entender lo que se dice. Después te preguntaremos sobre el contenido.",
    
    // Palabras
    palabrasTitulo: "Discriminación de sonidos",
    palabrasInstrucciones: "Escucha y selecciona la palabra que crees haber oído. Esta prueba evalúa tu capacidad para distinguir fonemas similares.",
    
    // Formulario
    formularioTitulo: "Resultados de tu test",
    formularioNombre: "Nombre completo",
    formularioEmail: "Correo electrónico",
    formularioCP: "Código postal",
    formularioTelefono: "Teléfono (opcional)",
    formularioPrivacidad: "Acepto la política de privacidad y el tratamiento de mis datos para recibir el resultado y ser contactado por el centro",
    formularioCTA: "Ver mi resultado",
    
    // Resultados - Nivel Normal
    resultadoNormal: "¡Buenas noticias! Tu audición parece estar en buen estado",
    resultadoNormalDesc: "Basado en tus respuestas, tu capacidad auditiva se encuentra dentro de parámetros normales. Recibirás un informe detallado en tu correo con recomendaciones.",
    
    // Resultados - Nivel Moderado
    resultadoModerado: "Detectamos posibles dificultades auditivas",
    resultadoModeradoDesc: "Tus resultados sugieren que podrías beneficiarte de una evaluación profesional. Muchas personas no son conscientes de su pérdida auditiva gradual. Te contactaremos para ofrecerte una revisión gratuita.",
    
    // Resultados - Nivel Preocupante
    resultadoPreocupante: "Recomendamos una revisión profesional",
    resultadoPreocupanteDesc: "El test indica dificultades significativas en tu audición. No te alarmes, pero es importante que un audiólogo titulado te evalúe lo antes posible. Te contactaremos en menos de 24 horas.",
    
    resultadoCTA: "Pedir cita gratuita",
    
    // Footer
    footerDisclaimer: "Este test es orientativo y no sustituye una evaluación profesional realizada por un audiólogo titulado en condiciones controladas.",
  },

  // ==========================================
  // CONFIGURACIÓN TÉCNICA
  // ==========================================
  tecnico: {
    delayEntreSonidos: 1500,
    maxIntentos: 3,
    guardarLocal: true,
    debug: false,
  }
};

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}