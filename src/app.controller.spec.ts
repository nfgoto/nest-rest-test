import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/services/config/config.service';
import { ConfigModule } from './config/config.module';
import { PoiModule } from './poi/poi.module';
import { getConnectionToken, MongooseModule, getModelToken } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/services/mongoose-config/mongoose-config.service';
import { PoiModel } from './poi/models';
import { PoiService } from './poi/services/poi/poi.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
      ],
      controllers: [AppController],
      providers: [
        AppService,
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
    })
      .overrideProvider(PoiService)
      .useValue(PoiService)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
