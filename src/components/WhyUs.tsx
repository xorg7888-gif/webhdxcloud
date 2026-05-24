import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, Scale, Check, X, ShieldAlert } from 'lucide-react';

export default function WhyUs() {
  const comparisons = [
    { metric: 'CPU Architecture', standard: 'Intel Xeon old E5 / Scalable (2.2GHz)', hdx: 'AMD Ryzen 9 7950X / Core i9 (4.5GHz+)', win: true },
    { metric: 'Memory Standards', standard: 'DDR3 or Older DDR4 Registered', hdx: 'Enterprise-grade DDR5 ECC 5600MHz', win: true },
    { metric: 'Block Storage', standard: 'SATA SSD or slow Mechanical HDD', hdx: 'PCIe Gen4 NVMe arrays (RAID 10)', win: true },
    { metric: 'Pricing ratio', standard: '$3.50 - $6.50 per Gigabyte RAM', hdx: '$0.58 - $1.10 per Gigabyte RAM', win: true },
    { metric: 'Setup Protocol', standard: 'Queues & 15m - 2hr manual delay', hdx: 'Fully automated - Under 10 seconds', win: true },
    { metric: 'DDoS Mitigate', standard: 'Paid add-on / 10 Gbps cap rates', hdx: 'Free active protection up to 5 Terabits', win: true },
  ];

  return (
    <section className="relative py-24 bg-[#050510] border-t border-b border-white/5 overflow-hidden">
      
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-[#6366f1]/2 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            Performance Analysis
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Why Hundreds Transact On <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">HDXCloud</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            We avoid old server node components entirely. Compare our infrastructure and cost efficiencies next to traditional hosts.
          </p>
        </div>

        {/* Tabular Visual Analysis Block */}
        <div className="bg-[#070715]/60 border border-slate-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          
          <div className="grid grid-cols-12 bg-slate-950 py-4 px-6 border-b border-slate-900 font-display font-bold text-xs uppercase tracking-wider text-slate-400">
            <div className="col-span-4 sm:col-span-5">Comparative Matrix</div>
            <div className="col-span-4 sm:col-span-3 text-center">Standard Hosts</div>
            <div className="col-span-4 text-right text-[#00f0ff]">HDXCloud Network</div>
          </div>

          <div className="divide-y divide-slate-900 font-sans">
            {comparisons.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="grid grid-cols-12 py-5 px-6 items-center text-xs sm:text-sm hover:bg-white/[0.01] transition-all duration-150"
              >
                {/* Metric */}
                <div className="col-span-4 sm:col-span-5 font-bold text-slate-200">
                  {c.metric}
                </div>

                {/* Standard Host */}
                <div className="col-span-4 sm:col-span-3 flex items-center justify-center space-x-1.5 font-normal text-slate-500">
                  <X className="w-4 h-4 text-rose-500/70 shrink-0" />
                  <span className="hidden sm:inline text-center">{c.standard}</span>
                </div>

                {/* HDXCloud */}
                <div className="col-span-4 flex items-center justify-end space-x-2 font-bold text-white text-right">
                  <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
                  <span className="text-[#00f0ff]">{c.hdx}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick SLA Footer declaration */}
          <div className="px-6 py-5.5 bg-slate-950/80 border-t border-slate-900 flex justify-between items-center flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-[11px] font-mono text-slate-400">Core SLA redundancy backed by remote diagnostics.</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">HDX CO Network Audit (May 2026)</span>
          </div>

        </div>

      </div>
    </section>
  );
}
