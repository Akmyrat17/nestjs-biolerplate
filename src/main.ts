import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging-interceptor';
import { LoggingExceptionFilter } from './common/http/logging-exception.filter';
import { SwaggerConfig } from './config/swagger.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/http/exception.filter';
import { I18nService } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  SwaggerConfig(app, '1');
  const config: ConfigService = app.get(ConfigService);
  const port = config.get('API_PORT');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(
    new LoggingExceptionFilter(),
    new HttpExceptionFilter(app.get(HttpAdapterHost)),
  );
  await app.listen(port);
}
bootstrap().then(() => {
  Logger.log(`Application is running on port ${process.env.API_PORT}`);
});
