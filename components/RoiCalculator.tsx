import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { 
  MARGIN_PER_UNIT, 
  UNITS_PER_PATIENT, 
  HOURLY_COST, 
  CONVERSION_IMPROVEMENT, 
  TIME_SAVING, 
  RECOVERY_RATE,
  RECOVERY_CONVERSION,
  ESTIMATED_ANNUAL_INVESTMENT
} from '../constants';
import { CalculatorInputs, CalculatorResults } from '../types';
import Button from './Button';

interface RoiCalculatorProps {
    onContactClick: () => void;
}

const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onContactClick }) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    studiesPerMonth: 10,
    salesPerMonth: 1,
    adminHoursPerMonth: 30,
    oldPatients: 150,
  });

  const [results, setResults] = useState<CalculatorResults>({
    annualProfit: 0,
    monthsToAmortize: 0,
    extraSales: 0
  });

  useEffect(() => {
    const calculateROI = () => {
      // 1. Sales Improvement
      const currentConversion = inputs.salesPerMonth / (inputs.studiesPerMonth || 1); // Avoid div by 0
      const newConversion = Math.min(currentConversion * (1 + CONVERSION_IMPROVEMENT), 0.9); // Cap at 90%
      const extraSalesCount = (inputs.studiesPerMonth * newConversion) - inputs.salesPerMonth;
      const monthlyExtraProfit = extraSalesCount * MARGIN_PER_UNIT * UNITS_PER_PATIENT;

      // 2. Time Savings
      const hoursSaved = inputs.adminHoursPerMonth * TIME_SAVING;
      const monthlyTimeSavingsValue = hoursSaved * HOURLY_COST;

      // 3. Database Recovery (One-off value annualized? Or divided by 12? Let's assume we process them over a year)
      const recoveredPatients = inputs.oldPatients * RECOVERY_RATE; // Patients brought back
      const recoveredSales = recoveredPatients * RECOVERY_CONVERSION; 
      const totalRecoveryValue = recoveredSales * MARGIN_PER_UNIT * UNITS_PER_PATIENT;
      const monthlyRecoveryValue = totalRecoveryValue / 12; 

      // Totals
      const totalMonthlyBenefit = monthlyExtraProfit + monthlyTimeSavingsValue + monthlyRecoveryValue;
      const annualProfit = totalMonthlyBenefit * 12;

      // Amortization
      // If benefit is 0, amort is infinite.
      const monthsToAmortize = annualProfit > 0 
        ? (ESTIMATED_ANNUAL_INVESTMENT / annualProfit) * 12 
        : 99;

      setResults({
        annualProfit: Math.round(annualProfit),
        monthsToAmortize: parseFloat(monthsToAmortize.toFixed(1)),
        extraSales: Math.round(extraSalesCount)
      });
    };

    calculateROI();
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <section id="calculadora" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Calculadora de Rentabilidad</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Descubre <strong>cuánto tardarás en amortizar la inversión</strong> y qué rentabilidad conseguirías. Introduce tus datos actuales y mira lo que Hear-O puede hacer por tu cuenta de resultados.
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* Inputs Section */}
          <div className="p-8 lg:p-10 space-y-8 bg-slate-800/30">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Calculator size={24} className="text-brand-orange"/>
              Tus Datos Actuales
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-slate-400 mb-2">Estudios auditivos a nuevos pacientes al mes</label>
                <input 
                  type="number" 
                  name="studiesPerMonth"
                  value={inputs.studiesPerMonth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-lg text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-slate-400 mb-2">Audífonos vendidos al mes</label>
                <input 
                  type="number" 
                  name="salesPerMonth"
                  value={inputs.salesPerMonth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-lg text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-slate-400 mb-2">Horas de gestión administrativa al mes</label>
                <span className="text-sm text-slate-500 block mb-2">Incluye gestión de citas, recordatorios, llamadas...</span>
                <input 
                  type="number" 
                  name="adminHoursPerMonth"
                  value={inputs.adminHoursPerMonth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-lg text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-slate-400 mb-2">Pacientes antiguos sin contactar (Base de Datos)</label>
                <input 
                  type="number" 
                  name="oldPatients"
                  value={inputs.oldPatients}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-4 text-lg text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="p-8 lg:p-10 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 text-center space-y-10">
               <div>
                 <p className="text-slate-400 uppercase text-base font-bold tracking-wider mb-3">Beneficio Anual Potencial</p>
                 <p className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                   {results.annualProfit.toLocaleString('es-ES')}€
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-700/50">
                    <p className="text-lg text-slate-400 mb-1">Amortización en</p>
                    <p className="text-3xl font-bold text-white">{results.monthsToAmortize < 1 ? '< 1 mes' : `${results.monthsToAmortize} meses`}</p>
                    <p className="text-cyan-400 text-sm font-bold mt-2 italic">*Basado en coste Plan Premium (1er año)</p>
                 </div>
                 <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-700/50">
                    <p className="text-lg text-slate-400 mb-1">Ventas Extra/Mes (Est)</p>
                    <p className="text-3xl font-bold text-white">+{results.extraSales}</p>
                 </div>
               </div>

               <div className="text-left bg-slate-800/50 p-6 rounded-xl text-lg text-slate-300 border border-slate-700/50 leading-relaxed">
                 <p>
                   <strong>Análisis:</strong> Con vender solo <strong>{Math.max(1, Math.round(results.extraSales/2))}</strong> audífono más al mes, sumado a las horas ahorradas ({Math.round(inputs.adminHoursPerMonth * TIME_SAVING)}h/mes) en gestión de citas y recordatorios, y la recuperación del 20% de tus pacientes olvidados, tu inversión está totalmente garantizada.
                 </p>
               </div>

               <div className="pt-4">
                  <Button onClick={onContactClick} size="lg" className="w-full text-lg py-4">
                    Contacta sin compromiso
                  </Button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;