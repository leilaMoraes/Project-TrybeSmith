import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRouter = Router();

const controller = new OrdersController();

ordersRouter.get('/', controller.getAll);

export default ordersRouter;