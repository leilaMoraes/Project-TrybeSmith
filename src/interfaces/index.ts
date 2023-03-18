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

export interface IUsers {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}