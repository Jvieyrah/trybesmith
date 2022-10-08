import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }    

  public async findAll(): Promise<Order[]> {
    const query = `SELECT o.id, o.userId,
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY p.orderId`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}