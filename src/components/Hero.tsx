import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Utensils, Award, Sparkles, Star, ChevronRight, FileText } from 'lucide-react';
import heroPizzaBg from '../assets/images/hero_pizza_bg_1785839960245.jpg';
import floatingBurgerImg from '../assets/images/floating_burger_1785839979023.jpg';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
  onOpenPhysicalMenuCard?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu, onOpenPhysicalMenuCard }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPizzaBg}
          alt="Freshly Baked DON PIZZA"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Radial & Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-black/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border border-amber-500/40 shadow-lg shadow-red-900/20"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-300 uppercase">
                Faisalabad's Premier Pizza Destination
              </span>
              <div className="flex items-center gap-0.5 text-amber-400 ml-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-serif"
            >
              Fresh Pizza <br />
              <span className="bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Made Every Day
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl font-medium text-amber-100/90 tracking-wide font-sans max-w-2xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            >
              <span className="text-amber-400 font-bold">Crispy Crust</span>
              <span className="text-red-500">•</span>
              <span className="text-amber-300 font-bold">Premium Cheese</span>
              <span className="text-red-500">•</span>
              <span className="text-amber-200 font-bold">Fresh Ingredients</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Taste the perfection of hand-tossed dough, 100% mozzarella cheese, authentic Pakistani chicken tikka, tandoori & crown crust specials. Order online or visit us today!
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-base shadow-xl shadow-red-700/40 border border-amber-400/40 transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Order Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-menu-btn"
                onClick={onViewMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 hover:text-white font-extrabold text-base border border-amber-500/40 shadow-lg transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2.5"
              >
                <Utensils className="w-5 h-5 text-red-500" />
                <span>View Menu</span>
              </button>

              {onOpenPhysicalMenuCard && (
                <button
                  onClick={onOpenPhysicalMenuCard}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm border border-amber-300 shadow-lg transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-black" />
                  <span>Physical Menu Card / اصلی کارڈ</span>
                </button>
              )}
            </motion.div>

            {/* Quick Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-serif">100%</span>
                <span className="text-xs text-zinc-400 font-medium">Fresh Ingredients</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-serif">30 Min</span>
                <span className="text-xs text-zinc-400 font-medium">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-serif">15+</span>
                <span className="text-xs text-zinc-400 font-medium">Value Deals</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Floating Showcase Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Glowing Aura Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-red-600/30 to-amber-500/20 blur-3xl animate-pulse" />

            {/* Floating Burger Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative z-10 w-64 sm:w-80 rounded-3xl p-3 bg-gradient-to-b from-zinc-900/90 to-black/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl group hover:border-amber-400/60 transition-all"
            >
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-black/40">
                <img
                  src={floatingBurgerImg}
                  alt="Zinger Burger Special"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                  HOT SELLER
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-white font-serif">Don Special Zinger</h3>
                <p className="text-xs text-zinc-400 mt-1">Double fillet, melted cheese, spicy relish</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-black text-amber-400">Rs 350</span>
                  <button
                    onClick={onOrderNow}
                    className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-600/30 transition-all"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 1 - Deal Highlight */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 z-20 bg-zinc-900/95 border border-amber-500/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                🍕
              </div>
              <div className="text-left">
                <span className="block text-xs font-extrabold text-amber-400 uppercase tracking-wider">Combo Deals</span>
                <span className="block text-sm font-bold text-white">Starting Rs 700</span>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Rating & Delivery */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-2 sm:bottom-4 sm:-right-6 z-20 bg-zinc-900/95 border border-red-500/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-extrabold text-zinc-300">100% Authentic</span>
                <span className="block text-xs font-bold text-amber-400">Freshly Baked Always</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
