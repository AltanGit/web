import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';
import SmartImage from '../components/SmartImage';

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = Array.from(new Set(t.projects.map((p) => p.category)));
  const filtered =
    activeCategory === 'ALL'
      ? t.projects
      : t.projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          {t.projectsPage.tag}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
          {t.projectsPage.title}
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">{t.projectsPage.subtitle}</p>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeCategory === 'ALL'
                ? 'bg-white text-black'
                : 'glass-panel text-zinc-300 hover:text-white'
            }`}
          >
            {t.projectsPage.allFilter}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'glass-panel text-zinc-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              to={`/projeler/${project.slug}`}
              className="group glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] bg-zinc-900 overflow-hidden">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  fallbackText={project.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-400">{project.category}</span>
                    <span className="text-zinc-500">{project.year}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white mt-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 group-hover:text-white">
                  {t.projectsPage.viewDetail} <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}