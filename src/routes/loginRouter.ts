import { Router } from 'express';
import UsersController from '../controllers/usersController';

const loginRouter = Router();

const controller = new UsersController();

loginRouter.post('/', controller.getLogin);

export default loginRouter;