import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderSuccessPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center max-w-2xl mx-auto"
      >
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pesanan Berhasil!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Terima kasih telah melakukan pemesanan di Edutansan. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk langkah selanjutnya.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors duration-200"
        >
          Kembali ke Beranda
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default OrderSuccessPage;
