import React from 'react';
import { motion } from 'motion/react';
import { CategoryId } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';
import crispyFriesImg from '../assets/images/crispy_french_fries_1785841350057.jpg';
import softDrinkBottleImg from '../assets/images/soft_drink_bottle_1785841027598.jpg';
import donSpecialBurgerImg from '../assets/images/don_special_burger_1785844999346.jpg';
import bakedCheesyPastaImg from '../assets/images/baked_cheesy_pasta_1785923449106.jpg';

interface CategoriesProps {
  onSelectCategory: (category: CategoryId) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const categoriesList: {
    id: CategoryId;
    title: string;
    emoji: string;
    description: string;
    itemCount: string;
    bgImage: string;
  }[] = [
    {
      id: 'pizza',
      title: 'Special Pizza',
      emoji: '🍕',
      description: 'Hand-tossed crusts, crown crust, Kabab stuffer & tikka flavors.',
      itemCount: '11 Flavors',
      bgImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'burgers',
      title: 'Burgers',
      emoji: '🍔',
      description: 'Zinger, Jalapeno, Chipotle, Patty & Don Special burgers.',
      itemCount: '6 Varieties',
      bgImage: donSpecialBurgerImg,
    },
    {
      id: 'wraps',
      title: 'Wraps',
      emoji: '🌯',
      description: 'Crispy chicken wraps, tortillas & rolls packed with garlic sauce.',
      itemCount: '2 Specialties',
      bgImage: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pasta',
      title: 'Pasta',
      emoji: '🍝',
      description: 'Baked macaroni, special mixed sauce & Alfredo cream pasta.',
      itemCount: '3 Recipes',
      bgImage: bakedCheesyPastaImg,
    },
    {
      id: 'fries',
      title: 'Fries',
      emoji: '🍟',
      description: 'Crispy gold french fries sprinkled with spicy seasoning.',
      itemCount: 'Fresh Cut',
      bgImage: crispyFriesImg,
    },
    {
      id: 'wings',
      title: 'Hot Wings',
      emoji: '🍗',
      description: 'Golden crunchy buffalo & fiery chili coated chicken wings.',
      itemCount: '5 & 10 Pcs',
      bgImage: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'drinks',
      title: 'Drinks',
      emoji: '🥤',
      description: 'Ice-cold soft drinks (500ml, 1L, 1.5L) & purified mineral water.',
      itemCount: '6 Options',
      bgImage: softDrinkBottleImg,
    },
    {
      id: 'platters',
      title: 'Platters',
      emoji: '🍽',
      description: 'Don Special Platter & Pizza Sandwiches for maximum craving.',
      itemCount: '2 Platters',
      bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Menu</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
              Featured <span className="text-red-600">Categories</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              From our signature crown crust pizzas to juicy zinger burgers and sizzling platters. Select any category to view full menu.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group focus:outline-none"
          >
            <span>View Complete Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/80 shadow-2xl cursor-pointer"
            >
              {/* Card Image */}
              <img
                src={cat.bgImage}
                alt={cat.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.65] group-hover:brightness-[0.75]"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-black/80 border border-amber-500/30 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold shadow-md uppercase tracking-wider">
                  {cat.itemCount}
                </span>
              </div>

              {/* Bottom Card Info */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                <h3 className="text-2xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>{cat.title}</span>
                </h3>
                <p className="text-xs text-zinc-300 font-sans line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
