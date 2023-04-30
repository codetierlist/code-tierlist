import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('src/secrets/private-key.pem'),
    cert: fs.readFileSync('src/secrets/public-certificate.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  const port = process.env.PORT || 3333;
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS.split(',') || '',
  });
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });
}
bootstrap();
