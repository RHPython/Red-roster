import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../constants';
import { Calendar, Clock, Info } from 'lucide-react';

export default function Reservations() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Info */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-7xl md:text-8xl font-serif leading-none tracking-tighter text-brand-red">Reservations</h1>
              <p className="text-lg text-gray-500 font-medium max-w-md">Join us at the table for a soulful experience in the heart of Harlem.</p>
            </motion.div>

            <div className="apple-card p-10 space-y-8">
              <div className="flex items-center gap-4 text-brand-red">
                <div className="p-3 rounded-2xl bg-brand-red/5">
                  <Info size={28} />
                </div>
                <h3 className="font-serif text-3xl">Guest Policy</h3>
              </div>
              <ul className="space-y-6">
                {[
                  'Reservations are available 30 days in advance.',
                  'For parties of 7 or more, please contact our events team.',
                  'We hold tables for 15 minutes past the reservation time.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-4xl">Hours of Service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <p className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold">Dining Room</p>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed">{RESTAURANT_INFO.hours.dining}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold">The Bar</p>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed">{RESTAURANT_INFO.hours.bar}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Embed Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-black p-2 rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="bg-white rounded-[2.6rem] p-10 md:p-16 min-h-[700px] flex flex-col items-center justify-center text-center space-y-12">
              <div className="w-24 h-24 bg-brand-red/5 rounded-[2rem] flex items-center justify-center">
                <Calendar className="text-brand-red" size={40} />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-4xl">Book via Toast</h2>
                <p className="text-gray-500 max-w-xs font-medium">Select your preferred date and time to join us.</p>
              </div>
              
              {/* Simulated Toast Widget */}
              <div className="w-full space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-brand-offwhite rounded-2xl text-left border border-black/[0.03]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Date</p>
                    <p className="font-bold text-lg">Mar 28, 2026</p>
                  </div>
                  <div className="p-6 bg-brand-offwhite rounded-2xl text-left border border-black/[0.03]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Guests</p>
                    <p className="font-bold text-lg">2 People</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'].map(time => (
                    <button key={time} className="py-4 rounded-xl text-sm font-bold border border-black/[0.05] hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
                      {time}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Find a Table
                </button>
              </div>

              <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
                Powered by Toast Tables
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
