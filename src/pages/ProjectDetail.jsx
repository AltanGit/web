import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';
import SmartImage from '../components/SmartImage';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const t = content[lang];
  const project = t.projects.find((p) => p.slug === slug) || t.projects[0];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <Link
          to="/projeler"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.projectsPage.backToProjects}
        </Link>

        <div className="glass-panel rounded-3xl overflow-hidden">
          <div className="aspect-[16/9] bg-zinc-900">
            <SmartImage
              src={project.image}
              alt={project.title}
              fallbackText={project.category}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-7 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              {project.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              {project.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 py-5 border-y border-white/10 text-sm">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  {t.projectsPage.roleLabel}
                </p>
                <p className="text-zinc-200 mt-1">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  {t.projectsPage.yearLabel}
                </p>
                <p className="text-zinc-200 mt-1">{project.year}</p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mt-6 text-base">
              {project.description}
            </p>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-white">
                {t.projectsPage.highlights}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-white">
                {t.projectsPage.techStack}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}