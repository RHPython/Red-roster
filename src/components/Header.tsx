import { Link, useLocation } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menus', path: '/menus' },
    { name: 'Music', path: '/music-schedule' },
    { name: 'Events', path: '/private-events' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "py-3 px-4" : "py-6 px-4"
    )}>
      <div className={cn(
        "max-w-5xl mx-auto px-6 py-2 flex justify-between items-center transition-all duration-500",
        isScrolled ? "glass rounded-full shadow-apple" : "bg-transparent"
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-red text-white w-8 h-8 flex items-center justify-center rounded-lg font-serif font-bold text-lg leading-none group-hover:scale-110 transition-transform">
            R
          </div>
          <span className={cn(
            "font-serif text-lg font-bold tracking-tight transition-colors",
            isScrolled || isMobileMenuOpen ? "text-brand-black" : "text-white"
          )}>
            RED ROOSTER
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-medium tracking-tight hover:opacity-60 transition-all",
                isScrolled || isMobileMenuOpen ? "text-brand-black" : "text-white/90",
                location.pathname === link.path && "text-brand-red font-bold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className={cn(
              "apple-button text-[13px] font-bold shadow-lg transition-all",
              isScrolled 
                ? "bg-brand-red text-white hover:bg-brand-red/90" 
                : "bg-white text-brand-black hover:bg-white/90"
            )}
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-brand-black" />
          ) : (
            <Menu className={isScrolled ? "text-brand-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute top-full left-4 right-4 mt-2 rounded-[2rem] shadow-2xl p-6 space-y-4 flex flex-col items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-black hover:text-brand-red py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-brand-red text-white py-4 rounded-2xl font-bold"
            >
              Reserve a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
