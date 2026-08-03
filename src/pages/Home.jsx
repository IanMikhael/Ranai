import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef(null);

  // Animasi Background: Constellation / Network Nodes
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
      ctx.strokeStyle = 'rgba(0, 220, 229, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        ctx.fillStyle = 'rgba(99, 247, 255, 0.4)';
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
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00dce5]/30">
      
      {/* Background Canvas & Atmosphere */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-40" />
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/90 to-[#050505] pointer-events-none"></div>
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00dce5]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-sm font-medium text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dce5]"></span>
            </span>
            System Integration & Operational Platform
          </div>

          {/* Menyesuaikan Judul dari Gambar 1 */}
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold tracking-tighter leading-[0.9]">
            Bangun Sistem Operasional<br/>
            <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
              yang Lebih Produktif
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Ranaix membantu organisasi merancang dan mengintegrasikan sistem informasi untuk meningkatkan visibilitas operasional, mempercepat pengambilan keputusan, dan menjaga stabilitas bisnis.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Diskusikan Kebutuhan Sistem Anda
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="px-8 py-4 text-white font-semibold hover:text-[#00dce5] transition-all duration-300 flex items-center gap-2 group">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00dce5] group-hover:bg-[#00dce5]/10 transition-all">
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
              </span>
              Lihat Solusi Kami
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest">
          SCROLL
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ==================== TRUSTED BY (Klien) ==================== */}
      <section className="relative z-10 py-12 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-gray-500 font-medium tracking-widest uppercase">Dipercaya oleh Brand Terkemuka</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500 font-semibold text-xl text-gray-400">
            <span>MS GLOW</span>
            <span className="italic">Kidzania</span>
            <span className="tracking-widest">RUANG NGAJI</span>
            <span>J99 CORP</span>
            <span>Biometrika</span>
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID (Solusi Teknologi - Gambar 7) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="mb-20 max-w-3xl">
          <span className="text-[#00dce5] text-sm font-semibold mb-4 block tracking-widest uppercase">Solusi Teknologi untuk Operasional</span>
          <h2 className="text-5xl md:text-6xl text-white font-bold leading-[1.05] tracking-tight">
            Fondasi digital untuk skala global.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          
          {/* Card 1: Besar (Integrasi) */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#00dce5]/30">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00dce5]/10 blur-[100px] rounded-full group-hover:bg-[#00dce5]/20 transition-all duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Integrasi Sistem Bisnis</h3>
              <p className="text-gray-400 max-w-md">Penghubung sistem yang mulus untuk aliran data real-time antar platform tanpa hambatan.</p>
            </div>
            
            {/* Mockup Visualisasi Node Garis */}
            <div className="relative z-10 grid grid-cols-3 gap-2 h-1/2 mt-8">
              {[40, 70, 30, 90, 50, 80, 60, 100, 45].map((h, i) => (
                <div key={i} className="flex items-end">
                  <div className="w-full bg-gradient-to-t from-[#00dce5]/20 to-[#00dce5]/80 rounded-sm transition-all duration-500 group-hover:from-[#00dce5]/40 group-hover:to-white" style={{height: `${h}%`}}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Pengembangan */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.04] hover:border-white/30">
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pengembangan</h3>
              <p className="text-gray-400 text-sm">Bangun sistem custom sesuai kebutuhan bisnis.</p>
            </div>
          </div>

          {/* Card 3: Otomatisasi */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.04] hover:border-[#b6c4ff]/30">
            <div className="w-12 h-12 flex items-center justify-center bg-[#b6c4ff]/5 rounded-2xl border border-[#b6c4ff]/10">
              <svg className="w-6 h-6 text-[#b6c4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Otomatisasi</h3>
              <p className="text-gray-400 text-sm">Otomatisasi proses rutin operasional Anda.</p>
            </div>
          </div>

          {/* Card 4: Experience */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00dce5]/5 to-transparent border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between transition-all duration-500 hover:border-[#00dce5]/40">
            <div className="text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Teknologi Interaktif (Experience)</h3>
              <p className="text-gray-400 text-sm max-w-xs">Mengubah pengalaman pengguna menjadi lebih cerdas.</p>
            </div>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00dce5] border-r-[#00dce5] animate-spin" style={{animationDuration: '3s'}}></div>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#00dce5]">UX</div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== DEEP DIVE (Penggunaan - Gambar 8,9,10) ==================== */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#00dce5] text-sm font-semibold block tracking-widest uppercase">Penggunaan Sistem</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Aktivitas Lebih Terstruktur,<br/>
              <span className="text-gray-600">Keputusan Lebih Cepat.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dashboard terpusat yang mengumpulkan data dari seluruh divisi dan cabang. Pantau performa, deteksi anomali, dan respon insiden dalam hitungan detik.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Pemantauan: Visibilitas bisnis (POS & Inventory) real-time', 
                'Sinkronisasi: Koordinasi lancar antar cabang dan gudang', 
                'Analisis: Keputusan tepat berbasis data terintegrasi'
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-[#00dce5]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#00dce5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup UI Dashboard */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00dce5]/20 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            <div className="relative bg-[#0a0a10] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="flex items-center gap-2 pb-4 border-b border-white/5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 text-xs text-gray-500 font-mono">ranaix-central/operations</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">POS Sales (Pemantauan)</div>
                  <div className="text-2xl font-bold text-[#00dce5]">Rp 4.2M</div>
                  <div className="mt-3 h-10 flex items-end gap-1">
                    <div className="w-full bg-[#00dce5]/30 rounded-sm" style={{height: '40%'}}></div>
                    <div className="w-full bg-[#00dce5]/30 rounded-sm" style={{height: '60%'}}></div>
                    <div className="w-full bg-[#00dce5]/30 rounded-sm" style={{height: '80%'}}></div>
                    <div className="w-full bg-[#00dce5]/30 rounded-sm" style={{height: '50%'}}></div>
                    <div className="w-full bg-[#00dce5]/60 rounded-sm" style={{height: '100%'}}></div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Inventory Sync</div>
                  <div className="text-2xl font-bold text-white">98.5%</div>
                  <div className="mt-4 space-y-2">
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#b6c4ff] h-full w-3/4"></div></div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#00dce5] h-full w-1/2"></div></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/5 p-4 rounded-xl h-24 flex items-end gap-2">
                {[30, 50, 40, 70, 60, 90, 80, 100, 75].map((h, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-[#00dce5]/10 to-white/40 rounded-sm" style={{height: `${h}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== METRICS SECTION (Dampak Klien - Gambar 3,4,5,6) ==================== */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-[#00dce5] text-sm font-semibold mb-4 block tracking-widest uppercase">Dampak Nyata</span>
          <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight tracking-tight max-w-2xl mx-auto">
            Hasil yang terukur untuk mitra kami.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-b border-white/10 py-16">
          <div className="space-y-2 p-4 hover:bg-white/[0.02] rounded-2xl transition-colors duration-300">
            <div className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">60%</div>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Kecepatan Registrasi (MS Glow)</p>
          </div>
          <div className="space-y-2 p-4 hover:bg-white/[0.02] rounded-2xl transition-colors duration-300 md:border-x md:border-white/10">
            <div className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">2x</div>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Kapasitas Pemain (Kidzania)</p>
          </div>
          <div className="space-y-2 p-4 hover:bg-white/[0.02] rounded-2xl transition-colors duration-300">
            <div className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">5x</div>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Peningkatan Peserta (Ruang Ngaji)</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/client" className="group text-white font-medium flex items-center gap-2 justify-center hover:text-[#00dce5] transition-colors duration-300">
            Lihat Semua Client Story
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* ==================== FINAL CTA (Gambar 11) ==================== */}
      <section className="relative z-10 py-48 flex flex-col items-center text-center px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00dce5]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] max-w-5xl mb-8">
          Bangun Sistem yang Mendukung<br/>
          <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
            Pertumbuhan Bisnis.
          </span>
        </h2>
        <p className="relative text-xl text-gray-400 max-w-xl mb-12 font-light">
          Konsultasikan kebutuhan sistem operasional Anda bersama tim ahli Ranaix.
        </p>
        <button className="relative group bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
          Diskusikan Sistem Anda
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          </span>
        </button>
      </section>

    </div>
  );
}