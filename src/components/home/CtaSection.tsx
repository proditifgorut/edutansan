import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CtaSection: React.FC = () => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Perjalanan Akademik Anda?</h2>
                    <p className="text-xl mb-8 text-blue-100">Bergabunglah dengan ribuan klien dari berbagai bidang keilmuan yang telah mempercayai kami.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/services" className="inline-flex items-center bg-white text-primary-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Lihat Semua Layanan
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a href="https://wa.me/6283119226089?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20akademik." target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-200">
                            Konsultasi Gratis
                            <MessageSquare className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;
