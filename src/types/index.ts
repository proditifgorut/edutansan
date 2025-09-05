export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface CustomerData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  university?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerData: CustomerData;
  totalAmount: number;
  status: 'pending' | 'paid' | 'completed' | 'cancelled';
  createdAt: Date;
}
