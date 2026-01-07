import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCakeDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  categoryId?: number;
}
