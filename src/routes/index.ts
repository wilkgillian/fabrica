import { Router } from 'express';
import { categoriesRoutes } from './category.routes';
import { productsRoutes } from './products.routes';

const router = Router();

router.use('/product', productsRoutes);
router.use('/category', categoriesRoutes);

export { router };
