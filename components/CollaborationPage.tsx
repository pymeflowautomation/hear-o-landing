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

  const projection = useMemo(() => {
    const fixedCommissionPerMonth = products.reduce(
      (total, product) => total + (quantities[product.id] ?? 0) * product.initial,
      0,
    );
    const subscriptionCommissionPerCohort = products.reduce(
      (total, product) => total + (quantities[product.id] ?? 0) * product.recurring,
      0,
    );
    const monthlyPlan = Array.from({ length: 12 }, (_, index) => {
      const month = index + 1;
      const fixedCommission = fixedCommissionPerMonth;
      const subscriptionCommission = subscriptionCommissionPerCohort * month;
      return { month, fixedCommission, subscriptionCommission, total: fixedCommission + subscriptionCommission };
    });
    const fixedAnnualTotal = fixedCommissionPerMonth * 12;
    const subscriptionAnnualTotal = subscriptionCommissionPerCohort * 78;
    return {
      monthlyPlan,
      fixedAnnualTotal,
      subscriptionAnnualTotal,
      annualTotal: fixedAnnualTotal + subscriptionAnnualTotal,
      totalSolutions: products.reduce((total, product) => total + (quantities[product.id] ?? 0), 0),
    };
  }, [quantities]);

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
          <div className="hidden overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 md:block">
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
                        <span className={"rounded-full px-2.5 py-1 text-xs font-semibold " + (product.type === "Pago único" ? "bg-blue-400/10 text-blue-200" : "bg-orange-400/10 text-orange-300")}>
                          {product.type}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-bold text-white">{money(product.initial)}</td>
                      <td className="px-5 py-4 text-right font-semibold text-slate-300">{product.recurring > 0 ? money(product.recurring) + " / mes" : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:hidden">
            {products.map((product) => (
              <article key={product.id} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold leading-snug text-slate-100">{product.name}</h3>
                  <span className={"shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold " + (product.type === "Pago único" ? "bg-blue-400/10 text-blue-200" : "bg-orange-400/10 text-orange-300")}>
                    {product.type}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-800 pt-3">
                  <div>
                    <div className="text-xs text-slate-400">Por alta</div>
                    <div className="mt-1 text-lg font-bold text-white">{money(product.initial)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Mensual (primer año)</div>
                    <div className="mt-1 text-lg font-bold text-green-300">{product.recurring > 0 ? money(product.recurring) + " / mes" : "—"}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Las comisiones mensuales se cobran mientras el cliente mantenga y pague la suscripción, durante su primer año.
          </p>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/35">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <div className="mb-8 max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.17em] text-blue-300">Ejemplo y proyección</div>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Calcula tus comisiones</h2>
              <p className="mt-3 leading-relaxed text-slate-300">Ajusta cuántas ventas haces cada mes para ver la proyección. El ejemplo empieza con la combinación de referencia.</p>
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

              </div>

              <div className="min-w-0">
                <div className="mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-blue-300">Plan a 12 meses</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">Si mantienes esa distribución de ventas durante 12 meses, te detallamos lo que ganarías cada mes.</p>
                </div>
                <div className="hidden overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950/70 md:block">
                  <table className="w-full min-w-[540px] text-left text-sm">
                    <thead className="bg-slate-800/80 text-xs font-bold uppercase tracking-wide text-slate-400">
                      <tr>
                        <th className="px-4 py-3">Mes</th>
                        <th className="px-4 py-3 text-right">Comisiones fijas</th>
                        <th className="px-4 py-3 text-right">Comisiones por suscripciones</th>
                        <th className="px-4 py-3 text-right">Total del mes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projection.monthlyPlan.map((month) => (
                        <tr key={month.month} className="border-t border-slate-800">
                          <th scope="row" className="px-4 py-3 font-medium text-slate-300">Mes {month.month}</th>
                          <td className="px-4 py-3 text-right text-slate-300">{money(month.fixedCommission)}</td>
                          <td className="px-4 py-3 text-right text-green-300">{money(month.subscriptionCommission)}</td>
                          <td className="px-4 py-3 text-right font-bold text-white">{money(month.total)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 md:hidden">
                  {projection.monthlyPlan.map((month) => (
                    <article key={month.month} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-bold text-slate-200">Mes {month.month}</h4>
                        <div className="text-right">
                          <div className="text-xs text-slate-400">Total del mes</div>
                          <div className="text-lg font-extrabold text-orange-300">{money(month.total)}</div>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-800 pt-3">
                        <div>
                          <div className="text-xs leading-snug text-slate-400">Comisiones fijas</div>
                          <div className="mt-1 font-semibold text-slate-200">{money(month.fixedCommission)}</div>
                        </div>
                        <div>
                          <div className="text-xs leading-snug text-slate-400">Por suscripciones</div>
                          <div className="mt-1 font-semibold text-green-300">{money(month.subscriptionCommission)}</div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">Totales anuales</h4>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                      <div className="text-xs text-slate-400">Comisiones fijas</div>
                      <div className="mt-1 text-xl font-bold text-white">{money(projection.fixedAnnualTotal)}</div>
                    </div>
                    <div className="rounded-xl border border-green-400/25 bg-green-400/5 p-4">
                      <div className="text-xs text-slate-400">Comisiones por suscripciones</div>
                      <div className="mt-1 text-xl font-bold text-green-300">{money(projection.subscriptionAnnualTotal)}</div>
                    </div>
                    <div className="rounded-xl border border-orange-300/30 bg-orange-400/10 p-4">
                      <div className="text-xs text-orange-100">Total en 12 meses</div>
                      <div className="mt-1 text-xl font-extrabold text-orange-300">{money(projection.annualTotal)}</div>
                    </div>
                  </div>
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
