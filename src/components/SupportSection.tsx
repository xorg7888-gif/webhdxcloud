import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Users, Sparkles, UserCheck } from 'lucide-react';

export default function SupportSection() {
  return (
    <section className="relative py-24 bg-[#050510] border-t border-white/5 overflow-hidden" id="discord-support">
      
      {/* Dynamic graphic glowing backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-radial from-[#5865F2]/8 via-transparent to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Core CTA Box styled like an enterprise Discord promotion */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-[#5865F2]/20 bg-[#070716]/80 backdrop-blur-md shadow-[0_10px_50px_rgba(88,101,242,0.1)]">
          
          {/* Subtle design matrix background */}
          <div className="absolute inset-0 bg-[radial-gradient(#5865f2_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Text */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 text-xs text-slate-300 font-mono">
                <Users className="w-3.5 h-3.5 text-[#5865F2]" />
                <span className="text-[#5865F2] font-black uppercase tracking-widest">Active Community Hub</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Join Our Official <br />
                <span className="bg-gradient-to-r from-blue-400 to-[#5865F2] bg-clip-text text-transparent">Discord Community</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl">
                Have questions or need assistance during migration? Join the server to chat with our active co-founders <strong className="text-white">CLOWN</strong> and <strong className="text-white">SENSHI</strong>, coordinate deployment tickets, unlock direct customer roles, or read flash network server updates.
              </p>

              {/* Sub features */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-slate-300 text-left">
                <div className="flex items-center space-x-2 text-slate-400">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Priority support tickets</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Exclusive flash discount announcements</span>
                </div>
              </div>

            </div>

            {/* Right Button/Badge CTA Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 border border-white/5 bg-slate-950/70 rounded-2xl">
              
              <div className="text-center space-y-5 w-full">
                <div className="flex justify-center">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 shadow-[0_0_20px_rgba(88,101,242,0.3)]">
                    <MessageSquare className="w-8 h-8 text-[#5865F2]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-white tracking-wide">HDXCloud Server Support</h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">Status: Discord server online & active</p>
                </div>

                <a
                  href="https://discord.gg/xS5uYX8Sm"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-4 rounded-xl text-sm font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white transition-all duration-200 shadow-lg shadow-[#5865F2]/20 active:scale-97 cursor-pointer uppercase tracking-wider"
                >
                  Connect Discord Node
                </a>

                <p className="text-[10px] text-slate-500 font-mono">
                  Managed by HDX CO | Free for all community members
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
