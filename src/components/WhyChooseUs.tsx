import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame, Clock, Award, ChefHat, DollarSign, Smile, Home } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Fresh Ingredients',
      desc: '100% farm fresh vegetables, pure imported mozzarella, and daily kneaded dough.',
      icon: Flame,
      color: 'from-amber-500 to-red-600',
    },
    {
      title: 'Fast Delivery',
      desc: 'Hot, steaming pizzas and burgers delivered directly to your doorstep within 30 minutes.',
      icon: Clock,
      color: 'from-red-600 to-amber-500',
    },
    {
      title: 'Premium Cheese',
      desc: 'Super stretchy double mozzarella pull in every slice of pizza.',
      icon: Award,
      color: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'Professional Chefs',
      desc: 'Experienced culinary chefs specializing in authentic wood-fired pizza & fast food crafts.',
      icon: ChefHat,
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Affordable Prices',
      desc: 'Pocket-friendly rates and generous deal packages for every budget.',
      icon: DollarSign,
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Best Taste',
      desc: 'Signature secret spices and sauces that leave you craving for more.',
      icon: Smile,
      color: 'from-amber-500 to-red-500',
    },
    {
      title: 'Family Environment',
      desc: 'Clean, spacious, family-friendly seating area with welcoming atmosphere.',
      icon: Home,
      color: 'from-red-600 to-amber-600',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The DON PIZZA Difference</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Why Choose <span className="text-red-600">Us</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            We hold ourselves to international standards of food safety, flavor precision, and speed. Here is what makes us Faisalabad's top choice.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-zinc-900/90 border border-amber-500/20 hover:border-amber-400/80 shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg group-hover:rotate-6 transition-transform mb-5`}>
                    <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-amber-400">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
