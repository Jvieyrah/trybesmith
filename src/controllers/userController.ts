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

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const response = await this.service.getByUsernameAndPassword(username, password);
    if (response === 'Username or password invalid') {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: response });
    }
    const token = response;
    res.status(statusCodes.OK).json({ token });
  };
}
