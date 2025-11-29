
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, User, Ear, BrainCircuit, FileCheck, ArrowRight, RotateCcw, CheckCircle2, Mail, Database } from 'lucide-react';
import Button from './Button';

const HowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Hear-O Sugiere",
      icon: <MessageSquare size={32} />,
      description: "En la ventana de chat verás la propuesta: Una pregunta adaptada al perfil del paciente y sus respuestas anteriores, enriquecida con Argumentos Comerciales.",
      color: "text-blue-400",
      borderColor: "border-blue-500",
      bgHover: "hover:shadow-blue-500/20"
    },
    {
      id: 2,
      title: "Audiólogo Pregunta",
      icon: <User size={32} />,
      description: "Tú tienes el control. Lees o te ayudas de la pregunta propuesta por la IA, sabiendo exactamente qué decir y cómo decirlo en todo momento.",
      color: "text-purple-400",
      borderColor: "border-purple-500",
      bgHover: "hover:shadow-purple-500/20"
    },
    {
      id: 3,
      title: "Hear-O Escucha",
      icon: <Ear size={32} />,
      description: "El sistema escucha la respuesta del paciente, analiza su tono de voz y las palabras que usa. Comprende y entiende al Paciente en tiempo real.",
      color: "text-orange-400",
      borderColor: "border-orange-500",
      bgHover: "hover:shadow-orange-500/20"
    },
    {
      id: 4,
      title: "Análisis y Registro",
      icon: <BrainCircuit size={32} />,
      description: "Hear-O registra la información, analiza el conjunto, crea un perfil y diseña el siguiente argumento. El ciclo se repite o finaliza.",
      color: "text-green-400",
      borderColor: "border-green-500",
      bgHover: "hover:shadow-green-500/20"
    },
    {
      id: 5,
      title: "Informe y Propuestas",
      icon: <FileCheck size={32} />,
      description: "Al finalizar, Hear-O crea el Informe Diagnóstico, consulta la base de audífonos, busca las mejores soluciones y genera la propuesta comercial lista para presentar.",
      color: "text-brand-orange",
      borderColor: "border-brand-orange",
      bgHover: "hover:shadow-orange-500/20"
    },
    {
      id: 6,
      title: "CRM y Marketing",
      icon: <Mail size={32} />,
      description: "A partir de este momento, Hear-O diseñará una secuencia de mails y mensajes de WhatsApp con Recordatorios, avisos, promociones, Cross-Selling, renovaciones...",
      color: "text-pink-500",
      borderColor: "border-pink-500",
      bgHover: "hover:shadow-pink-500/20"
    }
  ];

  const handleNext = () => {
    if (currentStep === 4) {
      setCurrentStep(1); // Loop back
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1); // Restart from end
    }
  };

  const handleFinishStudy = () => {
    setCurrentStep(5);
  };

  const activeStepData = steps.find(s => s.id === currentStep);

  return (
    <section id="en-accion" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Cómo <span className="text-brand-orange">vender más audífonos</span> con el Asistente IA Hear-O
          </h2>
          <p className="text-xl text-slate-400 max-w-5xl mx-auto">
            El <strong>Asistente IA</strong> es quien da nombre al Sistema, pero Hear-O es una IA entrenada como un <strong>experto Audiólogo con increíbles habilidades de Venta</strong>. Escuchará al Paciente en tiempo real, analizará sus respuestas y te propondrá la siguiente pregunta usando <strong>técnicas y argumentos de venta emocional</strong> sin dejar de ser profesional y honesto. 
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: THE DIAGRAM */}
          {/* Using fixed width container for precise SVG alignment */}
          <div className="w-full lg:w-3/5 hidden lg:flex justify-center">
             <div className="relative w-[500px] h-[550px]">
             
                {/* Center Logo */}
                <div className="absolute top-[275px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 opacity-20 pointer-events-none">
                    <img src="https://pymeflow.es/wp-content/uploads/2025/11/logo-blanco-grande-hear-o.png" alt="Hear-O" />
                </div>

                {/* SVG Connectors Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                    <marker id="arrow-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
                    </marker>
                    <marker id="arrow-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
                    </marker>
                </defs>

                {/* 
                    UPDATED COORDINATES (Fixed 500px width container)
                    Box Width: 208px (w-52)
                    Box Height: 144px (h-36)
                    
                    Row 1 Top: 0
                    Row 2 Top: 200
                    Row 3 Top: 400
                    
                    Left Column Left: 0. Right Edge: 208. Center X: 104.
                    Right Column Left: 292 (500-208). Right Edge: 500. Center X: 396.
                    Gap Horizontal: 84px (292 - 208).
                    Gap Vertical: 56px (200 - 144).
                */}
                
                {/* Arrow 1 -> 2 (Top Horizontal) */}
                <line x1="212" y1="72" x2="280" y2="72" stroke={currentStep === 1 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 1 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />
                
                {/* Arrow 2 -> 3 (Right Vertical Down) */}
                <line x1="396" y1="148" x2="396" y2="190" stroke={currentStep === 2 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 2 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />

                {/* Arrow 3 -> 4 (Middle Horizontal Left) */}
                <line x1="288" y1="272" x2="220" y2="272" stroke={currentStep === 3 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 3 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />

                {/* Arrow 4 -> 1 (Left Vertical Up - Loop) */}
                <line x1="104" y1="196" x2="104" y2="154" stroke={currentStep === 4 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 4 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />

                {/* Arrow 4 -> 5 (Left Vertical Down - Exit) */}
                <line x1="104" y1="348" x2="104" y2="390" stroke={currentStep === 5 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 5 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />

                {/* Arrow 5 -> 6 (Bottom Horizontal) */}
                <line x1="212" y1="472" x2="280" y2="472" stroke={currentStep === 6 ? "#f97316" : "#334155"} strokeWidth="3" markerEnd={`url(#${currentStep === 6 ? 'arrow-active' : 'arrow-gray'})`} strokeDasharray="8 4" className="transition-all duration-500" />
                </svg>

                {/* DIAGRAM BOXES */}
                
                {/* Step 1: Top Left */}
                <div 
                onClick={() => setCurrentStep(1)}
                className={`absolute top-0 left-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 1 ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-blue-400 mb-2"><MessageSquare size={32}/></div>
                <h3 className="text-white font-bold leading-tight">1. Hear-O<br/>Sugiere</h3>
                </div>

                {/* Step 2: Top Right */}
                <div 
                onClick={() => setCurrentStep(2)}
                className={`absolute top-0 right-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 2 ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-purple-400 mb-2"><User size={32}/></div>
                <h3 className="text-white font-bold leading-tight">2. Audiólogo<br/>Pregunta</h3>
                </div>

                {/* Step 4: Middle Left */}
                <div 
                onClick={() => setCurrentStep(4)}
                className={`absolute top-[200px] left-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 4 ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-green-400 mb-2"><BrainCircuit size={32}/></div>
                <h3 className="text-white font-bold leading-tight">4. Análisis<br/>y Registro</h3>
                </div>

                {/* Step 3: Middle Right */}
                <div 
                onClick={() => setCurrentStep(3)}
                className={`absolute top-[200px] right-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 3 ? 'border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-orange-400 mb-2"><Ear size={32}/></div>
                <h3 className="text-white font-bold leading-tight">3. Hear-O<br/>Escucha</h3>
                </div>

                {/* Step 5: Bottom Left */}
                <div 
                onClick={() => setCurrentStep(5)}
                className={`absolute top-[400px] left-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 5 ? 'border-brand-orange shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-brand-orange mb-2"><FileCheck size={32}/></div>
                <h3 className="text-white font-bold leading-tight">5. Informe y<br/>Propuestas</h3>
                </div>

                {/* Step 6: Bottom Right */}
                <div 
                onClick={() => setCurrentStep(6)}
                className={`absolute top-[400px] right-0 w-52 h-36 bg-slate-900 border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 z-10
                ${currentStep === 6 ? 'border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.4)] scale-105' : 'border-slate-700 opacity-50 hover:opacity-80'}`}
                >
                <div className="text-pink-500 mb-2"><Mail size={32}/></div>
                <h3 className="text-white font-bold leading-tight">6. CRM y<br/>Marketing</h3>
                </div>

             </div>
          </div>

          {/* RIGHT COLUMN: DESCRIPTION PANEL */}
          <div className="w-full lg:w-2/5 sticky top-32">
             <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl relative min-h-[400px] flex flex-col">
                
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`p-4 rounded-xl bg-slate-900 border border-slate-700 ${activeStepData?.color}`}>
                          {activeStepData?.icon}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                             {currentStep >= 5 ? 'FASE FINAL' : `PASO ${currentStep}`}
                          </p>
                          <h3 className={`text-3xl font-bold ${activeStepData?.color}`}>
                             {activeStepData?.title}
                          </h3>
                       </div>
                    </div>

                    {/* Description */}
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 mb-8 flex-1">
                       <p className="text-lg text-slate-300 leading-relaxed">
                          {activeStepData?.description}
                       </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto space-y-3">
                       {currentStep < 4 && (
                          <Button onClick={handleNext} className="w-full text-lg justify-between group">
                             Siguiente Paso <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                          </Button>
                       )}

                       {currentStep === 4 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <Button variant="outline" onClick={handleNext} className="justify-center border-slate-500 hover:border-white">
                                <RotateCcw size={18} className="mr-2"/> Siguiente Pregunta
                             </Button>
                             <Button onClick={handleFinishStudy} className="justify-center bg-brand-orange border-brand-orange hover:bg-orange-600">
                                Final de Estudio <ArrowRight size={18} className="ml-2"/>
                             </Button>
                          </div>
                       )}

                       {currentStep === 5 && (
                          <Button onClick={handleNext} className="w-full text-lg justify-between group bg-brand-orange border-brand-orange hover:bg-orange-600">
                             Siguiente <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                          </Button>
                       )}

                       {currentStep === 6 && (
                          <Button onClick={() => setCurrentStep(1)} variant="outline" className="w-full justify-center border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                             <RotateCcw size={18} className="mr-2"/> Reiniciar Ciclo
                          </Button>
                       )}
                    </div>

                  </motion.div>
                </AnimatePresence>

             </div>
          </div>

        </div>

        {/* MOBILE LAYOUT (Stacked) */}
        <div className="lg:hidden mt-8 space-y-4">
           {steps.map((step) => (
             <div 
               key={step.id}
               onClick={() => setCurrentStep(step.id)}
               className={`p-4 rounded-xl border bg-slate-900 transition-all ${currentStep === step.id ? `border-current ${step.color} shadow-lg` : 'border-slate-800'}`}
             >
                <div className="flex items-center justify-between">
                   <h3 className={`font-bold ${currentStep === step.id ? 'text-white' : 'text-slate-400'}`}>
                      {step.id}. {step.title}
                   </h3>
                   {currentStep === step.id && <div className={`w-2 h-2 rounded-full bg-current ${step.color}`}></div>}
                </div>
                {currentStep === step.id && (
                   <div className="mt-4 pt-4 border-t border-slate-800">
                      <p className="text-slate-300 mb-4">{step.description}</p>
                      
                      {step.id === 4 ? (
                         <div className="flex gap-2 flex-col sm:flex-row">
                            <Button size="sm" onClick={(e) => { e.stopPropagation(); handleNext(); }} variant="outline">Siguiente Pregunta</Button>
                            <Button size="sm" onClick={(e) => { e.stopPropagation(); handleFinishStudy(); }} className="bg-brand-orange">Finalizar</Button>
                         </div>
                      ) : step.id === 6 ? (
                          <Button onClick={(e) => { e.stopPropagation(); setCurrentStep(1); }} className="w-full bg-pink-600">Reiniciar</Button>
                      ) : (
                         <Button size="sm" onClick={(e) => { e.stopPropagation(); handleNext(); }} className="w-full">Siguiente</Button>
                      )}
                   </div>
                )}
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
