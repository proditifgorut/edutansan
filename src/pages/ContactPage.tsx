import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau butuh konsultasi khusus? Tim kami siap membantu Anda.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">Layanan pelanggan & konsultasi cepat.</p>
                  <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    +62 831-1922-6089
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">Untuk pertanyaan umum dan kerjasama.</p>
                  <a href="mailto:info@edutansan.com" className="text-primary hover:underline">
                    info@edutansan.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alamat</h3>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                  <p className="text-gray-500 text-sm">Layanan kami sepenuhnya online untuk menjangkau seluruh Indonesia.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
             <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Kirim Pesan
                    </button>
                </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
