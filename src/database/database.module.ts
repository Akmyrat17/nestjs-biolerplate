import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './typeorm.service';
// import { MeiliSearchModule } from 'nestjs-meilisearch';
// import { MeiliSearchConfigService } from './meilisearch.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const datasource = await new DataSource(options).initialize();
        return datasource;
      },
    }),
    // MeiliSearchModule.forRootAsync({
    //     useClass: MeiliSearchConfigService,
    // }),
  ],
})
export class DataBaseModule {}
