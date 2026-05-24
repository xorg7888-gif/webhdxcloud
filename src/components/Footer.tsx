import React from 'react';
import { Server, MessageSquare, Terminal, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020205] border-t border-slate-900 pt-16 pb-8 overflow-hidden font-sans">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-gradient-radial from-cyan-950/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/[0.03]">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleScrollToTop}>
              <div className="relative flex items-center justify-center w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-[#00f0ff] via-[#0ea5e9] to-[#6366f1] p-[1.5px]">
                <div className="flex items-center justify-center w-full h-full bg-[#020205] rounded-[7px]">
                  <Server className="w-4.5 h-4.5 text-[#00f0ff]" />
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                HDX<span className="text-[#00f0ff]">Cloud</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Premium speed and high-end server configurations normally reserved for massive enterprise operations, at budget rates for everyone. Built and optimized for serious gamers.
            </p>

            {/* Social Actions */}
            <div className="flex space-x-3 text-xs font-mono">
              <a 
                href="https://discord.gg/xS5uYX8Sm" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-[#5864f2]/20 bg-[#5864f2]/5 text-[#5864f2] text-[10px] uppercase font-bold hover:bg-[#5864f2]/10 transition duration-150"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discord</span>
              </a>
              <a 
                href="https://hdxcloud.xyz" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-[#00f0ff]/25 bg-[#00f0ff]/5 text-[#00f0ff] text-[10px] uppercase font-bold hover:bg-[#00f0ff]/10 transition duration-150"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </a>
            </div>

          </div>

          {/* Quick links to page sections */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Products</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-normal">
              <li><a href="#minecraft-hosting" className="hover:text-white transition duration-150">Minecraft Servers</a></li>
              <li><a href="#vps-hosting" className="hover:text-white transition duration-150">VPS Hosting</a></li>
              <li><a href="#game-hosting" className="hover:text-white transition duration-150">Game Nodes</a></li>
              <li><a href="#panel-section" className="hover:text-white transition duration-150">Control Dashboard</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Support & Community</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-normal">
              <li><a href="https://discord.gg/xS5uYX8Sm" target="_blank" rel="noreferrer" className="hover:text-white transition duration-150">Ticket Center</a></li>
              <li><a href="#faq" className="hover:text-white transition duration-150">FAQs Help</a></li>
              <li><a href="#datacenters" className="hover:text-white transition duration-150">Ping Diagnostics</a></li>
              <li><a href="https://hdxcloud.xyz" target="_blank" rel="noreferrer" className="hover:text-white transition duration-150">Billing Portal</a></li>
            </ul>
          </div>

          {/* Founders info */}
          <div className="col-span-2 lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Corporate Management</h4>
            <div className="space-y-3 text-xs font-mono">
              <div className="bg-[#070712] border border-slate-900/60 p-3 rounded-xl">
                <span className="text-slate-500 uppercase text-[9px] font-bold block tracking-wider">Parent Brand</span>
                <span className="text-white font-bold block mt-0.5">HDX CO</span>
              </div>
              <div className="bg-[#070712] border border-slate-900/60 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-slate-500 uppercase text-[9px] font-bold block tracking-wider">Co-Founder</span>
                  <span className="text-white font-bold block mt-0.5">CLOWN</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              </div>
              <div className="bg-[#070712] border border-slate-900/60 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-slate-500 uppercase text-[9px] font-bold block tracking-wider">Co-Founder</span>
                  <span className="text-white font-bold block mt-0.5">SENSHI</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal & Copyright details */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4">
          
          <div className="text-center md:text-left">
            <p>Copyright &copy; {new Date().getFullYear()} HDXCloud. All rights reserved.</p>
            <p className="text-[10px] text-slate-650 mt-1">HDXCloud is operated independently by HDX CO. Minecraft is a copyright of Mojang AB. We are not endorsed or allied with Mojang.</p>
          </div>

          <div className="flex space-x-4">
            <button onClick={() => addLog('Terms & Conditions are outline on billing.', 'warn')} className="hover:text-slate-350 transition">Terms of Use</button>
            <span>&bull;</span>
            <button onClick={() => addLog('Privacy safeguards are outlined on billing.', 'warn')} className="hover:text-slate-350 transition">Privacy Safe</button>
            <span>&bull;</span>
            <button 
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 hover:text-[#00f0ff] transition"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

// Global logger stub to bind warnings when clicking legal toggles in demo
const addLog = (msg: string, type: string) => {
  console.log(`[HDX-Footer] ${msg}`);
};
