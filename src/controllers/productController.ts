import { Request, Response } from 'express';
import ProductService from '../services/productService';
import statusCodes from '../statusCodes';

export default class ProductController {
  constructor(private service: ProductService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const createProduct = await this.service.create(product);
    res.status(statusCodes.CREATED).json(createProduct);
  };

  public findAll = async (_req: Request, res: Response) => {
    const products = await this.service.findAll();
    res.status(statusCodes.OK).json(products);
  };
}