import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  await dotenv.config({silent: true, path: '../.env'});
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
}

bootstrap();
