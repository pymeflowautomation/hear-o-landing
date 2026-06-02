import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { FULL_PACK } from '../seoContent';
import Button from './Button';

interface ModulePricingBoxProps {
  planId: string;
  onContact: () => void;
}

const ModulePricingBox: React.FC<ModulePricingBoxProps> = ({ planId, onContact }) => {
  const plan = PRICING_PLANS.find(item => item.id === planId);

  if (!plan) {
    return null;
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Precio del módulo</div>
          <h2 className="text-3xl font-bold text-white mb-5">{plan.name}</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between border-b border-slate-800 pb-4">
              <span className="text-slate-400">Implantacion</span>
              <span className="text-3xl font-bold text-white">{plan.setupPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Mantenimiento</span>
              <div className="text-right">
                <span className="text-4xl font-bold text-green-400">{plan.annualMonthlyPrice}</span>
                <span className="text-slate-500 text-sm">/mes</span>
                <span className="block text-xs text-slate-500">con facturación anual</span>
              </div>
            </div>
          </div>
          <Button onClick={onContact} size="lg" className="w-full">
            Me interesa este módulo
          </Button>
        </div>

        <div className="bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/30 rounded-3xl p-8">
          <div className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-3">Recomendado</div>
          <h2 className="text-3xl font-bold text-white mb-5">{FULL_PACK.name}</h2>
          <ul className="space-y-3 text-slate-300 mb-8">
            <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Incluye los 4 modulos conectados</li>
            <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Implantacion {FULL_PACK.setupPrice}</li>
            <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> {FULL_PACK.monthlyPrice}/mes con facturación anual</li>
            <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" /> Amortizacion estimada {FULL_PACK.amortization}</li>
          </ul>
          <Link to="/software-centros-auditivos-hear-o" className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 font-bold text-slate-950 hover:bg-slate-200 transition-colors">
            Ver Full Pack
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModulePricingBox;
