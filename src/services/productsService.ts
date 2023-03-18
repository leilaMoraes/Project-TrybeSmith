import IProducts from '../interfaces/productsInterface';
import IServices from '../interfaces/serviceInterface';
import ProductsModel from '../models/productsModel';
import statusCodes from '../utils/statusCode';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async create(product: IProducts): Promise<IServices> {
    const newProduct = await this.model.create(product);
    return { type: statusCodes.CREATED, message: newProduct };
  }

  async getAll(): Promise<IServices> {
    const products = await this.model.getAll();
    return { type: statusCodes.OK, message: products };
  }
}