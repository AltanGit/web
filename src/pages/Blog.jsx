import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';

export default function Blog() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [selectedCat, setSelectedCat] = useState('ALL');

  const allCategories = Array.from(
    new Set(t.blogs.flatMap((post) => post.categories))
  );

  const filteredPosts =
    selectedCat === 'ALL'
      ? t.blogs
      : t.blogs.filter((post) => post.categories.includes(selectedCat));

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          {t.blogPage.tag}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
          {t.blogPage.title}
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">{t.blogPage.subtitle}</p>

        {/* Kategori Filtresi */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          <button
            onClick={() => setSelectedCat('ALL')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              selectedCat === 'ALL'
                ? 'bg-white text-black'
                : 'glass-panel text-zinc-300 hover:text-white'
            }`}
          >
            {t.blogPage.allCategories}
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                selectedCat === cat
                  ? 'bg-white text-black'
                  : 'glass-panel text-zinc-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Makale Listesi */}
        <div className="space-y-6 mt-10">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="inline-flex items-center gap-1.5 text-sky-400">
                  {post.categories.join(' • ')}
                </span>
                <span>/</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} {t.blogPage.readTimeSuffix}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-3">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-sky-300 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-zinc-300 mt-3 leading-relaxed text-sm sm:text-base">
                {post.excerpt}
              </p>

              {/* Etiketler */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Tag className="w-3.5 h-3.5 text-zinc-500 mr-1" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-white transition-colors"
                >
                  {t.blogPage.readArticle}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}