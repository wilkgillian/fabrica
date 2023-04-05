import { model, Schema } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';

export interface User {
  _id: string;
  name: string;
  username: string;
}

const ProductSchema = new Schema({
  _id: { type: String, defaultValue: uuidV4() },
  name: { type: String, required: true },
  username: { type: String, required: true }
});

export default model<User>('User', ProductSchema);
