import { NestFactory, FastifyAdapter } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as raven from 'raven';
import * as path from 'path';

import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import { HttpExceptionFilter } from './http-exception.filter';
// import { ErrorsInterceptor } from './interceptors';

async function bootstrap() {
  if (!process.env.NODE_ENV) {
    await dotenv.config({silent: true, path: path.resolve(__dirname, '../.env')});
  }
  await raven.config(process.env.SENTRY_DSN).install();
  const app = await NestFactory.create(ApplicationModule, new FastifyAdapter());
  app.use(raven.requestHandler());
  app.use(raven.errorHandler());
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new ErrorsInterceptor());
  app.useStaticAssets({
    root: path.resolve(__dirname, '../../client/dist'),
  });
  // app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpExceptionFilter());
  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0');
}

bootstrap();