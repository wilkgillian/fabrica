import { model, Schema } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';
import { Category } from './Category';

export interface IProduct {
  _id?: string;
  categories: Category[];
  name: string;
  qty: number;
  price: number;
}

const ProductSchema = new Schema({
  _id: { type: String, defaultValue: uuidV4() },
  categories: { type: Array, required: true },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true }
});

export default model<IProduct>('Product', ProductSchema);
