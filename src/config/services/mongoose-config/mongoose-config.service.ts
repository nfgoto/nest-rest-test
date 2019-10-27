import { Injectable, Inject } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '../config/config.service';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    configSvc: ConfigService;

    constructor() {
        this.configSvc = new ConfigService();
    }
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: this.configSvc.get('MONGO_URL'),
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };
    }
}
