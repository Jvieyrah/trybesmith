import { Router } from 'express';
import UserController from '../controllers/userController';
import validateLogin from '../midlewares/validator';

const loginRouter = Router();

const userController = new UserController();
// const validator = new validateLogin();

loginRouter.post('/', validateLogin, userController.login);
// userRouter.get('/', userController.findAll);

export default loginRouter;