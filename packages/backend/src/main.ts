import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3300);
  Logger.log(`Server running on http://localhost:3300`,'Bootstrap');
  console.log(`Server running on http://localhost:3300`);
}
bootstrap();
