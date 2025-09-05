import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Service } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: service });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan layanan ${service.name}. Bisa minta info lebih lanjut?`
    );
    window.open(`https://wa.me/6283119226089?text=${message}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {service.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(service.price)}
          </span>
          {service.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
              Populer
            </span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Tanya via WA</span>
          </button>
          
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>+ Keranjang</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
