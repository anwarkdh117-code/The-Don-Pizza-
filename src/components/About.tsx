import React from 'react';
import { Sparkles, ShieldCheck, Flame, Users, DollarSign, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import donPizzaAmbienceImg from '../assets/images/don_pizza_ambience_1785840765828.jpg';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Fresh Ingredients',
      description: 'Daily kneaded dough, 100% genuine mozzarella cheese, and farm-fresh vegetable toppings.',
      icon: Flame,
      color: 'from-amber-500 to-red-600',
    },
    {
      title: 'Fast Delivery',
      description: 'Hot, steaming pizzas and crispy burgers delivered right to your doorstep in express time.',
      icon: Clock,
      color: 'from-red-600 to-amber-500',
    },
    {
      title: 'Hygienic Kitchen',
      description: 'Strict sanitization protocols, clean preparation areas, and open transparent kitchen standards.',
      icon: ShieldCheck,
      color: 'from-amber-400 to-amber-600',
    },
    {
      title: 'Friendly Staff',
      description: 'Warm hospitality, swift table service, and customer-first service attitude every single day.',
      icon: Users,
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Affordable Prices',
      description: 'Unbeatable combo deals and pocket-friendly rates without ever compromising on quality.',
      icon: DollarSign,
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Our Craft</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Welcome To <span className="text-red-600">DON PIZZA</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-lg sm:text-xl text-zinc-300 font-sans leading-relaxed pt-2">
            <span className="text-amber-400 font-semibold">DON PIZZA</span> serves freshly baked pizzas, burgers, wraps, fries, wings, pasta and beverages made with premium ingredients and authentic recipes.
          </p>
        </div>

        {/* Story & Image Showcase Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-amber-100">
              Crafting Exceptional Flavors For Pizza Lovers In Faisalabad
            </h3>
            
            <p className="text-zinc-400 leading-relaxed font-sans text-base">
              Founded with a passion for traditional wood-fired crust texture combined with rich Pakistani spices, DON PIZZA has become a favorite dining destination. From our crown crust specials to crispy zinger burgers, every dish is crafted with meticulous care.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-black border border-amber-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 text-amber-400">
                <Heart className="w-32 h-32" />
              </div>
              <p className="text-amber-300 italic text-sm sm:text-base font-serif leading-relaxed">
                "Our promise is simple: fresh dough prepared daily, high quality toppings, generous cheese layers, and warm service that makes you feel right at home."
              </p>
              <span className="block mt-3 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                — DON PIZZA Culinary Team
              </span>
            </div>
          </div>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80"
                alt="Don Pizza Oven Craft"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest">Artisanal Dough</span>
                <span className="text-white text-lg font-bold font-serif">Hand Crafted Daily</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 h-64 sm:h-72 sm:mt-8">
              <img
                src={donPizzaAmbienceImg}
                alt="Don Pizza Restaurant Ambience"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest">Warm Ambience</span>
                <span className="text-white text-lg font-bold font-serif">Family Environment</span>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Pillar Cards */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Why People Love Dining With Us</h3>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest font-sans">Our Core Quality Pillars</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/20 hover:border-amber-400/60 shadow-xl backdrop-blur-md flex flex-col items-center text-center group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:rotate-6 transition-transform mb-4`}>
                    <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-amber-400">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
