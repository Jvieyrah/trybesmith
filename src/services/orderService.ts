import connection from '../models/connection';
import OrderModel from '../models/ordersModel';
import Order from '../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;
    
  constructor() {
    this.model = new OrderModel(connection);
  }
    
  public async findAll(): Promise<Order[]> {
    const orders = await this.model.findAll();
    return orders;
  }
}