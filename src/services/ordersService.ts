import { IServices } from '../interfaces';
import OrdersModel from '../models/productsModel';
import statusCodes from '../utils/statusCode';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async getAll(): Promise<IServices> {
    const orders = await this.model.getAll();
    return { type: statusCodes.OK, message: orders };
  }
}