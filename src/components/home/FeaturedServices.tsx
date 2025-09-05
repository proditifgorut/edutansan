import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../types';
import ServiceCard from '../ServiceCard';

interface FeaturedServicesProps {
  services: Service[];
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ services }) => {
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };
    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan Multidisiplin</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Pilihan layanan terpopuler yang telah dipercaya oleh ribuan mahasiswa dan akademisi.</p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <motion.div key={service.id} variants={fadeInUp}>
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
                        Lihat Semua Layanan
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
