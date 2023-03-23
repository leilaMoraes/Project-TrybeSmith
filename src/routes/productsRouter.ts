import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import { productsNameValidation, productsAmountValidation } from '../middlewares/index';

const productsRouter = Router();

const controller = new ProductsController();

productsRouter.post('/', productsNameValidation, productsAmountValidation, controller.create);
productsRouter.get('/', controller.getAll);

export default productsRouter;