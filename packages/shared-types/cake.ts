// Shared types for Cake entity
import { Category } from './category';

export interface CakeDTO {
  id: number;
  name: string;
  description?: string;
  priceCents?: number;
  price?: number;
  imageUrl?: string;
  category?: Category;
  categoryId?: number;
}

export interface CreateCakeDTO {
  name: string;
  description?: string;
  price: number | string;
  categoryId?: number;
}

export interface UpdateCakeDTO extends Partial<CreateCakeDTO> {}
export interface UpdateCakeDTO extends Partial<CreateCakeDTO> {
  id: string;
}
