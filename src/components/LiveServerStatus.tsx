import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Radio, ShieldAlert, Cpu, Network, CheckCircle2, RefreshCw, Zap } from 'lucide-react';

interface ServerNode {
  id: string;
  name: string;
  region: string;
  uptime: string;
  latencySim: number;
  cpuLoad: number;
  status: 'Online' | 'Maintenance';
}

export default function LiveServerStatus() {
  const [lastCheck, setLastCheck] = useState<string>('Just now');
  const [packetsAnalyzed, setPacketsAnalyzed] = useState<number>(31548209);
  const [currentPing, setCurrentPing] = useState<number | null>(null);
  const [pinging, setPinging] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('in-node');
  
  const [nodes, setNodes] = useState<ServerNode[]>([
    { id: 'morocco-node', name: 'HDX-Morocco-01', region: 'Casablanca, Morocco', uptime: '99.99%', latencySim: 22, cpuLoad: 24, status: 'Online' },
    { id: 'in-node', name: 'HDX-India-02', region: 'Mumbai, India', uptime: '99.98%', latencySim: 15, cpuLoad: 31, status: 'Online' },
    { id: 'dubai-node', name: 'HDX-Dubai-01', region: 'Dubai, UAE', uptime: '99.99%', latencySim: 24, cpuLoad: 18, status: 'Online' },
    { id: 'singapore-node', name: 'HDX-Singapore-03', region: 'Singapore Hub', uptime: '99.99%', latencySim: 12, cpuLoad: 42, status: 'Online' },
    { id: 'eu-node', name: 'HDX-Frankfurt-06', region: 'Frankfurt, Germany', uptime: '100%', latencySim: 10, cpuLoad: 14, status: 'Online' },
    { id: 'usa-node', name: 'HDX-Ashburn-04', region: 'Ashburn, USA', uptime: '99.99%', latencySim: 18, cpuLoad: 19, status: 'Online' }
  ]);

  // Simulate metrics fluctuate
  useEffect(() => {
    const timer = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        cpuLoad: Math.max(8, Math.min(94, node.cpuLoad + Math.floor((Math.random() - 0.5) * 6)))
      })));
      setPacketsAnalyzed(prev => prev + Math.floor(Math.random() * 850) + 150);
      
      const now = new Date();
      setLastCheck(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const triggerPingTest = (nodeId: string) => {
    setPinging(true);
    setSelectedNodeId(nodeId);
    setCurrentPing(null);
    const node = nodes.find(n => n.id === nodeId);
    const baseLatency = node ? node.latencySim : 25;
    
    setTimeout(() => {
      setCurrentPing(baseLatency + Math.floor((Math.random() - 0.5) * 4));
      setPinging(false);
    }, 750);
  };

  return (
    <section className="relative py-24 bg-[#030308] overflow-hidden" id="server-status">
      
      {/* Background neon glows */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#00f0ff]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#6366f1]/5 rounded-full blur-[90px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] bg-cyan-950/20 px-4 py-1.5 rounded-full border border-cyan-800/20">
            Node Telemetry & Network Status
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Live infrastructure <span className="bg-gradient-to-r from-[#00f0ff] to-[#6366f1] bg-clip-text text-transparent text-glow-blue font-extrabold">Active Status</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-4 max-w-xl mx-auto leading-relaxed">
            All hypervisors and custom game nodes are supervised 24/7. Review real-time workloads, low latencies, and DDoS mitigations immediately.
          </p>
        </div>

        {/* Global Overview Ticker Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          <div className="bg-slate-950/50 rounded-2xl p-5 border border-white/5 backdrop-blur shadow-2xl relative overflow-hidden group hover:border-[#00f0ff]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Radio className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Network Status</span>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">ALL OPERATIONAL</span>
            </div>
            <div className="flex items-center space-x-1.5 mt-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
              <span className="text-[11px] font-mono text-emerald-400">100% Core backbone available</span>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-2xl p-5 border border-white/5 backdrop-blur shadow-2xl relative overflow-hidden group hover:border-[#00f0ff]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <CheckCircle2 className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Global Core Uptime</span>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">99.992%</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-2.5">
              Last 30 days historic aggregate
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-2xl p-5 border border-white/5 backdrop-blur shadow-2xl relative overflow-hidden group hover:border-[#00f0ff]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <ShieldAlert className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Edge Firewall Active</span>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white">5 Tbps Block</span>
            </div>
            <div className="flex items-center space-x-1.5 mt-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-[11px] font-mono text-cyan-400">DDoS scrubbing active</span>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-2xl p-5 border border-white/5 backdrop-blur shadow-2xl relative overflow-hidden group hover:border-[#00f0ff]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Cpu className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Traffic Analysed</span>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-xl sm:text-2xl font-mono font-bold text-glow-blue text-[#00f0ff]">
                {packetsAnalyzed.toLocaleString()}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-2.5 flex items-center justify-between">
              <span>Packets/sec verified</span>
              <span className="text-slate-400">Live updating</span>
            </div>
          </div>

        </div>

        {/* Master Telemetry Detail Panel Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Interactive Latency ping simulator */}
          <div className="lg:col-span-4 bg-slate-950/65 rounded-2xl p-6 border border-white/5 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-lg text-white">Real-Time Ping Diagnostic</h4>
                <p className="text-[11px] font-mono text-slate-500">Measure local roundtrip latency from your screen.</p>
              </div>
              <Network className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Select node for validation:</span>
              <div className="grid grid-cols-2 gap-2.5">
                {nodes.map(n => (
                  <button
                    key={n.id}
                    onClick={() => triggerPingTest(n.id)}
                    className={`p-3 rounded-xl text-left border font-mono text-xs cursor-pointer transition-all duration-150 ${
                      selectedNodeId === n.id
                        ? 'bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff] shadow-inner'
                        : 'bg-slate-900/40 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                    }`}
                  >
                    <div className="font-bold font-sans text-xs truncate text-white">{n.name}</div>
                    <div className="text-[9px] text-slate-500 truncate mt-0.5">{n.region}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#04050f] rounded-xl p-5 border border-white/5 font-mono text-center flex flex-col items-center justify-center space-y-3 relative overflow-hidden min-h-[140px]">
              {pinging ? (
                <div className="flex flex-col items-center space-y-2.5">
                  <RefreshCw className="w-6 h-6 text-[#00f0ff] animate-spin" />
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Pinging selected backbone segment...</span>
                </div>
              ) : currentPing !== null ? (
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Tested Latency</span>
                  <div className="text-4xl font-display font-black text-[#00f0ff] text-glow-blue animate-bounce">
                    {currentPing} ms
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold tracking-wider bg-[#0c1a17] border border-emerald-950/40 px-3 py-1 rounded-full uppercase">
                    🚀 Ultra Optimal Game Route
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-sans px-4 leading-normal">
                    Click any node above to verify custom path response.
                  </p>
                  <button 
                    onClick={() => triggerPingTest('in-node')}
                    className="mt-3.5 inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-[#0ea5e9] text-black font-semibold uppercase text-[10px] tracking-wider hover:brightness-105 active:scale-95 transition-all text-center cursor-pointer"
                  >
                    <Zap className="w-3 h-3" />
                    <span>Run Default Route Probe</span>
                  </button>
                </div>
              )}
            </div>

            <div className="text-[10px] font-mono text-slate-500 flex justify-between items-center bg-white/5 p-2 rounded">
              <span>Hypervisor sync:</span>
              <span className="font-bold text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pr-1 animate-pulse inline-block"></span>
                <span>Active - L-Sync Interval</span>
              </span>
            </div>
          </div>

          {/* Right Block: Complete Cluster Host Matrix list */}
          <div className="lg:col-span-8 bg-slate-950/65 rounded-2xl p-6 border border-white/5 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-display font-bold text-xl text-white">Global Edge Hypervisor Cluster</h4>
                <p className="text-xs text-slate-500">Live operational loads on active AMD/EPYC nodes across world datacenters.</p>
              </div>
              <div className="text-right text-[10px] font-mono text-slate-500 uppercase">
                <span className="hidden sm:inline">Telemetry refresh:</span> <span className="text-[#00f0ff] font-bold">{lastCheck}</span>
              </div>
            </div>

            <div className="space-y-4">
              {nodes.map((node, idx) => (
                <div 
                  key={node.id} 
                  className="bg-slate-900/40 rounded-xl p-4 border border-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  
                  {/* Left node label */}
                  <div className="flex items-center space-x-3.5">
                    <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/15">
                      <Cpu className="w-4.5 h-4.5 text-glow-blue text-cyan-400" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-mono font-bold text-white tracking-wide">{node.name}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black uppercase">Online</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{node.region}</div>
                    </div>
                  </div>

                  {/* Mid workload telemetry indicators */}
                  <div className="flex-grow max-w-sm">
                    <div className="flex justify-between text-[10px] font-mono mb-1 text-slate-400">
                      <span>Thread Priority Cluster Workload</span>
                      <span className={`${node.cpuLoad > 75 ? 'text-amber-400' : 'text-[#00f0ff]'} font-bold`}>{node.cpuLoad}% CPU</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden p-[1px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${node.cpuLoad}%` }}
                        transition={{ duration: 1.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          node.cpuLoad > 75 ? 'from-amber-400 to-rose-500' : 'from-[#00f0ff] to-[#6366f1]'
                        }`}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Right numbers detail */}
                  <div className="flex items-center justify-between md:justify-end gap-6 text-right font-mono text-xs shrink-0 bg-black/20 md:bg-transparent p-2 md:p-0 rounded">
                    <div>
                      <div className="text-slate-500 text-[9px] uppercase font-bold">Route Ping</div>
                      <div className="text-white font-bold">{node.latencySim}ms</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[9px] uppercase font-bold">SLA Guarantee</div>
                      <div className="text-[#00f0ff] font-extrabold text-glow-blue">{node.uptime}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Support disclaimer notes */}
            <div className="mt-6 border-t border-white/5 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-500 gap-2">
              <span>Managed by HDX CO | Co-founder operations supervised by SENSHI & CLOWN</span>
              <a href="https://discord.gg/xS5uYX8Sm" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline font-bold">
                Report Core Outages via Discord ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
