import { useState } from 'react';
import { useTheme } from '../context/useTheme';

export default function FloatingWhatsApp() {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const whatsappLink = 'https://wa.me/62817272794?text=Halo%20Ranaix,%20saya%20ingin%20diskusi.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#25D366] hover:bg-[#1eaa54] shadow-lg hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)]'
          : 'bg-[#25D366] hover:bg-[#1eaa54] shadow-lg hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)]'
      } ${isHovered ? 'scale-110' : 'scale-100'}`}
      style={{
        animation: isHovered ? 'none' : 'float-sway 3s ease-in-out infinite'
      }}
    >
      <img src="/assets/logo whatshap.png" alt="WhatsApp" className="w-7 h-7" />
      <span className="text-sm font-semibold">Tanya Ranaix !</span>

      <style>{`
        @keyframes float-sway {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
      `}</style>
    </a>
  );
}
