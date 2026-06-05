import React from 'react';
import { BookOpen, Newspaper, Presentation, Video } from 'lucide-react';
import Reveal from './Reveal';
import ZoomableImage from './ZoomableImage';

const ResourcesSection: React.FC = () => (
  <section className="py-24 bg-slate-950 px-4">
    <Reveal className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4">Recursos Hear-O</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Materiales para que el equipo venda y argumente mejor
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Además de los módulos principales, Hear-O puede incluir recursos de apoyo para formar al equipo, explicar gamas y mantenerse al día con noticias del sector.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Video className="text-brand-orange mb-4" size={30} />
              <h3 className="text-xl font-bold text-white mb-2">Curso de ventas online</h3>
              <p className="text-slate-400">Capacitación para que todo el equipo comparta método, argumentos y criterio comercial.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Presentation className="text-blue-400 mb-4" size={30} />
              <h3 className="text-xl font-bold text-white mb-2">Argumentario de gamas</h3>
              <p className="text-slate-400">Landing de apoyo para explicar prestaciones, diferencias y valor de cada gama de audífonos.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Newspaper className="text-green-400 mb-4" size={30} />
              <h3 className="text-xl font-bold text-white mb-2">Feed de noticias</h3>
              <p className="text-slate-400">Contenido del sector para mantener al centro informado y generar ideas de comunicación.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <BookOpen className="text-purple-400 mb-4" size={30} />
              <h3 className="text-xl font-bold text-white mb-2">Recursos de consulta</h3>
              <p className="text-slate-400">Material práctico para apoyar conversaciones con pacientes y resolver dudas frecuentes.</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-3 shadow-2xl">
          <ZoomableImage
            src="/images/recursos_hear-o.webp"
            alt="Recursos Hear-O para centros auditivos"
            frameClassName="rounded-2xl"
          />
        </div>
      </div>
    </Reveal>
  </section>
);

export default ResourcesSection;
