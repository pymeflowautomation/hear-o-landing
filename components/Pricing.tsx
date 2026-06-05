import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown, ChevronUp, Zap, BarChart3, Target, Building2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { FULL_PACK } from '../seoContent';
import Button from './Button';

interface PricingProps {
    onContactClick: () => void;
    onNavigate: (view: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick, onNavigate }) => {
  // State for annual billing per plan
  const [annualBilling, setAnnualBilling] = useState<Record<string, boolean>>({});
  
  // Initialize all plans to annual by default
  React.useEffect(() => {
    const initial: Record<string, boolean> = {};
    PRICING_PLANS.forEach(p => initial[p.id] = true);
    setAnnualBilling(initial);
  }, []);

  // State to track which inner accordion is open per plan
  const [openSubSections, setOpenSubSections] = useState<Record<string, string>>({});

  const toggleSubSection = (planId: string, section: string) => {
      setOpenSubSections(prev => ({
          ...prev,
          [planId]: prev[planId] === section ? '' : section
      }));
  };

  const toggleAnnual = (planId: string) => {
    setAnnualBilling(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const scrollToPlan = (planId: string) => {
    const element = document.getElementById(`plan-${planId}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const corePlans = PRICING_PLANS.filter(p => ['marketing-studio', 'anamnesis-assistant'].includes(p.id));
  const starterPlans = PRICING_PLANS.filter(p => ['expertos-ia', 'calendar-smart'].includes(p.id));

  const getPlanPath = (planId: string) => {
    if (planId === 'marketing-studio') return '/marketing-automatico-centros-auditivos';
    if (planId === 'anamnesis-assistant') return '/software-anamnesis-vender-mas-audifonos';
    if (planId === 'calendar-smart') return '/crm-calendario-centros-auditivos';
    return '/expertos-ia-audiologia';
  };

  const PlanCard = ({ plan }: { plan: typeof PRICING_PLANS[0] }) => {
    const isAnnual = annualBilling[plan.id] ?? true;

    return (
    <div 
      id={`plan-${plan.id}`}
      className={`relative flex flex-col ${plan.popular || plan.highlight ? 'lg:scale-105 z-10' : 'z-0'}`}
    >
      {/* Highlight Badge */}
      {plan.highlight && (
        <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white px-5 py-1.5 rounded-full text-base font-bold shadow-xl flex items-center gap-2 whitespace-nowrap z-30 border-4 border-slate-900 overflow-hidden ${
          plan.id === 'anamnesis-assistant' ? 'bg-brand-orange' : 'bg-brand-blue'
        }`}>
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
          <div className="relative z-20 flex items-center gap-2">
            <Zap size={18} className="fill-current" /> {plan.highlight}
          </div>
        </div>
      )}

      {/* MAIN CARD CONTAINER */}
      <div 
        className={`relative rounded-3xl flex flex-col h-full overflow-hidden transition-all duration-300
        ${plan.popular || plan.highlight 
          ? `bg-slate-800 border-2 ${plan.id === 'anamnesis-assistant' ? 'border-brand-orange shadow-[0_0_60px_rgba(249,115,22,0.4)]' : 'border-brand-blue shadow-[0_0_40px_rgba(59,130,246,0.25)]'}` 
          : 'bg-slate-900/80 border border-slate-600 shadow-[0_0_15px_rgba(255,255,255,0.07)] hover:border-slate-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]'}`}
      >
        {/* Header Content */}
        <div className="p-6 pb-2 border-b border-slate-700/50 mt-4">
          <h3 className={`text-3xl font-bold mb-3 text-center ${plan.id === 'anamnesis-assistant' ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400' : 'text-white'}`}>
            {plan.name}
          </h3>
          <p className="text-lg md:text-xl font-medium text-slate-300 mb-5 text-center leading-snug h-[80px] flex items-center justify-center px-1">
            "{plan.description}"
          </p>

          {(plan.id === 'marketing-studio' || plan.id === 'anamnesis-assistant' || plan.id === 'calendar-smart' || plan.id === 'expertos-ia') && (
            <Link 
                to={getPlanPath(plan.id)}
                className="block mx-auto mb-4 text-sm font-bold text-brand-blue hover:text-white transition-colors underline decoration-brand-blue/50 hover:decoration-white text-center"
            >
                Ver ficha completa del producto
            </Link>
          )}

          {/* PRICING BLOCK */}
          <div className="bg-slate-950/50 rounded-xl p-4 space-y-3 mb-4 border border-slate-800/50 relative overflow-hidden">
            
            {/* Toggle Inside Box */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-3 bg-slate-900/80 p-1 rounded-full border border-slate-700">
                <button 
                  onClick={() => isAnnual && toggleAnnual(plan.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${!isAnnual ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  Mensual
                </button>
                <button 
                  onClick={() => !isAnnual && toggleAnnual(plan.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${isAnnual ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                  Anual <span className="text-[10px] bg-white/20 px-1 rounded text-white">-20%</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-slate-400 text-sm font-medium">Implantación <br/><span className="text-[10px] text-slate-500 font-normal">(Pago único)</span></span>
              <div className="text-right">
                 {plan.originalSetupPrice && (
                   <span className="block text-red-400 text-base line-through font-medium">{plan.originalSetupPrice}</span>
                 )}
                 <span className="text-xl font-bold text-white">{plan.setupPrice}</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-400 text-sm font-medium">Cuota <br/>Mantenimiento</span>
              <div className="text-right">
                 {plan.originalMonthlyPrice && (
                   <span className="block text-red-400 text-base line-through font-medium">{plan.originalMonthlyPrice}</span>
                 )}
                 <span className={`text-3xl font-bold ${plan.id === 'anamnesis-assistant' ? 'text-green-400' : 'text-white'}`}>
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

          {(plan.id === 'marketing-studio' || plan.id === 'anamnesis-assistant' || plan.id === 'calendar-smart' || plan.id === 'expertos-ia') ? (
            <div className="flex gap-3">
              <Button 
                variant={plan.popular || plan.id === 'anamnesis-assistant' ? 'primary' : 'outline'} 
                className="flex-1 text-lg py-3 font-bold"
                onClick={onContactClick}
              >
                Me Interesa
              </Button>
              <Link 
                to={getPlanPath(plan.id)}
                className={`flex-1 flex items-center justify-center text-lg font-bold rounded-xl border transition-colors ${
                  plan.popular || plan.id === 'anamnesis-assistant' 
                    ? 'border-slate-600 text-slate-300 hover:text-white hover:border-white' 
                    : 'border-slate-600 text-slate-300 hover:text-white hover:border-white'
                }`}
              >
                Más información
              </Link>
            </div>
          ) : (
            <Button 
              variant={plan.popular || plan.id === 'anamnesis-assistant' ? 'primary' : 'outline'} 
              className="w-full text-lg py-3 font-bold"
              onClick={onContactClick}
            >
              Seleccionar {plan.name}
            </Button>
          )}
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
                          : (plan.id === 'anamnesis-assistant' ? 'text-brand-orange' : 'text-green-400')
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
    );
  };

  return (
    <section id="precios" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Soluciones y Precios</h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Elige un módulo o implanta todo el ecosistema Hear-O. Sin costes ocultos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-brand-orange/40 bg-gradient-to-br from-brand-orange/20 via-slate-800 to-blue-500/10 p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-center">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <div className="text-brand-orange text-sm font-bold uppercase tracking-wider">Oferta recomendada</div>
                  <div className="rounded-full bg-red-500 px-4 py-2 text-sm font-black text-white">Ahorra 20%</div>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{FULL_PACK.name}</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-6">
                  Los 4 módulos conectados: Marketing Studio, Asistente de Anamnesis, CRM & Calendario y Expertos IA.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-slate-200">
                  <span className="rounded-lg bg-slate-950/40 p-3">Marketing</span>
                  <span className="rounded-lg bg-slate-950/40 p-3">Anamnesis</span>
                  <span className="rounded-lg bg-slate-950/40 p-3">CRM & Calendario</span>
                  <span className="rounded-lg bg-slate-950/40 p-3">Expertos IA</span>
                </div>
              </div>
              <div className="bg-slate-950/70 rounded-2xl border border-slate-700 p-6">
                <div className="flex justify-between border-b border-slate-800 pb-4 mb-4">
                  <span className="text-slate-400">Implantación</span>
                  <div className="text-right">
                    <span className="block text-red-400 line-through">{FULL_PACK.originalSetupPrice}</span>
                    <span className="text-3xl font-bold text-white">{FULL_PACK.setupPrice}</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-slate-400">Cuota</span>
                  <div className="text-right">
                    <span className="block text-red-400 line-through">{FULL_PACK.originalMonthlyPrice}</span>
                    <span className="text-4xl font-bold text-green-400">{FULL_PACK.monthlyPrice}</span>
                    <span className="block text-xs text-slate-500">/mes facturado anual</span>
                  </div>
                </div>
                <Link to="/software-centros-auditivos-hear-o" className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
                  Ver Full Pack
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-7xl mx-auto">
          {PRICING_PLANS.map(plan => (
            <div 
              key={plan.id} 
              onClick={() => scrollToPlan(plan.id)}
              className="bg-slate-800/50 border border-slate-700 p-5 rounded-xl hover:border-brand-blue hover:bg-slate-800 transition-all cursor-pointer group flex flex-col"
            >
               <h4 className="font-bold text-white mb-2 group-hover:text-brand-blue transition-colors text-lg">{plan.name}</h4>
               <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-1">{plan.description}</p>
               <span className="text-xs font-bold text-brand-blue flex items-center gap-1 mt-auto">
                 Ver detalles <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform"/>
               </span>
            </div>
          ))}
        </div>

        {/* Core Plans Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-slate-700"></span>
            Soluciones Core
            <span className="w-12 h-px bg-slate-700"></span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {corePlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        {/* Starter Plans Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-300 mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-slate-700"></span>
            Herramientas Esenciales
            <span className="w-12 h-px bg-slate-700"></span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {starterPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        {/* Group Plans CTA Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
             <div className="flex items-center gap-5">
               <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hidden sm:block">
                 <Building2 className="text-slate-300" size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">¿Tienes varios centros?</h3>
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


