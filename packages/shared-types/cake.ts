// packages/shared-types/cake.ts
import { Category } from './category';

export interface CakeDTO {
  id: number;
  name: string;
  description?: string;
  priceCents: number; // Removi o '?', pois todo bolo cadastrado tem preço
  price: number;      // Campo calculado que sua API deve enviar ou o front calcular
  imageUrl?: string;
  category?: Category;
  categoryId?: number;
}

export interface CreateCakeDTO {
  name: string;
  description?: string;
  price: number; // No cadastro, usamos o valor decimal (ex: 50.90)
  categoryId?: number;
}

// Forma correta de estender:
export interface UpdateCakeDTO extends Partial<CreateCakeDTO> {
  id: number; // Alinhado com o banco que usa Number
}