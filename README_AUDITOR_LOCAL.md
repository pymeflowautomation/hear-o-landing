# Auditor-IA de Hear-O · entorno local

## Preparar las conexiones

1. Abre `.env.local` y completa las claves privadas de DeepSeek, Tavily, Supabase y Resend.
2. Conserva `HEARO_NOTIFY_EMAIL=info@hear-o.es` y el remitente `Hear-O <informes@info.hear-o.es>` salvo que quieras cambiarlos.
3. Guarda el archivo y reinicia el servidor local.
4. Ejecuta `npm run dev` y abre la dirección local que muestra la terminal.

Las claves solo se usan en el servidor. No las pongas en variables que empiecen por `VITE_` ni compartas `.env.local`.

## Recorrido del informe

- Cada fase del formulario tiene una pregunta obligatoria; las demás son opcionales. El campo libre aparece al final.
- Nombre, email válido y aceptación de la política de privacidad son obligatorios para generar el informe.
- DeepSeek prepara el diagnóstico completo. La página muestra una lectura inicial y dos prioridades; el PDF contiene el informe completo.
- Tavily busca presencia pública y competidores por localidad. Si la clave no está disponible, se utiliza la búsqueda de DeepSeek como alternativa.
- El PDF se envía al usuario y a `info@hear-o.es`. A Hear-O también le llegan las respuestas completas en un archivo JSON.
- Se guarda una copia privada en la tabla `auditor_leads` del proyecto Supabase Hear-O Suscriptores.
- Las respuestas se guardan antes del análisis y su estado se actualiza aunque la generación de IA falle o se agote el tiempo.
- El email se usa solo para entregar el informe. No hay alta automática en listas comerciales.

## Entrega y publicación

La tabla de informes está protegida por RLS, sin permisos para `anon` ni `authenticated`. El servidor usa la clave privada de Supabase, que no se incluye en el navegador. En Vercel, añade las mismas variables privadas en la configuración del proyecto para los entornos que vayas a usar.

No se puede probar el envío real hasta completar las claves privadas de DeepSeek, Supabase y Resend. La página y el flujo de preguntas sí pueden revisarse localmente antes.
