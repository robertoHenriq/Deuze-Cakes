import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Verifique se o caminho está correto aqui também

@Module({
  imports: [PrismaModule], // ISSO É O QUE FALTA!
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}