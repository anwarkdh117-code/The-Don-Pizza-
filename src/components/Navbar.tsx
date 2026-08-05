import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Menu as MenuIcon, X, Phone, MapPin, ChevronRight, Clock, 
  Facebook, Instagram, Home, Utensils, Flame, Info, Image as ImageIcon, MessageSquare 
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateToCategory?: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'categories', 'menu', 'deals', 'gallery', 'why-us', 'contact', 'location'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Menu', id: 'menu', icon: Utensils },
    { name: 'Deals', id: 'deals', icon: Flame },
    { name: 'About', id: 'about', icon: Info },
    { name: 'Gallery', id: 'gallery', icon: ImageIcon },
    { name: 'Contact', id: 'contact', icon: Phone },
    { name: 'Location', id: 'location', icon: MapPin },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-red-950 via-black to-red-950 border-b border-amber-500/20 text-xs py-1.5 text-zinc-300 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon–Sat: 4:00 PM – 3:28 AM | Sun: 4:00 PM – 12:00 AM</span>
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Chak 117 J.B Dhanola, Faisalabad</span>
            </span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+923000471281"
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>+92 300 0471281</span>
            </a>
            <span className="text-zinc-600">|</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/people/The-Don/100083167198124/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors"
                title="The Don on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/thedonofficial_fsd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-400 transition-colors"
                title="The Don on Instagram (@thedonofficial_fsd)"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-red-950/20 py-3'
            : 'bg-gradient-to-b from-black/95 to-black/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-red-600 via-red-800 to-black p-0.5 shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-amber-400/40">
                <span className="text-2xl font-black text-amber-400 tracking-tighter">D</span>
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-wider text-white font-serif group-hover:text-amber-400 transition-colors block leading-tight">
                DON <span className="text-red-600">PIZZA</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-400/90 font-sans uppercase font-bold block">
                FAISALABAD
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const IconComp = link.icon;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-md shadow-red-600/20'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-amber-500/30 text-amber-400 hover:text-white transition-all duration-200 shadow-md group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA Button */}
            <button
              id="nav-order-now-btn"
              onClick={() => scrollToSection('menu')}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold px-5 py-2 rounded-full text-sm shadow-lg shadow-red-700/30 border border-amber-400/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Order Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-sm transition-all ${
                      activeSection === link.id
                        ? 'bg-red-600/20 text-amber-400 border border-red-500/40 font-semibold'
                        : 'text-zinc-300 hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-4 h-4 text-amber-400" />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}
              <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
                <button
                  id="mobile-order-cta"
                  onClick={() => scrollToSection('menu')}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-xl text-center shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <span>Order Online Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+923000471281"
                  className="w-full py-3 bg-zinc-900 border border-amber-500/30 text-amber-400 font-semibold rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +92 300 0471281</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
