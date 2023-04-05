import { Router } from 'express';
import ProductController from '../modules/products/controllers/ProductController';

const productsRoutes = Router();

const createProduct = new ProductController();

productsRoutes.get('/', createProduct.list);
productsRoutes.post('/', createProduct.create);
productsRoutes.get('/:_id', createProduct.getById);
productsRoutes.patch('/:_id');
productsRoutes.delete('/:_id');
productsRoutes.put('/:id');

export { productsRoutes };
