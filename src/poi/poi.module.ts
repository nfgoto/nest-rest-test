import { Module } from '@nestjs/common';
import { PoiController } from './controllers/poi/poi.controller';
import { PoiService } from './services/poi/poi.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { PoiModel } from './models';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [PoiController],
  providers: [
    PoiService,
    {
      provide: getModelToken('Poi'),
      useValue: PoiModel,
    },
  ],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([PoiModel]),
  ],
})
export class PoiModule { }
