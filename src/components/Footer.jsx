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
          <div className="flex items-center gap-6">
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

          {/* Social Media SVGs (3D Hover Popout) */}
          <div className="flex gap-4" style={{ perspective: '1000px' }}>
            <SocialIcon isDark={isDark}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </SocialIcon>
            <SocialIcon isDark={isDark}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
            </SocialIcon>
            <SocialIcon isDark={isDark}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            </SocialIcon>
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

// Komponen Ikon Sosial (3D Popout on Hover)
function SocialIcon({ children, isDark }) {
  return (
    <a
      href="#"
      className={`group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 [transform:translateZ(0)] hover:[transform:translateY(-4px)] ${
        isDark
          ? 'bg-white/[0.03] border border-white/10 text-gray-500 hover:text-[#050505] hover:bg-[#00dce5] hover:border-[#00dce5] hover:shadow-[0_10px_20px_rgba(0,220,229,0.3)]'
          : 'bg-gray-200 border border-gray-300 text-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-700 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </a>
  );
}