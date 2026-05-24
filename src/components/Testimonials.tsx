import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#05050a] overflow-hidden" id="testimonials">
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#00f0ff]/3 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f0ff] text-glow-blue bg-cyan-950/20 px-3.5 py-1.5 rounded-full border border-cyan-800/10">
            Client Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-none">
            What Our Hosts Say <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">About Us</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal mt-5 max-w-xl mx-auto">
            Read positive hosting experiences from client communities operating Minecraft hubs, Discord bots, and remote game clusters.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-45px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glow-card p-5.5 rounded-2xl flex flex-col justify-between h-full bg-[#0a0c1a]/40 relative group"
            >
              {/* Quote visual float */}
              <Quote className="absolute top-4.5 right-4.5 w-6 h-6 text-slate-800/60 pointer-events-none group-hover:text-[#00f0ff]/10 transition-colors duration-300" />
              
              <div>
                {/* Stars */}
                <div className="flex space-x-1.5 mb-4">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shadow-sm" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed italic mb-5">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3.5 pt-4.5 border-t border-white/[0.04] mt-5">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-slate-850 shrink-0 object-cover"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold font-display text-white truncate">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 font-sans truncate">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
