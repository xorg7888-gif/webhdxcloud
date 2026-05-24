import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, HardDrive, Zap, Shield, HelpCircle, Activity, Wind, Thermometer, Radio } from 'lucide-react';

interface RackUnitProps {
  id: string;
  name: string;
  temp: number;
  power: number;
  rpm: number;
  cpuModel: string;
  ramModel: string;
  storageModel: string;
}

export default function Infrastructure() {
  const [rackUnits, setRackUnits] = useState<RackUnitProps[]>([
    { id: 'ru-4', name: 'HDX-MOROCCO-R9_4A', temp: 37, power: 185, rpm: 4320, cpuModel: 'AMD Ryzen 9 7950X (5.7 GHz)', ramModel: '128GB DDR5 ECC Gaming RAM', storageModel: '2x 2TB Gen4 Enterprise NVMe RAID 10' },
    { id: 'ru-3', name: 'HDX-MUMBAI-R9_3B', temp: 42, power: 210, rpm: 4890, cpuModel: 'AMD Ryzen 9 7900X (4.7 GHz)', ramModel: '128GB DDR5 High-Speed ECC', storageModel: '2x 2TB Gen4 Enterprise NVMe RAID 1' },
    { id: 'ru-2', name: 'HDX-GERMANY-EP_2A', temp: 39, power: 245, rpm: 4120, cpuModel: 'Dual AMD EPYC 9654 (192 Cores)', ramModel: '512GB DDR5 ECC Server Grade', storageModel: '4x 3.84TB SAS Enterprise NVMe' },
    { id: 'ru-1', name: 'HDX-ASHBURN-R9_1C', temp: 36, power: 195, rpm: 4250, cpuModel: 'AMD Ryzen 9 7950X (5.7 GHz)', ramModel: '256GB DDR5 High Density ECC', storageModel: '2x 2TB NVMe PCIe Gen4 Enterprise' }
  ]);

  const [scrubberTraffic, setScrubberTraffic] = useState(1.42);

  // Fluctuating hardware telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setRackUnits(prev => prev.map(unit => ({
        ...unit,
        temp: Math.max(32, Math.min(65, unit.temp + Math.floor((Math.random() - 0.5) * 4))),
        power: Math.max(150, Math.min(280, unit.power + Math.floor((Math.random() - 0.5) * 14))),
        rpm: Math.max(3800, Math.min(5500, unit.rpm + Math.floor((Math.random() - 0.5) * 150)))
      })));
      setScrubberTraffic(prev => parseFloat(Math.max(0.15, Math.min(8.95, prev + (Math.random() - 0.5) * 0.4)).toFixed(2)));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#05050d] border-t border-b border-white/5 overflow-hidden" id="infrastructure">
      
      {/* Background wireframe grids & abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-radial from-[#00f0ff]/5 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Description, specifications and network capacity details */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full border border-[#00f0ff]/15">
                Enterprise Hardware Architecture
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Physical AMD Ryzen <span className="bg-gradient-to-r from-cyan-400 to-[#6366f1] bg-clip-text text-transparent text-glow-blue">Dedicated Nodes</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Unlike unbranded shared virtual servers, HDXCloud operates premium hand-picked AMD Ryzen 9 7950X, Ryzen 9 7900X, and dual AMD EPYC host processors to deliver spectacular gameplay and VPS response. No resource choking, pure hardware priority.
              </p>
            </div>

            {/* Spec Cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/5 hover:border-[#00f0ff]/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-[#00f0ff]">
                  <div className="p-2.5 rounded-lg bg-[#0e122b] border border-[#00f0ff]/15">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Host Processors</h4>
                    <p className="text-sm font-bold text-white mt-0.5">AMD Ryzen 9 7950X</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-normal mt-3 leading-normal">
                  Fitted with customized hypervisors delivering maximum single-core clock speeds up to 5.7 GHz.
                </p>
              </div>

              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/5 hover:border-[#00f0ff]/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-cyan-400">
                  <div className="p-2.5 rounded-lg bg-[#0e122b] border border-cyan-500/15">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Storage Drive</h4>
                    <p className="text-sm font-bold text-white mt-0.5">PCIe NVMe Gen4 RAID</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-normal mt-3 leading-normal">
                  Achieving ultra fast IOPS levels. Server chunk loading, backups, and restarts execute in seconds.
                </p>
              </div>

              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/5 hover:border-[#00f0ff]/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-indigo-400">
                  <div className="p-2.5 rounded-lg bg-[#0e122b] border border-indigo-500/15">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">System Memory</h4>
                    <p className="text-sm font-bold text-white mt-0.5">DDR5 High Density ECC</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-normal mt-3 leading-normal">
                  ECC auto-correcting memory shields modules against data corruptions or crash leakages.
                </p>
              </div>

              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/5 hover:border-[#00f0ff]/15 transition-all duration-300">
                <div className="flex items-center space-x-3 text-rose-400">
                  <div className="p-2.5 rounded-lg bg-[#0e122b] border border-rose-500/15">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">DDoS Filter Layer</h4>
                    <p className="text-sm font-bold text-white mt-0.5">5 Tbps Advanced Scrubbing</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-normal mt-3 leading-normal">
                  In-line filters automatically isolate and dissolve intensive TCP floods and DNS amplification storms.
                </p>
              </div>

            </div>

            {/* DDoS traffic status bar */}
            <div className="bg-gradient-to-r from-slate-950 to-indigo-950/20 p-4.5 rounded-2xl border border-[#6366f1]/15 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between text-left gap-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-ping"></span>
                <span>Active Network Load Scrubber: <strong>{scrubberTraffic} Terabits/sec</strong> incoming</span>
              </div>
              <span className="text-[#00f0ff] font-extrabold text-glow-blue uppercase bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-800/10">Shield State: 100% Secure</span>
            </div>

          </div>

          {/* Right Block: Simulated Highly Technical Animated Server Rack Visuals */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-md bg-[#0a0a14] rounded-3xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              
              {/* Server rack handles and styling */}
              <div className="absolute top-0 bottom-0 left-3 w-[2px] bg-white/5"></div>
              <div className="absolute top-0 bottom-0 right-3 w-[2px] bg-white/5"></div>
              
              {/* Rack Header brand info */}
              <div className="flex justify-between items-center bg-black/40 rounded-xl p-3 border border-white/5 mb-5 font-mono text-[10px] text-slate-500">
                <span className="text-white font-bold tracking-widest flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
                  <span>Cabinet HDX-ROW_2</span>
                </span>
                <span>42U CORE CABINET</span>
              </div>

              {/* Server RUs */}
              <div className="space-y-4">
                {rackUnits.map((u, idx) => (
                  <motion.div 
                    key={u.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative bg-gradient-to-r from-slate-950 via-[#070b1b] to-slate-950 rounded-xl border border-white/15 p-4 flex flex-col justify-between hover:border-[#00f0ff]/35 transition-all duration-300 group shadow-inner"
                  >
                    {/* Mounting Rack Ears left & right */}
                    <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-2 h-4 rounded bg-slate-800 border border-slate-700"></div>
                    <div className="absolute -right-[9px] top-1/2 -translate-y-1/2 w-2 h-4 rounded bg-slate-800 border border-slate-700"></div>

                    {/* Server Unit title and status LED row */}
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
                        <span className="text-[10px] sm:text-xs font-mono font-black text-white">{u.name}</span>
                        <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">({u.id})</span>
                      </div>

                      {/* Hard Drive blinkers */}
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-sm bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] animate-pulse"></span>
                        <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.8)] animate-pulse"></span>
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#6366f1] shadow-[0_0_5px_rgba(99,102,241,0.8)] animate-pulse"></span>
                        {u.temp > 40 && (
                          <span className="w-1.5 h-1.5 rounded-sm bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)] animate-ping"></span>
                        )}
                      </div>
                    </div>

                    {/* Server Hardware Specification label */}
                    <div className="text-[10px] font-mono text-slate-400 truncate mb-2.5">
                      Intel/Ryzen: <strong className="text-teal-400 font-bold">{u.cpuModel}</strong> • <strong className="text-indigo-400">{u.ramModel}</strong>
                    </div>

                    {/* Dynamic Telemetry stats row */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 font-mono text-[9px] text-slate-500 uppercase">
                      
                      {/* Thermals */}
                      <div className="flex items-center space-x-1.5 bg-black/40 px-2 py-1 rounded">
                        <Thermometer className={`w-3.5 h-3.5 ${u.temp > 40 ? 'text-amber-400' : 'text-[#00f0ff]'}`} />
                        <div>
                          <p className="text-[7px] text-slate-500 font-bold leading-none">Temp</p>
                          <p className={`text-zinc-300 font-black mt-0.5 leading-none ${u.temp > 40 ? 'text-amber-400' : 'text-slate-300'}`}>{u.temp}°C</p>
                        </div>
                      </div>

                      {/* Fan Speeds */}
                      <div className="flex items-center space-x-1.5 bg-black/40 px-2 py-1 rounded">
                        <Wind className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: u.rpm > 4500 ? '1s' : '2.5s' }} />
                        <div>
                          <p className="text-[7px] text-slate-500 font-bold leading-none">Cooling</p>
                          <p className="text-zinc-300 font-black mt-0.5 leading-none">{u.rpm} RPM</p>
                        </div>
                      </div>

                      {/* Power Draws */}
                      <div className="flex items-center space-x-1.5 bg-black/40 px-2 py-1 rounded">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <div>
                          <p className="text-[7px] text-slate-500 font-bold leading-none">Power</p>
                          <p className="text-zinc-300 font-black mt-0.5 leading-none">{u.power}W</p>
                        </div>
                      </div>

                    </div>

                  </motion.div>
                ))}
              </div>

              {/* Bottom Rack air ventilation grid visual */}
              <div className="mt-5 border-t border-white/5 pt-4">
                <div className="h-6 w-full flex justify-between gap-[3px] opacity-40">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="h-full w-[2.5px] bg-[#00f0ff] rounded-sm animate-pulse" style={{ animationDelay: `${i*100}ms` }}></span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
