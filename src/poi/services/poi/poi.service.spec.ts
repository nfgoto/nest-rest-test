import { Test, TestingModule } from '@nestjs/testing';
import { PoiService } from './poi.service';
import { ConfigModule } from '../../../config/config.module';
import { getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { PoiModel } from '../../../poi/models';

describe('PoiService', () => {
  let service: PoiService;
  const poiService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PoiService,
        {
          provide: getConnectionToken(),
          useValue: {},
        },
        {
          provide: getModelToken('Poi'),
          useValue: PoiModel,
        },
      ],
      imports: [ConfigModule],
    })
      .overrideProvider(PoiService)
      .useValue(poiService)
      .compile();

    service = module.get<PoiService>(PoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
