import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCakeDto } from './dto/create-cake.dto';
import { unlink } from 'fs/promises';
import * as path from 'path';

@Injectable()
export class CakesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cake.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.cake.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async create(createCakeDto: CreateCakeDto, imagePath?: string) {
    let imageUrl: string | null = null;
    
    if (imagePath) {
      const fileName = path.basename(imagePath);
      imageUrl = `/uploads/cakes/${fileName}`;
    }

    return this.prisma.cake.create({
      data: {
        name: createCakeDto.name,
        description: createCakeDto.description || '',
        priceCents: Math.round(parseFloat(createCakeDto.price.toString()) * 100),
        imageUrl,
        categoryId: createCakeDto.categoryId || 1, // Default category
      },
      include: { category: true },
    });
  }

  async remove(id: number) {
    const cake = await this.prisma.cake.findUnique({
      where: { id },
    });

    if (cake?.imageUrl) {
      try {
        const filePath = path.join(process.cwd(), 'public', cake.imageUrl);
        await unlink(filePath);
      } catch (error) {
        console.error('Erro ao deletar arquivo:', error);
      }
    }

    return this.prisma.cake.delete({
      where: { id },
    });
  }
}
