(() => {
  const root = document.getElementById("autotestApp");
  if (!root) return;
  const questions = [
    { intro: "Estás en tu salón tranquilo, tu pareja o tu hijo se asoma a la puerta y te comenta algo. Sabes que te ha dicho algo, has escuchado algo, has entendido algo… pero no lo suficiente. Entonces, casi de forma automática, dices: «Perdona, ¿qué has dicho?»",
      prompt: "¿Necesitas que te repitan las cosas con frecuencia? ¿Quizás oyes, pero no entiendes?",
      image: "assets/autotest/autotest-1.jpg", alt: "Dos personas conversan y una pide que le repitan lo que han dicho." },
    { intro: "Cuando vas al mercado o a un centro comercial, a la salida del cine o cuando estás entre amigos, suele haber ruido de fondo y conversaciones cercanas o paralelas. En esas situaciones puede costar seguir la conversación con naturalidad.",
      prompt: "¿Te cuesta seguir conversaciones en grupo o en ambientes ruidosos?",
      image: "assets/autotest/autotest-2.jpg", alt: "Personas conversando en un mercado concurrido." },
    { intro: "En una llamada o al escuchar un audio, no siempre puedes apoyarte en los gestos o en el contexto de la conversación. A veces, entender todas las palabras requiere más atención.",
      prompt: "¿Te cuesta entender bien cuando hablas por teléfono o escuchas audios?",
      image: "assets/autotest/autotest-3.jpg", alt: "Personas comunicándose por teléfono y mediante mensajes de voz." },
    { intro: "A veces subimos el volumen pensando que es cuestión de gustos, de la publicidad o de una película. Si otras personas suelen comentarlo, puede ser útil prestar atención a esa señal.",
      prompt: "¿Te han dicho que pones el volumen de la televisión muy alto o que hablas muy alto?",
      image: "assets/autotest/autotest-4.jpg", alt: "Una pareja mira la televisión con el volumen alto." },
    { intro: "En bares, restaurantes y cenas con amigos suelen hablar varias personas a la vez. El ruido de fondo puede hacer más difícil seguir el hilo y, en ocasiones, resultar incómodo.",
      prompt: "¿Te resulta complicado conversar en una cafetería o restaurante, o llega a molestarte tanto ruido?",
      image: "assets/autotest/autotest-5.jpg", alt: "Una persona tiene dificultades para seguir una conversación en una cafetería." },
    { intro: "Los acúfenos o tinnitus pueden percibirse como pitidos, zumbidos o un ruido de fondo. Pueden ser constantes o aparecer y desaparecer. Si te ocurre, coméntalo con un profesional.",
      prompt: "¿Escuchas pitidos o zumbidos internos en el oído?",
      image: "assets/autotest/autotest-6.jpg", alt: "Una persona nota pitidos o zumbidos en el oído." },
    { intro: "Cuando alguien habla en voz baja o susurra, puede costar seguir lo que dice, especialmente si hay ruido alrededor.",
      prompt: "¿Necesitas esforzarte cuando alguien habla más bajo o te susurra?",
      image: "assets/autotest/autotest-7.jpg", alt: "Dos personas conversan en voz baja." }
  ];
  const answers = Array(7).fill(null);
  let index = -1, outcome = null, patient = null, advanceTimer = null;
  const submissionId = window.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-" + Math.random().toString(36).slice(2);
  const esc = value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  function intro() {
    index = -1;
    root.innerHTML = '<article class="autotest-card autotest-intro"><span class="autotest-kicker">Una primera orientación, en unos 3 minutos</span><h3>' +
      esc(CONFIG.centro && CONFIG.centro.nombre || "Tu centro auditivo") +
      '</h3><p class="autotest-lead">Este test reúne siete situaciones cotidianas que a veces pasan desapercibidas, pero pueden ser pistas de que conviene revisar la audición.</p><p>Responde con sinceridad: cuanto más se parezcan tus respuestas a lo que vives, mejor podremos orientarte. El resultado es informativo y no sustituye una evaluación auditiva profesional.</p><div class="autotest-note"><span aria-hidden="true">⏱</span><span>Solo serán unos minutos. Al final podrás revisar tu orientación y, si quieres, pedir que el centro contacte contigo.</span></div><button class="btn btn-primary btn-large" type="button" data-action="start">Empezar <span aria-hidden="true">→</span></button></article>';
  }

  function question() {
    const q = questions[index], chosen = answers[index], pct = Math.round((index + 1) / 7 * 100);
    root.innerHTML = '<article class="autotest-card autotest-question"><button class="autotest-back-arrow" type="button" data-action="back" aria-label="' + (index === 0 ? "Volver al inicio" : "Pregunta anterior") + '">←</button><div class="autotest-progress" aria-label="Pregunta ' + (index + 1) + ' de 7"><div class="autotest-progress-top"><span>Pregunta ' +
      (index + 1) + ' de 7</span><span>' + pct + '%</span></div><div class="autotest-progress-track"><span style="width:' + pct +
      '%"></span></div></div><div class="autotest-question-layout"><div class="autotest-question-copy"><span class="autotest-kicker">Situación ' +
      (index + 1) + '</span><h3>' + esc(q.prompt) + '</h3><p>' + esc(q.intro) +
      '</p></div><img class="autotest-image" src="' + q.image + '" alt="' + esc(q.alt) + '" loading="eager"></div><fieldset class="autotest-options"><legend>¿Te ocurre?</legend>' +
      '<label class="autotest-option ' + (chosen === true ? "selected" : "") + '"><input type="radio" name="autotest-answer" value="yes" ' + (chosen === true ? "checked" : "") +
      '><span class="autotest-option-mark" aria-hidden="true">✓</span><span>Sí</span></label><label class="autotest-option ' +
      (chosen === false ? "selected" : "") + '"><input type="radio" name="autotest-answer" value="no" ' + (chosen === false ? "checked" : "") +
      '><span class="autotest-option-mark" aria-hidden="true">—</span><span>No</span></label></fieldset></article>';
  }

  function details() {
    const legalUrl = String(CONFIG.centro && CONFIG.centro.urlAvisoLegal || "").trim();
    const privacyUrl = String(CONFIG.centro && CONFIG.centro.urlPrivacidad || "").trim();
    const legalLinks = [
      /^https?:\/\//i.test(legalUrl) ? '<a href="' + esc(legalUrl) + '" target="_blank" rel="noopener noreferrer">Aviso legal</a>' : "",
      /^https?:\/\//i.test(privacyUrl) ? '<a href="' + esc(privacyUrl) + '" target="_blank" rel="noopener noreferrer">Política de privacidad</a>' : ""
    ].filter(Boolean);
    const policy = legalLinks.length ? " Consulta: " + legalLinks.join(" · ") + "." : "";
    root.innerHTML = '<article class="autotest-card autotest-details"><div class="autotest-progress"><div class="autotest-progress-top"><span>Test completado</span><span>Datos y resultado</span></div><div class="autotest-progress-track"><span style="width:100%"></span></div></div><span class="autotest-kicker">Ya terminamos</span><h3>Recibe tu orientación auditiva</h3><p class="autotest-lead">Déjanos tus datos para mostrarte el resultado y enviarte por correo una breve guía de salud auditiva.</p><p class="autotest-muted">No te enviaremos mensajes continuamente. Tus respuestas y datos se remitirán al centro para que pueda orientarte.</p><form id="autotestDetailsForm" class="autotest-form"><div class="autotest-fields"><div class="form-group"><label for="autoNombre">Tu nombre <span aria-hidden="true">*</span></label><input id="autoNombre" name="nombre" autocomplete="given-name" required maxlength="100" placeholder="Ej.: María"></div><div class="form-group"><label for="autoApellidos">Apellidos</label><input id="autoApellidos" name="apellidos" autocomplete="family-name" maxlength="120" placeholder="Opcional"></div><div class="form-group"><label for="autoEmail">Tu email <span aria-hidden="true">*</span></label><input id="autoEmail" name="email" type="email" autocomplete="email" required maxlength="254" placeholder="tu@email.com"></div><div class="form-group"><label for="autoEdad">Edad <span aria-hidden="true">*</span></label><input id="autoEdad" name="edad" type="number" min="0" max="120" inputmode="numeric" required placeholder="Tu edad"></div></div><label class="autotest-consent"><input type="checkbox" name="consentimiento" required><span>Acepto que mis respuestas y datos se envíen por correo al centro auditivo para recibir esta orientación y que puedan gestionar, si lo solicito, una evaluación auditiva. ' +
      policy + '</span></label><div class="autotest-honeypot" aria-hidden="true"><label for="autoWebsite">No rellenar</label><input id="autoWebsite" name="website" tabindex="-1" autocomplete="off"></div><p class="autotest-error" id="autotestDetailsError" role="alert"></p><div class="autotest-actions"><button class="btn btn-secondary" type="button" data-action="back-to-question">← Revisar respuestas</button><button class="btn btn-primary btn-large" id="autotestSubmit" type="submit">Ver mi resultado <span aria-hidden="true">→</span></button></div></form></article>';
    document.getElementById("autotestDetailsForm").addEventListener("submit", submitDetails);
  }

  function copyFor(score) {
    if (score <= 2) return { level: "Pocas señales destacadas", title: "Tus respuestas no muestran muchas señales de dificultad auditiva.", text: "Aun así, la percepción de cada persona es distinta. Cuida tu audición y considera realizar una revisión periódica, especialmente si notas cambios." };
    if (score <= 4) return { level: "Conviene prestar atención", title: "Algunas de tus respuestas sugieren que podría ser útil revisar tu audición.", text: "Una revisión auditiva gratuita puede ayudarte a aclarar tus dudas. Coméntalo con un audiólogo y decide con información profesional." };
    return { level: "Señales para revisar", title: "Varias de tus respuestas indican que merece la pena consultar con un profesional.", text: "Te recomendamos hablar con un audiólogo y valorar una revisión auditiva completa y gratuita para conocer mejor tu situación." };
  }

  function resultScreen() {
    const c = copyFor(outcome.score);
    root.innerHTML = '<article class="autotest-card autotest-result"><span class="autotest-kicker">Tu resultado preliminar</span><div class="autotest-result-score"><span>' +
      outcome.score + '</span><small>de 7 respuestas afirmativas</small></div><p class="autotest-result-level">' + c.level + '</p><h3>' + c.title +
      '</h3><p class="autotest-lead">' + c.text + '</p><div class="autotest-note"><span aria-hidden="true">ℹ</span><span>Este autotest es orientativo, no constituye un diagnóstico ni sustituye una evaluación auditiva profesional.</span></div><p class="autotest-muted">Te hemos enviado el resultado y una breve guía de salud auditiva a <strong>' +
      esc(patient.email) + '</strong>.</p><section class="autotest-appointment" aria-labelledby="autotestAppointmentTitle"><h4 id="autotestAppointmentTitle">¿Quieres que el centro contacte contigo para concertar una revisión auditiva completa y gratuita?</h4><div class="autotest-actions autotest-choice-actions"><button class="btn btn-primary" type="button" data-action="appointment-yes">Sí, quiero que me contacten</button><button class="btn btn-secondary" type="button" data-action="appointment-no">No, gracias</button></div><form id="autotestAppointmentForm" class="autotest-form" hidden><div class="autotest-fields autotest-appointment-fields"><div class="form-group"><label for="autoTelefono">Teléfono <span aria-hidden="true">*</span></label><input id="autoTelefono" name="telefono" type="tel" autocomplete="tel" required maxlength="30" placeholder="+34 600 000 000"></div><fieldset class="form-group autotest-channel"><legend>¿Cómo prefieres que te contacten? <span aria-hidden="true">*</span></legend><label><input type="radio" name="canalContacto" value="llamada" required> Llamada</label><label><input type="radio" name="canalContacto" value="whatsapp" required> WhatsApp</label></fieldset></div><p class="autotest-error" id="autotestAppointmentError" role="alert"></p><button class="btn btn-primary" id="autotestAppointmentSubmit" type="submit">Enviar solicitud</button></form></section></article>';
    document.getElementById("autotestAppointmentForm").addEventListener("submit", submitAppointment);
  }

  function done(message) {
    root.innerHTML = '<article class="autotest-card autotest-done"><div class="autotest-done-icon" aria-hidden="true">✓</div><span class="autotest-kicker">Gracias</span><h3>Hemos recibido tu solicitud</h3><p class="autotest-lead">' +
      esc(message || "Gracias por completar el autotest. Si necesitas ayuda, el equipo de tu centro auditivo está a tu disposición.") +
      '</p><p class="autotest-muted">' + esc(CONFIG.centro && CONFIG.centro.nombre || "Tu centro auditivo") +
      (CONFIG.centro && CONFIG.centro.telefono ? " · " + esc(CONFIG.centro.telefono) : "") + "</p></article>";
  }

  async function send(tipo) {
    if (!CONFIG.email || !CONFIG.email.endpoint || !CONFIG.email.publicKey || !CONFIG.centro || !CONFIG.centro.email) throw new Error("El envío no está disponible en este momento.");
    const payload = {
      tipo: tipo, destinatario: CONFIG.centro.email, centro: CONFIG.centro.nombre || "Centro Auditivo",
      centroTelefono: CONFIG.centro.telefono || "",
      paciente: patient, fecha: new Date().toISOString(),
      autotest: tipo === "autotest-result" ? { consentimiento: true, submissionId: submissionId, respuestas: answers.map((value, i) => ({ respuesta: value === true, pregunta: questions[i].prompt })), website: document.getElementById("autoWebsite") && document.getElementById("autoWebsite").value || "" } : undefined,
      resultados: { autoTest: { score: outcome && outcome.score, nivel: outcome ? copyFor(outcome.score).level : "" } }
    };
    const response = await fetch(CONFIG.email.endpoint, { method: "POST", headers: { "Content-Type": "application/json", apikey: CONFIG.email.publicKey }, body: JSON.stringify(payload) });
    const responseBody = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(responseBody.error || "No se pudo completar el envío. Inténtalo de nuevo.");
    return responseBody;
  }

  async function submitDetails(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    patient = { nombre: String(data.get("nombre") || "").trim(), apellidos: String(data.get("apellidos") || "").trim(), email: String(data.get("email") || "").trim(), edad: Number(data.get("edad")) };
    outcome = { score: answers.filter(v => v === true).length };
    const button = document.getElementById("autotestSubmit"), error = document.getElementById("autotestDetailsError");
    button.disabled = true; button.textContent = "Enviando…"; error.textContent = "";
    try { await send("autotest-result"); resultScreen(); root.scrollIntoView({ behavior: "smooth", block: "start" }); }
    catch (err) { error.textContent = err.message || "No se pudo enviar. Revisa tu conexión e inténtalo de nuevo."; button.disabled = false; button.innerHTML = 'Ver mi resultado <span aria-hidden="true">→</span>'; }
  }

  async function submitAppointment(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    patient.telefono = String(data.get("telefono") || "").trim();
    patient.canalContacto = String(data.get("canalContacto") || "");
    const button = document.getElementById("autotestAppointmentSubmit"), error = document.getElementById("autotestAppointmentError");
    button.disabled = true; button.textContent = "Enviando…"; error.textContent = "";
    try { await send("appointment-request"); done("Gracias. El centro se pondrá en contacto contigo por el medio que has elegido."); root.scrollIntoView({ behavior: "smooth", block: "start" }); }
    catch (err) { error.textContent = err.message || "No se pudo enviar la solicitud. Inténtalo de nuevo."; button.disabled = false; button.textContent = "Enviar solicitud"; }
  }

  root.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    switch (button.dataset.action) {
      case "start": index = 0; question(); break;
      case "back": if (advanceTimer !== null) { window.clearTimeout(advanceTimer); advanceTimer = null; } if (index <= 0) intro(); else { index--; question(); } break;
      case "back-to-question": index = 6; question(); root.scrollIntoView({ behavior: "smooth", block: "start" }); break;
      case "appointment-yes": {
        button.hidden = true;
        root.querySelector('[data-action="appointment-no"]').hidden = true;
        const form = document.getElementById("autotestAppointmentForm"); form.hidden = false;
        document.getElementById("autoTelefono").focus();
        break;
      }
      case "appointment-no": done(); root.scrollIntoView({ behavior: "smooth", block: "start" }); break;
    }
  });
  root.addEventListener("change", event => {
    if (event.target.matches('input[name="autotest-answer"]')) {
      const answeredIndex = index;
      answers[answeredIndex] = event.target.value === "yes";
      root.querySelectorAll(".autotest-option").forEach(el => el.classList.remove("selected"));
      event.target.closest(".autotest-option").classList.add("selected");
      if (advanceTimer !== null) window.clearTimeout(advanceTimer);
      advanceTimer = window.setTimeout(() => {
        if (index !== answeredIndex) return;
        advanceTimer = null;
        if (index < questions.length - 1) {
          index++;
          question();
        } else {
          details();
        }
        root.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    }
  });
  intro();
})();