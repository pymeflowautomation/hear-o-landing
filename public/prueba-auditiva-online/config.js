/**
 * CONFIGURACIÓN CENTRALIZADA - LEAD MAGNET AUDIOLÓGICO
 * 
 * INSTRUCCIONES:
 * 1. Copia este archivo y modifica los valores según tu centro auditivo
 * 2. Todos los webhooks y datos de contacto se configuran aquí
 * 3. No es necesario modificar ningún otro archivo
 */

const CONFIG = {
  // ==========================================
  // SUPABASE CONFIGURATION
  // ==========================================
  supabase: {
    url: "https://ddreenadyxpkgahvhmwm.supabase.co",
    anonKey: "sb_publishable_5YTdXBLkfnOuG4I_S7_i4A_8pX00n6Y"
  },

  // ==========================================
  // DATOS DEL CENTRO AUDITIVO
  // ==========================================
  centro: {
    nombre: "Centro Auditivo Demo",
    direccion: "Calle Ejemplo, 123",
    ciudad: "Madrid",
    codigoPostal: "28001",
    telefono: "+34 900 000 000",
    email: "info@centroaudiodemo.es",
    urlWeb: "https://www.centroaudiodemo.es",
    horario: "Lunes a Viernes: 9:00 - 20:00",
    logo: "./assets/logo-centro.png", // Ruta al logo o URL
    colorPrimario: "#2563eb", // Azul principal
    colorSecundario: "#1e40af", // Azul oscuro
    colorAcento: "#10b981", // Verde éxito
  },

  // ==========================================
  // CONFIGURACIÓN DEL TEST AUDITIVO
  // ==========================================
  test: {
    // Frecuencias para screening (Hz)
    frecuencias: [500, 1000, 2000, 4000],

    // Intensidad de los pitidos en dB (recomendado: 40-60)
    intensidadPitidos: 50,

    // Duración de cada pitido en ms
    duracionPitido: 1000,

    // Pares de palabras ambiguas para el test
    // Formato: [palabraCorrecta, palabraAlternativa, categoria]
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
    // NOTA: Deben coincidir con los archivos en assets/audios/sim_*.mp3
    frasesSimulacion: {
      telefono: "El paquete llegará mañana por la mañana",
      cafeteria: "¿Me pones un café con leche y una tostada?",
      aire: "Nos vemos a las cinco en la plaza mayor"
    },

    // Umbral de acierto para considerar resultado normal (%)
    umbralNormal: 70,

    // Umbral de acierto para considerar resultado preocupante (%)
    umbralPreocupante: 40,
  },

  // ==========================================
  // INTEGRACIÓN CON TALLY FORMS (AUTO-TEST)
  // ==========================================
  tally: {
    // URL del formulario de Tally para embeber
    // Ejemplo: "https://tally.so/embed/wQJ0X7"
    urlIframe: "https://tally.so/embed/J9RDDY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",

    // Altura del iframe en píxeles
    alturaIframe: 800,
  },

  // ==========================================
  // WEBHOOKS PARA MAKE (INTEGROMAT)
  // ==========================================
  webhooks: {
    // Webhook principal para enviar resultados del test
    // Ejemplo: "https://hook.make.com/XXXXXXXXXXXXXXXX"
    resultadoTest: "https://hook.make.com/YOUR_WEBHOOK_URL",

    // Webhook para notificación de nuevo lead (opcional)
    nuevoLead: "",

    // Webhook para seguimiento (opcional)
    seguimiento: "",
  },

  // ==========================================
  // CONFIGURACIÓN DE EMAIL (PARA REFERENCIA)
  // ==========================================
  email: {
    // El sistema externo (Make) se encarga del envío
    // Estos datos se incluyen en el JSON del webhook
    asuntoResultado: "Resultados de tu test auditivo online",
    remitenteNombre: "Centro Auditivo Demo",
    remitenteEmail: "noreply@centroaudiodemo.es",
  },

  // ==========================================
  // TEXTOS PERSONALIZABLES
  // ==========================================
  textos: {
    // Hero section
    heroTitulo: "¿Escuchas bien o crees que escuchas bien?",
    heroSubtitulo: "Realiza nuestra prueba auditiva gratuita en 5 minutos y descubre tu estado auditivo",
    heroCTA: "Hacer test gratuito",
    heroCTASecundario: "Auto-test rápido",

    // Sección de opciones
    opcionTestOnline: "Test Auditivo Online",
    opcionTestOnlineDesc: "Prueba completa con sonidos y simulaciones",
    opcionAutoTest: "Auto-Test Rápido",
    opcionAutoTestDesc: "Cuestionario de 4 preguntas",

    // Test de pitidos
    pitidosTitulo: "Test de Pitidos",
    pitidosInstrucciones: "Ponte auriculares si los tienes. Indica si escuchas cada sonido.",
    pitidosOidoDerecho: "Oído derecho",
    pitidosOidoIzquierdo: "Oído izquierdo",

    // Simulaciones
    simulacionTitulo: "Simulaciones de situaciones reales",
    simulacionInstrucciones: "Escucha atentamente e indica qué has oído",

    // Palabras ambiguas
    palabrasTitulo: "Discriminación de sonidos",
    palabrasInstrucciones: "Escucha y selecciona la palabra que crees haber oído",

    // Formulario final
    formularioTitulo: "Resultados de tu test",
    formularioNombre: "Nombre completo",
    formularioEmail: "Correo electrónico",
    formularioCP: "Código postal",
    formularioTelefono: "Teléfono (opcional)",
    formularioPrivacidad: "Acepto la política de privacidad y el tratamiento de mis datos",
    formularioCTA: "Ver mi resultado",

    // Resultados
    resultadoNormal: "Tu audición parece estar en buen estado",
    resultadoNormalDesc: "Aunque el test online es orientativo, tus resultados indican una audición normal. Recuerda hacerte revisiones periódicas.",
    resultadoModerado: "Detectamos posibles dificultades auditivas",
    resultadoModeradoDesc: "Tus resultados sugieren que podrías beneficiarte de una evaluación profesional. Te contactaremos para una revisión gratuita.",
    resultadoPreocupante: "Recomendamos una revisión profesional",
    resultadoPreocupanteDesc: "El test indica dificultades significativas en tu audición. Es importante que un audiólogo te evalúe lo antes posible.",
    resultadoCTA: "Pedir cita gratuita",

    // Footer
    footerDisclaimer: "Este test es orientativo y no sustituye una evaluación profesional. Consulta siempre con un audiólogo titulado.",
  },

  // ==========================================
  // CONFIGURACIÓN TÉCNICA
  // ==========================================
  tecnico: {
    // Tiempo de espera entre sonidos (ms)
    delayEntreSonidos: 1500,

    // Intentos máximos por frecuencia
    maxIntentos: 3,

    // Guardar resultados en localStorage
    guardarLocal: true,

    // Mostrar debug en consola
    debug: false,
  }
};

// Exportar para uso en módulos (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}