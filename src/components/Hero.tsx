import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Zap, ArrowRight, Shield, Globe, Terminal, MessageSquare, Heart, Flame } from 'lucide-react';

interface DatacenterPoint {
  id: string;
  name: string;
  region: string;
  flag: string;
  ping: string;
  shield: string;
  x: number; // SVG coordinate x
  y: number; // SVG coordinate y
}

export default function Hero() {
  const [hoveredPoint, setHoveredPoint] = useState<DatacenterPoint | null>(null);

  const datacenterPoints: DatacenterPoint[] = [
    { id: 'morocco', name: 'Morocco Edge Node', region: 'Casablanca, Morocco', flag: '🇲🇦', ping: '22ms', shield: '5 Tbps', x: 440, y: 220 },
    { id: 'india', name: 'South Asia Core Node', region: 'Mumbai, India', flag: '🇮🇳', ping: '15ms', shield: '3.2 Tbps', x: 670, y: 235 },
    { id: 'dubai', name: 'Middle East Hub', region: 'Dubai, UAE', flag: '🇦🇪', ping: '24ms', shield: '4.5 Tbps', x: 605, y: 215 },
    { id: 'singapore', name: 'Asia-Pacific Transit', region: 'Singapore Hub', flag: '🇸🇬', ping: '12ms', shield: '5.5 Tbps', x: 735, y: 290 },
    { id: 'europe', name: 'EU Backbone Node', region: 'Frankfurt, Germany', flag: '🇩🇪', ping: '10ms', shield: '8.2 Tbps', x: 475, y: 155 },
    { id: 'usa', name: 'US East Primary', region: 'Ashburn, USA', flag: '🇺🇸', ping: '18ms', shield: '10 Tbps', x: 230, y: 175 },
    { id: 'asia', name: 'East Asia Gateway', region: 'Tokyo, Japan', flag: '🇯🇵', ping: '20ms', shield: '6.0 Tbps', x: 810, y: 170 },
  ];

  const connections = [
    { from: 'usa', to: 'europe' },
    { from: 'europe', to: 'morocco' },
    { from: 'europe', to: 'dubai' },
    { from: 'dubai', to: 'india' },
    { from: 'india', to: 'singapore' },
    { from: 'singapore', to: 'asia' },
    { from: 'usa', to: 'singapore' },
  ];

  const scrollToPlans = () => {
    const element = document.getElementById('minecraft-hosting');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  const getCoords = (id: string) => {
    const pt = datacenterPoints.find(p => p.id === id);
    return pt ? { x: pt.x, y: pt.y } : { x: 0, y: 0 };
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden grid-bg-pattern font-sans select-none">
      
      {/* Background neon color fields */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[110px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Cyber world map background */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-75 pointer-events-none">
        
        {/* Futuristic SVG World Map Canvas */}
        <svg viewBox="0 0 1000 450" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="laser-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Abstract background world continent dots representing ultra premium high fidelity map */}
          {/* North America */}
          <g fill="#1a1c38" opacity="0.4">
            <circle cx="150" cy="120" r="2.5" /> <circle cx="170" cy="115" r="3" /> <circle cx="190" cy="110" r="2" />
            <circle cx="160" cy="130" r="3" /> <circle cx="180" cy="125" r="3" /> <circle cx="200" cy="120" r="3" />
            <circle cx="155" cy="150" r="3" /> <circle cx="175" cy="145" r="3.5" /> <circle cx="210" cy="140" r="3" />
            <circle cx="165" cy="170" r="3" /> <circle cx="230" cy="175" r="4" fill="#00f0ff" opacity="0.3" /> <circle cx="240" cy="165" r="3" />
            <circle cx="250" cy="180" r="3" /> <circle cx="260" cy="190" r="2.5" />
          </g>

          {/* South America */}
          <g fill="#161834" opacity="0.3">
            <circle cx="290" cy="270" r="3" /> <circle cx="310" cy="290" r="3" /> <circle cx="320" cy="310" r="2" />
            <circle cx="330" cy="330" r="3.5" /> <circle cx="340" cy="360" r="3" /> <circle cx="355" cy="390" r="2.5" />
          </g>

          {/* Europe */}
          <g fill="#1a1c38" opacity="0.45">
            <circle cx="450" cy="110" r="3" /> <circle cx="470" cy="115" r="3" /> <circle cx="490" cy="120" r="3" />
            <circle cx="460" cy="130" r="2.5" /> <circle cx="480" cy="140" r="3.5" /> <circle cx="500" cy="145" r="3" />
            <circle cx="455" cy="150" r="3" /> <circle cx="475" cy="155" r="4" fill="#00f0ff" opacity="0.3" /> <circle cx="495" cy="165" r="3" />
          </g>

          {/* Africa */}
          <g fill="#151730" opacity="0.4">
            <circle cx="430" cy="210" r="3" /> <circle cx="440" cy="220" r="4" fill="#00f0ff" opacity="0.3" /> <circle cx="450" cy="230" r="3" />
            <circle cx="460" cy="250" r="2.5" /> <circle cx="470" cy="280" r="3" /> <circle cx="480" cy="310" r="3" />
            <circle cx="510" cy="330" r="2" /> <circle cx="520" cy="350" r="3" />
          </g>

          {/* Asia */}
          <g fill="#1a1c38" opacity="0.45">
            <circle cx="580" cy="140" r="3" /> <circle cx="610" cy="150" r="3" /> <circle cx="640" cy="145" r="2" />
            <circle cx="600" cy="170" r="3" /> <circle cx="630" cy="180" r="2.5" /> <circle cx="660" cy="175" r="3" />
            <circle cx="620" cy="200" r="3" /> <circle cx="650" cy="210" r="3.5" /> <circle cx="680" cy="205" r="3" />
            <circle cx="640" cy="240" r="3" /> <circle cx="670" cy="235" r="4" fill="#00f0ff" opacity="0.3" /> <circle cx="700" cy="250" r="3" />
            <circle cx="725" cy="220" r="3" /> <circle cx="750" cy="240" r="2.5" /> <circle cx="780" cy="210" r="3" />
            <circle cx="810" cy="170" r="4" fill="#00f0ff" opacity="0.3" /> <circle cx="820" cy="185" r="3" />
          </g>

          {/* Australia */}
          <g fill="#14162c" opacity="0.3">
            <circle cx="790" cy="370" r="3" /> <circle cx="820" cy="380" r="3.5" /> <circle cx="850" cy="390" r="2" />
            <circle cx="800" cy="400" r="2.5" /> <circle cx="830" cy="410" r="3" />
          </g>

          {/* Transcontinental Laser connection paths */}
          {connections.map((conn, idx) => {
            const start = getCoords(conn.from);
            const end = getCoords(conn.to);
            return (
              <g key={idx}>
                {/* Static underlying route lines */}
                <path
                  d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 25} ${end.x} ${end.y}`}
                  fill="none"
                  stroke="rgba(0, 240, 255, 0.15)"
                  strokeWidth="1.5"
                />
                {/* Moving glowing laser pulse */}
                <motion.path
                  d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 25} ${end.x} ${end.y}`}
                  fill="none"
                  stroke="url(#laser-line)"
                  strokeWidth="2"
                  strokeDasharray="50 150"
                  animate={{ strokeDashoffset: [200, 0] }}
                  transition={{ duration: 4 + idx * 0.8, repeat: Infinity, ease: 'linear' }}
                />
              </g>
            );
          })}

          {/* Pulsing visual circles for active locations */}
          {datacenterPoints.map((pt) => (
            <g key={pt.id}>
              {/* Giant pulsing halo */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r="18"
                fill="url(#glow)"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              {/* Outer pulsing ring */}
              <motion.circle
                cx={pt.x}
                cy={pt.y}
                r="8"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="1"
                initial={{ r: 4, opacity: 0.9 }}
                animate={{ r: 16, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* Inner core LED node point */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#00f0ff"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            </g>
          ))}
        </svg>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text and actions block */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Promo Flag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-cyan-950/40 border border-[#00f0ff]/20 text-xs text-slate-300 font-mono"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span className="text-[#00f0ff] font-extrabold uppercase tracking-widest text-[9px] sm:text-xs">Next Gen Platform</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-semibold">AMD Ryzen 9 Hosting Available</span>
            </motion.div>

            {/* Core headline requested */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]"
            >
              Premium Minecraft <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent text-glow-blue font-black">& VPS Hosting</span>
            </motion.h1>

            {/* Subheadline requested */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl font-normal leading-relaxed"
            >
              Affordable high-performance hosting with enterprise hardware, advanced DDoS protection, and global infrastructure. Managed directly by HDX CO.
            </motion.p>

            {/* CTAs requested */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 pt-3"
            >
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-black hover:brightness-110 active:scale-95 transition-all duration-150 cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.4)] font-display"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-150 cursor-pointer text-glow-blue font-display"
              >
                <span>View Plans</span>
              </button>

              <a
                href="https://discord.gg/xS5uYX8Sm"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-4.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5865F2] hover:text-white border border-[#5865F2]/20 bg-[#5865F2]/5 hover:bg-[#5865F2] transition-all duration-150 text-center font-display"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Discord</span>
              </a>
            </motion.div>

            {/* Core features listing */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 justify-center lg:justify-start pt-6 border-t border-white/5 w-full mt-4 text-[10px] font-mono text-slate-500 uppercase font-black">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-[#00f0ff] opacity-80" />
                <span>5 Terabits Edge Scrubbing</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-[#6366f1] opacity-80" />
                <span>Instant KVM deployment</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-emerald-400 opacity-80" />
                <span>99.9% Core Uptime SLA</span>
              </div>
            </div>

          </div>

          {/* Right interactive datacenter hover popups / visual terminal */}
          <div className="lg:col-span-5 relative hidden md:block">
            
            <AnimatePresence mode="wait">
              {hoveredPoint ? (
                <motion.div
                  key={hoveredPoint.id}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="bg-gradient-to-b from-slate-950 via-[#0a0c1f] to-slate-950 rounded-2xl border border-[#00f0ff]/40 p-6 shadow-2xl glassmorphism"
                >
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{hoveredPoint.flag}</span>
                      <h4 className="font-display font-black text-white text-base truncate">{hoveredPoint.name}</h4>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider animate-pulse">Online</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs text-slate-300">
                    <div>
                      <span className="text-slate-500 text-[10px] block font-bold">Latency</span>
                      <span className="text-[#00f0ff] font-extrabold text-glow-blue text-sm">{hoveredPoint.ping} to Edge</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block font-bold">DDoS Protection</span>
                      <span className="text-[#6366f1] font-bold text-sm">{hoveredPoint.shield} Filter</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 text-[10px] block font-bold">Country Hub</span>
                      <span className="text-slate-200 mt-0.5 block font-sans text-xs font-normal">{hoveredPoint.region}</span>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/5 pt-3 text-[10px] font-mono text-slate-500 flex justify-between">
                    <span>Backbone redundant</span>
                    <span className="text-cyan-400 font-bold">10Gbps link SLA</span>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="default-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-950/60 rounded-3xl border border-white/5 p-6 backdrop-blur-md shadow-2xl space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                      <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">Global Network Telemetry</span>
                    </div>
                    <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    Hover over any glowing datacenter point on the map to inspect real-time router response rates, latencies, and ddos capabilities instantly.
                  </p>

                  <div className="space-y-2.5">
                    {[
                      { label: 'Active Edge Nodes:', val: '7 Active Clusters' },
                      { label: 'Network Fabric Speed:', val: '10 Gigabits Core Link' },
                      { label: 'Backbone Provider:', val: 'SLA Redundant BGP' }
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center font-mono text-xs py-1 px-2.5 rounded bg-black/30 border border-white/[0.02]">
                        <span className="text-slate-500">{row.label}</span>
                        <span className="text-white font-bold">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>

    </section>
  );
}
