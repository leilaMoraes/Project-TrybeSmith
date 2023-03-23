import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCode';

export function productsNameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  if (typeof name !== 'string') {
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
    return res.status(statusCodes.NO_CONTENT).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 2) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}

export function userNameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(statusCodes.NO_CONTENT).json({ message: '"username" must be a string' });
  }
  if (username.length <= 2) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
}

export function userVocationValidation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(statusCodes.NO_CONTENT).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length <= 2) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  next();
}

export function userLevelValidation(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(statusCodes.NO_CONTENT).json({ message: '"level" must be a number' });
  }
  if (level <= 0) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
}

export function userPasswordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(statusCodes.NO_CONTENT).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(statusCodes.NO_CONTENT)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
}