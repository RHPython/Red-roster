import { motion } from 'motion/react';
import { Music as MusicIcon, Calendar, Clock } from 'lucide-react';

export default function MusicSchedule() {
  const events = [
    { day: 'Monday', time: '7:00 PM', act: 'Harlem Blues Trio', venue: 'Main Dining Room' },
    { day: 'Tuesday', time: '8:00 PM', act: 'Jazz Night with The Rooster All-Stars', venue: 'Ginny\'s Supper Club' },
    { day: 'Wednesday', time: '7:30 PM', act: 'Soul Sessions', venue: 'Main Dining Room' },
    { day: 'Thursday', time: '8:00 PM', act: 'Latin Jazz Explosion', venue: 'Main Dining Room' },
    { day: 'Friday', time: '9:00 PM', act: 'Late Night Soul with DJ Harlem', venue: 'Ginny\'s Supper Club' },
    { day: 'Saturday', time: '8:30 PM', act: 'The Saturday Night Revue', venue: 'Main Dining Room' },
    { day: 'Sunday', time: '11:00 AM', act: 'Rooster Sundays Gospel Brunch', venue: 'Main Dining Room' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-6 rounded-[2rem] bg-brand-red/10 text-brand-red mb-4"
          >
            <MusicIcon size={64} />
          </motion.div>
          <h1 className="text-7xl md:text-[140px] font-serif leading-none tracking-tighter">Live Music</h1>
          <p className="text-brand-gold uppercase tracking-[0.6em] text-xs font-bold">The Heartbeat of Harlem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Event */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/jazz/1200/800" 
                alt="Gospel Brunch" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent p-12 md:p-20 flex flex-col justify-end">
                <span className="bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit mb-6">Every Sunday</span>
                <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-none">Rooster <br />Sundays</h2>
                <p className="text-xl text-white/70 max-w-xl font-medium leading-relaxed">
                  Join us for our legendary Gospel Brunch featuring live performances by the Harlem Gospel Choir and a soul-stirring menu.
                </p>
              </div>
            </motion.div>

            <div className="glass-dark p-12 md:p-20 rounded-[3rem] space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-4xl text-brand-gold">Ginny's Supper Club</h3>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  Located downstairs, Ginny's is our intimate speakeasy and performance space. Inspired by the legendary clubs of the Harlem Renaissance.
                </p>
              </div>
              <button className="apple-button bg-brand-gold text-brand-black px-12 py-4 text-sm uppercase tracking-[0.2em]">
                Book Ginny's
              </button>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="space-y-12">
            <h3 className="font-serif text-4xl border-b border-white/10 pb-6">Weekly Lineup</h3>
            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group p-8 rounded-[2rem] glass-dark hover:bg-brand-red/20 border-white/5 hover:border-brand-red/30 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px]">{event.day}</span>
                    <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl mb-2 group-hover:text-brand-red transition-colors">{event.act}</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold italic">{event.venue}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
