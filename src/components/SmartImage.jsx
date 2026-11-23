import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SmartImage({ src, alt, className = '', fallbackText = 'AD' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-950 text-zinc-400 border border-white/10 ${className}`}
      >
        <ImageOff className="w-7 h-7 mb-2 text-sky-400/70" />
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}