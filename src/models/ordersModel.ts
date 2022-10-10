import { Pool, ResultSetHeader } from 'mysql2/promise';
import ProductModel from './productModel';
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

  public async create(userId: number, productsIds: number[]): Promise<Order> {
    const orderQuery = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(orderQuery, [userId]);
    // const newOrder = { id: insertId } as ;
    // const orderID = newOrder.id as number;
    const productModel = new ProductModel(this.connection);
    const updateOrderIDs = productsIds
      .map((productId) => productModel.update(productId, insertId));

    Promise.all(updateOrderIDs);

    return { userId, productsIds };
  }
}