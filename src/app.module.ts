import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { MongooseConfigService } from './config/services/mongoose-config/mongoose-config.service';
import { PoiModule } from './poi/poi.module';

@Module({
  imports: [
    ConfigModule,
    PoiModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
