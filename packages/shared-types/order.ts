// Shared types for Order entity
export interface Order {
  id: string;
  userId: string;
  total: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  cakeId: string;
  quantity: number;
  price: number;
}

export interface CreateOrderDTO {
  userId: string;
  items: OrderItemDTO[];
}

export interface OrderItemDTO {
  cakeId: string;
  quantity: number;
}
