import { Request, Response } from 'express';
import OrderService from '../services/orderService';
import statusCodes from '../statusCodes';
import AuthService from '../middlewares/auth';

export default class OrderController {
  constructor(private service: OrderService = new OrderService()) {}

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.service.findAll();
    res.status(statusCodes.OK).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    // const auth = new AuthService();
    const token = req.headers.authorization as string;
    const decoded = await AuthService.verifyToken(token);
    const userId = decoded.id;    
    const { productsIds } = req.body;
    const order = await this.service.create(userId, productsIds);
    return res.status(statusCodes.CREATED).json(order);
  };
}