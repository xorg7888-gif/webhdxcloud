import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Banknote, CreditCard, Coins, Check, Zap } from 'lucide-react';

interface PaymentMethod {
  name: string;
  type: string;
  desc: string;
  color: string;
  glowColor: string;
}

export default function PaymentMethods() {
  const methods: PaymentMethod[] = [
    { name: 'UPI Gateway', type: 'Instant Indian Banking', desc: 'Direct safe transfers from any bank account instantly with zero surcharge fee.', color: 'from-[#097969] to-emerald-500', glowColor: 'rgba(16,185,129,0.3)' },
    { name: 'Paytm Wallet', type: 'Mobile Wallet App', desc: 'Fast mobile scanning and login checkout support via verified Paytm channels.', color: 'from-[#0ea5e9] to-[#0056b3]', glowColor: 'rgba(14,165,233,0.3)' },
    { name: 'PhonePe', type: 'UPI Multi-Bank', desc: 'Safe UPI secure payments routed via PhonePe ecosystem for elite Indian servers transactions.', color: 'from-purple-600 to-[#6366f1]', glowColor: 'rgba(124,58,237,0.3)' },
    { name: 'Google Pay', type: 'Fast Checkouts', desc: 'Rapid payments checking with biometrics and integrated Google Wallet systems.', color: 'from-[#ea4335] via-[#4285f4] to-[#fbbc05]', glowColor: 'rgba(66,133,244,0.3)' },
    { name: 'PayPal Gateway', type: 'Global Client Transfers', desc: 'Standard support for all international shoppers. Automatic conversion to INR (₹) rates.', color: 'from-[#003087] to-[#0079C1]', glowColor: 'rgba(0,121,193,0.3)' },
    { name: 'Crypto Currency', type: 'Decentralized Nodes', desc: 'Accepting Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Solana (SOL), and USDT stablecoins.', color: 'from-amber-500 to-amber-700', glowColor: 'rgba(245,158,11,0.3)' },
    { name: 'Debit / Credit Card', type: 'Global Merchants Cards', desc: 'Powered by Stripe. Safe validation for Visa, MasterCard, RuPay, and American Express lines.', color: 'from-slate-700 to-slate-950', glowColor: 'rgba(100,116,139,0.2)' }
  ];

  return (
    <section className="relative py-24 bg-[#05050a] border-t border-white/5 overflow-hidden font-sans" id="payment-gateways">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full border border-[#00f0ff]/15">
            Billing Gateway Integration
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            Secure Payment <span className="bg-gradient-to-r from-emerald-400 to-[#00f0ff] bg-clip-text text-transparent text-glow-blue font-extrabold">Methods Supported</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-4 max-w-xl mx-auto leading-relaxed">
            All shopping sessions pass through 256-bit encrypted SSL checkout modules. Choose your preferred local processor for immediate node setup in under 10 seconds.
          </p>
        </div>

        {/* Payment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {methods.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-950/45 rounded-2xl border border-white/5 p-5 flex flex-col justify-between hover:border-[#00f0ff]/20 transition-all duration-300 relative overflow-hidden group shadow-2xl"
              style={{ boxShadow: `0 0 0px ${m.glowColor}` }}
              whileHover={{ boxShadow: `0 0 20px ${m.glowColor}`, translateY: -2 }}
            >
              <div>
                {/* Method Title Header */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${m.color}`} />
                    <span className="font-display font-extrabold text-sm text-white">{m.name}</span>
                  </div>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase text-slate-500 bg-white/5 px-2 py-0.5 rounded inline-block mb-3">
                  {m.type}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>

              {/* Status footer line */}
              <div className="mt-5 border-t border-white/5 pt-3.5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#00f0ff]" />
                  <span>Surcharge: 0%</span>
                </span>
                <span className="text-[#00f0ff] font-bold">ACTIVE DEPLOY</span>
              </div>

            </motion.div>
          ))}

          {/* Special secure checkout visual module */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="bg-gradient-to-br from-indigo-950/40 to-slate-950 border border-[#6366f1]/20 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 font-mono font-black text-5xl text-indigo-400">
              SSL
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 text-indigo-400">
                <ShieldCheck className="w-6 h-6 shrink-0" />
                <h4 className="font-display font-extrabold text-white text-base">PCI-DSS Safe Shield</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-normal">
                HDX CO matches strict bank-level PCI Compliance standards. Your transaction keys, token signatures, and personal billing accounts are fully decentralized and protected.
              </p>
            </div>

            <div className="text-[10px] font-mono text-zinc-500 pt-4 border-t border-white/5">
              SECURE HANDSHAKE: CO-SIGNED
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
