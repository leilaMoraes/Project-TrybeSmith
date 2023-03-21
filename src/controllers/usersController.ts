import { Request, Response } from 'express';
import UsersService from '../services/usersService';

export default class ProductsController {
  service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  create = async (req: Request, res: Response) => {
    const { type, message } = await this.service.create(req.body);
    return res.status(type).json(message);
  };

  getLogin = async (req: Request, res: Response) => {
    const { type, message } = await this.service.getLogin(req.body);
    return res.status(type).json(message);
  };
}