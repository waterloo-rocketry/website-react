import React from 'react';

import { motion } from 'framer-motion';
import {
  Rocket,
  Gauge,
  Ruler,
  Wind,
  Droplet,
  BatteryCharging,
  Download,
  Video,
  Images,
} from 'lucide-react';

// Import Aurora images
import auroraLogo from '../../img/rocketPhotos/aurora_logo.webp';

// PDF files in public folder should be referenced with path strings
const auroraPoster = '/pdfs/2025_aurora_poster.pdf';

// -----------------------------------------------
// Content model (edit these values or pass via props)
// -----------------------------------------------
const AURORA_CONTENT = {
  name: 'AURORA',
  yearBadge: '2025',
  tagline: 'Canada’s student-designed liquid bi‑propellant rocket platform',
  summary:
    'Aurora advances our liquid bi‑propellant program with upgraded avionics, airframe refinements, and data systems—building on years of Waterloo Rocketry heritage.',
  hero: {
    mediaType: 'image', // 'video' | 'image' - changed to image since no video yet
    imageSrc: auroraLogo, // Using imported Aurora image
    alt: 'Aurora rocket design',
  },
  // At-a-glance specs (example values are placeholders — update with Aurora data!)
  specs: [
    { label: 'Diameter', value: '7.5"' },
    { label: 'Length', value: '160"' },
    { label: 'Motor Class', value: 'O' },
    { label: 'Wet Mass', value: '~125 lb' },
    { label: 'Fuel', value: 'Ethanol' },
    { label: 'Oxidizer', value: 'Nitrous Oxide' },
    { label: 'Apogee (reported)', value: '~38,000 ft' },
    { label: 'Max Velocity', value: '~2 mach' },
  ],
  // Detailed sections (copy revisable)
  sections: [
    {
      id: 'propulsion',
      title: 'Propulsion',
      body: 'Aurora is powered by Waterloo Rocketry’s liquid bi‑propellant engine using nitrous oxide and ethanol. The engine operates in blowdown mode with custom SRAD pneumatic valves, a graphite nozzle, and ablative cooling. Pressurization is driven by nitrous vapor with a concentric ethanol tank utilizing a sliding piston.',
      bullets: [
        'Peak thrust ~8 kN, ~400 psi chamber pressure',
        '~6 s burn; coaxial sleeve main valves + remote fill/vent',
        'Custom ablative liner + graphite nozzle',
      ],
    },
    {
      id: 'airframe',
      title: 'Airframe',
      body: 'A modular airframe prioritizes fast integration: nosecone, parachute bay, upper body tube, vent shroud, fairings, fincan, and boattail. Fiberglass dominates primary structure with carbon fiber for fincan/fins/fairings; aluminum couplers and CNC‑machined boattail improve strength and serviceability.',
      bullets: [
        'Von Kármán nose for apogee performance',
        'VARTM composites + tip‑to‑tip fin layup',
        'Stainless + 6061‑T6 machined tip',
      ],
    },
    {
      id: 'payload',
      title: 'Payload',
      body: 'A 3U CubeSat hosts two student‑built experiments: (1) a peristaltic IV‑style pump circulating 22% glycerin solution to characterize flow stability in varying g‑loads (with in‑flight Reynolds number estimation) and (2) a fastener vibration study with a 3‑axis accelerometer across diverse thread/nut/torque conditions.',
    },
    {
      id: 'controls',
      title: 'Controls',
      body: 'Tri‑plate airbrakes provide active altitude control. A PD loop with Madgwick filtering and on‑board trajectory prediction (RK4) modulates drag to converge on target apogee. Simulations leverage OpenRocket and CFD (Ansys Fluent) with real‑time drag overwrite.',
      bullets: [
        'VN‑300 IMU for state estimation',
        'Airbrakes closed‑loop control toward target apogee',
      ],
      footnote:
        'In 2024, the system reduced apogee error by ~800 ft; Aurora uses refined models and tuning.',
    },
    {
      id: 'recovery',
      title: 'Recovery',
      body: 'A reefed two‑stage system with pilot chute and control‑line reefed main handles descent. CO₂‑driven dual‑redundant separation ejects at apogee; pyrocutters disreef at 1500 ft AGL.',
      bullets: [
        'Dual altimeters (StratoLoggerCF & Raven3)',
        'Independent CO₂ ejectors and pyrocutter redundancy',
      ],
    },
    {
      id: 'electrical',
      title: 'Electrical & DAQ',
      body: 'An expanded RocketCAN network orchestrates 13+ custom boards handling power, recording, telemetry, and controls. A new DAQ patch panel streamlines sensor configuration and mission control interfacing.',
    },
    {
      id: 'report',
      title: 'Project Report',
      body: 'A comprehensive technical report detailing engine, structures, avionics, payloads, ground systems, and controls will be published post‑review.',
      cta: {
        label: 'Download Fact Sheet (PDF)',
        href: auroraPoster,
      },
    },
  ],
  photos: [
    {
      src: 'https://live.staticflickr.com/65535/53998023729_45f845ef3f_5k.jpg',
      alt: 'Aurora on display (placeholder)',
    },
    {
      src: 'https://live.staticflickr.com/65535/53997950648_3964dbb7e7_6k.jpg',
      alt: 'Team photo (placeholder)',
    },
    {
      src: 'https://live.staticflickr.com/65535/53997949738_364d5941b1_6k.jpg',
      alt: 'On the launch rail (placeholder)',
    },
  ],
  videos: [
    {
      title: 'Aurora – Launch Reel',
      url: 'https://www.youtube.com/embed/vRShaLdex7Q?si=k5kqdmuP8fEYu2LC',
    },
    // {
    //   title: 'Active Altitude Control (Talk)',
    //   url: 'https://www.youtube.com/embed/SJO39WQ7Uv0?si=oKVYrJBOVjCckHkc',
    // },
  ],
};

// -----------------------------------------------
// UI helpers
// -----------------------------------------------
const SectionHeading = ({ icon: Icon, title, id }) => (
  <div id={id} className="scroll-mt-28">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5" aria-hidden />}
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h3>
    </div>
  </div>
);

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5 shadow-sm">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5" aria-hidden />}
      <dt className="text-sm uppercase tracking-wide opacity-80">{label}</dt>
    </div>
    <dd className="mt-1 text-2xl font-semibold">{value}</dd>
  </div>
);

const AuroraHero = ({
  hero, name, yearBadge, tagline, summary,
}) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1020] via-[#0c1a2b] to-[#0b1020]">
    {/* Aurora gradient wash */}
    <div
      className="pointer-events-none absolute inset-0 opacity-70"
      aria-hidden
    >
      <div className="absolute -top-24 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/40 via-fuchsia-400/30 to-cyan-400/20 blur-3xl" />
    </div>

    <div className="grid lg:grid-cols-2">
      {/* Copy */}
      <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            {yearBadge}
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            Liquid Bi‑Propellant
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
        <p className="mt-4 max-w-prose text-sm md:text-base opacity-90">
          {summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#specs"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 px-6 py-3 text-sm font-medium text-emerald-300 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105 hover:border-emerald-400/50 backdrop-blur-sm"
          >
            <Gauge className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="relative">Specs</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#photos"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 px-6 py-3 text-sm font-medium text-purple-300 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 hover:border-purple-400/50 backdrop-blur-sm"
          >
            <Images className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="relative">Photos</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#videos"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 px-6 py-3 text-sm font-medium text-blue-300 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 hover:border-blue-400/50 backdrop-blur-sm"
          >
            <Video className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="relative">Videos</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </div>

      {/* Media */}
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
            <img
              className="h-full w-full object-cover"
              src={hero.imageSrc}
              alt={hero.alt}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

const SpecsGrid = ({ specs }) => {
  const iconMap = {
    Diameter: Ruler,
    Length: Ruler,
    'Motor Class': Rocket,
    'Motor Classification': Rocket,
    'Wet Mass': BatteryCharging,
    Fuel: Droplet,
    Oxidizer: Droplet,
    'Apogee (reported)': Wind,
    Apogee: Wind,
    'Max Velocity': Wind,
  };
  return (
    <div id="specs" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {specs.map((s) => {
        const Icon = iconMap[s.label] || Gauge;
        return (
          <StatCard key={s.label} label={s.label} value={s.value} icon={Icon} />
        );
      })}
    </div>
  );
};

const InPageNav = ({ sections }) => (
  <nav className="sticky top-24 hidden lg:block">
    <div className="rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-slate-600/30 shadow-xl shadow-slate-900/30 p-1.5">
      {/* Navigation header */}
      <div className="px-3 py-2 border-b border-slate-600/20 mb-1.5">
        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
          Quick Navigation
        </h4>
      </div>

      <ul className="space-y-0.5">
        {sections.map((s, index) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group relative block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:to-slate-600/30 overflow-hidden"
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {/* Clean title text */}
              <div className="relative z-20">
                <span className="relative font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {s.title}
                </span>
              </div>

              {/* Animated left border */}
              <div className="absolute left-0 top-1/2 h-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 transition-all duration-500 group-hover:h-4/5 group-hover:-translate-y-1/2 rounded-r-full shadow-lg shadow-emerald-400/50" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />

              {/* Background glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 via-cyan-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>

      {/* Navigation footer */}
      <div className="px-3 py-2 border-t border-slate-600/20 mt-1.5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse" />
          <span>Scroll to navigate</span>
        </div>
      </div>
    </div>
  </nav>
);

const Paragraph = ({ children }) => (
  <p className="leading-relaxed opacity-90">{children}</p>
);

const BulletList = ({ items = [] }) => (
  <ul className="mt-3 space-y-2">
    {items.map((x) => (
      <li
        key={`bullet-${x.substring(0, 30).replace(/\s+/g, '-')}`}
        className="flex items-start gap-3"
      >
        {/* Simple, clear bullet */}
        <div className="flex-shrink-0 mt-1.5">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </div>

        {/* Clear, readable content */}
        <p className="text-slate-100 text-sm leading-relaxed font-medium">
          {x}
        </p>
      </li>
    ))}
  </ul>
);

const PhotoGallery = ({ photos }) => (
  <div id="photos" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {photos.map((p) => (
      <div
        key={`photo-${p.src.split('/').pop()}-${p.alt.replace(/\s+/g, '-')}`}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <img
          src={p.src}
          alt={p.alt}
          className="h-56 w-full object-cover transition duration-300 ease-out group-hover:scale-105"
        />
      </div>
    ))}
  </div>
);

const VideoGallery = ({ videos }) => (
  <div id="videos" className="grid lg:grid-cols-2 gap-6">
    {videos.map((v) => (
      <div
        key={`video-${v.url.split('/').pop()}-${v.title.replace(/\s+/g, '-')}`}
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={v.url}
            title={v.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="p-3 text-sm opacity-80">{v.title}</div>
      </div>
    ))}
  </div>
);

// -----------------------------------------------
// Page component
// -----------------------------------------------
export default function AuroraPage({ content = AURORA_CONTENT }) {
  const {
    name,
    yearBadge,
    tagline,
    summary,
    hero,
    specs,
    sections,
    photos,
    videos,
  } = content;

  return (
    <div
      className="text-white"
      style={{
        backgroundColor: '#0b1020',
        minHeight: '100vh',
        margin: '0',
        marginTop: '-4.175rem', // Offset the body padding-top
        paddingTop: '4.175rem', // Add it back as internal padding
        paddingBottom: '2rem',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="pt-8">
          <AuroraHero
            hero={hero}
            name={name}
            yearBadge={yearBadge}
            tagline={tagline}
            summary={summary}
          />
        </div>

        {/* SPECS */}
        <section className="mt-10 md:mt-14">
          <div className="mb-4 flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              At‑a‑Glance
            </h2>
          </div>
          <SpecsGrid specs={specs} />
        </section>

        {/* CONTENT + NAV */}
        <section className="mt-12 grid lg:grid-cols-[220px_1fr] gap-8">
          <div className="hidden lg:block">
            <InPageNav sections={sections} />
          </div>
          <div className="space-y-12">
            {sections.map((s) => (
              <article key={s.id}>
                <SectionHeading id={s.id} title={s.title} icon={Rocket} />
                <div className="mt-3 space-y-3">
                  {s.body && <Paragraph>{s.body}</Paragraph>}
                  {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                    <BulletList items={s.bullets} />
                  )}
                  {s.footnote && (
                    <p className="mt-2 text-xs opacity-70">{s.footnote}</p>
                  )}
                  {s.cta && s.cta.href && (
                    <div className="pt-4">
                      <a
                        href={s.cta.href}
                        className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/40 px-6 py-3 text-sm font-semibold text-orange-200 shadow-xl shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-105 hover:border-orange-400/60 backdrop-blur-sm overflow-hidden"
                      >
                        <Download className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:-rotate-12 z-10" />
                        <span className="relative z-10">{s.cta.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERIES */}
        <section className="mt-12 md:mt-16">
          <div className="mb-4 flex items-center gap-2">
            <Images className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Photo Gallery
            </h2>
          </div>
          <PhotoGallery photos={photos} />
        </section>

        <section className="mt-12 md:mt-16 mb-16">
          <div className="mb-4 flex items-center gap-2">
            <Video className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Video Gallery
            </h2>
          </div>
          <VideoGallery videos={videos} />
        </section>
      </div>
    </div>
  );
}
