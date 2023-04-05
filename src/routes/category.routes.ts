import { Router } from 'express';
import CategoryController from '../modules/products/controllers/CategoryController';

const categoriesRoutes = Router();

const category = new CategoryController();

categoriesRoutes.get('/', category.list);
categoriesRoutes.post('/', category.create);
categoriesRoutes.get('/:_id', category.getById);
categoriesRoutes.patch('/:_id');
categoriesRoutes.delete('/:_id', category.delete);
categoriesRoutes.put('/:id');

export { categoriesRoutes };
