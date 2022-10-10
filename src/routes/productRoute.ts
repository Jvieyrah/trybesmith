import { Router } from 'express';
import ProductController from '../controllers/productController';
import Validator from '../middlewares/validator';

const productRouter = Router();

const productController = new ProductController();
// const validator = new Validator();

productRouter.post('/', Validator.vProduct, productController.create);
productRouter.get('/', productController.findAll);

export default productRouter;