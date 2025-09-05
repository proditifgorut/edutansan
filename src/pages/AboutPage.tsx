import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Users, Eye } from 'lucide-react';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <GraduationCap className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Tentang Edutansan
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Misi kami adalah menjadi solusi cerdas dan terpercaya untuk semua kebutuhan akademik Anda, lintas disiplin ilmu.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-3xl font-bold text-gray-900">Visi & Misi Kami</h2>
            <p className="mt-4 text-gray-600">
              Edutansan didirikan dengan semangat untuk membantu mahasiswa, peneliti, dan akademisi dalam mencapai kesuksesan. Kami memahami tantangan dalam dunia akademik yang semakin kompleks dan kompetitif.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex">
                <Eye className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Visi</h3>
                  <p className="text-gray-600">Menjadi platform layanan akademik nomor satu di Indonesia yang dikenal karena integritas, kualitas, dan inovasi.</p>
                </div>
              </div>
              <div className="flex">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Misi</h3>
                  <p className="text-gray-600">Menyediakan layanan konsultasi dan pengerjaan akademik yang profesional, terpercaya, dan dapat diakses oleh semua kalangan dari berbagai bidang keilmuan.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/e0f2fe/0c4a6e?text=Tim+Kami" 
              alt="Tim Edutansan" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate"
          className="mt-20 text-center"
        >
            <Users className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Tim Ahli Multidisiplin</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Tim kami terdiri dari para ahli, akademisi, dan praktisi dari berbagai bidang ilmu, termasuk Ilmu Komputer, Ekonomi, Sosial Politik, Komunikasi, Pendidikan, dan banyak lagi. Setiap proyek ditangani oleh spesialis yang relevan dengan bidang Anda untuk memastikan kualitas dan pemahaman mendalam.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
