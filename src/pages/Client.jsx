export default function Client() {
  const clients = [
    {
      name: "MS GLOW AESTHETIC CLINIC",
      title: "Operasional Lebih Cepat, Akurat, dan Terkontrol",
      desc: "Ranaix mengintegrasikan sistem registrasi pasien, manajemen inventaris klinik, dan pembayaran ke dalam satu alur kerja yang mulus, menghilangkan proses manual yang rentan kesalahan.",
      metrics: [
        { value: "60%", label: "Kecepatan Registrasi" },
        { value: "80%", label: "Kesalahan Berkurang" },
        { value: "50%", label: "Kapasitas Meningkat" }
      ],
      mockup: "clinic"
    },
    {
      name: "KIDZANIA JAKARTA X MMID",
      title: "Mengubah 4 Konsol Menjadi 8 Terminal Pemain",
      desc: "Mendesain ulang arsitektur perangkat keras dan lunak untuk melipatgandakan kapasitas operasional tanpa perlu investasi hardware baru yang masif.",
      metrics: [
        { value: "2x", label: "Kapasitas Pemain" },
        { value: "8", label: "Terminal Aktif" },
        { value: "0", label: "Hardware Upgrade" }
      ],
      mockup: "kidzania"
    },
    {
      name: "RUANG NGAJI",
      title: "Edukasi Lebih Skalabel dan Efisien",
      desc: "Membangun sistem administrasi dan platform interaktif yang mampu menangani lonjakan peserta secara real-time, mempermudah pengelolaan kelas dan laporan.",
      metrics: [
        { value: "5x", label: "Peserta Meningkat" },
        { value: "70%", label: "Kemudahan Administrasi" },
        { value: "100%", label: "Online Adaptation" }
      ],
      mockup: "ngaji"
    },
    {
      name: "J99 CORP",
      title: "Satu Sistem untuk Menyelaraskan Seluruh Tim",
      desc: "Mengintegrasikan operasional gudang, logistik, dan penjualan menjadi satu dashboard terpusat, memastikan koordinasi antar divisi berjalan tanpa hambatan komunikasi.",
      metrics: [
        { value: "50%", label: "Efisiensi Waktu" },
        { value: "60%", label: "Akurasi Data" },
        { value: "50%", label: "Operasional Cost" }
      ],
      mockup: "j99"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00dce5]/30">
      
      {/* Background Grid & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00dce5]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.02] pointer-events-none z-0"></div>

      {/* Header Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-48 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-sm font-medium text-gray-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dce5]"></span>
          </span>
          Client Success Stories
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
          Transformasi Nyata,<br/>
          <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
            Hasil Terukur.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Kami tidak hanya membangun sistem. Kami mengubah cara bisnis beroperasi. Lihat bagaimana Ranaix memberdayakan mitra kami.
        </p>
      </section>

      {/* Dynamic Client Showcase List */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32 space-y-32">
        
        {clients.map((client, index) => (
          <div key={client.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Mockup Visual (Bergantian Kiri/Kanan) */}
            <div className={`relative group w-full h-[400px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              {/* Glow Background */}
              <div className="absolute inset-0 bg-[#00dce5]/10 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
              
              {/* Frame Mockup */}
              <div className="relative bg-[#0a0a10] border border-white/10 rounded-3xl p-8 h-full shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden flex flex-col justify-center">
                
                {/* Dummy Abstract UI sesuai konteks */}
                {client.mockup === 'clinic' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <div className="text-xs text-gray-500 font-mono">ms-glow/clinic-dashboard</div>
                      <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-green-500/50"></div><div className="text-xs text-green-400">Live</div></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {["Registrasi", "Inventory", "Payment"].map((cat) => (
                        <div key={cat} className="bg-white/5 p-3 rounded-xl text-center">
                          <div className="text-xs text-gray-400 mb-1">{cat}</div>
                          <div className="h-2 w-3/4 bg-[#00dce5]/40 rounded-full mx-auto"></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl flex items-end gap-2 h-32">
                      {[40, 60, 45, 80, 65, 90, 70].map((h, i) => (
                        <div key={i} className="w-full bg-gradient-to-t from-[#00dce5]/10 to-[#00dce5]/60 rounded-sm" style={{height: `${h}%`}}></div>
                      ))}
                    </div>
                  </div>
                )}

                {client.mockup === 'kidzania' && (
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="grid grid-cols-4 gap-4 w-full">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="aspect-square rounded-xl border border-[#00dce5]/20 bg-white/5 flex items-center justify-center text-[#00dce5]">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">8 / 8</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Terminal Aktif</div>
                    </div>
                  </div>
                )}

                {client.mockup === 'ngaji' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500 font-mono">ruang-ngaji/admin</div>
                      <div className="px-3 py-1 bg-[#b6c4ff]/10 text-[#b6c4ff] rounded-full text-xs">Kelas Berlangsung</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Total Peserta Aktif</div>
                        <div className="text-4xl font-bold text-white">1,245</div>
                      </div>
                      <div className="w-20 h-20 rounded-full border-4 border-white/10 border-t-[#b6c4ff] animate-spin" style={{animationDuration: '3s'}}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl h-20 flex items-end gap-2">
                        <div className="w-full bg-[#b6c4ff]/30 rounded-sm" style={{height: '40%'}}></div>
                        <div className="w-full bg-[#b6c4ff]/60 rounded-sm" style={{height: '70%'}}></div>
                        <div className="w-full bg-[#b6c4ff]/80 rounded-sm" style={{height: '100%'}}></div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl flex flex-col justify-center">
                        <div className="text-xs text-gray-400 mb-1">Skalabilitas</div>
                        <div className="text-2xl font-bold text-white">500%</div>
                      </div>
                    </div>
                  </div>
                )}

                {client.mockup === 'j99' && (
                  <div className="space-y-4">
                    <div className="text-xs text-gray-500 font-mono pb-4 border-b border-white/5">j99-corp/logistics</div>
                    <div className="relative h-40 bg-white/5 rounded-xl flex items-center justify-center p-4">
                      {/* Network Nodes Mockup */}
                      <div className="absolute w-2 h-2 bg-[#00dce5] rounded-full left-1/4 top-1/3 shadow-[0_0_10px_#00dce5]"></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full right-1/4 top-1/4"></div>
                      <div className="absolute w-2 h-2 bg-[#b6c4ff] rounded-full left-1/2 bottom-1/4 shadow-[0_0_10px_#b6c4ff]"></div>
                      <svg className="absolute inset-0 w-full h-full">
                        <line x1="25%" y1="33%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="75%" y1="25%" x2="50%" y2="75%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50%" y1="75%" x2="25%" y2="33%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      </svg>
                      <div className="relative z-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-white">Tim Terkoordinasi</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 p-3 rounded-lg text-center"><div className="text-lg font-bold text-[#00dce5]">Gudang</div><div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div></div>
                      <div className="bg-white/5 p-3 rounded-lg text-center"><div className="text-lg font-bold text-[#00dce5]">Sales</div><div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div></div>
                      <div className="bg-white/5 p-3 rounded-lg text-center"><div className="text-lg font-bold text-[#00dce5]">Logistik</div><div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div></div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Text Content (Bergantian Kanan/Kiri) */}
            <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <span className="text-[#00dce5] text-sm font-semibold block tracking-widest uppercase">{client.name}</span>
              <h2 className="text-4xl md:text-5xl text-white font-bold leading-[1.1] tracking-tight">
                {client.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {client.desc}
              </p>

              {/* Metrics Display */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {client.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</p>
                  </div>
                ))}
              </div>

              <button className="group mt-8 text-white font-medium flex items-center gap-2 hover:text-[#00dce5] transition-colors duration-300">
                Baca Cerita Klien Lengkap
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>
        ))}

      </section>

      {/* CTA Bottom */}
      <section className="relative z-10 py-48 flex flex-col items-center text-center px-8 border-t border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00dce5]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] max-w-4xl mb-8">
          Ingin menjadi<br/>
          <span className="bg-gradient-to-r from-white via-[#b6c4ff] to-[#00dce5] bg-clip-text text-transparent">
            cerita sukses berikutnya?
          </span>
        </h2>
        <p className="relative text-xl text-gray-400 max-w-xl mb-12 font-light">
          Mari diskusikan bagaimana Ranaix dapat mengintegrasikan dan mengoptimalkan sistem operasional bisnis Anda.
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