import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/menuData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Praise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            What Our <span className="text-red-600">Guests Say</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Hear directly from pizza lovers, families, and students who order from DON PIZZA daily.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-amber-500/20 hover:border-amber-400/60 shadow-2xl relative group"
            >
              <Quote className="w-10 h-10 text-red-600/30 absolute top-6 right-6 group-hover:text-amber-500/30 transition-colors" />

              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed font-sans mb-6">
                "{t.comment}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div>
                  <h4 className="text-base font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                    {t.name}
                  </h4>
                  <span className="text-xs text-zinc-500 font-sans">Verified Customer</span>
                </div>
                <span className="text-xs text-amber-400/80 font-mono">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
