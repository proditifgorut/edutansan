import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Solusi Cerdas untuk Kebutuhan Akademik Semua Bidang Ilmu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Platform terpercaya untuk jasa konsultasi dan pengerjaan akademik multidisiplin. 
            Dari Ilmu Komputer, Ekonomi, Sosial Politik, Komunikasi, Administrasi Publik, PGSD hingga semua bidang keilmuan lainnya.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-white text-primary-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Lihat Layanan Kami
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
