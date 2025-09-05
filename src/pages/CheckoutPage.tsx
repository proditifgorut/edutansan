import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CustomerData } from '../types';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  
  const [customerData, setCustomerData] = useState<CustomerData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    university: ''
  });
  
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const paymentMethods = [
    { id: 'bank_transfer', name: 'Transfer Bank (Virtual Account)', icon: <Building className="h-6 w-6" />, description: 'BCA, BNI, BRI, Mandiri' },
    { id: 'ewallet', name: 'E-Wallet', icon: <Smartphone className="h-6 w-6" />, description: 'GoPay, OVO, Dana, ShopeePay' },
    { id: 'credit_card', name: 'Kartu Kredit/Debit', icon: <CreditCard className="h-6 w-6" />, description: 'Visa, Mastercard, JCB' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    console.log("Order submitted:", { customerData, items: state.items, total: state.total, paymentMethod: selectedPayment });
    
    setTimeout(() => {
      // In a real application, you would integrate with a payment gateway here.
      // On successful payment:
      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-success');
      setIsLoading(false);
    }, 2000);
  };

  const isFormValid = customerData.fullName && customerData.email && customerData.whatsappNumber && selectedPayment;

  if (state.items.length === 0 && !isLoading) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Lengkapi data dan pilih metode pembayaran</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Pelanggan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input type="text" name="fullName" value={customerData.fullName} onChange={handleInputChange} required className="w-full rounded-md" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" value={customerData.email} onChange={handleInputChange} required className="w-full rounded-md" placeholder="nama@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                    <input type="tel" name="whatsappNumber" value={customerData.whatsappNumber} onChange={handleInputChange} required className="w-full rounded-md" placeholder="08xxxxxxxxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Universitas/Institusi (Opsional)</label>
                    <input type="text" name="university" value={customerData.university} onChange={handleInputChange} className="w-full rounded-md" placeholder="Nama universitas" />
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Metode Pembayaran</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${selectedPayment === method.id ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="paymentMethod" value={method.id} checked={selectedPayment === method.id} onChange={(e) => setSelectedPayment(e.target.value)} className="h-4 w-4 text-primary focus:ring-primary" />
                      <div className="ml-3 flex items-center space-x-3">
                        <div className={`p-2 rounded-md ${selectedPayment === method.id ? 'text-primary' : 'text-gray-400'}`}>{method.icon}</div>
                        <div>
                          <p className="font-medium text-gray-900">{method.name}</p>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <button type="submit" disabled={!isFormValid || isLoading} className="w-full py-4 px-6 rounded-lg font-medium text-lg transition-colors duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark">
                  {isLoading ? 'Memproses...' : `Bayar Sekarang ${formatPrice(state.total)}`}
                </button>
              </motion.div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h2>
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.service.id} className="flex items-center space-x-3">
                    <img src={item.service.image} alt={item.service.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{item.service.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-sm">{formatPrice(item.service.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(state.total)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
