import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module'; // Verifique se este caminho existe
import { AuthModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';
import { CakesModule } from './module/cakes/cakes.module';
import { AdminModule } from './module/admin/admin.module';
import { CategoriesModule } from './module/categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads'), // Ajuste o caminho para a pasta uploads
      serveRoot: '/uploads',
    }),
      ServeStaticModule.forRoot({
    // Isso busca a pasta uploads na raiz do projeto da API
    rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
  }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule, // Agora o NestJS sabe de onde vem este módulo
    AuthModule,
    UsersModule,
    CakesModule,
    AdminModule,
    CategoriesModule,
    
  ],
})
export class AppModule {}