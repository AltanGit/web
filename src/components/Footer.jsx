import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06070A]/90 backdrop-blur-md mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-white text-lg">ALTAN DURAN</p>
          <p className="text-sm text-zinc-400 mt-1">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
          <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
          <Link to="/hakkimda" className="hover:text-white transition-colors">{t.nav.about}</Link>
          <Link to="/projeler" className="hover:text-white transition-colors">{t.nav.projects}</Link>
          <Link to="/galeri" className="hover:text-white transition-colors">{t.nav.gallery}</Link>
          <Link to="/blog" className="hover:text-white transition-colors">{t.nav.blog}</Link>
          <Link to="/iletisim" className="hover:text-white transition-colors">{t.nav.contact}</Link>
        </div>

        <p className="text-xs font-mono text-zinc-500">
          © {new Date().getFullYear()} Altan Duran. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}