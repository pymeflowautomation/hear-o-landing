# Guía rápida

1. Actualiza los datos del centro y los colores en `config.js`.
2. Revisa que `CONFIG.centro.email` sea la dirección que recibirá las pruebas.
3. En Supabase > **Suscriptores Hear-O** > secretos de funciones, añade:
   - `RESEND_API_KEY`: clave privada de Resend.
   - `RESEND_ALLOWED_RECIPIENTS`: la dirección del centro, igual a `CONFIG.centro.email`.
4. El remitente está configurado como `Hear-O <info@info.hear-o.es>`; debe estar verificado en Resend.
5. No añadas la clave de Resend a `config.js`. La página y la función usan una clave pública de Supabase; no da acceso a la clave privada de correo.
6. Tally sigue configurándose desde `CONFIG.tally`.

Si cambias el email del centro, actualiza también la lista autorizada en Supabase. Más detalle en [ENVIO-CORREO.md](./ENVIO-CORREO.md).
