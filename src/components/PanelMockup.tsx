import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Square, RotateCcw, Terminal, FolderOpen, Puzzle, Database, 
  Settings, Cpu, HardDrive, Network, Globe, Radio, Plus, Trash2, 
  Check, ChevronRight, RefreshCw, Send, Lock 
} from 'lucide-react';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn' | 'error' | 'input';
  time: string;
}

interface ServerFile {
  name: string;
  size: string;
  type: 'file' | 'folder';
  lastModified: string;
}

interface PluginItem {
  id: string;
  name: string;
  description: string;
  version: string;
  downloads: string;
  installed: boolean;
}

interface BackupItem {
  name: string;
  date: string;
  size: string;
  status: 'Complete' | 'Creating';
}

export default function PanelMockup() {
  const [activeTab, setActiveTab] = useState<'console' | 'files' | 'plugins' | 'backups'>('console');
  const [serverState, setServerState] = useState<'online' | 'offline' | 'starting' | 'stopping'>('online');
  const [uptime, setUptime] = useState(34211); // seconds
  
  // Terminal commands
  const [consoleInput, setConsoleInput] = useState('');
  const [logs, setLogs] = useState<LogLine[]>([
    { text: '[HDXCloud Hypervisor] Container system initial boot complete.', type: 'info', time: '12:00:03' },
    { text: '[HDXCloud Hypervisor] Binding server daemon to port 25565.', type: 'info', time: '12:00:04' },
    { text: '[Paper MC] Loading original server engine Core: v1.21.1', type: 'info', time: '12:00:04' },
    { text: '[Paper MC] Preparing level "world" with seeds [990230]', type: 'info', time: '12:00:07' },
    { text: '[Paper MC] Done! Server loaded in 4.3 seconds. For helper, type "hdxhelp"', type: 'success', time: '12:00:08' },
    { text: '[GeyserMC] Floodgate network validation is currently ACTIVE.', type: 'success', time: '12:00:09' }
  ]);
  
  // Real-time fluctuating metrics
  const [cpuUsage, setCpuUsage] = useState(24.5);
  const [ramUsage, setRamUsage] = useState(4.32);
  const [networkIn, setNetworkIn] = useState(1.4);
  const [networkOut, setNetworkOut] = useState(3.8);

  // File Manager states
  const [files, setFiles] = useState<ServerFile[]>([
    { name: 'plugins', size: '--', type: 'folder', lastModified: '2026-05-24 10:12' },
    { name: 'world', size: '--', type: 'folder', lastModified: '2026-05-24 09:44' },
    { name: 'server.properties', size: '2.4 KB', type: 'file', lastModified: '2026-05-24 11:30' },
    { name: 'spigot.yml', size: '3.1 KB', type: 'file', lastModified: '2026-05-24 11:30' },
    { name: 'ops.json', size: '124 Bytes', type: 'file', lastModified: '2026-05-24 12:15' },
    { name: 'paper-global.yml', size: '1.2 KB', type: 'file', lastModified: '2026-05-24 10:11' },
  ]);
  const [selectedFile, setSelectedFile] = useState<ServerFile | null>(null);
  const [fileContentText, setFileContentText] = useState('');

  // Plugins list
  const [plugins, setPlugins] = useState<PluginItem[]>([
    { id: 'luckperms', name: 'LuckPerms', description: 'Advanced permissions manager with web editor hooks.', version: 'v5.4.102', downloads: '24K', installed: true },
    { id: 'essentialsx', name: 'EssentialsX', description: 'Provides essential commands, teleports, warps, and kits.', version: 'v2.20.1', downloads: '41K', installed: true },
    { id: 'worldedit', name: 'WorldEdit MC', description: 'Ultimate in-game modular block editor tool.', version: 'v7.3.0', downloads: '38K', installed: false },
    { id: 'geysermc', name: 'Geyser Connect', description: 'Allows Bedrock players to join standard Java servers easily.', version: 'v2.1.0', downloads: '19K', installed: false },
  ]);

  // Backups list
  const [backups, setBackups] = useState<BackupItem[]>([
    { name: 'Auto-Backup_Nightly_01', date: '2026-05-23 04:00', size: '1.42 GB', status: 'Complete' },
    { name: 'Pre-Modpack_Install_Set', date: '2026-05-24 09:30', size: '2.14 GB', status: 'Complete' }
  ]);

  const logEndRef = useRef<HTMLDivElement>(null);

  // Fluctuating Resource Engine
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (serverState === 'online') {
      interval = setInterval(() => {
        setCpuUsage(prev => {
          const delta = (Math.random() - 0.5) * 8;
          return Math.max(12, Math.min(68, prev + delta));
        });
        setRamUsage(prev => {
          const delta = (Math.random() - 0.5) * 0.15;
          return Math.max(3.8, Math.min(5.2, prev + delta));
        });
        setNetworkIn(prev => parseFloat(Math.max(0.2, Math.min(12.5, prev + (Math.random() - 0.5) * 2)).toFixed(1)));
        setNetworkOut(prev => parseFloat(Math.max(0.5, Math.min(30.2, prev + (Math.random() - 0.5) * 4)).toFixed(1)));
        setUptime(prev => prev + 1);
      }, 2000);
    } else {
      setCpuUsage(0);
      setRamUsage(0);
      setNetworkIn(0);
      setNetworkOut(0);
    }
    return () => clearInterval(interval);
  }, [serverState]);

  // Scroll to bottom of terminal
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (text: string, type: 'info' | 'success' | 'warn' | 'error' | 'input' = 'info') => {
    const d = new Date();
    const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
    setLogs(prev => [...prev, { text, type, time: timeStr }]);
  };

  // Commands parsing simulation
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;

    const cmd = consoleInput.trim().toLowerCase();
    addLog(`> ${consoleInput}`, 'input');
    setConsoleInput('');

    if (serverState === 'offline' && cmd !== 'start') {
      addLog('Node is currently OFFLINE. Please click "START" or type "start" to boot up.', 'warn');
      return;
    }

    setTimeout(() => {
      switch (cmd) {
        case 'hdxhelp':
          addLog('--- Available Commands ---', 'info');
          addLog('help - lists system-level hypervisor configs', 'info');
          addLog('status - outputs diagnostic memory allocation tables', 'info');
          addLog('plugins - returns list of loaded compiled jars', 'info');
          addLog('clear - purges local console screen', 'info');
          break;
        case 'clear':
          setLogs([]);
          break;
        case 'status':
          addLog(`[HDX Diagnostics] Host Core: Ryzen 9 7950X Extreme. Alloc: 8GB RAM, 120GB NVMe.`, 'info');
          addLog(`Live Thread allocation status: CPU ${cpuUsage.toFixed(1)}%, RAM MEM ${ramUsage.toFixed(2)} GB`, 'success');
          break;
        case 'plugins':
          const installedText = plugins.filter(p => p.installed).map(p => p.name).join(', ');
          addLog(`Active plugins detected on current tier: [${installedText || 'None'}]`, 'info');
          break;
        case 'stop':
          handleStop();
          break;
        case 'start':
          handleStart();
          break;
        default:
          addLog(`Unknown request: "${cmd}". Type "hdxhelp" for instructions.`, 'error');
          break;
      }
    }, 400);
  };

  const handleStart = () => {
    if (serverState === 'online' || serverState === 'starting') return;
    setServerState('starting');
    addLog('[HDXCloud] Initializing KVM Virtual Container environment...', 'info');
    
    setTimeout(() => {
      addLog('[Grid OS] Mounting persistent NVMe node segments...', 'info');
    }, 600);

    setTimeout(() => {
      addLog('[Paper MC] Bootstrapping virtual minecraft jar threads...', 'info');
      setServerState('online');
      setUptime(0);
      setCpuUsage(45);
      setRamUsage(3.5);
      addLog('[Paper MC] Server running and accepting connections on hdxcloud.me:25565', 'success');
    }, 1800);
  };

  const handleStop = () => {
    if (serverState === 'offline' || serverState === 'stopping') return;
    setServerState('stopping');
    addLog('[Paper MC] Stopping server. Saving chunks...', 'warn');
    
    setTimeout(() => {
      addLog('[HDXCloud] Releasing active Hypervisor allocations...', 'info');
      setServerState('offline');
      setCpuUsage(0);
      setRamUsage(0);
      addLog('[HDXCloud] Container shutdown cleanly finalized. Status: OFFLINE', 'error');
    }, 1500);
  };

  const handleRestart = () => {
    handleStop();
    setTimeout(() => {
      handleStart();
    }, 2800);
  };

  const formatUptime = (totalSeconds: number) => {
    if (serverState !== 'online') return '-- : -- : --';
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  // Add virtual custom file logic
  const openFileDetails = (file: ServerFile) => {
    if (file.type === 'folder') {
      addLog(`Entering subfolder "/" not supported in dynamic demo mode.`, 'warn');
      return;
    }
    setSelectedFile(file);
    if (file.name === 'server.properties') {
      setFileContentText(`# HDXCloud Server Properties\nspawn-protection=16\ngenerator-settings=\nforce-gamemode=false\nallow-nether=true\ngamemode=survival\nenable-query=false\nplayer-idle-timeout=15\nview-distance=10\npvp=true\nmotd=§bHDXCloud Premium Server Nodes §7- Affordable Power!`);
    } else if (file.name === 'spigot.yml') {
      setFileContentText(`# Spigot configurations\nsettings:\n  save-user-cache-on-stop-only: false\n  bungeecord: true\nmessages:\n  whitelist: You need premium validation!`);
    } else {
      setFileContentText(`// Config content for ${file.name}\n// Created specifically for HDXCloud container deployment.\nstatus=active\nglobal_sync=true`);
    }
  };

  const saveEditedFile = () => {
    if (!selectedFile) return;
    addLog(`File "${selectedFile.name}" saved successfully to NVMe block storage.`, 'success');
    setSelectedFile(null);
  };

  // Plugin actions
  const togglePlugin = (id: string) => {
    setPlugins(prev => prev.map(p => {
      if (p.id === id) {
        const nextState = !p.installed;
        addLog(`${nextState ? 'Installing' : 'Uninstalling'} plugin: ${p.name}...`, 'info');
        setTimeout(() => {
          addLog(`Plugin "${p.name}" ${nextState ? 'registered successfully.' : 'purged fully.'} Reload config to apply!`, nextState ? 'success' : 'warn');
        }, 1000);
        return { ...p, installed: nextState };
      }
      return p;
    }));
  };

  // Backups actions
  const createNewBackup = () => {
    const num = backups.length + 1;
    const name = `Manual-Snapshot_0${num}`;
    
    // add a temporary creating item
    const newItem: BackupItem = {
      name,
      date: 'Right now',
      size: 'Zipping...',
      status: 'Creating'
    };
    
    setBackups(prev => [newItem, ...prev]);
    addLog(`Starting manual file compression for entire node directory...`, 'info');

    setTimeout(() => {
      setBackups(prev => prev.map(b => {
        if (b.name === name) {
          return { ...b, size: '2.56 GB', status: 'Complete', date: '2026-05-24 12:35' };
        }
        return b;
      }));
      addLog(`Backup "${name}" (2.56 GB) completely formatted and uploaded to remote S3 block storage.`, 'success');
    }, 2500);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#05050a] via-[#040409] to-[#080814] overflow-hidden" id="panel-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-[#6366f1]/3 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/20 px-3.5 py-1.5 rounded-full border border-indigo-800/20">
            Control Dashboard Demo
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Interact Our Premium <span className="bg-gradient-to-r from-[#00f0ff] to-[#6366f1] bg-clip-text text-transparent">Power Panel</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Test our fully features dashboard right now. Press Start/Stop, edit host server files, toggle modpacks, or run live custom shell commands.
          </p>
        </div>

        {/* Panel Main Interface Block */}
        <div className="bg-[#05050d] border border-slate-900 rounded-2xl shadow-2xl overflow-hidden shadow-black/80 max-w-5xl mx-auto">
          
          {/* Panel Top Stats Segment */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-900 bg-[#070712] divide-x divide-slate-900">
            
            {/* Stat Item 1 */}
            <div className="p-4 sm:p-5 flex items-center space-x-3.5">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#00f0ff]/5 border border-[#00f0ff]/10 text-[#00f0ff]">
                <Cpu className="w-5 h-5 text-glow-blue" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">CPU Usage</span>
                <span className="text-sm font-mono text-white font-bold">{serverState === 'online' ? `${cpuUsage.toFixed(1)}%` : '0%'}</span>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="p-4 sm:p-5 flex items-center space-x-3.5">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10 text-[#6366f1]">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">RAM Allocation</span>
                <span className="text-sm font-mono text-white font-bold">{serverState === 'online' ? `${ramUsage.toFixed(2)} GB / 8 GB` : '0.00 GB / 8 GB'}</span>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="p-4 sm:p-5 flex items-center space-x-3.5">
              <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">Network IO</span>
                <span className="text-sm font-mono text-white font-bold">{serverState === 'online' ? `In: ${networkIn}M / Out: ${networkOut}M` : '0.0 / 0.0 Mbps'}</span>
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="p-4 sm:p-5 flex items-center space-x-3.5">
              <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-400">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">Running Uptime</span>
                <span className="text-xs font-mono text-slate-200 font-bold">{formatUptime(uptime)}</span>
              </div>
            </div>

          </div>

          /* Action Controls Header bar */
          <div className="px-5 py-4 bg-[#090918] flex flex-wrap items-center justify-between border-b border-slate-900 gap-4">
            
            {/* Left Status Indicator */}
            <div className="flex items-center space-x-3">
              <div className="relative flex h-3.5 w-3.5 shrink-0 align-middle">
                {serverState === 'online' && (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </>
                )}
                {serverState === 'starting' && (
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-yellow-500 animate-pulse"></span>
                )}
                {serverState === 'stopping' && (
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-600 animate-pulse"></span>
                )}
                {serverState === 'offline' && (
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-600"></span>
                )}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">Server Status: </span>
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                  serverState === 'online' ? 'text-emerald-400' :
                  serverState === 'starting' ? 'text-yellow-400' :
                  serverState === 'stopping' ? 'text-amber-500' : 'text-rose-500'
                }`}>
                  {serverState}
                </span>
              </div>
            </div>

            {/* Middle Controls */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={handleStart}
                disabled={serverState === 'online' || serverState === 'starting'}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wide uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Start</span>
              </button>

              <button
                onClick={handleStop}
                disabled={serverState === 'offline' || serverState === 'stopping'}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wide uppercase bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 cursor-pointer"
              >
                <Square className="w-3.5 h-3.5" />
                <span>Stop</span>
              </button>

              <button
                onClick={handleRestart}
                disabled={serverState === 'offline' || serverState === 'starting' || serverState === 'stopping'}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wide uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 animate-spin-hover" />
                <span>Restart</span>
              </button>
            </div>

          </div>

          {/* Left Navigation and Right Main Workspace Split */}
          <div className="grid md:grid-cols-12 min-h-[440px]">
            
            {/* Sidebar selectors */}
            <div className="md:col-span-3 bg-[#060610] p-4 flex md:flex-col gap-1.5 border-r md:border-b-0 border-b border-slate-900">
              
              <button
                onClick={() => setActiveTab('console')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold font-mono text-left tracking-wide uppercase transition-all duration-200 cursor-pointer w-full ${
                  activeTab === 'console'
                    ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[#00f0ff] text-glow-blue'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span className="hidden md:inline">Live Console</span>
              </button>

              <button
                onClick={() => setActiveTab('files')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold font-mono text-left tracking-wide uppercase transition-all duration-200 cursor-pointer w-full ${
                  activeTab === 'files'
                    ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[#00f0ff] text-glow-blue'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <FolderOpen className="w-4 h-4" />
                <span className="hidden md:inline">File Manager</span>
              </button>

              <button
                onClick={() => setActiveTab('plugins')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold font-mono text-left tracking-wide uppercase transition-all duration-200 cursor-pointer w-full ${
                  activeTab === 'plugins'
                    ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[#00f0ff] text-glow-blue'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Puzzle className="w-4 h-4" />
                <span className="hidden md:inline">Plugin Installer</span>
              </button>

              <button
                onClick={() => setActiveTab('backups')}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold font-mono text-left tracking-wide uppercase transition-all duration-200 cursor-pointer w-full ${
                  activeTab === 'backups'
                    ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[#00f0ff] text-glow-blue'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Database className="w-4 h-4" />
                <span className="hidden md:inline">S3 Backups</span>
              </button>

            </div>

            {/* Right Main Working Box */}
            <div className="md:col-span-9 bg-black/45 p-5 relative overflow-hidden flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                
                {/* CONSOLE TAB */}
                {activeTab === 'console' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col h-full min-h-[380px] justify-between"
                  >
                    {/* Console Output Screen */}
                    <div className="bg-[#020205] border border-slate-900 rounded-xl p-4.5 font-mono text-xs overflow-y-auto max-h-[320px] h-full shadow-inner space-y-1.5 scrollbar-thin">
                      {logs.map((log, lIdx) => (
                        <div key={lIdx} className="flex items-start md:space-x-2 leading-relaxed">
                          <span className="text-slate-600 select-none hidden md:inline shrink-0">[{log.time}]</span>
                          <span className={`shrink-0 ${
                            log.type === 'success' ? 'text-emerald-400' :
                            log.type === 'warn' ? 'text-yellow-500' :
                            log.type === 'error' ? 'text-rose-500' :
                            log.type === 'input' ? 'text-[#00f0ff] font-bold' : 'text-slate-300'
                          }`}>
                            {log.text}
                          </span>
                        </div>
                      ))}
                      <div ref={logEndRef} />
                    </div>

                    {/* Console input command bar */}
                    <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 mt-4">
                      <div className="flex-1 relative">
                        <Terminal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          value={consoleInput}
                          onChange={(e) => setConsoleInput(e.target.value)}
                          placeholder="Type 'status' or 'plugins' and hit Enter..."
                          className="w-full bg-[#020205] border border-slate-900 focus:border-[#00f0ff]/30 hover:border-slate-800 rounded-xl pl-10 pr-4 py-3 font-mono text-xs text-white focus:outline-none transition-all duration-150"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4.5 py-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all duration-150 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* FILE MANAGER TAB */}
                {activeTab === 'files' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 h-full min-h-[380px]"
                  >
                    <div className="flex justify-between items-center pb-2.5 border-b border-slate-900">
                      <span className="text-xs font-mono text-slate-400">Directory: <span className="text-white font-bold">/home/container/_</span></span>
                      <button 
                        onClick={() => addLog('Add files is blocked in preview mode.', 'warn')}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono hover:bg-white/10 text-white"
                      >
                        <Plus className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Create File</span>
                      </button>
                    </div>

                    <div className="bg-[#020205] border border-slate-905 rounded-xl overflow-hidden divide-y divide-slate-900/60 font-mono text-[11px]">
                      {files.map((file, fIdx) => (
                        <div 
                          key={fIdx} 
                          onClick={() => openFileDetails(file)}
                          className="p-3.5 grid grid-cols-12 items-center hover:bg-white/[0.02] cursor-pointer transition-colors duration-150 text-slate-300 hover:text-white"
                        >
                          <div className="col-span-6 flex items-center space-x-2">
                            <FolderOpen className={`w-3.5 h-3.5 ${file.type === 'folder' ? 'text-amber-500' : 'text-slate-400'}`} />
                            <span className="font-bold truncate">{file.name}</span>
                          </div>
                          <div className="col-span-3 text-right text-slate-500">{file.size}</div>
                          <div className="col-span-3 text-right text-slate-500 text-[10px] hidden sm:block">{file.lastModified}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* MOD/PLUGINS INSTALLER */}
                {activeTab === 'plugins' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 h-full min-h-[380px]"
                  >
                    <div className="flex justify-between bg-[#0e1124]/30 border border-cyan-950/40 rounded-xl p-3 text-xs flex-col sm:flex-row gap-2">
                      <span className="text-slate-300 font-mono">Select plugins and activate/install them node paths live.</span>
                      <span className="text-[#00f0ff] font-bold font-mono">Mod Repository: SpigotMC Core</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {plugins.map((plugin) => (
                        <div key={plugin.id} className="p-4 rounded-xl border border-slate-800 bg-[#04040a]/80 flex flex-col justify-between hover:border-slate-700 transition duration-150">
                          <div>
                            <div className="flex justify-between items-start">
                              <span className="text-sm font-semibold text-white font-display">{plugin.name}</span>
                              <span className="text-[9px] font-mono text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{plugin.version}</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-normal">{plugin.description}</p>
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-4">
                            <span className="text-[10px] font-mono text-slate-500">DLs: {plugin.downloads}</span>
                            <button
                              onClick={() => togglePlugin(plugin.id)}
                              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider font-mono transition-all duration-150 cursor-pointer ${
                                plugin.installed
                                  ? 'bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20'
                                  : 'bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/20'
                              }`}
                            >
                              {plugin.installed ? (
                                <>
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Uninstall</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Install</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* S3 BACKUP SYSTEM */}
                {activeTab === 'backups' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-4 h-full min-h-[380px]"
                  >
                    <div className="flex justify-between items-center pb-2.5 border-b border-slate-900">
                      <span className="text-xs font-mono text-slate-400">Total Backup Quota: <span className="text-emerald-400 font-bold">2 / Unlimited slots</span></span>
                      <button 
                        onClick={createNewBackup}
                        className="flex items-center space-x-1.5 px-4_5 py-2 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-xs font-bold font-mono hover:bg-[#00f0ff]/20 text-[#00f0ff] text-glow-blue cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5 animate-spin-hover" />
                        <span>Create Live Backup</span>
                      </button>
                    </div>

                    <div className="bg-[#020205] border border-slate-900 rounded-xl overflow-hidden divide-y divide-slate-900/60 font-mono text-[11px]">
                      {backups.map((backup, bIdx) => (
                        <div key={bIdx} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-white/[0.02] gap-3">
                          <div className="flex items-center space-x-3">
                            <Database className="w-4 h-4 text-emerald-400" />
                            <div>
                              <p className="text-sm font-semibold tracking-wide text-white">{backup.name}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5">Created: {backup.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-slate-400 text-xs">{backup.size}</span>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                              backup.status === 'Complete' 
                                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                : 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 animate-pulse'
                            }`}>
                              {backup.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Floating Modal for file viewing */}
        <AnimatePresence>
          {selectedFile && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-[#050510] border border-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              >
                <div className="px-5 py-4 bg-[#090918] border-b border-slate-900 flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold">File Editor: {selectedFile.name}</span>
                  <span className="text-slate-500">Read-Only Demo Mode</span>
                </div>
                <div className="p-5">
                  <textarea
                    value={fileContentText}
                    onChange={(e) => setFileContentText(e.target.value)}
                    className="w-full h-64 bg-[#020205] border border-slate-900 focus:border-[#00f0ff]/30 rounded-xl p-4 font-mono text-xs text-slate-300 focus:outline-none"
                  />
                  <div className="flex justify-end space-x-3 mt-4 text-xs font-mono">
                    <button 
                      onClick={() => setSelectedFile(null)} 
                      className="px-4 py-2.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"
                    >
                      Close editor
                    </button>
                    <button 
                      onClick={saveEditedFile} 
                      className="px-4.5 py-2.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/20 font-bold"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
