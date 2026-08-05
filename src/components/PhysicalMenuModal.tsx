import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, FileText, Download, Sparkles } from 'lucide-react';

interface PhysicalMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhysicalMenuModal: React.FC<PhysicalMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  if (!isOpen) return null;

  const menuCards = [
    {
      id: 'card-1',
      title: 'Burgers, Wraps, Boneless & Wings',
      subtitle: 'With Cheese Slice Rs. 50',
      badge: 'Page 1 - Fast Food',
      sections: [
        {
          heading: 'Burgers & Wraps',
          items: [
            { name: 'PETI BURGAR', price: 'Rs. 280', desc: 'Crispy patty, lettuce, mayo sauce' },
            { name: 'ZINGER BURGER', price: 'Rs. 350', desc: 'Crispy spicy zinger fillet' },
            { name: 'JALAPENO BURGER', price: 'Rs. 400', desc: 'Zinger fillet + jalapenos' },
            { name: 'CHIPOTLE BURGER', price: 'Rs. 420', desc: 'Smoky chipotle sauce fillet' },
            { name: 'DON SPECIAL BURGER', price: 'Rs. 650', desc: 'Double zinger fillet + egg + cheese' },
            { name: 'WRAP CHICKEN', price: 'Rs. 300', desc: 'Crispy chicken wrap' },
            { name: 'WRAP CRISPY', price: 'Rs. 350', desc: 'Crispy zinger wrap' },
            { name: 'CRISPY CHICKEN BONELESS (2 Pcs)', price: 'Rs. 550', desc: 'Boneless crunchy tenders' },
          ]
        },
        {
          heading: 'Hot Wings',
          items: [
            { name: 'Hot Wings (5 Pcs)', price: 'Rs. 350', desc: 'Fiery fried chicken wings' },
            { name: 'Hot Wings (10 Pcs)', price: 'Rs. 600', desc: 'Family pack hot wings' },
          ]
        }
      ]
    },
    {
      id: 'card-2',
      title: 'Combos & Family Deals (#1 to #11)',
      subtitle: 'Original DON PIZZA Deals',
      badge: 'Page 2 - Deals',
      sections: [
        {
          heading: 'Value Deals',
          items: [
            { name: 'Deal # 1', price: 'Rs. 800', desc: '1 Zinger Burger + 1 Small Pizza + 500ml Drink' },
            { name: 'Deal # 2', price: 'Rs. 700', desc: '1 Zinger Burger + 1 Patty Burger + 500ml Drink' },
            { name: 'Deal # 3', price: 'Rs. 770', desc: '1 Zinger Burger + 1 Crispy Wrap + 500ml Drink' },
            { name: 'Deal # 4', price: 'Rs. 750', desc: '1 Crispy Wrap + 5 Hot Wings + 500ml Drink' },
            { name: 'Deal # 5', price: 'Rs. 1,450', desc: '4 Crispy Wrap + 1.5L Drink' },
            { name: 'Deal # 6', price: 'Rs. 1,500', desc: '4 Zinger Burger + 1.5L Drink' },
            { name: 'Deal # 7', price: 'TF: Rs. 860 | SF: Rs. 950', desc: '2 Small Pizza + 500ml Drink' },
            { name: 'Deal # 8', price: 'TF: Rs. 2,450 | SF: Rs. 2,650', desc: '2 Medium Pizza + 1.5L Drink' },
            { name: 'Deal # 9', price: 'TF: Rs. 2,050 | SF: Rs. 2,200', desc: '1 Large Pizza + 1 Medium Pizza + 1.5L Drink' },
            { name: 'Deal # 10', price: 'Rs. 1,700', desc: '1 Medium Pizza + 10 Hot Wings + 2 Crispy Wrap + 1.5L Drink' },
            { name: 'Deal # 11', price: 'Rs. 2,600', desc: '1 Large Pizza + 2 Zinger Burger + 2 Crispy Wrap + 2L Drink' },
          ]
        }
      ]
    },
    {
      id: 'card-3',
      title: 'Pastas, Platters, Rolls, Beverages & Deals #12-#15',
      subtitle: 'Complete Side Menu',
      badge: 'Page 3 - Sides & Beverages',
      sections: [
        {
          heading: 'Pastas & Platters',
          items: [
            { name: 'Special Pasta', price: 'Single Rs. 410 | Family Rs. 750', desc: 'Baked cheese penne pasta' },
            { name: 'Macaroni Pasta', price: 'Single Rs. 350 | Family Rs. 750', desc: 'Cheddar cheese macaroni' },
            { name: 'Don Curricks Pasta', price: 'Single Rs. 450 | Family Rs. 750', desc: 'Signature Cajun Alfredo pasta' },
            { name: 'Don Special Platter', price: 'Rs. 900', desc: 'Burgers + wings + fries platter' },
            { name: 'Pizza Sandwich', price: 'Rs. 700', desc: 'Double mozzarella toasted sandwich' },
            { name: 'Fries', price: 'Rs. 250', desc: 'Golden peri peri fries' },
          ]
        },
        {
          heading: 'Rolls, Nuggets & Drinks',
          items: [
            { name: 'Chicken Spin Roll', price: 'Rs. 490', desc: 'Stuffed spinach & chicken roll' },
            { name: 'Malai Boti Roll', price: 'Rs. 550', desc: 'Charcoal grilled malai boti roll' },
            { name: 'Nuggets (6 Pcs / 12 Pcs)', price: 'Rs. 350 / Rs. 650', desc: 'Crunchy chicken nuggets' },
            { name: 'Soft Drinks (1.5L / 1L / 500ml / 345ml)', price: 'Rs. 220 / 180 / 120 / 100', desc: 'Chilled soft drinks' },
            { name: 'Mineral Water (Large / Small)', price: 'Rs. 100 / Rs. 70', desc: 'Purified mineral water' },
          ]
        },
        {
          heading: 'Deals #12 to #15',
          items: [
            { name: 'Deal # 12', price: 'Rs. 1,050', desc: '1 Pizza Sandwich + 1 Pasta F1 + 500ml Drink' },
            { name: 'Deal # 13', price: 'Rs. 1,250', desc: '2 Spin Roll + 1 Fries + 1L Drink' },
            { name: 'Deal # 14', price: 'Rs. 2,150', desc: '6 Zinger Burger + 2L Drink' },
            { name: 'Deal # 15', price: 'Rs. 2,150', desc: '6 Crispy Wrap + 2L Drink' },
          ]
        }
      ]
    },
    {
      id: 'card-4',
      title: 'Pizzas (Traditional & Special)',
      subtitle: 'Small, Medium & Large Sizes',
      badge: 'Page 4 - Pizzas',
      sections: [
        {
          heading: 'Traditional Pizzas (S: Rs.400 | M: Rs.900 | L: Rs.1200)',
          items: [
            { name: 'Chicken Tandoori', price: 'S: 400 | M: 900 | L: 1200', desc: 'Tandoori chicken, onions, mozzarella' },
            { name: 'Chicken Tikka', price: 'S: 400 | M: 900 | L: 1200', desc: 'Smoky tikka chicken, peppers, cheese' },
            { name: 'Chicken Fajita', price: 'S: 400 | M: 900 | L: 1200', desc: 'Fajita chicken, green peppers, corn' },
            { name: 'Chicken Supreme', price: 'S: 400 | M: 900 | L: 1200', desc: 'Loaded with double chicken & olives' },
          ]
        },
        {
          heading: 'Special Pizzas',
          items: [
            { name: 'Mayo Garlic', price: 'S: 450 | M: 950 | L: 1350', desc: 'Garlic butter cream & smoked chicken' },
            { name: 'Don Special', price: 'S: 450 | M: 950 | L: 1350', desc: 'Signature loaded double chicken & seekh' },
            { name: 'Malai Boti', price: 'S: 450 | M: 950 | L: 1350', desc: 'Creamy malai boti & garlic sauce' },
            { name: 'Behari Kabab', price: 'S: 450 | M: 950 | L: 1400', desc: 'Spiced Behari chicken kabab chunks' },
            { name: 'Kabab Stuffer Special', price: 'M: 1,100 | L: 1,550', desc: 'Stuffed crust with Seekh Kababs' },
            { name: 'Crown Crust Special', price: 'M: 1,100 | L: 1,550', desc: 'Garlic cream stuffed crown pockets' },
            { name: 'Square Special', price: 'M: 1,200 | L: 1,700', desc: 'Deep dish artisanal square pizza' },
          ]
        }
      ]
    }
  ];

  const currentCard = menuCards[activeCardIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 rounded-3xl border border-amber-500/40 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-red-950 via-zinc-900 to-amber-950 border-b border-amber-500/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-white">Original DON PIZZA Menu Cards</h3>
                <span className="text-[10px] font-extrabold bg-amber-400 text-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Official Menu
                </span>
              </div>
              <p className="text-xs text-zinc-300">Detailed physical menu card price list</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Switcher Tabs */}
        <div className="bg-zinc-900 px-3 py-2 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {menuCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveCardIndex(idx)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                activeCardIndex === idx
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400/50 shadow-md'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              <span>{card.badge}</span>
            </button>
          ))}
        </div>

        {/* Card Body - Styled like physical menu card */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-amber-50/5 via-zinc-950 to-zinc-950 font-sans">
          
          {/* Card Banner Header */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-red-950/70 to-zinc-900 border border-amber-500/40 text-center relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <span className="text-[10px] font-black bg-red-600 text-white px-2.5 py-1 rounded-full uppercase tracking-widest shadow">
                {currentCard.badge}
              </span>
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              {currentCard.subtitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-serif text-white tracking-wide">
              {currentCard.title}
            </h2>
          </div>

          {/* Sections Grid */}
          <div className="space-y-6">
            {currentCard.sections.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-amber-500/30 pb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm sm:text-base font-bold text-amber-300 uppercase tracking-wider">
                    {sec.heading}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sec.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/80 border border-zinc-800/80 flex items-start justify-between gap-3 transition-colors shadow-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                          <span>{item.name}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">{item.desc}</p>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-red-950/80 text-amber-300 font-extrabold text-xs sm:text-sm border border-red-700/40 shadow-inner">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between shrink-0">
          <button
            onClick={() => setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : menuCards.length - 1))}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Card</span>
          </button>

          <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
            Card {activeCardIndex + 1} of {menuCards.length}
          </span>

          <button
            onClick={() => setActiveCardIndex((prev) => (prev < menuCards.length - 1 ? prev + 1 : 0))}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 flex items-center gap-1 transition-colors"
          >
            <span>Next Card</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
