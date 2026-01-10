import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Esta linha permite que qualquer um acesse a pasta uploads via URL
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });

  app.enableCors();
  await app.listen(3333);
}
bootstrap();