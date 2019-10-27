import { Document } from 'mongoose';

export interface IPoi extends Document {
    name: string;
    position: {
        latitude: number;
        longitude: number;
    };
}