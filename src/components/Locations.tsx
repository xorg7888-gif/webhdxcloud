import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DATACENTERS } from '../data';
import { Shield, Zap, RefreshCw, Send, Globe, Wifi } from 'lucide-react';

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(DATACENTERS[0]);
  const [testingPing, setTestingPing] = useState(false);
  const [testedPingValue, setTestedPingValue] = useState<number | null>(null);

  const startPingTest = () => {
    if (testingPing) return;
    setTestingPing(true);
    setTestedPingValue(null);
    
    // Simulate ping latency trace
    setTimeout(() => {
      setTestedPingValue(selectedLocation.latency);
      setTestingPing(false);
    }, 1200);
  };

  return (
    <section className="relative py-24 bg-[#050510] overflow-hidden" id="datacenters">
      
      {/* Lights underlay */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#6366f1]/3 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#00f0ff]/3 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            Global Infrastructure
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Enterprise Backbone, <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Direct Local Paths</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Zero routing jitter. Check our global point-of-presence servers across Morocco, India, Dubai, Europe, Singapore, and the US below.
          </p>
        </div>

        {/* Global Map and Details Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#070715]/40 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          
          {/* Left panel: Locations selection & Speed test console */}
          <div className="lg:col-span-5 space-y-6">
            
            <h3 className="font-display font-medium text-lg text-white pb-3 border-b border-white/5 opacity-90">
              Select Network Point
            </h3>

            {/* Selection list */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2.5 max-h-[300px] overflow-y-auto scrollbar-thin pr-1">
              {DATACENTERS.map((dc) => (
                <button
                  key={dc.slug}
                  onClick={() => {
                    setSelectedLocation(dc);
                    setTestedPingValue(null);
                  }}
                  className={`flex items-center space-x-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    selectedLocation.slug === dc.slug
                      ? 'bg-[#00f0ff]/5 border-[#00f0ff]/35 text-white'
                      : 'bg-[#030308]/50 border-slate-900 text-slate-400 hover:border-slate-800 hover:bg-slate-950 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xl shrink-0 select-none">{dc.flag}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold leading-tight truncate">{dc.name}</p>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5">SLA: {dc.reliability}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive Speed check box */}
            <div className="bg-[#020206]/85 border border-[#12162d]/50 rounded-2xl p-4 sm:p-5 font-mono text-xs text-slate-300 relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Ping diagnostic panel</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
              </div>

              <div className="space-y-2 text-[11px] mb-4">
                <p><span className="text-slate-500">Selected Host:</span> {selectedLocation.name}</p>
                <p><span className="text-slate-500">Security Gate:</span> {selectedLocation.protection}</p>
                <p><span className="text-slate-500">Active Routing:</span> Core BGP Edge Path</p>
                <p className="text-slate-400 italic font-sans max-w-sm">{selectedLocation.description}</p>
              </div>

              {/* Progress dynamic test bar */}
              <AnimatePresence mode="wait">
                {testingPing ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 my-3"
                  >
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Probing node buffers...</span>
                      <span className="animate-pulse">RUNNING</span>
                    </div>
                    <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-indigo-500"
                      ></motion.div>
                    </div>
                  </motion.div>
                ) : testedPingValue !== null ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-emerald-950/20 border border-emerald-900/30 rounded-xl flex items-center justify-between mb-3 text-glow-emerald"
                  >
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-[10px] text-emerald-500 uppercase font-black tracking-wider">Test Complete</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">Round trip latency</p>
                      </div>
                    </div>
                    <span className="text-base font-extrabold text-emerald-400">{testedPingValue} ms</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                onClick={startPingTest}
                disabled={testingPing}
                className="w-full py-3.5 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/20 text-[11px] font-bold uppercase tracking-wider transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center space-x-2 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testingPing ? 'animate-spin' : ''}`} />
                <span>Run Latency Diagnostic Test</span>
              </button>
            </div>

          </div>

          {/* Right panel: High-tech Visual Map with interactive hover markers */}
          <div className="lg:col-span-7 flex justify-center py-6">
            <div className="relative w-full max-w-[550px] aspect-[16/10] bg-black/40 border border-slate-900/60 rounded-2xl p-4 overflow-hidden shadow-inner">
              
              {/* Radial underlays represent map projection centers */}
              <div className="absolute inset-x-0 inset-y-0 opacity-[0.05] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

              {/* World outline abstract path represented with lines / connections */}
              <svg className="w-full h-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Simulated continents lines */}
                <path d="M15,35 Q20,30 25,40 T35,45 T45,30 T55,35 L62,55 T75,60 T90,65 L95,65" fill="none" stroke="#00f0ff" strokeWidth="0.3" strokeDasharray="2,2" />
                <path d="M10,45 Q18,48 24,52 T30,68 T38,82 M40,25 Q50,22 60,28 T70,35 T85,38 M55,58 L62,75 L68,85" fill="none" stroke="#6366f1" strokeWidth="0.3" strokeDasharray="2,2" />
              </svg>

              {/* Glowing connection lines from selected marker to elsewhere to showcase "Enterprise scale" */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {selectedLocation && (
                  <>
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                      x1={selectedLocation.coords.x}
                      y1={selectedLocation.coords.y}
                      x2={47} // Germany Hub
                      y2={38}
                      stroke="rgba(0, 240, 255, 0.3)"
                      strokeWidth="0.5"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      x1={selectedLocation.coords.x}
                      y1={selectedLocation.coords.y}
                      x2={26} // USA Hub
                      y2={44}
                      stroke="rgba(99, 102, 241, 0.3)"
                      strokeWidth="0.5"
                    />
                  </>
                )}
              </svg>

              {/* Datacenter Marker Points */}
              {DATACENTERS.map((dc) => {
                const isSelected = selectedLocation.slug === dc.slug;
                return (
                  <button
                    key={dc.slug}
                    onClick={() => {
                      setSelectedLocation(dc);
                      setTestedPingValue(null);
                    }}
                    style={{ left: `${dc.coords.x}%`, top: `${dc.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  >
                    {/* Ring glow */}
                    <span className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#00f0ff]/20 animate-ping opacity-90' 
                        : 'bg-transparent group-hover:bg-[#6366f1]/10'
                    }`}></span>

                    {/* Point core */}
                    <span className={`relative block w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'bg-black border-[#00f0ff] scale-125 shadow-[0_0_15px_rgba(0,240,255,0.8)]' 
                        : 'bg-[#1e234a] border-slate-700 hover:border-indigo-400 hover:scale-110'
                    }`}></span>

                    {/* Mobile/Tooltip Card hover hint */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#050510] border border-slate-800 text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {dc.flag} {dc.name}
                    </div>
                  </button>
                );
              })}

              {/* Status footer inside visual panel */}
              <div className="absolute bottom-3 left-4 text-[9px] font-mono text-slate-500">
                HDX NETWORK MAP V3.9 - REAL-TIME EDGE MAPPING
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
