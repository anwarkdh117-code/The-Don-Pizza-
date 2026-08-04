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
import { Footer } from './components/Footer';
import { CartItem, CategoryId } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOrderNow={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onViewMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
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

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
