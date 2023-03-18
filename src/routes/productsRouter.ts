import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const controller = new ProductsController();

productsRouter.post('/', controller.create);
productsRouter.get('/', controller.getAll);

export default productsRouter;