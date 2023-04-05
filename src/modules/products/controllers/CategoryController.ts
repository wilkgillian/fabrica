import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import Category from '../entities/Category';

class CategoryController {
  async create(req: Request, res: Response): Promise<void> {
    const { parent, name } = req.body;
    const _id = uuidV4();
    try {
      const category = new Category({ _id, parent, name });
      await category.save();
      res.status(201).send({ category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const categorys = await Category.find();
      res.status(200).send({ categorys });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id = req.params._id;
    try {
      const category = await Category.findById(id);
      if (!category) {
        res.status(404).send({ message: 'category not found' });
      } else {
        res.status(200).send({ category });
      }
    } catch {
      res.status(400).send({ message: 'category not found' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params._id;
    try {
      const category = await Category.deleteOne({ _id: id });
      res.status(200).send({ message: 'category deleted', category: category });
    } catch {
      res.status(400).send({ message: 'category not found' });
    }
  }
}

export default CategoryController;
