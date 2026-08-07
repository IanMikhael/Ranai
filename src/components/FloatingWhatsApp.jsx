import { useTheme } from '../context/useTheme';

export default function FloatingWhatsApp() {
  const { isDark } = useTheme();
  
  const whatsappLink = 'https://wa.me/62817272794?text=Halo%20Ranaix,%20saya%20ingin%20diskusi.';

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* ==================== HOLOGRAPHIC PROJECTION (Hidden by default) ==================== */}
      <div className={`absolute bottom-20 right-0 w-72 p-4 rounded-2xl border backdrop-blur-2xl shadow-2xl origin-bottom-right pointer-events-none group-hover:pointer-events-auto
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-90 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 ${
        isDark 
          ? 'bg-charcoal-dark/90 border-tosca/30 shadow-[0_0_40px_rgba(0,220,229,0.15)]' 
          : 'bg-white/90 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
      }`}>
        
        {/* Tail Pointer (Segitiga di bawah kartu) */}
        <div className={`absolute -bottom-2 right-6 w-4 h-4 rotate-45 border-b border-r ${
          isDark ? 'bg-charcoal-dark/90 border-tosca/30' : 'bg-white/90 border-gray-200'
        }`}></div>

        {/* Profile Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-dashed ${isDark ? 'border-white/10' : 'border-gray-200'}">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#128c7e] to-[#25D366] flex items-center justify-center shadow-lg">
            <img src="/assets/logo whatshap.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-charcoal-dark"></span>
          </div>
          <div>
            <h4 className={`text-sm font-bold font-headline-md ${isDark ? 'text-white' : 'text-gray-900'}`}>Ranaix Support</h4>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-green-500 font-bold">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Bubble (Auto message) */}
        <div className={`p-3 rounded-xl rounded-tl-none text-sm relative overflow-hidden ${
          isDark ? 'bg-white/[0.03] text-gray-300' : 'bg-gray-100 text-gray-700'
        }`}>
          <p className="font-body-md relative z-10">
            Halo! 👋 Ada yang bisa kami bantu seputar teknologi & sistem hari ini?
          </p>
          {/* Typing indicator (Titik-titik animasi) */}
          <div className="flex gap-1 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-tosca animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-tosca animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-tosca animate-bounce"></span>
          </div>
        </div>

        {/* CTA Button mini di dalam kartu */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-tr from-[#128c7e] to-[#25D366] text-white text-xs font-bold transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Mulai Chat Sekarang
        </a>
      </div>

      {/* ==================== FLOATING ORB (Main Button) ==================== */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-500 group-hover:scale-90 group-hover:rotate-12"
        aria-label="Chat WhatsApp"
      >
        {/* 1. Aura Glow (Membara) */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>

        {/* 2. Cincin Energi Berputar (Conic Gradient) - LIAR & WOW */}
        <div className="absolute -inset-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin"
             style={{ 
               background: 'conic-gradient(from 0deg, transparent, #25D366, #00dce5, transparent)', 
               mask: 'radial-gradient(transparent 60%, black 62%)', 
               WebkitMask: 'radial-gradient(transparent 60%, black 62%)' 
             }}>
        </div>

        {/* 3. Inner Glass Circle */}
        <div className={`relative w-full h-full rounded-full flex items-center justify-center border backdrop-blur-xl shadow-2xl transition-colors duration-500 ${
          isDark 
            ? 'bg-charcoal-dark/80 border-white/10' 
            : 'bg-white/80 border-gray-200'
        }`}>
          
          {/* Gambar ikon WA */}
          <img 
            src="/assets/logo whatshap.png" 
            alt="WhatsApp" 
            className="w-7 h-7 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" 
          />
          
          {/* Animasi Ping Kecil di pojok kanan atas (Status online) */}
          <div className="absolute top-1.5 right-1.5 flex items-center justify-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 border-2 border-charcoal-dark bg-green-500"></span>
            </span>
          </div>
        </div>

      </a>
    </div>
  );
}