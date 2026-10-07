# 🚀 Guía Rápida - Lead Magnet Auditivo

## Instalación en 3 pasos

### 1️⃣ Subir archivos

Sube todos los archivos a tu servidor:
- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `.htaccess` (opcional)

### 2️⃣ Configurar

Edita `config.js` con tus datos:

```javascript
centro: {
  nombre: "TU CENTRO",
  telefono: "+34 900 000 000",
  email: "info@tucentero.es",
  // ... más datos
},

webhooks: {
  resultadoTest: "URL_DE_MAKE"
}
```

### 3️⃣ Configurar Make (Integromat)

1. Crea escenario nuevo
2. Añade "Webhook > Custom webhook"
3. Copia la URL
4. Pégala en `config.js`
5. Añade módulo de Email
6. Activa el escenario

✅ **Listo!** Tu lead magnet está funcionando.

---

## Personalización rápida

### Cambiar colores
```javascript
colorPrimario: "#0066cc",
colorSecundario: "#004499",
colorAcento: "#00aa66",
```

### Cambiar textos
Busca en `config.js` la sección `textos:` y modifica lo que necesites.

### Integrar Tally Forms
1. Crea formulario en [tally.so](https://tally.so)
2. Ve a Share → Embed → Iframe
3. Copia la URL a `config.js`:
```javascript
tally: {
  urlIframe: "https://tally.so/embed/TU_ID"
}
```

---

## Estructura del Webhook (JSON)

```json
{
  "datosUsuario": {
    "nombre": "...",
    "email": "...",
    "codigoPostal": "...",
    "telefono": "..."
  },
  "resultados": {
    "pitidos": { "porcentaje": 87 },
    "simulaciones": { "porcentaje": 67 },
    "palabras": { "porcentaje": 75 },
    "global": { 
      "porcentaje": 77,
      "nivel": "normal"  // normal | moderado | preocupante
    }
  }
}
```

---

## Solución de problemas

| Problema | Solución |
|----------|----------|
| No se escuchan pitidos | Sube el volumen, usa auriculares |
| No llegan emails | Verifica URL del webhook en Make |
| No funciona la voz | Usa Chrome, Firefox o Safari actualizado |

---

## Soporte

- 📧 Revisa `README.md` para documentación completa
- 📧 Revisa `MAKE-FLOW.md` para configurar Make
- 📧 Revisa `config-EJEMPLO.js` para ejemplo real

**¡A captar pacientes! 🎯**