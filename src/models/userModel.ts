import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const {
      username,
      classe,
      level,
      password,
    } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const [dataInsert] = await this.connection.execute<ResultSetHeader>(query, [
      username, classe, level, password,
    ]);
    const { insertId } = dataInsert;
    return {
      id: insertId,
      ...user,
    };
  }

  public async getByUsernameAndPassword(username: string, password: string): Promise<User> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[user]] = await this.connection
      .execute<(User & RowDataPacket)[]>(query, [username, password]);
    return user as User;
  }
}
