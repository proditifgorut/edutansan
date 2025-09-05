import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };
    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
    
    const testimonials = [
        { name: 'Ahmad Santoso', role: 'Mahasiswa S2 Ilmu Komputer', content: 'Layanan konsultasi skripsi IT sangat membantu. Tim yang profesional dengan pemahaman teknis yang mendalam.', rating: 5 },
        { name: 'Sari Indrawati', role: 'Dosen Ekonomi Manajemen', content: 'Publikasi jurnal SINTA 4 untuk bidang ekonomi berhasil dalam waktu yang dijanjikan. Highly recommended!', rating: 5 },
        { name: 'Budi Hartono', role: 'Mahasiswa PGSD', content: 'Bimbingan skripsi PGSD sangat detail dan memahami karakteristik pendidikan dasar. Hasil yang memuaskan.', rating: 5 }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
                    <p className="text-xl text-gray-600">Testimoni dari klien yang telah merasakan layanan kami di berbagai disiplin ilmu.</p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                            <div>
                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
