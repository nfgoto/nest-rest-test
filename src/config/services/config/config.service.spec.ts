import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { ConfigModule } from '../../../config/config.module';
import { MongooseConfigService } from '../mongoose-config/mongoose-config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  const configService = {};
  const mongooseConfigService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, MongooseConfigService],
    })
      .overrideProvider(ConfigService)
      .useValue(configService)
      .overrideProvider(MongooseConfigService)
      .useValue(mongooseConfigService)
      .compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
