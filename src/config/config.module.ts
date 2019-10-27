import { Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';
import { MongooseConfigService } from './services/mongoose-config/mongoose-config.service';

@Module({
  providers: [
    {
      provide: MongooseConfigService,
      useValue: new MongooseConfigService(),
    },
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService, MongooseConfigService],
})
export class ConfigModule { }
