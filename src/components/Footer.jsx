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
      className={`relative w-full overflow-hidden cursor-default transition-colors duration-700 ${
        isDark
          ? 'bg-[#0a0a0a] text-white border-t border-white/[0.05]'
          : 'bg-[#F8F9FA] text-gray-900 border-t border-gray-200'
      }`}
    >
      {/* 1. Background Grid Super Halus */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          isDark
            ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] opacity-[0.02]'
            : 'bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] opacity-[0.02]'
        }`}
        style={{
          backgroundSize: '3rem 3rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)',
        }}
      ></div>

      {/* 2. Interactive Spotlight (Hanya di mode gelap) */}
      {isDark && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{ 
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.05), transparent 80%)` 
          }}
        ></div>
      )}

      {/* 3. Static Ambient Glow di sudut */}
      <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#00dce5]/10' : 'bg-[#00dce5]/5'}`}></div>
      <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#D4AF37]/5' : 'bg-transparent'}`}></div>

      {/* ================= KONTEN UTAMA (COMPACT) ================= */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 z-10 flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Kolom Kiri: Brand & Status (Lebar 5 Kolom) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
                   <svg className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Ranaix.
                </span>
              </div>
              <p className={`text-sm max-w-xs leading-relaxed font-light ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Membangun fondasi digital yang tangguh. Menghubungkan teknologi dengan efisiensi operasional.
              </p>
            </div>

            {/* Status Widget (Kecil & Rapi) */}
            <div className={`mt-8 flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm transition-transform hover:scale-[1.02] cursor-default w-fit ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className={`text-[11px] font-mono tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>All Systems Operational</span>
            </div>
          </div>
          
          {/* Kolom Kanan: Navigasi (Lebar 7 Kolom) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-[#D4AF37]' : 'text-gray-900'}`}>Layanan</h4>
              <FooterLink href="/service" label="Integrasi Sistem" isDark={isDark} />
              <FooterLink href="/service" label="Pengembangan" isDark={isDark} />
              <FooterLink href="/service" label="Otomatisasi" isDark={isDark} />
              <FooterLink href="/service" label="UI/UX Experience" isDark={isDark} />
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-500' : 'text-gray-900'}`}>Perusahaan</h4>
              <FooterLink href="/" label="Beranda" isDark={isDark} />
              <FooterLink href="/client" label="Kisah Klien" isDark={isDark} />
              <FooterLink href="/service" label="Layanan Kami" isDark={isDark} />
              <FooterLink href="/contact" label="Hubungi Kami" isDark={isDark} />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-500' : 'text-gray-900'}`}>Legal & Bantuan</h4>
              <FooterLink href="#" label="Pusat Bantuan" isDark={isDark} />
              <FooterLink href="#" label="Syarat & Ketentuan" isDark={isDark} />
              <FooterLink href="#" label="Kebijakan Privasi" isDark={isDark} />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION: Copyright ================= */}
        <div className={`pt-6 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors duration-700 ${
          isDark ? 'border-white/10' : 'border-gray-200'
        }`}>
          
          <div className="flex flex-col gap-0.5">
            <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              © 2026 PT Biometrika Teknologi Indonesia.
            </p>
          </div>

          <div className={`text-xs flex gap-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            <span>Kebagusan, Jakarta Selatan</span>
            <span className="hidden md:inline">•</span>
            <span>Indonesia</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

// ==================== KOMPONEN PENDUKUNG ====================

// Link Footer dengan efek Hover Super Clean (Tidak merusak layout)
function FooterLink({ href, label, isDark }) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-2 text-[13px] w-fit transition-colors duration-300 ${
        isDark ? 'text-gray-400 hover:text-[#00dce5]' : 'text-gray-500 hover:text-[#00dce5]'
      }`}
    >
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
        {label}
      </span>
    </a>
  );
}