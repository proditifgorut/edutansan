import { Service } from '../types';

export const services: Service[] = [
  // New Premium Membership Service
  {
    id: 'member-premium',
    name: 'Member Premium Edutansan',
    description: 'Akses eksklusif ke grup diskusi, prioritas layanan, dan free konsultasi selamanya. Termasuk panduan dan bimbingan keahlian untuk menguasai prompting AI dalam mengeksplorasi data penelitian.',
    price: 100000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/d4af37/000000?text=PREMIUM',
    category: 'membership',
    featured: true
  },
  // Existing services
  {
    id: 'konsultasi-proposal-skripsi',
    name: 'Konsultasi Proposal Skripsi',
    description: 'Bimbingan menyeluruh untuk penyusunan proposal skripsi yang berkualitas dan sesuai standar akademik untuk semua bidang keilmuan.',
    price: 500000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/3b82f6/ffffff?text=Proposal+Skripsi',
    category: 'konsultasi',
    featured: true
  },
  {
    id: 'jasa-proposal-tesis',
    name: 'Jasa Pembuatan Proposal Tesis',
    description: 'Layanan pembuatan proposal tesis yang komprehensif dengan metodologi penelitian yang tepat untuk semua disiplin ilmu.',
    price: 1500000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/10b981/ffffff?text=Proposal+Tesis',
    category: 'pembuatan',
    featured: true
  },
  {
    id: 'publikasi-jurnal-sinta-6',
    name: 'Jasa Publikasi Jurnal SINTA 6',
    description: 'Bantuan publikasi artikel ilmiah di jurnal terakreditasi SINTA 6 dengan success rate tinggi untuk semua bidang keilmuan.',
    price: 2000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/f59e0b/ffffff?text=SINTA+6',
    category: 'publikasi'
  },
  {
    id: 'publikasi-jurnal-sinta-5',
    name: 'Jasa Publikasi Jurnal SINTA 5',
    description: 'Layanan publikasi artikel ilmiah di jurnal terakreditasi SINTA 5 dengan proses yang terpercaya.',
    price: 3000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/ef4444/ffffff?text=SINTA+5',
    category: 'publikasi',
    featured: true
  },
  {
    id: 'publikasi-jurnal-sinta-4',
    name: 'Jasa Publikasi Jurnal SINTA 4',
    description: 'Publikasi artikel ilmiah di jurnal terakreditasi SINTA 4 dengan standar kualitas internasional.',
    price: 5000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/8b5cf6/ffffff?text=SINTA+4',
    category: 'publikasi'
  },
  {
    id: 'publikasi-jurnal-sinta-3',
    name: 'Jasa Publikasi Jurnal SINTA 3',
    description: 'Layanan publikasi artikel ilmiah di jurnal terakreditasi SINTA 3 dengan reputasi terbaik.',
    price: 8000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/06b6d4/ffffff?text=SINTA+3',
    category: 'publikasi'
  },
  {
    id: 'publikasi-jurnal-internasional',
    name: 'Jasa Publikasi Jurnal Internasional (Non-SINTA)',
    description: 'Publikasi artikel ilmiah di jurnal internasional bereputasi dengan jangkauan global.',
    price: 6000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/84cc16/ffffff?text=International',
    category: 'publikasi'
  },
  {
    id: 'bimbingan-proofreading-tesis',
    name: 'Bimbingan & Proofreading Tesis',
    description: 'Layanan bimbingan dan proofreading tesis untuk memastikan kualitas penulisan yang optimal.',
    price: 1000000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/ec4899/ffffff?text=Proofreading',
    category: 'bimbingan'
  },

  // New services for specific academic disciplines
  {
    id: 'konsultasi-skripsi-komputer',
    name: 'Konsultasi Skripsi Ilmu Komputer',
    description: 'Bimbingan khusus untuk skripsi bidang ilmu komputer, informatika, sistem informasi, dan teknologi informasi.',
    price: 750000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/6366f1/ffffff?text=IT+%26+Computer',
    category: 'konsultasi-bidang',
    featured: true
  },
  {
    id: 'konsultasi-skripsi-ekonomi',
    name: 'Konsultasi Skripsi Ekonomi & Manajemen',
    description: 'Bimbingan untuk skripsi bidang ekonomi, manajemen, bisnis, dan akuntansi dengan metodologi yang tepat.',
    price: 700000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/059669/ffffff?text=Economics+%26+Business',
    category: 'konsultasi-bidang'
  },
  {
    id: 'konsultasi-skripsi-sosial',
    name: 'Konsultasi Skripsi Sosial Politik',
    description: 'Bimbingan khusus untuk penelitian bidang ilmu sosial, politik, hubungan internasional, dan pemerintahan.',
    price: 650000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/dc2626/ffffff?text=Social+Politics',
    category: 'konsultasi-bidang'
  },
  {
    id: 'konsultasi-skripsi-komunikasi',
    name: 'Konsultasi Skripsi Ilmu Komunikasi',
    description: 'Bimbingan untuk penelitian bidang komunikasi, jurnalistik, public relations, dan media studies.',
    price: 650000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/7c3aed/ffffff?text=Communication',
    category: 'konsultasi-bidang'
  },
  {
    id: 'konsultasi-skripsi-adminpub',
    name: 'Konsultasi Skripsi Administrasi Publik',
    description: 'Bimbingan khusus untuk penelitian administrasi publik, kebijakan publik, dan manajemen pemerintahan.',
    price: 650000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/0891b2/ffffff?text=Public+Admin',
    category: 'konsultasi-bidang'
  },
  {
    id: 'konsultasi-skripsi-pgsd',
    name: 'Konsultasi Skripsi PGSD',
    description: 'Bimbingan untuk penelitian Pendidikan Guru Sekolah Dasar dengan fokus pada pendidikan dan pembelajaran.',
    price: 600000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/ea580c/ffffff?text=PGSD+Education',
    category: 'konsultasi-bidang'
  },

  // Research methodology services
  {
    id: 'analisis-data-kuantitatif',
    name: 'Jasa Analisis Data Kuantitatif',
    description: 'Layanan analisis data kuantitatif menggunakan SPSS, R, atau software statistik lainnya untuk semua bidang.',
    price: 800000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/16a34a/ffffff?text=Data+Analysis',
    category: 'analisis-data'
  },
  {
    id: 'analisis-data-kualitatif',
    name: 'Jasa Analisis Data Kualitatif',
    description: 'Layanan analisis data kualitatif menggunakan NVivo, Atlas.ti, atau metode manual yang sistematis.',
    price: 900000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/c2410c/ffffff?text=Qualitative+Analysis',
    category: 'analisis-data'
  },

  // Literature review services
  {
    id: 'systematic-literature-review',
    name: 'Systematic Literature Review',
    description: 'Layanan penyusunan systematic literature review dan meta-analysis untuk penelitian yang komprehensif.',
    price: 1200000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/be185d/ffffff?text=Literature+Review',
    category: 'literature'
  },

  // Professional writing services
  {
    id: 'penulisan-artikel-ilmiah',
    name: 'Jasa Penulisan Artikel Ilmiah',
    description: 'Layanan penulisan artikel ilmiah berkualitas tinggi sesuai dengan standar jurnal internasional dan nasional.',
    price: 1500000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/4338ca/ffffff?text=Article+Writing',
    category: 'pembuatan'
  },
  {
    id: 'translate-artikel-english',
    name: 'Jasa Translate Artikel ke Bahasa Inggris',
    description: 'Layanan penerjemahan artikel ilmiah ke bahasa Inggris dengan kualitas akademik yang tinggi.',
    price: 500000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/0d9488/ffffff?text=Translation',
    category: 'bimbingan'
  },

  // Specialized consultation services
  {
    id: 'konsultasi-metodologi',
    name: 'Konsultasi Metodologi Penelitian',
    description: 'Bimbingan khusus untuk pemilihan dan penerapan metodologi penelitian yang tepat untuk semua disiplin ilmu.',
    price: 400000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/9333ea/ffffff?text=Methodology',
    category: 'konsultasi'
  },
  {
    id: 'konsultasi-statistik',
    name: 'Konsultasi Statistik Penelitian',
    description: 'Bimbingan untuk pemilihan uji statistik, interpretasi hasil, dan penulisan laporan analisis data.',
    price: 450000,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/dc2626/ffffff?text=Statistics',
    category: 'konsultasi'
  }
];
