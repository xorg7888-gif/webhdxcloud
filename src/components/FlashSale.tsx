import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Clock, Zap, ArrowRight } from 'lucide-react';

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 42, seconds: 15 });

  // Countdown cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset countdown timer to create infinity loop billing FOMO
          return { hours: 2, minutes: 24, seconds: 10 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  const scrollToPlans = () => {
    const element = document.getElementById('minecraft-hosting');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 mt-4 mb-16 max-w-7xl mx-auto w-full font-sans">
      
      {/* Absolute glow points for the floating card */}
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[100px] bg-[#00f0ff]/10 rounded-full blur-[40px] pointer-events-none"></div>

      {/* Main Flash Sale Banner floating on glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-6 sm:p-10 border border-[#00f0ff]/30 bg-gradient-to-r from-slate-950 via-[#070b20] to-slate-950 overflow-hidden shadow-[0_15px_45px_rgba(0,240,255,0.15)] glow-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Flame Icon & Primary Promotional Headline text */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)] animate-pulse">
              <Flame className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 uppercase font-black tracking-widest">
                <span>Special Server Launch Event</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3.5xl text-white tracking-tight leading-tight">
                Premium Hosting <span className="bg-gradient-to-r from-amber-400 to-[#00f0ff] bg-clip-text text-transparent">From ₹30/month</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Unlock high-performance Ryzen cores. Backed by solid NVMe PCIe RAID, automated daily checkpoints, and sub-millisecond network routers.
              </p>
            </div>
          </div>

          {/* Real-time FOMO Countdown timer */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="flex items-center space-x-2 text-slate-500 text-[10px] font-mono font-black uppercase tracking-widest mb-3.5">
              <Clock className="w-4 h-4 text-[#00f0ff]" />
              <span>Offer Expires In</span>
            </div>

            {/* Glowing clock segments */}
            <div className="flex items-center space-x-2.5 font-mono">
              {[
                { label: 'HRS', value: formatNum(timeLeft.hours) },
                { label: 'MIN', value: formatNum(timeLeft.minutes) },
                { label: 'SEC', value: formatNum(timeLeft.seconds) }
              ].map((segment, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#050512] border border-white/5 rounded-xl px-3.5 py-2.5 text-xl sm:text-2xl font-black text-[#00f0ff] text-glow-blue shadow-inner relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                      {segment.value}
                    </div>
                    <span className="text-[8px] text-slate-500 font-bold mt-1.5 uppercase tracking-widest">{segment.label}</span>
                  </div>
                  {idx < 2 && (
                    <span className="text-[#00f0ff] text-glow-blue font-extrabold text-xl sm:text-2xl ml-2.5 -mt-4 animate-pulse">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call To Action Buttons */}
          <div className="lg:col-span-3 flex flex-col items-center sm:flex-row lg:flex-col gap-3 justify-center w-full">
            <button
              onClick={scrollToPlans}
              className="w-full py-4.5 rounded-2xl text-xs font-bold text-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-[#00f0ff] hover:brightness-110 active:scale-97 cursor-pointer transition-all flex items-center justify-center space-x-2 shadow-[0_5px_20px_rgba(245,158,11,0.25)]"
            >
              <span>Redeem Coupon Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[9px] text-slate-500 font-mono text-center">
              *Applies to both VPS and Minecraft nodes
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
