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
    const token = { token: this.generateToken({ username, password }) }; 
    return { type: statusCodes.CREATED, message: token };
  }

  async getLogin(user: ILogin): Promise<IServices> {
    const { username, password } = user;
    const token = { token: this.generateToken({ username, password }) };
    const noUsername = { message: '"username" is required' };
    const noPassword = { message: '"password" is required' };
    if (!username) return { type: statusCodes.BAD_REQUEST, message: noUsername };
    if (!password) return { type: statusCodes.BAD_REQUEST, message: noPassword };
    const login = await this.model.getLogin(user);
    console.log(login);
    const invalid = { message: 'Username or password invalid' };
    if (login === undefined || login.password !== password) {
      return { type: statusCodes.UNAUTHORIZED, message: invalid };
    }
    return { type: statusCodes.OK, message: token };
  }
}