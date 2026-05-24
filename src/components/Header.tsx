import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ExternalLink, Server, Terminal, HelpCircle, Activity, Globe, Heart, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of footer/navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Minecraft', action: () => scrollToSection('minecraft-hosting') },
    { name: 'VPS Hosting', action: () => scrollToSection('vps-hosting') },
    { name: 'Game Server', action: () => scrollToSection('game-hosting') },
    { name: 'Panel', action: () => scrollToSection('panel-section') },
    { name: 'Datacenters', action: () => scrollToSection('datacenters') },
    { name: 'Features', action: () => scrollToSection('features') },
    { name: 'FAQ', action: () => scrollToSection('faq') },
    { name: 'Support', action: () => scrollToSection('discord-support') },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030308]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20' 
        : 'bg-transparent py-6'
    }`}>
      <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-[#00f0ff] via-[#0ea5e9] to-[#6366f1] p-[1.5px] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <div className="flex items-center justify-center w-full h-full bg-[#05050a] rounded-[7px]">
                <Server className="w-5 h-5 text-[#00f0ff]" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                HDX<span className="text-[#00f0ff] text-glow-blue">Cloud</span>
              </span>
              <div className="text-[9px] font-mono tracking-widest text-[#6366f1] uppercase font-bold relative -top-0.5">By HDX CO</div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://hdxcloud.xyz" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-slate-800 hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/5 hover:text-white transition-all duration-200"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Panel</span>
            </a>
            <a 
              href="https://discord.gg/xS5uYX8Sm" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-white hover:opacity-90 active:scale-95 transition-all duration-150 shadow-[0_4px_12px_rgba(14,165,233,0.3)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join Discord</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#05050d] border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900/50 transition duration-150"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-3.5 border-t border-white/5">
                <a 
                  href="https://hdxcloud.xyz" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg text-center text-sm font-semibold uppercase text-slate-300 border border-slate-800 hover:bg-[#00f0ff]/5 hover:text-white transition-all duration-150"
                >
                  <Terminal className="w-4 h-4 text-[#00f0ff]" />
                  <span>Client Dashboard</span>
                </a>
                <a 
                  href="https://discord.gg/xS5uYX8Sm" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg text-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-white hover:opacity-90 transition-all duration-150"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Join Official Discord</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
