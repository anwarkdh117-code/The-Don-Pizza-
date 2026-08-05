import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, ExternalLink, Facebook, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', guests: '2', date: '', time: '', message: '' });
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    'Hello DON PIZZA! I would like to place an order / inquire about menu deals.'
  );

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
            Contact & <span className="text-red-600">Location</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600 mx-auto rounded-full" />

          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Have questions, catering requests, or table reservations? Reach out directly via WhatsApp or Phone call!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Restaurant & Phone */}
          <div className="p-8 rounded-3xl bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 shadow-xl flex flex-col justify-between text-center group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 p-0.5 shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-amber-400">
                <Phone className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-amber-400 tracking-widest block mb-1">Direct Call Order</span>
              <h3 className="text-2xl font-black font-serif text-white mb-2">+92 300 0471281</h3>
              <p className="text-xs text-zinc-400">Instant telephone helpline for orders & queries.</p>
            </div>
            <a
              id="click-to-call-btn"
              href="tel:+923000471281"
              className="mt-6 w-full py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Click to Call Now</span>
            </a>
          </div>

          {/* WhatsApp Order */}
          <div className="p-8 rounded-3xl bg-zinc-900/90 border border-emerald-500/40 hover:border-emerald-400 shadow-xl flex flex-col justify-between text-center group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-widest block mb-1">Instant WhatsApp</span>
              <h3 className="text-2xl font-black font-serif text-white mb-2">WhatsApp Order</h3>
              <p className="text-xs text-zinc-400">Send custom orders, location dropped, or menu inquiries.</p>
            </div>
            <a
              id="whatsapp-order-btn"
              href={`https://wa.me/923000471281?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order Button</span>
            </a>
          </div>

          {/* Business Hours */}
          <div className="p-8 rounded-3xl bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 shadow-xl flex flex-col justify-between text-center group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 p-0.5 shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-amber-400">
                  <Clock className="w-7 h-7" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase text-amber-400 tracking-widest block mb-1">Opening Hours</span>
              <h3 className="text-xl font-black font-serif text-white mb-4">Weekly Schedule</h3>

              <div className="space-y-1.5 text-xs text-left bg-black/60 p-3.5 rounded-2xl border border-zinc-800">
                {[
                  { day: 'Monday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Tuesday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Wednesday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Thursday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Friday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Saturday', time: '4:00 PM – 3:28 AM' },
                  { day: 'Sunday', time: '4:00 PM – 12:00 AM' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-0.5 border-b border-zinc-900 last:border-0">
                    <span className="font-semibold text-zinc-300">{item.day}</span>
                    <span className="font-bold text-amber-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 px-4 py-2.5 rounded-full bg-black/60 border border-amber-500/20 text-xs text-amber-300 font-bold">
              ⚡ Dine-in, Takeaway & Delivery
            </div>
          </div>

        </div>

        {/* Online Ordering & Social Channels Bar with Icons on Top */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 text-center space-y-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">Official Online Channels</span>
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">Connect & Follow DON PIZZA</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/The-Don/100083167198124/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-zinc-900/90 hover:bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 flex flex-col items-center justify-center text-center transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-white group-hover:text-blue-300">Facebook</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-1">
                <span>The Don Page</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/thedonofficial_fsd"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-zinc-900/90 hover:bg-pink-950/40 border border-pink-500/30 hover:border-pink-400 flex flex-col items-center justify-center text-center transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-white group-hover:text-pink-300">Instagram</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-1">
                <span>@thedonofficial_fsd</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* Google Maps Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=DON+PIZZA+Chak+117+J.B+Dhanola+Faisalabad+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-zinc-900/90 hover:bg-red-950/40 border border-red-500/30 hover:border-red-400 flex flex-col items-center justify-center text-center transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-white group-hover:text-red-300">Google Maps</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-1">
                <span>G455+9X Location</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/923000471281?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-zinc-900/90 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 flex flex-col items-center justify-center text-center transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs font-extrabold text-white group-hover:text-emerald-300">WhatsApp Chat</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-1">
                <span>+92 300 0471281</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
          </div>
        </div>
        <div id="location" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Google Map Embed */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative min-h-[400px]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=DON+PIZZA+Chak+117+J.B+Dhanola+Faisalabad+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-black/85 hover:bg-black border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-md"
            >
              Open in Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <iframe
              title="DON PIZZA Faisalabad Location Map"
              src="https://maps.google.com/maps?q=DON+PIZZA%2C+Chak+117+J.B+Dhanola%2C+Faisalabad%2C+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0 filter invert contrast-125 brightness-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-1">
                    <span className="text-red-600 font-black">DON</span> PIZZA
                  </h4>
                  <p className="text-xs text-zinc-300">
                    G455+9X, Chak 117 J.B Dhanola, Faisalabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table Booking / Reservation Form */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-amber-500/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Reserve A Table</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-white mb-6">
                Book Your Dining Experience
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Reservation Request Received!</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you, {formData.name || 'Guest'}! Our team will call you back at {formData.phone} shortly to confirm your table.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReservation} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hammad Khan"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">No. of Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8+">8+ Large Family</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Time</label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-400 uppercase block mb-1">Special Notes (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Birthday celebration, high-chair needed..."
                      className="w-full px-4 py-2 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:border-amber-400 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-red-700/30 flex items-center justify-center gap-2 border border-amber-400/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Reservation</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
