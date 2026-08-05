import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderDetails } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, quantity: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerName: '',
    phone: '',
    address: '',
    orderType: 'delivery',
    paymentMethod: 'cash',
    notes: '',
  });

  const [step, setStep] = useState<'items' | 'checkout' | 'success'>('items');

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderDetails.orderType === 'delivery' ? 100 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    let messageText = `*🍕 DON PIZZA NEW ONLINE ORDER 🍕*\n\n`;
    messageText += `*Customer:* ${orderDetails.customerName || 'Valued Guest'}\n`;
    messageText += `*Phone:* ${orderDetails.phone}\n`;
    messageText += `*Order Type:* ${orderDetails.orderType.toUpperCase()}\n`;
    if (orderDetails.orderType === 'delivery') {
      messageText += `*Address:* ${orderDetails.address}\n`;
    }
    messageText += `*Payment:* ${orderDetails.paymentMethod.toUpperCase()}\n\n`;

    messageText += `*ORDER ITEMS:*\n`;
    cartItems.forEach((item, i) => {
      const sizeStr = item.selectedSize ? ` (${item.selectedSize})` : '';
      messageText += `${i + 1}. ${item.title}${sizeStr} x${item.quantity} = Rs ${item.unitPrice * item.quantity}\n`;
      if (item.specialInstructions) {
        messageText += `   _${item.specialInstructions}_\n`;
      }
    });

    messageText += `\n*Subtotal:* Rs ${subtotal}\n`;
    if (orderDetails.orderType === 'delivery') {
      messageText += `*Delivery Fee:* Rs ${deliveryFee}\n`;
    }
    messageText += `*GRAND TOTAL:* Rs ${grandTotal}\n`;

    if (orderDetails.notes) {
      messageText += `\n*Notes:* ${orderDetails.notes}\n`;
    }

    messageText += `\nThank you for choosing DON PIZZA!`;

    const targetUrl = `https://wa.me/923000471281?text=${encodeURIComponent(messageText)}`;
    window.open(targetUrl, '_blank');

    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white shadow-2xl border-l border-amber-500/30 flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-amber-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">Your Order</h3>
                    <span className="text-xs text-amber-400 font-sans">DON PIZZA Faisalabad</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {step === 'items' && (
                  <>
                    {cartItems.length === 0 ? (
                      <div className="text-center py-20 space-y-4">
                        <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 mx-auto">
                          <ShoppingBag className="w-10 h-10" />
                        </div>
                        <h4 className="text-lg font-bold font-serif text-white">Your cart is empty</h4>
                        <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                          Explore our pizzas, zinger burgers, and combo deals to add delicious items!
                        </p>
                        <button
                          onClick={onClose}
                          className="px-6 py-2.5 rounded-full bg-red-600 text-white text-xs font-bold hover:bg-red-500 shadow-md"
                        >
                          Explore Menu
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                          <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                            Cart Items ({cartItems.length})
                          </span>
                          <button
                            onClick={onClearCart}
                            className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Clear All</span>
                          </button>
                        </div>

                        {cartItems.map((item) => (
                          <div
                            key={item.cartId}
                            className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3 group"
                          >
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 rounded-xl object-cover shrink-0"
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-bold text-white truncate font-serif">{item.title}</h5>
                              {item.selectedSize && (
                                <span className="text-[10px] text-amber-400 font-bold block">
                                  Size: {item.selectedSize}
                                </span>
                              )}
                              <span className="text-xs font-extrabold text-amber-300 block mt-1">
                                Rs {item.unitPrice * item.quantity}
                              </span>
                            </div>

                            {/* Quantity Adjuster */}
                            <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-zinc-800">
                              <button
                                onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                                className="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                                className="w-6 h-6 rounded-lg bg-red-600 hover:bg-red-500 flex items-center justify-center text-white"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.cartId)}
                              className="text-zinc-500 hover:text-red-400 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {step === 'checkout' && (
                  <form onSubmit={handleSendWhatsAppOrder} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                        Delivery Details
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep('items')}
                        className="text-xs text-zinc-400 hover:text-white"
                      >
                        ← Back to Cart
                      </button>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Order Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderDetails({ ...orderDetails, orderType: 'delivery' })}
                          className={`py-2 rounded-xl text-xs font-bold border ${
                            orderDetails.orderType === 'delivery'
                              ? 'bg-red-600 text-white border-amber-400'
                              : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                          }`}
                        >
                          Home Delivery (+Rs 100)
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderDetails({ ...orderDetails, orderType: 'takeaway' })}
                          className={`py-2 rounded-xl text-xs font-bold border ${
                            orderDetails.orderType === 'takeaway'
                              ? 'bg-amber-600 text-white border-amber-300'
                              : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                          }`}
                        >
                          Takeaway / Pickup
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={orderDetails.customerName}
                        onChange={(e) => setOrderDetails({ ...orderDetails, customerName: e.target.value })}
                        placeholder="e.g. Ali Ahmed"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={orderDetails.phone}
                        onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>

                    {orderDetails.orderType === 'delivery' && (
                      <div>
                        <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Delivery Address *</label>
                        <textarea
                          required
                          rows={2}
                          value={orderDetails.address}
                          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                          placeholder="House No, Street, Sector, Landmark..."
                          className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Payment Method</label>
                      <select
                        value={orderDetails.paymentMethod}
                        onChange={(e) =>
                          setOrderDetails({
                            ...orderDetails,
                            paymentMethod: e.target.value as 'cash' | 'easypaisa' | 'jazzcash',
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      >
                        <option value="cash">Cash on Delivery / Pickup</option>
                        <option value="easypaisa">EasyPaisa</option>
                        <option value="jazzcash">JazzCash</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Special Request (Optional)</label>
                      <input
                        type="text"
                        value={orderDetails.notes}
                        onChange={(e) => setOrderDetails({ ...orderDetails, notes: e.target.value })}
                        placeholder="e.g. Extra ketchup, less spicy..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-700/30 flex items-center justify-center gap-2 border border-emerald-300/40 transition-all mt-4"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Order via WhatsApp</span>
                    </button>
                  </form>
                )}

                {step === 'success' && (
                  <div className="py-16 text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-2xl font-bold font-serif text-white">Order Sent to WhatsApp!</h4>
                    <p className="text-xs text-zinc-300 max-w-xs mx-auto">
                      Thank you for choosing DON PIZZA! Our kitchen manager will confirm your order details on WhatsApp.
                    </p>
                    <button
                      onClick={() => {
                        onClearCart();
                        setStep('items');
                        onClose();
                      }}
                      className="px-6 py-3 rounded-full bg-red-600 text-white text-xs font-bold hover:bg-red-500"
                    >
                      Done & Return to Menu
                    </button>
                  </div>
                )}

              </div>

              {/* Drawer Footer Summary */}
              {cartItems.length > 0 && step !== 'success' && (
                <div className="p-6 border-t border-zinc-800 bg-black/60 space-y-3">
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal:</span>
                      <span className="font-bold text-white">Rs {subtotal}</span>
                    </div>
                    {orderDetails.orderType === 'delivery' && (
                      <div className="flex justify-between text-zinc-400">
                        <span>Delivery Fee:</span>
                        <span className="font-bold text-white">Rs {deliveryFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-black text-amber-300 pt-2 border-t border-zinc-800">
                      <span>Total:</span>
                      <span className="text-xl">Rs {grandTotal}</span>
                    </div>
                  </div>

                  {step === 'items' && (
                    <button
                      onClick={() => setStep('checkout')}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-700/30 flex items-center justify-center gap-2 border border-amber-400/30 transition-all"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
