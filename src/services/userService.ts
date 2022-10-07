import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/user.interface';
import AuthService from '../midlewares/auth';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const { id } = await this.model.create(user);
    const token = await AuthService.generateToken({ id });   

    return token;
  }
}