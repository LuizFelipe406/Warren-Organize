import jwt = require('jsonwebtoken');
import { TokenValidator } from '../../presentation/protocols/token-validator';
import { JwtPayload } from './jwt-generate-adapter';

export default class JwtValidatorAdapter implements TokenValidator {
  private secret = process.env.JWT_SECRET || 'jwt_secret';

  validate(token: string | undefined): string | number {
    if (!token) throw new Error("token not found")

    try {
      const payload = jwt.verify(token, this.secret) as JwtPayload;
      return payload.id
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
      throw new Error("invalid token")
    }
  }
  
}