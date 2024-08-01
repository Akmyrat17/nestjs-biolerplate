// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import {
//     MeiliModuleOptionsFactory,
//     MeiliModuleOptions,
// } from 'nestjs-meilisearch';
// @Injectable()
// export class MeiliSearchConfigService implements MeiliModuleOptionsFactory {
//     constructor(private config: ConfigService) { }
//     createMeiliOptions(): MeiliModuleOptions {
//         const host = this.config.get('SEARCH_HOST');

//         const apiKey = this.config.get('SEARCH_KEY');

//         return {
//             host: host,
//             apiKey: apiKey,
//         };
//     }
// }
