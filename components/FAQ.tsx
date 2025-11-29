

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950">
      {/* Increased max-width to accomodate longer text */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300 hover:border-slate-700"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-white text-xl pr-8 group-hover:text-brand-orange transition-colors duration-300">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-orange shrink-0 ml-4" size={24} />
                ) : (
                  <Plus className="text-slate-500 shrink-0 ml-4 group-hover:text-white transition-colors" size={24} />
                )}
              </button>
              <div 
                className={`px-8 text-slate-400 text-lg leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {/* Logic to render multiple paragraphs based on newlines */}
                <div className="space-y-4">
                  {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;