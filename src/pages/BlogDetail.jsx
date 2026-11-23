import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';

export default function BlogDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = content[lang];
  const post = t.blogs.find((b) => b.slug === slug) || t.blogs[0];

  return (
    <PageTransition>
      <article className="max-w-3xl mx-auto px-5 sm:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.blogPage.backToBlog}
        </Link>

        <div className="glass-panel rounded-3xl p-7 sm:p-11">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-sky-400/10 text-sky-300">
              {t.blogPage.categoryLabel}: {post.categories.join(', ')}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime} {t.blogPage.readTimeSuffix}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-5 leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5 text-zinc-300 leading-relaxed text-base">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 mr-2">
              <Tag className="w-3.5 h-3.5" /> {t.blogPage.tagsLabel}:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </PageTransition>
  );
}