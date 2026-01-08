import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <--- Garanta que isso está aqui!
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <--- Garanta que isso está aqui!
})
export class PrismaModule {}