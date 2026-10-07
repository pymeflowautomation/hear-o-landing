# 🎧 Lead Magnet Auditivo

Landing page completa para captación de pacientes en centros auditivos. Incluye test auditivo online con pitidos, simulaciones de situaciones reales y discriminación de palabras ambiguas.

## ✨ Características

- **Test de Pitidos**: 4 frecuencias (500, 1000, 2000, 4000 Hz) para cada oído
- **Simulaciones**: Llamada telefónica, conversación en cafetería y al aire libre
- **Palabras Ambiguas**: Test de discriminación fonémica (casa/caza, rana/rama, etc.)
- **Auto-Test Tally**: Integración con Tally Forms para cuestionario rápido
- **Webhook para Make**: Envío automático de resultados
- **Diseño Responsive**: Adaptable a móvil, tablet y desktop
- **100% Personalizable**: Solo modifica `config.js`

## 📁 Estructura

```
leadmagnet-audiologia/
├── index.html          # Landing principal
├── styles.css          # Estilos CSS
├── app.js             # Lógica JavaScript
├── config.js          # ⚙️ CONFIGURACIÓN CENTRALIZADA
├── assets/
│   └── audios/        # Archivos de audio (opcional)
└── README.md          # Este archivo
```

## 🚀 Instalación

1. **Descargar** todos los archivos
2. **Subir** a tu servidor web o hosting estático (Netlify, Vercel, etc.)
3. **Configurar** el archivo `config.js` con tus datos
4. **Listo** 🎉

## ⚙️ Configuración

Edita el archivo `config.js` con la información de tu centro:

### Datos del Centro

```javascript
centro: {
  nombre: "Tu Centro Auditivo",
  direccion: "Calle Principal, 123",
  ciudad: "Madrid",
  codigoPostal: "28001",
  telefono: "+34 900 123 456",
  email: "info@tucentro.es",
  urlWeb: "https://www.tucentro.es",
  horario: "Lunes a Viernes: 9:00 - 20:00",
  colorPrimario: "#2563eb",
  colorSecundario: "#1e40af",
  colorAcento: "#10b981"
}
```

### Webhook para Make (Integromat)

```javascript
webhooks: {
  resultadoTest: "https://hook.make.com/TU_WEBHOOK_URL"
}
```

**Estructura del JSON enviado:**

```json
{
  "evento": "test_auditivo_completado",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "centro": "Tu Centro Auditivo",
  "datosUsuario": {
    "nombre": "María García",
    "email": "maria@email.com",
    "codigoPostal": "28001",
    "telefono": "+34 600 000 000"
  },
  "resultados": {
    "pitidos": { "total": 8, "aciertos": 7, "porcentaje": 87 },
    "simulaciones": { "total": 3, "aciertos": 2, "porcentaje": 67 },
    "palabras": { "total": 4, "aciertos": 3, "porcentaje": 75 },
    "global": { "porcentaje": 77, "nivel": "normal" }
  },
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "url": "https://tudominio.com"
  }
}
```

### Tally Forms (Auto-Test)

1. Crea tu formulario en [Tally.so](https://tally.so)
2. Obtén el embed URL (Share → Embed → Iframe)
3. Configúralo en `config.js`:

```javascript
tally: {
  urlIframe: "https://tally.so/embed/TU_FORM_ID",
  alturaIframe: 800
}
```

## 🎵 Cómo funciona el audio

### Pitidos (Web Audio API)
Los pitidos se generan en tiempo real usando Web Audio API, garantizando:
- Frecuencias exactas (500, 1000, 2000, 4000 Hz)
- Paneo estéreo (oído derecho/izquierdo)
- Fade in/out suave
- Sin dependencia de archivos externos

### Simulaciones y Palabras (Speech Synthesis)
Las voces se generan con la API de síntesis de voz del navegador:
- Voz en español de España
- Velocidad y tono ajustables
- No requiere archivos de audio
- Funciona offline

## 📊 Interpretación de Resultados

| Nivel | Porcentaje | Acción recomendada |
|-------|------------|-------------------|
| Normal | ≥ 70% | Revisión periódica |
| Moderado | 40-69% | Evaluación profesional recomendada |
| Preocupante | < 40% | Cita prioritaria con audiólogo |

## 🎨 Personalización avanzada

### Cambiar colores

```javascript
centro: {
  colorPrimario: "#2563eb",    // Azul principal
  colorSecundario: "#1e40af",  // Azul oscuro
  colorAcento: "#10b981"       // Verde éxito
}
```

### Modificar palabras ambiguas

```javascript
test: {
  palabrasAmbiguas: [
    { correcta: "casa", alternativa: "caza", categoria: "sordo/sonoro" },
    { correcta: "rana", alternativa: "rama", categoria: "nasal/no-nasal" },
    // Añade más...
  ]
}
```

### Cambiar frases de simulación

```javascript
test: {
  frasesSimulacion: {
    telefono: "Tu frase personalizada",
    cafeteria: "Otra frase",
    aireLibre: "Tercera frase"
  }
}
```

### Modificar textos

```javascript
textos: {
  heroTitulo: "Tu título personalizado",
  heroSubtitulo: "Tu subtítulo",
  // ... más textos
}
```

## 🔧 Solución de problemas

### No se escuchan los pitidos
1. Asegúrate de que el volumen del dispositivo está alto
2. Prueba con auriculares
3. Verifica que el navegador no esté silenciado

### No funciona la voz
1. El navegador debe soportar Speech Synthesis (Chrome, Firefox, Safari, Edge)
2. Algunos móviles requieren interacción previa del usuario

### El webhook no se envía
1. Verifica la URL en `config.js`
2. Comprueba la consola del navegador (F12)
3. Asegúrate de que el servidor acepte CORS

## 🌐 Compatibilidad

| Navegador | Soporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |
| Opera | ✅ Completo |
| IE 11 | ❌ No soportado |

## 📱 Responsive

La landing está optimizada para:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔒 Privacidad

- Los datos se envían únicamente al webhook configurado
- No se almacenan datos en servidores externos
- Opcional: guardar en localStorage del navegador

## 📄 Licencia

Este proyecto es de uso libre para centros auditivos. Puedes modificarlo y adaptarlo a tus necesidades.

## 🆘 Soporte

Si necesitas ayuda con la configuración:
1. Revisa la consola del navegador (F12)
2. Verifica que `config.js` esté correctamente configurado
3. Comprueba que los webhooks de Make estén activos

---

**¿Listo para captar más pacientes?** 🎯

Solo necesitas 5 minutos para configurar tu lead magnet auditivo y empezar a recibir leads cualificados.