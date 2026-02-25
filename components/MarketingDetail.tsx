import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, Megaphone, Users, Calendar, 
  BarChart3, Zap, Repeat, Heart, ChevronLeft, ChevronRight
} from 'lucide-react';
import Button from './Button';
import LandingHeader from './LandingHeader';
import Footer from './Footer';

interface MarketingDetailProps {
  onContact: () => void;
}

const MarketingDetail: React.FC<MarketingDetailProps> = ({ onContact }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const carouselItems = [
    {
      img: "https://pymeflow.es/wp-content/uploads/2026/02/automatizaciones-de-marketing-audiologia.jpg",
      title: "Todo el Marketing que necesita tu centro",
      desc: "Más de 10 tipos de envíos predefinidos, diseñados para tu centro auditivo y tu base de datos."
    },
    {
      img: "https://pymeflow.es/wp-content/uploads/2026/02/imagen-2-HMS.jpg",
      title: "Configuración sencilla",
      desc: "Automático y programado al 100%, pero si quieres, toma el control: Activa o desactiva, configura frecuencia, canales..."
    },
    {
      img: "https://pymeflow.es/wp-content/uploads/2026/02/marketing-con-IA-para-centros-audiologico.jpg",
      title: "Tus Promociones, Redes y Blog a coste cero",
      desc: "Pide a Hear-O que te ayude con publicaciones o promociones. Tendrás: ideas con textos e imágenes. Tu sólo elige, segmenta y programa."
    },
    {
      img: "https://pymeflow.es/wp-content/uploads/2026/02/ejemplo-envio.jpg",
      title: "Contenidos generados con IA",
      desc: "Olvídate de escribir mails, de diseñar nada, deja que la IA trabaje por ti. Incansable: 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-0">
      <Helmet>
        <title>Marketing Automático para Centros Auditivos | Hear-O</title>
        <meta name="description" content="Automatice el marketing de su centro auditivo con IA. Campañas, reactivación de pacientes y contenidos automáticos para captar y retener más." />
        <meta name="keywords" content="Marketing para Centros Auditivos, Marketing para Audiología, Marketing Automático para Centros Auditivos, Automatizaciones para Centros Auditivos, IA para Centros Auditivos" />
        <link rel="canonical" href="https://hear-o.pymeflow.es/marketing-automatico-centros-auditivos" />
      </Helmet>
      
      <LandingHeader onContactClick={onContact} />

      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full font-bold text-sm mb-2">
              Hear-O Marketing Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Marketing para <span className="text-blue-500">Centros Auditivos</span>: Automático y Profesional
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              La solución definitiva de <strong>Marketing Automático para Centros Auditivos</strong>. Fideliza, reactiva y capta sin dedicarle tiempo. Hear-O genera contenido y ejecuta acciones por ti.
            </p>
            <Button onClick={onContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/20">
              Empezar Ahora
            </Button>
          </div>
          <div className="lg:w-1/2">
             <div className="relative flex items-center justify-center group">
                <img 
                  src="https://pymeflow.es/wp-content/uploads/2026/02/marketing-automatico-para-centros-auditivos.png" 
                  alt="Software de Marketing para Centros Auditivos y Audiología" 
                  className="w-full h-auto object-contain relative z-10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El Desafío del Marketing para Audiología</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
               ¿Por qué el marketing en centros auditivos se queda siempre "para cuando se pueda"?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                 <Calendar size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">"No tenemos tiempo"</h3>
               <p className="text-slate-400 leading-relaxed">Meses sin comunicación. Pacientes que se enfrían y leads que se pierden por falta de seguimiento.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                 <BarChart3 size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">"No podemos contratar"</h3>
               <p className="text-slate-400 leading-relaxed">Costes excesivos de un Community Manager, pero nadie es experto en el centro.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                 <Zap size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">"Bloqueo Creativo"</h3>
               <p className="text-slate-400 leading-relaxed">No saber qué enviar ni qué publicar. Falta de estructura que lleva a la inacción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Potencia tu Marketing</h2>
         <div className="relative group">
            {/* Controls */}
             <button 
              onClick={() => scroll('left')} 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 p-3 rounded-full text-white hover:bg-blue-600 transition-colors shadow-lg backdrop-blur-sm border border-slate-700 opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 p-3 rounded-full text-white hover:bg-blue-600 transition-colors shadow-lg backdrop-blur-sm border border-slate-700 opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {carouselItems.map((item, i) => (
                  <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[40%] first:pl-0 last:pr-0">
                     <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-full flex flex-col hover:border-slate-600 transition-colors shadow-xl shadow-blue-500/20">
                        <div className="h-64 md:h-80 overflow-hidden relative group/img">
                           <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                           <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                           <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Solution Definition */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
         <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es Hear-O Marketing Studio?</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                   Es una plataforma de <strong>Automatizaciones para Centros Auditivos</strong> que convierte la gestión de Marketing en un sistema autónomo 24/7 a un coste residual. Utiliza <strong>IA para Centros Auditivos</strong> para generar contenidos y campañas sin esfuerzo.
                </p>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 w-full">
                   <ul className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                         <span className="text-green-400 font-bold mt-1">✓</span>
                         <span>Campañas predefinidas y programadas a medida del centro</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <span className="text-green-400 font-bold mt-1">✓</span>
                         <span>Genera ideas y contenido con IA cuando lo solicitas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <span className="text-green-400 font-bold mt-1">✓</span>
                         <span>Ejecuta envíos y publicaciones automáticamente.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <span className="text-green-400 font-bold mt-1">✓</span>
                         <span>Registra todo el histórico de acciones.</span>
                      </li>
                   </ul>
                </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
                {/* Image 1 (Front) */}
                <div className="relative z-20 w-3/4 transform transition-transform duration-500 hover:scale-105 hover:z-30">
                   <img 
                     src="https://pymeflow.es/wp-content/uploads/2026/02/automatizaciones-de-marketing-audiologia.jpg" 
                     alt="Automatizaciones de Marketing para Audiología" 
                     className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800"
                   />
                </div>
                {/* Image 2 (Back) */}
                <div className="absolute top-10 right-4 w-3/4 z-10 transform translate-x-4 translate-y-4 transition-transform duration-500 hover:scale-105 hover:z-30 hover:-translate-x-2 hover:-translate-y-2">
                   <img 
                     src="https://pymeflow.es/wp-content/uploads/2026/02/marketing-con-IA-para-centros-audiologico.jpg" 
                     alt="Marketing con IA para Centros Auditivos" 
                     className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800 opacity-90 hover:opacity-100"
                   />
                </div>
            </div>
         </div>
      </section>

      {/* The 3 Pillars */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Resultados de Negocio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
               Los 3 pilares fundamentales para el crecimiento de tu centro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                 <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Fideliza</h3>
               <p className="text-slate-400 leading-relaxed">Mantiene el contacto constante. Más revisiones, más recurrencia y más oportunidades de venta.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                 <Repeat size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Reactiva</h3>
               <p className="text-slate-400 leading-relaxed">Recupera contactos perdidos. Ingresos que hoy se están escapando de tu base de datos.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
               <div className="w-14 h-14 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6">
                 <Megaphone size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Capta</h3>
               <p className="text-slate-400 leading-relaxed">Atrae nuevos contactos interesados con la Prueba Auditiva Online y publicaciones constantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
         <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Cómo funciona?</h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold shrink-0">1</div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Configura lo básico</h3>
                        <p className="text-slate-400">Activa acciones, define canales (Email, SMS, WhatsApp), frecuencia y el segmento objetivo. Configura una vez, funciona siempre.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold shrink-0">2</div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Pide ideas y contenido</h3>
                        <p className="text-slate-400">Cuando lo necesites, la IA genera propuestas de campañas y textos adaptados a cada canal. Tú revisas y apruebas.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold shrink-0">3</div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Hear-O ejecuta y registra</h3>
                        <p className="text-slate-400">Los envíos y publicaciones se lanzan automáticamente. Todo queda registrado en el histórico.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 p-8 rounded-3xl">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="font-bold text-white">Resultados Esperados (30-60 días)</h3>
                     <span className="text-green-400 text-sm font-bold">En uso normal</span>
                  </div>
                  <div className="space-y-6">
                     <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-white mb-1">Comunicación Constante</h4>
                        <p className="text-sm text-slate-400">Con pacientes y no pacientes. Tu marca siempre presente.</p>
                     </div>
                     <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-white mb-1">Reactivación Medible</h4>
                        <p className="text-sm text-slate-400">Generación de nuevas citas, consultas y respuestas de antiguos contactos.</p>
                     </div>
                     <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-white mb-1">Menos "Meses en Blanco"</h4>
                        <p className="text-sm text-slate-400">Flujo de trabajo comercial más estable y predecible.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 lg:px-20 mb-24 max-w-4xl">
         <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes</h2>
         <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <h3 className="font-bold text-lg text-white mb-2">¿Necesito tener a alguien llevando el marketing?</h3>
               <p className="text-slate-400">No. El sistema está pensado para funcionar con configuración puntual y mantenimiento mínimo. Tienes la posibilidad de configurar los principales parámetros, dejarlo todo listo y olvidarte. Hear-O hará el resto: Textos, envíos, publicaciones...</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <h3 className="font-bold text-lg text-white mb-2">¿Necesito Conocimientos Técnicos o de Marketing?</h3>
               <p className="text-slate-400">Ninguno. La interfaz es sencilla e intuitiva. Cuando quieras cambiar algo (si quieres...), accedes, activas, desactivas, cambias frecuencias de envíos, segmentos (pacientes, leads...) y poco más. El resto lo hará Hear-O.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <h3 className="font-bold text-lg text-white mb-2">¿Quién decide qué se envía?</h3>
               <p className="text-slate-400">El centro. Hear-O ejecuta lo configurado y genera propuestas, pero tú tienes el control final.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <h3 className="font-bold text-lg text-white mb-2">¿Necesito una base de datos perfecta?</h3>
               <p className="text-slate-400">No. Se parte de lo que haya (NOAH) y se mantiene actualizada mensualmente con un proceso simple.</p>
            </div>
         </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Estrategias de Marketing para Centros Auditivos en la Era Digital</h2>
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <p>
                El sector de la audiología está cambiando. Ya no basta con esperar a que el paciente entre por la puerta. Implementar estrategias de <strong>Marketing para Centros Auditivos</strong> es vital para mantener la competitividad y asegurar el flujo de pacientes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Automatizaciones para Centros Auditivos</h3>
                  <p>
                    La clave de la rentabilidad está en la eficiencia. Las <strong>automatizaciones para centros auditivos</strong> permiten mantener el contacto con cientos de pacientes (felicitaciones, revisiones, garantías) sin dedicar ni un minuto de gestión manual.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">IA para Centros Auditivos</h3>
                  <p>
                    La Inteligencia Artificial no es el futuro, es el presente. Hear-O utiliza <strong>IA para centros auditivos</strong> para redactar correos, diseñar creatividades y proponer campañas personalizadas que conectan con tu audiencia.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Marketing Automático</h3>
                  <p>
                    El <strong>Marketing Automático para Centros Auditivos</strong> garantiza que ningún paciente se quede en el olvido. Reactiva bases de datos antiguas y detecta oportunidades de renovación de audífonos de forma proactiva.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Marketing para Audiología Especializado</h3>
                  <p>
                    No sirve cualquier agencia generalista. El <strong>marketing para audiología</strong> requiere entender la sensibilidad del paciente, los tiempos de renovación y el lenguaje adecuado para generar confianza y autoridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-20 text-center pb-12">
         <div className="max-w-3xl mx-auto bg-blue-900/20 border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Marketing profesional para tu centro, sin contratar a nadie</h2>
            <p className="text-xl text-slate-300 mb-8">
               Fideliza, reactiva y capta... sin dedicarle tiempo cada semana.
            </p>
            <Button onClick={onContact} size="lg" className="bg-white text-blue-900 hover:bg-slate-200 font-bold text-lg px-10">
               Solicitar Información
            </Button>
         </div>
      </section>

      <Footer />

    </div>
  );
};

export default MarketingDetail;
