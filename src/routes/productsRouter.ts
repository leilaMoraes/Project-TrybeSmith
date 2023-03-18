import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const controller = new ProductsController();

productsRouter.post('/', controller.create);

export default productsRouter;