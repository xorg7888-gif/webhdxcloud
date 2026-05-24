import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Cpu, Shield, Network } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [bootIndex, setBootIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootLogs = [
    'Connecting to HDXCloud global SDN...',
    'Establishing secure handshake with edge hypervisors...',
    'Activating 5 Tbps multi-path DDoS protection layers...',
    'Mounting high-speed NVMe PCIe Gen4 partition nodes...',
    'Optimizing AMD Ryzen 9 cores at Casablanca and Mumbai...',
    'Loading HDX Admin Panel & Minecraft mod loaders...',
    'Boot sequence finalized. Launching premium platform interface...'
  ];

  useEffect(() => {
    // Increment loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Give a short delay after reaching 100% before fading out
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 120);

    // Stagger through diagnostic text logs
    const textInterval = setInterval(() => {
      setBootIndex((prev) => {
        if (prev >= bootLogs.length - 1) {
          clearInterval(textInterval);
          return bootLogs.length - 1;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#030308] flex flex-col items-center justify-center p-6 selection:bg-[#00f0ff]/20 overflow-hidden"
        >
          {/* Futuristic Background grid & glow circles */}
          <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]- w-[350px] h-[350px] bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

          <div className="w-full max-w-lg space-y-8 relative z-10">
            {/* Center animated logo */}
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                initial={{ scale: 0.8, rotate: -15 }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#00f0ff] via-[#0ea5e9] to-[#6366f1] p-[2px] shadow-[0_0_40px_rgba(0,240,255,0.4)]"
              >
                <div className="flex items-center justify-center w-full h-full bg-[#030308] rounded-[14px]">
                  <Server className="w-10 h-10 text-[#00f0ff] animate-pulse" />
                </div>
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase"
                >
                  HDX<span className="text-[#00f0ff] text-glow-blue">Cloud</span>
                </motion.h1>
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-slate-500 uppercase font-bold mt-1.5">
                  Next-Gen Hosting Infrastructure
                </p>
              </div>
            </div>

            {/* Diagnostic Boot Ticker */}
            <div className="bg-[#050510]/80 rounded-xl p-5 border border-white/5 font-mono text-[10px] sm:text-xs text-slate-300 min-h-[90px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00f0ff] to-transparent"></div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-slate-500 text-[9px] uppercase border-b border-white/5 pb-1.5 mb-2 font-black">
                  <span>Hypervisor Boot Diagnostics</span>
                  <span>v4.0.98</span>
                </div>
                <div className="text-emerald-400 font-bold flex items-center space-x-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE // HOST NODE PRESET CONNECTED</span>
                </div>
                <div className="text-[#00f0ff] line-clamp-1 h-5 overflow-hidden transition-all duration-300">
                  ⚡ {bootLogs[bootIndex]}
                </div>
              </div>

              <div className="text-right text-slate-500 text-[10px] mt-2 border-t border-white/5 pt-1.5 font-bold">
                SYSTEM CORE STATE: OK
              </div>
            </div>

            {/* Loading Meter Block */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-widest font-bold">Mounting Interface</span>
                <span className="text-[#00f0ff] font-extrabold text-glow-blue">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#0d0e22] rounded-full overflow-hidden border border-white/[0.02] p-[1.5px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00f0ff] via-[#0ea5e9] to-[#6366f1] rounded-full"
                  style={{ width: `${progress}%` }}
                ></motion.div>
              </div>
            </div>

            {/* Platform Trust Tagline */}
            <div className="flex items-center justify-center space-x-4 text-[10px] font-mono text-slate-600 uppercase tracking-wide">
              <div className="flex items-center space-x-1">
                <Shield className="w-3.5 h-3.5 text-glow-blue" />
                <span>5Tbps Shielded</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Network className="w-3.5 h-3.5 text-purple-500" />
                <span>SDN Global</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>KVM Virt</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
