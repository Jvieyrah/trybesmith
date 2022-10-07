import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JTW_SECRET || 'secret';

export default class AuthService {  
  public static async generateToken(payload: object): Promise<string> {
    const token = jwt.sign(payload, secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  }
  // public static async verifyToken(token: string): Promise<object> {
  //     const decoded = jwt.verify(token, segredo);
  //     return decoded;
  // }
}