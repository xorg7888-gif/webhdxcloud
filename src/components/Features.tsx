import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, HardDrive, ShieldCheck, Database, Zap, RefreshCw, 
  HelpCircle, Globe2, Puzzle, ChevronsUp 
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Cpu,
      title: 'High-Performance CPUs',
      desc: 'Powered exclusively by top-tier hardware: AMD Ryzen 9 7950X and Intel Core i9-14900K core processors yielding peak single-thread clock rates.',
      accent: 'border-l-cyan-500'
    },
    {
      icon: HardDrive,
      title: 'NVMe Gen4 SSD Storage',
      desc: 'Uncompromising reading/reading metrics. Experience zero storage congestion or chunk rendering waiting steps with enterprise PCIe v4 arrays.',
      accent: 'border-l-indigo-500'
    },
    {
      icon: ShieldCheck,
      title: 'Global DDoS Shield Auto-Mitigate',
      desc: 'Immediate continuous defense protection layered across 5 Terabits. Rest easy knowing that UDP floods or target spikes won\'t affect performance.',
      accent: 'border-l-[#00f0ff]'
    },
    {
      icon: Zap,
      title: '10-Second Deployments',
      desc: 'Our provisioning engine launches virtual instances immediately. Configuration details are loaded onto clean control paths under 10 seconds.',
      accent: 'border-l-emerald-500'
    },
    {
      icon: Database,
      title: 'Automated Nightly Backups',
      desc: 'Loss-free server hosting. We run continuous snapshot compressions to isolated secure offsite S3 databases, restorable in a single tap.',
      accent: 'border-l-amber-500'
    },
    {
      icon: Puzzle,
      title: 'One-Click Modloader',
      desc: 'Seamlessly query, select, and install over 50,000 community plug-ins, custom Minecraft wrappers (Forge, Fabric, Purpur), or game files.',
      accent: 'border-l-purple-500'
    },
  ];

  return (
    <section className="relative py-24 bg-[#05050a]" id="features">
      
      {/* Visual wire frame line dots */}
      <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-[#00f0ff]/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            Advanced Tech Specs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Built For Large Networks, <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Priced For All Guests</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Get actual high-end server configurations normally reserved for massive enterprise operations at prices suited for small circles.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`glow-card p-6.5 rounded-2xl flex flex-col justify-between border-l-2 ${item.accent} group`}
              >
                <div>
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950 border border-slate-900 group-hover:border-[#00f0ff]/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-glow-blue text-[#00f0ff] opacity-80" />
                  </div>
                  
                  <h3 className="font-display font-bold text-base text-white mt-4.5 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 font-normal mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.03] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono text-slate-500">Tier-1 Node Allocation</span>
                  <span className="text-[10px] font-mono text-[#00f0ff] font-bold uppercase tracking-wider flex items-center space-x-0.5">
                    <span>Active Protection</span>
                    <ChevronsUp className="w-3 h-3 text-cyan-400" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
