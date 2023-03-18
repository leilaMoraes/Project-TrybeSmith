import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  create = async (req: Request, res: Response) => {
    const { type, message } = await this.service.create(req.body);
    return res.status(type).json(message);
  };
}