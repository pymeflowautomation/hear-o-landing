# Prueba Auditiva Online

Prueba auditiva orientativa para la web de Hear-O. Incluye un recorrido de tonos y situaciones auditivas, y mantiene el formulario Auto-Test de Tally.

## Configuración del centro

Edita `config.js` para actualizar nombre, dirección, teléfono, correo, logo, colores y preguntas/textos. Los colores corporativos se aplican desde esa configuración.

El correo del centro (`CONFIG.centro.email`) recibe los resultados y las solicitudes de cita.

## Envío de correo

Los resultados se envían mediante una función privada alojada en el proyecto **Suscriptores Hear-O**. No se guardan sesiones ni se escriben en tablas. La página solo contiene la dirección de esa función y una clave pública de acceso; la clave secreta de Resend se mantiene en Supabase.

Consulta [ENVIO-CORREO.md](./ENVIO-CORREO.md) para añadir las claves privadas y autorizar el email del centro.

## Tally

El formulario Auto-Test continúa integrado desde Tally. Su URL y altura se configuran en `CONFIG.tally`.

## Privacidad

Los datos introducidos en el formulario se envían al email autorizado del centro. No se guardan en una base de datos ni en el almacenamiento local del navegador. La prueba es orientativa y no sustituye una evaluación profesional.
