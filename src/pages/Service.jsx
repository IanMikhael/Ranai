import { useState } from 'react';

export default function Service() {
  const [activeTab, setActiveTab] = useState('monitoring');

  const services = [
    {
      title: "Integrasi",
      desc: "Integrasikan Sistem Bisnis. Menghubungkan platform yang terpisah menjadi satu alur data yang mulus.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      )
    },
    {
      title: "Pengembangan",
      desc: "Bangun Sistem Sesuai Kebutuhan. Arsitektur custom yang dirancang khusus untuk skala operasional Anda.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      )
    },
    {
      title: "Otomatisasi",
      desc: "Otomatisasi Proses Rutin. Mengurangi intervensi manual dan meningkatkan efisiensi operasional.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      )
    },
    {
      title: "Experience",
      desc: "Teknologi Interaktif. Menghadirkan pengalaman pengguna yang imersif dan modern.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.828 2.828" />
      )
    }
  ];

  const tabs = [
    { id: 'monitoring', label: 'Pemantauan', title: 'Visibilitas Bisnis', desc: 'Pantau penjualan POS, operasi gudang, dan status toko secara real-time. Kendalikan kecepatan dan ketepatan operasional dari satu titik pusat.' },
    { id: 'sync', label: 'Sinkronisasi', title: 'Koordinasi Lancar', desc: 'Selaraskan operasi antar divisi, cabang, dan gudang. Singkirkan hambatan komunikasi dan optimalkan efisiensi tim Anda.' },
    { id: 'analysis', label: 'Analisis', title: 'Berbasis Data', desc: 'Integrasikan data terpisah untuk analisis pasar yang mendalam. Ubah angka menjadi wawasan eksekutif untuk keputusan yang lebih cepat.' }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00dce5]/30">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00dce5]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.02] pointer-events-none z-0"></div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-48 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-sm font-medium text-gray-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dce5]"></span>
          </span>
          Our Expertise
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
          Solusi Teknologi untuk<br/>
          <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
            Operasional Bisnis.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Dari integrasi sistem hingga otomatisasi proses, Ranaix menyediakan fondasi digital yang tangguh untuk pertumbuhan bisnis Anda.
        </p>
      </section>

      {/* ==================== BENTO GRID SERVICES (4 Pillars) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.04] hover:border-[#00dce5]/30 hover:-translate-y-2 ${i === 0 ? 'lg:row-span-2 min-h-[400px]' : 'min-h-[200px]'}`}
            >
              <div className={`w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 mb-6 group-hover:bg-[#00dce5]/10 transition-colors ${i === 0 ? 'lg:w-16 lg:h-16' : ''}`}>
                <svg className={`text-white group-hover:text-[#00dce5] transition-colors ${i === 0 ? 'w-8 h-8' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <div>
                <h3 className={`font-bold mb-2 ${i === 0 ? 'text-3xl' : 'text-xl'}`}>{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                <button className="mt-6 text-[#00dce5] text-sm font-medium flex items-center gap-2 group/btn opacity-80 group-hover:opacity-100 transition-opacity">
                  Pelajari Lebih
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
              {/* Glow accent for large card */}
              {i === 0 && <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00dce5]/5 blur-[80px] rounded-full pointer-events-none"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== INTERACTIVE USAGE TABS ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-16">
          <span className="text-[#00dce5] text-sm font-semibold mb-4 block tracking-widest uppercase">Penggunaan Sistem</span>
          <h2 className="text-4xl md:text-6xl text-white font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto">
            Aktivitas Lebih Terstruktur,<br/>
            <span className="text-gray-600">Keputusan Lebih Cepat.</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 items-center bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 backdrop-blur-md">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            {tabs.map(tab => (
              activeTab === tab.id && (
                <div key={tab.id} className="animate-fade-in-up space-y-6">
                  <h3 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
                    {tab.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {tab.desc}
                  </p>
                  <ul className="space-y-4 pt-4">
                    {['Data real-time tanpa delay', 'Akses multi-device & multi-cabang', 'Otomatisasi laporan harian'].map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-gray-300">
                        <span className="w-6 h-6 rounded-full bg-[#00dce5]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-[#00dce5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>

          {/* Dynamic Mockup based on Active Tab */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00dce5]/10 blur-[80px] rounded-full transition-opacity duration-500 opacity-50"></div>
            <div className="relative bg-[#0a0a10] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02] min-h-[400px] flex flex-col justify-center">
              
              {/* Mockup: Monitoring */}
              {activeTab === 'monitoring' && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div className="text-xs text-gray-500 font-mono">pemantauan/real-time</div>
                    <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><div className="text-xs text-green-400">Live</div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-1">Penjualan POS</div>
                      <div className="text-2xl font-bold text-[#00dce5]">Rp 12.5M</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-xs text-gray-500 mb-1">Stok Gudang</div>
                      <div className="text-2xl font-bold text-white">1,240</div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl h-32 flex items-end gap-2">
                    {[40, 65, 50, 80, 45, 90, 70, 100, 60].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-[#00dce5]/10 to-[#00dce5]/60 rounded-sm" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mockup: Sync */}
              {activeTab === 'sync' && (
                <div className="space-y-6 animate-fade-in-up flex flex-col items-center justify-center text-center py-8">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00dce5] rounded-full shadow-[0_0_20px_#00dce5] flex items-center justify-center text-xs font-bold text-black">HQ</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-[#b6c4ff] rounded-full shadow-[0_0_15px_#b6c4ff]"></div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">Sync</div>
                  </div>
                  <p className="text-gray-400 text-sm max-w-xs">Data mengalir mulus antara pusat, cabang, dan gudang tanpa latensi.</p>
                </div>
              )}

              {/* Mockup: Analysis */}
              {activeTab === 'analysis' && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="text-xs text-gray-500 font-mono pb-4 border-b border-white/5">analisis/prediksi-pasar</div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-2 space-y-3">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <div className="text-xs text-gray-500 mb-2">Pertumbuhan Bulanan</div>
                        <div className="flex items-end gap-1 h-16">
                          {[30, 45, 40, 60, 55, 80, 75].map((h, i) => (
                            <div key={i} className="w-full bg-[#b6c4ff]/40 rounded-sm" style={{height: `${h}%`}}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#b6c4ff] border-r-[#b6c4ff] animate-spin" style={{animationDuration: '4s'}}></div>
                      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[#b6c4ff]">87%</div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Target Q3</span>
                      <span className="text-[#b6c4ff]">Tercapai</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#b6c4ff] h-full w-3/4"></div></div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW WE WORK (Process Timeline) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32 border-t border-white/[0.05]">
        <div className="mb-20 max-w-3xl">
          <span className="text-[#00dce5] text-sm font-semibold mb-4 block tracking-widest uppercase">Cara Kami Bekerja</span>
          <h2 className="text-4xl md:text-5xl text-white font-bold leading-[1.05] tracking-tight">
            Eksekusi yang cepat, hasil yang berkelanjutan.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Diskusi & Audit", desc: "Memahami arsitektur saat ini dan menyusun strategi integrasi terbaik." },
            { num: "02", title: "Desain & Pengembangan", desc: "Membangun sistem custom dan mengotomatisasi alur kerja Anda." },
            { num: "03", title: "Deploy & Dukungan", desc: "Peluncuran sistem tanpa hambatan disertai pemantauan 24/7." }
          ].map(step => (
            <div key={step.num} className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-300 group">
              <div className="text-5xl font-bold text-white/10 group-hover:text-[#00dce5]/20 transition-colors duration-300 mb-4">{step.num}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative z-10 py-48 flex flex-col items-center text-center px-8 border-t border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00dce5]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-4xl mb-8">
          Siap mengoptimalkan<br/>
          <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
            sistem operasional Anda?
          </span>
        </h2>
        <p className="relative text-xl text-gray-400 max-w-xl mb-12 font-light">
          Konsultasikan kebutuhan teknis bisnis Anda bersama tim ahli Ranaix.
        </p>
        <a href="/contact" className="relative group bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
          Diskusikan Sistem Anda
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          </span>
        </a>
      </section>

    </div>
  );
}