import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/useTheme';
import { useCountUp } from '../hooks/useCountUp';
import { HERO, CLIENTS_SECTION, FINAL_CTA } from '../constants/content';

export default function Home() {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const homeRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spotlight mouse tracking
  const handleMouseMove = (e) => {
    if (!homeRef.current) return;
    const rect = homeRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Animasi Background (Partikel Constellation)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 20000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)'; 
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        ctx.fillStyle = 'rgba(0, 220, 229, 0.4)'; 
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.globalAlpha = 1 - dist / 140;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={homeRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen overflow-hidden font-sans selection:bg-[#00dce5]/30 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#F8F9FA] text-gray-900'
      }`}
    >
      {/* CSS Animasi Tambahan (Marquee & Floating) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background & Atmospheres */}
      <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full z-0 ${isDark ? 'opacity-50' : 'opacity-0'}`} />
      <div className={`fixed inset-0 z-0 pointer-events-none ${
        isDark ? 'bg-gradient-to-br from-[#0a0a0a]/90 via-[#111111]/80 to-[#050505]' : 'bg-gradient-to-br from-[#F8F9FA] via-white to-gray-50'
      }`}></div>
      
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}></div>
      <div className={`absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#00dce5]/10' : 'bg-[#00dce5]/5'}`}></div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
             style={{ background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 80%)` }}>
        </div>
      )}

      {/* ==================== HERO SECTION (RATA KIRI DENGAN ILUSTRASI IT DI KANAN) ==================== */}
      <section className="relative z-10 pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Teks Kiri */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-md text-sm font-semibold tracking-wide ${
              isDark ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]' : 'bg-[#00dce5]/10 border border-[#00dce5]/30 text-[#00dce5]'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-[#D4AF37]' : 'bg-[#00dce5]'}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDark ? 'bg-[#D4AF37]' : 'bg-[#00dce5]'}`}></span>
              </span>
              {HERO.tag}
            </div>

            <h1 className={`text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Bangun Sistem <br className="hidden md:block" />
              <span className={isDark ? 'text-[#D4AF37] italic' : 'text-[#00dce5]'}>
                Operasional.
              </span>
            </h1>

            <p className={`text-lg md:text-xl max-w-xl leading-relaxed font-light border-l-4 pl-6 ${
              isDark ? 'text-gray-300 border-[#00dce5]/50' : 'text-gray-600 border-[#00dce5]'
            }`}>
              {HERO.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://wa.me/62817272794?text=Halo%20Ranaix,%20saya%20ingin%20diskusi." target="_blank" rel="noopener noreferrer" 
                 className={`group relative px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                   isDark ? 'bg-[#00dce5] text-[#0a0a0a] hover:bg-white shadow-[0_0_30px_rgba(0,220,229,0.2)]' : 'bg-[#00dce5] text-white hover:bg-teal-500 shadow-lg'
                 }`}>
                {HERO.cta}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>

          {/* Visual Kanan (Ilustrasi IT & Dashboard Overlay) */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="w-full aspect-square relative flex items-center justify-center">
               
               {/* Efek Cahaya di belakang ilustrasi */}
               <div className={`absolute -right-5 top-10 w-64 h-64 rounded-full blur-[100px] ${isDark ? 'bg-[#D4AF37]/30' : 'bg-[#00dce5]/20'}`}></div>
               <div className={`absolute left-0 bottom-10 w-80 h-80 rounded-full blur-[100px] ${isDark ? 'bg-[#00dce5]/30' : 'bg-blue-300/20'}`}></div>
               
               {/* KONTEN ILUSTRASI IT (Mengambang) */}
               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center animate-float">
                  
                  {/* PENTING: Jika kamu sudah mendownload gambar PNG/JPG/SVG sendiri, 
                      hapus komentar kode <img ... /> di bawah ini, lalu hapus tag <svg> yang panjang di bawahnya. */}
                  
                  {/* <img src="/gambar-ilustrasi-it-kamu.png" alt="IT System" className="w-[90%] h-auto object-contain drop-shadow-2xl" /> */}
                  
                  {/* Ilustrasi Vektor IT Bawaan (Server, Cloud, Analytics) */}
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl px-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Garis Jaringan / Koneksi */}
                    <path d="M260 210L320 150" stroke={isDark ? "#ffffff" : "#cbd5e1"} strokeWidth="3" strokeDasharray="6 6"/>
                    <path d="M140 210L80 150" stroke={isDark ? "#ffffff" : "#cbd5e1"} strokeWidth="3" strokeDasharray="6 6"/>
                    <path d="M200 130L200 70" stroke={isDark ? "#ffffff" : "#cbd5e1"} strokeWidth="3" strokeDasharray="6 6"/>

                    {/* Server Utama (Tengah) */}
                    <rect x="130" y="130" width="140" height="160" rx="16" fill={isDark ? "#111111" : "#ffffff"} stroke={isDark ? "#D4AF37" : "#00dce5"} strokeWidth="4"/>
                    <path d="M130 170H270" stroke={isDark ? "#D4AF37" : "#00dce5"} strokeWidth="4"/>
                    <path d="M130 210H270" stroke={isDark ? "#D4AF37" : "#00dce5"} strokeWidth="4"/>
                    <path d="M130 250H270" stroke={isDark ? "#D4AF37" : "#00dce5"} strokeWidth="4"/>
                    
                    {/* Lampu Indikator Server */}
                    <circle cx="155" cy="150" r="5" fill="#00dce5"/>
                    <circle cx="175" cy="150" r="5" fill="#D4AF37"/>
                    <circle cx="155" cy="190" r="5" fill="#00dce5"/>
                    <circle cx="175" cy="190" r="5" fill="#D4AF37"/>
                    <circle cx="155" cy="230" r="5" fill="#00dce5"/>
                    <circle cx="175" cy="230" r="5" fill="#D4AF37"/>

                    {/* Node Atas (Cloud Data) */}
                    <rect x="150" y="20" width="100" height="60" rx="12" fill={isDark ? "#00dce5" : "#00dce5"} fillOpacity="0.15" stroke="#00dce5" strokeWidth="3"/>
                    <path d="M170 50H230M170 40H200" stroke="#00dce5" strokeWidth="4" strokeLinecap="round"/>
                    
                    {/* Node Kanan (Analitik / Chart) */}
                    <rect x="300" y="110" width="70" height="70" rx="12" fill={isDark ? "#D4AF37" : "#D4AF37"} fillOpacity="0.15" stroke="#D4AF37" strokeWidth="3"/>
                    <path d="M315 160V140M335 160V125M355 160V145" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round"/>

                    {/* Node Kiri (Keamanan Sistem) */}
                    <rect x="30" y="110" width="70" height="70" rx="12" fill={isDark ? "#00dce5" : "#00dce5"} fillOpacity="0.15" stroke="#00dce5" strokeWidth="3"/>
                    <path d="M65 130C65 130 55 135 55 145C55 155 65 160 65 160C65 160 75 155 75 145C75 135 65 130 65 130Z" stroke="#00dce5" strokeWidth="3"/>
                  </svg>
               </div>

               {/* Kotak "Target Operasional" (Dibuat sedikit menjorok agar terlihat 3D menimpa ilustrasi) */}
               <div className="absolute bottom-6 -left-8 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
                  <div className={`p-6 w-64 rounded-2xl backdrop-blur-xl border ${isDark ? 'bg-[#111111]/90 border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]' : 'bg-white/95 border-gray-100 shadow-2xl'}`}>
                    <p className={`text-xs mb-2 uppercase tracking-widest font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>SLA Operasional</p>
                    <div className="text-4xl font-bold text-[#00dce5] mb-3">99.9%</div>
                    <div className="w-full bg-gray-500/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00dce5] to-[#D4AF37] h-full w-[95%] relative">
                        <div className="absolute top-0 bottom-0 right-0 w-6 bg-white/40 blur-[2px]"></div>
                      </div>
                    </div>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================== METRICS SECTION ==================== */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-10 mb-24">
         <MetricCounter isDark={isDark} />
      </section>

{/* ==================== TRUSTED BY (Marquee Klien) ==================== */}
<section className="relative z-10 py-20 overflow-hidden">
  {/* Background ambient */}
  <div className={`absolute inset-0 -z-10 transition-colors duration-500 ${isDark ? 'bg-charcoal-dark' : 'bg-[#F8F9FA]'}`}></div>
  
  <div className="max-w-7xl mx-auto px-6">
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 border-y py-10 transition-colors duration-500 backdrop-blur-sm ${
      isDark ? 'border-gold/20 bg-charcoal-dark/50' : 'border-gray-300/50 bg-white/50'
    }`}>
      
      {/* Header Section */}
      <div className="md:w-1/4 text-center md:text-left shrink-0 z-10 relative px-4">
        <div className={`absolute -inset-4 blur-2xl -z-10 transition-opacity duration-500 ${isDark ? 'bg-gold/10' : 'bg-gray-200/40'}`}></div>
        
        {/* Garis Dekoratif */}
        <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-px -translate-y-1/2 ${isDark ? 'bg-gold/50' : 'bg-gray-400'}`}></div>
        
        <span className={`inline-block w-10 h-1 rounded-full mb-3 transition-colors duration-500 ${isDark ? 'bg-gold' : 'bg-gray-800'}`}></span>
        <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-500 font-headline-md ${
          isDark ? 'text-gold' : 'text-gray-900'
        }`}>
          {CLIENTS_SECTION.heading}
        </h3>
        <p className={`text-sm mt-2 font-medium transition-colors duration-500 font-body-md ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Mitra inovasi kami.
        </p>
      </div>
      
      {/* Marquee Section */}
      <div className="md:w-3/4 w-full relative flex overflow-hidden group">
        <div className="flex animate-marquee gap-12 md:gap-20 items-center pr-12 md:pr-20 group-hover:[animation-play-state:paused]">
          {[...CLIENTS_SECTION.logos, ...CLIENTS_SECTION.logos].map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="shrink-0 relative group/logo">
              {/* Glow effect di belakang logo saat hover (Dark Mode) */}
              <div className={`absolute inset-0 blur-xl scale-150 transition-opacity duration-500 opacity-0 group-hover/logo:opacity-100 ${
                isDark ? 'bg-gold/20' : 'bg-transparent'
              }`}></div>
              
              <img 
                src={logo.image} 
                alt={logo.name} 
                className={`relative h-12 md:h-16 w-auto object-contain transition-all duration-500 cursor-pointer
                  group-hover/logo:scale-110
                  ${isDark 
                    ? 'opacity-60 grayscale brightness-0 invert group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:invert-0 group-hover/logo:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'opacity-50 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)]'
                  }`} 
                title={logo.name}
              />
            </div>
          ))}
        </div>
        
        {/* Gradien tepi kanan kiri (Fade out) */}
        <div className={`absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r transition-colors duration-500 ${
          isDark ? 'from-charcoal-dark to-transparent' : 'from-[#F8F9FA] to-transparent'
        }`}></div>
        <div className={`absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l transition-colors duration-500 ${
          isDark ? 'from-charcoal-dark to-transparent' : 'from-[#F8F9FA] to-transparent'
        }`}></div>
      </div>
    </div>
  </div>
</section>

{/* ==================== SOLUSI TEKNOLOGI (Enterprise Grade) ==================== */}
<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-40">
  
  {/* Header: Clean, Left-Aligned, Asymmetric */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
    <div className="md:col-span-7">
      <div className={`flex items-center gap-3 mb-6 transition-colors duration-500 ${isDark ? 'text-tosca' : 'text-primary'}`}>
        <span className="h-px w-8 bg-current"></span>
        <span className="text-xs font-bold tracking-[0.2em] uppercase font-label-sm">Sistem & Skala</span>
      </div>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-headline-md transition-colors duration-500 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Fondasi digital<br/>
        untuk skala{" "}
        <span className={`italic font-normal transition-colors duration-500 ${isDark ? 'text-gold-light' : 'text-primary'}`}>
          global.
        </span>
      </h2>
    </div>
    <div className="md:col-span-5 flex items-end">
      <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 font-body-md ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        Infrastruktur teknologi yang dirancang presisi untuk mengakselerasi pertumbuhan bisnis tanpa kompromi.
      </p>
    </div>
  </div>

{/* Bento Grid: 7/5 Split Structure */}
  <div className={`grid grid-cols-1 md:grid-cols-12 gap-px overflow-hidden rounded-2xl border transition-colors duration-500 ${
    isDark ? 'bg-white/[0.06] border-white/[0.06]' : 'bg-gray-200 border-gray-200'
  }`}>
    
    {/* Kartu 1: Integrasi Sistem (Span 7) */}
    <div className={`group relative md:col-span-7 p-10 md:p-12 transition-colors duration-300 ${
      isDark ? 'bg-charcoal hover:bg-charcoal-dark' : 'bg-white hover:bg-gray-50'
    }`}>
      <div className="flex flex-col h-full justify-between min-h-[280px]">
        <div className="flex justify-between items-start">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-tosca/10 text-tosca' : 'bg-primary/10 text-primary'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          </div>
          <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>01 / 04</span>
        </div>
        
        <div className="mt-12">
          <h3 className={`text-2xl font-semibold mb-3 font-headline-md transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Integrasi Sistem Bisnis</h3>
          <p className={`text-sm md:text-base max-w-md transition-colors duration-300 font-body-md ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Penghubung sistem yang mulus untuk aliran data real-time antar platform tanpa hambatan operasional.
          </p>
        </div>
      </div>
    </div>

    {/* Kartu 2: Pengembangan (Span 5) */}
    <div className={`group relative md:col-span-5 p-10 md:p-12 transition-colors duration-300 ${
      isDark ? 'bg-charcoal hover:bg-charcoal-dark' : 'bg-white hover:bg-gray-50'
    }`}>
      <div className="flex flex-col h-full justify-between min-h-[280px]">
        <div className="flex justify-between items-start">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-gold/10 text-gold' : 'bg-yellow-100 text-yellow-700'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>02 / 04</span>
        </div>
        
        <div className="mt-12">
          <h3 className={`text-2xl font-semibold mb-3 font-headline-md transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Pengembangan Kustom</h3>
          <p className={`text-sm md:text-base max-w-md transition-colors duration-300 font-body-md ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Arsitektur sistem yang dirancang khusus, presisi, dan scalable sesuai kebutuhan bisnis Anda.
          </p>
        </div>
      </div>
    </div>

    {/* Kartu 3: Otomatisasi (Span 5) */}
    <div className={`group relative md:col-span-5 p-10 md:p-12 transition-colors duration-300 ${
      isDark ? 'bg-charcoal hover:bg-charcoal-dark' : 'bg-white hover:bg-gray-50'
    }`}>
      <div className="flex flex-col h-full justify-between min-h-[280px]">
        <div className="flex justify-between items-start">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>03 / 04</span>
        </div>
        
        <div className="mt-12">
          <h3 className={`text-2xl font-semibold mb-3 font-headline-md transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Otomatisasi Operasional</h3>
          <p className={`text-sm md:text-base max-w-md transition-colors duration-300 font-body-md ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Otomatisasi proses rutin untuk memangkas waktu kerja, mengurangi error, dan meningkatkan efisiensi.
          </p>
        </div>
      </div>
    </div>

    {/* Kartu 4: Teknologi Interaktif (Span 7) - Feature Highlight */}
    <div className={`group relative md:col-span-7 p-10 md:p-12 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-charcoal-dark hover:bg-charcoal' : 'bg-gray-50 hover:bg-gray-100'
    }`}>
      {/* Subtle Background Pattern / Glow */}
      <div className={`absolute top-0 right-0 w-1/2 h-full opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_60%)]' 
          : 'bg-[radial-gradient(circle_at_top_right,_rgba(0,220,229,0.1),_transparent_60%)]'
      }`}></div>

      <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
        <div className="flex justify-between items-start">
          <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-gold/15 text-gold-light' : 'bg-primary/10 text-primary'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <span className={`text-xs font-mono tracking-wider transition-colors duration-300 ${
            isDark ? 'text-gold/50' : 'text-primary/50'
          }`}>04 / 04</span>
        </div>
        
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-3">
            <h3 className={`text-2xl md:text-3xl font-semibold font-headline-md transition-colors duration-300 ${
              isDark ? 'text-gold-light' : 'text-gray-900'
            }`}>Teknologi Interaktif (UX)</h3>
          </div>
          <p className={`text-sm md:text-base max-w-lg transition-colors duration-300 font-body-md ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Mengubah pengalaman pengguna menjadi lebih cerdas dan intuitif. Fokus pada mikro-interaksi yang menciptakan kesan premium di setiap sentuhan layar.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ==================== DEEP DIVE (MODERN GLASSMORPHISM DASHBOARD) ==================== */}
      <section className="relative z-10 py-32 overflow-hidden">
        {/* Latar Belakang Ambient Glow */}
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00dce5]/5 via-transparent to-transparent' : 'bg-gray-50'}`}></div>
        
        {/* Header (Teks 100% sama dengan aslimu) */}
        <div className="relative max-w-5xl mx-auto px-6 text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Aktivitas Terstruktur, <br className="hidden md:block"/>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-gray-500 to-gray-400' : 'from-gray-400 to-gray-600'}`}>
              Keputusan Lebih Cepat.
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Dashboard terpusat yang mengumpulkan data dari seluruh divisi. Pantau performa dan respon insiden dalam hitungan detik.
          </p>
        </div>

        {/* Dashboard Mockup (Gaya UI Modern/Apple-like) */}
        <div className="relative max-w-6xl mx-auto px-6 group">
          
          {/* Efek Glow di belakang Dashboard saat kursor mendekat */}
          <div className="absolute inset-0 bg-[#00dce5]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
          
          {/* Container Utama Dashboard */}
          <div className={`relative rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-3xl border transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,220,229,0.15)] ${
            isDark ? 'bg-[#0a0a0a]/80 border-white/10' : 'bg-white/90 border-gray-200'
          }`}>
             
             {/* Window Controls (Teks dan tombol sama persis) */}
             <div className="flex items-center gap-2 mb-10 border-b border-gray-500/20 pb-5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                <div className={`ml-4 text-xs font-mono tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  ranaix-central/operations
                </div>
             </div>

             {/* Grid Konten (Tiga Panel) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Panel 1: POS Sales */}
                <div className={`p-6 md:p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/[0.02] border-white/5 hover:border-[#00dce5]/40 hover:bg-white/[0.04]' : 'bg-gray-50 border-gray-100 hover:border-[#00dce5] hover:shadow-xl'}`}>
                  <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[40px] rounded-full pointer-events-none ${isDark ? 'bg-[#00dce5]/20' : 'bg-blue-200/50'}`}></div>
                  <div className={`text-sm font-medium mb-2 relative z-10 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>POS Sales</div>
                  <div className="text-4xl md:text-5xl font-bold text-[#00dce5] relative z-10 tracking-tight">Rp 4.2M</div>
                  
                  {/* Animasi Bar Chart */}
                  <div className="mt-8 flex items-end gap-2.5 h-24 relative z-10">
                    {[30, 50, 40, 70, 60, 100].map((h, i) => (
                      <div key={i} className="group/bar relative w-full h-full flex items-end cursor-pointer">
                        <div 
                          className={`w-full rounded-t-md transition-all duration-300 ${isDark ? 'bg-[#00dce5]/30 group-hover/bar:bg-[#00dce5] group-hover/bar:shadow-[0_0_15px_rgba(0,220,229,0.8)]' : 'bg-[#00dce5]/50 group-hover/bar:bg-[#00dce5]'}`} 
                          style={{height: `${h}%`}}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Panel 2: Inventory Sync */}
                <div className={`p-6 md:p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/[0.02] border-white/5 hover:border-[#D4AF37]/40 hover:bg-white/[0.04]' : 'bg-gray-50 border-gray-100 hover:border-[#D4AF37] hover:shadow-xl'}`}>
                  <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[40px] rounded-full pointer-events-none ${isDark ? 'bg-[#D4AF37]/20' : 'bg-yellow-200/50'}`}></div>
                  <div className={`text-sm font-medium mb-2 relative z-10 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Inventory Sync</div>
                  <div className={`text-4xl md:text-5xl font-bold tracking-tight relative z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>98.5%</div>
                  
                  {/* Progress Bars Beranimasi */}
                  <div className="mt-12 space-y-5 relative z-10">
                    <div className="w-full bg-gray-500/20 h-3 rounded-full overflow-hidden">
                       <div className="bg-[#D4AF37] h-full w-3/4 rounded-full relative shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                         {/* Shine Effect */}
                         <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden rounded-full">
                           <div className="w-10 h-full bg-white/30 blur-[2px] -skew-x-12 animate-[translateX_2s_infinite_ease-in-out]"></div>
                         </div>
                       </div>
                    </div>
                    <div className="w-full bg-gray-500/20 h-3 rounded-full overflow-hidden">
                       <div className="bg-[#00dce5] h-full w-1/2 rounded-full relative shadow-[0_0_10px_rgba(0,220,229,0.5)]">
                         <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden rounded-full">
                           <div className="w-10 h-full bg-white/30 blur-[2px] -skew-x-12 animate-[translateX_2s_infinite_ease-in-out_0.5s]"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Panel 3: Quote / Testimoni */}
                <div className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#D4AF37]/5 border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]' : 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:shadow-xl'}`}>
                   {/* Ikon Kutip Dekoratif */}
                   <div className="absolute -right-2 -top-2 opacity-10 pointer-events-none">
                     <svg className="w-32 h-32 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
                   </div>
                   
                   <p className={`text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic ${isDark ? 'text-[#D4AF37]' : 'text-yellow-800'}`}>
                     "Koordinasi lancar antar cabang dan gudang dalam satu platform."
                   </p>
                </div>
                
             </div>
          </div>
        </div>

        {/* Keyframe Injector untuk animasi kilauan bar progress */}
        <style>{`
          @keyframes translateX {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
        `}</style>
      </section>

{/* ==================== FINAL CTA (ULTRA MODERN) ==================== */}
      <section className="relative z-10 py-32 px-6 max-w-6xl mx-auto text-center">
        
        {/* Container Cinematic Card */}
        <div className={`relative p-12 md:p-24 rounded-[3rem] overflow-hidden group transition-all duration-700 ${
          isDark 
            ? 'bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]' 
            : 'bg-white/60 backdrop-blur-3xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
        }`}>
          
          {/* Animated Background Mesh/Glow (Bereaksi saat di-hover) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-50 blur-[100px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 ${
            isDark 
              ? 'bg-gradient-to-br from-[#00dce5]/20 via-transparent to-[#D4AF37]/20' 
              : 'bg-gradient-to-br from-[#00dce5]/15 via-transparent to-teal-300/20'
          }`}></div>

          {/* Elemen Dekoratif Geometris Tipis di Sudut */}
          <div className={`absolute -left-20 -top-20 w-64 h-64 border rounded-full blur-[2px] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${isDark ? 'border-[#00dce5]' : 'border-[#00dce5]'}`}></div>
          <div className={`absolute -right-20 -bottom-20 w-80 h-80 border border-dashed rounded-full blur-[2px] opacity-20 pointer-events-none transition-transform duration-700 group-hover:rotate-12 ${isDark ? 'border-[#D4AF37]' : 'border-teal-500'}`}></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Top Label Pill */}
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 backdrop-blur-md shadow-sm ${
              isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-[#D4AF37]' : 'bg-[#00dce5]'}`}></span>
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Langkah Selanjutnya</span>
            </div>

            {/* Headline Raksasa dengan Teks Gradasi */}
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Siap untuk <br/> 
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-[#00dce5] to-[#D4AF37]' : 'from-[#00dce5] to-teal-500'
              }`}>
                Pertumbuhan Baru?
              </span>
            </h2>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {FINAL_CTA.description}
            </p>
            
            {/* Ultra Modern Premium Button */}
            <a href={FINAL_CTA.whatsappLink} target="_blank" rel="noopener noreferrer" 
               className={`group/btn relative inline-flex items-center gap-4 pl-8 pr-3 py-3 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden hover:scale-105 ${
                 isDark 
                   ? 'bg-white text-[#0a0a0a] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]' 
                   : 'bg-gray-900 text-white shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]'
               }`}>
               
              {/* Efek Kilauan (Shine) Khas Web Modern */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[800ms] z-0 pointer-events-none"></div>
              
              <span className="relative z-10 flex items-center gap-4">
                {FINAL_CTA.cta}
                {/* Ikon dalam Lingkaran */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 ${
                  isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

// Animated Metric Counter Component
function MetricCounter({ isDark }) {
  const { elementRef: ref1, displayValue: value1 } = useCountUp(60, 2000, '%');
  const { elementRef: ref2, displayValue: value2 } = useCountUp(2, 2000, 'x');
  const { elementRef: ref3, displayValue: value3 } = useCountUp(5, 2000, 'x');

  return (
    <div className={`w-full rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl border flex flex-col md:flex-row justify-between items-center gap-8 ${
      isDark ? 'bg-[#111111]/80 border-[#D4AF37]/20' : 'bg-white border-gray-200'
    }`}>
      
      <div className="flex-1 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-500/20 pb-6 md:pb-0 md:pr-6">
        <div ref={ref1} className={`text-5xl lg:text-6xl font-bold tracking-tight mb-2 ${isDark ? 'text-[#D4AF37]' : 'text-[#00dce5]'}`}>
          {value1}
        </div>
        <p className={`text-sm uppercase tracking-widest font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Kecepatan Registrasi</p>
      </div>

      <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray-500/20 pb-6 md:pb-0 px-6">
        <div ref={ref2} className={`text-5xl lg:text-6xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {value2}
        </div>
        <p className={`text-sm uppercase tracking-widest font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Kapasitas Pemain</p>
      </div>

      <div className="flex-1 text-center md:text-right pt-2 md:pt-0 md:pl-6">
        <div ref={ref3} className={`text-5xl lg:text-6xl font-bold tracking-tight mb-2 ${isDark ? 'text-[#00dce5]' : 'text-yellow-500'}`}>
          {value3}
        </div>
        <p className={`text-sm uppercase tracking-widest font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Peningkatan Peserta</p>
      </div>

    </div>
  );
}