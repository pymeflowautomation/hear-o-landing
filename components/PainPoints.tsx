import React from 'react';
import { AlertTriangle, Users, Clock, Target } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <AlertTriangle size={36} className="text-red-400" />,
      title: "Pierdes Ventas",
      desc: "No sabes cómo argumentar audífonos y te enredas en tecnicismos, perdiendo la conexión emocional con el paciente."
    },
    {
      icon: <Users size={36} className="text-orange-400" />,
      title: "Pacientes Perdidos",
      desc: "Pacientes antiguos desaparecen de tu radar y no tienes un sistema automático para recuperarlos y fidelizarlos."
    },
    {
      icon: <Clock size={36} className="text-blue-400" />,
      title: "Tiempo Perdido",
      desc: "30h/mes desperdiciadas en gestión manual de citas, llamadas fallidas y recordatorios que podrías automatizar."
    },
    {
      icon: <Target size={36} className="text-purple-400" />,
      title: "No Captas Clientes",
      desc: "No consigues Captar nuevos pacientes ni aprovechar tu base. La competencia es Feroz, usa estrategias de Marketing y tú no sabes cómo luchar."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">¿Te suena esto?</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            El sector auditivo crece exponencialmente. Si no automatizas, te quedas atrás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {points.map((point, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group">
              <div className="mb-6 p-4 bg-slate-900 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;