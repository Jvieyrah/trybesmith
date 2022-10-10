import { Router } from 'express';
import UserController from '../controllers/userController';
import Validator from '../middlewares/validator';

const loginRouter = Router();

const userController = new UserController();
// const validator = new validateLogin();

loginRouter.post('/', Validator.vLogin, userController.login);
// userRouter.get('/', userController.findAll);

export default loginRouter;