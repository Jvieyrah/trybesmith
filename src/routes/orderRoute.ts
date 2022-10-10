import { Router } from 'express';
import OrderController from '../controllers/orderController';
import Validator from '../middlewares/validator';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.findAll);
orderRouter.post('/', Validator.vToken, Validator.vOrder, orderController.create);

export default orderRouter;