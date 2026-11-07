const PDFDocument = require('pdfkit');

const NAVY = '#13243B';
const ORANGE = '#F58220';
const MUTED = '#536174';

function generateReportPdf(report) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margins: { top: 42, right: 52, bottom: 48, left: 52 }, info: { Title: `Auditoría ${report.center.name || 'Centro auditivo'} · Hear-O`, Author: 'Hear-O' } });
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);
    const heading = (number, title, subtitle = '') => {
      doc.moveDown(0.65).fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(number, { characterSpacing: 0.8 });
      doc.moveDown(0.2).fillColor(NAVY).font('Helvetica-Bold').fontSize(18).text(title, { lineGap: 3 });
      if (subtitle) doc.moveDown(0.2).fillColor(MUTED).font('Helvetica').fontSize(10).text(subtitle, { lineGap: 3 });
      doc.moveDown(0.45);
    };
    const paragraph = (value, size = 10.5) => {
      if (value) doc.fillColor(MUTED).font('Helvetica').fontSize(size).text(String(value), { lineGap: 4, paragraphGap: 4 });
      doc.moveDown(0.35);
    };
    const bullet = (value) => {
      if (value) doc.fillColor(MUTED).font('Helvetica').fontSize(10).text(`- ${value}`, { indent: 8, hanging: 4, lineGap: 3, paragraphGap: 2 });
    };
    const line = () => doc.moveDown(0.4);

    doc.rect(0, 0, 595.28, 160).fill(NAVY);
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(22).text('hear-o', 52, 32);
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(21).text(`Auditoría ${report.center.name || 'Centro auditivo'}`, 52, 73, { width: 480 });
    doc.fillColor('#E7EDF3').font('Helvetica').fontSize(11).text('Marketing, captación y conversión en audiología', 52, 106);
    const location = [report.center.town, report.center.province].filter(Boolean).join(', ');
    doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(9).text([location, report.center.postalCode ? `CP ${report.center.postalCode}` : '', `Preparado para ${report.leadName || 'el equipo'}`, new Date(report.generatedAt).toLocaleDateString('es-ES')].filter(Boolean).join('  ·  '), 52, 133, { width: 490 });
    doc.y = 178;

    heading('01 · LECTURA INICIAL', 'Qué está ocurriendo');
    paragraph(report.executiveSummary, 11);
    if (report.painRead) paragraph(`La preocupación principal: ${report.painRead}`, 10);

    heading('02 · TU ENTORNO', 'Mercado potencial y competencia');
    paragraph(report.localContext?.summary);
    if (report.localContext?.marketScope) paragraph(`Ámbito considerado: ${report.localContext.marketScope}`, 9.5);
    if (report.localContext?.populationEstimate) paragraph(report.localContext.populationEstimate, 9.5);
    if (report.localContext?.populationSource) paragraph(`Población consultada: ${report.localContext.populationSource}`, 8.5);
    if (report.localContext?.competitors?.length) {
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text('Centros auditivos visibles en la zona');
      doc.moveDown(0.25);
      report.localContext.competitors.forEach((item) => {
        doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(10).text(item.name);
        paragraph(item.observation, 9.5);
        if (item.url) paragraph(item.url, 8);
      });
    } else paragraph('La búsqueda no ha permitido confirmar centros competidores concretos; conviene validar la zona antes de definir la estrategia local.', 9.5);

    heading('03 · DIAGNÓSTICO', 'Problemas y oportunidades detectadas');
    (report.areas || []).forEach((area, index) => {
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(`DIAGNÓSTICO 0${index + 1}`);
      doc.moveDown(0.15).fillColor(NAVY).font('Helvetica-Bold').fontSize(12).text(`${area.name} · ${area.status}`);
      paragraph(area.summary, 10);
      line();
    });

    heading('04 · PLAN DE ACCIÓN', 'Soluciones propuestas y priorizadas');
    paragraph('Estas acciones convierten el diagnóstico en pasos concretos para mejorar la captación, la conversión y la continuidad de la atención.');
    (report.actions || []).forEach((action, index) => {
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(`PRIORIDAD 0${index + 1}`);
      doc.moveDown(0.15).fillColor(NAVY).font('Helvetica-Bold').fontSize(13).text(action.title);
      paragraph(action.why, 10);
      (action.steps || []).forEach(bullet);
      doc.moveDown(0.3);
      paragraph(`Responsable: ${action.owner}  ·  Plazo: ${action.timeframe}  ·  Indicador: ${action.measure}`, 9);
      const offer = (report.hearO || []).find((item) => action.hearOSolution && item.solution.toLowerCase().includes(action.hearOSolution.toLowerCase()));
      if (offer) {
        if (doc.y > 690) doc.addPage();
        doc.roundedRect(58, doc.y, 485, 56, 8).fill('#F2F6F8');
        const y = doc.y + 9;
        doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(10).text(`Hear-O puede ayudarte: ${offer.solution}`, 70, y, { width: 455 });
        doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text(offer.fit, 70, y + 15, { width: 455 });
        if (offer.price) doc.fillColor(MUTED).font('Helvetica-Bold').fontSize(8.5).text(offer.price, 70, y + 31, { width: 455 });
        if (offer.url) doc.fillColor(ORANGE).font('Helvetica').fontSize(8).text(offer.url, 70, y + 43, { width: 455 });
        doc.y += 66;
      }
      line();
    });

    heading('05 · HOJA DE RUTA', 'Por dónde empezar');
    paragraph('No hace falta resolver todo a la vez. Este orden permite avanzar por fases y revisar qué está dando resultado.');
    (report.nextSteps || []).forEach((step, index) => {
      doc.fillColor(ORANGE).font('Helvetica-Bold').fontSize(9).text(`FASE 0${index + 1}`);
      paragraph(step, 10);
    });
    if (report.limitations?.length) {
      heading('ALCANCE', 'Datos que conviene confirmar');
      report.limitations.forEach(bullet);
    }
    if (report.sources?.length) {
      heading('FUENTES', 'Información consultada');
      report.sources.forEach((source) => { doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9).text(source.title); paragraph(source.use, 8.5); paragraph(source.url, 8); });
    }
    doc.moveDown(0.5).fillColor(ORANGE).font('Helvetica-Bold').fontSize(10).text('HEAR-O · Más oportunidades para los centros auditivos');
    doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text('La estimación de mercado es orientativa y no equivale a un diagnóstico ni a una previsión de clientes. Las recomendaciones se basan en las respuestas y fuentes indicadas.');
    doc.end();
  });
}

module.exports = { generateReportPdf };
