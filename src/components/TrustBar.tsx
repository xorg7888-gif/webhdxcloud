import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Activity, HelpCircle, Globe, Coins } from 'lucide-react';

export default function TrustBar() {
  const trusts = [
    { icon: Activity, title: '99.9% Core Uptime', desc: 'Guaranteed network SLA redundancy' },
    { icon: Zap, title: 'Instant Deployment', desc: 'Nodes activate in under 10 seconds' },
    { icon: ShieldCheck, title: 'Free DDoS Shield', desc: 'Enterprise-grade 5 Tbps multi-path' },
    { icon: HelpCircle, title: '24/7 Professional Care', desc: 'Direct support from cofounders' },
    { icon: Globe, title: 'Global Locations', desc: 'Morocco, India, Germany & USA' },
    { icon: Coins, title: 'Affordable Rates', desc: 'Direct hardware ownership saving cost' },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-[#05050a] via-[#080812] to-[#05050a] border-y border-white/5 overflow-hidden">
      {/* Visual glowing particle tracks */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {trusts.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#0e122b] border border-[#00f0ff]/10 mb-3 group-hover:border-[#00f0ff]/30 shadow-inner">
                  <Icon className="w-5 h-5 text-[#00f0ff] text-glow-blue" />
                </div>
                <h3 className="font-display font-bold text-sm text-white tracking-wide">{t.title}</h3>
                <p className="text-[11px] text-slate-400 font-normal mt-1 leading-normal max-w-[150px]">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/20 to-transparent"></div>
    </section>
  );
}
