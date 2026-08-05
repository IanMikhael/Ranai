import { useState, useRef } from 'react';
import { useTheme } from '../context/useTheme';

export default function Footer() {
  const { isDark } = useTheme();
  const footerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Logika Spotlight Mouse Tracking
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full overflow-hidden cursor-default ${
        isDark
          ? 'bg-[#050505] text-white border-t border-white/[0.05]'
          : 'bg-white text-gray-900 border-t border-gray-200'
      }`}
    >
      {/* 1. Background Grid dengan Masking (Hanya terlihat di dekat konten) */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? 'bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]'
        }`}
        style={{
          backgroundSize: '5rem 5rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
          opacity: isDark ? 0.3 : 0.2
        }}
      ></div>

      {/* 2. Interactive Spotlight (Mengikuti Kursor) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{ 
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.08), transparent 80%)` 
        }}
      ></div>

      {/* 3. Static Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00dce5]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32 pb-12 z-10">
        


        {/* Middle Section: Links Grid (Minimalist) */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t ${
          isDark ? 'border-white/[0.05]' : 'border-gray-300'
        }`}>
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-semibold tracking-tight mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00dce5]"></span>
              </span>
              Ranaix
            </div>
            <p className={`text-sm max-w-xs leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Membangun fondasi digital yang tangguh untuk masa depan bisnis Anda. Integrasi sistem tanpa batas.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Layanan</h4>
            <FooterLink href="/service" label="Integrasi Sistem" isDark={isDark} />
            <FooterLink href="/service" label="Pengembangan" isDark={isDark} />
            <FooterLink href="/service" label="Otomatisasi" isDark={isDark} />
            <FooterLink href="/service" label="Experience" isDark={isDark} />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Perusahaan</h4>
            <FooterLink href="/" label="About" isDark={isDark} />
            <FooterLink href="/client" label="Client" isDark={isDark} />
            <FooterLink href="/service" label="Service" isDark={isDark} />
            <FooterLink href="/contact" label="Contact" isDark={isDark} />
            <FooterLink href="#" label="News" isDark={isDark} />
            <FooterLink href="#" label="Jobs" isDark={isDark} />
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Bantuan</h4>
            <FooterLink href="#" label="Help Center" isDark={isDark} />
            <FooterLink href="#" label="Mitra" isDark={isDark} />
            <FooterLink href="#" label="Privacy" isDark={isDark} />
            <FooterLink href="#" label="Policy" isDark={isDark} />
          </div>
        </div>

        {/* Bottom Section: Copyright, Status & Socials */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex flex-col gap-2">
            <p className={`text-xs font-light ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
              © 2026 PT Biometrika Teknologi Indonesia.
            </p>
            <div className={`text-xs font-light space-y-0.5 ${isDark ? 'text-gray-700' : 'text-gray-400'}`}>
              <p>PT Biometrika Teknologi Indonesia</p>
              <p>Kebagusan, Jakarta Selatan</p>
              <p>Indonesia</p>
            </div>
          </div>
          <div className={`hidden md:flex items-center gap-2 text-xs px-3 py-1.5 rounded-full backdrop-blur-md ${
              isDark
                ? 'text-gray-500 bg-white/[0.02] border border-white/5'
                : 'text-gray-600 bg-gray-200 border border-gray-300'
            }`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              All Systems Operational
            </div>
        </div>

      </div>
    </footer>
  );
}

// Komponen Link Footer (Dengan Animated Glowing Underline & Arrow)
function FooterLink({ href, label, isDark }) {
  return (
    <a
      href={href}
      className={`group relative flex items-center gap-2 text-sm py-1 w-fit transition-all duration-300 ${
        isDark
          ? 'text-gray-600 hover:text-white'
          : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00dce5]">
        →
      </span>
      {label}
      {/* Garis bawah yang memanjang saat hover */}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00dce5] to-transparent group-hover:w-full transition-all duration-500 ease-out"></span>
    </a>
  );
}

