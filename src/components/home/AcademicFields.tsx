import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Building2, Users2, MessageSquare, GraduationCap, Globe, BookOpen } from 'lucide-react';

const AcademicFields: React.FC = () => {
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };
    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

    const fields = [
        { icon: <Cpu className="h-8 w-8" />, name: 'Ilmu Komputer & IT', color: 'text-blue-600' },
        { icon: <Building2 className="h-8 w-8" />, name: 'Ekonomi & Manajemen', color: 'text-green-600' },
        { icon: <Users2 className="h-8 w-8" />, name: 'Sosial Politik', color: 'text-red-600' },
        { icon: <MessageSquare className="h-8 w-8" />, name: 'Ilmu Komunikasi', color: 'text-purple-600' },
        { icon: <Building2 className="h-8 w-8" />, name: 'Administrasi Publik', color: 'text-cyan-600' },
        { icon: <GraduationCap className="h-8 w-8" />, name: 'PGSD & Pendidikan', color: 'text-orange-600' },
        { icon: <BookOpen className="h-8 w-8" />, name: 'Semua Bidang Ilmu', color: 'text-indigo-600' },
        { icon: <Globe className="h-8 w-8" />, name: 'Multidisiplin', color: 'text-teal-600' }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bidang Keilmuan yang Kami Layani</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kami menyediakan layanan akademik untuk semua disiplin ilmu dengan standar kualitas tinggi</p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {fields.map((field, index) => (
                        <motion.div key={index} variants={fadeInUp} className="text-center p-6 rounded-lg border bg-gray-50 border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className={`${field.color} mb-4 flex justify-center`}>{field.icon}</div>
                            <h3 className="font-semibold text-gray-900">{field.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AcademicFields;
