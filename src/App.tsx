import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { MenuSection } from './components/MenuSection';
import { DealsSection } from './components/DealsSection';
import { ToppingsSection } from './components/ToppingsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { PhysicalMenuModal } from './components/PhysicalMenuModal';
import { Footer } from './components/Footer';
import { CartItem, CategoryId } from './types';
import { Utensils, Flame, Phone, MessageSquare, ShoppingBag, FileText } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPhysicalMenuOpen, setIsPhysicalMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalPrice = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartId === newItem.cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectCategory = (category: CategoryId) => {
    setSelectedCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white pb-20 md:pb-0">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOrderNow={() => scrollToSection('menu')}
          onViewMenu={() => scrollToSection('menu')}
          onOpenPhysicalMenuCard={() => setIsPhysicalMenuOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Featured Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Complete Menu Section */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onOpenPhysicalMenuCard={() => setIsPhysicalMenuOpen(true)}
        />

        {/* Deals & Combos Section */}
        <DealsSection onAddToCart={handleAddToCart} />

        {/* Extra Toppings Section */}
        <ToppingsSection onAddToCart={handleAddToCart} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Quick Action Bar (Designed specifically for 90% Smartphone Users) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-t border-amber-500/30 px-3 py-2 shadow-2xl flex items-center justify-around text-center">
        <button
          onClick={() => scrollToSection('menu')}
          className="flex flex-col items-center justify-center text-zinc-400 hover:text-amber-400 active:text-amber-300 transition-colors py-1 px-2"
        >
          <Utensils className="w-5 h-5 text-amber-400" />
          <span className="text-[10px] font-bold mt-0.5">Menu</span>
        </button>

        <button
          onClick={() => scrollToSection('deals')}
          className="flex flex-col items-center justify-center text-zinc-400 hover:text-red-400 active:text-red-300 transition-colors py-1 px-2"
        >
          <Flame className="w-5 h-5 text-red-500" />
          <span className="text-[10px] font-bold mt-0.5">Deals</span>
        </button>

        <a
          href="tel:+923000471281"
          className="flex flex-col items-center justify-center text-zinc-400 hover:text-amber-300 active:text-amber-200 transition-colors py-1 px-2"
        >
          <Phone className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="text-[10px] font-bold mt-0.5">Call</span>
        </a>

        <a
          href="https://wa.me/923000471281"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-zinc-400 hover:text-emerald-400 active:text-emerald-300 transition-colors py-1 px-2"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1.5 rounded-full shadow-lg border border-amber-300/40 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-black">
              {totalCartCount > 0 ? `Rs ${subtotalPrice}` : 'Cart'}
            </span>
          </div>
          {totalCartCount > 0 && (
            <span className="absolute -top-2 -right-1 bg-amber-300 text-red-950 font-black text-[10px] rounded-full h-4 w-4 flex items-center justify-center shadow-md">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Physical Menu Cards Lightbox Modal */}
      <PhysicalMenuModal
        isOpen={isPhysicalMenuOpen}
        onClose={() => setIsPhysicalMenuOpen(false)}
      />
    </div>
  );
}
