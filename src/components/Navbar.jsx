import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          isScrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0px_10px_40px_rgba(0,0,0,0.8)]' 
            : 'bg-black/20 border-white/[0.05] backdrop-blur-xl'
        }`}
      >
        {/* Logo Minimalis */}
        <a href="/" className="flex items-center gap-2.5 text-xl font-semibold text-white tracking-tight group">
          <span className="relative flex h-2.5 w-2.5 transition-transform duration-300 group-hover:scale-150">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00dce5]"></span>
          </span>
          Ranaix
        </a>

        {/* Desktop Menu (Pill Transparan) */}
        <div className="hidden md:flex gap-1 items-center bg-white/[0.03] border border-white/[0.08] rounded-full px-2 py-1 backdrop-blur-md">
          <NavLink href="/" label="Home" />
          <NavLink href="/service" label="Layanan" />
          <NavLink href="/client" label="Klien" />
          <NavLink href="/contact" label="Kontak" />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="group relative bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Diskusikan Sistem
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 border border-white/10 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full my-[3px] ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-[1.5px] w-4 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay (Cinematic Stagger) */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Typografi raksasa untuk mobile */}
        <div className={`flex flex-col items-center gap-6 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="/" className="text-5xl font-bold text-gray-500 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/service" className="text-5xl font-bold text-gray-500 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Layanan</a>
          <a href="/client" className="text-5xl font-bold text-gray-500 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Klien</a>
          <a href="/contact" className="text-5xl font-bold text-gray-500 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Kontak</a>
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
  return (
    <a 
      href={href} 
      className="relative px-4 py-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-300 group overflow-hidden"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-white/[0.08] rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
    </a>
  );
}