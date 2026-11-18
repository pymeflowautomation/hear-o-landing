import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import LandingHeader from './LandingHeader';
import Footer from './Footer';

interface CollaborationPageProps {
  onContact: () => void;
}

const products = [
  { id: 'test', name: 'Prueba Auditiva Online', type: 'Pago único', initial: 70, recurring: 0, defaultQuantity: 7 },
  { id: 'anamnesis', name: 'Anamnesis Digital', type: 'Pago único', initial: 100, recurring: 0, defaultQuantity: 4 },
  { id: 'marketing', name: 'Marketing Studio', type: 'Suscripción', initial: 65, recurring: 15, defaultQuantity: 4 },
  { id: 'assistant', name: 'Asistente de Anamnesis', type: 'Suscripción', initial: 155, recurring: 15, defaultQuantity: 0 },
  { id: 'experts', name: 'Expertos IA', type: 'Suscripción', initial: 70, recurring: 10, defaultQuantity: 0 },
  { id: 'crm', name: 'CRM y Calendario', type: 'Suscripción', initial: 120, recurring: 10, defaultQuantity: 0 },
  { id: 'fullpack', name: 'Full Pack', type: 'Suscripción', initial: 400, recurring: 35, defaultQuantity: 1 },
];

const money = (amount: number) => new Intl.NumberFormat('es-ES', {
  style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2,
}).format(amount);

const CollaborationPage: React.FC<CollaborationPageProps> = ({ onContact }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((product) => [product.id, product.defaultQuantity])),
  );
  const [selectedMonth, setSelectedMonth] = useState(12);

  const projection = useMemo(() => {
    const salesThisMonth = products.reduce(
      (total, product) => total + (quantities[product.id] ?? 0) * (product.initial + product.recurring),
      0,
    );
    const recurringPerGroup = products.reduce(
      (total, product) => total + (quantities[product.id] ?? 0) * product.recurring,
      0,
    );
    const recurringFromPreviousMonths = recurringPerGroup * (selectedMonth - 1);
    return {
      salesThisMonth,
      recurringPerGroup,
      recurringFromPreviousMonths,
      totalThisMonth: salesThisMonth + recurringFromPreviousMonths,
      annualTotal: salesThisMonth * 12 + recurringPerGroup * 66,
      recurringAtYearEnd: recurringPerGroup * 12,
      totalSolutions: products.reduce((total, product) => total + (quantities[product.id] ?? 0), 0),
    };
  }, [quantities, selectedMonth]);

  const changeQuantity = (id: string, value: number) => {
    setQuantities((current) => ({ ...current, [id]: Math.max(0, Math.min(999, Math.floor(value) || 0)) }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-orange/30 selection:text-white">
      <Helmet>
        <title>Colabora con Hear-O | Comisiones comerciales</title>
        <meta name="description" content="Descubre cuánto puedes ganar colaborando con Hear-O y calcula tus comisiones mensuales y recurrentes." />
        <link rel="canonical" href="https://hear-o.es/colabora" />
      </Helmet>
      <LandingHeader onContactClick={onContact} />

      <main className="pt-24 md:pt-32">
        <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_46%),radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.12),transparent_38%)]">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <div className="text-sm font-bold uppercase tracking-[0.17em] text-brand-orange">Programa de colaboradores</div>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Colabora con Hear-O</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Tú nos ayudas a llegar a nuevos clientes. Por cada venta que se cierre, ganas una comisión. Algunas comisiones son de pago único; otras se repiten cada mes mientras el cliente siga pagando.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 md:max-w-3xl">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/75 p-5">
                <h2 className="font-bold">Pago único</h2>
                <p className="mt-1 text-sm text-slate-400">Cobras una vez por cada venta.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900/75 p-5">
                <h2 className="font-bold">Suscripción</h2>
                <p className="mt-1 text-sm text-slate-400">Cobras al inicio y cada mes durante el primer año de vida del cliente, mientras siga pagando.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold md:text-3xl">¿Cuánto ganas por cada venta?</h2>
            <p className="mt-2 text-slate-400">La comisión por alta se paga una vez; en las suscripciones se añade la comisión mensual durante el primer año.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-slate-800/80 text-xs font-bold uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-5 py-4 md:px-7">Producto o servicio</th>
                    <th className="px-5 py-4">Tipo</th>
                    <th className="px-5 py-4 text-right">Por alta</th>
                    <th className="px-5 py-4 text-right">Comisión mensual</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-slate-800">
                      <th scope="row" className="px-5 py-4 font-medium text-slate-200 md:px-7">{product.name}</th>
                      <td className="px-5 py-4">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.type === 'Pago único' ? 'bg-blue-400/10 text-blue-200' : 'bg-orange-400/10 text-orange-300'}`}>
                          {product.type}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-bold text-white">{money(product.initial)}</td>
                      <td className="px-5 py-4 text-right font-semibold text-slate-300">{product.recurring > 0 ? `${money(product.recurring)} / mes` : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-800 px-5 py-4 text-sm text-slate-400 md:px-7">
              Las comisiones mensuales se cobran mientras el cliente mantenga y pague la suscripción, durante su primer año.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/35">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <div className="mb-8 max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.17em] text-blue-300">Ejemplo y proyección</div>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Calcula tus comisiones</h2>
              <p className="mt-3 leading-relaxed text-slate-300">Ajusta cuántas ventas haces al mes y elige un mes para ver cómo se acumulan las comisiones recurrentes. El ejemplo empieza con la combinación de referencia.</p>
            </div>

            <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5 md:p-7">
                <div className="flex items-end justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold">Ventas de cada mes</h3>
                    <p className="mt-1 text-sm text-slate-400">Cambia las cantidades para simular otro escenario.</p>
                  </div>
                  <div className="shrink-0 rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-300">{projection.totalSolutions} ventas</div>
                </div>

                <div className="mt-3 divide-y divide-slate-800">
                  {products.map((product) => {
                    const quantity = quantities[product.id] ?? 0;
                    return (
                      <div key={product.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <div className="font-medium text-slate-200">{product.name}</div>
                          <div className="mt-0.5 text-xs text-slate-500">{money(product.initial)} por alta{product.recurring > 0 ? ` · ${money(product.recurring)}/mes durante el primer año` : ''}</div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <button type="button" onClick={() => changeQuantity(product.id, quantity - 1)} aria-label={`Restar una venta de ${product.name}`} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"><Minus size={16} /></button>
                          <input
                            type="number"
                            inputMode="numeric"
                            min={0}
                            max={999}
                            step={1}
                            aria-label={`Ventas mensuales de ${product.name}`}
                            value={quantity}
                            onChange={(event) => changeQuantity(product.id, Number(event.target.value))}
                            className="h-9 w-14 rounded-lg border border-slate-700 bg-slate-900 text-center font-bold text-white outline-none focus:border-blue-400"
                          />
                          <button type="button" onClick={() => changeQuantity(product.id, quantity + 1)} aria-label={`Añadir una venta de ${product.name}`} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"><Plus size={16} /></button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 border-t border-slate-700 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="projection-month" className="font-semibold text-slate-200">Consultar mes</label>
                    <span className="rounded-lg bg-blue-400/10 px-3 py-1.5 font-bold text-blue-200">Mes {selectedMonth} de 12</span>
                  </div>
                  <input
                    id="projection-month"
                    type="range"
                    min={1}
                    max={12}
                    step={1}
                    value={selectedMonth}
                    onChange={(event) => setSelectedMonth(Number(event.target.value))}
                    className="mt-4 w-full accent-blue-400"
                  />
                  <div className="flex justify-between text-xs text-slate-500"><span>Mes 1</span><span>Mes 12</span></div>
                </div>
              </div>

              <div>
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">Ingresos estimados en el mes {selectedMonth}</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
                    <div className="text-sm text-slate-400">Por las ventas de este mes</div>
                    <div className="mt-2 text-2xl font-bold text-white">{money(projection.salesThisMonth)}</div>
                    <div className="mt-1 text-xs text-slate-500">Altas y primeras cuotas</div>
                  </div>
                  <div className="rounded-2xl border border-green-400/25 bg-green-400/5 p-5">
                    <div className="text-sm text-slate-300">Recurrente automático de meses anteriores</div>
                    <div className="mt-2 text-2xl font-bold text-green-300">{money(projection.recurringFromPreviousMonths)}</div>
                    <div className="mt-1 text-xs text-slate-500">Suscripciones ya activas</div>
                  </div>
                </div>
                <div className="mt-3 flex items-end justify-between gap-4 rounded-2xl border border-orange-300/30 bg-orange-400/10 p-5 md:p-6">
                  <div><div className="font-bold text-orange-100">Total estimado en el mes {selectedMonth}</div><div className="mt-1 text-sm text-slate-400">Ventas nuevas + comisiones recurrentes</div></div>
                  <div className="shrink-0 text-3xl font-extrabold text-orange-300">{money(projection.totalThisMonth)}</div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/70 p-5 md:p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300">Si repites estas ventas cada mes</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-sm text-slate-400">Comisiones acumuladas en 12 meses</div>
                      <div className="mt-1 text-3xl font-extrabold text-white">{money(projection.annualTotal)}</div>
                      <div className="mt-1 text-xs text-slate-500">Ventas del año + cuotas posteriores</div>
                    </div>
                    <div className="sm:border-l sm:border-slate-800 sm:pl-5">
                      <div className="text-sm text-slate-400">Ingreso recurrente mensual al cierre del mes 12</div>
                      <div className="mt-1 text-3xl font-extrabold text-green-300">{money(projection.recurringAtYearEnd)}<span className="text-base font-semibold"> / mes</span></div>
                      <div className="mt-1 text-xs text-slate-500">Se mantiene mientras sigan pagando</div>
                    </div>
                  </div>
                  <p className="mt-5 border-t border-slate-800 pt-4 text-sm leading-relaxed text-slate-400">
                    Cada nuevo mes se suman las suscripciones vendidas en los meses anteriores. Por eso, al llegar al mes 12, parte de tus ingresos llega automáticamente de clientes que ya captaste.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/50 p-5 text-sm leading-relaxed text-slate-400">
              <h3 className="font-bold text-slate-200">Aclaraciones</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Los importes de comisión indicados no incluyen IVA.</li>
                <li>Para la Prueba Auditiva Online, la instalación (200 €) y el mantenimiento (20 €/mes) no generan comisión.</li>
                <li>Anamnesis Digital es un pago único; su mantenimiento opcional no genera comisión.</li>
                <li>Las comisiones por suscripción solo se reciben durante el primer año de vida de cada cliente.</li>
                <li>La proyección supone que se repite la misma combinación de ventas cada mes y que todas las suscripciones siguen activas y se cobran durante sus primeros 12 meses.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-gradient-to-r from-blue-500/15 via-slate-900 to-orange-500/15 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">¿Hablamos de una colaboración?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">Cuéntanos cómo trabajas y vemos juntos qué soluciones encajan con tus clientes.</p>
            <button onClick={onContact} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950">
              Contactar con Hear-O <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollaborationPage;
