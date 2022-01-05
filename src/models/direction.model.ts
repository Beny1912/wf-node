import mongoose, { Schema, Document } from "mongoose";

export interface IDirection extends Document {
  street: string;
  streetNumber: string;
  town: string;
  postalCode: string;
  country: string;
}

const DirectionSchema: Schema = new Schema({
  street: { type: String, required: true },
  streetNumber: { type: String, required: true },
  town: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

export default mongoose.model<IDirection>("Direction", DirectionSchema);
