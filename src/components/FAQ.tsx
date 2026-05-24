import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#050510] border-t border-[#121630]/40 overflow-hidden" id="faq">
      
      {/* Decorative pulse blur */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-[#6366f1]/2 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            Common Inquiries
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Got queries about our server nodes, billing routines, or co-founders? Explore our comprehensive guidance panel below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-[#0a0a15]/30 ${
                  isOpen 
                    ? 'border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.03)] bg-gradient-to-r from-[#070b20]/45 to-[#0b0c1b]/45' 
                    : 'border-slate-900 hover:border-slate-800'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5.5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-4.5 h-4.5 shrink-0 transition-colors duration-200 ${isOpen ? 'text-[#00f0ff]' : 'text-slate-500'}`} />
                    <span className="text-sm sm:text-base font-semibold font-display tracking-wide text-white">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron rotates */}
                  <div className={`w-6.5 h-6.5 rounded-lg border border-slate-900 bg-slate-950/80 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 border-[#00f0ff]/20 text-[#00f0ff]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-5.5 pb-5.5 pt-0.5 text-xs sm:text-sm text-slate-400 font-normal leading-relaxed border-t border-white/[0.02]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
