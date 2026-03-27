import { useState } from 'react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../constants';
import { Calendar, Users, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function PrivateEvents() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Content */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-7xl md:text-8xl font-serif leading-none tracking-tighter text-brand-red">Private Events</h1>
              <p className="text-lg text-gray-500 font-medium max-w-md">Host your next celebration in the heart of Harlem.</p>
            </motion.div>

            <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
              <p>
                From intimate dinners in our Ginny's Supper Club to grand celebrations in the main dining room, Red Rooster Harlem offers a variety of unique spaces for your next event.
              </p>
              <p>
                Our events team, led by Director Dina Hill, works closely with you to curate a custom menu and experience that reflects the spirit of Harlem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="apple-card p-10 space-y-4"
              >
                <h3 className="font-serif text-3xl">Ginny's</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Our underground speakeasy, perfect for live music and sophisticated cocktails. Capacity: 120 seated / 200 standing.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="apple-card p-10 space-y-4"
              >
                <h3 className="font-serif text-3xl">The Nook</h3>
                <p className="text-sm text-gray-500 leading-relaxed">A semi-private space overlooking the main dining room. Capacity: 20 seated.</p>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="apple-card p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-red" />
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-8"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="text-green-500" size={48} />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl">Inquiry Received</h2>
                  <p className="text-gray-500 font-medium">Dina Hill will be in touch within 24-48 hours to discuss your event.</p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="apple-button bg-brand-black text-white"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-serif text-4xl">Inquire Today</h2>
                  <p className="text-sm text-gray-400 font-medium tracking-wide">Tell us about your upcoming celebration.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-red transition-colors" size={20} />
                    <input 
                      required 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full pl-12 pr-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-red transition-colors" size={20} />
                    <input 
                      required 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full pl-12 pr-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-red transition-colors" size={20} />
                      <input 
                        required 
                        type="date" 
                        className="w-full pl-12 pr-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium"
                      />
                    </div>
                    <div className="relative group">
                      <Users className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-red transition-colors" size={20} />
                      <input 
                        required 
                        type="number" 
                        placeholder="Guests" 
                        className="w-full pl-12 pr-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <select 
                    required 
                    className="w-full px-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium appearance-none"
                  >
                    <option value="">Event Type</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Other">Other</option>
                  </select>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-red transition-colors" size={20} />
                    <textarea 
                      placeholder="Tell us more about your event..." 
                      rows={4}
                      className="w-full pl-12 pr-6 py-4 bg-brand-offwhite border border-black/[0.05] rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all font-medium"
                    />
                  </div>
                </div>

                <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Submit Inquiry
                </button>
                
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-[0.3em] font-bold">
                  Direct inquiries to {RESTAURANT_INFO.eventsEmail}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
