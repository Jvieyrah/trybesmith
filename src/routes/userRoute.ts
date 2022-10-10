import { Router } from 'express';
import UserController from '../controllers/userController';
import Validator from '../middlewares/validator';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', Validator.vUser, userController.create);
// userRouter.get('/', userController.findAll);

export default userRouter;