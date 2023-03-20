export interface IProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IServices {
  type: number;
  message: string | unknown;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IUsers extends ILogin {
  id?: number;
  vocation: string;
  level: number;
}

export interface IOrders {
  id: number;
  userId: number;
  productsIds: number[];
}