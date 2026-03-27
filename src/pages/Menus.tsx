import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MenuItem } from '../constants';
import { getMenuDescription } from '../services/gemini';
import { Loader2, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Menus() {
  const [activeTab, setActiveTab] = useState<'Lunch' | 'Dinner' | 'Brunch' | 'Drinks'>('Dinner');
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [loadingItems, setLoadingItems] = useState<Record<string, boolean>>({});

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  const fetchAIDescription = async (dishName: string) => {
    if (descriptions[dishName] || loadingItems[dishName]) return;
    
    setLoadingItems(prev => ({ ...prev, [dishName]: true }));
    const desc = await getMenuDescription(dishName);
    setDescriptions(prev => ({ ...prev, [dishName]: desc }));
    setLoadingItems(prev => ({ ...prev, [dishName]: false }));
  };

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-6xl md:text-8xl font-serif">The Menu</h1>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">A modern interpretation of soul food, celebrating the rich culinary heritage of Harlem.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="glass p-1.5 rounded-full flex gap-1">
            {['Lunch', 'Dinner', 'Brunch', 'Drinks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={cn(
                  "apple-button text-xs font-bold px-8 py-2.5",
                  activeTab === tab 
                    ? "bg-brand-red text-white shadow-lg" 
                    : "text-gray-500 hover:text-brand-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-6"
        >
          {filteredItems.map((item, i) => (
            <div key={i} className="apple-card p-8 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-3xl group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <div className="h-px flex-1 bg-black/[0.05] hidden md:block" />
                    <span className="font-sans font-bold text-xl text-brand-gold">{item.price}</span>
                  </div>
                  <p className="text-gray-500 font-medium italic">{item.description}</p>
                </div>
              </div>
              
              {/* AI Description Feature */}
              <div className="mt-6">
                {descriptions[item.name] ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-brand-offwhite p-6 rounded-2xl border border-black/[0.03]"
                  >
                    <div className="flex items-center gap-2 text-brand-gold mb-3">
                      <Sparkles size={16} />
                      <span className="text-[11px] uppercase tracking-widest font-bold">Sommelier's Note</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">
                      {descriptions[item.name]}
                    </p>
                  </motion.div>
                ) : (
                  <button 
                    onClick={() => fetchAIDescription(item.name)}
                    disabled={loadingItems[item.name]}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-brand-gold hover:opacity-70 transition-all"
                  >
                    {loadingItems[item.name] ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Sparkles size={16} />
                    )}
                    {loadingItems[item.name] ? "Consulting..." : "Flavor Notes & Pairings"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <div className="mt-32 apple-card bg-brand-black text-white p-16 text-center space-y-8">
          <h2 className="font-serif text-4xl">Special Occasions</h2>
          <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
            Planning a celebration? Our team is dedicated to making your experience unforgettable. For parties larger than 6, please inquire about our private dining options.
          </p>
          <Link to="/private-events" className="apple-button bg-brand-red text-white inline-block">Inquire Now</Link>
        </div>
      </div>
    </div>
  );
}
