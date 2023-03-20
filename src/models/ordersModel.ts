import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces';
import connection from './connection';

export default class OrdersModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders o
      INNER JOIN Trybesmith.products p
      ON o.id = p.order_id
      GROUP BY o.id`,
    );
    return result;
  }
}