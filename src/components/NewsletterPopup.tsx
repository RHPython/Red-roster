import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('newsletter-seen');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass rounded-[3rem] overflow-hidden shadow-2xl max-w-md w-full relative p-1"
          >
            <div className="bg-white rounded-[2.8rem] p-10 text-center space-y-8">
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 bg-black/5 hover:bg-black/10 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-12">
                <span className="text-brand-red font-serif text-3xl font-bold">R</span>
              </div>
              
              <div className="space-y-2">
                <h2 className="font-serif text-4xl">Harlem Beats</h2>
                <p className="text-gray-500 font-medium">
                  Get the weekly music schedule and exclusive recipes delivered to your inbox.
                </p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closePopup(); }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full p-4 rounded-2xl bg-black/5 border-none focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
                />
                <button className="apple-button w-full bg-brand-red text-white py-4 shadow-lg shadow-brand-red/20 text-sm uppercase tracking-widest">
                  Join the Family
                </button>
              </form>
              
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                No spam. Just soul.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
