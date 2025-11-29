import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, Zap, BarChart3, Target, Building2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import Button from './Button';

interface PricingProps {
    onContactClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  // Default to Annual payment
  const [isAnnual, setIsAnnual] = useState(true);
  
  // State to track which inner accordion is open per plan
  const [openSubSections, setOpenSubSections] = useState<Record<string, string>>({});

  const toggleSubSection = (planId: string, section: string) => {
      setOpenSubSections(prev => ({
          ...prev,
          [planId]: prev[planId] === section ? '' : section
      }));
  };

  return (
    <section id="precios" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Planes y Precios</h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Elige la potencia que tu centro necesita. Sin costes ocultos.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-16 relative z-20">
          <span className={`text-lg font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>
            Pago Mensual
          </span>
          
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-slate-700 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Cambiar ciclo de facturación"
          >
            <div 
              className={`absolute top-1 left-1 w-6 h-6 bg-brand-blue rounded-full transition-transform duration-300 shadow-md ${
                isAnnual ? 'translate-x-8' : 'translate-x-0'
              }`} 
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Pago Anual
            </span>
            <span className="bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-500/20 animate-pulse">
              2 Meses Gratis
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col ${plan.popular || plan.highlight ? 'lg:scale-105 z-10' : 'z-0'}`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white px-5 py-1.5 rounded-full text-base font-bold shadow-xl flex items-center gap-2 whitespace-nowrap z-30 border-4 border-slate-900 overflow-hidden ${
                  plan.id === 'premium' ? 'bg-brand-orange' : 'bg-brand-blue'
                }`}>
                  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
                  <div className="relative z-20 flex items-center gap-2">
                    <Zap size={18} className="fill-current" /> {plan.highlight}
                  </div>
                </div>
              )}

              {/* Premium Floating Badge */}
              {plan.id === 'premium' && (
                <div className="absolute -top-14 -right-10 z-40 animate-float">
                   <div className="bg-gradient-to-br from-green-500 to-emerald-700 text-white px-3 py-4 rounded-2xl shadow-2xl border-2 border-white/20 transform rotate-12 flex flex-col items-center justify-center shadow-green-900/50">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-green-100 text-center leading-tight mb-1">Promoción<br/>Lanzamiento</span>
                      <span className="text-4xl font-black leading-none drop-shadow-md my-0.5">30%</span>
                      <span className="text-xs font-bold uppercase tracking-wide text-green-100 mb-2">Ahorro</span>
                      <div className="w-full h-px bg-white/30 mb-1.5"></div>
                      <span className="text-[10px] font-bold leading-tight text-center text-white/90">100 primeros<br/>clientes</span>
                   </div>
                </div>
              )}

              {/* MAIN CARD CONTAINER */}
              <div 
                className={`relative rounded-3xl flex flex-col h-full overflow-hidden transition-all duration-300
                ${plan.popular || plan.highlight 
                  ? `bg-slate-800 border-2 ${plan.id === 'premium' ? 'border-brand-orange shadow-[0_0_60px_rgba(249,115,22,0.4)]' : 'border-brand-blue shadow-[0_0_40px_rgba(59,130,246,0.25)]'}` 
                  : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.3)]'}`}
              >
                {/* Header Content */}
                <div className="p-6 pb-2 border-b border-slate-700/50 mt-4">
                  <h3 className={`text-3xl font-bold mb-3 text-center ${plan.id === 'premium' ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-slate-300 mb-5 text-center leading-snug h-[80px] flex items-center justify-center px-1">
                    "{plan.description}"
                  </p>

                  {/* PRICING BLOCK */}
                  <div className="bg-slate-950/50 rounded-xl p-4 space-y-3 mb-4 border border-slate-800/50">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400 text-sm font-medium">Implantación <br/><span className="text-[10px] text-slate-500 font-normal">(Pago Único)</span></span>
                      <div className="text-right">
                         {plan.originalSetupPrice && (
                           <span className="block text-red-400 text-base line-through font-medium">{plan.originalSetupPrice}</span>
                         )}
                         <span className="text-xl font-bold text-white">{plan.setupPrice}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-slate-400 text-sm font-medium">Cuota <br/>Mantenimiento</span>
                      <div className="text-right">
                         {plan.originalMonthlyPrice && (
                           <span className="block text-red-400 text-base line-through font-medium">{plan.originalMonthlyPrice}</span>
                         )}
                         <span className={`text-3xl font-bold ${plan.id === 'premium' ? 'text-green-400' : 'text-white'}`}>
                           {isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice}
                         </span>
                         <span className="text-slate-500 text-xs block">
                           /mes {isAnnual && '(facturado anual)'}
                         </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-center text-brand-blue font-semibold bg-brand-blue/10 py-2 rounded border border-brand-blue/20 flex flex-col justify-center items-center gap-1">
                      <span className="text-base font-bold leading-tight">{plan.amortizationTime}</span>
                      <span className="text-sm opacity-90 leading-tight">{plan.amortizationBenefit}</span>
                    </div>
                  </div>

                  <Button 
                    variant={plan.popular || plan.id === 'premium' ? 'primary' : 'outline'} 
                    className="w-full text-lg py-3 font-bold"
                    onClick={onContactClick}
                  >
                    Seleccionar {plan.name}
                  </Button>
                </div>

                {/* Features Content */}
                <div className="p-6 pt-4 flex flex-col flex-1">
                  
                  {/* ALL FEATURES VISIBLE */}
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, idx) => {
                      // Check if this feature is the "Todo lo incluido en..." item
                      const isIncludedItem = feature.text.startsWith('Todo lo incluido en');
                      
                      return (
                        <li 
                          key={idx} 
                          className={`flex items-start gap-2.5 ${isIncludedItem ? 'bg-slate-800/80 p-2.5 rounded-lg -mx-2.5 border border-slate-700/80 mb-2 shadow-sm' : ''}`}
                        >
                          {feature.included ? (
                            <Check 
                              size={18} 
                              className={`mt-0.5 shrink-0 ${
                                isIncludedItem 
                                  ? 'text-white font-extrabold drop-shadow-md' 
                                  : (plan.id === 'premium' ? 'text-brand-orange' : 'text-green-400')
                              }`} 
                            />
                          ) : (
                            <X size={18} className="text-slate-700 mt-0.5 shrink-0" />
                          )}
                          <span 
                            className={`text-sm md:text-base leading-tight ${
                              isIncludedItem 
                                ? 'text-white font-bold tracking-wide' 
                                : (feature.included ? 'text-slate-300' : 'text-slate-600')
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Accordions Container - Pushed to bottom */}
                  <div className="space-y-4 mt-auto">
                    
                    {/* ACCORDION 1: Beneficios en Datos */}
                    <div className="rounded-xl overflow-hidden shadow-sm">
                       <button 
                         onClick={() => toggleSubSection(plan.id, 'benefits')}
                         className={`w-full flex items-center justify-between p-4 transition-all duration-300 border-l-[6px] rounded-lg ${
                             openSubSections[plan.id] === 'benefits' 
                             ? 'bg-slate-800 border-brand-orange text-white shadow-lg' 
                             : 'bg-slate-900 border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-500'
                         }`}
                       >
                           <span className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider">
                               <BarChart3 size={20} className={openSubSections[plan.id] === 'benefits' ? 'text-brand-orange' : 'text-slate-500'} />
                               Beneficios en Datos
                           </span>
                           {openSubSections[plan.id] === 'benefits' ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                       </button>

                       <div className={`overflow-hidden transition-all duration-300 bg-slate-950/30 ${openSubSections[plan.id] === 'benefits' ? 'max-h-[800px] opacity-100 border-x border-b border-slate-800 mt-1 rounded-b-lg' : 'max-h-0 opacity-0'}`}>
                           <div className="p-4 text-slate-300 text-sm space-y-3">
                               {plan.dataBenefits && plan.dataBenefits.map((item, idx) => {
                                   const parts = item.split('**');
                                   const hasBold = parts.length >= 3;
                                   
                                   return (
                                       <div key={idx} className="flex gap-2.5 items-start">
                                           <span className="shrink-0 mt-0.5">{item.split(' ')[0]}</span>
                                           <span className="leading-snug">
                                               {hasBold ? (
                                                   <>
                                                       <strong className="text-white font-semibold">{parts[1]}</strong>
                                                       {parts[2]}
                                                   </>
                                               ) : (
                                                   item.substring(item.indexOf(' ') + 1)
                                               )}
                                           </span>
                                       </div>
                                   );
                               })}
                           </div>
                       </div>
                    </div>

                    {/* ACCORDION 2: Es para ti si */}
                    <div className="rounded-xl overflow-hidden shadow-sm">
                       <button 
                         onClick={() => toggleSubSection(plan.id, 'ideal')}
                         className={`w-full flex items-center justify-between p-4 transition-all duration-300 border-l-[6px] rounded-lg ${
                             openSubSections[plan.id] === 'ideal' 
                             ? 'bg-slate-800 border-brand-blue text-white shadow-lg' 
                             : 'bg-slate-900 border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-500'
                         }`}
                       >
                           <span className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider">
                               <Target size={20} className={openSubSections[plan.id] === 'ideal' ? 'text-brand-blue' : 'text-slate-500'} />
                               Es para ti si...
                           </span>
                           {openSubSections[plan.id] === 'ideal' ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                       </button>

                       <div className={`overflow-hidden transition-all duration-300 bg-slate-950/30 ${openSubSections[plan.id] === 'ideal' ? 'max-h-[500px] opacity-100 border-x border-b border-slate-800 mt-1 rounded-b-lg' : 'max-h-0 opacity-0'}`}>
                           <div className="p-4">
                               <ul className="space-y-2.5">
                                {plan.idealFor.map((item, i) => (
                                  <li key={i} className="text-slate-400 text-sm leading-snug flex gap-2.5 items-start">
                                     <span className="text-brand-blue mt-1">•</span> <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                           </div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Plans CTA Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
             <div className="flex items-center gap-5">
               <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hidden sm:block">
                 <Building2 className="text-slate-300" size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">¿Tienes Varios Centros?</h3>
                 <p className="text-slate-400 text-lg">Contacta con nosotros y te informamos de nuestros planes para Grupos</p>
               </div>
             </div>
             <Button variant="outline" onClick={onContactClick} className="whitespace-nowrap border-slate-600 text-slate-300 hover:text-white hover:border-white shrink-0">
                Consultar Plan Grupos
             </Button>
          </div>
        </div>

        <div className="text-center">
            <p className="text-slate-500 text-lg">
                * Todos los precios son sin IVA. El mantenimiento incluye soporte, actualizaciones y costes de servidores IA.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;