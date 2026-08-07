import { useRef, useState } from 'react';
import { useTheme } from '../context/useTheme';
import { CLIENT_STORIES, FINAL_CTA } from '../constants/content';

export default function Client() {
  const { isDark } = useTheme();
  const clients = CLIENT_STORIES;
  const clientRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!clientRef.current) return;
    const rect = clientRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={clientRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen overflow-hidden font-sans selection:bg-[#00dce5]/30 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#F8F9FA] text-gray-900'
      }`}
    >
      
      {/* ==================== BACKGROUND AMBIENT ==================== */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
        isDark
          ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] opacity-[0.03]'
          : 'bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] opacity-[0.03]'
      }`} style={{ backgroundSize: '4rem 4rem' }}></div>

      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[150px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#00dce5]/10' : 'bg-[#00dce5]/5'}`}></div>
      <div className={`absolute bottom-0 right-[-200px] w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}></div>

      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.05), transparent 80%)`
          }}
        ></div>
      )}

{/* ==================== HERO SECTION (Dengan Floating UI & Ornamen) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-32 text-center flex flex-col items-center">
        
        {/* CSS Injector untuk Animasi Melayang */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-slower {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }
        `}</style>

        {/* Ornamen & Floating Elements (Hanya muncul di Desktop agar Mobile tetap rapi) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
           
           {/* Widget Kiri Atas: Uptime / Keandalan */}
           <div className={`absolute top-[18%] left-[8%] p-3.5 rounded-2xl backdrop-blur-xl border shadow-2xl animate-[float-slow_6s_ease-in-out_infinite] ${
             isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'
           }`}>
             <div className="flex items-center gap-3">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <div className="text-left pr-2">
                 <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Sistem Operasional</p>
                 <p className={`text-sm font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>99.9% Uptime</p>
               </div>
             </div>
           </div>

           {/* Widget Kanan Bawah: Verified Success */}
           <div className={`absolute bottom-[22%] right-[6%] p-3.5 rounded-2xl backdrop-blur-xl border shadow-2xl animate-[float-slower_7s_ease-in-out_infinite_reverse] ${
             isDark ? 'bg-[#111111]/80 border-[#D4AF37]/30' : 'bg-white/90 border-yellow-200'
           }`}>
             <div className="flex items-center gap-3">
               <div className="text-right pl-2">
                 <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Mitra Terverifikasi</p>
                 <p className={`text-sm font-black tracking-tight ${isDark ? 'text-[#D4AF37]' : 'text-yellow-600'}`}>Enterprise Scale</p>
               </div>
               <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${isDark ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-yellow-100 text-yellow-600'}`}>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
               </div>
             </div>
           </div>

           {/* Ornamen Geometris Lingkaran Berputar */}
           <div className={`absolute top-[12%] right-[12%] w-24 h-24 rounded-full border-[3px] border-dashed animate-[spin_25s_linear_infinite] opacity-30 ${isDark ? 'border-[#D4AF37]' : 'border-yellow-500'}`}></div>
           
           {/* Ornamen Grid Titik-titik */}
           <div className={`absolute bottom-[18%] left-[10%] opacity-20 ${isDark ? "text-white" : "text-gray-900"}`}>
              <svg width="80" height="80" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="2.5"/> <circle cx="25" cy="5" r="2.5"/> <circle cx="45" cy="5" r="2.5"/>
                <circle cx="5" cy="25" r="2.5"/> <circle cx="25" cy="25" r="2.5"/> <circle cx="45" cy="25" r="2.5"/>
                <circle cx="5" cy="45" r="2.5"/> <circle cx="25" cy="45" r="2.5"/> <circle cx="45" cy="45" r="2.5"/>
              </svg>
           </div>
        </div>

        {/* ================= Konten Utama (Teks) ================= */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Glow Teks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00dce5]/5 via-transparent to-[#D4AF37]/5 blur-[60px] -z-10 pointer-events-none"></div>

          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 cursor-default ${
            isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-blue-50/80 border-blue-200 text-blue-700'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-[#00dce5]' : 'bg-blue-600'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-[#00dce5]' : 'bg-blue-600'}`}></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Client Success Stories</span>
          </div>

          <h1 className={`text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-8 relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Transformasi Nyata,<br className="hidden md:block"/>
            <span className={`relative inline-block mt-2 md:mt-0 italic font-normal text-transparent bg-clip-text bg-gradient-to-r ${
              isDark ? 'from-[#00dce5] via-white to-[#D4AF37]' : 'from-[#00dce5] via-blue-500 to-teal-600'
            }`}>
              {' '}Hasil Terukur.
            </span>
          </h1>
          
          <p className={`text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light relative ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Kami tidak hanya membangun sistem. Kami mengubah cara bisnis beroperasi. Lihat bagaimana Ranaix memberdayakan mitra kami.
          </p>

          {/* Geometric Divider */}
          <div className="mt-12 flex items-center justify-center gap-3 opacity-50">
             <div className={`w-12 h-px bg-gradient-to-r from-transparent ${isDark ? 'to-[#00dce5]' : 'to-blue-500'}`}></div>
             <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#D4AF37]' : 'bg-teal-500'}`}></div>
             <div className={`w-12 h-px bg-gradient-to-l from-transparent ${isDark ? 'to-[#D4AF37]' : 'to-teal-500'}`}></div>
          </div>
        </div>
      </section>

      {/* ==================== DYNAMIC CLIENT SHOWCASE ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32 space-y-32 md:space-y-48">
        
        {clients.map((client, index) => (
          <div key={client.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

            {/* Visual Klien (Kiri/Kanan bergantian) - Span 7 */}
            <div className={`relative group w-full lg:col-span-7 h-[450px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              
              {/* Ambient Glow di belakang Mockup */}
              <div className={`absolute inset-0 blur-[80px] rounded-full transition-opacity duration-700 opacity-40 group-hover:opacity-70 ${
                index % 2 === 0 ? 'bg-[#00dce5]/30' : 'bg-[#D4AF37]/20'
              }`}></div>
              
              {/* Mac-style Window Mockup Container */}
              <div className={`relative rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl border transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,220,229,0.15)] overflow-hidden h-full flex flex-col ${
                isDark ? 'bg-[#0a0a0a]/90 border-white/10' : 'bg-gray-900 border-gray-800' // Mockup selalu tema gelap agar terlihat seperti dashboard pro
              }`}>
                
                {/* macOS Controls */}
                <div className="flex items-center gap-2 mb-6 border-b pb-4 opacity-70 border-gray-500/30 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <div className="ml-3 text-[10px] font-mono tracking-widest uppercase text-gray-400">
                    terminal_{client.id}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center relative z-10 w-full h-full overflow-hidden">
                  {/* Foto asli jika ada */}
                  {client.image ? (
                    <img src={client.image} alt={client.title} className="w-full h-full object-cover rounded-xl" />
                  ) : 
                  
                  /* MOCKUP 1: CLINIC (MS GLOW) */
                  client.mockup === 'clinic' && (
                    <div className="space-y-4 w-full">
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <div className="text-xs text-gray-400 font-mono">ms-glow/clinic-dashboard</div>
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                          <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Live</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {["Registrasi", "Inventory", "Payment"].map((cat) => (
                          <div key={cat} className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                            <div className="text-xs text-gray-400 mb-2">{cat}</div>
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                               <div className="h-full bg-gradient-to-r from-[#00dce5] to-teal-400 w-[80%] rounded-full"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-end gap-3 h-32">
                        {[40, 60, 45, 80, 65, 90, 70].map((h, i) => (
                          <div key={i} className="group/bar relative w-full h-full flex items-end">
                             <div className="w-full bg-gradient-to-t from-[#00dce5]/20 to-[#00dce5]/70 rounded-t-sm transition-all duration-300 hover:opacity-80" style={{height: `${h}%`}}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MOCKUP 2: KIDZANIA */}
                  {client.mockup === 'kidzania' && (
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                      <div className="grid grid-cols-4 gap-4 w-full px-4">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="aspect-square rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                        ))}
                      </div>
                      <div className="text-center bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md">
                        <div className="text-3xl font-black text-white flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span> 8 / 8
                        </div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Terminal Games Aktif</div>
                      </div>
                    </div>
                  )}

                  {/* MOCKUP 3: RUANG NGAJI */}
                  {client.mockup === 'ngaji' && (
                    <div className="space-y-6 w-full">
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <div className="text-xs text-gray-400 font-mono">ruang-ngaji/admin</div>
                        <div className="px-3 py-1 bg-[#00dce5]/10 text-[#00dce5] border border-[#00dce5]/30 rounded-full text-[10px] font-bold uppercase tracking-wider">Kelas Berlangsung</div>
                      </div>
                      <div className="bg-white/5 border border-white/5 p-6 rounded-3xl flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-bold">Total Peserta Aktif</div>
                          <div className="text-5xl font-black text-white">1,245</div>
                        </div>
                        <div className="relative w-20 h-20">
                           <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                           <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00dce5] border-r-[#00dce5] animate-spin" style={{animationDuration: '2s'}}></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl h-24 flex items-end gap-2">
                          <div className="w-full bg-gradient-to-t from-[#00dce5]/20 to-[#00dce5]/40 rounded-t-sm" style={{height: '40%'}}></div>
                          <div className="w-full bg-gradient-to-t from-[#00dce5]/20 to-[#00dce5]/70 rounded-t-sm" style={{height: '70%'}}></div>
                          <div className="w-full bg-gradient-to-t from-[#00dce5]/20 to-[#00dce5] rounded-t-sm shadow-[0_0_15px_rgba(0,220,229,0.5)]" style={{height: '100%'}}></div>
                        </div>
                        <div className="bg-[#00dce5]/10 border border-[#00dce5]/20 p-5 rounded-2xl flex flex-col justify-center">
                          <div className="text-xs text-[#00dce5] mb-1 uppercase tracking-widest font-bold">Skalabilitas Auto</div>
                          <div className="text-3xl font-black text-white">500%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MOCKUP 4: J99 LOGISTICS */}
                  {client.mockup === 'j99' && (
                    <div className="space-y-6 w-full">
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <div className="text-xs text-gray-400 font-mono">j99-corp/logistics</div>
                      </div>
                      <div className="relative h-44 bg-black/40 border border-white/5 rounded-3xl flex items-center justify-center p-4 overflow-hidden">
                        {/* Garis Jaringan Animasi */}
                        <svg className="absolute inset-0 w-full h-full opacity-30">
                          <line x1="25%" y1="33%" x2="75%" y2="25%" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" className="animate-[stroke-dashoffset_20s_linear_infinite]" />
                          <line x1="75%" y1="25%" x2="50%" y2="75%" stroke="#00dce5" strokeWidth="2" />
                          <line x1="50%" y1="75%" x2="25%" y2="33%" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                        {/* Nodes */}
                        <div className="absolute w-3 h-3 bg-[#00dce5] rounded-full left-1/4 top-1/3 shadow-[0_0_15px_#00dce5]"></div>
                        <div className="absolute w-3 h-3 bg-white rounded-full right-1/4 top-1/4 shadow-[0_0_15px_white]"></div>
                        <div className="absolute w-3 h-3 bg-[#D4AF37] rounded-full left-1/2 bottom-1/4 shadow-[0_0_15px_#D4AF37]"></div>
                        
                        <div className="relative z-10 bg-[#111111]/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                           <span className="text-xs font-bold text-white uppercase tracking-widest">Sistem Terkoordinasi</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {["Gudang", "Sales", "Logistik"].map((div) => (
                          <div key={div} className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center flex flex-col items-center">
                            <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">{div}</div>
                            <div className="w-2 h-2 bg-[#00dce5] rounded-full shadow-[0_0_10px_#00dce5] mt-1"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Teks Konten Klien (Kanan/Kiri bergantian) - Span 5 */}
            <div className={`space-y-8 lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
              
              <div>
                <span className={`text-sm font-bold block tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-[#D4AF37]' : 'text-[#00dce5]'}`}>
                  {client.name}
                </span>
                <h2 className={`text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {client.title}
                </h2>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {client.description}
              </p>

              {/* Data Metrik Klien */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                {client.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className={`text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent mb-2 ${
                      isDark ? 'bg-gradient-to-br from-white via-gray-300 to-gray-500' : 'bg-gradient-to-br from-gray-900 via-[#00dce5] to-teal-700'
                    }`}>
                      {metric.value}
                    </div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{metric.label}</p>
                  </div>
                ))}
              </div>

              {client.whatsappLink && (
                <div className="pt-4">
                  <a href={client.whatsappLink} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 border-transparent ${
                    isDark ? 'text-[#00dce5] hover:border-[#00dce5]' : 'text-blue-600 hover:border-blue-600'
                  }`}>
                    Konsultasi Kasus Serupa
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        ))}

      </section>

      {/* ==================== FINAL CTA (Cinematic Glass Card) ==================== */}
      <section className="relative z-10 py-32 px-6 max-w-6xl mx-auto text-center border-t border-white/[0.05]">
        
        <div className={`relative p-12 md:p-24 rounded-[3rem] overflow-hidden group transition-all duration-700 ${
          isDark 
            ? 'bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]' 
            : 'bg-white/60 backdrop-blur-3xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
        }`}>
          
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-50 blur-[100px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 ${
            isDark ? 'bg-gradient-to-br from-[#00dce5]/20 via-transparent to-[#D4AF37]/20' : 'bg-gradient-to-br from-[#00dce5]/15 via-transparent to-teal-300/20'
          }`}></div>

          <div className={`absolute -left-20 -top-20 w-64 h-64 border rounded-full blur-[2px] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${isDark ? 'border-[#00dce5]' : 'border-[#00dce5]'}`}></div>
          <div className={`absolute -right-20 -bottom-20 w-80 h-80 border border-dashed rounded-full blur-[2px] opacity-20 pointer-events-none transition-transform duration-700 group-hover:rotate-12 ${isDark ? 'border-[#D4AF37]' : 'border-teal-500'}`}></div>

          <div className="relative z-10 flex flex-col items-center">
            
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 backdrop-blur-md shadow-sm ${
              isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-[#D4AF37]' : 'bg-[#00dce5]'}`}></span>
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Langkah Selanjutnya</span>
            </div>

            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ingin menjadi <br/> 
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-[#00dce5] to-[#D4AF37]' : 'from-[#00dce5] to-teal-500'
              }`}>
                cerita sukses berikutnya?
              </span>
            </h2>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Mari diskusikan bagaimana Ranaix dapat mengintegrasikan dan mengoptimalkan sistem operasional bisnis Anda.
            </p>
            
            <a href={FINAL_CTA.whatsappLink} target="_blank" rel="noopener noreferrer" 
               className={`group/btn relative inline-flex items-center gap-4 pl-8 pr-3 py-3 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden hover:scale-105 ${
                 isDark ? 'bg-white text-[#0a0a0a] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]' : 'bg-gray-900 text-white shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]'
               }`}>
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[800ms] z-0 pointer-events-none"></div>
              <span className="relative z-10 flex items-center gap-4">
                {FINAL_CTA.cta}
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