import React from 'react';
import { 
  Phone, MapPin, Clock, Facebook, Instagram, MessageSquare, ArrowUp, 
  Home, Utensils, Flame, Info, Image as ImageIcon, ChevronRight 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-amber-500/20 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-600 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-amber-400 font-extrabold text-xl font-serif">
                  D
                </div>
              </div>
              <span className="text-2xl font-black font-serif tracking-wider text-white">
                DON <span className="text-red-600">PIZZA</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Serving Faisalabad with freshly baked artisan pizzas, crispy zinger burgers, stuffed wraps, baked pasta, hot wings, and family deal combos made with premium ingredients.
            </p>

            {/* Social & Delivery Links */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Follow & Order Online</span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="https://www.facebook.com/people/The-Don/100083167198124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-blue-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                  aria-label="Facebook - The Don Faisalabad"
                  title="The Don on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/thedonofficial_fsd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                  aria-label="Instagram - @thedonofficial_fsd"
                  title="The Don on Instagram (@thedonofficial_fsd)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923000471281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-emerald-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-800"
                  aria-label="WhatsApp - The Don Pizza"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-serif text-amber-400 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => scrollToId('home')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Home className="w-3.5 h-3.5 text-amber-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('menu')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5 text-amber-500" />
                  <span>Menu</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('deals')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-red-500" />
                  <span>Deals & Combos</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('about')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('gallery')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>Photo Gallery</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('contact')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('location')} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Location & Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-serif text-amber-400 uppercase tracking-widest">
              Popular Items
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li>Crown Crust Special Pizza</li>
              <li>Don Special Zinger Burger</li>
              <li>Kabab Stuffer Special</li>
              <li>Chicken Spin Roll</li>
              <li>Special Baked Pasta</li>
              <li>Crispy Hot Wings</li>
              <li>Don Special Platter</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-serif text-amber-400 uppercase tracking-widest">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=DON+PIZZA+Chak+117+J.B+Dhanola+Faisalabad+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>G455+9X, Chak 117 J.B Dhanola, Faisalabad, Pakistan</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+923000471281" className="hover:text-amber-300 font-bold">
                  +92 300 0471281
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-300">Opening Hours:</p>
                  <p className="text-zinc-400">Mon–Sat: 4:00 PM – 3:28 AM</p>
                  <p className="text-zinc-400">Sunday: 4:00 PM – 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 DON PIZZA. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
