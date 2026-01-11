import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';


@Injectable()
export class AdminCakesService {
constructor(private prisma: PrismaService, private storage: StorageService) {}
    

async create(data: {
  
  name: string;
  priceCents: number;
  description?: string;
  categoryId?: number;
  image?: Express.Multer.File;
}) {
let imageUrl: string | undefined;
if (data.image) {
imageUrl =  await this.storage.uploadFile(data.image);
}

const category = await this.prisma.category.findUnique({
  where: { id: data.categoryId },
});

if (!category) {
  throw new NotFoundException("Category not found");
}



return this.prisma.cake.create({
data: { name: data.name,description: data.description, priceCents: data.priceCents, imageUrl, categoryId: category.id },
});
}


async remove(id: number) {
  const cake = await this.prisma.cake.findUnique({ where: { id } });
  if (!cake) throw new NotFoundException();

  if (cake.imageUrl) {
    await this.storage.deleteFileByUrl(cake.imageUrl);
  }

  await this.prisma.cake.delete({ where: { id } });

  return { ok: true };
}

}   