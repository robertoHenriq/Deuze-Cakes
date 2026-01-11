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
    
    rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
  }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule, 
    AuthModule,
    UsersModule,
    CakesModule,
    AdminModule,
    CategoriesModule,
    
  ],
})
export class AppModule {}