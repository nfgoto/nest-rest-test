import { Schema } from 'mongoose';
export const PoiSchema: Schema = new Schema({
    name: String,
    position: {
        latitude: Number,
        longitude: Number,
    },
});
