import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Settings, Shield, Zap, Sparkles } from 'lucide-react';

interface Engine {
  name: string;
  type: string;
  desc: string;
  jvmArg: string;
  perf: string;
  popular?: boolean;
}

export default function MinecraftVersions() {
  const [selectedEngine, setSelectedEngine] = useState<string>('Purpur');

  const engines: Engine[] = [
    { name: 'Paper', type: 'Core Server', desc: 'Highly optimized Spigot-compat jar. Removes lag exploits and stabilizes active entities.', jvmArg: 'GC-GarbageCollector-Flags', perf: 'Excellent (Default)', popular: true },
    { name: 'Spigot', type: 'Core Server', desc: 'Standard customizable server supporting Bukkit and custom plugin architectures universally.', jvmArg: 'Bukkit-Default-JVM', perf: 'Standard' },
    { name: 'Purpur', type: 'Core Server', desc: 'The absolute pinnacle of performance. Features highly detailed configuration properties and game tweaks.', jvmArg: 'Aikar-Flags-Optimized', perf: 'Pinnacle High-End', popular: true },
    { name: 'Forge', type: 'Modded Engine', desc: 'The legendary modded framework. Required for custom pixelmon, pixel art, tech grids, or legacy mods.', jvmArg: 'Memory-Priority-Gen', perf: 'Heavy Consumption' },
    { name: 'Fabric', type: 'Modded Engine', desc: 'Sub-millisecond lightweight mod loader. High speed, highly scalable, and perfect for modern modding.', jvmArg: 'Fast-NoGarbage-Optim', perf: 'Extremely Fast' },
    { name: 'BungeeCord', type: 'Proxy Controller', desc: 'Standard multiserver proxy. Link multiple hub networks seamlessly via clean internal ports.', jvmArg: 'Netty-Native-Transport', perf: 'Network Proxy' },
    { name: 'Velocity', type: 'Proxy Controller', desc: 'Modern high-performance proxy. Advanced DDoS shield integrations, packet compression, and fast setup.', jvmArg: 'Velocity-VelocityGlow-Flow', perf: 'Pinnacle Network Netty' }
  ];

  const versionRange = [
    '1.8.x', '1.9.x', '1.12.2', '1.16.5', '1.17.x', '1.18.x', '1.19.x', '1.20.x', '1.21.x'
  ];

  const currentInfo = engines.find(e => e.name === selectedEngine) || engines[0];

  return (
    <section className="relative py-24 bg-[#030308] border-t border-white/5 overflow-hidden font-sans" id="minecraft-versions">
      {/* Visual map lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-radial from-emerald-500/5 via-transparent to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/20 px-4 py-1.5 rounded-full border border-emerald-800/20">
            Minecraft Server Engines & Badges
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Total Compatibility <span className="bg-gradient-to-r from-emerald-400 to-[#00f0ff] bg-clip-text text-transparent text-glow-blue font-extrabold">All Versions Support</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-4 max-w-xl mx-auto leading-relaxed">
            Switch server engines seamlessly on our control board in one-click. We maintain and pre-optimize every release from retro legacy versions to the latest snapshots.
          </p>
        </div>

        {/* Versions Carousel Row */}
        <div className="bg-slate-950/45 border border-white/5 rounded-3xl p-6 mb-10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none font-mono font-black text-6xl text-emerald-400">
            MINECRAFT
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest block">Supported Badges Range</span>
              <h4 className="font-display font-medium text-lg text-white mt-1">Select version on install:</h4>
            </div>
            
            {/* Horizontal Version Pills list */}
            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-end">
              {versionRange.map((ver, idx) => (
                <div 
                  key={idx} 
                  className="px-3.5 py-1.5 rounded-full bg-[#0d1f1a]/85 border border-emerald-500/20 text-emerald-300 font-mono text-xs font-bold hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:border-emerald-500/40 transition-all duration-200"
                >
                  {ver}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid: Left Engine Selector Buttons, Right Engine optimization detail box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Engine Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-mono font-black text-slate-500 uppercase tracking-wider block pl-1">Server Jar Engines:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {engines.map((eng) => (
                <button
                  key={eng.name}
                  onClick={() => setSelectedEngine(eng.name)}
                  className={`p-4 rounded-xl text-left border relative transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    selectedEngine === eng.name
                      ? 'bg-gradient-to-r from-emerald-950/40 to-slate-950 border-emerald-500/50 text-white shadow-[0_4px_20px_rgba(16,185,129,0.15)]'
                      : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-1.5 rounded-lg border ${
                      selectedEngine === eng.name ? 'bg-[#0a2018] border-emerald-500/30 text-emerald-300' : 'bg-white/5 border-transparent text-slate-500'
                    }`}>
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm block">{eng.name}</span>
                      <span className="text-[9px] font-mono text-slate-500">{eng.type}</span>
                    </div>
                  </div>
                  
                  {eng.popular && (
                    <span className="text-[8px] font-mono font-black bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded uppercase">Highly Optimized</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Engine Detail Box */}
          <div className="lg:col-span-7 bg-[#050510]/65 rounded-3xl border border-white/5 p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none"></div>
            
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="border-b border-white/5 pb-5 flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-display font-bold text-2xl text-white tracking-wide">{currentInfo.name}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 font-mono font-bold uppercase border border-emerald-500/20">Active Native Engine</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 mt-1">{currentInfo.type}</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-slate-500 text-[10px] block">PERFORMANCE LEVEL</span>
                  <span className="text-emerald-400 font-bold uppercase">{currentInfo.perf}</span>
                </div>
              </div>

              {/* Engine Description */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Hypervisor Behavior Profile</span>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {currentInfo.desc} HDXCloud automatically configures JVM launch protocols with correct runtime variables. Our game node scheduler locks performance priorities into this process immediately.
                </p>
              </div>

              {/* Real pre-optimizations checks details */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-400">
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Auto Aikar Flags Pre-configured</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garbage Collection (ZGC) Opt-in</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Low latency entity tracker tick</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subdomain DNS mapper system</span>
                </div>
              </div>

              {/* Startup Flag Preview code block */}
              <div className="bg-black/50 rounded-xl p-4 border border-white/5 font-mono text-xs relative overflow-hidden">
                <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f0ff]"></span>
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-black block mb-2">Auto-generated JVM Startup Argument</span>
                <div className="text-slate-300 code-line overflow-x-auto whitespace-nowrap scrollbar-none select-all font-bold">
                  java -Xms12G -Xmx12G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -Dusing.hdx.optimize=true -jar {currentInfo.name.toLowerCase()}.jar nogui
                </div>
              </div>

            </div>

            {/* Support CTA */}
            <div className="mt-8 border-t border-white/5 pt-4 flex flex-col sm:flex-row balance items-center justify-between text-xs font-mono text-slate-500 gap-3">
              <span className="flex items-center space-x-1">
                <Settings className="w-3.5 h-3.5 text-emerald-400" />
                <span>Installed jar fully writeable via SFTP Panel</span>
              </span>
              <a href="https://discord.gg/xS5uYX8Sm" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline font-bold">
                Request Custom Jar Nodes ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
