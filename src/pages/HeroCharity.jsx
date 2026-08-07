export default function HeroCharity() {
  return (
    <section className="relative min-h-screen bg-charcoal-dark flex items-center justify-center overflow-hidden font-display-lg">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Gradasi dasar agar hitamnya tidak flat */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-surface-container-lowest z-0"></div>
      
      {/* 2. Cahaya (Glow) Hijau Tosca yang membaur di latar belakang (Qrowd Vibe) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-tosca-dim blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        
        {/* Label Atas (Tosca) */}
        <p className="text-tosca font-semibold tracking-widest uppercase mb-4 text-sm drop-shadow-md">
          Inisiatif Kebaikan Bersama
        </p>

        {/* Judul Utama (Putih + Emas) */}
        <h1 className="text-5xl md:text-7xl font-bold text-on-surface mb-6 leading-[1.1] tracking-tight">
          Membangun Masa Depan <br/>
          <span className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            Yang Lebih Berharga.
          </span>
        </h1>

        {/* Paragraf (Abu-abu terang agar nyaman dibaca) */}
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body-md font-light leading-relaxed">
          Platform penggalangan dana modern yang transparan, aman, dan didesain untuk menghubungkan niat baik dengan mereka yang membutuhkan.
        </p>

        {/* Tombol Aksi (Kombinasi Modern Tosca & Klasik Emas) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-tosca text-on-secondary-fixed px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,220,229,0.25)] hover:shadow-[0_0_35px_rgba(0,220,229,0.4)] hover:-translate-y-1">
            Mulai Donasi
          </button>
          
          <button className="w-full sm:w-auto border border-gold text-gold px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1">
            Pelajari Visi Kami
          </button>
        </div>

      </div>
    </section>
  );
}