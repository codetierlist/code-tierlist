import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS.split(',') || '',
  });
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
bootstrap();
