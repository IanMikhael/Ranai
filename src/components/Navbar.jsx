import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Deteksi scroll untuk mengubah wujud Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mencegah scroll pada body saat menu mobile terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Wrapper Utama Navbar - Mengatur posisi sticky/fixed */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'pt-4 px-4' : 'pt-6 px-6 md:px-12'
        }`}
      >
        {/* Inner Container - Berubah bentuk dari Full Width ke Floating Pill */}
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? isDark
                ? 'max-w-4xl px-6 py-3 rounded-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
                : 'max-w-4xl px-6 py-3 rounded-full bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.05)]'
              : 'max-w-7xl px-0 py-2 bg-transparent border-transparent'
          }`}
        >
          {/* 1. Area Logo */}
          <a href="/" className="relative z-50 flex items-center gap-2 group">
            <img
              src={isDark ? '/logo-white.png' : '/logo-black.png'}
              alt="Ranaix Logo"
              className={`w-auto transition-all duration-500 ${
                isScrolled ? 'h-8' : 'h-10 md:h-12'
              } group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(0,220,229,0.5)]`}
            />
          </a>

          {/* 2. Desktop Navigation (Pill di tengah) */}
          <div className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-transparent' 
              : isDark ? 'bg-white/[0.03] border border-white/5 backdrop-blur-md' : 'bg-gray-900/[0.03] border border-gray-200/50 backdrop-blur-md'
          }`}>
            <NavLink href="/" label="Beranda" />
            <NavLink href="/service" label="Layanan" />
            <NavLink href="/client" label="Klien" />
            <NavLink href="/contact" label="Kontak" />
          </div>

          {/* 3. Desktop Actions (Theme Toggle & CTA) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Theme Toggle dengan efek rotasi 3D halus */}
            <button
              onClick={toggleTheme}
              className={`relative overflow-hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                isDark 
                  ? 'border-white/10 bg-white/5 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                  : 'border-gray-200 bg-gray-50 hover:border-[#00dce5] hover:shadow-[0_0_15px_rgba(0,220,229,0.3)]'
              }`}
              title={isDark ? 'Beralih ke Terang' : 'Beralih ke Gelap'}
            >
              <div className={`absolute transition-all duration-500 transform ${isDark ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-90'}`}>
                <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div className={`absolute transition-all duration-500 transform ${isDark ? '-translate-y-10 opacity-0 -rotate-90' : 'translate-y-0 opacity-100 rotate-0'}`}>
                <svg className="w-4 h-4 text-[#00dce5]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              </div>
            </button>

            {/* CTA Button Premium */}
            <a href="https://wa.me/62817272794?text=Halo%20Ranaix,%20saya%20ingin%20diskusi." target="_blank" rel="noopener noreferrer" 
               className={`group relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 ${
                 isDark 
                  ? 'bg-white text-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,220,229,0.4)]' 
                  : 'bg-gray-900 text-white shadow-lg hover:shadow-[0_0_30px_rgba(0,220,229,0.3)]'
               }`}>
              {/* Efek kilauan hover dari kiri ke kanan */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 z-0"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Diskusikan Sistem
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
          </div>

          {/* 4. Mobile Controls (Kanan) */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
              }`}
            >
              {isDark ? (
                <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4 text-[#00dce5]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>

            {/* Hamburger Button Modern */}
            <button
              className={`w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full transition-all ${
                isDark ? 'bg-white/5' : 'bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block h-[2px] rounded-full transition-all duration-300 ease-out ${
                isDark ? 'bg-white' : 'bg-gray-900'
              } ${isMenuOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'}`}></span>
              
              <span className={`block h-[2px] rounded-full transition-all duration-300 ease-out ${
                isDark ? 'bg-white' : 'bg-gray-900'
              } ${isMenuOpen ? 'w-0 opacity-0' : 'w-4 mr-1'}`}></span>
              
              <span className={`block h-[2px] rounded-full transition-all duration-300 ease-out ${
                isDark ? 'bg-white' : 'bg-gray-900'
              } ${isMenuOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-5'}`}></span>
            </button>
          </div>

        </div>
      </nav>

      {/* ==================== MOBILE MENU OVERLAY (Cinematic Apple Style) ==================== */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Blur berlapis untuk kesan depth yang ekstrim */}
        <div className={`absolute inset-0 backdrop-blur-3xl transition-opacity duration-700 ${isDark ? 'bg-[#0a0a0a]/95' : 'bg-[#F8F9FA]/95'}`}></div>
        <div className={`absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-40 transition-transform duration-1000 ${isMenuOpen ? 'scale-100' : 'scale-50'} ${isDark ? 'bg-[#00dce5]/20' : 'bg-blue-300/30'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[90vw] h-[90vw] rounded-full blur-[120px] opacity-30 transition-transform duration-1000 delay-150 ${isMenuOpen ? 'scale-100' : 'scale-50'} ${isDark ? 'bg-[#D4AF37]/20' : 'bg-teal-200/30'}`}></div>

        {/* Menu Items dengan Efek Staggered Reveal (Muncul bergantian dari bawah) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-8">
          <nav className="flex flex-col gap-6">
            <MobileNavLink href="/" label="Beranda" isOpen={isMenuOpen} delay="delay-[100ms]" closeMenu={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/service" label="Layanan" isOpen={isMenuOpen} delay="delay-[150ms]" closeMenu={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/client" label="Klien" isOpen={isMenuOpen} delay="delay-[200ms]" closeMenu={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/contact" label="Kontak" isOpen={isMenuOpen} delay="delay-[250ms]" closeMenu={() => setIsMenuOpen(false)} />
          </nav>

          <div className={`mt-16 transition-all duration-700 delay-[300ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className={`text-xs font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Mulai Transformasi</p>
            <a href="https://wa.me/62817272794" target="_blank" rel="noopener noreferrer"
               className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                 isDark ? 'bg-[#00dce5] text-[#0a0a0a]' : 'bg-gray-900 text-white'
               }`}>
              Diskusikan Sistem Anda
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ==================== KOMPONEN PENDUKUNG ====================

// Link Navbar Desktop (Gaya Hover Underline Modern)
function NavLink({ href, label }) {
  const { isDark } = useTheme();
  return (
    <a
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group overflow-hidden ${
        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Latar hover memudar */}
      <span className={`absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
        isDark ? 'bg-white/[0.05]' : 'bg-gray-900/[0.04]'
      }`}></span>
      
      {/* Garis bawah bercahaya yang muncul perlahan */}
      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-1/2 transition-all duration-300 ease-out ${
        isDark ? 'bg-[#00dce5] shadow-[0_0_8px_#00dce5]' : 'bg-[#00dce5]'
      }`}></span>
    </a>
  );
}

// Link Navbar Mobile (Gaya Tipografi Raksasa)
function MobileNavLink({ href, label, isOpen, delay, closeMenu }) {
  const { isDark } = useTheme();
  return (
    <a 
      href={href} 
      onClick={closeMenu}
      className={`group flex items-center justify-between border-b pb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isDark ? 'border-white/10' : 'border-gray-200'
      } ${
        isOpen ? `translate-y-0 opacity-100 ${delay}` : 'translate-y-12 opacity-0'
      }`}
    >
      <span className={`text-4xl sm:text-5xl font-bold tracking-tight transition-colors duration-300 ${
        isDark ? 'text-white group-hover:text-[#00dce5]' : 'text-gray-900 group-hover:text-[#00dce5]'
      }`}>
        {label}
      </span>
      <span className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
        isDark ? 'border-white/10 group-hover:border-[#00dce5] group-hover:bg-[#00dce5]/10 text-white group-hover:text-[#00dce5]' : 'border-gray-200 group-hover:border-[#00dce5] group-hover:bg-blue-50 text-gray-900 group-hover:text-[#00dce5]'
      }`}>
        <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </span>
    </a>
  );
}