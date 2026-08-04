import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/menuData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'burger', label: 'Burger' },
    { id: 'wrap', label: 'Wrap' },
    { id: 'wings', label: 'Wings' },
    { id: 'fries', label: 'Fries' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'customers', label: 'Customers' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Our Food & Ambience <span className="text-red-600">Gallery</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Take a visual tour of our artisanal pizzas, juicy burgers, clean kitchen environment, and welcoming dining hall.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400/40 shadow-md scale-105'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-amber-500/20 shadow-xl cursor-pointer bg-zinc-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-amber-400/40 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                  {item.category}
                </span>
                <h4 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 font-sans line-clamp-1 mt-1 opacity-90">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:text-amber-400 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:text-amber-400 z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:text-amber-400 z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center text-center space-y-4"
            >
              <img
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain border border-amber-500/30 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-2xl font-bold font-serif text-amber-300">
                  {filteredGallery[lightboxIndex].title}
                </h3>
                <p className="text-sm text-zinc-300 font-sans max-w-xl mx-auto mt-1">
                  {filteredGallery[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
