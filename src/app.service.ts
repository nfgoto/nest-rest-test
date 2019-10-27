import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from './config/services/config/config.service';

@Injectable()
export class AppService {
  private isAuthEnabled: boolean;

  constructor(
    private readonly configService: ConfigService,
  ) {
    if (configService.isApiAuthEnabled) {
      Logger.log('API authenticated');
    }

    Logger.log('API unauthenticated');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
