import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Radio, ExternalLink, HelpCircle, Terminal } from 'lucide-react';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export default function AiSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: 'Diagnostics boot complete. Hello, I am the HDXCloud Virtual AI Assistant. I can immediately answer questions about our Ryzen hosting nodes, Casablanca or Mumbai speed paths, or custom minecraft plugin deployment. How may I assist you today?', time: 'Online' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetQueries = [
    'How cheap is setup?',
    'What Ryzen CPUs are used?',
    'Tell me about Co-founders!',
    'Which locations are active?'
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const d = new Date();
    const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    
    setMessages(prev => [...prev, { sender: 'user', text, time: timeStr }]);
    setInputValue('');
    setIsTyping(true);

    // AI Intelligent auto responses
    setTimeout(() => {
      let response = '';
      const query = text.toLowerCase();

      if (query.includes('setup') || query.includes('cheap') || query.includes('fast') || query.includes('price')) {
        response = 'Our servers initiate in under 10 seconds! Minecraft host tiers start as cheap as ₹30/month (Grass tier) and VPS pricing starts at ₹60/month (VPS Nano tier) with no lock-in. Direct hardware ownership by HDX CO enables these massive discounts.';
      } else if (query.includes('location') || query.includes('morocco') || query.includes('india') || query.includes('ping') || query.includes('router')) {
        response = 'We operate premium datacenters in Casablanca (Morocco), Mumbai (India), Singapore, Dubai, Europe (Germany), and Ashburn (USA). Tap our "Server Status" node table above to check sub-millisecond route paths from your location instantly.';
      } else if (query.includes('cpu') || query.includes('ryzen') || query.includes('hardware') || query.includes('specs') || query.includes('nvme')) {
        response = 'HDXCloud runs on physical AMD Ryzen 9 7950X, Ryzen 9 7900X, and multi-core AMD EPYC host processors paired with DDR5 ECC modules and PCIe Gen4 NVMe configurations in hardware RAID for ultra fast IOPS.';
      } else if (query.includes('founder') || query.includes('clown') || query.includes('senshi') || query.includes('hdx co')) {
        response = 'HDXCloud is founded by parent enterprise HDX CO, with Co-Founders CLOWN and SENSHI leading core community and technical engineering. They are heavily active daily inside our Official Discord hub (discord.gg/xS5uYX8Sm).';
      } else if (query.includes('discord') || query.includes('community') || query.includes('support')) {
        response = 'Our primary assistance core is hosted on Discord. Open a secure ticket on discord.gg/xS5uYX8Sm to chat directly with co-founders or get 24/7 priority migrations help.';
      } else {
        response = 'Excellent question! HDXCloud premium servers feature 5 Tbps DDoS scrubbing, native Paper/Purpur modpack loaders, full SFTP/SSH root authorization, and automatic backups. Join our Discord to chat directly with co-founders CLOWN and SENSHI!';
      }

      setMessages(prev => [...prev, { sender: 'ai', text: response, time: timeStr }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <>
      {/* Floating pulsing bottom button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#6366f1] text-black shadow-[0_5px_25px_rgba(0,240,255,0.4)] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-150 border border-[#00f0ff]/30"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          id="ai-floating-bubble"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-black" />}
          
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </motion.button>
      </div>

      {/* Expanded Glassmorphic Chat Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-22 right-6 z-40 w-full max-w-[370px] sm:max-w-[400px] h-[520px] bg-[#030309]/95 border border-[#00f0ff]/25 rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_15px_50px_rgba(0,240,255,0.15)] backdrop-blur-xl font-sans"
            id="ai-support-window"
          >
            {/* Top Header Block */}
            <div className="bg-gradient-to-r from-slate-950 via-[#0a0f29] to-slate-950 px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f0ff] to-cyan-700 p-[1.5px]">
                  <div className="flex items-center justify-center w-full h-full bg-[#030308] rounded-[9px]">
                    <Bot className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black"></span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white tracking-wide">HDX Intelligence</h4>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <Radio className="w-3 h-3 text-[#00f0ff] animate-pulse" />
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider">AI Host Support Live</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages flow */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-black/40 scrollbar-thin">
              
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2.5`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 bg-[#0a122e] rounded-lg border border-cyan-800/20 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-cyan-400" />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed font-normal shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-tr from-[#0ea5e9] to-[#6366f1] text-white rounded-tr-sm'
                      : 'bg-slate-900/60 border border-white/5 text-slate-300 rounded-tl-sm'
                  }`}>
                    {msg.text}
                    {msg.sender === 'ai' && (
                      <span className="text-[8px] font-mono text-slate-500 block text-right mt-1 font-bold">HDX CO AI CORE</span>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 bg-indigo-950/40 rounded-lg border border-indigo-500/10 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-indigo-400" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#0a122e] rounded-lg border border-cyan-800/20 flex items-center justify-center animate-pulse">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-3.5 text-xs flex items-center space-x-1.5">
                    <span className="w-2- w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Bottom Input bar & Preset Suggestions */}
            <div className="bg-slate-950 p-4 border-t border-white/5 space-y-3 shrink-0">
              
              {/* Presets Grid */}
              <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-1 font-mono text-[9px]">
                {presetQueries.map((pq, pqIdx) => (
                  <button
                    key={pqIdx}
                    onClick={() => handleSendMessage(pq)}
                    className="px-2.5 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 hover:border-[#00f0ff]/20 transition-all cursor-pointer inline-block"
                  >
                    {pq}
                  </button>
                ))}
              </div>

              {/* Input box */}
              <form onSubmit={handleFormSubmit} className="flex gap-2.5">
                <input
                  type="text"
                  placeholder="Queries Ryzen nodes, pricing or setups..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow bg-[#080812] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#00f0ff]/40 placeholder-slate-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-black font-bold flex items-center justify-center hover:brightness-105 active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Footer status summary link */}
              <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>Interactive Assistant</span>
                </span>
                <a 
                  href="https://discord.gg/xS5uYX8Sm" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline flex items-center gap-1.5 font-bold uppercase"
                >
                  <span>Connect Discord</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
