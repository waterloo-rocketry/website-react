import React from 'react';

const InPageNav = ({ sections }) => (
  <nav className="sticky top-24 hidden lg:block">
    <div className="rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-slate-600/30 shadow-xl shadow-slate-900/30 p-1.5">
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
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <div className="relative z-20">
                <span className="relative font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {s.title}
                </span>
              </div>
              <div className="absolute left-0 top-1/2 h-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 transition-all duration-500 group-hover:h-4/5 group-hover:-translate-y-1/2 rounded-r-full shadow-lg shadow-emerald-400/50" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 via-cyan-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>

      <div className="px-3 py-2 border-t border-slate-600/20 mt-1.5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse" />
          <span>Scroll to navigate</span>
        </div>
      </div>
    </div>
  </nav>
);

export default InPageNav;
