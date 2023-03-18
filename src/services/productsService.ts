import IProducts from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async create(product: IProducts): Promise<IProducts> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}