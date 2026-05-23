import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, AlertCircle, BrainCircuit, 
  Layout, Eye, FileText, Zap, TrendingUp, ShieldCheck, 
  Users, MessageSquare, Clock, ChevronLeft, ChevronRight
} from 'lucide-react';
import Button from './Button';
import LandingHeader from './LandingHeader';
import Footer from './Footer';

interface AnamnesisDetailProps {
  onContact: () => void;
}

const AnamnesisDetail: React.FC<AnamnesisDetailProps> = ({ onContact }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const carouselImages = [
    { src: "/images/pantalla-inicio-Hear_o-AA.jpg", alt: "Pantalla de Inicio" },
    { src: "/images/ejemplo-anamnesis-audiolgia-1.jpg", alt: "Ejemplo Anamnesis" },
    { src: "/images/Seguimiento-resultados-gamas-notas-del-paciente.jpg", alt: "Seguimiento Resultados" },
    { src: "/images/ficha-completa-de-pacientes.jpg", alt: "Ficha de Pacientes" },
    { src: "/images/Informe-Audiologico-completo-automatico-para-el-paciente.jpg", alt: "Informe Audiológico" },
    { src: "/images/Argumentario-de-venta-para-el-audiologo.jpg", alt: "Argumentario de Venta" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-0">
      <Helmet>
        <title>Software de Anamnesis para Centros Auditivos | Hear-O</title>
        <meta name="description" content="Mejore la conversión en su centro auditivo con Anamnesis Asistida. Venda más audífonos profesionalizando el momento crítico de la consulta." />
        <meta name="keywords" content="Mejorar la Conversión en Centros Auditivos, Vender más audífonos, ¿Cómo vender más audífonos?" />
        <link rel="canonical" href="https://hear-o.es/software-anamnesis-vender-mas-audifonos" />
      </Helmet>
      
      <LandingHeader onContactClick={onContact} />

      {/* Slide 1: Hero */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12 space-y-6">
            <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full font-bold text-sm mb-2">
              Hear-O Anamnesis Assistant
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Cómo <span className="text-brand-orange">Vender Más Audífonos</span>: De la Consulta al Cierre
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Mejore la conversión en su centro auditivo profesionalizando el momento más crítico de la venta: <br/>
              <strong className="text-white">La Anamnesis.</strong>
            </p>
            <Button onClick={onContact} size="lg" className="bg-brand-orange hover:bg-orange-600 text-white border-none shadow-lg shadow-orange-500/20">
              Solicitar Demo Personalizada
            </Button>
          </div>
          <div className="lg:w-7/12">
            <div className="relative flex flex-col items-center justify-center group">
               <img 
                 src="/images/protada-anamnesis-audiologia-para-vender-mas.png" 
                 alt="Software para vender más audífonos - Interfaz Hear-O" 
                 className="w-full h-auto object-contain relative z-10"
               />
               <div className="w-full mt-4 md:mt-0 md:absolute md:bottom-4 md:left-10 md:right-10 bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-slate-700 z-20 shadow-2xl">
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <p className="text-sm font-mono text-green-400">Anamnesis Asistida y Argumentada para el Audiólogo. Presentación sincronizada para el Paciente</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: El Dolor Silencioso */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El Reto de Mejorar la Conversión en Centros Auditivos</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              ¿Por qué se pierden ventas técnicamente viables y cómo vender más audífonos sin ser agresivo?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BrainCircuit size={32} />,
                title: "El Perfil Técnico",
                desc: "El Audiólogo no es un Vendedor, pero necesita argumentar la adaptación de forma emocional.",
                color: "text-purple-400",
                bg: "bg-purple-500/10"
              },
              {
                icon: <AlertCircle size={32} />,
                title: "La Desconexión",
                desc: "El paciente oye el diagnóstico, pero no ve la Importancia. No conecta su problema con tu solución.",
                color: "text-orange-400",
                bg: "bg-orange-500/10"
              },
              {
                icon: <TrendingUp size={32} className="rotate-180" />,
                title: "La Fuga",
                desc: "Pérdida de ventas por falta de convicción emocional en el momento clave.",
                color: "text-red-400",
                bg: "bg-red-500/10"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Más que un CRM */}
      <section className="relative py-24 mb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/fondo-anamnesis2.png" 
            alt="Fondo tecnológico para centros auditivos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Más que un CRM: <br/>Herramienta para Mejorar la Conversión</h2>
            <p className="text-xl text-slate-300">Transforme la anamnesis en una conversación dirigida a vender más audífonos de forma ética.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-slate-900/20 backdrop-blur-xl border border-slate-700/30 p-8 rounded-2xl hover:bg-slate-900/40 transition-all shadow-xl">
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Layout size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Anamnesis Clínica/Comercial</h3>
              <p className="text-slate-300 leading-relaxed">Te ayuda y guía en la Anamnesis con un enfoque más comercial y emocional. Sabrás Qué decir, Cómo decirlo y Cuándo decirlo.</p>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-xl border border-slate-700/30 p-8 rounded-2xl hover:bg-slate-900/40 transition-all shadow-xl">
              <div className="w-20 h-20 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <Eye size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Impacto Visual Inmediato</h3>
              <p className="text-slate-300 leading-relaxed">El paciente ve su problema, no solo lo escucha. La comprensión visual acelera la decisión de compra.</p>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-xl border border-slate-700/30 p-8 rounded-2xl hover:bg-slate-900/40 transition-all shadow-xl">
              <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Continuidad Post-Visita</h3>
              <p className="text-slate-300 leading-relaxed">El seguimiento no termina cuando el paciente sale. Genera informes automáticos para llevar a casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4 & 5: Features Detail */}
      <section className="container mx-auto px-6 lg:px-20 mb-24 space-y-24">
        
        {/* Feature 1: Elimine la Improvisación */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative group">
             {/* Image 1 */}
             <div className="relative z-30 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:z-40 origin-bottom-left">
                <img 
                  src="/images/ejemplo-anamnesis-audiolgia.jpg" 
                  alt="Ejemplo Anamnesis" 
                  className="rounded-xl w-full h-auto object-cover" 
                />
             </div>
             {/* Image 2 */}
             <div className="absolute -bottom-10 -right-10 w-3/4 z-10 bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl transform translate-y-4 translate-x-4 transition-transform duration-500 hover:scale-110 hover:z-40 origin-bottom-right">
                <img 
                  src="/images/ARGUMENTARIO-POST-PRUEBAS-AUDIOLOGICAS.jpg" 
                  alt="Argumentario" 
                  className="rounded-xl w-full h-auto object-cover" 
                />
             </div>
          </div>
          <div className="lg:w-1/2 space-y-8 pl-0 lg:pl-10 mt-12 lg:mt-0">
            <div>
              <h3 className="text-3xl font-bold mb-6">Elimine la Improvisación</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                No dependa de la inspiración del momento. Hear-O le proporciona un guion "argumentado" y "Palabras Claves", asegurando que el Paciente comprende la importancia del problema
              </p>
            </div>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Guía Estructurada</h4>
                    <p className="text-slate-400">El sistema indica qué decir, cómo y el "timing" perfecto.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Consistencia Total</h4>
                    <p className="text-slate-400">Asegure su mejor versión comercial, sin importar su nivel de energía.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Autoridad</h4>
                    <p className="text-slate-400">Traduzca respuestas clínicas en argumentos de valor inmediato.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Concienciación Visual */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Concienciación Visual Sincronizada</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              El paciente no compra lo que escucha, compra lo que entiende y ve.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-orange mt-1 shrink-0" />
                <span className="text-slate-300"><strong>Visualización en Tiempo Real</strong> del problema cotidiano.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-orange mt-1 shrink-0" />
                <span className="text-slate-300"><strong>De la Duda a la Necesidad:</strong> 'Oigo pero no entiendo' se convierte en una evidencia visual.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-orange mt-1 shrink-0" />
                <span className="text-slate-300"><strong>Validación:</strong> El paciente se ve reflejado en la pantalla.</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/images/anamnesis-audiologia-con-sincronizacion-con-presentacion.png" alt="Consulta Visual" className="rounded-xl opacity-80" />
             </div>
          </div>
        </div>

      </section>

      {/* Slide 6: Gane la Venta Fuera */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                {/* Page 3 */}
                <div className="absolute w-64 md:w-80 shadow-2xl rounded-lg transform translate-x-12 -translate-y-8 rotate-6 transition-all duration-500 hover:z-40 hover:scale-110 hover:rotate-0 z-10 bg-white p-1 border border-slate-200">
                    <img src="/images/informe-tras-prueba-audiologica-3.jpg" alt="Informe Pagina 3" className="w-full h-auto rounded" />
                </div>
                
                {/* Page 2 */}
                <div className="absolute w-64 md:w-80 shadow-2xl rounded-lg transform translate-x-6 -translate-y-4 rotate-3 transition-all duration-500 hover:z-40 hover:scale-110 hover:rotate-0 z-20 bg-white p-1 border border-slate-200">
                    <img src="/images/informe-tras-prueba-audiologica-2.jpg" alt="Informe Pagina 2" className="w-full h-auto rounded" />
                </div>

                {/* Page 1 */}
                <div className="absolute w-64 md:w-80 shadow-2xl rounded-lg transform -rotate-2 transition-all duration-500 hover:z-40 hover:scale-110 hover:rotate-0 z-30 bg-white p-1 border border-slate-200">
                    <img src="/images/informe-tras-prueba-audiologica-1.jpg" alt="Informe Pagina 1" className="w-full h-auto rounded" />
                </div>
             </div>
             <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">Gane la Venta Fuera del Gabinete</h2>
                <p className="text-xl text-slate-400">La 'Ruta de Convencimiento' que acompaña al paciente a casa.</p>
                
                <div className="grid gap-6">
                   <div className="flex gap-4">
                      <FileText className="text-brand-blue shrink-0" size={28} />
                      <div>
                         <h4 className="font-bold text-white text-lg">El Informe que Vende</h4>
                         <p className="text-slate-400">No es clínico, es pedagógico. Refuerza la decisión de compra.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <Users className="text-brand-blue shrink-0" size={28} />
                      <div>
                         <h4 className="font-bold text-white text-lg">Neutralice a Terceros</h4>
                         <p className="text-slate-400">Argumentos claros para familiares escépticos ("cuñados").</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <ShieldCheck className="text-brand-blue shrink-0" size={28} />
                      <div>
                         <h4 className="font-bold text-white text-lg">Reducción de Abandono</h4>
                         <p className="text-slate-400">Minimiza la tasa de 'no adaptados' post-visita.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Slide 8: ROI */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
         <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="text-center mb-12 relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">El Valor de un 'Sí' Adicional</h2>
               <p className="text-xl text-slate-400">Impacto Inmediato en tu cuenta de resultados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               <div className="bg-slate-800/50 p-8 rounded-2xl text-center border border-slate-700">
                  <div className="text-5xl font-bold text-green-400 mb-2">+30%</div>
                  <div className="text-white font-bold text-lg">Mejora Relativa</div>
                  <p className="text-slate-400 text-sm mt-2">En tasa de conversión de citas a ventas</p>
               </div>
               <div className="bg-slate-800/50 p-8 rounded-2xl text-center border border-slate-700">
                  <div className="text-5xl font-bold text-brand-orange mb-2">1</div>
                  <div className="text-white font-bold text-lg">Adaptación Extra</div>
                  <p className="text-slate-400 text-sm mt-2">Al mes cubre la inversión y genera beneficio</p>
               </div>
               <div className="bg-slate-800/50 p-8 rounded-2xl text-center border border-slate-700">
                  <div className="text-5xl font-bold text-blue-400 mb-2">Ticket</div>
                  <div className="text-white font-bold text-lg">Medio Superior</div>
                  <p className="text-slate-400 text-sm mt-2">La comprensión visual facilita la venta de gamas altas</p>
               </div>
            </div>
         </div>
      </section>

      {/* Slide 9: Strategy */}
      <section className="container mx-auto px-6 lg:px-20 mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Más que Tecnología, Estrategia de Negocio</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
               <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Layout size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Profesionalice</h3>
               <p className="text-slate-600">Estandarice su proceso y elimine la dependencia del talento individual.</p>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl border border-slate-700">
               <div className="bg-brand-orange/20 w-16 h-16 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                  <Zap size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Empodere</h3>
               <p className="text-slate-300">Dé a su paciente la claridad visual necesaria para decidirse hoy.</p>
            </div>
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
               <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <ShieldCheck size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Asegure</h3>
               <p className="text-slate-600">Utilice informes y seguimiento para cerrar ventas que antes se perdían.</p>
            </div>
         </div>

         {/* Carousel */}
         <div className="mt-20 relative group max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 to-blue-500/20 rounded-3xl blur-xl opacity-50"></div>
            
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 p-3 rounded-full text-white hover:bg-brand-orange transition-colors shadow-lg backdrop-blur-sm border border-slate-700 opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 p-3 rounded-full text-white hover:bg-brand-orange transition-colors shadow-lg backdrop-blur-sm border border-slate-700 opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide relative z-10 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {carouselImages.map((img, i) => (
                    <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[600px] first:pl-0 last:pr-0">
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group/item">
                            <img 
                              src={img.src} 
                              alt={`${img.alt} - Software para centros auditivos`} 
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover/item:scale-105" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 pt-12 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                <p className="text-white font-medium text-center">{img.alt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Claves para Mejorar la Conversión en Centros Auditivos</h2>
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <p>
                La pregunta <strong>"¿Cómo vender más audífonos?"</strong> es recurrente en el sector. Sin embargo, la respuesta no suele estar en bajar precios o hacer más publicidad, sino en optimizar el proceso de venta dentro del gabinete.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">1. Estandarización del Proceso</h3>
                  <p>
                    Para <strong>mejorar la conversión en centros auditivos</strong>, es fundamental que todos los audiólogos sigan un método probado. Hear-O guía al profesional paso a paso, asegurando que no se olviden preguntas clave ni argumentos de valor.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">2. Experiencia Visual</h3>
                  <p>
                    El paciente necesita entender su pérdida auditiva para actuar. Al transformar datos audiométricos en imágenes cotidianas, Hear-O facilita la comprensión y acelera la decisión de compra.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">3. Argumentación Sólida</h3>
                  <p>
                    Vender más audífonos requiere rebatir objeciones con seguridad. Nuestro asistente proporciona argumentos en tiempo real basados en las respuestas del paciente, empoderando al audiólogo.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">4. Seguimiento Post-Visita</h3>
                  <p>
                    Muchos pacientes "se lo piensan". Entregar un informe pedagógico y visual (no clínico) permite que la venta continúe en casa, neutralizando la opinión de terceros y recuperando ventas perdidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10: CTA */}
      <section className="container mx-auto px-6 lg:px-20 text-center pb-12">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">¿Listo para Profesionalizar su Éxito?</h2>
            <p className="text-xl text-slate-400 mb-10">
               Solicite una demo y vea cómo Hear-O transforma su centro auditivo.
            </p>
            <Button onClick={onContact} size="lg" className="bg-brand-orange hover:bg-orange-600 text-white text-xl px-12 py-6 h-auto shadow-2xl shadow-orange-500/30">
               Solicitar Demo Personalizada
            </Button>
         </div>
      </section>

      <Footer />

    </div>
  );
};

export default AnamnesisDetail;
