import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import { SERVICES_SECTION, USAGE_SECTION, SERVICE_HOW_WE_WORK, FINAL_CTA } from '../constants/content';

export default function Service() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('monitoring');
  const [isLoaded, setIsLoaded] = useState(false);
  const serviceRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Trigger initial animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mouse Tracking untuk Spotlight
  const handleMouseMove = (e) => {
    if (!serviceRef.current) return;
    const rect = serviceRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const serviceIcons = [
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.828 2.828" />
  ];

  const services = SERVICES_SECTION.services.map((service, i) => ({
    ...service,
    icon: serviceIcons[i]
  }));

  const tabs = USAGE_SECTION.tabs;

  return (
    <div
      ref={serviceRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen overflow-hidden font-sans selection:bg-[#00dce5]/30 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#F8F9FA] text-gray-900'
      }`}
    >
      {/* CSS Animasi Internal yang sangat halus */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>
      
      {/* ==================== BACKGROUND AMBIENT ==================== */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
        isDark
          ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] opacity-[0.03]'
          : 'bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] opacity-[0.03]'
      }`} style={{ backgroundSize: '4rem 4rem' }}></div>

      <div className={`absolute top-0 right-0 w-[800px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}></div>
      <div className={`absolute top-40 left-[-200px] w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 ${isDark ? 'bg-[#00dce5]/10' : 'bg-[#00dce5]/5'}`}></div>

      {isDark && (
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
             style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.05), transparent 80%)` }}>
        </div>
      )}

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-32 text-center flex flex-col items-center">
        
        {/* Floating UI & Ornamen (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
           <div className={`absolute top-[15%] left-[8%] p-3.5 rounded-2xl backdrop-blur-xl border shadow-2xl animate-[float-slow_6s_ease-in-out_infinite] ${
             isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'
           }`}>
             <div className="flex items-center gap-3">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${isDark ? 'bg-[#00dce5]/20 text-[#00dce5]' : 'bg-blue-100 text-blue-600'}`}>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
               </div>
               <div className="text-left pr-2">
                 <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Koneksi API</p>
                 <p className={`text-sm font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Synced</p>
               </div>
             </div>
           </div>

           <div className={`absolute bottom-[25%] right-[5%] p-3.5 rounded-2xl backdrop-blur-xl border shadow-2xl animate-[float-slower_7s_ease-in-out_infinite_reverse] ${
             isDark ? 'bg-[#111111]/80 border-[#D4AF37]/30' : 'bg-white/90 border-yellow-200'
           }`}>
             <div className="flex items-center gap-3">
               <div className="text-right pl-2">
                 <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Background Task</p>
                 <p className={`text-sm font-black tracking-tight ${isDark ? 'text-[#D4AF37]' : 'text-yellow-600'}`}>Automated</p>
               </div>
               <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${isDark ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-yellow-100 text-yellow-600'}`}>
                 <svg className="w-5 h-5 animate-[spin_4s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               </div>
             </div>
           </div>

           <div className={`absolute top-[10%] right-[15%] w-24 h-24 rounded-full border-[3px] border-dashed animate-[spin_20s_linear_infinite] opacity-30 ${isDark ? 'border-[#00dce5]' : 'border-blue-400'}`}></div>
           
           <div className={`absolute bottom-[15%] left-[12%] opacity-20 ${isDark ? "text-white" : "text-gray-900"}`}>
              <svg width="80" height="80" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="2.5"/> <circle cx="25" cy="5" r="2.5"/> <circle cx="45" cy="5" r="2.5"/>
                <circle cx="5" cy="25" r="2.5"/> <circle cx="25" cy="25" r="2.5"/> <circle cx="45" cy="25" r="2.5"/>
                <circle cx="5" cy="45" r="2.5"/> <circle cx="25" cy="45" r="2.5"/> <circle cx="45" cy="45" r="2.5"/>
              </svg>
           </div>
        </div>

        {/* Konten Utama (Teks) dengan efek Staggered Reveal */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00dce5]/5 via-transparent to-[#D4AF37]/5 blur-[60px] -z-10 pointer-events-none"></div>

          <div className={`animate-reveal delay-100 inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 cursor-default ${
            isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-blue-50/80 border-blue-200 text-blue-700'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-[#00dce5]' : 'bg-blue-600'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-[#00dce5]' : 'bg-blue-600'}`}></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">{SERVICES_SECTION.tag}</span>
          </div>

          <h1 className={`animate-reveal delay-200 text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-8 relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Solusi Teknologi untuk<br className="hidden md:block"/>
            <span className={`relative inline-block mt-2 md:mt-0 italic font-normal text-transparent bg-clip-text bg-gradient-to-r ${
              isDark ? 'from-[#00dce5] via-white to-[#D4AF37]' : 'from-[#00dce5] via-blue-500 to-teal-600'
            }`}>
              {' '}Operasional Bisnis.
            </span>
          </h1>
          
          <p className={`animate-reveal delay-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light relative ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Dari integrasi sistem hingga otomatisasi proses, Ranaix menyediakan fondasi digital yang tangguh untuk pertumbuhan bisnis Anda.
          </p>
          
          <div className={`animate-reveal delay-400 mt-12 flex items-center justify-center gap-3 opacity-50`}>
             <div className={`w-12 h-px bg-gradient-to-r from-transparent ${isDark ? 'to-[#00dce5]' : 'to-blue-500'}`}></div>
             <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#D4AF37]' : 'bg-teal-500'}`}></div>
             <div className={`w-12 h-px bg-gradient-to-l from-transparent ${isDark ? 'to-[#D4AF37]' : 'to-teal-500'}`}></div>
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID SERVICES (2x2 Expanded Grid) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        <div className="mb-20 text-center md:text-left">
          <h2 className={`text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {SERVICES_SECTION.heading}
          </h2>
        </div>

        {/* Diubah menjadi 2 kolom di layar besar agar konten bernapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-[2.5rem] p-10 lg:p-12 flex flex-col transition-all duration-700 hover:-translate-y-2 backdrop-blur-2xl border ${
                isDark
                  ? 'bg-[#111111]/80 border-white/10 hover:border-[#00dce5]/40 hover:shadow-[0_30px_60px_rgba(0,220,229,0.1)]'
                  : 'bg-white/90 border-gray-200 hover:border-[#00dce5]/50 hover:shadow-2xl'
              }`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${
                i % 2 === 0 ? 'bg-[#00dce5]/20' : 'bg-[#D4AF37]/20'
              }`}></div>

              <div className="flex justify-between items-start mb-12">
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border ${
                  isDark
                    ? `bg-white/5 border-white/10 ${i % 2 === 0 ? 'group-hover:border-[#00dce5]/30 group-hover:text-[#00dce5] shadow-[0_0_20px_rgba(0,220,229,0.2)]' : 'group-hover:border-[#D4AF37]/30 group-hover:text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'}`
                    : `bg-gray-50 border-gray-200 ${i % 2 === 0 ? 'group-hover:border-[#00dce5]/30 group-hover:text-[#00dce5]' : 'group-hover:border-yellow-400/50 group-hover:text-yellow-600'}`
                }`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <span className={`text-5xl font-black opacity-10 transition-colors duration-500 ${
                  isDark ? 'text-white group-hover:text-[#00dce5]' : 'text-gray-900 group-hover:text-blue-600'
                }`}>0{i + 1}</span>
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className={`font-bold mb-4 text-3xl tracking-tight transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                <p className={`text-base leading-relaxed mb-8 flex-1 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-800'}`}>
                  {service.description}
                </p>
                <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 w-fit pb-1 border-b-2 border-transparent ${
                  i % 2 === 0 
                    ? `text-[#00dce5] group-hover:border-[#00dce5]` 
                    : (isDark ? 'text-[#D4AF37] group-hover:border-[#D4AF37]' : 'text-yellow-600 group-hover:border-yellow-600')
                }`}>
                  Eksplorasi Modul
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== INTERACTIVE USAGE TABS (Segmented Control UX) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        
        <div className="text-center mb-16">
          <span className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 block ${isDark ? 'text-[#D4AF37]' : 'text-[#00dce5]'}`}>
            {USAGE_SECTION.tag}
          </span>
          <h2 className={`text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {USAGE_SECTION.heading.split('.')[0]}.<br/>
            <span className={`italic font-normal ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Keputusan Lebih Cepat.</span>
          </h2>
        </div>

        {/* Mac-style Segmented Control Switcher */}
        <div className="flex justify-center mb-20 relative z-20">
          <div className={`inline-flex p-1.5 rounded-full backdrop-blur-xl border shadow-lg ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'
          }`}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 z-10 ${
                  activeTab === tab.id
                    ? isDark ? 'text-black shadow-md' : 'text-gray-900 shadow-md'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {/* Latar Belakang Tab Aktif yang meluncur (Disimulasikan dengan absolute div di dalam tombol aktif) */}
                {activeTab === tab.id && (
                  <div className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                    isDark ? 'bg-white' : 'bg-white'
                  }`}></div>
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content & Mockup Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-8 h-[400px] flex flex-col justify-center">
            {tabs.map(tab => (
              activeTab === tab.id && (
                <div key={tab.id} className="animate-reveal space-y-8">
                  <h3 className={`text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {tab.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tab.desc}
                  </p>
                  
                  <ul className="space-y-4 pt-4">
                    {['Data real-time tanpa delay', 'Akses multi-device & multi-cabang', 'Otomatisasi laporan harian'].map((feat, idx) => (
                      <li key={feat} className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
                        isDark ? 'bg-white/[0.02] border-white/5 hover:border-white/20 text-gray-300' : 'bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-700'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner ${
                          idx === 1 ? (isDark ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-yellow-100 text-yellow-600') : (isDark ? 'bg-[#00dce5]/20 text-[#00dce5]' : 'bg-blue-100 text-[#00dce5]')
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="font-medium text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>

          <div className="lg:col-span-7 relative group h-[500px]">
            <div className={`absolute inset-0 blur-[100px] rounded-full transition-opacity duration-700 opacity-40 group-hover:opacity-70 ${
              activeTab === 'sync' ? 'bg-[#D4AF37]/30' : 'bg-[#00dce5]/30'
            }`}></div>
            
            <div className={`relative w-full h-full rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl border transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,220,229,0.15)] overflow-hidden flex flex-col ${
              isDark ? 'bg-[#0a0a0a]/90 border-white/10' : 'bg-white border-gray-200'
            }`}>
              
              <div className="flex items-center gap-2 mb-8 border-b pb-4 opacity-70 border-gray-500/20">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                <div className={`ml-4 text-xs font-mono tracking-widest uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  modul_{activeTab}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center relative z-10">
                
                {activeTab === 'monitoring' && (
                  <div className="space-y-6 animate-reveal">
                    <div className="grid grid-cols-2 gap-6">
                      <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Penjualan POS</div>
                        <div className="text-3xl md:text-4xl font-black text-[#00dce5]">Rp 12.5M</div>
                      </div>
                      <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Stok Gudang</div>
                        <div className={`text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>1,240 <span className="text-sm font-normal text-gray-500">unit</span></div>
                      </div>
                    </div>
                    <div className={`p-6 rounded-3xl border h-40 flex items-end gap-3 ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                      {[40, 65, 50, 80, 45, 90, 70, 100, 60].map((h, i) => (
                        <div key={i} className="group/bar relative w-full h-full flex items-end">
                          <div className={`w-full rounded-t-lg transition-all duration-300 ${isDark ? 'bg-[#00dce5]/40 hover:bg-[#00dce5]' : 'bg-[#00dce5]/60 hover:bg-[#00dce5]'}`} style={{height: `${h}%`}}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'sync' && (
                  <div className="space-y-6 animate-reveal flex flex-col items-center justify-center text-center h-full">
                    <div className="relative w-56 h-56 flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-[spin_20s_linear_infinite] ${isDark ? 'border-[#D4AF37]/30' : 'border-yellow-400/50'}`}></div>
                      <div className={`absolute inset-8 rounded-full border border-dashed animate-[spin_15s_linear_infinite_reverse] ${isDark ? 'border-[#00dce5]/30' : 'border-[#00dce5]/50'}`}></div>
                      
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#D4AF37] rounded-full shadow-[0_0_30px_#D4AF37] flex items-center justify-center text-xs font-bold text-black z-10">HQ</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-[#00dce5] rounded-full shadow-[0_0_20px_#00dce5]"></div>
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_white]"></div>
                      
                      <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center backdrop-blur-md border z-10 ${isDark ? 'bg-black/80 border-white/20' : 'bg-white/80 border-gray-200 shadow-xl'}`}>
                         <span className="w-2 h-2 rounded-full bg-green-500 animate-ping mb-1"></span>
                         <span className={`text-xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>SYNC</span>
                      </div>
                    </div>
                    <p className={`text-sm font-medium mt-8 px-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Data terdistribusi secara instan melintasi server pusat dan cabang.</p>
                  </div>
                )}

                {activeTab === 'analysis' && (
                  <div className="space-y-6 animate-reveal">
                    <div className="grid grid-cols-3 gap-6 items-center">
                      <div className="col-span-2">
                        <div className={`p-6 rounded-3xl border h-40 flex flex-col justify-between ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                          <div className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Tingkat Konversi</div>
                          <div className="flex items-end gap-2 h-20">
                            {[30, 45, 40, 60, 55, 80, 75].map((h, i) => (
                              <div key={i} className="w-full bg-[#00dce5]/50 rounded-t-md hover:bg-[#00dce5] transition-colors" style={{height: `${h}%`}}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-6 rounded-3xl border h-40 flex flex-col justify-center items-center relative ${isDark ? 'bg-[#D4AF37]/10 border-[#D4AF37]/20' : 'bg-yellow-50 border-yellow-200'}`}>
                        <svg className="w-full h-full absolute inset-0 p-4 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke={isDark ? "rgba(212,175,55,0.2)" : "rgba(212,175,55,0.3)"} strokeWidth="8" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="32" strokeLinecap="round" className="animate-[stroke-dashoffset_1.5s_ease-out]" />
                        </svg>
                        <div className={`text-3xl font-black relative z-10 ${isDark ? 'text-[#D4AF37]' : 'text-yellow-700'}`}>87%</div>
                      </div>
                    </div>

                    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-4">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Pencapaian Target Q3</span>
                        <span className="text-[#00dce5]">ON TRACK</span>
                      </div>
                      <div className="w-full bg-gray-500/20 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#00dce5] to-[#D4AF37] h-full w-[85%] rounded-full relative">
                           <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-[2px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== HOW WE WORK (Glowing Connected Timeline) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/[0.05]">
        
        <div className="text-center mb-24">
          <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${isDark ? 'text-[#D4AF37]' : 'text-[#00dce5]'}`}>
            Cara Kami Bekerja
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Eksekusi yang cepat,<br/>
            <span className={`italic font-normal ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>hasil yang berkelanjutan.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Garis Penghubung Bercahaya (Desktop Only) */}
          <div className={`hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 -translate-y-1/2 z-0 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-gray-200'}`}>
             <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00dce5] to-transparent opacity-50 animate-[translateX_3s_infinite_linear]"></div>
          </div>

          {SERVICE_HOW_WE_WORK.map((step, index) => (
            <div key={step.num} className={`relative z-10 p-10 rounded-[2.5rem] backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden group ${
              isDark ? 'bg-[#111111]/90 border-white/10 hover:border-[#00dce5]/40' : 'bg-white border-gray-200 hover:border-[#00dce5]/50 shadow-xl'
            } ${index === 1 ? 'md:translate-y-8' : ''}`}>
              
              <div className={`absolute -right-4 -bottom-10 text-[10rem] font-black leading-none pointer-events-none transition-colors duration-500 ${
                isDark ? 'text-white/[0.03] group-hover:text-[#00dce5]/10' : 'text-gray-900/[0.03] group-hover:text-[#00dce5]/10'
              }`}>
                {step.num}
              </div>

              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-8 shadow-lg ring-4 ring-offset-4 ${
                isDark ? 'bg-[#00dce5] text-black ring-[#00dce5]/20 ring-offset-[#0a0a0a]' : 'bg-[#00dce5] text-white ring-blue-100 ring-offset-white'
              }`}>
                {step.num}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
              <p className={`text-base leading-relaxed relative z-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative z-10 py-32 px-6 max-w-6xl mx-auto text-center border-t border-white/[0.05]">
        <div className={`relative p-12 md:p-24 rounded-[3rem] overflow-hidden group transition-all duration-700 ${
          isDark 
            ? 'bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]' 
            : 'bg-white/60 backdrop-blur-3xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
        }`}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-50 blur-[100px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 ${
            isDark ? 'bg-gradient-to-br from-[#00dce5]/20 via-transparent to-[#D4AF37]/20' : 'bg-gradient-to-br from-[#00dce5]/15 via-transparent to-teal-300/20'
          }`}></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 backdrop-blur-md shadow-sm ${
              isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-[#D4AF37]' : 'bg-[#00dce5]'}`}></span>
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Langkah Selanjutnya</span>
            </div>

            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Siap mengoptimalkan <br/> 
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark ? 'from-[#00dce5] to-[#D4AF37]' : 'from-[#00dce5] to-teal-500'
              }`}>
                sistem operasional Anda?
              </span>
            </h2>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Konsultasikan kebutuhan teknis bisnis Anda bersama tim ahli Ranaix.
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