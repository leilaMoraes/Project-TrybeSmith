import jwt, { SignOptions } from 'jsonwebtoken';
import { IUsers, IServices, ILogin } from '../interfaces';
import UsersModel from '../models/usersModel';
import statusCodes from '../utils/statusCode';

export default class ProductsService {
  model: UsersModel;

  JWT_SECRET: string;

  JWT_CONFIG: SignOptions;

  constructor() {
    this.model = new UsersModel();
    this.JWT_SECRET = 'secret';
    this.JWT_CONFIG = {
      algorithm: 'HS256',
      expiresIn: '15m',
    };
  }

  generateToken(payload: ILogin): string {
    return jwt.sign(payload, this.JWT_SECRET, this.JWT_CONFIG);
  }

  async create(user: IUsers): Promise<IServices> {
    const newUser = await this.model.create(user);
    const { username, password } = newUser;
    return { type: statusCodes.CREATED, message: this.generateToken({ username, password }) };
  }
}