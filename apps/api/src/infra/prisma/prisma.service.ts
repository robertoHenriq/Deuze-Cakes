import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  // O método enableShutdownHooks foi removido pois o Prisma 5+ 
  // não suporta mais o evento 'beforeExit' desta forma.
}