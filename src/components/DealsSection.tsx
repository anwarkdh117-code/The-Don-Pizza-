import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DEALS } from '../data/menuData';
import { CartItem } from '../types';
import { Sparkles, Check, ShoppingBag, Flame } from 'lucide-react';

import zingerImg from '../assets/images/zinger_burger_menu_1785921746842.jpg';
import pattyImg from '../assets/images/classic_peti_burger_1785921346697.jpg';
import pizzaImg from '../assets/images/chicken_fajita_pizza_1785922482725.jpg';
import wrapImg from '../assets/images/wrap_crispy_zinger_1785923230431.jpg';
import drinkImg from '../assets/images/soft_drink_bottle_1785841027598.jpg';
import wingsImg from '../assets/images/hot_wings_menu_1785921782870.jpg';
import pastaImg from '../assets/images/don_curicks_pasta_1785845263345.jpg';
import rollImg from '../assets/images/chicken_spin_roll_card_1785923883580.jpg';
import sandwichImg from '../assets/images/pizza_sandwich_card_1785923640707.jpg';
import friesImg from '../assets/images/crispy_french_fries_1785841350057.jpg';

interface DealsSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const getItemImage = (itemStr: string) => {
  const lower = itemStr.toLowerCase();
  if (lower.includes('zinger')) return zingerImg;
  if (lower.includes('patty') || lower.includes('peti')) return pattyImg;
  if (lower.includes('sandwich')) return sandwichImg;
  if (lower.includes('pizza')) return pizzaImg;
  if (lower.includes('wrap')) return wrapImg;
  if (lower.includes('roll')) return rollImg;
  if (lower.includes('fries')) return friesImg;
  if (lower.includes('drink') || lower.includes('liter') || lower.includes('litre')) return drinkImg;
  if (lower.includes('wings')) return wingsImg;
  if (lower.includes('pasta')) return pastaImg;
  return null;
};

export const DealsSection: React.FC<DealsSectionProps> = ({ onAddToCart }) => {
  // State for deals with TF / SF options (Deals 7, 8, 9)
  const [flavorTypes, setFlavorTypes] = useState<{ [dealId: string]: 'tf' | 'sf' }>({
    'deal-7': 'tf',
    'deal-8': 'tf',
    'deal-9': 'tf',
  });

  const toggleFlavor = (dealId: string, type: 'tf' | 'sf') => {
    setFlavorTypes((prev) => ({ ...prev, [dealId]: type }));
  };

  const handleOrderDeal = (deal: (typeof DEALS)[0]) => {
    let price = 0;
    let selectedFlavorText = '';

    if (typeof deal.price === 'number') {
      price = deal.price;
    } else {
      const choice = flavorTypes[deal.id] || 'tf';
      price = choice === 'tf' ? deal.price.tf : deal.price.sf;
      selectedFlavorText = choice === 'tf' ? ' (Tikka/Fajita)' : ' (Special Flavors)';
    }

    const cartItem: CartItem = {
      cartId: `${deal.id}-${Date.now()}`,
      id: deal.id,
      title: `Deal #${deal.dealNumber}: ${deal.title}${selectedFlavorText}`,
      unitPrice: price,
      quantity: 1,
      image: deal.image,
      specialInstructions: `Included: ${deal.items.join(', ')}`,
    };

    onAddToCart(cartItem);
  };

  return (
    <section id="deals" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Super Saver Offers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Exclusive <span className="text-red-600">Deals & Combos</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-300 text-sm sm:text-base font-sans">
            Unbeatable prices for individuals, couples, and big family celebrations. Loaded with pizzas, burgers, wraps & drinks!
          </p>
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => {
            const isMultiPrice = typeof deal.price !== 'number';
            const selectedFlavor = flavorTypes[deal.id] || 'tf';

            const activePrice = isMultiPrice
              ? selectedFlavor === 'tf'
                ? (deal.price as { tf: number; sf: number }).tf
                : (deal.price as { tf: number; sf: number }).sf
              : (deal.price as number);

            return (
              <motion.div
                key={deal.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/80 shadow-2xl flex flex-col justify-between relative group"
              >
                {/* Deal Number Ribbon */}
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg border border-amber-300/40 uppercase tracking-widest">
                  Deal #{deal.dealNumber}
                </div>

                {deal.badge && (
                  <div className="absolute top-4 right-4 z-20 bg-black/80 border border-amber-400/50 text-amber-300 font-extrabold text-[10px] px-3 py-1 rounded-full shadow-lg uppercase tracking-wider backdrop-blur-md">
                    {deal.badge}
                  </div>
                )}

                <div>
                  {/* Top Banner with Item Images */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-950 p-2 pt-10 flex items-center justify-center gap-1.5 border-b border-amber-500/20">
                    {deal.items.map((itemStr, idx) => {
                      const itemImg = getItemImage(itemStr) || deal.image;
                      return (
                        <div
                          key={idx}
                          className="relative flex-1 h-full rounded-xl overflow-hidden border border-amber-500/40 group-hover:scale-105 transition-transform duration-500 shadow-md bg-zinc-900"
                        >
                          <img
                            src={itemImg}
                            alt={itemStr}
                            className="w-full h-full object-cover filter brightness-95"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-black/85 px-1.5 py-0.5 rounded text-[9px] font-bold text-amber-300 border border-amber-500/40 whitespace-nowrap shadow max-w-[92%] truncate text-center">
                            {itemStr}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                      {deal.title}
                    </h3>

                    {/* Included Items List */}
                    <div className="mt-4 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
                        Included in this deal:
                      </span>
                      <ul className="space-y-2">
                        {deal.items.map((itemStr, idx) => {
                          const itemImg = getItemImage(itemStr);
                          return (
                            <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-200 font-medium bg-zinc-950/80 p-2 pr-3 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 transition-colors">
                              {itemImg ? (
                                <img
                                  src={itemImg}
                                  alt={itemStr}
                                  className="w-9 h-9 rounded-xl object-cover border border-amber-500/40 shrink-0 shadow-sm"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-xl bg-red-950 border border-red-500/50 flex items-center justify-center shrink-0 text-amber-400">
                                  <Check className="w-4 h-4" />
                                </div>
                              )}
                              <span className="font-semibold text-zinc-200">{itemStr}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Flavor Selection for Deals 7, 8, 9 */}
                    {isMultiPrice && (
                      <div className="mt-5 p-3 rounded-2xl bg-black/60 border border-amber-500/20 space-y-2">
                        <span className="text-[11px] font-bold text-amber-400 block">Select Flavor Category:</span>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => toggleFlavor(deal.id, 'tf')}
                            className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                              selectedFlavor === 'tf'
                                ? 'bg-red-600 text-white border-amber-400 shadow-md'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                            }`}
                          >
                            Tikka/Fajita (Rs {(deal.price as { tf: number; sf: number }).tf})
                          </button>
                          <button
                            onClick={() => toggleFlavor(deal.id, 'sf')}
                            className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                              selectedFlavor === 'sf'
                                ? 'bg-amber-600 text-white border-amber-300 shadow-md'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                            }`}
                          >
                            Special Flavors (Rs {(deal.price as { tf: number; sf: number }).sf})
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Price & Order Button */}
                <div className="p-6 pt-0 border-t border-zinc-800/60 mt-4">
                  <div className="flex items-center justify-between mb-4 pt-4">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider block">Special Deal Price</span>
                      <span className="text-2xl font-black text-amber-300 font-serif">Rs {activePrice}</span>
                    </div>
                    <span className="text-xs text-red-400 font-extrabold bg-red-950/80 px-2.5 py-1 rounded-full border border-red-500/40 flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      <span>SAVE BIG</span>
                    </span>
                  </div>

                  <button
                    id={`order-deal-btn-${deal.id}`}
                    onClick={() => handleOrderDeal(deal)}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-700/30 flex items-center justify-center gap-2 border border-amber-400/40 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Deal #{deal.dealNumber}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
