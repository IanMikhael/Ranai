import { useState, useRef } from 'react';
import { useTheme } from '../context/useTheme';
import { CONTACT_INFO } from '../constants/content';

export default function Contact() {
  const { isDark } = useTheme();
  const contactRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleMouseMove = (e) => {
    if (!contactRef.current) return;
    const rect = contactRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '62817272794';
    const text = `Halo Ranaix, saya ingin diskusi.%0A%0A*Nama:* ${formData.name}%0A*Email:* ${formData.email}%0A*Perusahaan:* ${formData.company}%0A%0A*Pesan:* ${formData.message}`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(waLink, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={contactRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen overflow-hidden font-sans selection:bg-tosca/30 transition-colors duration-500 ${
        isDark ? 'bg-charcoal-dark text-white' : 'bg-white text-gray-900'
      }`}
    >
      
      {/* Background Atmosphere - Enterprise Grid & Glows */}
      <div className={`absolute inset-0 bg-[size:4rem_4rem] pointer-events-none z-0 transition-colors duration-500 ${
        isDark 
          ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]'
      }`}></div>
      
      <div className={`absolute top-0 right-0 w-[40rem] h-[40rem] blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500 ${
        isDark ? 'bg-tosca/10' : 'bg-tosca/10'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-[40rem] h-[40rem] blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500 ${
        isDark ? 'bg-gold/10' : 'bg-gray-200'
      }`}></div>

      {/* Interactive Spotlight (Dark mode only) */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.06), transparent 80%)`
          }}
        ></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-24">
        
        {/* ==================== HERO SECTION (Asymmetric Split) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          
          {/* Teks Hero (Kiri) */}
          <div className="lg:col-span-7">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-medium mb-8 border transition-colors duration-500 ${
              isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tosca opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tosca"></span>
              </span>
              <span className="font-mono tracking-widest uppercase">Get in Touch</span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95] font-headline-md transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Mari rancang arsitektur<br/>
              <span className={`italic font-normal transition-colors duration-500 ${isDark ? 'text-gold-light' : 'text-primary'}`}>
                masa depan Anda.
              </span>
            </h1>
            <p className={`mt-8 text-base md:text-lg max-w-md leading-relaxed font-body-md transition-colors duration-500 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Punya proyek besar atau ide yang butuh eksekusi sistem? Tim kami siap membantu mewujudkannya. Diskusikan kebutuhan Anda sekarang.
            </p>
          </div>

          {/* Visual Element: Interactive System Core (Kanan) */}
          <div className="lg:col-span-5 relative h-[350px] hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 [perspective:1000px]">
              
              {/* Cincin Orbit 3D (Berputar) */}
              <div className={`absolute inset-0 rounded-full border transition-colors duration-500 ${
                isDark ? 'border-white/10' : 'border-gray-300'
              }`} style={{ transform: 'rotateX(75deg)' }}></div>
              
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-tosca/30 animate-spin" style={{ transform: 'rotateX(75deg)', animationDuration: '8s' }}></div>
              
              <div className="absolute inset-8 rounded-full border border-gold/20 animate-spin [animation-direction:reverse]" style={{ transform: 'rotateX(75deg) rotateY(45deg)', animationDuration: '12s' }}></div>

              {/* Core / Inti Sistem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                {/* Aura Glow */}
                <div className="absolute inset-0 rounded-full bg-tosca/20 blur-3xl animate-pulse"></div>
                
                {/* Glass Core */}
                <div className={`relative w-full h-full rounded-full backdrop-blur-2xl border flex items-center justify-center shadow-2xl transition-colors duration-500 ${
                  isDark ? 'bg-charcoal/50 border-white/10' : 'bg-white/50 border-gray-200'
                }`}>
                  <svg className={`w-16 h-16 ${isDark ? 'text-tosca' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h-2m-4 0H8m8 8h-2m-4 0H8" />
                  </svg>
                </div>
              </div>

              {/* Floating Data Tags (Melayang di sekitar orbit) */}
              <div className={`absolute top-4 -right-4 px-3 py-2 rounded-xl border backdrop-blur-md shadow-xl transition-colors duration-500 ${
                isDark ? 'bg-charcoal/80 border-white/10' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-green-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  API Latency
                </div>
                <div className={`text-sm font-bold mt-0.5 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>42ms</div>
              </div>

              <div className={`absolute bottom-8 -left-8 px-3 py-2 rounded-xl border backdrop-blur-md shadow-xl transition-colors duration-500 ${
                isDark ? 'bg-charcoal/80 border-white/10' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  Protocol
                </div>
                <div className={`text-sm font-bold mt-0.5 font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>End-to-End</div>
              </div>

              <div className={`absolute bottom-0 right-8 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-xl transition-colors duration-500 ${
                isDark ? 'bg-charcoal/80 border-white/10' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="text-[10px] font-mono text-tosca font-bold">v.2.4.0_stable</div>
              </div>

            </div>
          </div>
        </div>

        {/* ==================== CONTACT GRID (Form & Info) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Form Section (Left - Wide) */}
          <div className="lg:col-span-7 relative">
            <form onSubmit={handleSubmit} className={`relative rounded-3xl p-8 md:p-12 border backdrop-blur-2xl transition-colors duration-500 ${
              isDark 
                ? 'bg-charcoal/50 border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                : 'bg-white/70 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
            }`}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2 relative">
                  <label className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <span className="w-4 h-px bg-current"></span> Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b outline-none py-3 text-lg placeholder:text-gray-600 transition-colors duration-300 focus:border-tosca ${
                      isDark ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'
                    }`} 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <span className="w-4 h-px bg-current"></span> Email Bisnis
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b outline-none py-3 text-lg placeholder:text-gray-600 transition-colors duration-300 focus:border-tosca ${
                      isDark ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'
                    }`} 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8 relative">
                <label className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  <span className="w-4 h-px bg-current"></span> Nama Perusahaan
                </label>
                <input 
                  type="text" 
                  name="company" 
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b outline-none py-3 text-lg placeholder:text-gray-600 transition-colors duration-300 focus:border-tosca ${
                    isDark ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'
                  }`} 
                  placeholder="PT Maju Bersama" 
                />
              </div>

              <div className="space-y-2 mb-12 relative">
                <label className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  <span className="w-4 h-px bg-current"></span> Detail Proyek / Pesan
                </label>
                <textarea 
                  name="message" 
                  rows="3" 
                  required 
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b outline-none py-3 text-lg placeholder:text-gray-600 transition-colors duration-300 focus:border-tosca resize-none ${
                    isDark ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'
                  }`} 
                  placeholder="Ceritakan kebutuhan sistem, integrasi, atau masalah operasional..." 
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className={`text-xs font-mono transition-colors duration-500 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  *Anda akan diarahkan ke WhatsApp dengan<br/>pesan yang sudah terisi otomatis.
                </p>
                
                <button 
                  type="submit" 
                  className={`group relative w-full md:w-auto font-semibold text-base transition-all duration-300 flex items-center justify-center gap-4 px-8 py-4 rounded-full overflow-hidden ${
                    isDark 
                      ? 'bg-white text-charcoal-dark hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]' 
                      : 'bg-gray-900 text-white hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Diskusikan via WhatsApp
                  </span>
                  <span className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${
                    isDark ? 'bg-charcoal-dark text-white' : 'bg-white text-gray-900'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Section (Right - Narrow) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            <div className="space-y-4 mb-4">
              <span className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-500 ${isDark ? 'text-tosca' : 'text-primary'}`}>
                <span className="w-4 h-px bg-current"></span> Hubungi Langsung
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold leading-tight tracking-tight font-headline-md transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Lebih suka bicara langsung?
              </h2>
            </div>

            <div className="space-y-4">
              <ContactRow
                isDark={isDark}
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                label="Telepon / WA"
                value={CONTACT_INFO.phone}
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              />
              <ContactRow
                isDark={isDark}
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                label="Email"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <ContactRow
                isDark={isDark}
                icon={
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                }
                label="Lokasi Kantor"
                value={CONTACT_INFO.location}
                href="#"
              />
            </div>

            {/* Operational Status Card */}
            <div className={`mt-6 p-6 rounded-2xl border transition-colors duration-500 ${
              isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className={`text-sm font-bold font-mono uppercase tracking-widest transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>System Operational</span>
              </div>
              <p className={`text-sm font-body-md transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {CONTACT_INFO.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen kecil untuk baris kontak agar rapi
function ContactRow({ icon, label, value, href, isDark }) {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? '_blank' : '_self'} 
      rel="noopener noreferrer" 
      className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
        isDark 
          ? 'bg-white/[0.02] border-white/[0.06] hover:border-tosca/30 hover:bg-white/[0.04]' 
          : 'bg-gray-50 border-gray-200 hover:border-primary/30 hover:bg-white'
      }`}
    >
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-colors duration-300 flex-shrink-0 ${
        isDark ? 'bg-charcoal border-white/10 group-hover:bg-tosca/10 group-hover:border-tosca/20' : 'bg-white border-gray-200 group-hover:bg-primary/10 group-hover:border-primary/20'
      }`}>
        <svg className={`w-5 h-5 transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-tosca' : 'text-gray-500 group-hover:text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
        <div className={`text-base font-medium truncate transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
      </div>
      <svg className={`w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isDark ? 'text-tosca' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </a>
  );
}