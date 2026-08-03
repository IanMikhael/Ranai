import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen Global
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Halaman
import Home from './pages/Home';
import Service from './pages/Service';
import Client from './pages/Client';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Navbar akan selalu muncul di atas di semua halaman */}
      <Navbar />
      
      {/* Area ini akan berubah-ubah sesuai URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer akan selalu muncul di bawah di semua halaman */}
      <Footer />
    </Router>
  );
}

export default App;