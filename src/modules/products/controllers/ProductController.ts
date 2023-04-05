import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import Product from '../entities/Product';

class ProductController {
  async create(req: Request, res: Response): Promise<void> {
    const { categories, name, qty, price } = req.body;
    const _id = uuidV4();
    try {
      const product = new Product({ _id, categories, name, qty, price });
      await product.save();
      res.status(201).send({ product });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.find();
      res.status(200).send({ products });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id = req.params._id;
    try {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).send({ message: 'Product not found' });
      } else {
        res.status(200).send({ product });
      }
    } catch {
      res.status(400).send({ message: 'Product not found' });
    }
  }
}

export default ProductController;
