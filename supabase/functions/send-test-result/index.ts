import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const allowedOrigins = new Set(["https://hear-o.es", "https://www.hear-o.es"]);
const localOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i;
const attempts = new Map<string, number[]>();
const windowMs = 10 * 60 * 1000;
const limit = 8;

const esc = (v: unknown) => String(v ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c] as string));
const reply = (body: Record<string, unknown>, status = 200, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type":"application/json; charset=utf-8", ...headers } });
const cors = (origin: string) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin"
});
const emailOk = (v: unknown): v is string =>
  typeof v === "string" && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function formatDateEs(value: unknown) {
  let parsed = typeof value === "string" ? new Date(value) : new Date();
  if (Number.isNaN(parsed.getTime())) parsed = new Date();
  const parts = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid", day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(parsed);
  const part = (type: string) => parts.find(item => item.type === type)?.value ?? "";
  return part("day") + "-" + part("month") + "-" + part("year") + " " + part("hour") + ":" + part("minute");
}

function throttled(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter(t => now - t < windowMs);
  if (recent.length >= limit) { attempts.set(ip, recent); return true; }
  recent.push(now); attempts.set(ip, recent);
  return false;
}

function resultsHtml(r: any) {
  const rows = [
    ["Resultado global", r?.global?.porcentaje, r?.global?.nivel],
    ["Detección de tonos", r?.pitidos?.porcentaje, ""],
    ["Comprensión en simulaciones", r?.simulaciones?.porcentaje, ""],
    ["Discriminación de palabras", r?.palabras?.porcentaje, ""]
  ];
  return `<table role="presentation" width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse">${rows.map(([label,pct,level]) =>
    `<tr><td style="border-bottom:1px solid #e2e8f0;color:#334155">${esc(label)}</td><td style="border-bottom:1px solid #e2e8f0;text-align:right;font-weight:bold;color:#102b46">${pct == null ? "—" : esc(pct + "%")} ${level ? "(" + esc(level) + ")" : ""}</td></tr>`
  ).join("")}</table>`;
}

const pctText = value => value == null ? "—" : String(value) + "%";

function soundBreakdownHtml(r: any) {
  const details = r?.detalle || {};
  const rows = [];
  const ears = { derecho: "Derecho", izquierdo: "Izquierdo" };
  (Array.isArray(details.pitidos) ? details.pitidos : []).forEach((item: any) => {
    const state = item.detectado === true ? "Detectado" : item.detectado === false ? "No detectado" : "Sin respuesta";
    rows.push(`<tr><td>${esc(item.frecuencia)} Hz · oído ${esc(ears[item.oido] || "—")}</td><td>${state}</td></tr>`);
  });
  const toneRows = rows.length ? rows.join("") : '<tr><td colspan="2">Detalle no disponible</td></tr>';
  const simulationRows = (Array.isArray(details.simulaciones) ? details.simulaciones : []).map((item: any) => {
    const status = item.acierto === true ? "Acierto" : item.acierto === false ? "Respuesta incorrecta" : "Sin respuesta";
    return `<tr><td>${esc(item.nombre)}<br><span style="color:#64748b">${esc(item.pregunta)}</span></td><td>${esc(item.respuesta)}<br><strong>${status}</strong>${item.acierto === false ? '<br><span style="color:#64748b">Respuesta correcta: ' + esc(item.correcta) + '</span>' : ''}</td></tr>`;
  }).join("") || '<tr><td colspan="2">Detalle no disponible</td></tr>';
  const wordRows = (Array.isArray(details.palabras) ? details.palabras : []).map((item: any) => {
    const status = item.acierto === true ? "Acierto" : item.acierto === false ? "Respuesta incorrecta" : "Sin respuesta";
    return `<tr><td>Palabra ${esc(item.numero)} · sonido reproducido: ${esc(item.reproducida)}</td><td>${esc(item.respuesta)}<br><strong>${status}</strong>${item.acierto === false ? '<br><span style="color:#64748b">La palabra reproducida era: ' + esc(item.reproducida) + '</span>' : ''}</td></tr>`;
  }).join("") || '<tr><td colspan="2">Detalle no disponible</td></tr>';
  const table = (title: string, body: string) => `<h3 style="font-size:16px;margin:22px 0 8px;color:#102b46">${title}</h3><table role="presentation" width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px">${body}</table>`;
  return table("Tonos · detectados / no detectados", toneRows) +
    table("Simulaciones · aciertos y respuestas", simulationRows) +
    table("Palabras · aciertos y respuestas", wordRows);
}

function soundBreakdownText(r: any) {
  const details = r?.detalle || {};
  const tones = (Array.isArray(details.pitidos) ? details.pitidos : []).map((item: any) =>
    `Tono ${item.frecuencia} Hz, oído ${item.oido}: ${item.detectado === true ? "detectado" : item.detectado === false ? "no detectado" : "sin respuesta"}`);
  const simulations = (Array.isArray(details.simulaciones) ? details.simulaciones : []).map((item: any) =>
    `${item.nombre}: ${item.respuesta} — ${item.acierto === true ? "acierto" : item.acierto === false ? "respuesta incorrecta (correcta: " + item.correcta + ")" : "sin respuesta"}`);
  const words = (Array.isArray(details.palabras) ? details.palabras : []).map((item: any) =>
    `Palabra ${item.numero}: reproducida “${item.reproducida}”; seleccionada “${item.respuesta}” — ${item.acierto === true ? "acierto" : item.acierto === false ? "incorrecta" : "sin respuesta"}`);
  return [...tones, ...simulations, ...words].join("\n") || "Detalle de respuestas no disponible.";
}


function soundOutcome(r: any) {
  const level = String(r?.global?.nivel ?? "").toLowerCase();
  const outcomes: Record<string, { title: string; description: string }> = {
    normal: {
      title: "Tu prueba no muestra señales destacadas de dificultad auditiva",
      description: "Tus respuestas se sitúan dentro del rango esperado en esta prueba orientativa. Mantén tus revisiones periódicas y consulta si notas algún cambio en tu audición."
    },
    moderado: {
      title: "Detectamos posibles dificultades auditivas",
      description: "Algunas de tus respuestas sugieren que podría ser útil realizar una revisión auditiva profesional. El centro recibirá el resultado y podrá orientarte sobre el siguiente paso."
    },
    preocupante: {
      title: "Te recomendamos una revisión auditiva profesional",
      description: "Tus respuestas muestran señales que merece la pena comentar con un profesional. Contacta con el centro para recibir orientación y valorar una evaluación auditiva completa."
    }
  };
  return outcomes[level] || {
    title: "Este resultado es orientativo",
    description: "El resultado no permite establecer un diagnóstico. Si tienes dudas o notas cambios, consulta con un profesional de audiología."
  };
}

const centerMarketingText = [
  "¿Quieres hacer crecer tu centro? ¿Captar más pacientes, convertir mejor y optimizar tu agenda?",
  "Conoce las soluciones Hear-O:",
  "• Marketing Studio: campañas para captar, fidelizar y reactivar pacientes — https://hear-o.es/marketing-automatico-centros-auditivos",
  "• Asistente IA de Anamnesis: guía la conversación y ayuda a argumentar mejor — https://hear-o.es/software-anamnesis-vender-mas-audifonos",
  "• Agenda Inteligente: organiza citas y automatiza recordatorios — https://hear-o.es/crm-calendario-centros-auditivos",
  "• Anamnesis Digital: recoge información antes de la consulta y envía el dossier — https://hear-o.es/anamnesis_digital_online_para_centros_auditivos"
].join("\n");

const centerMarketingHtml =
  '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:28px 0 0;background:#102b46;color:#ffffff;border-collapse:collapse"><tr><td style="padding:20px 22px;color:#ffffff;font-family:Arial,Helvetica,sans-serif">' +
  '<p style="margin:0 0 6px;color:#ffffff;font-size:18px;line-height:1.4;font-weight:bold">¿Quieres hacer crecer tu centro?</p>' +
  '<p style="margin:0 0 16px;color:#d9e8f5;font-size:14px;line-height:1.6">Capta más pacientes, convierte mejor y optimiza tu agenda con Hear-O.</p>' +
  '<p style="margin:0 0 10px;color:#ffb547;font-size:13px;line-height:1.4;font-weight:bold">CONOCE LAS SOLUCIONES HEAR-O</p>' +
  '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">' +
  '<tr><td style="padding:7px 0;border-top:1px solid #38536d;font-size:14px;line-height:1.5"><a href="https://hear-o.es/marketing-automatico-centros-auditivos" style="color:#ffffff;font-weight:bold;text-decoration:underline">Marketing Studio</a><span style="color:#d9e8f5"> · Campañas para captar, fidelizar y reactivar pacientes.</span></td></tr>' +
  '<tr><td style="padding:7px 0;border-top:1px solid #38536d;font-size:14px;line-height:1.5"><a href="https://hear-o.es/software-anamnesis-vender-mas-audifonos" style="color:#ffffff;font-weight:bold;text-decoration:underline">Asistente IA de Anamnesis</a><span style="color:#d9e8f5"> · Guía la conversación y ayuda a explicar y argumentar mejor.</span></td></tr>' +
  '<tr><td style="padding:7px 0;border-top:1px solid #38536d;font-size:14px;line-height:1.5"><a href="https://hear-o.es/crm-calendario-centros-auditivos" style="color:#ffffff;font-weight:bold;text-decoration:underline">Agenda Inteligente</a><span style="color:#d9e8f5"> · Organiza citas y automatiza recordatorios para reducir ausencias.</span></td></tr>' +
  '<tr><td style="padding:7px 0;border-top:1px solid #38536d;font-size:14px;line-height:1.5"><a href="https://hear-o.es/anamnesis_digital_online_para_centros_auditivos" style="color:#ffffff;font-weight:bold;text-decoration:underline">Anamnesis Digital</a><span style="color:#d9e8f5"> · Recoge información antes de la consulta y envía el dossier.</span></td></tr>' +
  '</table><p style="margin:16px 0 0;color:#b8cde0;font-size:12px;line-height:1.5">Hear-O · Tecnología y acompañamiento para centros auditivos</p></td></tr></table>';


const autoQuestions = [
  "¿Necesitas que te repitan las cosas con frecuencia? ¿Quizás oyes, pero no entiendes?",
  "¿Te cuesta seguir conversaciones en grupo o en ambientes ruidosos?",
  "¿Te cuesta entender bien cuando hablas por teléfono o escuchas audios?",
  "¿Te han dicho que pones el volumen de la televisión muy alto o que hablas muy alto?",
  "¿Te resulta complicado conversar en una cafetería o restaurante, o llega a molestarte tanto ruido?",
  "¿Escuchas pitidos o zumbidos internos en el oído?",
  "¿Necesitas esforzarte cuando alguien habla más bajo o te susurra?"
];

function autoResult(score: number) {
  if (score <= 2) return {
    level: "Pocas señales destacadas",
    title: "Tus respuestas no muestran muchas señales de dificultad auditiva.",
    text: "Aun así, la percepción de cada persona es distinta. Cuida tu audición y considera realizar una revisión periódica, especialmente si notas cambios."
  };
  if (score <= 4) return {
    level: "Conviene prestar atención",
    title: "Algunas de tus respuestas sugieren que podría ser útil revisar tu audición.",
    text: "Una revisión auditiva gratuita puede ayudarte a aclarar tus dudas. Coméntalo con un audiólogo y decide con información profesional."
  };
  return {
    level: "Señales para revisar",
    title: "Varias de tus respuestas indican que merece la pena consultar con un profesional.",
    text: "Te recomendamos hablar con un audiólogo y valorar una revisión auditiva completa y gratuita para conocer mejor tu situación."
  };
}

async function sendAutotestResult(body: any, apiKey: string, allowed: string[], headers: HeadersInit) {
  const center = typeof body.centro === "string" ? body.centro.trim().slice(0, 120) : "";
  const to = typeof body.destinatario === "string" ? body.destinatario.trim().toLowerCase() : "";
  const p = body.paciente;
  const test = body.autotest;
  const age = Number(p?.edad);
  const validAnswers = Array.isArray(test?.respuestas) && test.respuestas.length === 7 &&
    test.respuestas.every((item: any) => item && typeof item.respuesta === "boolean");
  const submissionId = typeof test?.submissionId === "string" && /^[A-Za-z0-9_-]{10,80}$/.test(test.submissionId) ? test.submissionId : "";
  if (!center || !emailOk(to) || !allowed.includes(to) ||
      !p || typeof p !== "object" || typeof p.nombre !== "string" || typeof p.apellidos !== "string" ||
      !emailOk(p.email) || !Number.isInteger(age) || age < 0 || age > 120 ||
      test?.consentimiento !== true || !validAnswers || !submissionId) {
    return reply({ error: "Faltan datos o el consentimiento no es válido." }, 400, headers);
  }

  const centerPhone = typeof body.centroTelefono === "string" ? body.centroTelefono.trim().slice(0, 40) : "";
  const centerPhoneHref = centerPhone.replace(/[^0-9+]/g, "");
  const patientContactHtml =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:24px 0;background:#f0f7fb;border:1px solid #cfe3ef"><tr><td style="padding:20px">' +
    '<h2 style="font-size:19px;line-height:1.4;margin:0 0 8px;color:#102b46">¿Quieres salir de dudas?</h2>' +
    '<p style="margin:0 0 12px;line-height:1.6">Una revisión auditiva profesional puede ayudarte a conocer mejor tu audición y resolver tus dudas. Contacta con el centro para dar el siguiente paso:</p>' +
    '<p style="margin:6px 0"><strong>Teléfono:</strong> ' + (centerPhone ? '<a href="tel:' + esc(centerPhoneHref) + '" style="color:#1769aa;text-decoration:underline">' + esc(centerPhone) + '</a>' : "Consulta con el centro") + '</p>' +
    '<p style="margin:6px 0"><strong>Email:</strong> <a href="mailto:' + esc(to) + '" style="color:#1769aa;text-decoration:underline">' + esc(to) + '</a></p>' +
    '</td></tr></table>';
  const centerFollowupHtml =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:22px 0;background:#fff8e8;border:1px solid #f1d79a"><tr><td style="padding:16px 18px;color:#624b19;line-height:1.55">' +
    '<strong>Siguiente paso recomendado:</strong> Guarda este contacto en tu base de datos respetando el consentimiento otorgado. Si también ha aceptado comunicaciones comerciales, programa un seguimiento ocasional con una propuesta de revisión auditiva.' +
    '</td></tr></table>';
  const name = (p.nombre.trim().slice(0, 100) + " " + p.apellidos.trim().slice(0, 120)).trim();
  const patientEmail = p.email.trim().slice(0, 254);
  const score = test.respuestas.filter((item: any) => item.respuesta === true).length;
  const outcome = autoResult(score);
  const date = formatDateEs(body.fecha);
  const answersHtml = autoQuestions.map((question, index) =>
    "<tr><td style=\"padding:9px 10px;border-bottom:1px solid #e2e8f0;color:#334155\">" + esc(question) +
    "</td><td style=\"padding:9px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:bold;color:#102b46\">" +
    (test.respuestas[index].respuesta ? "Sí" : "No") + "</td></tr>"
  ).join("");
  const patientHtml = "<!doctype html><html lang=\"es\"><body style=\"margin:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#102b46\">" +
    "<table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#f3f6f8;padding:24px 10px\"><tr><td align=\"center\">" +
    "<table role=\"presentation\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:640px;width:100%;background:#fff;border:1px solid #dbe4ec\">" +
    "<tr><td style=\"padding:30px\"><div style=\"font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#2876a8;font-weight:bold\">" + esc(center) +
    "</div><h1 style=\"font-size:24px;line-height:1.3;margin:12px 0;color:#102b46\">Tu orientación auditiva</h1><p>Hola, " + esc(p.nombre.trim()) +
    ". Gracias por completar el autotest.</p><div style=\"padding:18px;background:#eff6ff;border-radius:10px\"><p style=\"margin:0;color:#2876a8;font-size:14px;font-weight:bold\">" +
    esc(outcome.level) + "</p><h2 style=\"font-size:19px;line-height:1.4;margin:8px 0\">" + esc(outcome.title) + "</h2><p style=\"margin:0;line-height:1.6\">" +
    esc(outcome.text) + "</p><p style=\"margin:12px 0 0;font-weight:bold\">Respuestas afirmativas: " + score + " de 7</p></div>" +
    "<h2 style=\"font-size:18px;margin:24px 0 8px\">Una guía sencilla para cuidar tu audición</h2><ul style=\"line-height:1.7;padding-left:20px\">" +
    "<li>Si notas cambios o dificultades, coméntalos con un profesional de audiología.</li><li>Evita exponerte durante mucho tiempo a sonidos intensos y utiliza protección cuando sea necesario.</li>" +
    "<li>Una revisión auditiva profesional puede aclarar cualquier duda.</li></ul>" + patientContactHtml + "<p style=\"margin-top:24px;color:#64748b;font-size:12px;line-height:1.5\">Este autotest es orientativo y no constituye un diagnóstico ni sustituye una evaluación auditiva profesional.</p>" +
    "<p style=\"margin-top:22px\">Un saludo,<br><strong>" + esc(center) + "</strong></p></td></tr></table></td></tr></table></body></html>";
  const centerHtml = "<!doctype html><html lang=\"es\"><body style=\"margin:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#102b46\">" +
    "<table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#f3f6f8;padding:24px 10px\"><tr><td align=\"center\">" +
    "<table role=\"presentation\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:640px;width:100%;background:#fff;border:1px solid #dbe4ec\">" +
    "<tr><td style=\"padding:28px 30px 12px\"><div style=\"font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#2876a8;font-weight:bold\">" + esc(center) +
    "</div><h1 style=\"font-size:24px;line-height:1.3;margin:12px 0;color:#102b46\">Nuevo resultado de autotest auditivo</h1><p style=\"line-height:1.6;color:#475569\">La persona ha autorizado el envío de sus respuestas para recibir orientación.</p></td></tr>" +
    "<tr><td style=\"padding:12px 30px 30px\"><h2 style=\"font-size:18px;margin:8px 0 12px\">Datos de contacto</h2><p><strong>Nombre:</strong> " + esc(name) +
    "</p><p><strong>Email:</strong> " + esc(patientEmail) + "</p><p><strong>Edad:</strong> " + age + "</p><p><strong>Fecha:</strong> " + esc(date) +
    "</p><h2 style=\"font-size:18px;margin:24px 0 8px\">Resultado orientativo: " + score + " de 7 respuestas afirmativas</h2><p><strong>" + esc(outcome.level) +
    ".</strong> " + esc(outcome.text) + "</p><table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse\">" +
    answersHtml + "</table>" + centerFollowupHtml + "<p style=\"margin:24px 0 0;color:#64748b;font-size:12px;line-height:1.5\">Autotest orientativo; no constituye diagnóstico ni sustituye evaluación profesional.</p>" + centerMarketingHtml + "</td></tr></table></td></tr></table></body></html>";

  const batch = [
    {
      from: "Hear-O <info@info.hear-o.es>", to: [patientEmail], reply_to: to,
      subject: "Tu orientación auditiva · " + center, html: patientHtml,
      text: "Hola, " + p.nombre.trim() + ".\n\n" + outcome.level + "\n" + outcome.title + "\n" + outcome.text +
        "\n\nRespuestas afirmativas: " + score + " de 7.\n\n¿Quieres salir de dudas? Contacta con " + center + " para solicitar una revisión auditiva profesional.\nTeléfono: " + (centerPhone || "consulta con el centro") + "\nEmail: " + to +
        "\n\nEste autotest es orientativo y no sustituye una evaluación auditiva profesional.\n\nUn saludo, " + center
    },
    {
      from: "Hear-O <info@info.hear-o.es>", to: [to], reply_to: patientEmail,
      subject: "Nuevo resultado de autotest · " + center + " · " + name, html: centerHtml,
      text: "Nuevo resultado de autotest auditivo\nPaciente: " + name + "\nEmail: " + patientEmail + "\nEdad: " + age +
        "\nFecha: " + date + "\nResultado orientativo: " + score + " de 7. " + outcome.level + "\n\n" +
        autoQuestions.map((question, index) => (index + 1) + ". " + question + " — " + (test.respuestas[index].respuesta ? "Sí" : "No")).join("\n") +
        "\n\nSiguiente paso recomendado: guarda este contacto respetando el consentimiento otorgado. Si ha aceptado comunicaciones comerciales, programa un seguimiento ocasional con una propuesta de revisión auditiva.\n\nAutotest orientativo; no constituye diagnóstico.\n\n" + centerMarketingText
    }
  ];
  try {
    const sent = await fetch("https://api.resend.com/emails/batch", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json", "Idempotency-Key": "autotest-" + submissionId },
      body: JSON.stringify(batch)
    });
    const sentBody = await sent.json().catch(() => ({}));
    if (!sent.ok) {
      console.error("Resend rejected autotest batch:", sent.status, JSON.stringify(sentBody).slice(0, 400));
      return reply({ error: "El servicio de correo no pudo aceptar el envío." }, 502, headers);
    }
    return reply({ ok: true }, 200, headers);
  } catch (error) {
    console.error("Resend autotest request failed:", error instanceof Error ? error.message : "unknown error");
    return reply({ error: "No se pudo contactar con el servicio de correo." }, 502, headers);
  }
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? "";
  if (!allowedOrigins.has(origin) && !localOrigin.test(origin)) return reply({error:"Origen no autorizado."},403);
  const headers = cors(origin);
  if (req.method === "OPTIONS") return new Response("ok", {headers});
  if (req.method !== "POST") return reply({error:"Método no permitido."},405,headers);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (throttled(ip)) return reply({error:"Demasiados intentos. Espera unos minutos y vuelve a probar."},429,headers);

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const allowed = (Deno.env.get("RESEND_ALLOWED_RECIPIENTS") ?? "").split(",").map(x=>x.trim().toLowerCase()).filter(Boolean);
  if (!apiKey || !allowed.length) {
    console.error("Email service secrets are not configured.");
    return reply({error:"El envío aún no está configurado."},503,headers);
  }

  const declared = Number(req.headers.get("content-length") ?? "0");
  if (declared > 32_000) return reply({error:"La solicitud es demasiado grande."},413,headers);
  let raw = "";
  try { raw = await req.text(); } catch { return reply({error:"Solicitud no válida."},400,headers); }
  if (raw.length > 32_000) return reply({error:"La solicitud es demasiado grande."},413,headers);
  let body: any;
  try { body = JSON.parse(raw); } catch { return reply({error:"Solicitud no válida."},400,headers); }
  if (body?.website) return reply({ok:true},200,headers);
  if (body?.autotest?.website) return reply({ok:true},200,headers);
  if (body?.tipo === "autotest-result") return await sendAutotestResult(body, apiKey, allowed, headers);

  const tipo = body?.tipo;
  const centro = typeof body?.centro === "string" ? body.centro.trim().slice(0,120) : "";
  const to = typeof body?.destinatario === "string" ? body.destinatario.trim().toLowerCase() : "";
  const p = body?.paciente;
  if (!["test-result","appointment-request"].includes(tipo) || !centro || !emailOk(to) || !allowed.includes(to) ||
      !p || typeof p !== "object" || typeof p.nombre !== "string" || typeof p.apellidos !== "string" || !emailOk(p.email) ||
      (tipo === "test-result" && body.envioResumenPaciente === true && body.consentimiento !== true)) {
    return reply({error:"Faltan datos o el destinatario no está autorizado."},400,headers);
  }

  const name = `${p.nombre.trim().slice(0,100)} ${p.apellidos.trim().slice(0,120)}`.trim();
  const patientEmail = p.email.trim().slice(0,254);
  const postal = typeof p.codigoPostal === "string" ? p.codigoPostal.slice(0,20) : "";
  const date = formatDateEs(body.fecha);
  const centerPhone = typeof body.centroTelefono === "string" ? body.centroTelefono.trim().slice(0, 40) : "";
  const centerPhoneHref = centerPhone.replace(/[^0-9+]/g, "");
  const cita = tipo === "appointment-request";
  const subject = cita ? `Solicitud de cita · ${centro} · ${name}` : `Resultados de prueba auditiva · ${centro} · ${name}`;
  const centerFollowupHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:22px 0;background:#fff8e8;border:1px solid #f1d79a"><tr><td style="padding:16px 18px;color:#624b19;line-height:1.55"><strong>Siguiente paso recomendado:</strong> Guarda este contacto en tu base de datos y, respetando el consentimiento otorgado y la normativa aplicable, programa acciones de seguimiento o campañas de email relevantes. Puedes ofrecerle una revisión auditiva profesional.</td></tr></table>`;
  const centerFollowupText = "Siguiente paso recomendado: guarda este contacto en tu base de datos y, respetando el consentimiento otorgado y la normativa aplicable, programa acciones de seguimiento o campañas de email relevantes. Puedes ofrecerle una revisión auditiva profesional.";
  const appointmentMessage = typeof p.mensaje === "string" ? p.mensaje.trim().slice(0, 3000) : "";
  const more = cita
    ? `<p><strong>Teléfono:</strong> ${esc(p.telefono || "No indicado")}</p><p><strong>Canal preferido:</strong> ${esc(p.canalContacto || "No indicado")}</p><h2 style="font-size:18px;color:#102b46;margin:24px 0 8px">Mensaje</h2><div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#334155;line-height:1.65;white-space:pre-wrap">${esc(appointmentMessage || "Sin mensaje adicional.")}</div>`
    : `<h2 style="font-size:18px;color:#102b46;margin:24px 0 12px">Resultados orientativos</h2>${resultsHtml(body.resultados)}<h2 style="font-size:18px;color:#102b46;margin:24px 0 12px">Detalle de respuestas</h2>${soundBreakdownHtml(body.resultados)}${centerFollowupHtml}`;
  const patientContactHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:24px 0;background:#f0f7fb;border:1px solid #cfe3ef"><tr><td style="padding:20px"><h2 style="font-size:19px;line-height:1.4;margin:0 0 8px;color:#102b46">¿Quieres reservar una revisión?</h2><p style="margin:0 0 12px;line-height:1.6">Contacta directamente con ${esc(centro)} para resolver tus dudas y concertar una valoración auditiva profesional.</p><p style="margin:6px 0"><strong>Teléfono:</strong> ${centerPhone ? '<a href="tel:' + esc(centerPhoneHref) + '" style="color:#1769aa">' + esc(centerPhone) + '</a>' : "Consulta con el centro"}</p><p style="margin:6px 0"><strong>Email:</strong> <a href="mailto:${esc(to)}" style="color:#1769aa">${esc(to)}</a></p></td></tr></table>`;
  const resultSummaryText = [
    `Resultado global: ${pctText(body.resultados?.global?.porcentaje)} · ${body.resultados?.global?.nivel || "sin clasificar"}`,
    `Tonos detectados: ${pctText(body.resultados?.pitidos?.porcentaje)}`,
    `Comprensión en simulaciones: ${pctText(body.resultados?.simulaciones?.porcentaje)}`,
    `Discriminación de palabras: ${pctText(body.resultados?.palabras?.porcentaje)}`
  ].join("\n");
  const patientHtml = `<!doctype html><html lang="es"><body style="margin:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#102b46"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f8;padding:24px 10px"><tr><td align="center"><table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff;border:1px solid #dbe4ec"><tr><td style="padding:30px"><div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#2876a8;font-weight:bold">${esc(centro)}</div><h1 style="font-size:24px;line-height:1.3;margin:12px 0;color:#102b46">Resumen de tu prueba auditiva</h1><p>Hola, ${esc(p.nombre)}. Gracias por realizar la prueba.</p><p style="line-height:1.6">Este resultado es orientativo y no sustituye una evaluación auditiva profesional.</p><h2 style="font-size:18px;margin:22px 0 8px">Tus porcentajes</h2>${resultsHtml(body.resultados)}<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;margin:20px 0;background:#eff6ff;border:1px solid #cfe3ef"><tr><td style="padding:18px 20px"><h2 style="font-size:18px;line-height:1.4;margin:0 0 8px;color:#102b46">${esc(soundOutcome(body.resultados).title)}</h2><p style="margin:0;color:#334155;line-height:1.65">${esc(soundOutcome(body.resultados).description)}</p></td></tr></table>${patientContactHtml}<p style="margin-top:24px;color:#64748b;font-size:12px;line-height:1.5">La prueba online no constituye un diagnóstico. Si tienes dudas o notas dificultades, consulta con un profesional de audiología.</p><p style="margin-top:22px">Un saludo,<br><strong>${esc(centro)}</strong></p></td></tr></table></td></tr></table></body></html>`;
  const patientText = `Hola, ${p.nombre}. Gracias por realizar la prueba auditiva.\n\nTus porcentajes:\n${resultSummaryText}\n\n${soundOutcome(body.resultados).title}\n${soundOutcome(body.resultados).description}\n\nEste resultado es orientativo y no sustituye una evaluación profesional.\n\n¿Quieres reservar una revisión? Contacta con ${centro}.\nTeléfono: ${centerPhone || "Consulta con el centro"}\nEmail: ${to}\n\nUn saludo, ${centro}`;

  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#102b46">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f8;padding:24px 10px"><tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff;border:1px solid #dbe4ec">
        <tr><td style="padding:28px 30px 12px"><div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#2876a8;font-weight:bold">${esc(centro)}</div>
          <h1 style="font-size:24px;line-height:1.3;margin:12px 0;color:#102b46">${cita ? "Solicitud de cita" : "Resultado de prueba auditiva online"}</h1>
          <p style="font-size:15px;line-height:1.6;margin:0;color:#475569">Se ha recibido información de una prueba auditiva orientativa.</p></td></tr>
        <tr><td style="padding:12px 30px 30px"><h2 style="font-size:18px;color:#102b46;margin:8px 0 12px">Datos de contacto</h2>
          <p style="margin:5px 0"><strong>Paciente:</strong> ${esc(name)}</p><p style="margin:5px 0"><strong>Email:</strong> ${esc(patientEmail)}</p>
          <p style="margin:5px 0"><strong>Código postal:</strong> ${esc(postal || "No indicado")}</p><p style="margin:5px 0"><strong>Fecha:</strong> ${esc(date)}</p>
          ${more}<p style="margin:24px 0 0;color:#64748b;font-size:12px;line-height:1.5">Prueba orientativa; no sustituye una evaluación auditiva profesional.</p>${centerMarketingHtml}</td></tr>
      </table></td></tr></table></body></html>`;
  const text = [subject,`Paciente: ${name}`,`Email: ${patientEmail}`,`Código postal: ${postal || "No indicado"}`,`Fecha: ${date}`,
    cita ? `Teléfono: ${p.telefono || "No indicado"} · Canal: ${p.canalContacto || "No indicado"}\\n\\nMensaje:\\n${appointmentMessage || "Sin mensaje adicional."}` :
      `Resultado global: ${pctText(body.resultados?.global?.porcentaje)} (${body.resultados?.global?.nivel ?? "sin clasificar"})`,
    cita ? "" : `Porcentajes:\n${resultSummaryText}\n\nDetalle de respuestas:\n${soundBreakdownText(body.resultados)}\n\n${centerFollowupText}`,
    "La prueba es orientativa y no sustituye una evaluación profesional.", centerMarketingText].filter(Boolean).join("\n");

  const centerEmail = { from:"Hear-O <info@info.hear-o.es>", to:[to], reply_to:patientEmail, subject, html, text };
  const sendPatientCopy = !cita && body.envioResumenPaciente === true;
  const emailBatch = sendPatientCopy ? [
    centerEmail,
    { from:"Hear-O <info@info.hear-o.es>", to:[patientEmail], reply_to:to,
      subject:`Tu resumen de la prueba auditiva · ${centro}`, html:patientHtml, text:patientText }
  ] : [centerEmail];
  const submissionId = typeof body.submissionId === "string" && /^[A-Za-z0-9_-]{10,80}$/.test(body.submissionId)
    ? body.submissionId : crypto.randomUUID();
  try {
    const useBatch = sendPatientCopy;
    const sent = await fetch(useBatch ? "https://api.resend.com/emails/batch" : "https://api.resend.com/emails", {
      method:"POST",
      headers:{"Authorization":`Bearer ${apiKey}`,"Content-Type":"application/json",
        ...(useBatch ? {"Idempotency-Key":"sound-test-" + submissionId} : {})},
      body:JSON.stringify(useBatch ? emailBatch : centerEmail)
    });
    const sentBody = await sent.json().catch(()=>({}));
    if (!sent.ok) {
      console.error("Resend rejected email:",sent.status,JSON.stringify(sentBody).slice(0,400));
      return reply({error:"El servicio de correo no pudo aceptar el envío."},502,headers);
    }
    return reply({ok:true},200,headers);
  } catch (error) {
    console.error("Resend request failed:",error instanceof Error ? error.message : "unknown error");
    return reply({error:"No se pudo contactar con el servicio de correo."},502,headers);
  }
});
