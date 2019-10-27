import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConfigService } from './mongoose-config.service';
import { ConfigService } from '../config/config.service';

describe('MongooseConfigService', () => {
  let service: MongooseConfigService;
  const configService = {};
  const mongooseConfigService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseConfigService, ConfigService],
    })
      .overrideProvider(ConfigService)
      .useValue(configService)
      .overrideProvider(MongooseConfigService)
      .useValue(mongooseConfigService)
      .compile();

    service = module.get<MongooseConfigService>(MongooseConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
