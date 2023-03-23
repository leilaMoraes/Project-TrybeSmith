import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCode';

export function productsNameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  if (typeof name !== 'string') {
    console.log(typeof name !== 'string');
    return res.status(statusCodes.NO_CONTENT).json({ message: '"name" must be a string' });
  }
  if (name.length < 2) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

export function productsAmountValidation(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  if (typeof amount !== 'string') {
    console.log(typeof amount !== 'string');
    return res.status(statusCodes.NO_CONTENT).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 2) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}