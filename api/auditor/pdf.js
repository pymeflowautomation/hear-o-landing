const PDFDocument = require('pdfkit');
const path = require('path');

const NAVY = '#13243B';
const ORANGE = '#F58220';
const MUTED = '#536174';
const PALE = '#F4F7F9';
const GREEN = '#1B7A66';
const CONTACT = 'info@hear-o.es  ·  hear-o.es';
const OFFER_PRICES = {
  'Prueba Auditiva Online': '390 € · pago único · promoción especial',
  'Anamnesis Digital': '490 € · pago único · promoción especial',
  'Marketing Studio': '75 €/mes',
  'Web Hear-O': 'Desde 500 € · desde 750 € con Prueba Auditiva Online',
};

const catalogue = [
  { name: 'Marketing Studio', text: 'Más de 20 campañas de email y SMS, segmentación de contactos y publicaciones automáticas para blog y redes. Una vez configurado, permite gestionar los contenidos en aproximadamente una hora al mes.', price: '75 €/mes', url: 'https://hear-o.es/marketing-automatico-centros-auditivos' },
  { name: 'Asistente IA de Anamnesis', text: 'Guía la anamnesis, registra pruebas e historial y prepara un informe con recomendación de gama y argumentario adaptado al paciente.', url: 'https://hear-o.es/software-anamnesis-vender-mas-audifonos' },
  { name: 'Agenda Inteligente', text: 'Centraliza las citas y automatiza confirmaciones y recordatorios para reducir ausencias y facilitar el seguimiento de cada paciente.', url: 'https://hear-o.es/crm-calendario-centros-auditivos' },
  { name: 'Expertos IA Audiología', text: 'Apoyo al equipo ante dudas técnicas y audiológicas para consultar criterios y avanzar con más seguridad durante la atención.', url: 'https://hear-o.es/expertos-ia-audiologia' },
  { name: 'Prueba Auditiva Online', text: 'Una prueba auditiva completa y online para captar pacientes desde redes, publicidad, la web o desde la propia óptica y dar un siguiente paso con el equipo.', price: '390 € · pago único · promoción especial', url: 'https://hear-o.es/prueba_auditica_online_para_centros_auditivos/' },
  { name: 'Anamnesis Digital', text: 'Apoyo visual para que el paciente complete la anamnesis desde casa o en el centro. El equipo recibe la información antes de atenderle y puede preparar mejor la consulta.', price: '490 € · pago único · promoción especial', url: 'https://hear-o.es/anamnesis_digital_online_para_centros_auditivos' },
  { name: 'Creación de Web Audiológica', text: 'Web propia para presentar óptica y audiología, trabajar búsquedas locales y facilitar que los pacientes contacten o pidan cita.', price: 'Desde 500 € · desde 750 € con Prueba Auditiva Online', url: 'mailto:info@hear-o.es?subject=Informaci%C3%B3n%20sobre%20Web%20Audiol%C3%B3gica' },
];

function generateReportPdf(report) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margins: { top: 58, right: 52, bottom: 64, left: 52 }, info: { Title: `Auditoría ${report.center.name || 'Centro auditivo'} · Hear-O`, Author: 'Hear-O' } });
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const logo = path.join(__dirname, '../../public/images/logo-hear-o-pequeno2.png');
    const pageWidth = () => doc.page.width;
    const contentWidth = () => pageWidth() - doc.page.margins.left - doc.page.margins.right;
    const ensureSpace = (height) => { if (doc.y + height > doc.page.height - doc.page.margins.bottom) doc.addPage(); };
    const drawRunningHeaderFooter = () => {
      const oldY = doc.y;
      doc.save();
      try { doc.image(logo, 52, 15, { fit: [23, 23] }); } catch { /* Keep the text lockup if the brand image is unavailable. */ }
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('Hear-O', 80, 23, { lineBreak: false });
      doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text(`Auditoría · ${report.center.name || 'Centro auditivo'}`, 165, 23, { width: 220, lineBreak: false });
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(7.4).text('MARKETING · CAPTACIÓN · CONVERSIÓN', 390, 24, { width: 153, align: 'right', lineBreak: false });
      doc.moveTo(52, 48).lineTo(pageWidth() - 52, 48).lineWidth(0.6).strokeColor('#DDE5EA').stroke();
      const footerY = doc.page.height - 39;
      doc.moveTo(52, footerY - 9).lineTo(pageWidth() - 52, footerY - 9).lineWidth(0.6).strokeColor('#DDE5EA').stroke();
      // El pie está fuera del área de texto; evitar que PDFKit cree otra página al dibujarlo.
      const bottomMargin = doc.page.margins.bottom;
      doc.page.margins.bottom = 0;
      doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text(CONTACT, 52, footerY, { width: 280, lineBreak: false });
      doc.fillColor(MUTED).font('Helvetica').fontSize(8).text('Auditoría orientativa · Hear-O', 350, footerY, { width: 193, align: 'right', lineBreak: false });
      doc.page.margins.bottom = bottomMargin;
      doc.restore();
      // Las columnas del encabezado son absolutas; el cuerpo siempre vuelve al margen izquierdo.
      doc.x = doc.page.margins.left;
      doc.y = Math.max(oldY, doc.page.margins.top + 4);
    };
    doc.on('pageAdded', drawRunningHeaderFooter);

    const heading = (number, title, minimumSpace = 100) => {
      ensureSpace(minimumSpace);
      doc.x = doc.page.margins.left;
      doc.moveDown(0.5).fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(number, { characterSpacing: 0.8 });
      doc.moveDown(0.2).fillColor(NAVY).font('Helvetica-Bold').fontSize(18).text(title, { lineGap: 3 });
      doc.moveDown(0.45);
    };
    const paragraph = (value, size = 10.5, color = MUTED) => {
      if (value) {
        doc.x = doc.page.margins.left;
        doc.fillColor(color).font('Helvetica').fontSize(size).text(String(value), { lineGap: 4, paragraphGap: 4 });
      }
      doc.moveDown(0.3);
    };
    const bullet = (value) => {
      if (value) {
        doc.x = doc.page.margins.left;
        doc.fillColor(MUTED).font('Helvetica').fontSize(10).text(`•  ${value}`, { indent: 8, hanging: 4, lineGap: 3, paragraphGap: 2 });
      }
    };
    const line = () => doc.moveDown(0.35);

    // Portada: lockup y contenido a la izquierda; localidad y destinatario alineados a la derecha.
    doc.rect(0, 0, pageWidth(), 166).fill(NAVY);
    try { doc.image(logo, 52, 25, { fit: [46, 46] }); } catch { /* Keep the wordmark readable without the image. */ }
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(22).text('Hear-O', 108, 34, { lineBreak: false });
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(21).text(`Auditoría ${report.center.name || 'Centro auditivo'}`, 52, 78, { width: 300, height: 27, ellipsis: true });
    doc.fillColor('#E7EDF3').font('Helvetica').fontSize(10.5).text('Marketing, captación y conversión en audiología', 52, 112, { width: 300 });
    const locality = [report.center.town, report.center.province].filter(Boolean).join(', ');
    const rightX = 350;
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(9).text([locality, report.center.postalCode ? `CP ${report.center.postalCode}` : ''].filter(Boolean).join('  ·  '), rightX, 105, { width: 193, align: 'right' });
    doc.fillColor('#E7EDF3').font('Helvetica').fontSize(8.7).text(`Preparado para ${report.leadName || 'el equipo'}  ·  ${new Date(report.generatedAt).toLocaleDateString('es-ES')}`, rightX, 127, { width: 193, align: 'right' });
    doc.y = 182;
    drawRunningHeaderFooter.call(doc);
    // Restore the cover's dark top band after the running header pass.
    doc.rect(0, 0, pageWidth(), 166).fill(NAVY);
    try { doc.image(logo, 52, 25, { fit: [46, 46] }); } catch { /* Keep the wordmark readable without the image. */ }
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(22).text('Hear-O', 108, 34, { lineBreak: false });
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(21).text(`Auditoría ${report.center.name || 'Centro auditivo'}`, 52, 78, { width: 300, height: 27, ellipsis: true });
    doc.fillColor('#E7EDF3').font('Helvetica').fontSize(10.5).text('Marketing, captación y conversión en audiología', 52, 112, { width: 300 });
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(9).text([locality, report.center.postalCode ? `CP ${report.center.postalCode}` : ''].filter(Boolean).join('  ·  '), rightX, 105, { width: 193, align: 'right' });
    doc.fillColor('#E7EDF3').font('Helvetica').fontSize(8.7).text(`Preparado para ${report.leadName || 'el equipo'}  ·  ${new Date(report.generatedAt).toLocaleDateString('es-ES')}`, rightX, 127, { width: 193, align: 'right' });
    doc.y = 182;
    doc.x = doc.page.margins.left;

    heading('01 · LECTURA INICIAL', 'Qué está ocurriendo');
    paragraph(report.executiveSummary, 11);

    heading('02 · TU ENTORNO', 'Mercado potencial y competencia', 190);
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text('Mercado potencial');
    paragraph(report.localContext?.marketSummary);
    if (report.localContext?.populationBase > 0) {
      const x = doc.page.margins.left;
      const y = doc.y + 2;
      const w = contentWidth();
      const estimatedPeople = Math.round(report.localContext.populationBase * 0.1).toLocaleString('es-ES');
      const town = report.center.town || 'esta localidad';
      doc.roundedRect(x, y, w, 100, 10).fillAndStroke('#F3F6F8', '#DDE5EA');
      doc.roundedRect(x, y, 6, 100, 3).fill(ORANGE);
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(10).text('MERCADO DE PACIENTES POTENCIALES', x + 18, y + 12, { width: w - 36 });
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(25).text(`${estimatedPeople} personas`, x + 18, y + 30, { width: w - 36 });
      doc.fillColor(NAVY).font('Helvetica').fontSize(10).text(`En ${town} podrían tener problemas de audición.`, x + 18, y + 62, { width: w - 36 });
      doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text('Estimación orientativa: 10 % de la población, según la referencia estadística de la OMS.', x + 18, y + 80, { width: w - 36 });
      doc.y = y + 110;
      if (report.localContext?.populationSource) paragraph(`Población de referencia: ${report.localContext.populationSource}`, 8.5);
      paragraph('Hay mercado potencial suficiente para trabajar la captación. La cifra no confirma pacientes ni ventas: señala que, si llegan pocas visitas, toca revisar cómo el centro se hace visible y alcanza a esas personas.', 9.5);
    }
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text('Competencia local');
    paragraph(report.localContext?.competitionSummary);

    heading('03 · DIAGNÓSTICO', 'Problemas y oportunidades detectadas', 230);
    (report.areas || []).forEach((area, index) => {
      ensureSpace(145);
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(`DIAGNÓSTICO 0${index + 1}`);
      doc.moveDown(0.15).fillColor(NAVY).font('Helvetica-Bold').fontSize(12).text(`${area.name} · ${area.status}`);
      paragraph(area.cause, 10);
      paragraph(area.benefit, 10);
      line();
    });

    heading('04 · PLAN DE ACCIÓN', 'Soluciones propuestas y priorizadas', 230);
    paragraph('Las prioridades indican importancia y no un orden rígido. Varias acciones pueden compartir el mismo nivel y ponerse en marcha en paralelo.');
    (report.actions || []).forEach((action, index) => {
      ensureSpace(175);
      const label = Number.isInteger(action.priority) ? `PRIORIDAD ${action.priority} · SOLUCIÓN ${String(index + 1).padStart(2, '0')}` : `SOLUCIÓN ${String(index + 1).padStart(2, '0')}`;
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(label);
      doc.moveDown(0.15).fillColor(NAVY).font('Helvetica-Bold').fontSize(13).text(action.title);
      paragraph(action.why, 10);
      (action.steps || []).forEach(bullet);
      doc.moveDown(0.25);
      paragraph(`Plazo orientativo: ${action.timeframe}`, 9);
      (action.offers || []).forEach((offer) => {
        const boxX = doc.page.margins.left;
        const boxW = contentWidth();
        ensureSpace(112);
        const y = doc.y + 3;
        doc.roundedRect(boxX, y, boxW, 121, 9).fillAndStroke(NAVY, NAVY);
        doc.rect(boxX + 1, y + 12, 5, 97).fill(ORANGE);
        try { doc.image(logo, boxX + 16, y + 12, { fit: [27, 27] }); } catch { /* Keep the solution title if the logo is unavailable. */ }
        doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(10.2).text(`Una forma más fácil con Soluciones Hear-O: ${offer.solution}`, boxX + 50, y + 14, { width: boxW - 64, height: 26, ellipsis: true });
        doc.fillColor('#E7EDF3').font('Helvetica').fontSize(9).text(offer.fit, boxX + 16, y + 47, { width: boxW - 32, height: 41, ellipsis: true });
        const offerPrice = offer.price || OFFER_PRICES[offer.solution];
        if (offerPrice) doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8.5).text(offerPrice, boxX + 16, y + 96, { width: 260, height: 16, ellipsis: true });
        const offerUrl = offer.solution === 'Web Hear-O' ? 'mailto:info@hear-o.es?subject=Informaci%C3%B3n%20sobre%20Web%20Audiol%C3%B3gica' : offer.url;
        const buttonX = boxX + boxW - 190;
        doc.roundedRect(buttonX, y + 92, 174, 23, 5).fill(ORANGE);
        doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8.5).text(offer.solution === 'Web Hear-O' ? 'Solicitar propuesta web' : 'Conocer la solución', buttonX + 5, y + 99, { width: 164, align: 'center', link: offerUrl || undefined });
        doc.y = y + 132;
        doc.x = doc.page.margins.left;
      });
      line();
    });

    // Mantener todas las fases juntas en una página, cada una en su propia fila.
    doc.addPage({ margins: { top: 58, right: 52, bottom: 64, left: 52 } });
    heading('05 · HOJA DE RUTA', 'Por dónde empezar', 230);
    paragraph('Las fases ordenan la puesta en marcha según dependencias prácticas; no rebajan la importancia de ninguna prioridad.');
    const steps = report.nextSteps || [];
    if (steps.length) {
      steps.forEach((step, index) => {
        const detail = String(step).trim();
        const textWidth = contentWidth() - 62;
        doc.font('Helvetica').fontSize(9.5);
        const detailHeight = doc.heightOfString(detail, { width: textWidth, lineGap: 3 });
        const rowHeight = Math.max(58, 13 + 12 + 4 + detailHeight + 10);
        ensureSpace(rowHeight + 8);
        const x = doc.page.margins.left;
        const y = doc.y + 3;
        const w = contentWidth();
        doc.roundedRect(x, y, w, rowHeight, 8).fillAndStroke(PALE, '#E1E8ED');
        doc.circle(x + 22, y + 22, 12).fill(ORANGE);
        doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(9).text(String(index + 1), x + 18, y + 18, { width: 8, align: 'center' });
        doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9).text(`FASE 0${index + 1}`, x + 44, y + 11, { width: w - 56, height: 13 });
        doc.fillColor(MUTED).font('Helvetica').fontSize(9.5).text(detail, x + 44, y + 28, { width: textWidth, lineGap: 3 });
        doc.y = y + rowHeight + 8;
        doc.x = doc.page.margins.left;
      });
    }
    doc.moveDown(0.5).fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text(`${report.center.name || 'Tu centro'} tiene margen para crecer en audiología. Hear-O puede ayudarte a convertir estas prioridades en un plan adaptado a tu realidad.`);
    paragraph('Este informe es una orientación basada en tus respuestas y en información pública disponible. Las proyecciones de población no equivalen a diagnósticos ni a una previsión de clientes. Si quieres un análisis personalizado, contacta con Hear-O.', 9);

    // Catálogo de soluciones: última página con tarjetas enlazadas.
    doc.addPage({ margins: { top: 58, right: 52, bottom: 64, left: 52 } });
    heading('HEAR-O · SOLUCIONES', 'Herramientas para ponerlo en marcha', 100);
    paragraph('Conoce las soluciones que ayudan a los centros ópticos y auditivos a captar, organizar y atender mejor a sus pacientes.', 10);
    const cardW = (contentWidth() - 14) / 2;
    const cardH = 132;
    const colGap = 14;
    const rowGap = 11;
    const cardsStartY = doc.y + 5;
    catalogue.forEach((product, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = doc.page.margins.left + col * (cardW + colGap);
      const cardY = cardsStartY + row * (cardH + rowGap);
      doc.roundedRect(x, cardY, cardW, cardH, 9).fillAndStroke(NAVY, NAVY);
      doc.rect(x + 1, cardY + 10, 4, cardH - 20).fill(ORANGE);
      try { doc.image(logo, x + 11, cardY + 10, { fit: [24, 24] }); } catch { /* The solution remains identifiable by its name. */ }
      doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(9.2).text(product.name, x + 40, cardY + 15, { width: cardW - 52, height: 22, ellipsis: true });
      doc.fillColor('#E7EDF3').font('Helvetica').fontSize(8.1).text(product.text, x + 12, cardY + 42, { width: cardW - 24, height: 43, ellipsis: true });
      const productPrice = product.price || OFFER_PRICES[product.name];
      if (productPrice) doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(7.3).text(productPrice, x + 12, cardY + 87, { width: cardW - 24, height: 16, ellipsis: true });
      doc.roundedRect(x + 12, cardY + 106, cardW - 24, 18, 4).fill(ORANGE);
      doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8).text(product.name === 'Creación de Web Audiológica' ? 'Solicitar propuesta por email' : 'Conocer la solución', x + 17, cardY + 111, { width: cardW - 34, align: 'center', link: product.url });
    });
    doc.end();
  });
}

module.exports = { generateReportPdf };
