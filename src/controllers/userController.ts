import { Request, Response } from 'express';
import UserService from '../services/userService';
import statusCodes from '../statusCodes';

export default class UserController {
  constructor(private service: UserService = new UserService()) {}
    
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.create(user);
    res.status(statusCodes.CREATED).json({ token });
  };
}
