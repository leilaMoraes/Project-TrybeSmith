import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.service.getAll();
    return res.status(type).json(message);
  };
}