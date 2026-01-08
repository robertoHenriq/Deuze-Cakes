import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';


@Injectable()
export class AdminCakesService {
constructor(private prisma: PrismaService, private storage: StorageService) {}


async create(data: { name: string; priceCents: number; categoryId?: number; image?: Express.Multer.File }) {
let imageUrl: string | undefined;
if (data.image) {
imageUrl = await this.storage.uploadFile(data.image);
}


// simple: if categoryId not provided, pick first
const category = data.categoryId ? await this.prisma.category.findUnique({ where: { id: data.categoryId } }) : await this.prisma.category.findFirst();
if (!category) throw new NotFoundException('Category not found');


return this.prisma.cake.create({
data: { name: data.name, priceCents: data.priceCents, imageUrl, categoryId: category.id },
});
}


async remove(id: number) {
await this.prisma.cake.delete({ where: { id } });
return { ok: true };
}
}