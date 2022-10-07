import { Router } from 'express';
import ProductController from '../controllers/productController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.create);
productRouter.get('/', productController.findAll);

export default productRouter;