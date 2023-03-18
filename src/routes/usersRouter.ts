import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersRouter = Router();

const controller = new UsersController();

usersRouter.post('/', controller.create);

export default usersRouter;