import { Injectable, Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Mongoose, Connection, mongo } from 'mongoose';
import { IPoi } from 'src/poi/interfaces';
import { GridFSBucket } from 'mongodb';

@Injectable()
export class PoiService {
    private readonly gfs: GridFSBucket;

    constructor(
        @InjectModel('Poi') poiModel: Model<IPoi>,
        @InjectConnection() connection: Connection,
    ) {
        this.gfs = new mongo.GridFSBucket(connection.db);
    }
}
