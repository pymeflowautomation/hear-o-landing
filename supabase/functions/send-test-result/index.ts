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

  const tipo = body?.tipo;
  const centro = typeof body?.centro === "string" ? body.centro.trim().slice(0,120) : "";
  const to = typeof body?.destinatario === "string" ? body.destinatario.trim().toLowerCase() : "";
  const p = body?.paciente;
  if (!["test-result","appointment-request"].includes(tipo) || !centro || !emailOk(to) || !allowed.includes(to) ||
      !p || typeof p !== "object" || typeof p.nombre !== "string" || typeof p.apellidos !== "string" || !emailOk(p.email)) {
    return reply({error:"Faltan datos o el destinatario no está autorizado."},400,headers);
  }

  const name = `${p.nombre.trim().slice(0,100)} ${p.apellidos.trim().slice(0,120)}`.trim();
  const patientEmail = p.email.trim().slice(0,254);
  const postal = typeof p.codigoPostal === "string" ? p.codigoPostal.slice(0,20) : "";
  const date = typeof body.fecha === "string" ? body.fecha.slice(0,40) : new Date().toISOString();
  const cita = tipo === "appointment-request";
  const subject = cita ? `Solicitud de cita · ${centro} · ${name}` : `Resultados de prueba auditiva · ${centro} · ${name}`;
  const more = cita
    ? `<p><strong>Teléfono:</strong> ${esc(p.telefono || "No indicado")}</p><p><strong>Canal preferido:</strong> ${esc(p.canalContacto || "No indicado")}</p>`
    : `<h2 style="font-size:18px;color:#102b46;margin:24px 0 12px">Resultados orientativos</h2>${resultsHtml(body.resultados)}`;
  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;color:#102b46">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f8;padding:24px 10px"><tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#fff;border:1px solid #dbe4ec">
        <tr><td style="padding:28px 30px 12px"><div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#2876a8;font-weight:bold">${esc(centro)}</div>
          <h1 style="font-size:24px;line-height:1.3;margin:12px 0;color:#102b46">${cita ? "Solicitud de cita" : "Resultado de prueba auditiva online"}</h1>
          <p style="font-size:15px;line-height:1.6;margin:0;color:#475569">Se ha recibido información de una prueba auditiva orientativa.</p></td></tr>
        <tr><td style="padding:12px 30px 30px"><h2 style="font-size:18px;color:#102b46;margin:8px 0 12px">Datos de contacto</h2>
          <p style="margin:5px 0"><strong>Paciente:</strong> ${esc(name)}</p><p style="margin:5px 0"><strong>Email:</strong> ${esc(patientEmail)}</p>
          <p style="margin:5px 0"><strong>Código postal:</strong> ${esc(postal || "No indicado")}</p><p style="margin:5px 0"><strong>Fecha:</strong> ${esc(date)}</p>
          ${more}<p style="margin:24px 0 0;color:#64748b;font-size:12px;line-height:1.5">Prueba orientativa; no sustituye una evaluación auditiva profesional.</p></td></tr>
      </table></td></tr></table></body></html>`;
  const text = [subject,`Paciente: ${name}`,`Email: ${patientEmail}`,`Código postal: ${postal || "No indicado"}`,`Fecha: ${date}`,
    cita ? `Teléfono: ${p.telefono || "No indicado"} · Canal: ${p.canalContacto || "No indicado"}` : `Resultado global: ${body.resultados?.global?.porcentaje ?? "—"}% (${body.resultados?.global?.nivel ?? "sin clasificar"})`,
    "La prueba es orientativa y no sustituye una evaluación profesional."].join("\n");

  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method:"POST", headers:{"Authorization":`Bearer ${apiKey}`,"Content-Type":"application/json"},
      body:JSON.stringify({from:"Hear-O <info@info.hear-o.es>",to:[to],reply_to:patientEmail,subject,html,text})
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
