# 🔄 Flujo de Make (Integromat) - Lead Magnet Auditivo

Guía paso a paso para configurar el webhook en Make y procesar los resultados del test auditivo.

## 📋 Resumen del Flujo

```
Test Completado → Webhook Make → Procesar Datos → Enviar Email → Crear Lead → Notificación
```

## 🔧 Configuración Paso a Paso

### 1. Crear el Webhook

1. Entra en [Make.com](https://www.make.com)
2. Crea un nuevo escenario
3. Añade el módulo **Webhook > Custom webhook**
4. Haz clic en **Add** para crear un nuevo webhook
5. Nombre: "Lead Magnet Auditivo"
6. Copia la URL del webhook
7. Pégala en tu `config.js`:

```javascript
webhooks: {
  resultadoTest: "https://hook.make.com/XXXXXXXXXXXX"
}
```

### 2. Configurar el Webhook (Estructura de Datos)

Para que Make reconozca la estructura de datos:

1. Guarda y ejecuta el escenario
2. Realiza un test completo en tu landing
3. Make detectará automáticamente la estructura JSON

**Estructura esperada:**

```json
{
  "evento": "test_auditivo_completado",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "centro": "Centro Auditivo Demo",
  "datosUsuario": {
    "nombre": "María García",
    "email": "maria@email.com",
    "codigoPostal": "28001",
    "telefono": "+34 600 000 000"
  },
  "resultados": {
    "pitidos": {
      "total": 8,
      "aciertos": 7,
      "porcentaje": 87
    },
    "simulaciones": {
      "total": 3,
      "aciertos": 2,
      "porcentaje": 67
    },
    "palabras": {
      "total": 4,
      "aciertos": 3,
      "porcentaje": 75
    },
    "global": {
      "porcentaje": 77,
      "nivel": "normal"
    }
  },
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "url": "https://tudominio.com"
  }
}
```

### 3. Añadir Módulos al Escenario

#### Módulo 2: Router (Opcional)

Divide el flujo según el nivel de audición:

```
Router
├── Nivel: Normal → Email informativo
├── Nivel: Moderado → Email + Llamada
└── Nivel: Preocupante → Email + Llamada urgente
```

**Condiciones del Router:**

- Ruta 1 (Normal): `resultados.global.nivel` = "normal"
- Ruta 2 (Moderado): `resultados.global.nivel` = "moderado"
- Ruta 3 (Preocupante): `resultados.global.nivel` = "preocupante"

#### Módulo 3: Email (Gmail/SendGrid/etc.)

**Configuración del email para el paciente:**

- **To:** `datosUsuario.email`
- **Subject:** Resultados de tu test auditivo - [Nombre del Centro]
- **Body (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; }
    .result-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
    .percentage { font-size: 48px; font-weight: bold; color: #2563eb; }
    .stats { display: flex; justify-content: space-around; margin: 20px 0; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: bold; color: #10b981; }
    .cta { background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎧 Resultados de tu Test Auditivo</h1>
      <p>{{centro}}</p>
    </div>
    <div class="content">
      <p>Hola <strong>{{datosUsuario.nombre}}</strong>,</p>
      <p>Gracias por realizar nuestro test auditivo online. Aquí tienes tus resultados:</p>
      
      <div class="result-box">
        <p>Puntuación Global</p>
        <div class="percentage">{{resultados.global.porcentaje}}%</div>
        <p>Nivel: <strong>{{resultados.global.nivel}}</strong></p>
      </div>
      
      <div class="stats">
        <div class="stat">
          <div class="stat-value">{{resultados.pitidos.porcentaje}}%</div>
          <p>Pitidos</p>
        </div>
        <div class="stat">
          <div class="stat-value">{{resultados.simulaciones.porcentaje}}%</div>
          <p>Simulaciones</p>
        </div>
        <div class="stat">
          <div class="stat-value">{{resultados.palabras.porcentaje}}%</div>
          <p>Palabras</p>
        </div>
      </div>
      
      <p>{{mensajePersonalizado}}</p>
      
      <center>
        <a href="{{urlCita}}" class="cta">Pedir Cita Gratuita</a>
      </center>
      
      <p><small>Este test es orientativo y no sustituye una evaluación profesional.</small></p>
    </div>
    <div class="footer">
      <p>{{centro}} | {{telefonoCentro}} | {{emailCentro}}</p>
      <p>{{direccionCentro}}</p>
    </div>
  </div>
</body>
</html>
```

#### Módulo 4: Google Sheets (Opcional)

Guardar leads en una hoja de cálculo:

| Fecha | Nombre | Email | CP | Teléfono | Resultado | % Global | Nivel | Contactado |
|-------|--------|-------|-----|----------|-----------|----------|-------|------------|

**Mapeo de campos:**
- Fecha: `timestamp`
- Nombre: `datosUsuario.nombre`
- Email: `datosUsuario.email`
- CP: `datosUsuario.codigoPostal`
- Teléfono: `datosUsuario.telefono`
- Resultado: `resultados.global.porcentaje`
- % Global: `resultados.global.porcentaje`
- Nivel: `resultados.global.nivel`
- Contactado: (dejar vacío)

#### Módulo 5: Notificación (Slack/Email interno)

**Email para el centro:**

- **To:** tu-email@centro.es
- **Subject:** 🔔 Nuevo Lead - Test Auditivo
- **Body:**

```
Nuevo test completado

Paciente: {{datosUsuario.nombre}}
Email: {{datosUsuario.email}}
Teléfono: {{datosUsuario.telefono}}
CP: {{datosUsuario.codigoPostal}}

Resultados:
- Pitidos: {{resultados.pitidos.porcentaje}}%
- Simulaciones: {{resultados.simulaciones.porcentaje}}%
- Palabras: {{resultados.palabras.porcentaje}}%
- GLOBAL: {{resultados.global.porcentaje}}% ({{resultados.global.nivel}})

Fecha: {{timestamp}}
```

#### Módulo 6: CRM (Opcional)

Integrar con tu CRM (HubSpot, Salesforce, etc.):

- Crear contacto
- Añadir etiqueta "Lead Magnet Auditivo"
- Asignar seguimiento según nivel

## 📊 Ejemplos de Flujos por Nivel

### Flujo Nivel NORMAL (≥ 70%)

```
Webhook → Email paciente (informativo) 
        → Guardar en Sheets 
        → Email interno (baja prioridad)
```

### Flujo Nivel MODERADO (40-69%)

```
Webhook → Email paciente (recomendación cita) 
        → Guardar en Sheets 
        → Email interno (media prioridad)
        → Crear tarea CRM (llamar en 48h)
```

### Flujo Nivel PREOCUPANTE (< 40%)

```
Webhook → Email paciente (urgente, cita prioritaria) 
        → Guardar en Sheets 
        → Email interno (ALTA PRIORIDAD)
        → Notificación Slack/WhatsApp
        → Crear tarea CRM (llamar HOY)
        → SMS paciente (opcional)
```

## 🎯 Mensajes Personalizados por Nivel

### Nivel Normal (≥ 70%)

```
¡Buenas noticias! Tu audición se encuentra dentro de parámetros normales. 

Aunque los resultados son positivos, te recomendamos:
- Hacerte revisiones periódicas (cada 1-2 años)
- Proteger tus oídos de ruidos intensos
- Consultar si notas cualquier cambio

¿Quieres una revisión de confirmación gratuita?
```

### Nivel Moderado (40-69%)

```
Hemos detectado algunas dificultades en tu audición que merecen atención.

Tus resultados indican que podrías beneficiarte de una evaluación profesional. Muchas personas no son conscientes de su pérdida auditiva gradual.

Te ofrecemos:
✓ Audiometría completa gratuita
✓ Evaluación por audiólogo titulado
✓ Presupuesto sin compromiso

Reserva tu cita ahora y recupera la calidad de tu audición.
```

### Nivel Preocupante (< 40%)

```
Los resultados de tu test indican dificultades significativas en tu audición.

NO TE ALARMES, pero es importante que un profesional te evalúe lo antes posible. La pérdida auditiva tratada a tiempo tiene mejor pronóstico.

TE OFRECEMOS:
🚨 Cita PRIORITARIA en 24-48h
🚨 Evaluación completa GRATUITA
🚨 Estudio personalizado de tu caso

No postergues tu salud auditiva. Contáctanos hoy mismo.

Teléfono: [NÚMERO DIRECTO]
```

## 🔍 Testing del Webhook

### Método 1: Desde la Landing

1. Configura la URL del webhook en `config.js`
2. Abre la landing en tu navegador
3. Completa el test completo
4. Verifica en Make que llegaron los datos

### Método 2: Prueba manual (curl)

```bash
curl -X POST https://hook.make.com/TU_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{
    "evento": "test_auditivo_completado",
    "timestamp": "2025-01-15T10:30:00.000Z",
    "centro": "Centro Test",
    "datosUsuario": {
      "nombre": "Usuario Prueba",
      "email": "test@email.com",
      "codigoPostal": "28001",
      "telefono": "+34 600 000 000"
    },
    "resultados": {
      "pitidos": { "total": 8, "aciertos": 6, "porcentaje": 75 },
      "simulaciones": { "total": 3, "aciertos": 2, "porcentaje": 67 },
      "palabras": { "total": 4, "aciertos": 3, "porcentaje": 75 },
      "global": { "porcentaje": 73, "nivel": "normal" }
    }
  }'
```

## ⚠️ Solución de Problemas

### El webhook no recibe datos

1. Verifica la URL en `config.js`
2. Abre la consola del navegador (F12)
3. Busca errores en la pestaña "Network"
4. Asegúrate de que el escenario de Make esté activo

### Error CORS

Si ves errores de CORS en la consola:

1. En Make, el webhook debe estar configurado como "Custom webhook"
2. No usar "Webhook response" antes de recibir datos
3. El servidor debe permitir POST desde cualquier origen

### Datos no llegan completos

1. Verifica que el JSON enviado coincida con la estructura esperada
2. En Make, usa "Re-determine data structure" en el webhook
3. Realiza un nuevo test para actualizar la estructura

## 📈 Métricas Recomendadas

Monitorea en Make o tu CRM:

- **Tests completados** / día
- **Tasa de conversión** (test → cita)
- **Distribución por niveles** (% normal/moderado/preocupante)
- **Tiempo medio de respuesta** (lead → primera llamada)
- **Citas generadas** / mes

---

**¿Necesitas ayuda?** Revisa la consola del navegador (F12) para ver errores y asegúrate de que el webhook de Make esté correctamente configurado.