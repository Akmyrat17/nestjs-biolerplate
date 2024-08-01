import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  driver: 'postgres',
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  synchronize: !process.env.PRODUCTION,
  logging: process.env.TYPEORM_LOGGING ? true : false,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
});

export = AppDataSource;
