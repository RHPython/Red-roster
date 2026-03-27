import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 pt-12"
        >
          <h1 className="text-7xl md:text-[140px] font-serif leading-none tracking-tighter text-brand-red">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">A legacy of flavor, culture, and community in the heart of Harlem.</p>
        </motion.div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">A Harlem <br />Landmark</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Located in the heart of Harlem, Red Rooster serves comfort food celebrating the roots of American cuisine and the diverse culinary traditions of the neighborhood.
              </p>
              <p>
                Named after the legendary Harlem speakeasy that was located at 138th Street and 7th Avenue, the Rooster is a place where neighbors, travelers, and foodies alike can gather for a great meal and a soulful experience.
              </p>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-700"
          >
            <img src="https://picsum.photos/seed/harlem-street/1200/1500" alt="Harlem Street" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Section 2 - Team */}
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif">The Team</h2>
            <p className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold">The People Behind the Magic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Marcus Samuelsson', role: 'Chef / Owner', img: 'marcus' },
              { name: 'Therese Granlund', role: 'General Manager', img: 'therese' },
              { name: 'Dina Hill', role: 'Director of Events', img: 'dina' },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="apple-card p-10 text-center space-y-8 group"
              >
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-offwhite shadow-2xl group-hover:scale-105 transition-transform duration-700">
                  <img src={`https://picsum.photos/seed/${member.img}/600/600`} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl">{member.name}</h3>
                  <p className="text-brand-gold uppercase tracking-widest text-[10px] font-bold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3 - Neighborhood */}
        <div className="bg-brand-black text-brand-offwhite p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-8xl font-serif leading-none">Harlem <br /><span className="text-brand-gold italic">Pride</span></h2>
              <p className="text-xl text-white/60 leading-relaxed font-medium">
                We are proud to be a part of the vibrant Harlem community. From supporting local artists to hiring from within the neighborhood, everything we do is rooted in our love for this historic place.
              </p>
              <div className="flex gap-12">
                <div className="space-y-2">
                  <p className="text-5xl font-serif text-brand-gold">10+</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Years in Harlem</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-serif text-brand-gold">70%</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Local Staff</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://picsum.photos/seed/h1/600/800" 
                alt="Harlem 1" 
                className="rounded-3xl shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://picsum.photos/seed/h2/600/800" 
                alt="Harlem 2" 
                className="rounded-3xl shadow-2xl mt-12" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
