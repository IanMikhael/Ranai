import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/useTheme';

// Import Komponen Global
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import Halaman
import Home from './pages/Home';
import Service from './pages/Service';
import Client from './pages/Client';
import Contact from './pages/Contact';

// --- TAMBAHAN: Import file uji coba desain untuk Mama ---
// Pastikan path foldernya benar sesuai tempat kamu menyimpan filenya. 
// Kalau kamu simpan di folder components, ubah 'pages' jadi 'components'
import HeroCharity from './pages/HeroCharity'; 

function App() {
  const { isDark } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'dark bg-[#050505] text-white'
          : 'bg-white text-gray-900'
      }`}>
        {/* Navbar akan selalu muncul di atas di semua halaman */}
        <Navbar />

        {/* Area ini akan berubah-ubah sesuai URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* --- TAMBAHAN: Rute Rahasia untuk Testing Desain Mama --- */}
          <Route path="/test-desain" element={<HeroCharity />} />
        </Routes>

        {/* Footer akan selalu muncul di bawah di semua halaman */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;