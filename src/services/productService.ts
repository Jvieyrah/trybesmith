import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.model.findAll();
    return products;
  }
}
