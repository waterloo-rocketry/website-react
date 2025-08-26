import React, {
  useState, useEffect,
} from 'react';
import {
  ChevronUp,
} from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group p-3 rounded-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/30 text-slate-300 shadow-lg shadow-slate-900/25 backdrop-blur-sm transition-all duration-300 hover:shadow-slate-900/40 hover:scale-110 hover:border-slate-500/50 hover:text-white"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-translate-y-0.5" />

      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-700/20 to-slate-600/10 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Animated ring */}
      <div className="absolute inset-0 rounded-full border-2 border-slate-500/20 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300" />
    </button>
  );
};

export default ScrollToTop;
