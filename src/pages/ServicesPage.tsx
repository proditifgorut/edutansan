import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Layanan' },
    { id: 'membership', name: 'Membership Premium' },
    { id: 'konsultasi', name: 'Konsultasi Umum' },
    { id: 'konsultasi-bidang', name: 'Konsultasi Bidang Khusus' },
    { id: 'pembuatan', name: 'Pembuatan Dokumen' },
    { id: 'publikasi', name: 'Publikasi Jurnal' },
    { id: 'bimbingan', name: 'Bimbingan & Editing' },
    { id: 'analisis-data', name: 'Analisis Data' },
    { id: 'literature', name: 'Literature Review' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Akademik Multidisiplin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan akademik Anda - dari Ilmu Komputer, Ekonomi & Manajemen, 
            Sosial Politik, Komunikasi, Administrasi Publik, hingga PGSD dan bidang keilmuan lainnya.
          </p>
        </motion.div>

        {/* Academic Fields Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-blue-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            🎓 Bidang Keilmuan yang Kami Layani:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-blue-800">
            <div>• Ilmu Komputer & IT</div>
            <div>• Ekonomi & Manajemen</div>
            <div>• Sosial Politik</div>
            <div>• Ilmu Komunikasi</div>
            <div>• Administrasi Publik</div>
            <div>• PGSD & Pendidikan</div>
            <div>• Dan semua bidang lainnya</div>
            <div>• Multidisiplin Ilmu</div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari layanan berdasarkan bidang atau jenis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Menampilkan {filteredServices.length} dari {services.length} layanan
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-blue-600 font-medium">
                dalam kategori "{categories.find(c => c.id === selectedCategory)?.name}"
              </span>
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500 mb-4">
              Tidak ada layanan yang sesuai dengan pencarian Anda
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Hapus filter
            </button>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Tidak Menemukan Layanan yang Anda Cari?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Kami melayani semua bidang keilmuan. Hubungi kami untuk konsultasi gratis mengenai kebutuhan akademik Anda.
          </p>
          <a
            href="https://wa.me/6283119226089?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20akademik%20untuk%20bidang%20keilmuan%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
