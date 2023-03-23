import { Router } from 'express';
import UsersController from '../controllers/usersController';
import { userLevelValidation,
  userNameValidation,
  userPasswordValidation,
  userVocationValidation } from '../middlewares';

const usersRouter = Router();

const controller = new UsersController();

usersRouter.post(
  '/',
  userNameValidation,
  userVocationValidation,
  userLevelValidation,
  userPasswordValidation,
  controller.create,
);

export default usersRouter;