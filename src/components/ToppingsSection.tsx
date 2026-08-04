import React from 'react';
import { motion } from 'motion/react';
import { EXTRA_TOPPINGS } from '../data/menuData';
import { CartItem } from '../types';
import { Plus, Sparkles, Check } from 'lucide-react';

interface ToppingsSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const ToppingsSection: React.FC<ToppingsSectionProps> = ({ onAddToCart }) => {
  const [addedNotice, setAddedNotice] = React.useState<string | null>(null);

  const handleAddExtra = (topping: (typeof EXTRA_TOPPINGS)[0]) => {
    const cartItem: CartItem = {
      cartId: `topping-${topping.id}-${Date.now()}`,
      id: topping.id,
      title: topping.name,
      unitPrice: topping.price,
      quantity: 1,
    };

    onAddToCart(cartItem);
    setAddedNotice(`${topping.name} added!`);
    setTimeout(() => setAddedNotice(null), 2000);
  };

  return (
    <section className="py-16 bg-zinc-950 text-white border-t border-b border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customize Your Feast</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-serif">
            Extra <span className="text-amber-400">Toppings & Add-Ons</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            Customize your pizzas, burgers, and wraps with double chicken, extra mozzarella, or extra garlic mayonnaise.
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EXTRA_TOPPINGS.map((topping) => (
            <motion.div
              key={topping.id}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-amber-500/30 hover:border-amber-400 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {topping.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-black">
                    Rs {topping.price}
                  </span>
                </div>

                <h4 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                  {topping.name}
                </h4>

                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans">
                  {topping.description}
                </p>
              </div>

              <button
                id={`add-topping-btn-${topping.id}`}
                onClick={() => handleAddExtra(topping)}
                className="mt-6 w-full py-2.5 rounded-full bg-zinc-800 hover:bg-red-600 text-amber-300 hover:text-white font-bold text-xs shadow-md border border-amber-500/30 flex items-center justify-center gap-2 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Extra (+Rs {topping.price})</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
