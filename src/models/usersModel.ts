import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUsers } from '../interfaces';
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

  async getLogin(user: ILogin): Promise<IUsers> {
    const { username } = user;
    const [[result]] = await this.connection.execute<IUsers & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    return result as IUsers;
  }
}