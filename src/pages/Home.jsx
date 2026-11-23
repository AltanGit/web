import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';
import SmartImage from '../components/SmartImage';

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <PageTransition>
      {/* HERO BÖLÜMÜ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 min-h-[78vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-sky-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            {t.hero.titleStart}{' '}
            <span className="bg-gradient-to-r from-sky-300 via-white to-zinc-400 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/projeler"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-sky-200 transition-colors"
            >
              {t.hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hakkimda"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel text-white font-medium text-sm hover:border-sky-400/50 transition-colors"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* HAKKIMDA ÖZETİ (BENTO GRID) */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                {t.homeSections.aboutTag}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-2">
                {t.homeSections.aboutTitle}
              </h2>
              <p className="text-zinc-300 mt-4 leading-relaxed">
                {t.homeSections.aboutDesc}
              </p>
            </div>
            <div className="mt-7">
              <Link
                to="/hakkimda"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-white transition-colors"
              >
                {t.homeSections.readMore}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {t.homeSections.stats.map((stat, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase">{stat.label}</p>
                  <p className="text-xs text-zinc-500 mt-1">{stat.detail}</p>
                </div>
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJELER ÖZETİ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              {t.homeSections.projectsTag}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2">
              {t.homeSections.projectsTitle}
            </h2>
          </div>
          <Link
            to="/projeler"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
          >
            {t.homeSections.allProjects}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              to={`/projeler/${project.slug}`}
              className="group glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  fallbackText={project.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-400">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold text-white mt-1.5 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2.5 line-clamp-3">{project.summary}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-mono text-zinc-300 group-hover:text-white">
                  {t.projectsPage.viewDetail} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GALERİ ÖNİZLEMESİ */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              {t.homeSections.galleryTag}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2">
              {t.homeSections.galleryTitle}
            </h2>
          </div>
          <Link
            to="/galeri"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
          >
            {t.homeSections.allGallery}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.galleryItems.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to="/galeri"
              className="group relative aspect-square rounded-2xl overflow-hidden glass-panel"
            >
              <SmartImage
                src={item.src}
                alt={item.title}
                fallbackText="GALLERY"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-medium text-white">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ALT ÇAĞRI (CTA) */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white max-w-2xl mx-auto">
            {t.homeSections.ctaTitle}
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            {t.homeSections.ctaDesc}
          </p>
          <Link
            to="/iletisim"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-sky-200 transition-colors"
          >
            {t.homeSections.ctaButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}