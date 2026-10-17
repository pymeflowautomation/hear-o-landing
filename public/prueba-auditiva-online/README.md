# Prueba Auditiva Online

Prueba auditiva orientativa para la web de Hear-O. Incluye el test de sonidos y un auto-test propio de siete preguntas con imágenes, resultado orientativo y solicitud de cita opcional.

## Configuración del centro

Edita `config.js` para actualizar nombre, dirección, teléfono, correo, logo, colores y preguntas/textos. Los colores corporativos se aplican desde esa configuración.

El correo del centro (`CONFIG.centro.email`) recibe los resultados y las solicitudes de cita. En el auto-test, la persona también recibe por correo su orientación y una breve guía de salud auditiva.

## Envío de correo

Los resultados se envían mediante una función privada alojada en el proyecto **Suscriptores Hear-O**. No se guardan sesiones ni se escriben en tablas. La página solo contiene la dirección de esa función y una clave pública de acceso; la clave secreta de Resend se mantiene en Supabase.

Consulta [ENVIO-CORREO.md](./ENVIO-CORREO.md) para añadir las claves privadas y autorizar el email del centro.

## Privacidad

Con el consentimiento de la persona, sus datos y respuestas del auto-test se envían por correo al centro y su resultado se envía también a su email. No se guardan en una base de datos ni en el almacenamiento local del navegador. La prueba es orientativa y no sustituye una evaluación profesional.
