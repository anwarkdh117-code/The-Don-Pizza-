export type CategoryId = 
  | 'all'
  | 'pizza'
  | 'burgers'
  | 'wraps'
  | 'pasta'
  | 'fries'
  | 'wings'
  | 'platters'
  | 'rolls'
  | 'nuggets'
  | 'drinks';

export interface PizzaPrice {
  small?: number;
  medium?: number;
  large?: number;
  single?: number;
  family?: number;
  price?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description?: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  prices: {
    size?: string;
    amount: number;
  }[];
}

export interface DealItem {
  id: string;
  dealNumber: number;
  title: string;
  items: string[];
  price: number | { tf: number; sf: number }; // TF = Tikka/Fajita, SF = Special Flavors
  badge?: string;
  image: string;
}

export interface ExtraTopping {
  id: string;
  name: string;
  price: number;
  icon: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'pizza' | 'burger' | 'wrap' | 'wings' | 'fries' | 'pasta' | 'kitchen' | 'restaurant' | 'customers';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface CartItem {
  cartId: string;
  id: string;
  title: string;
  selectedSize?: string;
  unitPrice: number;
  quantity: number;
  selectedToppings?: string[];
  specialInstructions?: string;
  image?: string;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  address: string;
  orderType: 'delivery' | 'takeaway';
  paymentMethod: 'cash' | 'easypaisa' | 'jazzcash';
  notes?: string;
}
