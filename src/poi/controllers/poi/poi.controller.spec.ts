import { Test, TestingModule } from '@nestjs/testing';
import { PoiController } from './poi.controller';
import { PoiService } from '../../../poi/services/poi/poi.service';

describe('Poi Controller', () => {
  let controller: PoiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoiController],
      providers: [PoiService],
    })
      .overrideProvider(PoiService)
      .useValue({})
      .compile();

    controller = module.get<PoiController>(PoiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
