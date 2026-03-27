import { motion } from 'motion/react';

export default function Artwork() {
  const artItems = [
    { title: 'Harlem Renaissance', artist: 'Local Artist A', img: 'art1' },
    { title: 'The Rooster Spirit', artist: 'Local Artist B', img: 'art2' },
    { title: 'Jazz Vibrations', artist: 'Local Artist C', img: 'art3' },
    { title: 'Soul of the City', artist: 'Local Artist D', img: 'art4' },
    { title: 'Lenox Ave Morning', artist: 'Local Artist E', img: 'art5' },
    { title: 'Marcus in Motion', artist: 'Local Artist F', img: 'art6' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 pt-12"
        >
          <h1 className="text-7xl md:text-[140px] font-serif leading-none tracking-tighter text-brand-red">Art Series</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">A gallery celebrating the rich creative history and vibrant spirit of Harlem.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-apple group-hover:shadow-apple-hover transition-all duration-700">
                <img 
                  src={`https://picsum.photos/seed/${item.img}/800/1200`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold">{item.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-black text-brand-offwhite p-16 md:p-24 rounded-[4rem] text-center space-y-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-red/10 to-transparent" />
          <div className="relative z-10 space-y-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-none">Are you a <br /><span className="text-brand-gold italic">local artist?</span></h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
              We are always looking for new voices to feature in our Art Series. If you'd like to showcase your work at Red Rooster, please send your portfolio to our team.
            </p>
            <a 
              href="mailto:info@redroosterharlem.com" 
              className="apple-button bg-brand-gold text-brand-black inline-block px-12 py-4 text-sm uppercase tracking-[0.2em]"
            >
              Submit Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
