const LOGO_URL = 'https://hear-o.es/images/logo-hear-o-pequeno2.png';
const NAVY = '#13243B';
const ORANGE = '#F58220';
const MUTED = '#596779';
const BORDER = '#E5EAF0';

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const asText = (value) => Array.isArray(value) ? value.filter(Boolean).join(', ') : value || '';

function shell({ preheader, eyebrow, title, content, footer = true }) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><title>${escapeHtml(title)}</title></head><body style="margin:0;padding:0;background:#F2F5F8;font-family:Arial,Helvetica,sans-serif;color:${NAVY};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F2F5F8"><tr><td align="center" style="padding:28px 12px">
    <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#FFFFFF;border-radius:14px;overflow:hidden">
      <tr><td style="background:${NAVY};padding:22px 30px;border-bottom:5px solid ${ORANGE}">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>
          <td width="50" valign="middle"><img src="${LOGO_URL}" width="42" height="30" alt="Hear-O" style="display:block;width:42px;height:30px;border:0"></td>
          <td valign="middle" style="font-size:20px;font-weight:700;letter-spacing:-.3px;color:#FFFFFF">Hear-O</td>
          <td align="right" valign="middle" style="font-size:10px;line-height:1.4;font-weight:700;letter-spacing:1px;color:#F9A45B">${escapeHtml(eyebrow.toUpperCase())}</td>
        </tr></table>
      </td></tr>
      <tr><td style="padding:30px 32px 28px">${content}</td></tr>
      ${footer ? `<tr><td style="padding:18px 32px;background:#F7F9FB;border-top:1px solid ${BORDER};font-size:12px;line-height:1.6;color:${MUTED}">Hear-O · Más oportunidades para los centros auditivos<br><a href="mailto:info@hear-o.es" style="color:${NAVY};text-decoration:none">info@hear-o.es</a> &nbsp;·&nbsp; <a href="https://hear-o.es" style="color:${NAVY};text-decoration:none">hear-o.es</a></td></tr>` : ''}
    </table>
  </td></tr></table></body></html>`;
}

function priorityCards(actions = []) {
  return actions.slice(0, 2).map((action, index) => `<tr><td style="padding:${index ? '10px 0 0' : '0'}">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F7F9FB;border:1px solid ${BORDER};border-left:4px solid ${ORANGE};border-radius:8px"><tr><td style="padding:14px 16px">
      <div style="font-size:10px;line-height:1.4;font-weight:700;letter-spacing:.7px;color:${ORANGE};text-transform:uppercase">${escapeHtml(Number.isInteger(action.priority) ? `Prioridad ${action.priority}` : `Punto ${index + 1}`)}</div>
      <div style="padding-top:5px;font-size:15px;line-height:1.4;font-weight:700;color:${NAVY}">${escapeHtml(action.title)}</div>
      ${action.firstStep ? `<div style="padding-top:6px;font-size:13px;line-height:1.55;color:${MUTED}">${escapeHtml(action.firstStep)}</div>` : ''}
    </td></tr></table>
  </td></tr>`).join('');
}

function buildCustomerEmail({ leadName, centerName, town, report }) {
  const firstName = escapeHtml((leadName || '').trim().split(/\s+/)[0] || 'hola');
  const center = escapeHtml(centerName || 'tu centro auditivo');
  const locality = town ? ` · ${escapeHtml(town)}` : '';
  const actions = Array.isArray(report?.actions) ? report.actions.slice(0, 2) : [];
  const priorities = priorityCards(actions);
  const content = `<div style="font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1px;color:${ORANGE};text-transform:uppercase">Tu auditoría está lista</div>
    <h1 style="margin:8px 0 0;font-size:25px;line-height:1.25;color:${NAVY}">Hola ${firstName},</h1>
    <p style="margin:14px 0 0;font-size:15px;line-height:1.65;color:${MUTED}">Hemos preparado el diagnóstico de <strong style="color:${NAVY}">${center}${locality}</strong>. Encontrarás el informe completo adjunto en PDF.</p>
    <p style="margin:12px 0 22px;font-size:15px;line-height:1.65;color:${MUTED}">Hemos ordenado las oportunidades principales y propuesto pasos concretos para mejorar la visibilidad, la captación y la atención audiológica de tu centro.</p>
    ${priorities.length ? `<h2 style="margin:0 0 12px;font-size:16px;line-height:1.4;color:${NAVY}">Dos puntos para empezar a revisar</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${priorities}</table>` : ''}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:22px;background:#FFF7EF;border-radius:8px"><tr><td style="padding:14px 16px;font-size:13px;line-height:1.6;color:${NAVY}"><strong>El informe completo va adjunto.</strong> Incluye el diagnóstico, las recomendaciones detalladas y una hoja de ruta para ponerlas en marcha.</td></tr></table>
    <p style="margin:20px 0 0;font-size:14px;line-height:1.65;color:${MUTED}">La auditoría es una orientación basada en la información que nos has facilitado y en los datos públicos que hemos podido consultar. Si quieres comentar el resultado o valorar un análisis más específico, estaremos encantados de ayudarte.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:20px;background:${NAVY};border-radius:9px"><tr><td style="padding:18px 18px 16px">
      <div style="font-size:16px;line-height:1.4;font-weight:700;color:#FFFFFF">¿Lo ponemos en marcha juntos?</div>
      <div style="padding-top:6px;font-size:13px;line-height:1.6;color:#E7EDF3">Si quieres que comentemos el diagnóstico o empezar a implantar las mejoras, escríbenos y vemos contigo el siguiente paso.</div>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:14px"><tr>
        <td bgcolor="${ORANGE}" style="border-radius:5px"><a href="mailto:info@hear-o.es?subject=${encodeURIComponent(`Hablemos de la auditoría de ${centerName || 'mi centro'}`)}" style="display:inline-block;padding:11px 15px;color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none">Hablemos de tu auditoría</a></td>
        <td width="10">&nbsp;</td>
        <td style="border:1px solid #8B9AAF;border-radius:5px"><a href="https://hear-o.es" style="display:inline-block;padding:10px 14px;color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none">Visita hear-o.es</a></td>
      </tr></table>
    </td></tr></table>
    <p style="margin:22px 0 0;font-size:14px;line-height:1.6;color:${NAVY}">Un saludo,<br><strong>El equipo de Hear-O</strong></p>`;
  return {
    subject: `Tu auditoría de marketing para ${centerName || 'tu centro'} está lista`,
    html: shell({ preheader: `Ya está listo el diagnóstico de ${centerName || 'tu centro auditivo'}. El informe completo va adjunto.`, eyebrow: 'Auditoría de centros auditivos', title: 'Tu auditoría está lista', content }),
  };
}

function detailRow(label, value) {
  if (!value) return '';
  return `<tr><td valign="top" style="width:150px;padding:9px 12px 9px 0;border-bottom:1px solid ${BORDER};font-size:12px;line-height:1.5;font-weight:700;color:${NAVY}">${escapeHtml(label)}</td><td valign="top" style="padding:9px 0;border-bottom:1px solid ${BORDER};font-size:13px;line-height:1.5;color:${MUTED}">${escapeHtml(asText(value))}</td></tr>`;
}

function buildInternalEmail({ leadName, leadEmail, centerName, answers, report, recordId }) {
  const center = escapeHtml(centerName || 'Centro sin nombre');
  const location = [answers?.town, answers?.province, answers?.postalCode ? `CP ${answers.postalCode}` : ''].filter(Boolean).join(' · ');
  const concern = asText(answers?.painDetails || answers?.pain);
  const actionRows = (report?.actions || []).slice(0, 3).map((action, index) => `<tr><td style="padding:${index ? '10px 0 0' : '0'}"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F7F9FB;border:1px solid ${BORDER};border-left:4px solid ${ORANGE};border-radius:7px"><tr><td style="padding:12px 14px"><div style="font-size:10px;font-weight:700;letter-spacing:.5px;color:${ORANGE};text-transform:uppercase">Prioridad ${escapeHtml(action.priority ?? index + 1)}</div><div style="padding-top:4px;font-size:14px;line-height:1.4;font-weight:700;color:${NAVY}">${escapeHtml(action.title)}</div></td></tr></table></td></tr>`).join('');
  const details = [
    detailRow('Contacto', leadName),
    detailRow('Email', leadEmail),
    detailRow('Centro', centerName),
    detailRow('Tipo de centro', answers?.centerType),
    detailRow('Localidad', location),
    detailRow('Web', answers?.website),
    detailRow('Principal preocupación', concern),
    detailRow('Captación actual', answers?.sources),
    detailRow('Frecuencia de marketing', answers?.marketingFrequency),
  ].join('');
  const content = `<div style="font-size:11px;line-height:1.4;font-weight:700;letter-spacing:1px;color:${ORANGE};text-transform:uppercase">Nuevo lead · Auditor-IA</div>
    <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;color:${NAVY}">${center}</h1>
    <p style="margin:10px 0 20px;font-size:14px;line-height:1.6;color:${MUTED}">Se ha generado un informe de auditoría. El PDF y las respuestas completas en JSON están adjuntos.</p>
    <h2 style="margin:0 0 8px;font-size:15px;color:${NAVY}">Datos de contacto y contexto</h2>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${details}</table>
    ${actionRows ? `<h2 style="margin:22px 0 10px;font-size:15px;color:${NAVY}">Oportunidades principales detectadas</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${actionRows}</table>` : ''}
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:22px"><tr><td align="center" bgcolor="${ORANGE}" style="border-radius:6px"><a href="mailto:${escapeHtml(leadEmail || '')}?subject=${encodeURIComponent(`Sobre la auditoría de ${centerName || 'tu centro'}`)}" style="display:inline-block;padding:11px 17px;color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none">Contactar con el centro</a></td></tr></table>
    <p style="margin:18px 0 0;font-size:11px;color:${MUTED}">Referencia del informe: ${escapeHtml(recordId)}</p>`;
  return {
    subject: `Nuevo Auditor-IA · ${centerName || leadName}`,
    html: shell({ preheader: `Nuevo informe generado para ${centerName || 'un centro auditivo'}. PDF y datos adjuntos.`, eyebrow: 'Aviso interno', title: `Nuevo lead · ${centerName || leadName}`, content }),
  };
}

module.exports = { buildCustomerEmail, buildInternalEmail };
