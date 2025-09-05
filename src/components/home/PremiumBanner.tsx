import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, BrainCircuit } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Service } from '../../types';

interface PremiumBannerProps {
  service: Service;
}

const PremiumBanner: React.FC<PremiumBannerProps> = ({ service }) => {
  const { dispatch } = useCart();

  const handleAddPremiumToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: service });
  };

  return (
    <section id="premium-membership" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Crown className="h-10 w-10 text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Jadi Member Premium Edutansan
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Dapatkan keuntungan eksklusif dengan bergabung menjadi member premium kami.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center"><Check className="h-6 w-6 text-green-400 mr-3" /><span>Konsultasi gratis selamanya</span></li>
              <li className="flex items-center"><Check className="h-6 w-6 text-green-400 mr-3" /><span>Akses grup diskusi eksklusif sesuai bidang ilmu</span></li>
              <li className="flex items-center"><Check className="h-6 w-6 text-green-400 mr-3" /><span>Prioritas layanan dan support</span></li>
              <li className="flex items-center"><BrainCircuit className="h-6 w-6 text-green-400 mr-3" /><span>Bimbingan keahlian prompting AI untuk riset</span></li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-4">Rp 100.000</p>
            <button
              onClick={handleAddPremiumToCart}
              className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-lg text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Daftar Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumBanner;
