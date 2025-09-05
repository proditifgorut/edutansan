import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };
    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
    
    const steps = [
        { step: '1', title: 'Pilih Layanan', description: 'Browse dan pilih layanan akademik sesuai dengan bidang keilmuan Anda.' },
        { step: '2', title: 'Tambah ke Keranjang', description: 'Tambahkan layanan yang dipilih ke keranjang belanja Anda.' },
        { step: '3', title: 'Lakukan Pembayaran', description: 'Checkout dan bayar dengan metode pembayaran yang aman dan terpercaya.' },
        { step: '4', title: 'Konsultasi Dimulai', description: 'Tim ahli sesuai bidang Anda akan menghubungi dan membantu Anda.' }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
                    <p className="text-xl text-gray-600">Proses pemesanan yang mudah dan transparan untuk semua bidang keilmuan.</p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
