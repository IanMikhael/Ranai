// ============================================
// COPYWRITING & CONTENT CONSTANTS
// Extracted dari web lama: ranaix.com
// ============================================

export const HERO = {
  tag: 'System Integration & Operational Platform',
  title: 'Bangun Sistem Informasi Operasional yang Lebih Produktif',
  description: 'Ranaix membantu organisasi merancang dan mengintegrasikan sistem informasi untuk meningkatkan visibilitas operasional, mempercepat pengambilan keputusan, dan menjaga stabilitas bisnis.',
  cta: 'Diskusikan Kebutuhan Sistem Anda'
};

export const CLIENTS_SECTION = {
  tag: 'Clients',
  heading: 'Pernah bekerja bersama',
  logos: [
    { name: 'Mitsubishi Motors Indonesia', image: '/assets/logo-mmid.png' },
    { name: 'KidZania Jakarta', image: '/assets/logo-kidz.png' },
    { name: 'MS Glow Aesthetic Clinic', image: '/assets/logo-clinic.png' },
    { name: 'J99 Corp', image: '/assets/logo-j99.png' }
  ]
};

export const CLIENT_STORIES = [
  {
    id: 'kidzania',
    name: 'KidZania Jakarta x MMID',
    title: 'Mengubah 4 Konsol Menjadi 8 Terminal Pemain',
    description: 'Ranaix membantu KidZania Jakarta meningkatkan efisiensi operasional Mitsubishi Motors Car Design Center.',
    metrics: [
      { value: '2x', label: 'Capacity' },
      { value: '8', label: 'Players' },
      { value: '0', label: 'Hardware Upgrade' }
    ],
    image: '/assets/kidzania.png',
    whatsappLink: 'https://wa.me/62817272794?text=Halo%20Ranaix%2C%20saya%20tertarik%20dengan%20case%20KidZania%20Jakarta%20x%20MMID%20(Mengubah%204%20Konsol%20Menjadi%208%20Terminal%20Pemain).%20Bisa%20diskusi%20lebih%20lanjut%3F'
  },
  {
    id: 'clinic',
    name: 'MS Glow Aesthetic Clinic',
    title: 'Operasional Lebih Cepat, Akurat, dan Terkontrol',
    description: 'Ranaix mengintegrasikan sistem registrasi pasien, manajemen inventaris klinik, dan pembayaran ke dalam satu alur kerja yang mulus, menghilangkan proses manual yang rentan kesalahan.',
    metrics: [
      { value: '60%', label: 'Kecepatan Registrasi' },
      { value: '80%', label: 'Kesalahan Berkurang' },
      { value: '50%', label: 'Kapasitas Meningkat' }
    ],
    image: '/assets/ms-glow.png'
  },
  {
    id: 'ngaji',
    name: 'Ruang Ngaji',
    title: 'Edukasi Lebih Skalabel dan Efisien',
    description: 'Membangun sistem administrasi dan platform interaktif yang mampu menangani lonjakan peserta secara real-time, mempermudah pengelolaan kelas dan laporan.',
    metrics: [
      { value: '5x', label: 'Peserta Meningkat' },
      { value: '70%', label: 'Kemudahan Administrasi' },
      { value: '100%', label: 'Online Adaptation' }
    ],
    image: '/assets/ruang-ngaji.png'
  },
  {
    id: 'j99',
    name: 'J99 Corp',
    title: 'Satu Sistem untuk Menyelaraskan Seluruh Tim',
    description: 'Mengintegrasikan operasional gudang, logistik, dan penjualan menjadi satu dashboard terpusat, memastikan koordinasi antar divisi berjalan tanpa hambatan komunikasi.',
    metrics: [
      { value: '50%', label: 'Efisiensi Waktu' },
      { value: '60%', label: 'Akurasi Data' },
      { value: '50%', label: 'Operasional Cost' }
    ],
    image: '/assets/j99.png'
  }
];

export const SERVICES_SECTION = {
  tag: 'Solusi Teknologi untuk Operasional',
  heading: 'Fondasi digital untuk skala global.',
  services: [
    {
      id: 'integrasi',
      title: 'Integrasi Sistem Bisnis',
      description: 'Hubungkan sistem untuk aliran data real-time antar platform.'
    },
    {
      id: 'pengembangan',
      title: 'Pengembangan',
      description: 'Bangun sistem custom sesuai kebutuhan bisnis.'
    },
    {
      id: 'otomatisasi',
      title: 'Otomatisasi',
      description: 'Otomatisasi proses rutin operasional Anda.'
    },
    {
      id: 'experience',
      title: 'Teknologi Interaktif (Experience)',
      description: 'Mengubah pengalaman pengguna menjadi lebih cerdas.'
    }
  ]
};

export const USAGE_SECTION = {
  tag: 'Penggunaan Sistem',
  heading: 'Aktivitas Lebih Terstruktur, Keputusan Lebih Cepat.',
  tabs: [
    {
      id: 'monitoring',
      label: 'Pemantauan',
      title: 'Visibilitas Bisnis',
      description: 'Pantau penjualan dari POS, pergerakan stok di toko dan gudang, serta aktivitas operasional secara real-time. Setiap perubahan dapat langsung terdeteksi sehingga kondisi bisnis di setiap cabang dapat dipahami dengan cepat dan akurat.',
      image: '/assets/visibilitas.png',
      features: [
        'Data real-time tanpa delay',
        'Akses multi-device & multi-cabang',
        'Otomatisasi laporan harian'
      ]
    },
    {
      id: 'sync',
      label: 'Sinkronisasi',
      title: 'Koordinasi Lancar',
      description: 'Sinkronkan operasional antara toko, gudang, dan kanal penjualan dalam satu sistem terpusat. Informasi mengalir secara konsisten sehingga mengurangi miskomunikasi, mencegah duplikasi pekerjaan, dan memastikan distribusi berjalan lebih efisien.',
      image: '/assets/koordinasi.png',
      features: [
        'Data real-time tanpa delay',
        'Akses multi-device & multi-cabang',
        'Otomatisasi laporan harian'
      ]
    },
    {
      id: 'analysis',
      label: 'Analisis',
      title: 'Berbasis Data',
      description: 'Gunakan data penjualan dan perilaku pelanggan yang terintegrasi untuk memahami permintaan pasar. Dengan data yang konsisten, keputusan dapat diambil lebih tepat, mulai dari pengelolaan stok hingga strategi penjualan.',
      image: '/assets/data.png',
      features: [
        'Data real-time tanpa delay',
        'Akses multi-device & multi-cabang',
        'Otomatisasi laporan harian'
      ]
    }
  ]
};

export const DEEP_DIVE_SECTION = {
  tag: 'Penggunaan Sistem',
  heading: 'Aktivitas Lebih Terstruktur, Keputusan Lebih Cepat.',
  subHeading: 'Keputusan Lebih Cepat.',
  description: 'Dashboard terpusat yang mengumpulkan data dari seluruh divisi dan cabang. Pantau performa, deteksi anomali, dan respon insiden dalam hitungan detik.',
  features: [
    'Pemantauan: Visibilitas bisnis (POS & Inventory) real-time',
    'Sinkronisasi: Koordinasi lancar antar cabang dan gudang',
    'Analisis: Keputusan tepat berbasis data terintegrasi'
  ]
};

export const SERVICE_HOW_WE_WORK = [
  {
    num: '01',
    title: 'Diskusi & Audit',
    description: 'Memahami arsitektur saat ini dan menyusun strategi integrasi terbaik.'
  },
  {
    num: '02',
    title: 'Desain & Pengembangan',
    description: 'Membangun sistem custom dan mengotomatisasi alur kerja Anda.'
  },
  {
    num: '03',
    title: 'Deploy & Dukungan',
    description: 'Peluncuran sistem tanpa hambatan disertai pemantauan 24/7.'
  }
];

export const FINAL_CTA = {
  heading: 'Bangun Sistem yang Mendukung Pertumbuhan Bisnis.',
  description: 'Diskusikan kebutuhan sistem organisasi Anda dan temukan bagaimana integrasi yang tepat dapat meningkatkan visibilitas, koordinasi, dan pengambilan keputusan.',
  cta: 'Diskusikan Sistem Anda',
  whatsappLink: 'https://wa.me/62817272794?text=Halo%20Ranaix,%20saya%20ingin%20diskusi.'
};

export const FOOTER = {
  company: 'PT Biometrika Teknologi Indonesia',
  location: 'Kebagusan, Jakarta Selatan, Indonesia',
  description: 'Membangun fondasi digital yang tangguh untuk masa depan bisnis Anda. Integrasi sistem tanpa batas.',
  newsletter: {
    placeholder: 'Masukkan email bisnis Anda',
    buttonText: 'Berlangganan',
    description: 'Dapatkan insight terbaru tentang arsitektur sistem dan integrasi data langsung ke inbox Anda.'
  },
  links: {
    services: ['Integrasi Sistem', 'Pengembangan', 'Otomatisasi', 'Experience'],
    company: ['About', 'Client', 'Service', 'Contact', 'News', 'Jobs'],
    help: ['Help Center', 'Mitra', 'Privacy', 'Policy']
  }
};

export const CONTACT_INFO = {
  phone: '+62 817-272-794',
  email: 'hello@ranaix.com',
  location: 'Jakarta, Indonesia',
  hours: 'Senin - Jumat, 09.00 - 18.00 WIB'
};
