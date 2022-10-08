import { Router } from 'express';
import OrderController from '../controllers/orderController';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.findAll);

export default orderRouter;