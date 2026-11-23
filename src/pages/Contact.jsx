import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
          {t.tag}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
          {t.title}
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">{t.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
          {/* Sol: İletişim Bilgileri */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-zinc-400">{t.addressLabel}</p>
                <p className="text-sm text-zinc-200 mt-1 leading-relaxed">{t.addressValue}</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-zinc-400">{t.phoneLabel}</p>
                <a
                  href={`tel:${t.phoneValue.replace(/\s+/g, '')}`}
                  className="text-sm text-zinc-200 hover:text-sky-300 mt-1 block"
                >
                  {t.phoneValue}
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-zinc-400">{t.emailLabel}</p>
                <a
                  href={`mailto:${t.emailValue}`}
                  className="text-sm text-zinc-200 hover:text-sky-300 mt-1 block"
                >
                  {t.emailValue}
                </a>
              </div>
            </div>
          </div>

          {/* Sağ: İletişim Formu */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-white">
              {t.formTitle}
            </h2>

            {submitted ? (
              <div className="mt-6 p-6 rounded-2xl bg-sky-400/10 border border-sky-400/30 flex items-center gap-3 text-sky-200">
                <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0" />
                <p className="text-sm">{t.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-sky-200 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t.sendButton}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Entegrasyonu */}
        <div className="mt-10 glass-panel rounded-3xl p-3 overflow-hidden">
          <div className="px-4 py-3 text-xs font-mono uppercase tracking-wider text-zinc-400">
            {t.mapTitle}
          </div>
          <div className="w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden">
            <iframe
              title="Akdeniz Üniversitesi Antalya Harita"
              src="https://www.google.com/maps?q=Akdeniz%20%C3%9Cniversitesi%2C%20Antalya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.35) invert(0.92) contrast(0.95)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}