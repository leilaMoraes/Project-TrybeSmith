import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces';
import connection from './connection';

export default class UsersModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(user: IUsers): Promise<IUsers> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return { id: insertId, ...user };
  }
}