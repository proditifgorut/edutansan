import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
    const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };
    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
    
    const stats = [
        { icon: <Users className="h-12 w-12 text-primary mx-auto mb-4" />, value: '1000+', label: 'Klien dari Berbagai Bidang' },
        { icon: <Award className="h-12 w-12 text-primary mx-auto mb-4" />, value: '95%', label: 'Success Rate Multidisiplin' },
        { icon: <Clock className="h-12 w-12 text-primary mx-auto mb-4" />, value: '24/7', label: 'Support Semua Bidang' },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div key={index} variants={fadeInUp} className="text-center">
                            {stat.icon}
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
