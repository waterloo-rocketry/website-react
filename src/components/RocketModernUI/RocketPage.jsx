import React from 'react';
import {
  Gauge, Images, Video, Rocket, Download,
} from 'lucide-react';

import RocketHero from './RocketHero';
import SpecsGrid from './collections/SpecsGrid';
import InPageNav from './collections/InPageNav';
import PhotoGallery from './collections/PhotoGallery';
import VideoGallery from './collections/VideoGallery';
import ScrollToTop from './atoms/ScrollToTop';

import SectionHeading from './atoms/SectionHeading';
import Paragraph from './atoms/Paragraph';
import BulletList from './atoms/BulletList';

const RocketPage = ({ content }) => {
  const {
    name, yearBadge, tagline, summary, hero, specs, sections, photos, videos,
  } = content;

  return (
    <div
      className="text-white"
      style={{
        backgroundColor: '#0b1020',
        minHeight: '100vh',
        margin: 0,
        marginTop: '-4.175rem',
        paddingTop: '4.175rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="pt-8">
          <RocketHero
            hero={hero}
            name={name}
            yearBadge={yearBadge}
            tagline={tagline}
            summary={summary}
            rightSlot={
              (
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
              )
            }
          />
        </div>

        {/* SPECS */}
        <section className="mt-10 md:mt-14">
          <div className="mb-4 flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">At-a-Glance</h2>
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
                  {s.footnote && <p className="mt-2 text-xs opacity-70">{s.footnote}</p>}
                  {s.cta?.href && (
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
        {photos && photos.length > 0 && (
          <section className="mt-12 md:mt-16">
            <div className="mb-4 flex items-center gap-2">
              <Images className="h-5 w-5" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Photo Gallery</h2>
            </div>
            <PhotoGallery photos={photos} />
          </section>
        )}

        {videos && videos.length > 0 && (
          <section className="mt-12 md:mt-16 mb-16">
            <div className="mb-4 flex items-center gap-2">
              <Video className="h-5 w-5" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Video Gallery</h2>
            </div>
            <VideoGallery videos={videos} />
          </section>
        )}
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default RocketPage;
