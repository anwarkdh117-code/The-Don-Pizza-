import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PIZZA_ITEMS, OTHER_MENU_ITEMS } from '../data/menuData';
import { MenuItem, CategoryId, CartItem } from '../types';
import { Search, Plus, Check, Sparkles, Filter, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onAddToCart: (item: CartItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemForSize, setActiveItemForSize] = useState<MenuItem | null>(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categoriesNav: { id: CategoryId; name: string; emoji: string }[] = [
    { id: 'all', name: 'All Menu', emoji: '🍽' },
    { id: 'pizza', name: 'Special Pizza', emoji: '🍕' },
    { id: 'burgers', name: 'Burgers', emoji: '🍔' },
    { id: 'wraps', name: 'Wraps & Rolls', emoji: '🌯' },
    { id: 'pasta', name: 'Pasta', emoji: '🍝' },
    { id: 'platters', name: 'Platters & Fries', emoji: '🍟' },
    { id: 'wings', name: 'Hot Wings & Nuggets', emoji: '🍗' },
    { id: 'drinks', name: 'Beverages', emoji: '🥤' },
  ];

  const allItems: MenuItem[] = [...PIZZA_ITEMS, ...OTHER_MENU_ITEMS];

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'wraps'
        ? item.category === 'wraps' || item.category === 'rolls'
        : selectedCategory === 'platters'
        ? item.category === 'platters' || item.category === 'fries'
        : selectedCategory === 'wings'
        ? item.category === 'wings' || item.category === 'nuggets'
        : item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (item: MenuItem, priceIndex: number = 0) => {
    const selectedPriceObj = item.prices[priceIndex] || item.prices[0];
    const cartItem: CartItem = {
      cartId: `${item.id}-${selectedPriceObj.size || 'default'}-${Date.now()}`,
      id: item.id,
      title: item.name,
      selectedSize: selectedPriceObj.size,
      unitPrice: selectedPriceObj.amount,
      quantity: 1,
      image: item.image,
    };

    onAddToCart(cartItem);
    setAddedItemNotice(`${item.name} (${selectedPriceObj.size || 'Standard'}) added to cart!`);
    setTimeout(() => setAddedItemNotice(null), 2500);
    setActiveItemForSize(null);
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {addedItemNotice && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold px-6 py-3 rounded-full shadow-2xl border border-amber-300 flex items-center gap-2"
          >
            <Check className="w-5 h-5 text-amber-300" />
            <span>{addedItemNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Culinary Menu</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Delicious <span className="text-red-600">Menu</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Freshly prepared with authentic Pakistani flavors & international standards. Select your sizes and order instantly!
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizza, burgers, pasta, rolls..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-zinc-900 border border-amber-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categoriesNav.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`menu-cat-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400/50 shadow-lg shadow-red-700/30 scale-105'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 rounded-3xl border border-zinc-800">
            <Filter className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold font-serif text-white">No items found</h3>
            <p className="text-zinc-400 text-sm mt-1">Try searching for another dish or reset your category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-red-600 text-white text-xs font-bold hover:bg-red-500"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-b from-zinc-900/90 to-black rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 shadow-xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {item.description && (
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}

                    {/* Pricing Grid */}
                    <div className="mt-5 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
                        Pricing / Sizes:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {item.prices.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-black/60 border border-zinc-800 rounded-xl p-2 text-center"
                          >
                            <span className="block text-[10px] text-zinc-400 uppercase font-bold">
                              {p.size || 'Regular'}
                            </span>
                            <span className="block text-sm font-black text-amber-300">
                              Rs {p.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2">
                  {item.prices.length === 1 ? (
                    <button
                      id={`add-btn-${item.id}`}
                      onClick={() => handleQuickAdd(item, 0)}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-red-700/30 flex items-center justify-center gap-2 border border-amber-300/30 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart (Rs {item.prices[0].amount})</span>
                    </button>
                  ) : (
                    <button
                      id={`select-size-btn-${item.id}`}
                      onClick={() => {
                        setActiveItemForSize(item);
                        setSelectedSizeIndex(0);
                      }}
                      className="w-full py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-amber-300 hover:text-white font-bold text-sm border border-amber-500/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <ShoppingBag className="w-4 h-4 text-red-500" />
                      <span>Select Size & Order</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Size Selection Modal for Multi-Price items (e.g. S, M, L Pizza) */}
      <AnimatePresence>
        {activeItemForSize && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-amber-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Choose Size</span>
                  <h3 className="text-2xl font-extrabold font-serif text-white">{activeItemForSize.name}</h3>
                </div>
                <button
                  onClick={() => setActiveItemForSize(null)}
                  className="text-zinc-400 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden">
                <img
                  src={activeItemForSize.image}
                  alt={activeItemForSize.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-300 uppercase block">Available Sizes:</label>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeItemForSize.prices.map((priceOption, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3.5 rounded-2xl flex items-center justify-between border transition-all text-left ${
                        selectedSizeIndex === idx
                          ? 'bg-red-600/30 border-amber-400 text-white font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <span className="block text-sm font-bold text-white">{priceOption.size}</span>
                        <span className="block text-xs text-zinc-400">Freshly prepared</span>
                      </div>
                      <span className="text-lg font-black text-amber-400">Rs {priceOption.amount}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => setActiveItemForSize(null)}
                  className="w-1/3 py-3 rounded-full bg-zinc-800 text-zinc-300 font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleQuickAdd(activeItemForSize, selectedSizeIndex)}
                  className="w-2/3 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-red-700/30 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add To Order</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
