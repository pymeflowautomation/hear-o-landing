import React from 'react';

const Carousel: React.FC = () => {
  // Placeholder images
  const images = [
    "https://picsum.photos/id/1/800/500",
    "https://picsum.photos/id/20/800/500",
    "https://picsum.photos/id/3/800/500",
    "https://picsum.photos/id/48/800/500",
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Hear-O en Acción</h2>
          <p className="text-slate-400 mt-2">Interfaz intuitiva diseñada para audiólogos, no para informáticos.</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
            >
              <div className="w-[85vw] md:w-[600px] rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative group">
                <img 
                  src={src} 
                  alt={`Screenshot ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <span className="text-white font-medium">Módulo {index + 1}: Gestión Avanzada</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
             {/* Simple indicators */}
             {images.map((_, i) => (
                 <div key={i} className="w-2 h-2 rounded-full bg-slate-600"></div>
             ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;