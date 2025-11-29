import React from 'react';
import { Database, Megaphone, PenTool, PhoneCall, CheckCircle2 } from 'lucide-react';

const ExtraFeatures: React.FC = () => {
  const features = [
    {
      icon: <Database size={32} className="text-blue-400" />,
      title: "Carga de Base de Datos",
      subtitle: "(Noah u otra fuente)",
      description: "Alimenta el Sistema con tu base de datos e inclúyelos en tus acciones de Marketing, fidelización, captación y recuperación. - Incluido en el Plan Premium -",
      pricing: [
        { label: "Primeros 300 pacientes", value: "200€" },
        { label: "Base completa", value: "300€" }
      ]
    },
    {
      icon: <Megaphone size={32} className="text-orange-400" />,
      title: "Promociones y Ofertas",
      subtitle: "Automatizadas",
      description: "Idea una promoción y la Automatización hará el resto: Textos, Imágenes, Creación del Mail, Envío a la Base de Datos y Publicación en Redes.",
      pricing: [
        { label: "Implantación", value: "750€ - 1.000€" },
        { label: "Mantenimiento", value: "+60-70€/mes" }
      ]
    },
    {
      icon: <PenTool size={32} className="text-purple-400" />,
      title: "Generación de Contenidos",
      subtitle: "Web y Redes Sociales",
      description: "Genera automáticamente ideas de contenido, decide cuál te gusta y el sistema creará el artículo para la Web y las publicaciones en Redes.",
      pricing: [
        { label: "Implantación", value: "652€ - 800€" },
        { label: "Mantenimiento", value: "+60-70€/mes" }
      ]
    },
    {
      icon: <PhoneCall size={32} className="text-green-400" />,
      title: "Voz IA",
      subtitle: "Atención y Recordatorios",
      description: "La IA llama para recordar citas y contesta llamadas entrantes. Incluye diseño de flujos de voz y guiones personalizados.",
      pricing: [
        { label: "Presupuesto", value: "Personalizado" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Funcionalidades Extras</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Potencia aún más tu sistema con estos módulos adicionales a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{feature.title}</h3>
                  <p className="text-lg text-brand-blue font-medium">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed flex-grow">
                {feature.description}
              </p>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800/50">
                <div className="space-y-3">
                  {feature.pricing.map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-slate-800 last:border-0 pb-2 last:pb-0">
                      <span className="text-slate-400 font-medium">{price.label}</span>
                      <span className="text-xl font-bold text-white">{price.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraFeatures;