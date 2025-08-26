import React from 'react';
import { motion } from 'framer-motion';

const RocketHero = ({ hero, name, yearBadge, tagline, summary, rightSlot }) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1020] via-[#0c1a2b] to-[#0b1020]">
    <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
      <div className="absolute -top-24 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/40 via-fuchsia-400/30 to-cyan-400/20 blur-3xl" />
    </div>

    <div className="grid lg:grid-cols-2">
      <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            {yearBadge}
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            Liquid Bi-Propellant
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {name}
        </motion.h1>
        <p className="mt-3 text-base md:text-lg opacity-90">{tagline}</p>
        <p className="mt-4 max-w-prose text-sm md:text-base opacity-90">{summary}</p>
        {rightSlot /* optional extra controls from parent (buttons/links) */}
      </div>

      <div className="relative order-first lg:order-last">
        <div className="aspect-[16/10] lg:aspect-[5/4] overflow-hidden rounded-t-3xl lg:rounded-r-3xl lg:rounded-t-none">
          {hero.mediaType === 'video' && hero.videoSrc ? (
            <video
              className="h-full w-full object-cover"
              src={hero.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              poster={hero.imageSrc || undefined}
            />
          ) : (
            <img className="h-full w-full object-cover" src={hero.imageSrc} alt={hero.alt} />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default RocketHero;
