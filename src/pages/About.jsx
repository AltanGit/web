import { GraduationCap, Cpu, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';
import SmartImage from '../components/SmartImage';

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Üst Profil ve Vesikalık */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-3xl p-3">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                <SmartImage
                  src="/assets/vesikalik.png"
                  alt="Altan Duran Vesikalık"
                  fallbackText="ALTAN DURAN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="font-display text-xl font-semibold text-white">Altan Duran</h2>
                <p className="text-xs font-mono text-sky-400 mt-1">
                  Antalya, TR • 2007
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 glass-panel rounded-3xl p-7 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              {t.tag}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
              {t.title}
            </h1>
            <p className="text-lg text-zinc-200 font-medium mt-4 leading-relaxed">
              {t.lead}
            </p>
            <div className="mt-6 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
              {t.bioParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Eğitim Hayatı */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-sky-400" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              {t.educationTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.education.map((edu, idx) => (
              <div key={idx} className="glass-panel rounded-3xl p-7">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-400/10 text-sky-300 font-mono text-xs">
                  {edu.period}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mt-4">
                  {edu.school}
                </h3>
                <p className="text-sm font-medium text-zinc-300 mt-1">{edu.program}</p>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İlgi Alanları ve Yetenek Matrisi */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-sky-400" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              {t.skillsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.skills.map((skill, idx) => (
              <div key={idx} className="glass-panel glass-panel-hover rounded-3xl p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {skill.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gelecek Hedefleri */}
        <section className="mt-16 glass-panel rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-sky-400" />
            <h2 className="font-display text-2xl font-semibold text-white">
              {t.visionTitle}
            </h2>
          </div>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            {t.visionText}
          </p>
        </section>
      </div>
    </PageTransition>
  );
}