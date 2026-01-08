import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class CakesService {
constructor(private prisma: PrismaService) {}


async findAll() {
return this.prisma.cake.findMany({ include: { category: true } });
}


async findById(id: number) {
return this.prisma.cake.findUnique({ where: { id } });
}
}