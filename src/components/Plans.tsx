import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MINECRAFT_PLANS, VPS_PLANS, GAME_PLANS } from '../data';
import { HostingPlan } from '../types';
import { Check, ShieldAlert, Cpu, HardDrive, Network, Globe, Flame, Zap } from 'lucide-react';

export default function Plans() {
  const [activeTab, setActiveTab] = useState<'minecraft' | 'vps' | 'game'>('minecraft');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const getPlansByTab = () => {
    switch (activeTab) {
      case 'minecraft': return MINECRAFT_PLANS;
      case 'vps': return VPS_PLANS;
      case 'game': return GAME_PLANS;
    }
  };

  const calculatePrice = (monthlyPrice: number) => {
    if (billingCycle === 'quarterly') {
      // Save 20%
      const discountPrice = monthlyPrice * 0.8;
      return Math.round(discountPrice).toString();
    }
    return Math.round(monthlyPrice).toString();
  };

  const handleBuyNow = (plan: HostingPlan) => {
    // Elegant redirect or feedback
    alert(`Thank you for selecting the ${plan.name} server plan! Redirecting you to configure your high-performance nodes on hdxcloud.xyz at the rate of ₹${plan.price}/month.`);
  };

  const renderPlanCard = (plan: HostingPlan, idx: number) => {
    const calculatedPriceNum = calculatePrice(plan.price);
    
    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between glow-card overflow-hidden h-full ${
          plan.popular 
            ? 'border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.06)] bg-slate-900/50' 
            : 'border-slate-800/80 bg-slate-950/45'
        }`}
      >
        {/* Popular Ribbon glow */}
        {plan.popular && (
          <div className="absolute top-0 right-0 z-10">
            <span className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-bl-xl bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-black font-mono font-black text-[10px] uppercase tracking-wider shadow">
              <Flame className="w-3.5 h-3.5" />
              <span>Best Value</span>
            </span>
          </div>
        )}

        {/* Header Block */}
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">{plan.type} HOSTING</span>
          <h3 className="font-display font-bold text-xl text-white mt-1.5">{plan.name}</h3>
          
          <div className="flex items-baseline mt-4 mb-6">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-white text-glow-blue">₹</span>
            <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight ml-0.5 text-glow-blue">{calculatedPriceNum}</span>
            <span className="text-xs text-slate-400 font-mono ml-2">/ month {billingCycle === 'quarterly' && <span className="text-[#00f0ff] block text-[10px] font-bold mt-0.5">(Quarterly Discount Active)</span>}</span>
          </div>

          {/* Quick Specifications Checklist Grid */}
          <div className="space-y-3.5 border-t border-b border-white/5 py-5 mb-5 font-mono text-xs text-slate-300">
            <div className="flex items-center space-x-2.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>CPU: {plan.specs.cpu}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>RAM: {plan.specs.ram}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <HardDrive className="w-4 h-4 text-emerald-400" />
              <span>NVMe: {plan.specs.storage}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Network className="w-4 h-4 text-[#0ea5e9]" />
              <span>Bandwidth: {plan.specs.bandwidth}</span>
            </div>
            {plan.specs.protection && (
              <div className="flex items-center space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Protection: {plan.specs.protection}</span>
              </div>
            )}
          </div>

          {/* High Value Features */}
          <ul className="space-y-2.5 mb-8 text-sm">
            {plan.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start">
                <span className="inline-flex items-center justify-center p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mr-2.5 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                <span className="text-slate-300 text-xs sm:text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action button */}
        <button
          onClick={() => handleBuyNow(plan)}
          className={`w-full py-4.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer ${
            plan.popular
              ? 'bg-gradient-to-r from-[#00f0ff] to-[#0ea5e9] text-black hover:brightness-110 shadow-[0_4px_15px_rgba(0,240,255,0.25)] active:scale-97'
              : 'border border-[#00f0ff]/20 bg-[#070b1e]/60 hover:bg-[#00f0ff]/5 hover:border-[#00f0ff]/40 text-white active:scale-97'
          }`}
        >
          Buy Now - Instant Setup
        </button>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 bg-[#05050a] overflow-hidden" id="minecraft-hosting">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-gradient-radial from-[#6366f1]/5 via-transparent to-transparent rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-radial from-[#00f0ff]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            HDXCloud Server Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Premium Specs, <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Budget-Friendly Prices</span>
          </h2>
          <p className="text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Scale seamlessly on AMD Ryzen core processors. Select a plan below to gain instant control panel access with no lock-in contract fees.
          </p>

          {/* Tab Selection Switch */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-slate-950 border border-slate-900 rounded-xl mt-10 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('minecraft')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'minecraft'
                  ? 'bg-gradient-to-r from-[#00f0ff]/10 to-[#0ea5e9]/15 border border-[#00f0ff]/30 text-[#00f0ff] text-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Minecraft Server</span>
            </button>
            <button
              id="vps-hosting"
              onClick={() => setActiveTab('vps')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'vps'
                  ? 'bg-gradient-to-r from-[#00f0ff]/10 to-[#0ea5e9]/15 border border-[#00f0ff]/30 text-[#00f0ff] text-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>VPS Containers</span>
            </button>
            <button
              id="game-hosting"
              onClick={() => setActiveTab('game')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'game'
                  ? 'bg-gradient-to-r from-[#00f0ff]/10 to-[#0ea5e9]/15 border border-[#00f0ff]/30 text-[#00f0ff] text-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Custom Game Host</span>
            </button>
          </div>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center space-x-3.5 mt-6 text-sm">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Monthly Pay</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'quarterly' : 'monthly')}
              className="relative w-12 h-6.5 rounded-full bg-slate-900 border border-slate-800 transition-colors duration-300 focus:outline-none"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-[#00f0ff] shadow-sm transform transition-transform duration-300 ${
                billingCycle === 'quarterly' ? 'translate-x-5.5' : 'translate-x-0'
              }`}></span>
            </button>
            <span className={`font-medium flex items-center space-x-1.5 ${billingCycle === 'quarterly' ? 'text-[#00f0ff]' : 'text-slate-500'}`}>
              <span>Pay Quarterly</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/20 font-mono font-extrabold uppercase">Save 20%</span>
            </span>
          </div>

        </div>

        {/* Interactive Dynamic Price Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {getPlansByTab().map((plan, idx) => renderPlanCard(plan, idx))}
        </div>

      </div>
    </section>
  );
}
