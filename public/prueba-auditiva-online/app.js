/**
 * LEAD MAGNET AUDIOLÓGICO - APP.JS
 * 
 * Aplicación completa para test auditivo online
 * Incluye: Web Audio API, Speech Synthesis y gestión de test
 */

// ==========================================
// ESTADO GLOBAL
// ==========================================
const TEST_SUBMISSION_ID = window.crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(36).slice(2);

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
  
  // La sesión solo permanece en memoria mientras el paciente usa esta página.
  localStorage.removeItem('testAuditivo_resultado');
  
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
  applyPrivacyConsent(textos.formularioPrivacidad);
  
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

function applyPrivacyConsent(text) {
  const container = document.getElementById('textoPrivacidad');
  if (!container) return;
  container.replaceChildren(document.createTextNode(text || 'Acepto que mis respuestas y datos se envíen al centro auditivo. Mis datos no se venderán a terceros; el centro los utilizará exclusivamente para un seguimiento informativo relacionado con mi salud auditiva.'));
  const links = [
    ['Aviso legal', CONFIG.centro?.urlAvisoLegal],
    ['Política de privacidad', CONFIG.centro?.urlPrivacidad]
  ].filter(([, url]) => {
    try { return new URL(url).protocol === 'https:'; } catch { return false; }
  });
  if (!links.length) return;
  container.appendChild(document.createTextNode(' Consulta: '));
  links.forEach(([label, url], index) => {
    if (index) container.appendChild(document.createTextNode(' · '));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = label;
    container.appendChild(anchor);
  });
}

function applyContactData() {
  const centro = CONFIG.centro || {};
  const logoVisible = centro.logo_visible !== false;
  const nombreVisible = centro.nombre_visible !== false;
  const lemaVisible = centro.lema_visible === true && Boolean(centro.lema);
  const logoSrc = centro.logo || './assets/logo-centro.png';
  const logoImage = document.getElementById('logoImg');
  const footerLogoImage = document.getElementById('footerLogoImg');
  const logoName = document.getElementById('logoText');
  const tagline = document.getElementById('logoTagline');
  [logoImage, footerLogoImage].forEach(image => {
    if (image) { image.src = logoSrc; image.alt = centro.nombre ? 'Logo de ' + centro.nombre : 'Logo del centro'; }
  });
  if (logoImage) logoImage.hidden = !logoVisible;
  if (logoName) { logoName.textContent = centro.nombre || ''; logoName.hidden = !nombreVisible; }
  if (tagline) { tagline.textContent = centro.lema || ''; tagline.hidden = !lemaVisible; }
  setText('footerNombre', centro.nombre || '');
  setText('footerCopyNombre', centro.nombre);
  setExternalLink('headerLogo', centro.urlWeb, true);
  setExternalLink('footerBrand', centro.urlWeb, true);
  setExternalLink('linkWebCentro', centro.urlWeb, true);
  setExternalLink('linkPrivacidad', centro.urlPrivacidad);
  setExternalLink('linkLegal', centro.urlAvisoLegal);
  setExternalLink('linkCookies', centro.urlCookies);
  
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
  setText('appointmentCenterName', centro.nombre);
}

function setExternalLink(id, value, openInNewTab = false) {
  const element = document.getElementById(id);
  if (!element) return;
  try {
    const url = new URL(value || '');
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('URL no válida');
    element.href = url.href;
    element.hidden = false;
    if (openInNewTab) { element.target = '_blank'; element.rel = 'noopener noreferrer'; }
  } catch { element.hidden = true; }
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
  
  ['headerCTA', 'btnPedirCita', 'btnPedirCitaResultado', 'footerCTA'].forEach(id => document.getElementById(id)?.addEventListener('click', openAppointmentModal));
  document.getElementById('appointmentRequestForm')?.addEventListener('submit', handleAppointmentRequest);
  document.querySelectorAll('[data-close-appointment]').forEach(button => button.addEventListener('click', closeAppointmentModal));
  document.getElementById('modalCita')?.addEventListener('click', event => { if (event.target === event.currentTarget) closeAppointmentModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && document.getElementById('modalCita')?.getAttribute('aria-hidden') === 'false') closeAppointmentModal(); });
  
  const menuButton = document.getElementById('mobileMenuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const headerContent = document.querySelector('.header-content');
  const setMobileMenu = open => {
    if (!menuButton || !primaryNav || !headerContent) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuButton.textContent = open ? '×' : '☰';
    headerContent.classList.toggle('mobile-nav-open', open);
  };
  menuButton?.addEventListener('click', () => {
    setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  primaryNav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => setMobileMenu(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMobileMenu(false);
  });

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
// FORMULARIO Y ENVÍO AL CENTRO
// ==========================================
async function handleFormSubmit(e) {
  e.preventDefault();
  const form=e.target,btn=form.querySelector('button[type="submit"]');
  const spinner=btn.querySelector('.btn-spinner'),label=btn.querySelector('span:first-child');
  btn.disabled=true;if(spinner)spinner.style.display='inline';if(label)label.textContent='Enviando resultado…';
  const datos={nombre:form.nombre.value.trim(),apellidos:form.apellidos.value.trim(),email:form.email.value.trim(),
    codigoPostal:form.cp.value.trim(),fecha:new Date().toISOString(),resultados:calculateResults(),
    consentimiento:document.getElementById('privacidad')?.checked===true,envioResumenPaciente:true,submissionId:TEST_SUBMISSION_ID,centroTelefono:CONFIG.centro?.telefono||'',
    centro:CONFIG.centro?.nombre||'Centro Auditivo'};
  AppState.datosUsuario=datos;
  try {
    await enviarAlCentro('test-result',datos,form.website?.value||'');
    mostrarResultado(datos.resultados,datos.email);form.style.display='none';
    document.getElementById('resultadoFinal').style.display='block';
    showNotification('Resultado enviado al centro correctamente','success');
  } catch(error) {
    console.error('Error enviando resultado al centro:',error);
    showNotification('No se pudo enviar. Comprueba tu conexión e inténtalo de nuevo.','error');
    btn.disabled=false;if(label)label.textContent='Ver mi resultado';
  } finally {if(spinner)spinner.style.display='none';}
}
async function openAppointmentModal() {
  const modal=document.getElementById('modalCita'), form=document.getElementById('appointmentRequestForm'), success=document.getElementById('msgCitaExito');
  if(!modal||!form||!success)return;
  form.reset();form.style.display='block';success.hidden=true;success.style.display='none';
  const button=document.getElementById('btnConfirmarCita');if(button){button.disabled=false;button.textContent='Enviar solicitud';}
  modal.style.display='flex';modal.setAttribute('aria-hidden','false');document.body.classList.add('appointment-modal-open');
  window.setTimeout(()=>document.getElementById('appointmentName')?.focus(),0);
}
function closeAppointmentModal() {
  const modal=document.getElementById('modalCita');if(!modal)return;
  modal.style.display='none';modal.setAttribute('aria-hidden','true');document.body.classList.remove('appointment-modal-open');
}
async function handleAppointmentRequest(event) {
  event.preventDefault();
  const form=event.currentTarget;
  const fullName=form.elements.namedItem('nombreCompleto').value.trim(), email=form.elements.namedItem('email').value.trim();
  const telefono=form.elements.namedItem('telefono').value.trim(), mensaje=form.elements.namedItem('mensaje').value.trim();
  if(!fullName||!email||!telefono||!mensaje){showNotification('Completa todos los campos para enviar tu solicitud.','error');return;}
  const parts=fullName.split(/\s+/), button=document.getElementById('btnConfirmarCita');
  button.disabled=true;button.textContent='Enviando…';
  try {
    await enviarAlCentro('appointment-request',{nombre:parts.shift()||fullName,apellidos:parts.join(' '),email,telefono,canalContacto:'Formulario web',mensaje,fecha:new Date().toISOString(),consentimiento:true,envioResumenPaciente:false});
    form.style.display='none';const success=document.getElementById('msgCitaExito');success.hidden=false;success.style.display='block';
  } catch(error) {
    console.error('Error enviando solicitud de cita:',error);showNotification('No se pudo enviar la solicitud. Inténtalo de nuevo.','error');
    button.disabled=false;button.textContent='Enviar solicitud';
  }
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
  
  const frecuencias = CONFIG.test?.frecuencias || [500, 1000, 2000, 4000];
  const tonos = [];
  frecuencias.forEach(frecuencia => {
    ['derecho', 'izquierdo'].forEach(oido => {
      const respuestas = AppState.results.pitidos[oido] || {};
      const tieneRespuesta = Object.prototype.hasOwnProperty.call(respuestas, String(frecuencia));
      tonos.push({ frecuencia: Number(frecuencia), oido, detectado: tieneRespuesta ? Boolean(respuestas[String(frecuencia)]) : null });
    });
  });

  const simulacionesMeta = {
    telefono: { nombre: 'Llamada telefónica', pregunta: '¿De qué hablaba la conversación?', correcta: 'paquete', opciones: { paquete: 'La entrega de un paquete', cita: 'La entrega de una carta', trabajo: 'La entrega de un regalo' } },
    cafeteria: { nombre: 'Conversación en cafetería', pregunta: '¿Qué pedía la persona?', correcta: 'cafe', opciones: { cafe: 'Un café con leche y tostada', zumo: 'Un café solo y tostada', agua: 'Un café cortado y tostada' } },
    aire: { nombre: 'Conversación al aire libre', pregunta: '¿Dónde quedaban?', correcta: 'plaza', opciones: { plaza: 'En la plaza mayor', casa: 'En la casa mayor', calle: 'En la calle mayor' } }
  };
  const simulacionesDetalle = Object.entries(simulacionesMeta).map(([id, meta]) => {
    const seleccionada = AppState.results.simulaciones[id] || null;
    return { nombre: meta.nombre, pregunta: meta.pregunta, respuesta: meta.opciones[seleccionada] || 'Sin respuesta', correcta: meta.opciones[meta.correcta], acierto: seleccionada ? seleccionada === meta.correcta : null };
  });
  const palabrasDetalle = (AppState.palabrasData || []).map((item, index) => {
    const reproducida = item.esCorrecta ? item.correcta : item.alternativa;
    const seleccionada = AppState.results.palabras[item.id] || null;
    return { numero: index + 1, reproducida, respuesta: seleccionada || 'Sin respuesta', acierto: seleccionada ? seleccionada === reproducida : null };
  });
  resultados.detalle = { pitidos: tonos, simulaciones: simulacionesDetalle, palabras: palabrasDetalle };
  return resultados;
}

function mostrarResultado(resultados, emailPaciente) {
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
  setText('resultadoEnvioConfirmacion', `También hemos enviado el resumen de la prueba a ${emailPaciente || 'tu correo electrónico'}.`);
}

async function enviarAlCentro(tipo,datos,campoTrampa='') {
  if(!CONFIG.email?.endpoint||!CONFIG.email?.publicKey||!CONFIG.centro?.email)throw new Error('Falta configurar el envío o el email del centro.');
  const response=await fetch(CONFIG.email.endpoint,{method:'POST',headers:{'Content-Type':'application/json','apikey':CONFIG.email.publicKey},
    body:JSON.stringify({tipo,destinatario:CONFIG.centro.email,centro:CONFIG.centro.nombre||'Centro Auditivo',
      paciente:{nombre:datos.nombre,apellidos:datos.apellidos,email:datos.email,codigoPostal:datos.codigoPostal,
        telefono:datos.telefono||'',canalContacto:datos.canalContacto||'',mensaje:datos.mensaje||''},
      consentimiento:datos.consentimiento===true,envioResumenPaciente:datos.envioResumenPaciente===true,submissionId:datos.submissionId||'',centroTelefono:datos.centroTelefono||'',fecha:datos.fecha,resultados:datos.resultados,website:campoTrampa})});
  const result=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(result.error||`Error de envío: ${response.status}`);
  return result;
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