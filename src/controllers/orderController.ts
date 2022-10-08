import { Request, Response } from 'express';
import OrderService from '../services/orderService';
import statusCodes from '../statusCodes';

export default class OrderController {
  constructor(private service: OrderService = new OrderService()) {}

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.service.findAll();
    res.status(statusCodes.OK).json(orders);
  };
}