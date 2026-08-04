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

  // Format pesan otomatis untuk WhatsApp
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
      className={`relative min-h-screen overflow-hidden font-sans selection:bg-[#00dce5]/30 ${
        isDark
          ? 'bg-[#050505] text-white'
          : 'bg-white text-gray-900'
      }`}
    >
      
      {/* Background Atmosphere */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[150px] rounded-full pointer-events-none z-0 ${
        isDark ? 'bg-[#00dce5]/5' : 'bg-blue-400/5'
      }`}></div>
      <div className={`absolute inset-0 bg-[size:5rem_5rem] opacity-[0.02] pointer-events-none z-0 ${
        isDark
          ? 'bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]'
      }`}></div>

      {/* Interactive Spotlight (Dark mode only) */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 229, 0.08), transparent 80%)`
          }}
        ></div>
      )}

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-48 pb-24 text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium mb-8 ${
          isDark
            ? 'bg-white/5 border border-white/10 text-gray-300'
            : 'bg-gray-200 border border-gray-300 text-gray-700'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dce5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dce5]"></span>
          </span>
          Get in Touch
        </div>
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Mari rancang arsitektur<br/>
          <span className={isDark ? 'text-[#00dce5]' : 'text-blue-600'}>
            masa depan Anda.
          </span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light ${
          isDark ? 'text-gray-400' : 'text-gray-700'
        }`}>
          Punya proyek besar atau ide yang butuh eksekusi sistem? Tim kami siap membantu mewujudkannya. Diskusikan kebutuhan Anda sekarang.
        </p>
      </section>

      {/* ==================== CONTACT GRID (Form & Info) ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Form Section (Lebar) */}
        <div className="lg:col-span-3 relative group">
          <div className="absolute inset-0 bg-[#00dce5]/5 blur-[80px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          
          <form onSubmit={handleSubmit} className="relative bg-[#0a0a10] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#00dce5] outline-none py-3 text-lg text-white placeholder:text-gray-600 transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Email Bisnis</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#00dce5] outline-none py-3 text-lg text-white placeholder:text-gray-600 transition-colors" 
                  placeholder="john@company.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest">Nama Perusahaan</label>
              <input 
                type="text" 
                name="company" 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 focus:border-[#00dce5] outline-none py-3 text-lg text-white placeholder:text-gray-600 transition-colors" 
                placeholder="PT Maju Bersama" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest">Detail Proyek / Pesan</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 focus:border-[#00dce5] outline-none py-3 text-lg text-white placeholder:text-gray-600 transition-colors resize-none" 
                placeholder="Ceritakan kebutuhan sistem, integrasi, atau masalah operasional yang ingin dipecahkan..." 
              ></textarea>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="group relative w-full md:w-auto bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Diskusikan via WhatsApp
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center md:text-left">Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi otomatis.</p>
            </div>
          </form>
        </div>

        {/* Info Section (Narrow) */}
        <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-[#00dce5] text-sm font-semibold block tracking-widest uppercase">Hubungi Langsung</span>
            <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight">
              Lebih suka bicara langsung?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Tim teknis dan konsultan kami siap mendengarkan kebutuhan spesifik Anda. Hubungi kami melalui kanal di bawah ini.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <ContactRow
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
              label="Telepon / WA"
              value={CONTACT_INFO.phone}
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
            />
            <ContactRow
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
              label="Email"
              value={CONTACT_INFO.email}
              href={`mailto:${CONTACT_INFO.email}`}
            />
            <ContactRow
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

          {/* Operational Status Badge */}
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full w-fit mt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {CONTACT_INFO.hours}
          </div>
        </div>
      </section>

    </div>
  );
}

// Komponen kecil untuk baris kontak agar rapi
function ContactRow({ icon, label, value, href }) {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? '_blank' : '_self'} 
      rel="noopener noreferrer" 
      className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300 border border-transparent hover:border-white/10"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:bg-[#00dce5]/10 transition-colors flex-shrink-0">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00dce5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-lg text-white font-medium">{value}</div>
      </div>
    </a>
  );
}