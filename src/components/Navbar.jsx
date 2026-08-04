import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 mx-auto mt-4 max-w-5xl rounded-full transition-all duration-500 border ${
          isDark
            ? isScrolled
              ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0px_10px_40px_rgba(0,0,0,0.8)]'
              : 'bg-black/20 border-white/[0.05] backdrop-blur-xl'
            : isScrolled
              ? 'bg-white/80 backdrop-blur-2xl border-gray-200 shadow-[0px_10px_40px_rgba(0,0,0,0.1)]'
              : 'bg-white/40 border-gray-200/50 backdrop-blur-xl'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/ranaix-logo.png"
            alt="Ranaix Logo"
            className={`h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 ${
              isDark ? 'brightness-150' : 'brightness-100'
            }`}
          />
        </a>

        {/* Desktop Menu (Pill Transparan) */}
        <div className="hidden md:flex gap-1 items-center bg-white/[0.03] border border-white/[0.08] rounded-full px-2 py-1 backdrop-blur-md">
          <NavLink href="/" label="Home" />
          <NavLink href="/service" label="Layanan" />
          <NavLink href="/client" label="Klien" />
          <NavLink href="/contact" label="Kontak" />
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00dce5] hover:bg-[#00dce5]/10 transition-all duration-300"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button className="group relative bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Diskusikan Sistem
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 z-50 hover:bg-white/10 transition-all"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full my-[3px] ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Cinematic Stagger) */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          isDark
            ? 'bg-[#050505]/95'
            : 'bg-white/95'
        } ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Typografi raksasa untuk mobile */}
        <div className={`flex flex-col items-center gap-6 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="/" className={`text-5xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/service" className={`text-5xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>Layanan</a>
          <a href="/client" className={`text-5xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>Klien</a>
          <a href="/contact" className={`text-5xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>Kontak</a>
        </div>
        
        <button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          Diskusikan Sistem
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </>
  );
}

// Komponen Link dengan animasi background slide-up yang sangat halus
function NavLink({ href, label }) {
  const { isDark } = useTheme();
  return (
    <a
      href={href}
      className={`relative px-4 py-1.5 text-sm ${
        isDark
          ? 'text-gray-400 hover:text-white'
          : 'text-gray-600 hover:text-gray-900'
      } transition-colors duration-300 group overflow-hidden`}
    >
      <span className="relative z-10">{label}</span>
      <span className={`absolute inset-0 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${
        isDark
          ? 'bg-white/[0.08]'
          : 'bg-gray-900/[0.08]'
      }`}></span>
    </a>
  );
}