import { model, Schema } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';

export interface Category {
  _id: string;
  parent: Category | null;
  name: string;
}

const ProductSchema = new Schema({
  _id: { type: String, defaultValue: uuidV4() },
  parent: { type: String || null, required: true },
  name: { type: String, required: true }
});

export default model<Category>('Category', ProductSchema);
