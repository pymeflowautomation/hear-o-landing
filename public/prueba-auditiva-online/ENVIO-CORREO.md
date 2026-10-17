# Configuración del envío de correo

La prueba envía resultados y solicitudes de cita al correo definido en `CONFIG.centro.email`. No guarda respuestas en base de datos ni en el almacenamiento local.

## Claves privadas de Supabase

En el proyecto **Suscriptores Hear-O**, abre la configuración de secretos de las funciones y añade:

- `RESEND_API_KEY`: clave privada de Resend de Hear-O.
- `RESEND_ALLOWED_RECIPIENTS`: email del centro configurado en `config.js`. Se admiten varios emails separados por coma.

La función solo acepta emails que estén en esa lista. Al cambiar `CONFIG.centro.email`, actualiza también `RESEND_ALLOWED_RECIPIENTS`.

## Remitente

El correo sale como **Hear-O <info@info.hear-o.es>**. Ese remitente debe estar verificado en la cuenta de Resend.

La clave pública de Supabase incluida en `config.js` solo permite llamar a la función y no es la clave de Resend. Nunca publiques `RESEND_API_KEY`.
