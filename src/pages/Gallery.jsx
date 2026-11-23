import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';
import SmartImage from '../components/SmartImage';

export default function Gallery() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [selected, setSelected] = useState(null);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          {t.galleryPage.tag}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
          {t.galleryPage.title}
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">{t.galleryPage.subtitle}</p>

        {/* Bento Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5 mt-10">
          {t.galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative rounded-3xl overflow-hidden glass-panel text-left ${item.span}`}
            >
              <SmartImage
                src={item.src}
                alt={item.title}
                fallbackText={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 flex flex-col justify-end">
                <h2 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label={t.galleryPage.close}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] overflow-hidden bg-zinc-950">
                <SmartImage
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {selected.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-1.5">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}