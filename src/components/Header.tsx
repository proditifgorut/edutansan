import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, GraduationCap, Menu, X, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/services' },
    { name: 'Member Premium', href: '/#premium-membership', special: true },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' }
  ];

  const getLinkClass = (href: string, isSpecial?: boolean) => {
    const isActive = location.pathname + location.hash === href;
    if (isActive) {
      return 'text-blue-600 border-b-2 border-blue-600';
    }
    if (isSpecial) {
      return 'text-yellow-600 hover:text-yellow-700';
    }
    return 'text-gray-700 hover:text-blue-600';
  };
  
  const getMobileLinkClass = (href: string, isSpecial?: boolean) => {
    const isActive = location.pathname + location.hash === href;
    if (isActive || isSpecial) {
      return 'text-blue-600';
    }
    return 'text-gray-700 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Edutansan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${getLinkClass(item.href, item.special)}`}
              >
                {item.special && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {state.items.length}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 py-2 text-sm font-medium ${getMobileLinkClass(item.href, item.special)}`}
              >
                {item.special && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
