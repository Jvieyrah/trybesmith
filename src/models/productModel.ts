import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const {
      name,
      amount,
    } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [dataInsert] = await this.connection.execute<ResultSetHeader>(query, [
      name, amount,
    ]);
    const { insertId } = dataInsert;
    return {
      id: insertId,
      ...product,
    };
  }

  public async findAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Product[];
  }
}
