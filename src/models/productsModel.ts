import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProducts } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  async getAll(): Promise<IProducts[]> {
    const [result] = await this.connection.execute<IProducts[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return result;
  }
}