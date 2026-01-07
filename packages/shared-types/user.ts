// Shared types for User entity
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserDTO extends Partial<CreateUserDTO> {
  id: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}
