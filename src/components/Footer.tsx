import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-offwhite pt-32 pb-16 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-red text-white w-10 h-10 flex items-center justify-center rounded-xl font-serif font-bold text-xl leading-none group-hover:scale-110 transition-transform">
                R
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                RED ROOSTER
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              A landmark destination in the heart of Harlem, celebrating the rich cultural heritage of the neighborhood through food, music, and art.
            </p>
            <div className="flex gap-6">
              <a href={RESTAURANT_INFO.socials.instagram} className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href={RESTAURANT_INFO.socials.twitter} className="text-gray-400 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href={RESTAURANT_INFO.socials.facebook} className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Contact</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex gap-4 group cursor-pointer">
                <MapPin className="text-brand-red shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-600 group-hover:text-brand-black transition-colors">{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <Phone className="text-brand-red shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-600 group-hover:text-brand-black transition-colors">{RESTAURANT_INFO.phone}</span>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <Mail className="text-brand-red shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-600 group-hover:text-brand-black transition-colors">{RESTAURANT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Hours</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-3">
                <p className="text-sm font-bold text-brand-red uppercase tracking-widest">Dining Room</p>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{RESTAURANT_INFO.hours.dining}</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-brand-red uppercase tracking-widest">The Bar</p>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{RESTAURANT_INFO.hours.bar}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p>© {new Date().getFullYear()} Red Rooster Harlem. Designed with Soul.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-red transition-colors">Terms</Link>
            <a href="https://marcussamuelsson.com" className="hover:text-brand-red transition-colors">Marcus Samuelsson Group</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
