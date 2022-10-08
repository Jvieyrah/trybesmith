import connection from '../models/connection';
import UserModel from '../models/userModel';
import User from '../interfaces/user.interface';
import AuthService from '../midlewares/auth';
// import treatedError from '../interfaces/error.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const { id, username } = await this.model.create(user);
    const token = await AuthService.generateToken({ id, username });   
    return token;
  }

  public async getByUsernameAndPassword(username: string, password: string): Promise<string> {
    const user = await this.model.getByUsernameAndPassword(username, password);
    if (!user) {
      return 'Username or password invalid';
    }
    const { id } = user;
    const token = await AuthService.generateToken({ id, username });

    return token;
  }
}