import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { configService } = this;
    return {
      type: 'postgres',
      host: configService.getOrThrow('TYPEORM_HOST'),
      port: configService.getOrThrow('TYPEORM_PORT'),
      username: configService.getOrThrow('TYPEORM_USERNAME'),
      password: configService.getOrThrow('TYPEORM_PASSWORD'),
      database: configService.getOrThrow('TYPEORM_DATABASE'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    };
  }
}
