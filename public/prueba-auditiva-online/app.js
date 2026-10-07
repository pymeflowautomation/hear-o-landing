/**
 * LEAD MAGNET AUDIOLÓGICO - APP.JS
 * 
 * Aplicación completa para test auditivo online
 * Incluye: Web Audio API, Speech Synthesis, gestión de test, webhooks
 */

// ==========================================
// ESTADO GLOBAL
// ==========================================
let supabaseCliente = null;

const AppState = {
  currentStep: 1,
  results: {
    pitidos: {
      derecho: {},
      izquierdo: {}
    },
    simulaciones: {},
    palabras: {}
  },
  datosUsuario: null,
  audioContext: null,
  synth: window.speechSynthesis
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Inicializar AudioContext
  initAudioContext();
  
  // Cargar configuración personalizada
  loadConfiguration();
  
  // Inicializar event listeners
  initEventListeners();
  
  // Generar palabras ambiguas dinámicamente
  generatePalabrasAmbiguas();
  
  // Cargar Tally Forms si está configurado
  loadTallyForm();
  
  // Inicializar Supabase si está disponible
  if (CONFIG.supabase && CONFIG.supabase.url && window.supabase) {
    supabaseCliente = window.supabase.createClient(CONFIG.supabase.url, CONFIG.supabase.anonKey);
  }
  
  // Debug
  if (CONFIG.tecnico?.debug) {
    console.log('🎧 Lead Magnet Auditivo - Inicializado');
    console.log('Configuración:', CONFIG);
  }
}

// ==========================================
// AUDIO CONTEXT (Web Audio API)
// ==========================================
function initAudioContext() {
  try {
    AppState.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.error('Web Audio API no soportada:', e);
    showNotification('Tu navegador no soporta audio. Usa Chrome, Firefox o Safari.', 'error');
  }
}

function playTone(frequency, duration = 1000, oido = 'derecho') {
  if (!AppState.audioContext) {
    initAudioContext();
  }
  
  const ctx = AppState.audioContext;
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const panner = ctx.createStereoPanner();
  
  // Configurar oscilador (onda sinusoidal pura)
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
  
  // Configurar paneo (oído derecho o izquierdo)
  const panValue = oido === 'derecho' ? 1 : -1;
  panner.pan.setValueAtTime(panValue, ctx.currentTime);
  
  // Configurar volumen (fade in/out suave)
  const volume = (CONFIG.test?.intensidadPitidos || 50) / 100 * 0.5;
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.1);
  gainNode.gain.setValueAtTime(volume, ctx.currentTime + duration / 1000 - 0.1);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration / 1000);
  
  // Conectar nodos
  oscillator.connect(gainNode);
  gainNode.connect(panner);
  panner.connect(ctx.destination);
  
  // Reproducir
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration / 1000);
  
  return oscillator;
}

// ==========================================
// SPEECH SYNTHESIS
// ==========================================
function speakText(text, rate = 0.9, pitch = 1) {
  return new Promise((resolve) => {
    if (!AppState.synth) {
      console.error('Speech Synthesis no disponible');
      resolve();
      return;
    }
    
    // Cancelar cualquier reproducción anterior
    AppState.synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;
    
    // Seleccionar voz española si está disponible
    const voices = AppState.synth.getVoices();
    const spanishVoice = voices.find(v => v.lang.includes('es-ES') || v.lang.includes('es_ES'));
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    
    AppState.synth.speak(utterance);
  });
}

// Cargar voces cuando estén disponibles
if (AppState.synth) {
  AppState.synth.onvoiceschanged = () => {
    AppState.voices = AppState.synth.getVoices();
  };
}

// ==========================================
// CONFIGURACIÓN
// ==========================================
function loadConfiguration() {
  // Aplicar colores personalizados
  if (CONFIG.centro?.colorPrimario) {
    document.documentElement.style.setProperty('--color-primary', CONFIG.centro.colorPrimario);
  }
  if (CONFIG.centro?.colorSecundario) {
    document.documentElement.style.setProperty('--color-primary-dark', CONFIG.centro.colorSecundario);
  }
  if (CONFIG.centro?.colorAcento) {
    document.documentElement.style.setProperty('--color-accent', CONFIG.centro.colorAcento);
  }
  
  // Aplicar textos personalizados
  applyCustomTexts();
  
  // Aplicar datos de contacto
  applyContactData();
}

function applyCustomTexts() {
  const textos = CONFIG.textos || {};
  
  // Hero
  setText('heroTitulo', textos.heroTitulo);
  setText('heroSubtitulo', textos.heroSubtitulo);
  setText('opcionTestOnline', textos.opcionTestOnline);
  setText('opcionTestOnlineDesc', textos.opcionTestOnlineDesc);
  setText('opcionAutoTest', textos.opcionAutoTest);
  setText('opcionAutoTestDesc', textos.opcionAutoTestDesc);
  
  // Pitidos
  setText('pitidosTitulo', textos.pitidosTitulo);
  setText('pitidosInstrucciones', textos.pitidosInstrucciones);
  setText('pitidosOidoDerecho', textos.pitidosOidoDerecho);
  setText('pitidosOidoIzquierdo', textos.pitidosOidoIzquierdo);
  
  // Simulaciones
  setText('simulacionTitulo', textos.simulacionTitulo);
  setText('simulacionInstrucciones', textos.simulacionInstrucciones);
  
  // Palabras
  setText('palabrasTitulo', textos.palabrasTitulo);
  setText('palabrasInstrucciones', textos.palabrasInstrucciones);
  
  // Formulario
  setText('formularioTitulo', textos.formularioTitulo);
  setText('labelNombre', textos.formularioNombre);
  setText('labelEmail', textos.formularioEmail);
  setText('labelCP', textos.formularioCP);
  setText('labelTelefono', textos.formularioTelefono);
  setText('textoPrivacidad', textos.formularioPrivacidad);
  
  // Resultados
  setText('resultadoTitulo', textos.resultadoNormal);
  setText('resultadoDesc', textos.resultadoNormalDesc);
  setText('resultadoCTA', textos.resultadoCTA);
  
  // Footer
  setText('footerDisclaimer', textos.footerDisclaimer);
}

function setText(id, text) {
  if (text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
}

function applyContactData() {
  const centro = CONFIG.centro || {};
  
  // Logo
  setText('logoText', centro.nombre);
  setText('footerNombre', centro.nombre);
  setText('footerCopyNombre', centro.nombre);
  
  // Contacto
  setText('contactDireccion', `${centro.direccion}, ${centro.ciudad}`);
  
  const telEl = document.getElementById('contactTelefono');
  if (telEl && centro.telefono) {
    telEl.textContent = centro.telefono;
    telEl.href = `tel:${centro.telefono.replace(/\s/g, '')}`;
  }
  
  const emailEl = document.getElementById('contactEmail');
  if (emailEl && centro.email) {
    emailEl.textContent = centro.email;
    emailEl.href = `mailto:${centro.email}`;
  }
  
  setText('contactHorario', centro.horario);
  
  // Header CTA
  const headerCTA = document.getElementById('headerCTA');
  if (headerCTA && centro.telefono) {
    headerCTA.onclick = () => window.location.href = `tel:${centro.telefono.replace(/\s/g, '')}`;
  }
}

// ==========================================
// PALABRAS AMBIGUAS
// ==========================================
function generatePalabrasAmbiguas() {
  const container = document.getElementById('palabrasContainer');
  if (!container) return;
  
  const palabras = CONFIG.test?.palabrasAmbiguas || [
    { correcta: "casa", alternativa: "caza" },
    { correcta: "rana", alternativa: "rama" },
    { correcta: "taza", alternativa: "maza" },
    { correcta: "pino", alternativa: "vino" }
  ];
  
  // Mezclar aleatoriamente cuáles son las correctas
  const palabrasMezcladas = palabras.map((p, index) => ({
    ...p,
    id: index,
    esCorrecta: Math.random() > 0.5
  }));
  
  container.innerHTML = palabrasMezcladas.map((p, index) => `
    <div class="palabra-item" data-palabra-id="${p.id}">
      <div class="palabra-header">
        <span class="palabra-numero">${index + 1}</span>
        <span class="palabra-title">Escucha y selecciona</span>
      </div>
      <div class="palabra-player">
        <button class="btn-palabra-play" data-palabra="${p.esCorrecta ? p.correcta : p.alternativa}">
          <span>▶ Escuchar palabra</span>
        </button>
      </div>
      <div class="palabra-options">
        <label class="palabra-option">
          <input type="radio" name="palabra-${p.id}" value="${p.correcta}">
          <span>${p.correcta}</span>
        </label>
        <label class="palabra-option">
          <input type="radio" name="palabra-${p.id}" value="${p.alternativa}">
          <span>${p.alternativa}</span>
        </label>
      </div>
    </div>
  `).join('');
  
  // Guardar referencia para validación
  AppState.palabrasData = palabrasMezcladas;
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Botones de play para pitidos
  document.querySelectorAll('.btn-play').forEach(btn => {
    btn.addEventListener('click', handlePitidoPlay);
  });
  
  // Checkboxes de pitidos
  document.querySelectorAll('.check-hearing').forEach(check => {
    check.addEventListener('change', handlePitidoCheck);
  });
  
  // Botones de simulación
  document.querySelectorAll('.btn-sim-play').forEach(btn => {
    btn.addEventListener('click', handleSimulacionPlay);
  });
  
  // Radios de simulaciones
  document.querySelectorAll('input[name^="resp-"]').forEach(radio => {
    radio.addEventListener('change', handleSimulacionRespuesta);
  });
  
  // Botones de palabras (delegación de eventos)
  document.getElementById('palabrasContainer')?.addEventListener('click', handlePalabraClick);
  
  // Radios de palabras (delegación)
  document.getElementById('palabrasContainer')?.addEventListener('change', handlePalabraRespuesta);
  
  // Navegación entre pasos
  document.getElementById('btnContinuarSimulaciones')?.addEventListener('click', () => goToStep(2));
  document.getElementById('btnVolverPitidos')?.addEventListener('click', () => goToStep(1));
  document.getElementById('btnContinuarPalabras')?.addEventListener('click', () => goToStep(3));
  document.getElementById('btnVolverSimulaciones')?.addEventListener('click', () => goToStep(2));
  document.getElementById('btnContinuarResultados')?.addEventListener('click', () => goToStep(4));
  document.getElementById('btnSkipPitidos')?.addEventListener('click', () => goToStep(2));
  
  // Formulario de resultados
  document.getElementById('formResultados')?.addEventListener('submit', handleFormSubmit);
  
  // Botón pedir cita del resultado y confirmación
  document.getElementById('btnPedirCitaResultado')?.addEventListener('click', () => {
    document.getElementById('modalCita').style.display = 'block';
    document.getElementById('btnPedirCitaResultado').style.display = 'none';
  });
  document.getElementById('btnConfirmarCita')?.addEventListener('click', handleConfirmarCita);

  // Botón pedir cita general
  document.getElementById('btnPedirCita')?.addEventListener('click', handlePedirCita);
  
  // Smooth scroll para enlaces
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleSmoothScroll);
  });
}

// ==========================================
// HANDLERS - PITIDOS
// ==========================================
function handlePitidoPlay(e) {
  const btn = e.currentTarget;
  const freq = parseInt(btn.dataset.freq);
  const oido = btn.dataset.oido;
  
  // Visual feedback
  document.querySelectorAll('.btn-play').forEach(b => b.classList.remove('playing'));
  btn.classList.add('playing');
  
  // Reproducir tono
  const duration = CONFIG.test?.duracionPitido || 1000;
  playTone(freq, duration, oido);
  
  // Quitar clase playing después de la reproducción
  setTimeout(() => {
    btn.classList.remove('playing');
  }, duration);
}

function handlePitidoCheck(e) {
  const check = e.target;
  const freq = check.dataset.freq;
  const oido = check.dataset.oido;
  
  // Guardar resultado
  AppState.results.pitidos[oido][freq] = check.checked;
  
  // Verificar si se puede continuar
  checkContinuarPitidos();
}

function checkContinuarPitidos() {
  const checkboxes = document.querySelectorAll('.check-hearing');
  const checked = document.querySelectorAll('.check-hearing:checked');
  
  // Permitir continuar si al menos la mitad están marcados
  const btn = document.getElementById('btnContinuarSimulaciones');
  if (btn) {
    btn.disabled = checked.length < checkboxes.length / 2;
  }
}

// ==========================================
// HANDLERS - SIMULACIONES
// ==========================================
// Mapa de archivos de audio para simulaciones
const SIMULACIONES_AUDIO = {
  telefono: './assets/audios/sim_telefono.mp3',
  cafeteria: './assets/audios/sim_cafeteria.mp3',
  aire: './assets/audios/sim_aire.mp3'
};

// Objeto para mantener referencias a los objetos Audio
AppState.audioPlayers = {};

async function handleSimulacionPlay(e) {
  const btn = e.currentTarget;
  const sim = btn.dataset.sim;
  
  // Evitar múltiples clicks
  if (btn.classList.contains('playing')) return;
  
  btn.classList.add('playing');
  const statusEl = document.getElementById(`status-${sim}`);
  
  if (statusEl) {
    statusEl.textContent = 'Reproduciendo...';
  }
  
  // Reproducir audio desde archivo
  try {
    await reproducirAudioSimulacion(sim);
    
    btn.classList.remove('playing');
    if (statusEl) {
      statusEl.textContent = '✓ Reproducido';
    }
    
    // Mostrar pregunta
    const preguntaEl = document.getElementById(`pregunta-${sim}`);
    if (preguntaEl) {
      preguntaEl.style.display = 'block';
      preguntaEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } catch (error) {
    console.error('Error reproduciendo audio:', error);
    btn.classList.remove('playing');
    if (statusEl) {
      statusEl.textContent = '❌ Error al reproducir';
    }
  }
}

function reproducirAudioSimulacion(tipo) {
  return new Promise((resolve, reject) => {
    // Detener cualquier audio anterior
    if (AppState.audioPlayers[tipo]) {
      AppState.audioPlayers[tipo].pause();
      AppState.audioPlayers[tipo].currentTime = 0;
    }
    
    // Crear nuevo objeto Audio
    const audioSrc = SIMULACIONES_AUDIO[tipo];
    if (!audioSrc) {
      reject(new Error(`Tipo de simulación no encontrado: ${tipo}`));
      return;
    }
    
    const audio = new Audio(audioSrc);
    AppState.audioPlayers[tipo] = audio;
    
    audio.onended = () => resolve();
    audio.onerror = (e) => reject(e);
    
    // Intentar reproducir
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Error al iniciar reproducción:', error);
        reject(error);
      });
    }
  });
}

// Función legacy - mantenida por compatibilidad
async function reproducirSimulacion(tipo, frase) {
  // Ahora usa archivos de audio en lugar de Speech Synthesis
  return reproducirAudioSimulacion(tipo);
}

function handleSimulacionRespuesta(e) {
  const radio = e.target;
  const name = radio.name;
  const sim = name.replace('resp-', '');
  
  // Guardar respuesta
  AppState.results.simulaciones[sim] = radio.value;
  
  // Verificar si se puede continuar
  checkContinuarSimulaciones();
}

function checkContinuarSimulaciones() {
  const respuestas = Object.keys(AppState.results.simulaciones).length;
  const btn = document.getElementById('btnContinuarPalabras');
  if (btn) {
    btn.disabled = respuestas < 3;
  }
}

// ==========================================
// HANDLERS - PALABRAS
// ==========================================
function handlePalabraClick(e) {
  const btn = e.target.closest('.btn-palabra-play');
  if (!btn) return;
  
  if (btn.classList.contains('playing')) return;
  
  btn.classList.add('playing');
  const palabra = btn.dataset.palabra;
  
  // Reproducir palabra
  speakText(palabra, 0.8, 1).then(() => {
    btn.classList.remove('playing');
  });
}

function handlePalabraRespuesta(e) {
  const radio = e.target;
  if (!radio.type === 'radio') return;
  
  // Extraer ID de palabra
  const match = radio.name.match(/palabra-(\d+)/);
  if (!match) return;
  
  const palabraId = parseInt(match[1]);
  AppState.results.palabras[palabraId] = radio.value;
  
  // Verificar si se puede continuar
  checkContinuarPalabras();
}

function checkContinuarPalabras() {
  const totalPalabras = AppState.palabrasData?.length || 4;
  const respuestas = Object.keys(AppState.results.palabras).length;
  
  const btn = document.getElementById('btnContinuarResultados');
  if (btn) {
    btn.disabled = respuestas < totalPalabras;
  }
}

// ==========================================
// NAVEGACIÓN
// ==========================================
function goToStep(step) {
  // Ocultar todos los pasos
  document.querySelectorAll('.test-step').forEach(el => {
    el.classList.remove('active');
  });
  
  // Mostrar paso actual
  const stepIds = ['step-pitidos', 'step-simulaciones', 'step-palabras', 'step-resultados'];
  const stepEl = document.getElementById(stepIds[step - 1]);
  if (stepEl) {
    stepEl.classList.add('active');
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Actualizar progress
  updateProgress(step);
  
  AppState.currentStep = step;
}

function updateProgress(step) {
  document.querySelectorAll('.progress-step').forEach((el, index) => {
    el.classList.remove('active', 'completed');
    if (index + 1 < step) {
      el.classList.add('completed');
    } else if (index + 1 === step) {
      el.classList.add('active');
    }
  });
}

// ==========================================
// FORMULARIO Y WEBHOOK
// ==========================================
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const spinner = btn.querySelector('.btn-spinner');
  
  // Mostrar loading
  btn.disabled = true;
  if (spinner) spinner.style.display = 'inline';
  
  // Recopilar datos
  const datos = {
    nombre: form.nombre.value,
    apellidos: form.apellidos.value,
    email: form.email.value,
    codigoPostal: form.cp.value,
    fecha: new Date().toISOString(),
    resultados: calculateResults(),
    userAgent: navigator.userAgent,
    centro: CONFIG.centro?.nombre || 'Centro Auditivo'
  };
  
  AppState.datosUsuario = datos;
  
  // Guardar en localStorage si está configurado
  if (CONFIG.tecnico?.guardarLocal) {
    localStorage.setItem('testAuditivo_resultado', JSON.stringify(datos));
  }
  
  // Guardar en Supabase - Fase 1
  if (supabaseCliente) {
    try {
      const { data, error } = await supabaseCliente.from('contactos').insert([{
        nombre: datos.nombre,
        apellidos: datos.apellidos,
        email: datos.email,
        codigo_postal: datos.codigoPostal,
        tipo: 'lead',
        estado_lead: null,
        respuestas_lead: datos.resultados
      }]).select();
      
      if (error) throw error;
      if (data && data.length > 0) {
        AppState.contactoId = data[0].id;
      }
    } catch (err) {
      console.error("Error guardando lead en Supabase:", err);
    }
  }

  // Enviar webhook
  try {
    await enviarWebhook(datos);
    showNotification('Resultados enviados correctamente', 'success');
  } catch (error) {
    console.error('Error enviando webhook:', error);
    // Continuar igualmente, no bloquear al usuario
  }
  
  // Mostrar resultado
  mostrarResultado(datos.resultados);
  
  // Ocultar formulario, mostrar resultado
  form.style.display = 'none';
  document.getElementById('resultadoFinal').style.display = 'block';
}

async function handleConfirmarCita() {
  const telefono = document.getElementById('telefonoCita').value;
  if (!telefono) return alert("Por favor, introduce tu teléfono");
  
  const canal = document.querySelector('input[name="canalContacto"]:checked').value;
  const btn = document.getElementById('btnConfirmarCita');
  btn.textContent = "Guardando...";
  btn.disabled = true;

  if (supabaseCliente && AppState.datosUsuario && AppState.datosUsuario.email) {
    try {
      const { error } = await supabaseCliente.from('contactos').update({
        telefono: telefono,
        canal_contacto_preferido: canal,
        estado_lead: 'quiere_cita'
      }).eq('email', AppState.datosUsuario.email);
      
      if (error) console.error("Error detallado de Supabase:", error);
    } catch (error) {
      console.error("Error al actualizar la cita en Supabase:", error);
    }
  }

  document.getElementById('msgCitaExito').style.display = 'block';
  btn.style.display = 'none';
}

function calculateResults() {
  const resultados = {
    pitidos: { total: 0, aciertos: 0, porcentaje: 0 },
    simulaciones: { total: 3, aciertos: 0, porcentaje: 0 },
    palabras: { total: 0, aciertos: 0, porcentaje: 0 },
    global: { porcentaje: 0, nivel: 'normal' }
  };
  
  // Calcular pitidos
  const pitidosDerecho = Object.values(AppState.results.pitidos.derecho).filter(v => v).length;
  const pitidosIzquierdo = Object.values(AppState.results.pitidos.izquierdo).filter(v => v).length;
  const totalPitidosChecks = Object.keys(AppState.results.pitidos.derecho).length + 
                              Object.keys(AppState.results.pitidos.izquierdo).length;
  
  resultados.pitidos.total = (CONFIG.test?.frecuencias?.length || 4) * 2;
  resultados.pitidos.aciertos = pitidosDerecho + pitidosIzquierdo;
  resultados.pitidos.porcentaje = Math.round((resultados.pitidos.aciertos / resultados.pitidos.total) * 100);
  
  // Calcular simulaciones
  const respuestasCorrectas = {
    telefono: 'paquete',
    cafeteria: 'cafe',
    aire: 'plaza'
  };
  
  let simulacionesAcertadas = 0;
  Object.entries(AppState.results.simulaciones).forEach(([sim, respuesta]) => {
    if (respuesta === respuestasCorrectas[sim]) {
      simulacionesAcertadas++;
    }
  });
  
  resultados.simulaciones.aciertos = simulacionesAcertadas;
  resultados.simulaciones.porcentaje = Math.round((simulacionesAcertadas / 3) * 100);
  
  // Calcular palabras
  let palabrasAcertadas = 0;
  const totalPalabras = AppState.palabrasData?.length || 0;
  
  AppState.palabrasData?.forEach(p => {
    const respuestaUsuario = AppState.results.palabras[p.id];
    const palabraEscuchada = p.esCorrecta ? p.correcta : p.alternativa;
    if (respuestaUsuario === palabraEscuchada) {
      palabrasAcertadas++;
    }
  });
  
  resultados.palabras.total = totalPalabras;
  resultados.palabras.aciertos = palabrasAcertadas;
  resultados.palabras.porcentaje = totalPalabras > 0 ? Math.round((palabrasAcertadas / totalPalabras) * 100) : 0;
  
  // Calcular global
  const pesoPitidos = 0.4;
  const pesoSimulaciones = 0.35;
  const pesoPalabras = 0.25;
  
  resultados.global.porcentaje = Math.round(
    resultados.pitidos.porcentaje * pesoPitidos +
    resultados.simulaciones.porcentaje * pesoSimulaciones +
    resultados.palabras.porcentaje * pesoPalabras
  );
  
  // Determinar nivel
  const umbralNormal = CONFIG.test?.umbralNormal || 70;
  const umbralPreocupante = CONFIG.test?.umbralPreocupante || 40;
  
  if (resultados.global.porcentaje >= umbralNormal) {
    resultados.global.nivel = 'normal';
  } else if (resultados.global.porcentaje >= umbralPreocupante) {
    resultados.global.nivel = 'moderado';
  } else {
    resultados.global.nivel = 'preocupante';
  }
  
  return resultados;
}

function mostrarResultado(resultados) {
  // Actualizar estadísticas
  setText('statPitidos', `${resultados.pitidos.porcentaje}%`);
  setText('statSimulaciones', `${resultados.simulaciones.porcentaje}%`);
  setText('statPalabras', `${resultados.palabras.porcentaje}%`);
  
  // Actualizar mensaje según nivel
  const iconos = {
    normal: '✓',
    moderado: '⚠',
    preocupante: '🏥'
  };
  
  const titulos = {
    normal: CONFIG.textos?.resultadoNormal || 'Tu audición parece estar en buen estado',
    moderado: CONFIG.textos?.resultadoModerado || 'Detectamos posibles dificultades auditivas',
    preocupante: CONFIG.textos?.resultadoPreocupante || 'Recomendamos una revisión profesional'
  };
  
  const descripciones = {
    normal: CONFIG.textos?.resultadoNormalDesc || 'Basado en tus respuestas, tu capacidad auditiva se encuentra dentro de parámetros normales.',
    moderado: CONFIG.textos?.resultadoModeradoDesc || 'Tus resultados sugieren que podrías beneficiarte de una evaluación profesional.',
    preocupante: CONFIG.textos?.resultadoPreocupanteDesc || 'El test indica dificultades significativas en tu audición. Es importante que un audiólogo te evalúe.'
  };
  
  const iconoEl = document.getElementById('resultadoIcon');
  if (iconoEl) {
    iconoEl.textContent = iconos[resultados.global.nivel];
    iconoEl.className = `resultado-icon ${resultados.global.nivel === 'moderado' ? 'warning' : resultados.global.nivel === 'preocupante' ? 'danger' : ''}`;
  }
  
  setText('resultadoTitulo', titulos[resultados.global.nivel]);
  setText('resultadoDesc', descripciones[resultados.global.nivel]);
}

async function enviarWebhook(datos) {
  const webhookUrl = CONFIG.webhooks?.resultadoTest;
  
  if (!webhookUrl) {
    console.warn('No hay webhook configurado');
    return;
  }
  
  const payload = {
    evento: 'test_auditivo_completado',
    timestamp: new Date().toISOString(),
    centro: CONFIG.centro?.nombre,
    datosUsuario: {
      nombre: datos.nombre,
      email: datos.email,
      codigoPostal: datos.codigoPostal,
      telefono: datos.telefono
    },
    resultados: datos.resultados,
    metadata: {
      userAgent: datos.userAgent,
      url: window.location.href
    }
  };
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  
  if (!response.ok) {
    throw new Error(`Webhook error: ${response.status}`);
  }
  
  return response;
}

// ==========================================
// TALLY FORMS
// ==========================================
function loadTallyForm() {
  const tallyUrl = CONFIG.tally?.urlIframe;
  const iframe = document.getElementById('tallyIframe');
  const placeholder = document.getElementById('tallyPlaceholder');
  
  if (!tallyUrl || !iframe || !placeholder) return;
  
  // Si hay URL configurada (no es la de ejemplo)
  if (tallyUrl && !tallyUrl.includes('YOUR_FORM_ID')) {
    // Actualizamos tanto el data-tally-src (para el script oficial) como el src (por si acaso)
    iframe.setAttribute('data-tally-src', tallyUrl);
    iframe.src = tallyUrl;
    
    iframe.style.display = 'block';
    placeholder.style.display = 'none';
    
    // Ajustar altura si está configurada
    if (CONFIG.tally?.alturaIframe) {
      iframe.height = CONFIG.tally.alturaIframe;
    }

    // Si el script de Tally ya se cargó, forzamos recarga del embed
    if (typeof Tally !== 'undefined') {
      Tally.loadEmbeds();
    }
  }
}

// ==========================================
// UTILIDADES
// ==========================================
function handleSmoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(e.currentTarget.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handlePedirCita() {
  const telefono = CONFIG.centro?.telefono;
  if (telefono) {
    window.location.href = `tel:${telefono.replace(/\s/g, '')}`;
  } else {
    showNotification('Contacta con nosotros para pedir cita', 'info');
  }
}

function showNotification(message, type = 'info') {
  // Crear notificación toast
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  // Estilos inline para el toast
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Animaciones CSS para toast
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(toastStyles);

// ==========================================
// EXPOSE PARA DEBUG
// ==========================================
window.TestAuditivo = {
  state: AppState,
  config: CONFIG,
  playTone,
  speakText,
  goToStep,
  calculateResults
};