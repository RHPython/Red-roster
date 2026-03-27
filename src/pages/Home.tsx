import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';
import { Award, Star, Music, Utensils } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-brand-black">
          <div className="absolute inset-0 opacity-60 bg-[url('https://picsum.photos/seed/harlem-night/1920/1080')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-offwhite" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-[120px] text-white font-serif leading-[0.9] tracking-tighter">
              Harlem's <br /><span className="text-brand-gold italic">Soul</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-medium mt-8 max-w-2xl mx-auto leading-relaxed">
              A landmark destination where world-class cuisine meets the legendary spirit of New York's most iconic neighborhood.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/reservations"
              className="apple-button bg-brand-red text-white px-12 py-5 text-lg shadow-2xl hover:scale-105"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menus"
              className="apple-button glass-dark text-white px-12 py-5 text-lg hover:bg-white/20"
            >
              Explore Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">The Rooster Way</h2>
            <p className="text-gray-500 font-medium">Experience the perfect harmony of flavor, rhythm, and community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Large Feature */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 apple-card overflow-hidden relative group"
            >
              <img src="https://picsum.photos/seed/yardbird/1200/800" alt="Fried Yardbird" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Signature Dish</span>
                <h3 className="text-4xl md:text-6xl text-white font-serif mb-4">The Fried Yardbird</h3>
                <p className="text-white/70 max-w-md">Our world-famous recipe, served with mace gravy, hot honey, and collard greens.</p>
              </div>
            </motion.div>

            {/* Side Feature 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 apple-card overflow-hidden relative group bg-brand-red text-white"
            >
              <div className="p-12 h-full flex flex-col justify-between">
                <Award size={48} className="text-brand-gold" />
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif">James Beard Excellence</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Recognized by the James Beard Foundation with 8 awards for culinary excellence and community impact.</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 apple-card overflow-hidden relative group"
            >
              <img src="https://picsum.photos/seed/jazz-live/600/600" alt="Live Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                <h3 className="text-3xl text-white font-serif">Live Jazz</h3>
                <p className="text-white/80 text-xs mt-2 uppercase tracking-widest">Nightly from 7PM</p>
              </div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 apple-card overflow-hidden relative group bg-brand-gold/10"
            >
              <div className="p-12 flex flex-col md:flex-row items-center gap-12 h-full">
                <div className="space-y-6 flex-1">
                  <h3 className="text-4xl font-serif">Marcus Samuelsson</h3>
                  <p className="text-gray-600 leading-relaxed">"Red Rooster is a place where neighbors, travelers, and foodies alike can gather for a great meal and a soulful experience."</p>
                  <Link to="/about" className="apple-button bg-brand-black text-white inline-block">Our Story</Link>
                </div>
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
                  <img src="https://picsum.photos/seed/chef/400/400" alt="Chef Marcus" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-black py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
          <div className="space-y-4">
            <p className="text-6xl font-serif text-brand-gold">3-Star</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">New York Times Review</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif text-brand-gold">100k+</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Guests Served Yearly</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif text-brand-gold">#1</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Soul Food Destination</p>
          </div>
        </div>
      </section>
    </div>
  );
}
