import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { MARGIN_PER_UNIT, ESTIMATED_ANNUAL_INVESTMENT } from '../constants';
import { CalculatorInputs, CalculatorResults } from '../types';
import Button from './Button';
import GlowBorder from './GlowBorder';

interface RoiCalculatorProps {
  onContactClick: () => void;
}

const EXTRA_SALES_RATE = 0.2;
const DATABASE_RECOVERY_RATE = 0.15;
const RECOVERED_CONTACT_TO_PATIENT_RATE = 0.1;
const HEARING_AIDS_PER_PATIENT = 1.8;
const HOURLY_BUSINESS_COST = 25;
const FULL_PACK_SETUP = 1990;
const FULL_PACK_MONTHLY = 215;
const FULL_PACK_SECOND_YEAR_COST = FULL_PACK_MONTHLY * 12;

const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onContactClick }) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    hearingAidsPerYear: 15,
    adminHoursPerMonth: 30,
    databaseContacts: 100,
  });

  const [results, setResults] = useState<CalculatorResults>({
    annualProfit: 0,
    monthsToAmortize: 0,
    extraSales: 0,
    monthlyBenefit: 0,
    monthlySalesBenefit: 0,
    monthlyRecoveredBenefit: 0,
    monthlyTimeSavings: 0,
    recoveredHearingAids: 0,
    firstYearAnnualBenefit: 0,
    secondYearAnnualBenefit: 0,
    firstYearRoi: 0,
    secondYearRoi: 0,
  });

  useEffect(() => {
    const extraHearingAids = inputs.hearingAidsPerYear * EXTRA_SALES_RATE;
    const annualSalesBenefit = extraHearingAids * MARGIN_PER_UNIT;

    const recoveredContacts = inputs.databaseContacts * DATABASE_RECOVERY_RATE;
    const recoveredPatients = recoveredContacts * RECOVERED_CONTACT_TO_PATIENT_RATE;
    const recoveredHearingAids = recoveredPatients * HEARING_AIDS_PER_PATIENT;
    const annualRecoveredBenefit = recoveredHearingAids * MARGIN_PER_UNIT;

    const monthlyTimeSavings = inputs.adminHoursPerMonth * HOURLY_BUSINESS_COST;
    const annualTimeSavings = monthlyTimeSavings * 12;

    const annualProfit = annualSalesBenefit + annualRecoveredBenefit + annualTimeSavings;
    const monthlyBenefit = annualProfit / 12;
    const firstYearAnnualBenefit = annualProfit - ESTIMATED_ANNUAL_INVESTMENT;
    const secondYearAnnualBenefit = annualProfit - FULL_PACK_SECOND_YEAR_COST;
    const firstYearRoi = ESTIMATED_ANNUAL_INVESTMENT > 0
      ? ((annualProfit - ESTIMATED_ANNUAL_INVESTMENT) / ESTIMATED_ANNUAL_INVESTMENT) * 100
      : 0;
    const secondYearRoi = FULL_PACK_SECOND_YEAR_COST > 0
      ? ((annualProfit - FULL_PACK_SECOND_YEAR_COST) / FULL_PACK_SECOND_YEAR_COST) * 100
      : 0;
    const monthsToAmortize = monthlyBenefit > 0
      ? ESTIMATED_ANNUAL_INVESTMENT / monthlyBenefit
      : 99;

    setResults({
      annualProfit: Math.round(annualProfit),
      monthsToAmortize: parseFloat(monthsToAmortize.toFixed(1)),
      extraSales: parseFloat(extraHearingAids.toFixed(1)),
      monthlyBenefit: Math.round(monthlyBenefit),
      monthlySalesBenefit: Math.round(annualSalesBenefit / 12),
      monthlyRecoveredBenefit: Math.round(annualRecoveredBenefit / 12),
      monthlyTimeSavings: Math.round(monthlyTimeSavings),
      recoveredHearingAids: parseFloat(recoveredHearingAids.toFixed(1)),
      firstYearAnnualBenefit: Math.round(firstYearAnnualBenefit),
      secondYearAnnualBenefit: Math.round(secondYearAnnualBenefit),
      firstYearRoi: Math.round(firstYearRoi),
      secondYearRoi: Math.round(secondYearRoi),
    });
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <section id="calculadora" className="py-12 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Calculadora de Rentabilidad</h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Estima la amortización del Full Pack combinando más ventas, recuperación de base de datos y ahorro de horas.
          </p>
        </div>

        <div className="neon-corner card-accent-orange bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-visible max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">
          <GlowBorder />
          <div className="p-5 lg:p-6 bg-slate-800/30">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-5">
              <Calculator size={22} className="text-brand-orange" />
              Tus datos actuales
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">¿Cuántos audífonos vendes al año?</label>
                <input
                  type="number"
                  name="hearingAidsPerYear"
                  value={inputs.hearingAidsPerYear}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-xl font-bold text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Horas mensuales de agenda y recordatorios</label>
                <input
                  type="number"
                  name="adminHoursPerMonth"
                  value={inputs.adminHoursPerMonth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-xl font-bold text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Contactos en tu base de datos</label>
                <input
                  type="number"
                  name="databaseContacts"
                  value={inputs.databaseContacts}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-xl font-bold text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="p-5 lg:p-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-5 items-stretch">
              <div className="rounded-3xl bg-slate-950/50 border border-brand-orange/40 p-5 flex flex-col justify-center">
                <p className="text-brand-orange uppercase text-xs md:text-sm font-black tracking-wider mb-3">Amortización estimada</p>
                <div className="flex items-end gap-3 mb-3">
                  <p className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-300 leading-none">
                    {results.monthsToAmortize < 1 ? '<1' : results.monthsToAmortize}
                  </p>
                  <p className="text-white text-2xl font-black pb-2">meses</p>
                </div>
                <p className="text-slate-200 text-xl font-bold leading-tight">
                  ¿Cuánto tardarás en amortizar tu inversión en Hear-O?
                </p>
                <p className="text-slate-400 text-sm mt-4">
                  Full Pack: {FULL_PACK_SETUP.toLocaleString('es-ES')}€ implantación + 12 meses de mantenimiento ({FULL_PACK_MONTHLY}€/mes) = {ESTIMATED_ANNUAL_INVESTMENT.toLocaleString('es-ES')}€
                </p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-xs text-slate-400 mb-1">Beneficio mensual</p>
                    <p className="text-2xl font-bold text-white">{results.monthlyBenefit.toLocaleString('es-ES')}€</p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700/50">
                    <p className="text-xs text-slate-400 mb-1">Beneficio anual año 1</p>
                    <p className="text-2xl font-bold text-white">{results.firstYearAnnualBenefit.toLocaleString('es-ES')}€</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-brand-orange/10 p-4 rounded-xl border border-brand-orange/40">
                    <p className="text-xs text-orange-200 mb-1">Ahorro anual año 2</p>
                    <p className="text-2xl font-bold text-white">{results.secondYearAnnualBenefit.toLocaleString('es-ES')}€</p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-green-500/30">
                    <p className="text-xs text-slate-400 mb-1">ROI 1er año</p>
                    <p className="text-2xl font-bold text-green-400">{results.firstYearRoi}%</p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-green-500/30">
                    <p className="text-xs text-slate-400 mb-1">ROI 2º año</p>
                    <p className="text-2xl font-bold text-green-400">{results.secondYearRoi}%</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-xl text-sm text-slate-300 border border-slate-700/50 leading-relaxed">
                  <p>
                    <strong>Resumen:</strong> el beneficio mensual combina ventas extra, recuperación de contactos y ahorro de horas. En el año 1 ya descontamos la implantación y 12 meses de mantenimiento; en el año 2 solo descontamos el mantenimiento anual.
                  </p>
                </div>

                <Button onClick={onContactClick} size="md" className="w-full text-base py-3">
                  Quiero revisar mi caso <ArrowRight className="ml-2" />
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
