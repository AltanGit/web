import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang].nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: t.home },
    { to: '/hakkimda', label: t.about },
    { to: '/projeler', label: t.projects },
    { to: '/galeri', label: t.gallery },
    { to: '/blog', label: t.blog },
    { to: '/iletisim', label: t.contact }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06070A]/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo.png"
            alt="Altan Duran Logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="w-8 h-8 rounded-lg object-cover border border-white/15"
          />
          <span className="font-display font-semibold tracking-tight text-lg text-white group-hover:text-sky-400 transition-colors">
            ALTAN<span className="text-zinc-500 font-normal">.DURAN</span>
          </span>
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-1 rounded-full glass-panel px-2 py-1.5">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Dil Seçici & Mobil Menü Butonu */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono tracking-wider text-zinc-200 hover:border-sky-400/50 hover:text-white transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang === 'tr' ? 'TR / EN' : 'EN / TR'}</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-full glass-panel text-zinc-100"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobil Tam Genişlik Çekmece Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full inset-x-0 bg-[#080A0F]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white text-black'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}