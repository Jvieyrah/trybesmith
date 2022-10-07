import { Router } from 'express';
import UserController from '../controllers/userController';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.create);
// userRouter.get('/', userController.findAll);

export default userRouter;