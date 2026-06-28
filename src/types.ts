export type CategoryId = 'todos' | 'desayunos' | 'vegetariana' | 'frituras';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // en Soles (S/)
  category: 'desayunos' | 'vegetariana' | 'frituras';
  image: string;
  badge?: string;
  isVeggie?: boolean;
  calories?: string;
  popular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface PaymentInfo {
  id: string;
  name: string;
  color: string;
  description: string;
  accountNumber?: string;
  ownerName?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteDish: string;
  timeAgo: string;
}
